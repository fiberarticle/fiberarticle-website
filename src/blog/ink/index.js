/**
 * The whole drawing kit, from one import:
 *
 *   import { Scene, Pip, Place, Anim, Sheet, Ground } from '../../ink/index.js'
 *
 * See stage.jsx for how scenes play, prims.jsx for the two rules of
 * positioning and strokes, cast.jsx for the characters and props.jsx for
 * the objects.
 */
export * from './palette.js'
export * from './sketch.js'
export * from './prims.jsx'
export * from './cast.jsx'
export * from './props.jsx'
export * from './sets.jsx'
export { Scene, InkFigure, useStage } from './stage.jsx'
export { default as InkDefs } from './defs.jsx'
