import Hero from './hero.jsx'
import {
  AnalysisScene,
  DesignScene,
  EthicsScene,
  OrderScene,
  ProcedureScene,
  ReadersScene,
  SampleScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a methods section good enough for someone else to follow, step by step',
  },

  intro: [
    'Abhishek Pandey is a first year PhD scholar in Food and Nutrition in Varanasi. His study asks why some children in government primary schools eat their millet-based midday meal and others leave most of the plate. Before the full study, he ran a small pilot in four schools, and his guide, Dr. Rekha Singh, asked him to write it up as his first paper.',
    'The results took him a week. The methodology took him ten minutes: "Data was collected from four schools and analysed using appropriate statistical methods." Dr. Singh read it and handed it back. "If I gave this to another researcher in Patna," she said, "could they do your study again? I could not. I do not even know what you measured."',
    'This blog explains how to write a research methodology the way Dr. Singh taught Abhishek to write his: what the section is for, each part in order, how much detail to give, and an example you can learn from. It works for the methods section of a paper and for the methodology chapter of a thesis.',
  ],

  sections: [
    {
      id: 'what-a-research-methodology-does',
      title: 'What a research methodology section does',
      Art: ReadersScene,
      caption: 'the same section, read by an examiner, a reviewer and the next researcher',
      body: [
        'The methodology tells readers exactly what you did to answer your research question, and why you did it that way. It has two jobs. It lets readers judge whether your results can be trusted, and it gives another researcher enough detail to repeat the study.',
        {
          define: 'methods and methodology',
          hint: 'two words, one section',
          meaning: '**Methods** are the tools and steps you used: a questionnaire, a weighing scale, a statistical test. **Methodology** is the reasoning behind them: why this design, this sample and these tools suit your question. A good section gives both.',
          tone: 'blue',
        },
        'Who reads it changes how much you write. A video guide from the UK\'s National Centre for Research Methods advises PhD students to picture their examiners before writing the methodology chapter: what will they need explained and justified? It also points out that in a research paper you may have only a few hundred words for the same job.',
        {
          list: [
            '**In a thesis**, the methodology is usually a full chapter. You explain your choices, the options you rejected, and the problems you met along the way.',
            '**In a journal paper**, the methods section is shorter and more factual. It sits after the introduction, as our guide to [the structure of a research paper](/blogs/structure-of-a-research-paper/) explains.',
          ],
          style: 'dots',
        },
      ],
    },
    {
      id: 'research-design',
      title: 'Start with your research question and design',
      Art: DesignScene,
      caption: 'numbers, words or both: the question picks the road',
      body: [
        'Begin the section by restating your research question in a sentence. Every choice that follows should make sense against it. If your question is still vague, fix that first with our guide on [how to write a good research question](/blogs/how-to-write-a-research-question/).',
        'Then name your overall approach and your design, and say why it fits.',
        {
          table: {
            head: ['approach', 'when it fits', 'common designs'],
            rows: [
              ['quantitative', 'your question asks how much, how many or whether one thing affects another', 'survey, experiment, randomised trial, cohort or case-control study'],
              ['qualitative', 'your question asks why, how or what people experience', 'interviews, focus groups, case study, ethnography'],
              ['mixed methods', 'you need both the size of an effect and the reasons behind it', 'numbers first, then interviews to explain them, or the other way round'],
            ],
          },
          tone: 'amber',
        },
        'Abhishek\'s question had two halves. How much of the meal do children eat on millet days compared with rice days? And why? The first half needs measurement; the second needs people\'s own words. So he named his design as mixed methods and gave that reason in one sentence. "Now the reader knows why there are scales and interviews in the same study," Dr. Singh said.',
      ],
    },
    {
      id: 'sampling-and-participants',
      title: 'Setting, participants and sampling method',
      Art: SampleScene,
      caption: 'from every school on the list, a few picked at random',
      body: [
        'Next, say where and when the study took place, and who took part. Give enough for a reader to picture it: the district, the type of school or hospital, the months of data collection.',
        'Then explain how you chose your participants. Name the sampling method, and do not call a sample random unless it was.',
        {
          table: {
            head: ['sampling method', 'what it means'],
            rows: [
              ['simple random', 'every member of the population had an equal chance of being picked, for example by lottery or a random number list'],
              ['stratified', 'the population was split into groups, such as rural and urban schools, and a random sample taken from each'],
              ['purposive', 'participants were chosen on purpose because they suit the question, common in qualitative work'],
              ['convenience', 'whoever was easiest to reach took part; honest to report, but it limits how far results can be generalised'],
              ['snowball', 'participants suggested others, useful for groups that are hard to find'],
            ],
          },
          tone: 'green',
        },
        'Add your inclusion and exclusion criteria, your sample size and how you decided it, and how many people actually took part. Abhishek wrote that he listed all government primary schools in one block of Varanasi district, picked four by lottery, and included children of classes 3 to 5 who were present on the study days. Children who brought food from home were excluded, and he said so.',
      ],
    },
    {
      id: 'data-collection-methods',
      title: 'Data collection methods: tools and procedures',
      Art: ProcedureScene,
      caption: 'each step written down, so the next person can weigh the same plates',
      body: [
        'This is where most first drafts are too thin. Describe what you collected, with what tools, and in what order, so that someone else could do the same.',
        {
          steps: [
            { title: 'The tools.', text: 'Name each questionnaire, test or instrument. If you used an existing questionnaire, cite it; if you made your own, say how you built and checked it.' },
            { title: 'The equipment.', text: 'Give the make or type and the precision, for example a digital kitchen scale accurate to 1 gram.' },
            { title: 'The pilot.', text: 'If you tested your tools first, say what you changed afterwards.' },
            { title: 'The procedure.', text: 'Who collected the data, when, where and in what order. A reader should be able to follow it like a recipe.' },
            { title: 'Translation.', text: 'If you used Hindi or another language with participants, say who translated the tools and how you checked the translation.' },
          ],
          tone: 'blue',
        },
        'Abhishek\'s new version had a paragraph for each tool. On two millet days and two rice days in each school, he weighed each child\'s serving before the meal and the leftovers after it. Children rated the taste on a five point smiley scale read aloud in Hindi. Afterwards he interviewed the cooks and two teachers in each school.',
        {
          note: 'write the procedure while you are collecting data, not months later. The same NCRM guide calls this good housekeeping: start writing about your methodology from day one, while every decision is fresh.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'data-analysis',
      title: 'How to describe your data analysis',
      Art: AnalysisScene,
      caption: 'the software, the test and the reason for it',
      body: [
        'Readers should be able to see which analysis answers which part of your question. Match them one to one.',
        {
          list: [
            'the software you used, with its version',
            'how you cleaned the data and handled missing values',
            'the statistical tests for each comparison, and why they suit your data',
            'the significance level you chose, such as p < 0.05',
            'for interviews: how you transcribed them, the method of analysis, such as thematic analysis, and who did the coding',
          ],
          style: 'check',
        },
        'Do not report results here. "We compared the amount eaten on millet and rice days with a paired test" belongs in the methodology; "children ate less on millet days" belongs in the results.',
        'Abhishek had written "appropriate statistical methods". Dr. Singh circled the words. "Appropriate according to whom? Name the test, and tell me why it fits." He rewrote it as two sentences: one naming the test and the software, one explaining that each child was measured on both kinds of day.',
      ],
    },
    {
      id: 'ethics-and-limitations',
      title: 'Ethics approval, consent and limitations',
      Art: EthicsScene,
      caption: 'the committee\'s approval first, then a parent\'s consent and a child\'s own yes',
      body: [
        'If your study involves people, the methodology must say how you protected them. In India, the ICMR\'s National Ethical Guidelines for Biomedical and Health Research Involving Human Participants (2017) apply to biomedical, social and behavioural research for health. They say all research proposals must be submitted to an ethics committee, and that the researcher must obtain voluntary written informed consent from participants.',
        {
          list: [
            '**Name the committee and the approval.** Give the ethics committee\'s name and, if your journal or university asks, the approval number and date.',
            '**Describe consent.** Say how participants were told about the study and how consent was recorded.',
            '**Children need two things.** The ICMR guidelines ask for consent from parents and assent, the child\'s own agreement, from children of 7 to 18 years of age.',
            '**Clinical trials must be registered.** Registration with the Clinical Trials Registry, India (CTRI) has been mandatory since 15 June 2009 for trials under the Drugs and Cosmetics Act and its rules, and voluntary for other health research.',
          ],
          style: 'dots',
        },
        'End the methodology with its limits. Every study has some: a small sample, one district, a season, a tool that cannot capture everything. Say what they are and how they affect what your results can show. Abhishek wrote that four schools in one block could not represent the whole district, and that weighing leftovers missed food children shared with friends. Naming limits does not weaken a study. It shows the reader you understand it.',
        {
          note: 'rules differ between universities and journals, so check yours. Some institutions also ask for ethics review of research outside health, such as education or social science surveys.',
          label: 'check',
          tone: 'red',
        },
      ],
    },
    {
      id: 'research-methodology-example',
      title: 'Writing style, reporting guidelines and an example',
      Art: OrderScene,
      caption: 'subheadings in the order the work was done',
      body: [
        'Write the methodology of a finished study in the past tense: "we selected", "children rated". Use subheadings, and keep them in the same order as your results, so readers can move between the two. In a proposal, where the study has not happened yet, you write in the future tense instead; our guide on [how to write a research proposal](/blogs/how-to-write-a-research-proposal/) covers that.',
        'Many fields have reporting guidelines that list exactly what a methods section should include. The EQUATOR Network collects them for health research.',
        {
          table: {
            head: ['type of study', 'reporting guideline'],
            rows: [
              ['randomised trials', 'CONSORT'],
              ['observational studies, such as surveys and cohort studies', 'STROBE'],
              ['systematic reviews', 'PRISMA'],
              ['qualitative research', 'SRQR or COREQ'],
              ['diagnostic accuracy studies', 'STARD'],
              ['case reports', 'CARE'],
            ],
          },
          tone: 'blue',
        },
        'Here is the outline of Abhishek\'s rewritten methods section. The details are simplified, but the shape is the one reviewers expect.',
        {
          table: {
            head: ['subheading', 'what Abhishek wrote'],
            rows: [
              ['design', 'A mixed methods pilot study, because the question needs both amounts eaten and reasons.'],
              ['setting and sample', 'Four government primary schools chosen by lottery from one block of Varanasi district; children of classes 3 to 5 present on study days.'],
              ['data collection', 'Servings and leftovers weighed on a digital scale on two millet and two rice days per school; taste ratings on a five point smiley scale; interviews with cooks and teachers.'],
              ['analysis', 'Amounts eaten compared between millet and rice days with a paired test in named software; interviews analysed thematically by two coders.'],
              ['ethics', 'Approval from the university ethics committee, permission from each school, written consent from parents and assent from the children.'],
              ['limitations', 'Four schools in one block; food shared between children could not be measured.'],
            ],
          },
          tone: 'green',
        },
        'Before you submit, read your methodology as a stranger would and ask: could I repeat this study from these words alone? Abhishek gave his new version to a friend in another department. She found one gap: he had not said what time of day he weighed the plates. He added it. Dr. Singh read the section twice and returned it with only one word in the margin: "good".',
      ],
    },
  ],

  takeaways: [
    'The methodology says what you did and why, so readers can trust your results and repeat your study.',
    'Restate your question, then name your approach and design and explain why they fit.',
    'Describe the setting, sample and sampling method honestly, with inclusion and exclusion criteria.',
    'Give enough detail on tools, procedure and analysis that another researcher could follow it.',
    'Report ethics approval, consent and limitations, and check the reporting guideline for your study type.',
  ],

  faq: [
    {
      q: 'What is the difference between methods and methodology?',
      a: 'Methods are the specific tools and steps you used, such as a questionnaire or a statistical test. Methodology is the reasoning behind those choices. In practice, the methods section of a paper and the methodology chapter of a thesis cover both.',
    },
    {
      q: 'How long should the methodology section be?',
      a: 'In a journal paper it may be only a few hundred words, so follow the journal\'s guide for authors. In a thesis it is usually a full chapter. Either way, the test is the same: could someone repeat the study from what you wrote?',
    },
    {
      q: 'Should the methodology be written in past or future tense?',
      a: 'Past tense for a study you have finished, as in a paper or thesis. Future tense for a study you are planning, as in a research proposal or synopsis.',
    },
  ],

  cta: {
    title: 'Ground your methods in what others did',
    text: 'Fiberarticle\'s Literature Reviewer finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export, so you can see which methods other studies on your topic used. One payment unlocks all of it, for good.',
  },
}
