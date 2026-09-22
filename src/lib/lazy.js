import { useEffect, useReducer } from 'react'

/**
 * A small module cache for the pages that are split out of the main bundle
 * (the blog index, the post layout and each post's content).
 *
 * React.lazy would work for a visitor clicking around, but not for the
 * prerendered blog pages: those arrive as finished HTML, and hydrating them
 * needs the very same tree on the first client render. So the entry points
 * load whatever the current URL needs before rendering (see preloadForPath in
 * src/routes.js), and components read it back synchronously from here. Only a
 * visitor moving to a page whose code has not arrived yet ever sees a loading
 * state, and that goes through useModule below.
 */

const resolved = new Map()
const failed = new Map()
const pending = new Map()

export function preloadModule(key, importer) {
  if (resolved.has(key)) return Promise.resolve(resolved.get(key))

  if (!pending.has(key)) {
    pending.set(
      key,
      importer().then(
        (mod) => {
          resolved.set(key, mod)
          failed.delete(key)
          pending.delete(key)
          return mod
        },
        (error) => {
          failed.set(key, error)
          pending.delete(key)
          throw error
        },
      ),
    )
  }

  return pending.get(key)
}

export function peekModule(key) {
  return resolved.get(key)
}

/**
 * The module for `key`, or undefined while it loads. `error` is set when the
 * chunk could not be fetched, which in practice means a deploy replaced the
 * hashed file names under an open tab; a reload fixes it.
 */
export function useModule(key, importer) {
  const [, rerender] = useReducer((n) => n + 1, 0)

  useEffect(() => {
    if (!key || resolved.has(key)) return undefined

    let alive = true
    preloadModule(key, importer).then(
      () => alive && rerender(),
      () => alive && rerender(),
    )

    return () => {
      alive = false
    }
    // The importer is tied to the key, so the key alone decides a reload.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return { mod: key ? resolved.get(key) : undefined, error: key ? failed.get(key) : undefined }
}
