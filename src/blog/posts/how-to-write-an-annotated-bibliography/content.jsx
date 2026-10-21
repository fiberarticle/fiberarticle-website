import Hero from './hero.jsx'
import {
  ChecklistScene,
  ExampleScene,
  FormatScene,
  NoteScene,
  SourcesScene,
  TypesScene,
  WhatScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'every source on the list, and a short note in your own words under each one',
  },

  intro: [
    'Arpita Ghosh is a first year PhD scholar in Sociology at a university in Kolkata. Her research follows women domestic workers who catch the early local train from the southern suburbs to cook and clean in city homes, and travel back every evening. Before her coursework ended, her guide, Dr. Mukherjee, asked her for an annotated bibliography of twenty sources in APA style.',
    'Arpita finished it in one evening. Under each reference she pasted the abstract of the paper. Dr. Mukherjee read the first page and looked up. "These are the authors describing their own work," she said. "I asked what *you* think of it. Which of these will you actually use, and why?"',
    'This blog explains how to write an annotated bibliography the way Arpita learnt to write hers: what it is, the types of annotation, how to choose and read your sources, how to write each annotation, the format in APA and MLA, a full example and the mistakes to check for before you submit.',
  ],

  sections: [
    {
      id: 'what-is-an-annotated-bibliography',
      title: 'What is an annotated bibliography?',
      Art: WhatScene,
      caption: 'a bibliography lists the sources; an annotated one adds a note under each',
      body: [
        {
          define: 'Annotated bibliography',
          hint: 'noun',
          meaning: 'A list of sources, each cited in full and followed by a short paragraph, the **annotation**, that describes the source and usually judges how good and how useful it is.',
          tone: 'green',
        },
        'Cornell University Library\'s guide puts the length of a typical annotation at about 150 words. Its job is to tell the reader how relevant, accurate and good each source is. A bare bibliography only tells you that a source exists. The annotation tells you whether it is worth your time.',
        'It is easy to confuse an annotation with an abstract, as Arpita did. As Cornell\'s guide explains, an abstract is purely descriptive, and the author writes it to present their own work. An annotation is descriptive and critical: it can comment on the author\'s point of view, their authority and how clearly the work is written. Only you can write that part.',
        {
          compare: {
            left: {
              title: 'an abstract',
              items: ['written by the authors', 'describes the work only', 'appears at the start of the paper', 'the same for every reader'],
              mark: 'dots',
              tone: 'amber',
            },
            right: {
              title: 'an annotation',
              items: ['written by you', 'describes and judges the work', 'sits under the citation in your list', 'shaped by your own project'],
              mark: 'check',
              tone: 'green',
            },
          },
        },
        'An annotated bibliography is also not a literature review. The bibliography deals with one source at a time, in a list. A review weaves the same sources into one argument, organised by themes, as our guide on [what a literature review is](/blogs/what-is-a-literature-review/) explains. Many students write the annotated bibliography first, and the review later grows out of it.',
      ],
    },
    {
      id: 'types-of-annotated-bibliography',
      title: 'Types of annotations: descriptive, evaluative and reflective',
      Art: TypesScene,
      caption: 'describe the source, judge it, and connect it to your own work',
      body: [
        'Annotations do one or more of three jobs. The Purdue Online Writing Lab names them as summarise, assess and reflect, and says an annotation may do one, some or all of them.',
        {
          table: {
            head: ['type', 'what it does', 'a question it answers'],
            rows: [
              ['descriptive', 'summarises the main argument, the scope and the topics of the source', 'What is this work about?'],
              ['evaluative', 'judges the source: its evidence, its reliability, any bias, the author\'s authority', 'Is this a good source?'],
              ['reflective', 'explains how the source fits your own research', 'How will I use it?'],
            ],
          },
          tone: 'green',
        },
        'The University of North Carolina Writing Center splits the descriptive kind further. An **informative** annotation reads like a short summary of the source\'s argument. An **indicative** one only says which questions and issues the work covers, without giving its conclusions. The handout adds that most annotated bibliographies combine summary and evaluation.',
        {
          note: 'read the assignment for clue words. "Critical" or "analytical" means you must evaluate, not just summarise. If the brief says nothing, ask. Purdue\'s guide says to check your instructor\'s guidelines first, and that advice holds whatever the assignment.',
          label: 'tip',
          tone: 'green',
        },
        'Dr. Mukherjee wanted all three in every entry: what the source says, how strong it is, and what it does for Arpita\'s study.',
      ],
    },
    {
      id: 'choose-and-read-your-sources',
      title: 'Choose your sources and read them properly',
      Art: SourcesScene,
      caption: 'many sources go in at the top; the useful few come out ready to annotate',
      body: [
        'A good annotated bibliography starts with good choices. Cornell\'s guide begins with research, not writing: find and record the books, articles and documents that may help, look through each one briefly, and then keep the ones that give a **range of perspectives** on your topic.',
        'Twenty sources that all say the same thing teach your reader very little. Arpita\'s first list was nearly all newspaper reports, so she rebuilt it to include:',
        {
          list: [
            'a book based on long fieldwork with domestic workers in Kolkata',
            'journal articles on women\'s paid work in Indian cities',
            'studies on daily commuting by suburban train',
            'government and labour reports on informal work',
            'one or two sources she disagreed with, so she could say why',
          ],
          style: 'dots',
        },
        'Then read each source well enough to judge it. You cannot evaluate a paper from its abstract alone. For a journal article, read the introduction, the methods, the main results and the limitations; our guide on [how to read a research paper](/blogs/how-to-read-a-research-paper/) shows a quick and careful way to do it. For a book, read the introduction, the conclusion and the chapters closest to your question.',
        {
          note: 'write the full citation the moment you open a source: authors, year, title, journal or publisher, volume, pages and DOI. Hunting for a missing page number at midnight is the most avoidable job in research.',
          label: 'habit',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'how-to-write-an-annotation',
      title: 'How to write an annotation, step by step',
      Art: NoteScene,
      caption: 'four short parts make one annotation of about a hundred and fifty words',
      body: [
        'Write each annotation straight after reading the source, while it is fresh. Most follow the same order.',
        {
          steps: [
            {
              title: 'Cite it in the required style.',
              text: 'The citation comes first, exactly as it would appear in your reference list, in the style your department uses.',
            },
            {
              title: 'Say what the source is about.',
              text: 'In one or two sentences, give its main argument or question and its scope. Cornell calls this the central theme and scope.',
            },
            {
              title: 'Say how it was done.',
              text: 'Name the kind of evidence: a survey of how many people, interviews, an experiment, archival work, a review of other studies.',
            },
            {
              title: 'Judge it.',
              text: 'Comment on the author\'s authority or background, the intended audience, the strength of the evidence and any limits. Compare it with another source on your list if that helps.',
            },
            {
              title: 'Connect it to your work.',
              text: 'Explain in a sentence how the source helps your project, or where it falls short for your question.',
            },
          ],
          tone: 'pink',
        },
        'Write in your own words. The MLA Style Center advises that annotations should not rehash minor details, cite evidence, quote the author or recount the steps of an argument. If you keep one phrase from the source, put it in quotation marks with the page number. Restating a source fairly in your own words is a skill worth practising, because it is also what keeps you clear of plagiarism.',
        'How long should each annotation be? Cornell\'s guide gives about 150 words, and many university guides suggest 100 to 200. Purdue notes that annotations can run from a couple of sentences to a couple of pages, depending on their purpose. The number of sources and the word limit are set by your instructor, so follow the brief.',
      ],
    },
    {
      id: 'annotated-bibliography-format',
      title: 'Annotated bibliography format in APA and MLA',
      Art: FormatScene,
      caption: 'the citation keeps its hanging indent; the annotation sits indented below it',
      body: [
        'Each entry has the same shape in every style: the full citation, then the annotation directly below it. What changes from style to style is the spacing, the indent and the order. If you are unsure how APA and MLA citations themselves differ, start with our guide to [citation styles](/blogs/citation-styles-explained/).',
        {
          table: {
            head: ['', 'APA 7th edition', 'MLA 9th edition'],
            rows: [
              ['where the rule is', 'section 9.51 of the *Publication Manual*', 'the *MLA Handbook*; library guides point to section 5.132'],
              ['the citation', 'as in a reference list, with a hanging indent', 'as in a works cited list'],
              ['the annotation', 'on the next line, the whole block indented half an inch from the left margin', 'indented one inch from the left margin, as library guides based on the Handbook describe'],
              ['more than one paragraph', 'indent the first line of each later paragraph', 'indent each paragraph, with no extra space between them'],
              ['spacing', 'double spaced throughout', 'double spaced throughout'],
              ['order', 'alphabetical by the first author\'s surname', 'usually alphabetical by author or title; the MLA also allows order by date or by subject'],
              ['title', '"Annotated Bibliography" is common; follow your instructor', '"Annotated Bibliography" or "Annotated List of Works Cited"'],
            ],
          },
          tone: 'blue',
        },
        'For APA, library guides also advise the usual paper settings, such as one inch margins and page numbers in the top right corner, and note that your instructor\'s rules on length and focus override the general guidance.',
        {
          note: 'the MLA Style Center says annotations are generally written as short phrases rather than full sentences. Unless your instructor asks for phrases, full sentences are the safer choice in a research course.',
          label: 'note',
          tone: 'blue',
        },
        'Some departments in Indian universities ask for their own format, especially in coursework, so check the handout before you follow any style guide to the letter. Dr. Mukherjee\'s instructions were short: APA 7th edition, alphabetical, double spaced, 120 to 180 words an annotation.',
      ],
    },
    {
      id: 'annotated-bibliography-example',
      title: 'An annotated bibliography example',
      Art: ExampleScene,
      caption: 'the first draft pasted the publisher\'s summary; the second is in Arpita\'s words',
      body: [
        'Here is one of Arpita\'s entries. The source is a real book: *Domestic Days*, by Samita Sen and Nilanjana Sengupta, published by Oxford University Press in 2016. Her first draft repeated the publisher\'s description. This is the rewritten entry, in APA style.',
        {
          quote: 'Sen, S., & Sengupta, N. (2016). *Domestic days: Women, work, and politics in contemporary Kolkata*. Oxford University Press. https://doi.org/10.1093/acprof:oso/9780199461165.001.0001',
          by: 'the citation',
          tone: 'blue',
        },
        {
          note: 'Sen and Sengupta study part-time women domestic workers in middle-class Kolkata homes, drawing on the women\'s own accounts of their work and lives in two settlements in the city. The book follows them from their homes to their employers\' homes, with chapters on migration, the labour market, marriage and motherhood, and the policies and organisations that have long ignored this work. Its strength is that it rests on detailed fieldwork and lets the workers speak for themselves; its focus on two settlements means its findings may not hold for every group of workers. For my study, it gives the clearest picture of what the working day looks like at the employer\'s end. I will need other sources on the train journey itself, because my participants travel in daily from the southern suburbs.',
          label: 'annotation',
          tone: 'green',
        },
        'Read it again and you can see each part from the steps above. The first two sentences describe the book and its method. The third judges its strength and its limit. The last two connect it to Arpita\'s own question, and they also show the gap her other sources must fill.',
        'Notice what is missing too: no long quotation, no list of every chapter, no praise without a reason.',
      ],
    },
    {
      id: 'mistakes-and-a-last-check',
      title: 'Common mistakes and a last check',
      Art: ChecklistScene,
      caption: 'a last check before the list goes to the guide',
      body: [
        'Most weak annotated bibliographies fail in the same few ways.',
        {
          compare: {
            left: {
              title: 'avoid',
              items: [
                'pasting the abstract or the publisher\'s summary',
                'summary only, when the brief asks you to evaluate',
                'long quotations from the source',
                'citations in mixed styles, or with missing details',
                'praise such as "very useful" with no reason',
              ],
            },
            right: {
              title: 'do instead',
              items: [
                'describe the source in your own words',
                'add a line on how strong the source is',
                'restate ideas, and quote only a key phrase',
                'one style, checked entry by entry',
                'say exactly what the source does for your project',
              ],
            },
          },
        },
        'A reference manager such as Zotero or Mendeley can store your sources, format the citations and keep your notes next to each one. Check its citations against the style guide anyway.',
        {
          list: [
            'Every source on the list is one you have actually read.',
            'Each citation is complete and in the required style.',
            'Each annotation describes, judges and connects, as the brief asks.',
            'The annotations are in your own words, within the word limit.',
            'The entries are in the right order, with the right spacing and indents.',
          ],
          style: 'check',
        },
        'Your annotations are also the start of something bigger. When you move on to the review, the notes from your bibliography can go straight into a [literature review matrix](/blogs/literature-review-matrix/), where you compare the sources side by side.',
        'Arpita rewrote all twenty entries over the next week. Dr. Mukherjee read them, underlined two lines where Arpita had disagreed with an author and given a reason, and wrote in the margin: "Now I can see your thesis taking shape."',
      ],
    },
  ],

  takeaways: [
    'An annotated bibliography lists your sources, each followed by a short paragraph in your own words.',
    'An annotation is not an abstract: it describes the source and usually judges it and links it to your project.',
    'Choose sources that give a range of perspectives, and read each one well enough to judge it.',
    'A typical annotation is about 150 words, but your instructor sets the length and the number of sources.',
    'In APA the annotation is indented half an inch below the citation; library guides give one inch for MLA.',
    'Check every citation, keep quotations rare, and say exactly how each source helps your work.',
  ],

  faq: [
    {
      q: 'How long should an annotated bibliography be?',
      a: 'Your instructor usually sets the number of sources. Each annotation is often about 150 words, as Cornell\'s guide suggests, though Purdue notes they can range from a couple of sentences to a couple of pages depending on the purpose.',
    },
    {
      q: 'What is the difference between an annotated bibliography and a literature review?',
      a: 'An annotated bibliography deals with sources one at a time, each with its own note. A literature review brings the sources together into one argument, organised by themes. The bibliography often comes first and feeds the review.',
    },
    {
      q: 'Can I use "I" in an annotation?',
      a: 'In the reflective part, where you explain how a source helps your project, many instructors accept the first person. Some library guides advise the third person throughout, so follow your assignment brief.',
    },
  ],

  cta: {
    title: 'Find the sources worth annotating',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref for papers on your question, reads the open-access ones, and shows the source behind every line it writes, so you can choose what to read in full. One payment unlocks all of it, for good.',
  },
}
