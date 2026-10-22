import Hero from './hero.jsx'
import {
  AiScene,
  DefineScene,
  ExampleScene,
  LengthScene,
  ReadScene,
  SeminarScene,
  StepsScene,
  VersusScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'twenty-two pages in, one small card out',
  },

  intro: [
    'Sourav Mondal is in the first year of his MSc in Anthropology at a university in Midnapore. Every Friday his department holds a paper-reading seminar. Each student is given one journal article, hands in a summary of no more than 300 words, and talks about it for five minutes. Sourav\'s first paper was twenty-two pages long, on what young children eat in Santal villages and how well they grow.',
    'He worked on it for three evenings. His summary came to 640 words, and most of them retold the introduction, often in the authors\' own phrases. His teacher, Dr. Moumita Das, returned it with one line in red: "I asked what the paper found. You told me what the paper said."',
    'This blog follows what Sourav learnt over the next few Fridays: how to summarize a research paper in your own words, what a summary must include, how long it should be, how it differs from an abstract, and an example you can copy the shape of.',
  ],

  sections: [
    {
      id: 'what-is-a-research-paper-summary',
      title: 'What is a summary of a research paper?',
      Art: DefineScene,
      caption: 'a long paper on one side, and four short answers on the other',
      body: [
        {
          define: 'research paper summary',
          hint: 'noun',
          meaning: 'A short account, in your own words, of what a paper asked, how the authors went about answering it, what they found and what they concluded, written so that someone who has not read the paper can follow it.',
          tone: 'green',
        },
        'That last part is the real test. Editage, an editing company that publishes guides for researchers, puts it this way: someone who has not read the paper should understand its purpose and findings from your summary alone.',
        'Students write summaries for:',
        {
          list: [
            'class assignments and seminars, like Sourav\'s Friday paper;',
            'journal clubs, where one person explains a paper to the group;',
            'notes for a literature review, so you can compare papers later;',
            'the background section of a proposal.',
          ],
          style: 'dots',
        },
        'Summarizing is different from paraphrasing. A paraphrase restates one passage in your own words at roughly the same length. A summary keeps only the main points of the whole paper. Our guide to [paraphrasing, summarising and quoting](/blogs/paraphrasing-vs-summarising-vs-quoting/) shows the three side by side on one passage.',
      ],
    },
    {
      id: 'summary-vs-abstract',
      title: 'Summary vs abstract: what is the difference?',
      Art: VersusScene,
      caption: 'the abstract comes with the paper; the summary is yours',
      body: [
        'Sourav\'s first thought was to rewrite the abstract. Many students try this, but the two do different jobs.',
        {
          table: {
            head: ['', 'abstract', 'summary'],
            rows: [
              ['who writes it', 'the authors of the paper', 'anyone who has read the paper'],
              ['where it appears', 'at the start of the paper itself', 'in your assignment, notes or review'],
              ['length', 'set by the journal, often around 150 to 300 words', 'set by your teacher or task'],
              ['what it may leave out', 'limits the authors discuss only later in the paper', 'only what your task does not ask for'],
            ],
          },
          tone: 'blue',
        },
        'Editage draws the same line: the abstract is part of the paper and is written by its authors, while a summary is a separate piece that anyone can write after reading the paper.',
        'The abstract is still the best place to start reading. But it is the authors presenting their own work at its best. A summary written after reading the methods and results can say what the abstract leaves out, such as a small sample or a study that covered only one season. If you are writing the abstract for your own paper, see [how to write an abstract](/blogs/how-to-write-an-abstract/).',
      ],
    },
    {
      id: 'read-before-you-summarize',
      title: 'Read the paper before you write a word',
      Art: ReadScene,
      caption: 'abstract, introduction and conclusion first; methods and results after',
      body: [
        'Sourav\'s first mistake was writing while he read. He summarized the introduction paragraph by paragraph, ran out of space, and never reached the results. Editage and Grammarly give the same first step: read the whole paper before writing anything.',
        'Read for the big picture first:',
        {
          steps: [
            { title: 'The title and abstract.', text: 'What is the paper about, and what do the authors claim?' },
            { title: 'The last paragraph of the introduction.', text: 'This is usually where the aim or research question is stated plainly.' },
            { title: 'The conclusion.', text: 'What do the authors want you to remember?' },
            { title: 'The methods and results.', text: 'Now read for detail: who or what was studied, how, and the main numbers in the tables and figures.' },
            { title: 'The discussion.', text: 'Look for how the authors explain their results and the limits they admit.' },
          ],
          tone: 'amber',
        },
        'Take notes in your own words as you go, with the page number next to anything you might quote. Our guide on [how to read a research paper](/blogs/how-to-read-a-research-paper/) explains a fuller three-pass method for hard papers.',
      ],
    },
    {
      id: 'how-to-summarize-a-research-paper',
      title: 'How to summarize a research paper, step by step',
      Art: StepsScene,
      caption: 'six boxes to tick before the summary goes in',
      body: [
        'Once the paper makes sense, the writing is short work. These steps bring together the Editage and Grammarly advice.',
        {
          steps: [
            {
              title: 'Write down the research question in one sentence.',
              text: 'What problem, gap or hypothesis did the study take up? If you cannot say it in one line, read the introduction again.',
            },
            {
              title: 'Note the design and the sample.',
              text: 'Was it a survey, an experiment, interviews, a review? Who or what was studied, where, and how many?',
            },
            {
              title: 'Pick the main findings.',
              text: 'Editage suggests three to five of the most important results, using the same numbers and units as the original paper. Copy each number exactly and check it against the table it came from.',
            },
            {
              title: 'Write the authors\' conclusion.',
              text: 'What do they say the findings mean, and why does it matter for the field?',
            },
            {
              title: 'Close the paper and write from your notes.',
              text: 'Writing with the paper shut forces you to use your own sentences. Name the authors and the year near the start.',
            },
            {
              title: 'Check, then cut.',
              text: 'Compare your draft with the paper line by line for accuracy, then trim repeated words until it fits the limit.',
            },
          ],
          tone: 'green',
        },
        {
          note: 'Grammarly warns against shortening the paper sentence by sentence, which is paraphrasing, not summarizing. A summary picks the main points and lets the rest go.',
          label: 'remember',
          tone: 'green',
        },
        'For his second paper, Sourav followed these six steps. His summary came to 280 words, most of them about the findings.',
      ],
    },
    {
      id: 'how-long-should-a-summary-be',
      title: 'How long should a research paper summary be?',
      Art: LengthScene,
      caption: 'one sentence, one paragraph or half a page, depending on who asks',
      body: [
        'There is no single rule, and the guides do not fully agree:',
        {
          list: [
            'Editage says most research paper summaries run 150 to 300 words, or about 5 to 10 percent of the original paper\'s length.',
            'Grammarly suggests about 300 to 400 words, kept under 400, or around 10 percent of the word count for a long paper.',
            'A computer science course at the University of Waterloo, in Canada, asks students for summaries that are two or three paragraphs, half a page, or under 300 words.',
          ],
          style: 'dots',
        },
        'If no limit is given, a few hundred words is safe for a full paper. If your teacher, journal club or examiner gives a limit, that limit wins. Sourav\'s department says 300.',
        'You will need three common sizes:',
        {
          table: {
            head: ['size', 'where you use it', 'what goes in'],
            rows: [
              ['one sentence', 'a literature review paragraph, a note in your reference manager', 'who studied what, and the main finding'],
              ['one paragraph', 'a seminar handout, the background of a proposal', 'question, method, main findings, conclusion'],
              ['half a page or more', 'a journal club, a course assignment, a review of one paper', 'all of the above, plus limitations and, if asked, your own view'],
            ],
          },
          tone: 'amber',
        },
      ],
    },
    {
      id: 'research-paper-summary-example',
      title: 'Research paper summary format and example',
      Art: ExampleScene,
      caption: 'four bands on one page: why, how, what was found, what it means',
      body: [
        'A summary does not need headings, though some tasks ask for them. Most summaries simply follow the order of the paper itself, one or two sentences for each part:',
        {
          list: [
            '**Citation and aim:** the authors, the year and the question the study asked.',
            '**Method:** the design, the sample and the setting.',
            '**Findings:** the three to five main results, with their numbers.',
            '**Conclusion:** what the authors say it means, and any limit they admit.',
          ],
          style: 'numbers',
        },
        'Watch the tense. Editage advises the present tense for the authors\' ideas and arguments ("the authors argue") and the past tense for specific results ("children in these households ate..."). Citation styles also have their own habits for verbs that introduce a source, so follow the style your department uses.',
        'Here is a summary written the way Sourav learnt to write them. The study is a simplified, made-up version of his seminar paper, so it carries no numbers. In a real summary you would add the paper\'s key figures, copied exactly with their units.',
        {
          note: '*In this study, the authors ask whether children in Santal households that keep a kitchen garden eat a more varied diet, and grow better, than children in households without one. They surveyed mothers in several villages of one district in West Bengal, recorded what each child had eaten the day before, and measured the children\'s height and weight. Children from households with a kitchen garden ate from more food groups and were less often short for their age, but their weight differed little from that of the other children. The authors conclude that kitchen gardens may improve young children\'s diets. Because the survey covered only one season, they call for a study that follows the same children through the year.*',
          label: 'example',
          tone: 'blue',
        },
        'Notice what is missing: the history of nutrition research, the survey form, every table. What remains is one clear question, a method a reader can picture, the findings and a limit.',
      ],
    },
    {
      id: 'mistakes-and-ai',
      title: 'Common mistakes, and summarizing with AI',
      Art: AiScene,
      caption: 'a quick draft from a machine, checked line by line against the paper',
      body: [
        'Dr. Das kept a list of the mistakes she saw every year in the Friday summaries. Most of them match the ones the Grammarly and Editage guides warn about:',
        {
          list: [
            'copying sentences from the paper instead of writing your own;',
            'spending most of the words on the introduction and too few on the results;',
            'leaving out the key numbers, the sample size or the units;',
            'mixing your own opinion into the authors\' conclusion;',
            'making the summary longer than the paper\'s own abstract;',
            'forgetting to name and cite the paper you are summarizing.',
          ],
          style: 'cross',
        },
        'Opinion needs care. Grammarly lists adding your opinions among the mistakes, yet the Waterloo course asks for your opinion of the paper. Both make sense once you separate them: keep the summary faithful to the authors, and if your task asks for your view, put it in a separate, clearly labelled paragraph.',
        'A summary is still someone else\'s work, so cite it like any other source. Editage advises relying almost entirely on paraphrase and keeping quotation for a key term or phrase where the author\'s exact wording matters. Our guide on [how to avoid plagiarism](/blogs/how-to-avoid-plagiarism/) covers the habits that keep you safe.',
        'Many AI tools can summarize a PDF in seconds. Editage cautions that AI-generated summaries can miss nuance or misstate a finding, so treat them as a first draft, not a final version. Check every number against the paper, and find out whether your teacher allows such tools for the task at all. Our guide to [using AI in research honestly](/blogs/using-ai-in-research-honestly/) explains the rules.',
      ],
    },
    {
      id: 'journal-club-and-literature-review',
      title: 'Summaries for journal club and your literature review',
      Art: SeminarScene,
      caption: 'five minutes on what was done and found, then the real discussion',
      body: [
        'A journal club adds one more layer. A student guide to leading a journal club, written by Michael Ioerger and shared by SUNY Upstate Medical University in the United States, asks the leader to keep the summary of the article very brief: less than five minutes, focused on what was done, what was found and why it is relevant. After that come the strengths and weaknesses of the study design, and which conclusions the data really support.',
        'The same guide adds: identify the strengths of the article too. Every study has limits, and that does not stop it from being useful.',
        'For a literature review, summaries are raw material, not the finished product. Write a short summary of each paper as you read it, and keep them in one place, such as a [literature review matrix](/blogs/literature-review-matrix/) with a row for each paper. When you write the review itself, group the papers by idea and compare them. A chapter that summarizes one paper after another reads like a list, not an argument.',
        'By the end of the term, Sourav could summarize a paper in one evening. At the last seminar, Dr. Das read his summary aloud and asked if anyone needed the paper to understand it. Nobody did.',
      ],
    },
  ],

  takeaways: [
    'A research paper summary tells a reader who has not read the paper what it asked, how it was done, what it found and what the authors concluded.',
    'An abstract is written by the authors as part of the paper; a summary is your own account, written after reading the whole paper.',
    'Read the whole paper before writing, then write from your notes with the paper closed.',
    'Give most of your words to the findings, and copy the key numbers exactly, with their units.',
    'Without a set limit, a few hundred words is a safe length for a full paper; any limit you are given comes first.',
  ],

  faq: [
    {
      q: 'How do you summarize a research paper in your own words?',
      a: 'Read the whole paper first and take notes in your own words. Then close the paper and write one or two sentences each on the question, the method, the main findings and the conclusion. Finally, compare your draft with the paper to check that every fact and number is right.',
    },
    {
      q: 'How long should a summary of a research paper be?',
      a: 'Guides differ. Editage suggests 150 to 300 words, Grammarly about 300 to 400, and one university course asks for under 300 words. If your teacher or task sets a limit, follow it.',
    },
    {
      q: 'Is a summary the same as an abstract?',
      a: 'No. The abstract is written by the authors and printed with the paper. A summary is written by a reader after reading the paper, and it can mention points the abstract leaves out, such as a small sample.',
    },
    {
      q: 'Should I include my own opinion in a summary?',
      a: 'Not in the summary itself, which should report the authors\' work faithfully. If your assignment or journal club asks for your view, add it in a separate paragraph and label it clearly.',
    },
  ],

  cta: {
    title: 'Check every line against the paper',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref, reads the open-access papers, and shows the source behind every line it writes, so you can see where each point in a summary came from. One payment unlocks all of it, for good.',
  },
}
