import Hero from './hero.jsx'
import {
  CatalogueScene,
  CountScene,
  MapScene,
  MistakesScene,
  PlacesScene,
  RopeScene,
  TowerScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'papers in conversation, and a reader taking notes on what they say together',
  },

  intro: [
    'Priya was proud of her first draft. Twelve pages for her MSc Biotechnology dissertation in Bengaluru, forty papers, every one summarised neatly. Her topic was whether plant extracts can stop bacteria from forming biofilms, the slimy layers that make some infections so hard to treat.',
    'Her guide, Dr. Raghavan, returned it the next day with one line in the margin of page one: *This is a catalogue, not a review.* Priya read it five times. She had reviewed forty papers. What else was a literature review supposed to be?',
    'Almost every student asks this at some point, and the answer changes how you write the whole chapter. Here is what Dr. Raghavan explained to her over filter coffee in the department canteen.',
  ],

  sections: [
    {
      id: 'more-than-a-list-of-summaries',
      title: 'More than a list of summaries',
      Art: CatalogueScene,
      caption: 'the same four papers, listed on one side and connected on the other',
      body: [
        {
          define: 'Literature review',
          hint: 'noun',
          meaning: 'An organised, critical account of what published research says about a topic, showing how the studies connect to each other and to your own question.',
        },
        'Notice three words: *organised*, *critical* and *connect*. A catalogue has none of them. It goes paper by paper: Author A did this, Author B did that, Author C found something else. Each summary may be correct, and the reader still learns very little, because the connections are left for them to work out.',
        'A review does that work for the reader. It groups studies that agree, sets them against studies that disagree, explains why they might differ, and points out what nobody has tested yet. A catalogue tells you what is on the shelf. A review tells you what the shelf is saying.',
        {
          quote: 'Your reader has not read these forty papers. Tell them what the forty papers say together.',
          by: 'Dr. Raghavan, to Priya',
          tone: 'green',
        },
      ],
    },
    {
      id: 'why-every-thesis-has-one',
      title: 'Why every thesis has one',
      Art: MapScene,
      caption: 'a map of what is known, and a flag on the part nobody has explored',
      body: [
        'It can feel like a formality, the chapter you write before the real work. In fact it does four important jobs.',
        {
          list: [
            '**It shows what is already known**, so your examiner can see that you understand the field.',
            '**It places your work in the conversation**, so it is clear which ideas you build on.',
            '**It finds the gap**, the question existing studies leave open, which your research then tries to answer.',
            '**It justifies your method**, by showing what others tried, what worked and what did not.',
          ],
          style: 'check',
        },
        'The third job matters most. A good literature review ends with a gap described so clearly that your research question feels like the obvious next step. [How to find a research gap](/blogs/how-to-find-a-research-gap/) explains how to spot one.',
        'It also protects you from an unpleasant surprise: spending a year on a study, only to learn in your viva that someone published the same work years ago.',
      ],
    },
    {
      id: 'where-literature-reviews-appear',
      title: 'Where literature reviews appear',
      Art: PlacesScene,
      caption: 'the same skill, at four different lengths',
      body: [
        'The same skill turns up in several places, at different lengths.',
        {
          table: {
            head: ['Where', 'Usual size', 'What it does'],
            rows: [
              ['Thesis or dissertation', 'Often a full chapter', 'Maps the field and builds up to your research question'],
              ['Related work in a paper', 'Usually a few paragraphs to a couple of pages', 'Shows how your contribution differs from earlier work'],
              ['Review article', 'The whole paper', 'Summarises and assesses a field for other researchers'],
              ['Research proposal', 'Usually a short section', 'Convinces a committee or funder that the study is needed'],
            ],
          },
          tone: 'amber',
        },
        'In a journal paper, the related work section is shorter and more pointed. Its only job is to show what is new about your contribution, so each paragraph should end by saying how your work differs from the studies it describes.',
        'Review articles themselves come in several kinds, from traditional narrative reviews to systematic reviews and meta-analyses that follow strict rules. [Types of literature review](/blogs/types-of-literature-review/) compares them.',
      ],
    },
    {
      id: 'synthesis-is-the-heart-of-it',
      title: 'Synthesis is the heart of it',
      Art: RopeScene,
      caption: 'separate fibres, twisted together, become a rope that can hold weight',
      body: [
        'The word that separates a review from a catalogue is *synthesis*: bringing several sources together to say something none of them says alone. In practice, it means organising by ideas instead of by papers.',
        {
          compare: {
            left: {
              title: 'catalogue',
              items: [
                'Study A found neem extract reduced biofilms in the lab.',
                'Study B found clove oil reduced biofilms.',
                'Study C found garlic extract had little effect.',
              ],
              mark: 'cross',
              tone: 'red',
            },
            right: {
              title: 'synthesis',
              items: [
                'Several plant extracts reduced biofilms in lab tests (Study A; Study B).',
                'The effect varied with the extract and the bacteria tested (Study C).',
                'Almost none were tested beyond the lab dish, which is the gap.',
              ],
              mark: 'check',
              tone: 'green',
            },
          },
        },
        'Both columns use the same three papers. The right-hand one arranges them around ideas, and it ends somewhere useful. A few sentence openings make this way of writing easier:',
        {
          list: [
            '"Several studies agree that..."',
            '"In contrast, ... found that..."',
            '"These results are consistent with..."',
            '"One likely reason for this difference is..."',
            '"Few studies have examined..."',
          ],
          style: 'dots',
        },
        'Each of these phrases forces you to relate at least two sources to each other, which is the whole point. A [literature review matrix](/blogs/literature-review-matrix/), with one row per paper and one column per question, makes these connections much easier to see.',
        'Think of each paper as a single fibre. On its own, a fibre is thin and easy to snap. Twisted together with others, fibres become a rope that can hold real weight. A catalogue lays the fibres side by side; a review twists them into rope. It is also a good way to picture our name, Fiberarticle: many fibres, one strong article.',
      ],
    },
    {
      id: 'what-a-good-review-contains',
      title: 'What a good review contains',
      Art: TowerScene,
      caption: 'five parts, each resting on the one below, with the gap at the top',
      body: [
        'Reviews differ by subject, but most good ones move through the same five parts.',
        {
          steps: [
            { title: 'Overview and scope.', text: 'What the review covers, what it leaves out, and how it is organised.' },
            { title: 'Themes.', text: 'The main groups of findings, each discussed across several studies.' },
            { title: 'Methods.', text: 'How the studies were done, and how their designs affect what they can show.' },
            { title: 'Debates and contradictions.', text: 'Where studies disagree, and the most likely reasons why.' },
            { title: 'Gaps and future directions.', text: 'What remains unknown, leading naturally to your own question.' },
          ],
          tone: 'green',
        },
        'Signposting holds the parts together. Open each section with a sentence that tells the reader what it will show, and close it with a sentence that leads into the next.',
        'Priya\'s new outline followed this shape. Instead of forty summaries she had three themes: extracts that break up existing biofilms, extracts that stop them forming, and extracts that make antibiotics work better. Under each theme, the papers now answered one another.',
        '[Fiberarticle](https://app.fiberarticle.com)\'s Literature Reviewer organises its written reviews the same way, as overview and scope, themes, methodological approaches, contradictions and open debates, and research gaps and future directions, with every point tied to a numbered source you can open and check. Use it as a first map of a field, not as a replacement for reading the papers yourself.',
      ],
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes, and what to do instead',
      Art: MistakesScene,
      caption: 'four mistakes an examiner spots within a page',
      body: [
        'Most weak literature reviews go wrong in the same few ways. Knowing them in advance makes them easy to avoid.',
        {
          table: {
            head: ['Mistake', 'What to do instead'],
            rows: [
              ['Summarising papers one by one', 'Group papers by theme and compare them within each theme'],
              ['Describing without judging', 'Say which studies are stronger, and why'],
              ['Leaving out recent or opposing work', 'Search again near the end, and include studies that disagree'],
              ['Citing papers you have not read', 'Cite what you actually read, or read the original first'],
              ['Quoting long passages', 'Explain ideas in your own words, with a citation'],
              ['Ending without a gap', 'Close by stating clearly what remains unknown'],
            ],
          },
          tone: 'pink',
        },
        'The second mistake is common and easy to fix. After describing a group of studies, add one or two sentences of judgement: which study had the larger sample, which used a better control, which result is more likely to hold. That judgement is what makes the review yours.',
        {
          note: 'read your review and underline every sentence that only describes a single paper. If most of the page is underlined, it is still a catalogue.',
          label: 'quick test',
          tone: 'red',
        },
      ],
    },
    {
      id: 'how-long-and-how-many-papers',
      title: 'How long should it be, and how many papers?',
      Art: CountScene,
      caption: 'a pile of papers impresses nobody; connected papers do',
      body: [
        'This is usually the first question students ask, and the honest answer is that it depends on your level, your subject and your university. Some rough guides still help.',
        {
          list: [
            'A master\'s dissertation often draws on a few dozen sources.',
            'A PhD thesis often cites well over a hundred.',
            'A related work section in a journal paper usually discusses only the most relevant studies, often a couple of dozen or fewer.',
          ],
          style: 'dots',
        },
        'A master\'s review chapter often has a short introduction, three or four themed sections, and a closing section on gaps. Treat that as a starting shape, not a rule.',
        'Quality beats count. Forty well chosen papers that you connect will impress an examiner more than a hundred you merely list. The easiest way to calibrate is to look at two or three recent theses from your own department, many of which are free on Shodhganga, and to ask your guide what they expect.',
        'Priya\'s second draft cited thirty-two papers, eight fewer than the first, because some did not fit any theme. Dr. Raghavan returned it with a new line in the margin: *Now this is a review.* When you are ready to write your own, [how to write a literature review](/blogs/how-to-write-a-literature-review/) walks through the process step by step.',
      ],
    },
  ],

  takeaways: [
    'A literature review is an organised, critical account of research, not a list of summaries.',
    'It shows what is known, places your work, finds the gap and justifies your method.',
    'Organise by themes and ideas, not paper by paper.',
    'Good reviews move from scope to themes, methods and debates, and end with the gap.',
    'How many papers depends on your level; connecting them matters more than counting them.',
  ],

  faq: [
    {
      q: 'What is the difference between a literature review and an annotated bibliography?',
      a: 'An annotated bibliography lists sources with a short note on each, one by one. A literature review weaves the same sources into one argument organised by themes. The first is a catalogue; the second is a review.',
    },
    {
      q: 'Is a literature review the same as a review article?',
      a: 'Not quite. Every review article is a literature review, but a literature review can also be one chapter of a thesis or a short section of a research paper. The skill is the same; the scale is different.',
    },
    {
      q: 'Can I write my literature review before my research is finished?',
      a: 'Yes, and most people draft it early, because it shapes the research question and method. Expect to update it at the end, since new papers appear and your own findings may change what matters.',
    },
    {
      q: 'How is a literature review different from an introduction?',
      a: 'An introduction sets up your problem briefly and says why it matters. A literature review examines the existing research in depth. In many journal papers the two are merged, so follow the structure your target journal uses.',
    },
    {
      q: 'Should a literature review include my own opinion?',
      a: 'It should include your judgement: which studies are stronger, why results differ, what is missing. Keep that judgement grounded in evidence, and support every claim with a citation.',
    },
  ],

  cta: {
    title: 'Start from a map of the field',
    text: 'Fiberarticle\'s Literature Reviewer reads the papers on your topic and drafts an evidence matrix and a structured review, with every point tied to a source you can check. One payment unlocks all of it, for good.',
  },
}
