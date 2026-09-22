/**
 * The colours every drawing uses. Ink is a warm near-black, like a fountain
 * pen on cream paper. The five pencils are the logo's amber, pink, green and
 * blue plus a red, each in four strengths: a tint for flat fills, a mid tone,
 * the pencil stroke itself, and a deep shade for shadows.
 */

export const INK = '#2b2521'
export const INK_SOFT = '#5d524a'
export const INK_FAINT = '#9b8f82'

/** A sheet of paper, its folded-over corner, and the lines of text on it. */
export const PAPER = '#fdfaf3'
export const PAPER_SHADE = '#efe6d5'
export const TEXT_LINE = '#cbbda6'

/** The cream the drawings sit on (matches the figure frame in blog.css). */
export const CREAM = '#f7f1e4'

export const TONES = {
  amber: { tint: '#fde5b9', mid: '#f7c56c', ink: '#e8931f', deep: '#b26d12' },
  pink: { tint: '#fcdde8', mid: '#f5a9c7', ink: '#e56d9d', deep: '#b54679' },
  green: { tint: '#dcefd8', mid: '#a3d4a1', ink: '#55a55f', deep: '#357843' },
  blue: { tint: '#dce8f7', mid: '#a7c5eb', ink: '#4a82cc', deep: '#2e5d9d' },
  red: { tint: '#f9dcd2', mid: '#efa48f', ink: '#d0583f', deep: '#9b3927' },
  brown: { tint: '#ead8c1', mid: '#c89f76', ink: '#8b5b37', deep: '#5c3a21' },
  grey: { tint: '#ece7de', mid: '#d0c7b9', ink: '#8e8478', deep: '#5d554d' },
}

export const TONE_NAMES = Object.keys(TONES)

/** Soil, chai, wood: the browns the scenes keep reaching for. */
export const EARTH = {
  soil: '#b88a62',
  soilDeep: '#8a603e',
  soilLine: '#6d4a2f',
  pebble: '#d9c3a2',
  chai: '#c98a4b',
  wood: '#c9a57c',
  grass: '#6c9a4f',
}
