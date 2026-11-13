import Hero from './hero.jsx'
import {
  ChartScene,
  FrameworkScene,
  MistakesScene,
  PccScene,
  ViewScene,
  VsScene,
  WhenScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a scoping review draws the map: what has been studied, how, and where nobody has looked',
  },

  intro: [
    '"What is a scoping review?" Dhara Solanki typed the question into Google at eleven at night, an hour after her guide had written those two words in the margin of her synopsis. Dhara is a first year PhD scholar in Social Work at a university in Vadodara. Before her PhD she spent two years with an NGO that ran evening classes in the old city. Some children always came late or left early, and when she asked why, the answer was often the same: a mother on dialysis, a grandfather who could not be left alone, a brother with a disability. These children were looking after someone at home.',
    'For her synopsis she had proposed a systematic review on one question: does caring for a family member harm a child\'s schooling? Her guide, Dr. Vaidya, was not convinced. "You are asking whether it harms them before you know what has been studied at all," she said. "How many studies are there in India? What do they even call these children? Do a scoping review first."',
    'This blog explains what a scoping review is, when to choose one over a systematic review, the frameworks behind it, and how to do one step by step, the way Dhara did.',
  ],

  sections: [
    {
      id: 'what-is-a-scoping-review',
      title: 'What is a scoping review?',
      Art: ViewScene,
      caption: 'from high up you can see where the papers pile up and where the ground is bare',
      body: [
        {
          define: 'Scoping review',
          hint: 'also called a scoping study',
          meaning: 'A review that uses a planned, transparent search to map the research on a broad topic: how much there is, what kinds of evidence exist, what the key ideas are, and where the gaps lie.',
          tone: 'green',
        },
        'The PRISMA website puts it in one line: scoping reviews "serve to synthesize evidence and assess the scope of literature on a topic". A scoping review does not try to prove that something works. It tells you what is out there.',
        'The method is usually traced to a paper by Arksey and O\'Malley, published in the *International Journal of Social Research Methodology* in 2005. They gave four reasons for doing one:',
        {
          list: [
            'to examine the extent, range and nature of the research on a topic',
            'to decide whether a full systematic review is worth doing',
            'to summarise and share what the research has found',
            'to identify gaps in the existing literature',
          ],
          style: 'dots',
        },
        'A scoping review is also not limited to journal articles. University library guides describe it as covering a wider range of study designs than a systematic review usually allows. That mattered to Dhara, because much of what is known about children who care for family members sits in NGO reports and theses. Our blog on [types of literature review](/blogs/types-of-literature-review/) compares the main review types side by side.',
        {
          note: 'scoping reviews are not only for health topics. Arksey and O\'Malley built their framework while reviewing services for carers of people with mental health problems, and one example from education is a scoping review of flipped classrooms in higher education by O\'Flaherty and Phillips, published in 2015.',
          label: 'good to know',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'when-to-do-a-scoping-review',
      title: 'When to do a scoping review',
      Art: WhenScene,
      caption: 'six good reasons, from Munn and colleagues',
      body: [
        'The clearest guidance comes from a paper by Zachary Munn and colleagues in *BMC Medical Research Methodology* in 2018. It lists six purposes that suit a scoping review:',
        {
          list: [
            'to identify the types of available evidence in a given field',
            'to clarify key concepts and definitions in the literature',
            'to examine how research is conducted on a certain topic or field',
            'to identify key characteristics or factors related to a concept',
            'as a precursor to a systematic review',
            'to identify and analyse knowledge gaps',
          ],
          style: 'numbers',
        },
        'Dhara could tick three of these at once. She did not know what types of evidence existed in India, or what the children were called: young carers, young caregivers or child caregivers. And she wanted the gaps, because one of them would become her PhD.',
        'The same paper says when a scoping review is the wrong choice. If your question is about the feasibility, appropriateness, meaningfulness or effectiveness of a treatment or practice, a systematic review is likely the most valid approach. In simple words, "does it work?" is a systematic review question, and "what do we know?" is a scoping review question.',
        {
          note: 'Dhara\'s first question, whether caring harms schooling, was not thrown away. It was parked until the map was ready.',
          label: 'in the story',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'scoping-review-vs-systematic-review',
      title: 'Scoping review vs systematic review',
      Art: VsScene,
      caption: 'one draws the whole map, the other aims at a single point on it',
      body: [
        'Both reviews follow a structured process and a search that others can repeat. The differences are in what they are for.',
        {
          table: {
            head: ['', 'scoping review', 'systematic review'],
            rows: [
              ['question', 'broad, often framed with PCC', 'focused, often framed with PICO'],
              ['aim', 'map the evidence and the gaps', 'answer one precise question'],
              ['sources', 'many study designs, and reports or theses too', 'usually limited to certain study designs'],
              ['quality check of each study', 'generally not done, unless the aim needs it', 'risk of bias is assessed'],
              ['result', 'a descriptive overview in counts, tables and themes', 'a synthesis of findings, sometimes with a meta-analysis'],
              ['advice for practice', 'limited or none', 'a key feature'],
              ['reporting guideline', 'PRISMA-ScR', 'PRISMA 2020'],
            ],
          },
          tone: 'blue',
        },
        'The row on quality surprises many students. Munn and colleagues explain that a scoping review does not aim to produce a critically appraised answer to a specific question, so risk of bias is generally not assessed. For the same reason, it cannot tell practitioners what to do.',
        {
          note: 'a scoping review is not a quick systematic review. The search and screening are just as careful. Our guide on [how to do a systematic review](/blogs/how-to-do-a-systematic-review/) shows the other path in full.',
          label: 'careful',
          tone: 'red',
        },
      ],
    },
    {
      id: 'scoping-review-framework',
      title: 'The scoping review framework: four names you will meet',
      Art: FrameworkScene,
      caption: 'the method grew in steps, and each step left a paper you can cite',
      body: [
        'When your guide asks "which framework are you following?", the answer is usually one of these.',
        '**Arksey and O\'Malley (2005).** The original framework has five stages, with an optional sixth:',
        {
          list: [
            'identifying the research question',
            'identifying relevant studies',
            'study selection',
            'charting the data',
            'collating, summarising and reporting the results',
          ],
          style: 'numbers',
        },
        'The optional sixth is a consultation exercise with people who know the field.',
        '**Levac, Colquhoun and O\'Brien (2010).** This paper refined the framework stage by stage. It recommended two reviewers for study selection, and it argued that consultation should be a required stage and not an optional one.',
        '**JBI.** The JBI Manual for Evidence Synthesis has a full chapter on scoping reviews. JBI guidance asks for a protocol written in advance and recommends the PCC mnemonic for the question.',
        '**PRISMA-ScR (2018).** This is a reporting guideline, published by Tricco and colleagues in the *Annals of Internal Medicine*. It tells you what the written report must contain, not how to do the review.',
        {
          note: 'name the framework and its reference in your methods section. Departments differ on which one they expect, so ask your guide first.',
          label: 'tip',
          tone: 'green',
        },
      ],
    },
    {
      id: 'how-to-do-a-scoping-review',
      title: 'How to do a scoping review, step by step',
      Art: PccScene,
      caption: 'three notes turn a worry into a question wide enough to map a field',
      body: [
        {
          steps: [
            {
              title: 'Check that nobody has done it already.',
              text: 'Search for published scoping reviews and protocols on your topic. Dhara found reviews on young carers in other countries, and none on India.',
            },
            {
              title: 'Frame the question with PCC.',
              text: 'PCC stands for population, concept and context. It is looser than PICO on purpose, because a map needs a wide question.',
            },
            {
              title: 'Write a protocol.',
              text: 'Set down the objectives, the eligibility criteria, a sample search strategy, how sources will be selected, how disagreements will be settled and the charting form.',
            },
            {
              title: 'Search widely.',
              text: 'Use several databases, and add grey literature such as theses, conference proceedings and reports. Dhara searched Scopus, PubMed, Google Scholar, Shodhganga and NGO websites.',
            },
            {
              title: 'Screen in two stages.',
              text: 'First titles and abstracts, then full texts, against the criteria in the protocol. Two people should screen independently, after trying the criteria on a small sample together.',
            },
            {
              title: 'Chart the data, then collate and report.',
              text: 'These last steps have their own section below.',
            },
          ],
          tone: 'green',
        },
        'This is how the PCC looked for Dhara.',
        {
          table: {
            head: ['letter', 'means', 'Dhara\'s answer'],
            rows: [
              ['P', 'population', 'children and adolescents under 18'],
              ['C', 'concept', 'giving regular unpaid care to a family member'],
              ['C', 'context', 'India, in any setting: home, school or community'],
            ],
          },
          tone: 'amber',
        },
        'Her question became: "What is known from the existing literature about children under 18 who give unpaid care to a family member in India?"',
        'University library guides suggest registering the protocol on the Open Science Framework (OSF) or Figshare, or publishing it in a journal such as *JBI Evidence Synthesis*. PROSPERO, the register many systematic reviewers use, is a different matter. Munn and colleagues noted in 2018 that it was not available for scoping reviews, and library guides still say the same, so check its current rules.',
        'The search needed care, because the same children appear under different names. Dhara joined "young carer", "young caregiver" and "child caregiver" with OR before adding India. Our blog on [searching academic databases](/blogs/how-to-search-academic-databases/) shows how. She screened with Jignesh, a fellow scholar, and the protocol named Dr. Vaidya to settle any disagreement.',
      ],
    },
    {
      id: 'chart-the-data-and-report',
      title: 'Chart the data and report with PRISMA-ScR',
      Art: ChartScene,
      caption: 'one row for each source, then count what the rows show',
      body: [
        'Charting is the scoping review word for data extraction. You fill the same form for every included source. Typical fields are the author, year, country, aim, population and sample size, method, and key findings. Dhara added two of her own: the word used for the children, and who they cared for.',
        'Test the form on a few sources first. A [literature review matrix](/blogs/literature-review-matrix/) is a good shape for the chart, with one source in each row.',
        'The analysis is descriptive. You count, group and describe, without pooling numbers or ranking studies. Guides suggest a numerical summary together with a simple thematic analysis, shown in tables, charts or an evidence map. Here is the shape of Dhara\'s review.',
        {
          table: {
            head: ['stage', 'Dhara\'s numbers'],
            rows: [
              ['records found in databases, Shodhganga and NGO websites', '1,284'],
              ['duplicates removed', '392'],
              ['records screened by title and abstract', '892'],
              ['excluded at that stage', '811'],
              ['full texts assessed', '81'],
              ['full texts excluded, with reasons', '49'],
              ['sources included', '32'],
            ],
          },
          tone: 'green',
        },
        'The numbers are made up for this blog, but every box must add up in a real review too. Of the 32 sources, 19 were interview studies, 8 were surveys and 5 were reports from NGOs.',
        'For the write up, follow **PRISMA-ScR**. Its checklist has 20 essential reporting items and 2 optional ones, running from the title and the protocol to the limitations and funding. The two items on critical appraisal of sources are worded "if done", which fits what we saw earlier: in a scoping review, appraisal happens only when the aim calls for it.',
      ],
    },
    {
      id: 'common-mistakes-in-a-scoping-review',
      title: 'Common mistakes, and what Dhara found',
      Art: MistakesScene,
      caption: 'three habits to drop, and one checklist to keep',
      body: [
        'Guides on scoping reviews warn about the same few mistakes.',
        {
          list: [
            'choosing a scoping review only to avoid judging the quality of studies',
            'using it for a "does it work?" question that needs a systematic review',
            'setting the scope so wide that the screening never ends, or so thin that nothing useful is said',
            'ending with recommendations for practice or policy',
            'changing the plan midway without reporting the change and the reason',
            'assuming it will be quick',
          ],
          style: 'cross',
        },
        'On the last point, the sources do not agree. One guide says a scoping review can often be done in a few months. One university library warns that it may take longer than a systematic review. It depends on how wide the question is, so plan the time with your guide.',
        'Dhara\'s review took most of two semesters, and the map was worth it. The 32 sources used three different names for the same children. Only three had been done in villages. None had followed the children over time, and none had used school attendance records. Every study that spoke about schooling relied on what the children remembered.',
        'So the question she had parked came back, sharper than before. Her PhD will follow young carers in the villages of one district through a full school year, using attendance registers. "Now you know why it needs doing," Dr. Vaidya said, "and you can show it in one table."',
      ],
    },
  ],

  takeaways: [
    'A scoping review maps the research on a broad topic: how much exists, what kind it is and where the gaps are.',
    'Choose it to clarify concepts, see the types of evidence or find gaps. For a "does it work?" question, do a systematic review.',
    'Frame the question with PCC: population, concept and context.',
    'Write a protocol first, search widely including grey literature, and screen with two people.',
    'Chart the data in one form, describe it without ranking the studies, and report with PRISMA-ScR.',
  ],

  faq: [
    {
      q: 'What is the difference between a scoping review and a literature review?',
      a: 'A traditional literature review is usually written from papers the author chose, and the search is often not reported. A scoping review follows a protocol, reports the full search and the selection of sources, and charts the same details from every source, so another researcher could repeat it.',
    },
    {
      q: 'Can I register a scoping review protocol on PROSPERO?',
      a: 'University library guides say PROSPERO does not accept scoping reviews, but check its website for the current rules. The common alternatives are the Open Science Framework, Figshare, or publishing the protocol in a journal.',
    },
    {
      q: 'How many studies should a scoping review include?',
      a: 'There is no fixed number. It depends on how wide the question is and how much has been written. Among the examples in the paper by Munn and colleagues, one scoping review included 20 resources and another mapped 1,603 sources.',
    },
    {
      q: 'Can I do a scoping review alone?',
      a: 'The guidance expects a team. Levac and colleagues recommended two reviewers for study selection. Ask a fellow scholar to screen with you, name your guide to settle disagreements, and state openly who did what.',
    },
  ],

  cta: {
    title: 'Start your map with the papers in one place',
    text: 'Fiberarticle\'s Literature Reviewer searches four scholarly indexes, screens papers against your own criteria, and builds an evidence matrix with themes and research gaps you can export, with every point tied to its source. One payment unlocks all of it, for good.',
  },
}
