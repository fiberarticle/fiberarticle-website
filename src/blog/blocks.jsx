import Inline from './inline.jsx'
import { Tape } from './ui.jsx'

/**
 * The building blocks a post's sections are written in. A block is either a
 * plain string (a paragraph) or one of these objects:
 *
 *   { note: '...', label: 'tip', tone: 'red' }        a margin note
 *   { quote: '...', by: '...', tone: 'amber' }        a sticky-note pull quote
 *   { list: ['...'], style: 'dots' | 'check' | 'cross' | 'numbers' }
 *   { steps: [{ title: '...', text: '...' }], tone: 'green' }
 *   { compare: { left: { title, items, mark, tone }, right: { ... } } }
 *   { define: 'term', hint: 'noun', meaning: '...', tone: 'blue' }
 *   { table: { head: ['...'], rows: [['...']] }, tone: 'amber' }
 *
 * Every piece of text may use the inline markup in inline.jsx.
 */

function List({ items, style = 'dots' }) {
  const Tag = style === 'numbers' ? 'ol' : 'ul'
  return (
    <Tag className={`hand-list list-${style}`}>
      {items.map((item, i) => (
        <li key={i}>
          <Inline text={item} />
        </li>
      ))}
    </Tag>
  )
}

export function Block({ block }) {
  if (typeof block === 'string') {
    return (
      <p>
        <Inline text={block} />
      </p>
    )
  }

  if (block.note) {
    return (
      <aside className={`note tone-${block.tone || 'red'}`}>
        <span className="note-label">{block.label || 'tip'}:</span>
        <p>
          <Inline text={block.note} />
        </p>
      </aside>
    )
  }

  if (block.quote) {
    return (
      <blockquote className={`sticky-quote tone-${block.tone || 'amber'}`}>
        <Tape />
        <p>
          <Inline text={block.quote} />
        </p>
        {block.by ? <footer>{block.by}</footer> : null}
      </blockquote>
    )
  }

  if (block.list) return <List items={block.list} style={block.style} />

  if (block.steps) {
    return (
      <ol className={`steps tone-${block.tone || 'amber'}`}>
        {block.steps.map((step, i) => (
          <li key={i}>
            <span className="step-title">
              <Inline text={step.title} />
            </span>
            <Inline text={step.text} />
          </li>
        ))}
      </ol>
    )
  }

  if (block.compare) {
    return (
      <div className="compare">
        {[block.compare.left, block.compare.right].map((side, i) => (
          <div key={i} className={`compare-card tone-${side.tone || (i ? 'green' : 'red')}`}>
            <h3>
              <span className="scribble">{side.title}</span>
            </h3>
            <List items={side.items} style={side.mark || (i ? 'check' : 'cross')} />
          </div>
        ))}
      </div>
    )
  }

  if (block.define) {
    return (
      <dl className={`define tone-${block.tone || 'blue'}`}>
        <dt>
          {block.define}
          {block.hint ? <span className="type">{block.hint}</span> : null}
        </dt>
        <dd>
          <Inline text={block.meaning} />
        </dd>
      </dl>
    )
  }

  if (block.table) {
    return (
      <div className={`hand-table-wrap tone-${block.tone || 'amber'}`}>
        <table className="hand-table">
          <thead>
            <tr>
              {block.table.head.map((cell, i) => (
                <th key={i} scope="col">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (
                  <td key={c}>
                    <Inline text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  throw new Error(`Unknown post block: ${JSON.stringify(block).slice(0, 80)}`)
}

export function Blocks({ blocks }) {
  return blocks.map((block, i) => <Block key={i} block={block} />)
}
