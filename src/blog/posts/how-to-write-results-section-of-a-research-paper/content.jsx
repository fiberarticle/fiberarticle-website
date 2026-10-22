import Hero from './hero.jsx'
import {
  ExampleScene,
  NegativeScene,
  NumbersScene,
  PurposeScene,
  QualitativeScene,
  StepsScene,
  TablesScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the results section is the sorting table: what you found, in order, before anyone asks what it means',
  },

  intro: [
    'Joel D\'Souza is in the final year of his MSc in Marine Sciences at a university in Goa. His dissertation asks whether beaches with more visitors have more microplastics in their sand. Over one winter he took sand samples from six beaches, three busy ones and three quiet ones, dried them, sieved them and counted every small piece of plastic under a microscope.',
    'The counting took four months. The results chapter took one night. He pasted the output tables from his statistics software one after another, wrote the same averages again in sentences under each table, added a bar chart of the same numbers, and called the difference "proof that tourism is destroying Goa\'s beaches". One quiet beach, near the mouth of a river, had more plastic than any busy beach. He left it out because it "spoiled the pattern".',
    'His guide, Dr. Naik, read the chapter and asked two questions. "Where is the sixth beach?" And then: "Why are you telling me what it means? Tell me what you found, in the order you asked. Save the meaning for the discussion."',
    'This blog explains how to write results section of a research paper or thesis the way Joel rewrote his: what the section is for, the order to write it in, how to report statistics, tables and figures, what to do with results that did not go your way, qualitative findings, and an example.',
  ],

  sections: [
    {
      id: 'what-is-the-results-section',
      title: 'What is the results section of a research paper?',
      Art: PurposeScene,
      caption: 'the results say what happened; the meaning waits in the next room',
      body: [
        'The results section reports what your study found, using the methods you described before it. The writing guide of the University of Southern California library puts it simply: the results section should "arrange and describe the findings in a logical sequence without bias or interpretation."',
        {
          define: 'results section',
          hint: 'noun',
          meaning: 'The part of a research paper or thesis that reports the findings of the study, in a logical order, without explaining why they happened or what they mean.',
          tone: 'blue',
        },
        'The most common confusion is between the results and the discussion. Grad Coach sums up the line between them in one sentence: "the results chapter describes the data, while the discussion chapter explains what they mean."',
        {
          compare: {
            left: {
              title: 'results',
              tone: 'blue',
              mark: 'dots',
              items: [
                'what you found, with numbers or themes',
                'in the order of your research questions',
                'tables and figures, described in the text',
              ],
            },
            right: {
              title: 'discussion',
              tone: 'green',
              mark: 'dots',
              items: [
                'why it might have happened',
                'how it compares with other studies',
                'what it means, and how far it can be trusted',
              ],
            },
          },
        },
        'Many journals, and many theses in science and engineering, combine the two into one "Results and discussion" section or chapter. Whether you may combine them depends on your journal or your university, so check the guide for authors or your thesis format first. Even in a combined chapter, keep the report of each finding clearly apart from your explanation of it. For where the results sit among the other parts of a paper, see [the structure of a research paper](/blogs/structure-of-a-research-paper/).',
      ],
    },
    {
      id: 'how-to-write-results-section-of-a-research-paper',
      title: 'How to write results section of a research paper, step by step',
      Art: StepsScene,
      caption: 'five steps, from a reminder of the question to a short summary',
      body: [
        'Guides from USC, Grad Coach and Researcher.Life suggest much the same order. Before you start, write your research questions or hypotheses on one sheet and keep it beside you. Every paragraph of the results should answer one of them.',
        {
          steps: [
            { title: 'Remind the reader of the question.', text: 'One or two sentences restating the aim or the research questions. After the methods, this tells the reader what to look for.' },
            { title: 'Describe what you ended up with.', text: 'How many people answered, how many samples were analysed, and anything lost or left out along the way. Joel wrote that 30 samples were collected and all 30 were analysed.' },
            { title: 'Report any checks on the data.', text: 'If your method calls for them, report checks such as the reliability of a questionnaire scale. Grad Coach notes that Cronbach\'s alpha is the most common test for this.' },
            { title: 'Answer each question in turn.', text: 'Take the research questions or hypotheses in the same order as your introduction, under clear subheadings, and give each one a plain answer: supported or not supported.' },
            { title: 'Close with a short summary.', text: 'A few lines that pull the main findings together and lead the reader into the discussion.' },
          ],
          tone: 'blue',
        },
        'Report only what answers your questions; the USC guide warns against findings that do not address the research problem. Do not repeat your methods either. That is the job of the chapter before, explained in [how to write a research methodology](/blogs/how-to-write-a-research-methodology/).',
        {
          note: 'write the results in the past tense, because the study is finished. USC says to "always use the past tense when referring to your study\'s findings." Use the present tense only for what is still true on the page, such as "Table 2 shows".',
          label: 'tense',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'how-to-report-numbers-and-statistics',
      title: 'How to report numbers and statistics in the results',
      Art: NumbersScene,
      caption: 'a number on its own says little; with its spread and its test, it says enough',
      body: [
        'Start with descriptive statistics. Grad Coach lists means, medians and standard deviations for numbers such as scores or counts, and frequencies or percentages for categories such as gender or beach type. Then report the inferential tests that answer your questions. "The most important thing," Grad Coach writes, "is to use the tests that answer your research questions, and to report them fully."',
        'Reporting a test fully means giving more than the word "significant". Put these together in one sentence:',
        {
          list: [
            'the test statistic and its degrees of freedom, for example t(28) = 2.42;',
            'the exact p value, for example p = .022, rather than only "p < .05";',
            'an effect size, which tells the reader how big the difference is;',
            'a confidence interval, where your field expects one.',
          ],
          style: 'check',
        },
        'Very small p values are written as p < .001, never as p = .000, which some software prints. House styles differ: APA style drops the zero before the decimal point (.022), while the *New England Journal of Medicine* keeps it (0.02), as GraphPad\'s guide to reporting P values shows. Follow your journal or university, and be consistent.',
        {
          table: {
            head: ['first draft', 'rewrite'],
            rows: [
              [
                'Busy beaches had much more plastic (significant!), which proves that tourists are polluting the sand.',
                'Busy beaches had more microplastic pieces per kilogram of dry sand (M = 41, SD = 12) than quiet beaches (M = 29, SD = 15), t(28) = 2.42, p = .022, d = 0.88.',
              ],
            ],
          },
          tone: 'blue',
        },
        'Notice what the rewrite leaves out: the word "proves" and any idea of why. Those questions belong to the discussion. If your study tested a hypothesis, say plainly whether the result supported it; [how to write a hypothesis](/blogs/how-to-write-a-hypothesis/) shows how a hypothesis and its result should line up.',
      ],
    },
    {
      id: 'tables-and-figures-in-the-results-section',
      title: 'Tables and figures in the results section',
      Art: TablesScene,
      caption: 'one set of numbers, shown once, in the form that suits it best',
      body: [
        'Use a table when the reader needs exact values, a figure when the shape of the data matters more than the exact numbers, and plain text when there are only one or two numbers to give. Whatever you choose, show each set of data only once. Joel\'s first draft had the same six averages in a table, in a bar chart and in the text. He kept the table, dropped the chart and wrote one sentence about the pattern.',
        {
          list: [
            'Number every table and figure in the order they appear, and give each a clear title or caption.',
            'Mention each one in the text before it appears, and say in words what the reader should notice.',
            'Do not repeat every value from a table in your sentences. Point out the main finding and let the table hold the details.',
            'Build your own tables. Grad Coach advises against pasting raw software output, because "raw output is cluttered."',
            'Move long tables, raw data and interview transcripts to an appendix, and refer to it in the text.',
          ],
          style: 'dots',
        },
        {
          note: 'Grad Coach puts the balance well: "Figures and tables should support the writing, not carry it." Researcher.Life adds a warning in the other direction: too many tables and figures make readers lose focus.',
          label: 'remember',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'report-negative-results',
      title: 'Report the results that did not go your way',
      Art: NegativeScene,
      caption: 'the beach that spoiled the pattern goes back on the map',
      body: [
        'Leaving out the sixth beach was the most serious mistake in Joel\'s first draft, because a reader who later finds missing data will doubt everything else. The USC guide lists ignoring negative results among the things to avoid: report them, and explain in the discussion why they might have happened.',
        'Grad Coach says the same of hypotheses: "one hypothesis at a time, each with a verdict", supported or not.',
        {
          compare: {
            left: {
              title: 'hiding it',
              tone: 'red',
              mark: 'cross',
              items: [
                'dropping a site or a group because it "spoiled the pattern"',
                'reporting only the tests that came out significant',
                'quietly changing the hypothesis to fit the data',
              ],
            },
            right: {
              title: 'reporting it',
              tone: 'green',
              mark: 'check',
              items: [
                'every site, sample and group you said you would study',
                'every planned test, with its result',
                'the original hypothesis, and whether it was supported',
              ],
            },
          },
        },
        'Joel put the river mouth beach back. In the rewrite, one plain sentence reports it: the quiet beach near the river mouth had the highest mean count of all six beaches. Its possible explanation, plastic carried down by the river, waits for the discussion. Leaving data out to make a result look cleaner misrepresents what the study found.',
      ],
    },
    {
      id: 'how-to-write-qualitative-findings',
      title: 'How to write results for qualitative research',
      Art: QualitativeScene,
      caption: 'a theme on top, the voices that support it underneath',
      body: [
        'In a qualitative study, the results are usually called findings, and they are organised by themes instead of tests. Joel also interviewed eight people who run beach shacks about how the sand is cleaned. Guides on writing up qualitative research agree on a few points:',
        {
          list: [
            'Use your main themes as subheadings. A label taken from the participants\' own words often works well; one of Joel\'s became "the river brings it".',
            'Open each theme with your own statement of the pattern, then give the quotes that support it.',
            'Give each quote enough context to be understood. Use "..." where words are cut and [square brackets] for words you add.',
            'Spread the quotes across participants, and say where views differed. Two talkative people should not stand in for eight.',
            'Use codes or pseudonyms, and leave out details that could identify someone, such as the exact name and location of a shack.',
          ],
          style: 'numbers',
        },
        'Report what participants said and how widely a view was shared, and keep your explanation for the discussion. For how the two kinds of study differ, see [qualitative vs quantitative research](/blogs/qualitative-vs-quantitative-research/).',
        {
          note: 'saying that six of the eight shack owners described cleaning only after the monsoon is clearer than "most". But do not turn eight interviews into percentages, as if they were a survey.',
          label: 'tip',
          tone: 'green',
        },
      ],
    },
    {
      id: 'results-section-example-and-common-mistakes',
      title: 'Results section example and common mistakes',
      Art: ExampleScene,
      caption: 'the first draft explained everything; the rewrite reported it',
      body: [
        'Here is a short part of Joel\'s rewritten results, under the subheading for his first research question:',
        {
          quote: 'All 30 sand samples (five from each of six beaches) were analysed. Microplastic pieces were found in every sample. Busy beaches had more pieces per kilogram of dry sand (M = 41, SD = 12) than quiet beaches (M = 29, SD = 15), t(28) = 2.42, p = .022, d = 0.88. The hypothesis was therefore supported. However, counts varied widely within the quiet group: the beach nearest the river mouth had the highest mean count of all six beaches (Table 2).',
          by: 'from Joel\'s rewritten results chapter',
          tone: 'blue',
        },
        'It names the sample, gives the numbers once, reports the test fully, states the verdict on the hypothesis, includes the result that did not fit and points to the table. It does not say why. That is the job of [the discussion](/blogs/how-to-write-discussion-in-research-paper/).',
        'These are the mistakes Joel\'s first draft made, and the ones examiners and reviewers notice most:',
        {
          list: [
            'explaining or judging the findings instead of reporting them;',
            'pasting software output instead of building clean tables;',
            'showing the same numbers in a table, a chart and the text;',
            'leaving out results that did not fit the expected pattern;',
            'writing "significant" with no test, no exact p value and no effect size;',
            'adding results that do not answer any research question.',
          ],
          style: 'cross',
        },
        'Joel\'s new results chapter was six pages shorter than the first. At his viva, the external examiner turned to Table 2 and asked about the river mouth beach. Joel was ready: the number was in his results, and his discussion had a paragraph on why it might be so.',
      ],
    },
  ],

  takeaways: [
    'The results section reports what you found, in a logical order, without explaining why it happened or what it means.',
    'Follow your research questions or hypotheses in order, and close with a short summary that leads into the discussion.',
    'Report statistics fully: the test, the exact p value and an effect size, in the style your journal asks for.',
    'Show each set of data once, in a table, a figure or the text, and say in words what the reader should notice.',
    'Report every result you planned, including the ones that did not go your way.',
  ],

  faq: [
    {
      q: 'What tense should the results section be written in?',
      a: 'Use the past tense for your findings, because the study is complete: "busy beaches had more pieces". Use the present tense for what is on the page in front of the reader: "Table 2 shows the mean count for each beach".',
    },
    {
      q: 'Can the results and discussion be combined?',
      a: 'Often, yes. Many journals and many theses, especially in science and engineering, use one "Results and discussion" section or chapter. Check your journal\'s guide for authors or your university\'s thesis format. In a combined section, report each finding first and then discuss it, so the two never blur.',
    },
    {
      q: 'Should I cite other studies in the results section?',
      a: 'Usually not. Comparing your findings with earlier studies is part of interpreting them, which belongs in the discussion. Some fields and combined chapters do it differently, so look at a few recent papers in your target journal.',
    },
    {
      q: 'How long should the results section be?',
      a: 'There is no fixed length; it depends on how many questions you have and how much data answers them. Keep it concise, cut anything that answers no question, and move raw data to an appendix.',
    },
  ],

  cta: {
    title: 'Find the studies your results will be compared with',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and shows the passage behind every point it writes, so you can check what earlier studies really found before your discussion compares your results with them. One payment unlocks all of it, for good.',
  },
}
