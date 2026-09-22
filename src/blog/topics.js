/**
 * The shelves the blog is sorted into. `tone` picks the pencil colour used for
 * the topic's underline and tag (see the --tone-* variables in blog.css), so a
 * topic reads the same colour on the index, on its cards and inside a post.
 */
export const TOPICS = [
  { id: 'research-basics', label: 'research basics', tone: 'amber' },
  { id: 'literature-reviews', label: 'literature reviews', tone: 'green' },
  { id: 'plagiarism-and-integrity', label: 'plagiarism and integrity', tone: 'pink' },
  { id: 'writing', label: 'writing the paper', tone: 'blue' },
  { id: 'publishing', label: 'publishing', tone: 'red' },
]

export const TOPICS_BY_ID = Object.fromEntries(TOPICS.map((topic) => [topic.id, topic]))
