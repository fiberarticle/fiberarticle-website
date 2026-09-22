import Hero from './hero.jsx'
import {
  DisclosureScene,
  GroundedScene,
  HelpScene,
  RulesScene,
  SearchScene,
  VerifyScene,
  WrongScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'twelve neat references from a chatbot, and one of them is only an outline',
  },

  intro: [
    'Harsh was running out of time. He was a second-year PhD scholar in Mechanical Engineering in Ahmedabad, working on cooling systems for electric vehicle batteries, and his guide wanted the related work chapter by Monday. On Friday night he opened a chatbot, typed in his topic and asked it to write the section with references. Twenty minutes later he had four neat pages and twelve citations.',
    'On Monday, Dr. Mehta read the first page, frowned, and typed one of the references into Google Scholar. Nothing. She tried another. Nothing. Within the hour she had found three references that did not exist anywhere: real-sounding authors, real journal names, and papers that had never been written.',
    'Harsh was not trying to cheat. He simply did not know how these tools work. This blog covers what Dr. Mehta explained to him that afternoon: where AI genuinely helps a researcher, where it goes wrong, and the rules that keep your work honest.',
  ],

  sections: [
    {
      id: 'the-reference-that-did-not-exist',
      title: 'The reference that did not exist',
      Art: SearchScene,
      caption: 'the search that comes back empty: the paper was never written',
      body: [
        'Chatbots such as ChatGPT, Gemini and Claude are built on large language models. Put simply, a language model has learnt from a huge amount of text how words tend to follow one another, and it writes by predicting what comes next. It is remarkably good at this. But predicting likely words is not the same as looking something up.',
        'A reference is a very predictable pattern: a few surnames, a year, a title full of the right keywords, a journal name, a volume and page numbers. A model can produce that pattern fluently for a paper that was never written. It is not lying on purpose. It simply cannot tell a citation it has seen from one that only sounds right.',
        {
          define: 'Hallucination',
          hint: 'noun, in AI',
          meaning: 'When an AI tool states something false or made up, fluently and confidently, as if it were true. Invented references are the best known example in research.',
          tone: 'pink',
        },
        'Some tools now search the web or a database before they answer, which reduces the problem. It does not remove it, because a tool can still misread or misreport what it found. Whatever you use, the rule is the same: a reference is not real until you have opened it.',
      ],
    },
    {
      id: 'where-ai-helps',
      title: 'Where AI genuinely helps',
      Art: HelpScene,
      caption: 'a patient tutor with a small toolbox, not an author',
      body: [
        'None of this makes AI tools useless for research. Used for the right jobs, they save real time. Notice the pattern in the list below: they work best on material you give them, producing output you can check.',
        {
          list: [
            'Brainstorming: angles on a topic, possible research questions, counter-arguments you had not thought of.',
            'Explaining a concept you are stuck on, in simpler words, before you read about it properly in a textbook or paper.',
            'Search help: keywords, synonyms and search strings to try in Google Scholar, Scopus or PubMed.',
            'Summarising a paper you paste in or upload, so you can decide whether to read it closely.',
            'Polishing your own draft: grammar, clarity and flow, especially if English is not your first language.',
            'Code, formulas and LaTeX errors, where the result can be run and tested.',
          ],
          style: 'check',
        },
        {
          quote: 'Treat it like a well-read friend with a patchy memory. Ask it to explain, never to testify.',
          by: 'Dr. Mehta, to Harsh',
          tone: 'blue',
        },
        'Harsh still uses a chatbot almost every day, but differently. When a paper on phase change materials for battery cooling confused him, he asked for a plain explanation of the physics, then read the paper again with that in mind. The chatbot was a tutor, not an author.',
      ],
    },
    {
      id: 'where-it-goes-wrong',
      title: 'Where it goes wrong',
      Art: WrongScene,
      caption: 'fluent, confident, and sometimes wrong in ways that are hard to spot',
      body: [
        'The same fluency that makes these tools useful makes their mistakes hard to spot. These are the problems every researcher should know about.',
        {
          table: {
            head: ['Problem', 'What it looks like', 'What to do'],
            rows: [
              ['Made-up facts and references', 'Confident citations, statistics or quotes that do not exist', 'Open every source; never cite what you have not seen'],
              ['Outdated knowledge', 'Recent papers missing, because most models learn from data up to a cut-off date', 'Search the databases yourself for recent work'],
              ['Bias', 'Well-known authors, journals and regions over-represented', 'Look deliberately for other perspectives, including Indian journals'],
              ['Confident errors', 'Wrong numbers, units or steps in a derivation, stated with certainty', 'Check calculations yourself or in software'],
              ['Privacy', 'Unpublished data, patient records or a paper under review pasted into a public tool', 'Keep confidential material out unless your institution has approved the tool'],
            ],
          },
          tone: 'red',
        },
        'The privacy point surprises many students. When you paste text into a public chatbot, you may be sharing it with the company behind it, and depending on the service and its settings it may be stored or used to improve the model. For unpublished results that is a real risk. For a manuscript you have been asked to peer review, many publishers explicitly ask reviewers not to upload it to AI tools, because it is confidential.',
      ],
    },
    {
      id: 'the-rules',
      title: 'The rules most journals and universities now follow',
      Art: RulesScene,
      caption: 'the tool can help carry the load, but only you can sign for it',
      body: [
        'Policies are still changing, and they differ between journals, universities and funding bodies. Most of them, though, agree on four points.',
        {
          steps: [
            {
              title: 'Disclose how you used it.',
              text: 'Say which tool you used and for what, usually in the methods section or the acknowledgements, wherever the journal asks. Some policies exempt basic spelling and grammar checks; read yours.',
            },
            {
              title: 'An AI tool cannot be an author.',
              text: 'The Committee on Publication Ethics (COPE) and major publishers agree that AI tools cannot be listed as authors, because authorship means taking responsibility for the work, and a tool cannot do that.',
            },
            {
              title: 'You remain responsible.',
              text: 'Every sentence, number and reference in your paper is yours to defend, whoever or whatever drafted it.',
            },
            {
              title: 'Protect confidential material.',
              text: 'Keep unpublished data, personal information and manuscripts under review out of tools that are not approved for them.',
            },
          ],
          tone: 'blue',
        },
        'Some journals go further, for example by not accepting AI-generated images. Before you start, read the author guidelines of the journal you are aiming for and your university\'s policy, if it has one. Presenting AI-written text as your own writing without disclosure is treated as misconduct at many institutions; we cover it with the other forms in [types of plagiarism](/blogs/types-of-plagiarism/).',
      ],
    },
    {
      id: 'verify-everything',
      title: 'Verify everything that matters',
      Art: VerifyScene,
      caption: 'line by line, every reference is opened and checked',
      body: [
        'Dr. Mehta did not ask Harsh to stop using AI. She asked him to check its work the way a careful editor checks a new reporter\'s copy.',
        {
          steps: [
            { title: 'Check that every reference exists.', text: 'Search the exact title in Google Scholar, or paste the DOI into doi.org. If you cannot find it, delete it.' },
            { title: 'Check that it says what you claim.', text: 'Open the paper and find the passage. A real paper cited for something it never said is still a false citation.' },
            { title: 'Check the numbers.', text: 'Compare every figure, date and statistic with the original source.' },
            { title: 'Re-derive and re-run.', text: 'Work through equations yourself, and run any code before trusting its output.' },
            { title: 'Keep a simple log.', text: 'Note which tool you used, for what and when. It makes your disclosure easy to write.' },
          ],
          tone: 'green',
        },
        'When Harsh checked all twelve references himself, he found the three that did not exist and two more that were real papers but did not say what the chatbot claimed. That left seven usable sources out of twelve. He then rebuilt the chapter the proper way, from papers he had actually read; our guide to [writing a literature review](/blogs/how-to-write-a-literature-review/) walks through that process.',
      ],
    },
    {
      id: 'grounded-tools',
      title: 'Grounded tools versus free-writing chatbots',
      Art: GroundedScene,
      caption: 'one writes from memory; the other ties every point to a paper you can open',
      body: [
        'There is an important difference between a chatbot that writes from memory and a tool that is *grounded*: one that first retrieves real documents, then writes only from them, and shows you which document supports each point.',
        {
          compare: {
            left: {
              title: 'free-writing chatbot',
              items: [
                'writes from what it learnt in training',
                'may invent sources that sound right',
                'rarely shows where a claim came from',
                'knowledge stops at a cut-off date',
              ],
              mark: 'cross',
              tone: 'red',
            },
            right: {
              title: 'grounded research tool',
              items: [
                'finds real papers first',
                'cites only what it found',
                'lets you open the passage behind a point',
                'searches current indexes each time',
              ],
              mark: 'check',
              tone: 'green',
            },
          },
        },
        '[Fiberarticle](https://app.fiberarticle.com) is built the grounded way. It searches arXiv, OpenAlex, Semantic Scholar and Crossref, reads the open-access papers it can reach, and cites only papers it actually found, with numbered markers that show you the passage behind each point. When its Article Writer drafts a Results section, it leaves clearly marked placeholders instead of inventing numbers, because only your experiments can produce your results. If you prefer, you can run it with your own API key or with a model running on your own machine.',
        'Grounding reduces the risk; it does not replace your judgement. Open the sources that matter most to your argument and read them yourself.',
      ],
    },
    {
      id: 'writing-a-disclosure',
      title: 'Writing a simple disclosure',
      Art: DisclosureScene,
      caption: 'two honest lines in the acknowledgements, and the matter is settled',
      body: [
        'A disclosure does not need to be long. It should say which tool you used, what you used it for, and that you checked the result and take responsibility for it.',
        {
          note: '"I used [tool name] to improve the grammar and readability of Chapter 2 and to suggest search keywords. All references were checked against the original sources, and I take full responsibility for the content of this thesis."',
          label: 'a sample disclosure',
          tone: 'green',
        },
        'Change it to match what you actually did, and put it where your journal or university asks. If you used a research tool to find and summarise papers, say that too; being open about the process is the whole point. For the wider habits that keep your writing original, see [how to avoid plagiarism](/blogs/how-to-avoid-plagiarism/).',
        'Harsh rewrote his related work chapter from the papers he had read, used a chatbot only to tidy his grammar, and added a two-line note to his acknowledgements. Dr. Mehta read the new version in one sitting. Her only comment was about a comma.',
      ],
    },
  ],

  takeaways: [
    'Chatbots predict likely words, so they can invent references that look completely real.',
    'Use AI for jobs you can check: brainstorming, explaining, search help, summarising what you provide, polishing your own writing.',
    'An AI tool cannot be an author; you remain responsible for every word, number and reference.',
    'Disclose how you used AI, following your journal\'s and your university\'s policy.',
    'Keep confidential and unpublished material out of tools that are not approved for it.',
    'Open every source before you cite it, even one found by a grounded tool.',
  ],

  faq: [
    {
      q: 'Is it plagiarism to use ChatGPT for my thesis?',
      a: 'Using it is not automatically plagiarism, but submitting AI-written text as your own writing without disclosure breaks the rules at many universities. Check your university\'s policy, disclose what you used, and make sure the ideas, analysis and sources are genuinely yours.',
    },
    {
      q: 'Can AI detection tools prove that I used AI?',
      a: 'AI detectors are known to make mistakes in both directions, so a detector score is not proof on its own. The safer path is to be open about how you used AI and to keep your notes and drafts, which show your own work.',
    },
    {
      q: 'Should I mention AI if I only used it for grammar?',
      a: 'Policies differ. Some journals do not require a mention for basic spelling and grammar checks, while others ask you to declare any use. When in doubt, add a one-line note; it costs nothing.',
    },
    {
      q: 'How do I check whether a reference is real?',
      a: 'Search the exact title in Google Scholar, or paste the DOI into doi.org. If it exists, open it and confirm that it says what you are citing it for. If you cannot find it at all, do not use it.',
    },
  ],

  cta: {
    title: 'Research with sources you can open',
    text: 'Fiberarticle finds real papers across four scholarly indexes and shows you the passage behind every point it writes. Use its free built-in AI, your own API key, or a model on your own machine.',
  },
}
