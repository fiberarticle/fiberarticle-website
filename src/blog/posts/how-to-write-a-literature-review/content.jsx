import Hero from './hero.jsx'
import {
  BridgeScene,
  FishingScene,
  MatrixScene,
  ReviseScene,
  ScopeScene,
  ScreenScene,
  ThemesScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'seven steps from a pile of papers to a finished review',
  },

  intro: [
    'Varun had six weeks. His MTech project in civil engineering, at a college in Bhubaneswar, was on concrete made with fly ash, the fine powder left over when coal is burnt in power plants. The literature review chapter was due first, and he had a folder of sixty PDFs, most of them half read.',
    'Prof. Mohanty, his guide, did not tell him to read faster. Instead, seven numbered boxes went up on the whiteboard, with one instruction: finish one box before you open the next.',
    'Those seven boxes are the seven steps below. They work for a thesis chapter, a review article or the related work section of a paper. If you are not yet sure what a literature review is for, read [what is a literature review, really?](/blogs/what-is-a-literature-review/) first.',
  ],

  sections: [
    {
      id: 'step-1-define-your-scope',
      title: 'Step 1: Define your scope',
      Art: ScopeScene,
      caption: 'a line around the papers that belong, with everything else left outside',
      body: [
        'Many reviews go wrong before the first paper is opened. Without a clear scope, every paper looks relevant and the reading never ends.',
        'Start by writing your review question in one sentence. It should name what you are studying, the effect you care about and the setting.',
        {
          note: 'How does replacing part of the cement with fly ash affect the strength and durability of ordinary concrete?',
          label: 'his question',
          tone: 'blue',
        },
        'Then set the boundaries. Decide what is in and what is out, and write down why.',
        {
          list: [
            '**Topic:** ordinary concrete only. Fly ash in geopolymer or self-compacting concrete is left out.',
            '**Time:** studies from roughly the last fifteen years, plus a few older papers that everyone cites.',
            '**Type:** laboratory and field studies that report measured results.',
            '**Language:** English, because that is what he can read and check.',
          ],
          style: 'dots',
        },
        'These boundaries may shift a little as you read, and that is fine, as long as every change is a decision you made and noted. The same note later becomes the scope paragraph at the start of your review.',
      ],
    },
    {
      id: 'step-2-search-systematically',
      title: 'Step 2: Search systematically',
      Art: FishingScene,
      caption: 'the right keywords bring up the right papers',
      body: [
        'A systematic search is one that someone else could repeat and get roughly the same results. That needs three things: the right databases, a written search string and a log.',
        'Pick two or three databases that cover your field well. Varun used Scopus through his college library, Google Scholar, and ScienceDirect, which hosts several of the main concrete journals.',
        'Next, list the key ideas in your question and every word authors use for each one. Fly ash, for example, is also called pulverised fuel ash, the term used in British and Indian standards. Then join the words with Boolean operators.',
        {
          note: '("fly ash" OR "pulverised fuel ash") AND concrete AND (strength OR durability)',
          label: 'his search',
          tone: 'amber',
        },
        'Record every search in a small log: the date, the database, the exact string, any filters and the number of results. When your examiner asks how you found your papers, the log is your answer. [How to search for research papers like a pro](/blogs/how-to-search-academic-databases/) covers databases, keywords and Boolean operators in more detail.',
        'Finally, check the reference lists of the best papers you find, and the newer papers that cite them. This often turns up important studies that your keywords missed.',
      ],
    },
    {
      id: 'step-3-screen-with-clear-rules',
      title: 'Step 3: Screen with clear rules',
      Art: ScreenScene,
      caption: 'each paper either meets the rules and stays, or is set aside',
      body: [
        'Varun\'s searches returned more than four hundred results. He could not read them all, and he did not need to. Screening is how you decide, fairly and quickly, which papers stay.',
        'Write your rules before you start, so that you judge every paper the same way. These rules are called inclusion and exclusion criteria.',
        {
          compare: {
            left: {
              title: 'keep a paper if',
              items: [
                'it tests fly ash as a partial replacement for cement',
                'it reports measured strength or durability results',
                'it describes the mix and the curing clearly',
              ],
              mark: 'check',
              tone: 'green',
            },
            right: {
              title: 'set it aside if',
              items: [
                'it studies geopolymer or other special concretes',
                'it is a news item, an advert or an opinion piece',
                'the full text cannot be found',
              ],
              mark: 'cross',
              tone: 'red',
            },
          },
        },
        'Screen in two rounds.',
        {
          steps: [
            { title: 'Titles and abstracts.', text: 'Read only these, and sort each paper into keep, set aside or not sure. Keep the not sures for now.' },
            { title: 'Full texts.', text: 'Open the papers that are left and check them against the same rules. Write a short reason for every paper you set aside.' },
          ],
          tone: 'blue',
        },
        'Varun went from 412 results, to 318 after removing duplicates, to 74 after the first round and 38 after the second. If you are writing a systematic review, guidelines such as PRISMA ask you to report numbers like these in a flow diagram. For a thesis chapter a sentence or two is usually enough, but keep the numbers anyway.',
      ],
    },
    {
      id: 'step-4-read-and-extract',
      title: 'Step 4: Read and extract into a matrix',
      Art: MatrixScene,
      caption: 'one row per paper, the same questions asked of each',
      body: [
        'Now read the papers that stayed. They do not all need the same care: a quick first pass tells you which ones deserve a slow, full reading. [How to read a research paper](/blogs/how-to-read-a-research-paper/) shows a three-pass method that saves hours.',
        'As you read, do not scatter notes across the margins of sixty PDFs. Fill in a table instead, with one row per paper and one column per question you ask of every paper. This is called a literature review matrix.',
        {
          table: {
            head: ['Study', 'Fly ash used', 'Main result', 'Limits'],
            rows: [
              ['Study A', '20 percent', 'Lower strength at 28 days, similar at 90 days', 'One fly ash source'],
              ['Study B', '30 percent', 'Better resistance to chloride', 'Laboratory curing only'],
              ['Study C', '40 to 50 percent', 'Still weaker at 90 days', 'Few samples'],
            ],
          },
          tone: 'amber',
        },
        'The rows above are invented to show the idea. Varun\'s real matrix had 38 rows, with columns for the mix, the test ages, the strength results, the durability tests and the limitations. It took him two weeks to fill, and it was the most useful thing he made.',
        'With a full matrix you can read down a column and see at once where studies agree and where they do not. This [guide to the literature review matrix](/blogs/literature-review-matrix/) explains how to set one up and which columns to use.',
      ],
    },
    {
      id: 'step-5-find-the-themes',
      title: 'Step 5: Find the themes and choose a structure',
      Art: ThemesScene,
      caption: 'scattered findings, grouped into themes with names',
      body: [
        'Once the matrix is full, patterns start to show. Several papers report the same effect, a few disagree, and one question keeps coming up that nobody has settled. These patterns are your themes.',
        'Varun wrote each main finding on a sticky note and moved the notes around his desk until they settled into groups. Four themes came out: early strength, long-term strength, durability, and how much the results depend on the fly ash used.',
        'Then choose how to organise the chapter. There are four common ways.',
        {
          table: {
            head: ['Structure', 'Organised by', 'Works well when'],
            rows: [
              ['Thematic', 'Themes or findings', 'You want to compare studies issue by issue'],
              ['Chronological', 'Time periods', 'The field has changed a lot over the years'],
              ['Methodological', 'Research methods', 'Different methods give different answers'],
              ['Theoretical', 'Theories or models', 'The field is built around competing theories'],
            ],
          },
          tone: 'green',
        },
        'Many reviews are thematic, sometimes with a short chronological note at the start of a theme. Varun\'s outline followed his four themes, added a short section on test methods, and ended with a section on gaps.',
      ],
    },
    {
      id: 'step-6-write-paragraphs-that-synthesise',
      title: 'Step 6: Write paragraphs that synthesise',
      Art: BridgeScene,
      caption: 'each paragraph is a plank; the missing one is the gap your work will fill',
      body: [
        'This is the step that turns a list of papers into a review. Each paragraph should make one point supported by several sources, instead of describing one paper.',
        'A simple recipe for each paragraph:',
        {
          steps: [
            { title: 'Topic sentence.', text: 'State the point in your own words, as a claim.' },
            { title: 'Evidence.', text: 'Bring in two to four sources that support or test the claim.' },
            { title: 'Compare.', text: 'Say where the sources agree, where they differ and why they might differ.' },
            { title: 'So what.', text: 'End with what this means for the field or for your own question.' },
          ],
          tone: 'amber',
        },
        {
          note: 'Replacing part of the cement with fly ash usually slows early strength gain. Several studies report lower 7-day and 28-day strengths as the share of fly ash rises (Study A, 2021; Study B, 2023). By 90 days, however, mixes with about 20 to 30 percent fly ash often match the control mix, which is usually explained by the slow pozzolanic reaction (Study B, 2023; Study D, 2020). Higher levels behave differently: Study C (2022) found that mixes with 40 to 50 percent fly ash were still weaker at 90 days. Since most of these studies cured their samples in water in the laboratory, it is less clear how such mixes perform on site.',
          label: 'example',
          tone: 'blue',
        },
        'The studies in the example are invented, but the shape is what matters. The first sentence makes a claim, the middle brings in several sources and explains a difference, and the last sentence points to a gap. Paragraph by paragraph, the review builds towards your own research question.',
        'Write in your own words throughout. Quote only when the exact wording matters, and cite every idea that came from someone else.',
      ],
    },
    {
      id: 'step-7-revise-cite-and-check',
      title: 'Step 7: Revise, cite and check',
      Art: ReviseScene,
      caption: 'a first draft, marked up, checked and ready',
      body: [
        'Leave the first draft alone for a day or two, then read it the way your examiner will. Check each of these:',
        {
          list: [
            '**Every paragraph starts with a claim**, not with an author\'s name.',
            '**Every claim has a source**, and you have checked that each source says what you say it says.',
            '**Recent work is included.** Run your searches again near the end, because new studies keep appearing.',
            '**Citations are complete and in one style**, the one your university asks for. A reference manager such as Zotero or Mendeley saves hours here.',
            '**The text is in your own words.** If your university runs a plagiarism check, run this chapter through it too.',
            '**The review ends with a clear gap** that leads to your research question.',
          ],
          style: 'check',
        },
        'Then ask your guide or a classmate to read it. Varun\'s first draft came back with red ink on most pages, but the structure held, and the second draft took days instead of weeks.',
        'Tools can shorten the early steps. [Fiberarticle](https://app.fiberarticle.com)\'s Literature Reviewer searches arXiv, OpenAlex, Semantic Scholar and Crossref, screens papers against your inclusion and exclusion criteria, reads the open-access full texts, and builds an evidence matrix you can export as CSV, along with a draft review in which every point is tied to a numbered source. Treat it as a head start, not a finished chapter: it cannot read papers behind paywalls, and you still need to read the key papers yourself and write the argument in your own words.',
      ],
    },
  ],

  takeaways: [
    'Write your review question in one sentence and set clear boundaries before you search.',
    'Search two or three databases with a written search string, and log every search.',
    'Screen in two rounds, titles and abstracts first and full texts second, using rules written in advance.',
    'Extract the same details from every paper into a matrix; it makes the themes visible.',
    'Organise by themes, and write paragraphs that make one point supported by several sources.',
    'Revise with a checklist, and end the review with the gap your research will fill.',
  ],

  faq: [
    {
      q: 'How long does it take to write a literature review?',
      a: 'It depends on the scope and your level. A master\'s thesis chapter often takes several weeks of steady work, and most of that time goes into searching, screening and reading. The writing is much quicker once the matrix is full.',
    },
    {
      q: 'How many papers should a literature review include?',
      a: 'There is no fixed number. A master\'s chapter often draws on a few dozen sources, and a PhD review usually on many more. Ask your guide and look at recent theses from your department. Covering the important studies matters more than the count.',
    },
    {
      q: 'Can I use AI tools to help write my literature review?',
      a: 'You can use them to find papers, sort them and draft summaries, if your university allows it and you check everything against the original papers. The judgement and the final writing should be yours. Many universities and journals now ask you to say how you used AI, so check the rules before you start.',
    },
    {
      q: 'What is the difference between a literature review and a systematic review?',
      a: 'A systematic review follows a fixed, reported method for searching, screening and assessing studies, so that others can repeat it. A typical thesis literature review borrows some of those habits, such as a search log and clear criteria, without following every rule.',
    },
  ],

  cta: {
    title: 'Get a head start on your review',
    text: 'Fiberarticle\'s Literature Reviewer finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref, builds an evidence matrix you can export, and drafts a structured review with numbered citations you can check. It is free to use yourself.',
  },
}
