import Hero from './hero.jsx'
import {
  CompareScene,
  ExampleScene,
  FindingScene,
  FutureScene,
  LimitsScene,
  PurposeScene,
  StructureScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the results say what happened; the discussion says what it means, and how far that meaning goes',
  },

  intro: [
    'Farhan Qureshi is doing his Master of Public Health in Bhopal. His dissertation asked whether students who use their mobile phones in bed sleep worse than those who do not. He surveyed students in three university hostels, and the numbers came out the way he expected: poor sleep was more common among the students who used their phones in bed every night.',
    'He wrote the discussion in one evening. It opened with "Mobile phones are destroying the sleep of India\'s youth", repeated every percentage from his results chapter, and ended by asking the government to ban phones in hostels after ten. His guide, Dr. Saxena, read the first page and put down her pen. "Your study asked one question in three hostels," she said. "Answer that question. Then tell me how sure you are, and why."',
    'This blog explains how to write discussion in research paper and thesis chapters the way Farhan rewrote his: what the section is for, a structure you can follow, how to compare your findings with other studies, how to write limitations and implications honestly, an example, and the mistakes examiners and reviewers spot first.',
  ],

  sections: [
    {
      id: 'what-is-the-discussion-section',
      title: 'What is the discussion section of a research paper?',
      Art: PurposeScene,
      caption: 'two rooms: what happened, and what it means',
      body: [
        'In most research papers, the results section reports what you found and the discussion explains what it means. The results are about your data. The discussion connects your data back to your research question, to other studies and to the world outside your study.',
        'It is also the section most likely to go wrong. In a 1999 *BMJ* editorial, Michael Docherty and Richard Smith called the discussion "often the weakest part of the paper where careful explanation gives way to polemic". They wrote that authors commonly "go beyond the evidence they have gathered and draw unjustified conclusions". Farhan\'s first draft did exactly that.',
        {
          compare: {
            left: {
              title: 'results',
              tone: 'blue',
              mark: 'dots',
              items: [
                'what you found, with numbers',
                'past tense, no opinions',
                'tables and figures',
              ],
            },
            right: {
              title: 'discussion',
              tone: 'green',
              mark: 'dots',
              items: [
                'what the findings mean',
                'how they fit with other studies',
                'how far they can be trusted, and what comes next',
              ],
            },
          },
        },
        'Some journals and many conference papers combine the two into one "Results and discussion" section, and some theses put a conclusion inside the discussion chapter. Follow your journal\'s instructions or your university\'s thesis format. The thinking stays the same either way. For where the discussion sits among the other parts, see [the structure of a research paper](/blogs/structure-of-a-research-paper/).',
      ],
    },
    {
      id: 'how-to-write-discussion-in-research-paper',
      title: 'How to write discussion in research paper: a structure that works',
      Art: StructureScene,
      caption: 'five steps, from one finding out to the questions still open',
      body: [
        'There is no single required order, but a structure helps you avoid rambling. Docherty and Smith suggested five parts for the discussion, and many guides still use a version of them:',
        {
          steps: [
            { title: 'Statement of principal findings.', text: 'Your main answer to the research question, in a sentence or two.' },
            { title: 'Strengths and weaknesses of the study.', text: 'What your design did well and where it falls short.' },
            { title: 'Comparison with other studies.', text: 'Where your results agree or disagree with earlier work, discussing particularly any differences.' },
            { title: 'Meaning of the study.', text: 'Possible reasons for your findings, and what they could mean for practice or policy.' },
            { title: 'Unanswered questions and future research.', text: 'What your study could not settle, and the next study that could.' },
          ],
          tone: 'green',
        },
        'Many papers put the comparison with other studies before strengths and weaknesses, and that is fine. What matters is that each paragraph has one job and the reader can tell which job it is doing.',
        {
          note: 'before you write a word, write down your research question and your two or three main findings on a single sheet. Every paragraph of the discussion should go back to that sheet. If a paragraph cannot, it probably does not belong.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'start-with-your-main-finding',
      title: 'Start with your main finding, in one sentence',
      Art: FindingScene,
      caption: 'one clear sentence under the spotlight, not every number again',
      body: [
        'Docherty and Smith advised that the discussion should begin with "a restatement of the principal finding. Ideally, this should be no more than one sentence." This is the sentence the reader came for, so make it plain.',
        'Do not repeat your results. The reader has just seen your tables. A good opening gives the answer in words, with at most one key number.',
        {
          table: {
            head: ['first draft', 'rewrite'],
            rows: [
              ['Mobile phones are destroying the sleep of India\'s youth.', 'In this survey of students in three university hostels, poor sleep was more common among those who used their phones in bed every night than among those who did not.'],
            ],
          },
          tone: 'blue',
        },
        'Notice what the rewrite does. It says who was studied and where, it uses the words "more common among", which describe a link and not a cause, and it does not claim anything about all of India. It is less dramatic and much easier to defend at a viva.',
        'If your study had a hypothesis, say here whether the findings supported it. If you are not sure how a hypothesis and its result should line up, read [how to write a hypothesis](/blogs/how-to-write-a-hypothesis/).',
      ],
    },
    {
      id: 'compare-with-other-studies',
      title: 'Compare your results with other studies',
      Art: CompareScene,
      caption: 'your finding on one pan, earlier studies on the other',
      body: [
        'Next, place your findings next to what others have found. Go back to the papers you cited in your literature review. For each main finding, ask three questions:',
        {
          list: [
            'Which earlier studies found something similar?',
            'Which found something different?',
            'What might explain the difference: the place, the people, the method, the year, the way something was measured?',
          ],
          style: 'numbers',
        },
        'Differences deserve more space than agreements. Docherty and Smith asked authors to discuss "particularly any differences in results". Farhan\'s link between phone use and poor sleep was weaker than in two of the studies he had cited. He noticed that both had surveyed school students, while his were in college and many had late classes. He wrote that as a possible reason, not as a fact.',
        {
          note: 'compare, do not just list. "Author A found X. Author B found Y." is a summary. "Like A, we found X; unlike B, we did not find Y, perhaps because our students were older" is a discussion.',
          label: 'remember',
          tone: 'blue',
        },
        'Only compare with studies you have actually read. A finding you cite second-hand from someone else\'s discussion may not say what you think it says.',
      ],
    },
    {
      id: 'strengths-and-limitations',
      title: 'Strengths and limitations of the study',
      Art: LimitsScene,
      caption: 'looking at your own study with the same lens a reviewer will use',
      body: [
        'Every study has limitations, and examiners know it. What they want to see is that you know yours, and that you can say how much they matter. A limitation you name yourself reads as care. One the examiner has to point out reads as a gap.',
        'Farhan listed his honestly:',
        {
          list: [
            '**Design.** A cross-sectional survey measures everything at once, so it cannot show whether phone use led to poor sleep or poor sleep led to phone use.',
            '**Measurement.** Phone use and sleep were both self-reported, and students may remember them inaccurately.',
            '**Setting.** Three hostels of one university may not represent students elsewhere.',
          ],
          style: 'cross',
        },
        'For each limitation, say which way it might push the result, and if you can, how much. Then mention real strengths too, such as a good response rate or an established questionnaire, without boasting.',
        'Do not end with a long apology. Docherty and Smith also warned against inflating "the importance and generalisability of the findings". Limitations are where you set the honest boundary around your claim, so the reader knows exactly how far it reaches. The limits of your design come from your methods chapter; see [how to write a research methodology](/blogs/how-to-write-a-research-methodology/).',
      ],
    },
    {
      id: 'implications-and-future-research',
      title: 'Implications and future research',
      Art: FutureScene,
      caption: 'a small, sure step forward and a clear sign to the next study',
      body: [
        'Now say what your findings could mean, for practice, policy or theory. This is where Farhan\'s first draft asked for a government ban. Docherty and Smith described this part of the paper as the place "where authors often run amok", and advised authors to "leave readers to make up their own minds on meaning".',
        'Keep your implications the same size as your evidence. Farhan rewrote his as a modest suggestion: hostel wardens and student counsellors could include phone use at bedtime in sleep awareness sessions, and the finding was worth testing in a larger study.',
        {
          compare: {
            left: {
              title: 'too big',
              tone: 'red',
              mark: 'cross',
              items: [
                'The government must ban phones in hostels.',
                'This proves that screens cause insomnia.',
                'Further research is needed.',
              ],
            },
            right: {
              title: 'the right size',
              tone: 'green',
              mark: 'check',
              items: [
                'Sleep awareness sessions in hostels could include phone use at bedtime.',
                'The link is worth testing with a design that can show cause.',
                'A study that follows students over a semester could show which comes first.',
              ],
            },
          },
        },
        'The last line on the left appears in thousands of papers and tells the reader nothing. Name the exact question still open, and the kind of study that could answer it.',
      ],
    },
    {
      id: 'discussion-vs-conclusion-and-mistakes',
      title: 'Discussion vs conclusion, and common mistakes',
      Art: ExampleScene,
      caption: 'the first draft shouted; the second one explained',
      body: [
        'Students often mix up the discussion and the conclusion. Editage Insights puts the difference simply: the discussion is "a detailed interpretation of the data reported in the Results section", while the conclusion gives "a snapshot of your study implications" without going back into the details.',
        {
          table: {
            head: ['', 'discussion', 'conclusion'],
            rows: [
              ['what it does', 'interprets each main finding', 'restates the aim and the key answer'],
              ['limitations', 'discussed in detail', 'mentioned briefly, if at all'],
              ['future research', 'specific, with reasons', 'one or two lines'],
              ['length', 'usually several paragraphs or pages', 'usually a paragraph or two'],
            ],
          },
          tone: 'amber',
        },
        'Whether the conclusion is a separate section or the last part of the discussion depends on the journal or your university. Neither should contain new data.',
        'These are the mistakes Farhan\'s first draft made, and the ones reviewers mention most:',
        {
          list: [
            'repeating the results, number by number;',
            'bringing in new results that were not in the results section;',
            'claiming cause from a design that can only show a link;',
            'comparing with other studies by listing them, not by explaining the differences;',
            'hiding limitations, or listing them with no comment on how much they matter;',
            'recommendations far bigger than the study, and an empty "further research is needed".',
          ],
          style: 'cross',
        },
        'Farhan\'s second discussion was four pages long, a page shorter than the first. At his viva the external examiner asked whether phones caused his students\' poor sleep. Farhan said his study could not tell, explained why, and described the study that could. The examiner wrote something down and smiled.',
      ],
    },
  ],

  takeaways: [
    'The results report what you found; the discussion explains what it means and how far that meaning goes.',
    'Open with your main finding in one or two sentences, in words, without repeating your tables.',
    'Compare your findings with earlier studies, and spend the most time on the differences and their possible reasons.',
    'Name your limitations yourself, and say how much each one might matter.',
    'Keep implications the same size as your evidence, and replace "further research is needed" with the exact next study.',
  ],

  faq: [
    {
      q: 'How long should the discussion section be?',
      a: 'There is no fixed length. It depends on your field, your journal and how many findings you have. In a journal article it is usually several paragraphs, and in a thesis it is often a full chapter. Check your journal\'s word limit or your university\'s thesis format, and cut anything that does not explain a finding.',
    },
    {
      q: 'Can I cite new references in the discussion?',
      a: 'Yes. You will usually cite many of the studies from your literature review again, and you can add new ones when you need them to explain a finding. What you should not add is new results from your own data.',
    },
    {
      q: 'What tense is used in the discussion section?',
      a: 'Use the past tense for what you found ("poor sleep was more common") and for what other studies found. Use the present tense for what you think the findings mean and for statements that are still true ("this suggests", "cross-sectional designs cannot show cause").',
    },
    {
      q: 'Should limitations go in the discussion or in the methodology?',
      a: 'In most journal articles, limitations go in the discussion. Some university thesis formats also ask for them at the end of the methodology chapter or in a separate section. Follow your format, and make sure each limitation is linked to what it means for your findings.',
    },
  ],

  cta: {
    title: 'Find the studies to compare your findings with',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and shows the passage behind every point it writes, so you can check what earlier studies really found before you compare your results with them. One payment unlocks all of it, for good.',
  },
}
