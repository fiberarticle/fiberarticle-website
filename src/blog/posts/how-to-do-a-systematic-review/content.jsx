import Hero from './hero.jsx'
import {
  BiasScene,
  PicoScene,
  PrismaScene,
  ProtocolScene,
  ScreenScene,
  SearchScene,
  WhatScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'hundreds of records go in at the top, and a handful of studies come out at the bottom',
  },

  intro: [
    'Zoya Ansari is in the final year of her MDS in Public Health Dentistry at a dental college in Belagavi. Every month she visits government schools with a team that teaches children how to brush. One afternoon a headmaster asked her a fair question: "Does all this teaching actually make their teeth cleaner?"',
    'She did not know. Some papers said yes, a few said no, and most were small. Her guide, Dr. Patil, suggested she stop picking papers that agreed with her and answer the question properly, with a systematic review. "Not a summary of what you have read," he said. "A search so careful that someone else could repeat it and find the same studies."',
    'This blog explains how to do a systematic review the way Zoya learnt to, step by step: the question, the protocol, the search, the screening, the risk of bias and the PRISMA flow diagram.',
  ],

  sections: [
    {
      id: 'what-is-a-systematic-review',
      title: 'What is a systematic review?',
      Art: WhatScene,
      caption: 'a narrative review picks its path; a systematic review follows a map drawn in advance',
      body: [
        'A systematic review answers one focused question using all the studies that meet rules you set before you start. The search, the choice of studies and the analysis are planned in advance and written down, so another researcher could follow the same steps and reach the same set of studies.',
        {
          compare: {
            left: {
              title: 'a narrative review',
              tone: 'amber',
              mark: 'dots',
              items: [
                'a broad topic',
                'papers chosen by the author',
                'search often not reported',
                'quality judged informally',
              ],
            },
            right: {
              title: 'a systematic review',
              tone: 'green',
              mark: 'check',
              items: [
                'one focused question',
                'studies chosen by written criteria',
                'every search reported in full',
                'risk of bias assessed with a tool',
              ],
            },
          },
        },
        'Neither is better in every case. A narrative review suits a wide topic; a systematic review suits a precise question where you want the whole body of evidence. Our blog on [types of literature review](/blogs/types-of-literature-review/) compares them with scoping and umbrella reviews.',
        {
          note: 'a systematic review is a study in its own right, and the steps below take real time. Plan it with your guide before promising it in a synopsis or to a journal.',
          label: 'honest note',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'write-a-focused-question-with-pico',
      title: 'Write a focused question with PICO',
      Art: PicoScene,
      caption: 'four boxes turn a vague worry into a question with edges',
      body: [
        'Zoya\'s first question was "Is oral health education useful?" Dr. Patil asked: useful for whom, compared with what, and measured how? The Cochrane Handbook, the standard guide for health reviews, says the scope of a review is defined by the population, the interventions and comparisons, and the outcomes, and uses the acronym PICO as a reminder.',
        {
          table: {
            head: ['letter', 'means', 'Zoya\'s answer'],
            rows: [
              ['P', 'population', 'school children aged 6 to 12'],
              ['I', 'intervention', 'oral health education given in school'],
              ['C', 'comparison', 'no education, or the usual school routine'],
              ['O', 'outcome', 'dental plaque, measured with a plaque index'],
            ],
          },
          tone: 'green',
        },
        'Her new question read: "In school children aged 6 to 12, does oral health education in school reduce dental plaque compared with no education?" Our guide to [writing a research question](/blogs/how-to-write-a-research-question/) explains how to test a question like this.',
        'The Handbook adds that eligibility criteria are based on the PICO elements plus the types of study that have addressed the question. Zoya added one more rule: randomised and non-randomised controlled trials only. It also warns that outcomes are rarely used to include or exclude studies, so a trial that measured plaque but did not report it clearly should still be found and noted.',
        {
          note: 'PICO is built for questions about interventions. Questions about experiences or causes use other frames, so ask your guide which one your field prefers.',
          label: 'good to know',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'write-and-register-a-protocol',
      title: 'Write and register a protocol',
      Art: ProtocolScene,
      caption: 'the plan is written, dated and stamped before the first search runs',
      body: [
        'A protocol is the written plan of your review. It fixes your decisions before you see any results, so you cannot quietly change the rules to suit what you find. Zoya\'s protocol was six pages long and covered:',
        {
          list: [
            'the question and the PICO, in full',
            'the inclusion and exclusion criteria',
            'the databases and the draft search strategy',
            'how studies will be screened, and by how many people',
            'what data will be extracted, on a sample form',
            'the risk of bias tool',
            'how results will be combined, and when a meta-analysis will or will not be done',
          ],
          style: 'check',
        },
        'Health reviews are often registered on PROSPERO, an international register of systematic reviews run from the University of York. When its founders described it in 2012, registration was free, it covered reviews with a health-related outcome, and it advised registering before formal screening began. Check the current rules on its website before you submit.',
        'Outside health, ask your guide where reviews in your field record their protocols. If there is no register, attach the dated protocol to your thesis or share it with your guide by email, so the plan exists before the results do.',
      ],
    },
    {
      id: 'search-more-than-one-database',
      title: 'Search more than one database, and record everything',
      Art: SearchScene,
      caption: 'one question, many databases, and a notebook that records every search',
      body: [
        'A systematic review lives or dies by its search. The Cochrane Handbook says that a search of MEDLINE alone is not considered adequate, and that searches should aim for high sensitivity, even if that means many irrelevant results. In other words, it is better to screen out 900 unrelated papers than to miss one that matters.',
        {
          steps: [
            {
              title: 'Build the search from your PICO.',
              text: 'List synonyms for each element, join synonyms with OR and join the elements with AND. Our blog on [searching academic databases](/blogs/how-to-search-academic-databases/) shows how Boolean searching works.',
            },
            {
              title: 'Use subject headings as well as words.',
              text: 'The Handbook asks for both free text and subject headings, such as MeSH in PubMed, because authors describe the same thing in different words.',
            },
            {
              title: 'Search several databases.',
              text: 'Zoya searched PubMed, Scopus, the Cochrane Library and Google Scholar. Which databases suit you depends on your field.',
            },
            {
              title: 'Look beyond journals.',
              text: 'The Handbook suggests grey literature such as reports, dissertations, theses and conference abstracts, and checking the reference lists of included studies and earlier reviews. Zoya searched Shodhganga for Indian theses too.',
            },
            {
              title: 'Record every search.',
              text: 'The database, the date, the exact search string and the number of results. You will need these numbers for the PRISMA flow diagram.',
            },
          ],
          tone: 'blue',
        },
        'The Handbook also strongly recommends that the search strategy be peer reviewed before it is run, ideally with a librarian or information specialist. Zoya asked her college librarian, who added three synonyms she had missed.',
        {
          note: 'export every result into a reference manager and remove duplicates there. Our [Zotero guide](/blogs/how-to-use-zotero/) shows how to keep a large library tidy.',
          label: 'tip',
          tone: 'red',
        },
      ],
    },
    {
      id: 'screen-studies-in-two-stages',
      title: 'Screen studies in two stages, with two people',
      Art: ScreenScene,
      caption: 'two screeners, working apart, then comparing notes',
      body: [
        'Zoya\'s searches found 1,146 records. After removing duplicates she had 812. Now she had to decide, record by record, which ones met her criteria. The Handbook describes the process in two main stages.',
        {
          steps: [
            {
              title: 'Titles and abstracts.',
              text: 'Remove reports that are obviously irrelevant. The Handbook says to be over-inclusive here: when in doubt, keep the record for the next stage.',
            },
            {
              title: 'Full texts.',
              text: 'Read each remaining report in full and check it against every criterion. A single failed criterion is enough to exclude a study. Write down the reason each time.',
            },
          ],
          tone: 'amber',
        },
        'Cochrane requires at least two people working independently to decide whether each study meets the criteria, with the method for settling disagreements fixed in advance. Title and abstract screening by two people is ideal, but one person is acceptable at that first stage. The full-text decision must be made by two.',
        'Zoya screened with Amrita, a classmate, and they each worked alone before comparing. They disagreed on nine studies, and settled all of them by discussion, with Dr. Patil as the tiebreaker the protocol named.',
        {
          note: 'a systematic review done by one person is weaker, because nobody checks the choices. If you must work alone, say so as a limitation and ask your guide to check a sample of your decisions.',
          label: 'careful',
          tone: 'red',
        },
      ],
    },
    {
      id: 'extract-data-and-assess-risk-of-bias',
      title: 'Extract the data and assess the risk of bias',
      Art: BiasScene,
      caption: 'each study gets a row of data and a row of judgements',
      body: [
        'For each included study, Zoya filled the same extraction form: authors and year, country, number and age of children, what the education involved, how long it lasted, the plaque index used, and the results. A [literature review matrix](/blogs/literature-review-matrix/) is a good shape for this, one study per row. Test the form on two or three studies first and fix it before doing the rest.',
        'Next, judge how much you can trust each result. For randomised trials, Cochrane recommends the RoB 2 tool. It looks at five domains of bias:',
        {
          list: [
            'bias arising from the randomisation process',
            'bias due to deviations from the intended interventions',
            'bias due to missing outcome data',
            'bias in measurement of the outcome',
            'bias in selection of the reported result',
          ],
          style: 'numbers',
        },
        'Each domain is judged as low risk, some concerns or high risk. The overall judgement for a result is the least favourable one across the domains, so one high risk domain makes the whole result high risk. Non-randomised studies need a different tool, and your protocol should name it.',
        {
          note: 'in Zoya\'s review, several trials checked plaque with the same teachers who had given the lessons. That raised concerns about measurement of the outcome, and she said so in her results.',
          label: 'example',
          tone: 'green',
        },
      ],
    },
    {
      id: 'synthesise-and-report-with-prisma',
      title: 'Synthesise the results and report them with PRISMA',
      Art: PrismaScene,
      caption: 'the flow diagram: every record accounted for, from search to final set',
      body: [
        'Synthesis means combining what the studies found. If the studies are similar enough in children, programme and measurement, a meta-analysis can pool their numbers into one estimate. If they are not, you compare them in words and tables, grouped in a sensible way. Zoya\'s trials used different plaque indices and very different programmes, so she combined them in words and tables, without pooling the numbers.',
        'Then report the review with **PRISMA 2020**, the reporting guideline published by Matthew Page and colleagues in the *BMJ* in 2021. Its checklist has 27 items in seven sections, from the title and abstract to the discussion and other information. Item 8, for example, asks you to say how many reviewers screened each record and whether they worked independently.',
        'The PRISMA flow diagram maps the number of records identified, included and excluded, with the reasons for exclusion. The PRISMA website offers four templates: for new or updated reviews, and for searches of databases and registers only or of other sources as well. Here is the shape of Zoya\'s.',
        {
          table: {
            head: ['stage', 'Zoya\'s numbers'],
            rows: [
              ['records found in databases and Shodhganga', '1,146'],
              ['duplicates removed', '334'],
              ['records screened by title and abstract', '812'],
              ['excluded at that stage', '761'],
              ['full texts assessed', '51'],
              ['full texts excluded, with reasons', '37 (wrong age group 14, no comparison group 12, plaque not measured 11)'],
              ['studies included', '14'],
            ],
          },
          tone: 'green',
        },
        'The numbers are made up for this blog, but the arithmetic is the point: every box must add up. If 812 records were screened and 761 excluded, exactly 51 full texts go forward.',
        'Zoya\'s review found that most trials reported less plaque after school education, but many had concerns about measurement, so her conclusion was cautious. She went back to the headmaster with a careful answer: probably yes, in the short term, and better trials are needed. For writing up the background and discussion around such a review, see [how to write a literature review](/blogs/how-to-write-a-literature-review/).',
      ],
    },
  ],

  takeaways: [
    'A systematic review answers one focused question using all the studies that meet rules set in advance.',
    'Use PICO to define the population, intervention, comparison and outcome, and add the study types you will include.',
    'Write a protocol before you search, and register it where your field allows.',
    'Search several databases and grey literature, record every search, and screen with two people working independently.',
    'Assess risk of bias with a recognised tool, and report the review with the PRISMA 2020 checklist and flow diagram.',
  ],

  faq: [
    {
      q: 'What is the difference between a systematic review and a meta-analysis?',
      a: 'A systematic review is the whole process of finding, selecting and judging studies. A meta-analysis is a statistical step, usually inside a systematic review, that combines the numerical results of similar studies into one estimate. A systematic review can be done without a meta-analysis.',
    },
    {
      q: 'Can I do a systematic review alone?',
      a: 'You can, but it will be weaker. Cochrane requires at least two people to decide independently which studies meet the criteria. If you work alone, say so as a limitation and ask your guide or a classmate to check a sample of your decisions.',
    },
    {
      q: 'Is PROSPERO registration compulsory?',
      a: 'Not always. Some journals ask for it, so check the instructions of the journal you have in mind, and PROSPERO\'s current eligibility rules. Registering early also shows that you fixed your rules before seeing the results.',
    },
    {
      q: 'Which databases should I search for a systematic review?',
      a: 'At least two or three that cover your field, plus grey literature such as theses and conference abstracts. For health topics the Cochrane Handbook names CENTRAL, MEDLINE and, where available, Embase. Other fields have their own core databases, so ask your librarian.',
    },
  ],

  cta: {
    title: 'Screen and extract with a head start',
    text: 'Fiberarticle\'s Literature Reviewer searches four scholarly indexes, screens papers against your own criteria, and builds an evidence matrix you can export, with every point tied to its source. One payment unlocks all of it, for good.',
  },
}
