import Hero from './hero.jsx'
import {
  CheckScene,
  FormatScene,
  PublishScene,
  StepsScene,
  SynthesisScene,
  TypesScene,
  WhatScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a hundred and forty papers go in, one clear picture of the field comes out',
  },

  intro: [
    'Sanjana Iyer is in the second year of her PhD in Chemical Engineering at a university in Mumbai. Her research turns used cooking oil, the kind that canteens and vada pav stalls throw away every night, into biodiesel. In her first year she read about 140 papers on the subject, and her guide, Dr. Shirish Gokhale, had an idea. "You have done the reading," he said. "Turn it into a review paper."',
    'Three weeks later Sanjana sent him 38 pages, one paragraph for every paper, in the order she had read them. Dr. Gokhale scrolled for a minute and said, "This tells me what 140 people did. It does not tell me what we now know." She had written a summary. A review paper needed something more.',
    'This blog explains how to write a review paper the way Dr. Gokhale explained it to Sanjana, from checking that yours is needed to getting it published.',
  ],

  sections: [
    {
      id: 'what-is-a-review-paper',
      title: 'What is a review paper?',
      Art: WhatScene,
      caption: 'one paper brings new data; the other brings many studies together',
      body: [
        'A review paper, also called a review article, collects what has already been published on a topic and makes sense of it for other researchers. Editage puts the main difference from a research paper simply: a research paper "is based on original research", while a review paper "does not report original research". You do not run new experiments. Your material is other people\'s papers.',
        {
          table: {
            head: ['', 'research paper', 'review paper'],
            rows: [
              ['what it reports', 'new data from your own experiments, surveys or fieldwork', 'what earlier studies found, compared and assessed'],
              ['methods section', 'how you collected and analysed your data', 'how you searched for and chose the studies'],
              ['what it adds', 'a new result', 'a clear picture of the field, its debates and its gaps'],
            ],
          },
          tone: 'blue',
        },
        'A review paper is also different from the literature review chapter of a thesis. That chapter exists to lead up to your own study. A review paper stands on its own, and it is written for researchers across the field, not for your examiners. If you want the basics first, read our guide on [what a literature review is](/blogs/what-is-a-literature-review/).',
        {
          quote: 'Literature reviews are in great demand in most scientific fields.',
          by: 'Marco Pautasso, PLOS Computational Biology, 2013',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'check-that-your-review-is-needed',
      title: 'Check that your review is needed',
      Art: CheckScene,
      caption: 'a shelf of reviews already written, and one space nobody has filled',
      body: [
        'Before you write a word, find out which reviews already exist. In his "Ten Simple Rules for Writing a Literature Review", Marco Pautasso warns that "the chances are high that someone will already have published a literature review", if not on your exact topic, then on a related one.',
        {
          steps: [
            {
              title: 'Search for reviews only.',
              text: 'In Scopus, open Document type on the left and choose Review. In PubMed, tick Review or Systematic Review under Article type. In Google Scholar, add the word "review" to your search. Scopus tags some book reviews the same way, so read the titles.',
            },
            {
              title: 'Note the date of each review.',
              text: 'An old review in a fast-moving field may leave room for a new one.',
            },
            {
              title: 'Read their future research sections.',
              text: 'Recent reviews often list what they could not cover, which can be your starting point.',
            },
            {
              title: 'Find your angle.',
              text: 'Your review must add something: a narrower focus, newer studies, a comparison nobody has made, or a framework that ties the field together.',
            },
          ],
          tone: 'amber',
        },
        'Sanjana found two recent reviews on biodiesel from waste cooking oil. Both covered the whole process, from collecting the oil to testing the fuel, and gave the catalyst, the substance that speeds up the reaction, only a few pages. Much of her own reading was about one kind of catalyst: those made from waste, such as eggshells and seashells. That was her angle.',
        {
          note: 'a focused review is easier to write well. Pautasso cautions that "including material just for the sake of it can easily lead to reviews that are trying to do too many things at once."',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'types-of-review-paper',
      title: 'Choose the type of review paper',
      Art: TypesScene,
      caption: 'four doors, four sets of rules: pick one before you start',
      body: [
        'Review papers come in a few main kinds, and each has its own rules. Editage lists three: the narrative review, the systematic review and the meta-analysis. The scoping review is a fourth.',
        {
          table: {
            head: ['type', 'what it does', 'what it needs'],
            rows: [
              ['narrative review', 'explains what is known on a topic and discusses it critically', 'a clear focus and a described search, but no fixed protocol'],
              ['systematic review', 'answers one specific question from all the studies that meet set rules', 'a protocol written in advance, a search others can repeat, more than one reviewer, and reporting that follows PRISMA'],
              ['meta-analysis', 'combines the numbers from earlier studies into one estimate', 'studies similar enough to pool, and statistical skill'],
              ['scoping review', 'maps what has been studied on a broad question and where the gaps are', 'a systematic search and a clear account of what was included'],
            ],
          },
          tone: 'green',
        },
        'Pautasso describes the main split this way: "while narrative reviews are qualitative, systematic reviews attempt to test a hypothesis based on the published evidence." Our guide to the [types of literature review](/blogs/types-of-literature-review/) explains each kind in more detail.',
        'For a systematic review, two names matter. **PRISMA 2020**, published by Matthew Page and colleagues in the *BMJ* in 2021, is a 27-item reporting checklist with a flow diagram that shows how many studies were found, screened and included. **PROSPERO** is an international register where health-related systematic reviews record their protocol, and its current guidance asks you to register before data extraction begins.',
        'Sanjana chose a narrative review: her question was broad and her studies used very different methods. She would still describe her search, because SANRA, a scale that journal editors developed to judge narrative reviews, checks it too.',
      ],
    },
    {
      id: 'review-paper-format',
      title: 'Review paper format: the structure, section by section',
      Art: FormatScene,
      caption: 'the same page every reviewer expects, from title to conclusion',
      body: [
        'There is no single format for every journal, so always start with the guide for authors of the journal you are aiming at. Most review papers, though, follow a shape like this.',
        {
          table: {
            head: ['section', 'what goes in it'],
            rows: [
              ['title', 'the topic and the kind of review, such as "a review" or "a systematic review"'],
              ['abstract', 'why the topic matters, what the review covers and its main conclusions'],
              ['introduction', 'the background, why a review is needed now, how yours differs from earlier reviews, and its aim'],
              ['methods', 'the databases, search words, years and rules you used to choose studies; essential in a systematic review, wise in a narrative one'],
              ['main body', 'the literature, organised by themes, methods or time, under headings of your own'],
              ['tables and figures', 'a summary table of key studies, a diagram of a process, or a timeline'],
              ['challenges and future directions', 'what is still unknown, and what research should come next'],
              ['conclusion', 'the main points in a few paragraphs, with nothing new added'],
            ],
          },
          tone: 'amber',
        },
        'The main body is where reviews differ most. Pautasso notes that a review, like other papers, needs "a general introduction of the context and, toward the end, a recapitulation of the main points covered". What comes in between is up to you, but the headings should come from the ideas in the field, not from the list of papers.',
        {
          note: 'word limits and the number of references vary widely between journals and fields. Do not guess: the guide for authors usually gives a separate limit for reviews.',
          label: 'check',
          tone: 'red',
        },
        'Sanjana\'s new outline fit on one page. After the introduction and a short methods section came four themes: catalysts from eggshells, from seashells, from plant ash, and catalysts that wear out after a few uses. Then a comparison table, future directions and the conclusion.',
      ],
    },
    {
      id: 'how-to-write-a-review-paper-step-by-step',
      title: 'How to write a review paper, step by step',
      Art: StepsScene,
      caption: 'seven steps up, from one sentence of aim to a draft your guide has read',
      body: [
        'With the outline settled, the writing follows a clear order.',
        {
          steps: [
            {
              title: 'Write your aim in one sentence.',
              text: 'Sanjana\'s aim read: "This review compares catalysts made from waste materials for producing biodiesel from used cooking oil, and asks what limits their use at a larger scale."',
            },
            {
              title: 'Search, and search again.',
              text: 'Pautasso\'s second rule is to "search and re-search the literature". Keep a record of the databases, search words and dates, so you can write the methods section later.',
            },
            {
              title: 'Fill a matrix as you read.',
              text: 'One row per study, one column per question: the catalyst, its source material, the reaction conditions, the yield and the number of reuses. A [literature review matrix](/blogs/literature-review-matrix/) turns a folder of PDFs into something you can compare.',
            },
            {
              title: 'Group the studies into themes.',
              text: 'Read down the columns of the matrix. The patterns you see there become your headings.',
            },
            {
              title: 'Draft the main body first.',
              text: 'Write the introduction and the abstract last, when you know what the review actually says.',
            },
            {
              title: 'Build the summary table.',
              text: 'Keep the same columns for every row, so a reader can compare the key studies at a glance.',
            },
            {
              title: 'Ask for feedback.',
              text: 'Pautasso\'s eighth rule is to make use of feedback. Give the draft to your guide and to one reader outside your group.',
            },
          ],
          tone: 'green',
        },
        'For the search step, [Fiberarticle](https://app.fiberarticle.com)\'s Literature Reviewer finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export. Check what it finds against the papers themselves, because the judgement in a review has to be your own.',
      ],
    },
    {
      id: 'synthesise-do-not-summarise',
      title: 'Synthesise, do not summarise: an example',
      Art: SynthesisScene,
      caption: 'separate stamps in an album, or papers tied together by one idea',
      body: [
        '"Reviewing the literature is not stamp collecting," Pautasso writes. A good review "does not just summarize the literature, but discusses it critically." That was exactly what was wrong with Sanjana\'s 38 pages.',
        {
          compare: {
            left: {
              title: 'a summary',
              items: [
                'one paragraph for each paper',
                'in the order you read them',
                'repeats what each author said',
                'leaves the reader to find the pattern',
              ],
              mark: 'cross',
              tone: 'red',
            },
            right: {
              title: 'a synthesis',
              items: [
                'one paragraph for each idea',
                'several studies compared in each paragraph',
                'explains why results differ',
                'ends with what it means and what is missing',
              ],
              mark: 'check',
              tone: 'green',
            },
          },
        },
        {
          note: '*Study A (2019) prepared a catalyst from eggshells and reported a high yield. Study B (2020) also used eggshells. Study C (2021) used seashells and found that the yield fell after a few runs.*',
          label: 'before',
          tone: 'red',
        },
        {
          note: '*Catalysts made from eggshells and seashells give high biodiesel yields in their first run (Study A, 2019; Study B, 2020), but the few studies that tested reuse report a fall in yield after a few cycles (Study C, 2021). Since most studies stop after the first run, how long these catalysts last is still an open question.*',
          label: 'after',
          tone: 'green',
        },
        'The second paragraph is hardly longer, yet it says far more: it joins the studies, names a pattern and ends with a gap. Be fair to every study, your own included. Pautasso\'s ninth rule is to include your own relevant research, but be objective about it.',
      ],
    },
    {
      id: 'how-to-write-a-review-paper-for-publication',
      title: 'How to write a review paper for publication',
      Art: PublishScene,
      caption: 'checked, proposed, and only then sent in full',
      body: [
        'Not every journal takes review papers, and many that do prefer to invite them. Editage notes that "review articles are typically sought out by the journal" and that "unrequested articles are not often published". Elsevier\'s Researcher Academy adds that at some journals it "might only be possible to submit a review article by invitation or prior consultation with an editor".',
        'That does not shut students out. It means you should ask first. Many journals accept a short proposal, sometimes called a presubmission inquiry. Springer\'s journal *Molecular Diversity*, for example, asks for a proposal of two pages at most before an unsolicited review is submitted. A proposal usually covers:',
        {
          list: [
            'what the review will cover, in a short paragraph',
            'why it suits this journal and its readers',
            'how it differs from the reviews already published',
            'a list of key papers on the topic',
          ],
          style: 'check',
        },
        'Before you submit, test the draft the way an editor might. For a systematic review, go through the PRISMA checklist. For a narrative review, SANRA, published in 2019 by the editors Christopher Baethge, Sandra Goldbeck-Wood and Stephan Mertens, scores six things: why the review matters, its aims, the literature search, the referencing, the scientific reasoning and the presentation of relevant results. Then write a cover letter that says why your review is needed now. Our guide on [writing a cover letter for journal submission](/blogs/how-to-write-a-cover-letter-for-journal-submission/) shows how.',
        'Sanjana emailed a proposal to the editor of a journal on renewable fuels. Two weeks later the reply came: send the full review. Dr. Gokhale read her new draft, now 22 pages built on four themes, and asked only one question: "Which theme will your own thesis answer?" She pointed to the last one, the catalysts that wear out.',
      ],
    },
  ],

  takeaways: [
    'A review paper reports no new data; it says what published studies mean as a whole.',
    'Search for existing reviews first, and find an angle that adds something new.',
    'Choose the type early: a narrative review needs a clear focus, a systematic review needs a protocol and PRISMA.',
    'Organise the main body by themes, not by papers, and add a summary table of key studies.',
    'Synthesise: compare studies, explain why they differ and end each theme with what is still unknown.',
    'Read the journal\'s guide for authors, and send a proposal first if it invites or prefers proposals for reviews.',
  ],

  faq: [
    {
      q: 'What is the difference between a review paper and a research paper?',
      a: 'A research paper reports new data that the authors collected and analysed themselves. A review paper reports no new data; it gathers, compares and assesses studies that are already published.',
    },
    {
      q: 'Can a PhD student write a review paper?',
      a: 'Yes, if you have read the field widely and can add a fresh angle. Work on it with your guide, and check that no recent review already covers your focus.',
    },
    {
      q: 'How long is a review paper?',
      a: 'It depends on the journal, and many set a separate word limit for reviews. Check the guide for authors on the journal\'s website.',
    },
    {
      q: 'Does a review paper need a methods section?',
      a: 'A systematic review always does, because others must be able to repeat the search. A narrative review often has a short one too, naming the databases, search words and years covered.',
    },
  ],

  cta: {
    title: 'Start your review from the right papers',
    text: 'Fiberarticle\'s Literature Reviewer finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export, so you can see the themes in a field before you write. One payment unlocks all of it, for good.',
  },
}
