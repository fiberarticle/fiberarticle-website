import Hero from './hero.jsx'
import {
  ChooseScene,
  ObserveScene,
  PilotScene,
  RecordsScene,
  SurveyScene,
  TalkScene,
  TypesScene,
  WhatScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'five ways to collect data, and one question that decides between them',
  },

  intro: [
    'Shalini Mahto is in the final year of her MA in Rural Development at a university in Ranchi. Her dissertation follows women\'s self-help groups in villages outside the city. Each group saves a little every month and lends to its own members, and Shalini wants to know what the women actually do with those loans: a goat, a sewing machine, school fees, a hospital bill.',
    'Her plan was quick. She made a Google Form in English, and the block coordinator agreed to share it on the groups\' WhatsApp numbers. Her guide, Dr. Rekha Minz, read the form and asked one question. "Who in these groups has a smartphone, and who reads English?" Shalini knew the answer. Mostly the group leaders, and their daughters. "Then you will have heard from the leaders," Dr. Minz said, "and called it the whole village."',
    'This blog explains data collection methods in research the way Dr. Minz explained them to Shalini: primary and secondary data, the main methods with examples, how to choose one, and how to test and report it.',
  ],

  sections: [
    {
      id: 'what-is-data-collection-in-research',
      title: 'What is data collection in research?',
      Art: WhatScene,
      caption: 'new data from people and places on one side, data someone already collected on the other',
      body: [
        'Data collection is the planned way you gather the information that answers your research question. The plan matters as much as the questions. Ask the same women the same thing aloud in Hindi, or through a link in English, and you will get different answers.',
        'Every method falls into one of two groups, depending on who collected the data first.',
        {
          compare: {
            left: {
              title: 'primary data',
              items: [
                'collected by you, for your own study',
                'through surveys, interviews, focus groups, observation or experiments',
                'fits your question exactly',
                'costs time, travel and money',
              ],
              mark: 'check',
              tone: 'green',
            },
            right: {
              title: 'secondary data',
              items: [
                'collected earlier by someone else, for another purpose',
                'from census and survey reports, government datasets, records and published papers',
                'quick and often large',
                'may not measure exactly what you need',
              ],
              mark: 'dots',
              tone: 'blue',
            },
          },
        },
        'Shalini\'s study would need both: her own data on how the women used their loans, and published figures to show where her villages stood against the state and the country.',
      ],
    },
    {
      id: 'types-of-data-collection-methods',
      title: 'Data collection methods in research: the main types',
      Art: TypesScene,
      caption: 'numbers on one side, words on the other, and most studies need a little of both',
      body: [
        'Different guides list the methods in different ways, but the same five keep coming back: surveys, interviews, focus groups, observation and experiments. Records and documents make a sixth, usually secondary data.',
        {
          table: {
            head: ['method', 'what it gives you', 'usual kind of data', 'example in Shalini\'s study'],
            rows: [
              ['survey', 'the same questions put to many people', 'quantitative', 'how many women took a loan, how much and for what'],
              ['interview', 'one person\'s experience in their own words', 'qualitative', 'why a woman chose a goat over a sewing machine'],
              ['focus group', 'a guided group discussion', 'qualitative', 'how a group decides whose turn it is to borrow'],
              ['observation', 'what people actually do, seen first hand', 'either', 'who speaks at the monthly meeting'],
              ['experiment', 'the effect of changing one thing while keeping the rest the same', 'quantitative', 'not suited to her question'],
              ['records and documents', 'what is already written down', 'either', 'the group\'s own savings and loan books'],
            ],
          },
          tone: 'amber',
        },
        '**Quantitative data collection methods** give you numbers you can count and compare: how many, how much, how often. **Qualitative data collection methods** give you words, reasons and meanings: why, how, what it felt like. Many studies use both. That is called mixed methods, and our guide on [how to write a research methodology](/blogs/how-to-write-a-research-methodology/) shows how to justify it in one sentence.',
        'Shalini\'s question had two halves. *What* the women spent their loans on needed a count. *Why* they chose it needed their own words. So she needed a method from each side.',
      ],
    },
    {
      id: 'questionnaire-vs-schedule',
      title: 'Surveys: questionnaire or schedule?',
      Art: SurveyScene,
      caption: 'a form people fill in themselves, and a form the researcher fills in while asking',
      body: [
        'A survey asks many people the same questions, so their answers can be added up. In India, research methods textbooks such as C. R. Kothari\'s *Research Methodology: Methods and Techniques* separate two kinds of survey form, and the difference decided Shalini\'s whole plan.',
        {
          table: {
            head: ['', 'questionnaire', 'schedule'],
            rows: [
              ['who fills it in', 'the respondent, alone, on paper or online', 'the researcher or an enumerator, while asking'],
              ['who can answer', 'people who can read its language', 'anyone, including people who cannot read'],
              ['a confusing question', 'no one to explain it', 'the researcher can explain'],
              ['replies', 'many people never reply', 'usually most people answer'],
              ['cost and reach', 'cheap, reaches a wide area', 'costs time and travel, covers less'],
              ['quality depends on', 'how well it is written', 'the skill and honesty of the person asking'],
            ],
          },
          tone: 'green',
        },
        'An online form is a questionnaire. It works well for college students or teachers, who can read it and reply on their phones. It works badly where many people cannot read the form or have no phone of their own, because those who reply stop being a fair picture of the group. Our guide on [sampling methods in research](/blogs/sampling-methods-in-research/) explains why self-selected replies lean one way.',
        'Shalini turned her form into a schedule. She translated it into simple Hindi, cut it from 40 questions to 22, mostly with fixed options, and planned to visit each woman at home and read every question aloud.',
      ],
    },
    {
      id: 'interviews-and-focus-groups',
      title: 'Interviews and focus groups',
      Art: TalkScene,
      caption: 'one person at a time for a story, a small circle for the way a group thinks',
      body: [
        'A survey tells you what. An interview tells you why. Interviews come in three kinds, depending on how fixed the questions are.',
        {
          list: [
            '**Structured:** the same questions, in the same order, for everyone.',
            '**Semi-structured:** a short guide of main questions, with follow-ups that change from person to person. The most common kind in student research.',
            '**Unstructured:** a conversation around a theme, with almost no set questions.',
          ],
          style: 'dots',
        },
        'A **focus group** brings a small group together to discuss a topic, with the researcher as moderator. In their practical guide to qualitative research, Darshini Ayton, Tess Tsindos and Danielle Berkovic suggest 6 to 10 participants. With too many, they note, the discussion can become chaotic; with too few, there may not be enough interaction. Focus groups suit how a group thinks and decides, not private matters: few people discuss debts or illness in front of their neighbours.',
        'Shalini planned semi-structured interviews with women who had spent their loans on different things, and one focus group per group, after the monthly meeting, on how they decided who borrowed first.',
        {
          note: 'record interviews only with permission, and say who will hear the recording and where it will be kept. Our guide on [ethical considerations in research](/blogs/ethical-considerations-in-research/) covers consent and confidentiality.',
          label: 'check',
          tone: 'red',
        },
      ],
    },
    {
      id: 'observation-and-experiments',
      title: 'Observation and experiments',
      Art: ObserveScene,
      caption: 'watching what happens, and changing one thing to see what follows',
      body: [
        'People do not always do what they say they do. **Observation** means watching and recording behaviour as it happens. In **participant observation** the researcher joins in the life of the group; in **non-participant observation** the researcher watches from the side. It can be structured, with a checklist, or unstructured, with detailed field notes.',
        'Shalini asked two groups if she could sit in on their monthly meetings. She sat at the back with a one-page checklist: who spoke, who asked for a loan, how the amount was agreed, and whether anyone was refused. In the first meeting she saw what no survey would have shown: two women asked for loans, and the group leader spoke for both.',
        'An **experiment** is different. The researcher changes one thing on purpose, keeps everything else the same, and measures what happens, usually against a comparison group that did not get the change. A soil science student testing two fertiliser doses on matched plots is running one. Experiments are strong at showing cause and effect, but need control over the setting. Shalini could not decide who received a loan, so an experiment did not fit, and she said so in her methodology.',
      ],
    },
    {
      id: 'secondary-data-collection-methods',
      title: 'Secondary data: records, documents and datasets',
      Art: RecordsScene,
      caption: 'records that already exist, checked before they are trusted',
      body: [
        'For Indian students, some large sources of secondary data are open to all.',
        {
          table: {
            head: ['source', 'what it is', 'where to look'],
            rows: [
              ['National Family Health Survey (NFHS)', 'a household survey on health and family welfare under the Ministry of Health and Family Welfare, with the International Institute for Population Sciences, Mumbai, as nodal agency; NFHS-5 covers 2019 to 2021', 'reports and fact sheets on the NFHS website; data files through the DHS Program'],
              ['National Sample Survey (NSS)', 'survey rounds on social and economic topics, such as participation in education, from the Ministry of Statistics and Programme Implementation', 'the ministry\'s microdata portal, microdata.gov.in'],
              ['Open Government Data Platform', 'datasets from ministries and departments, published under the National Data Sharing and Accessibility Policy', 'data.gov.in'],
              ['records and documents', 'registers, account books, reports and published papers', 'the organisation that keeps them, with permission'],
            ],
          },
          tone: 'blue',
        },
        'Secondary data saves months, but it was built for someone else\'s question. Before you use it, find out who collected it, when, how and from whom, and read the definitions. A survey\'s "household" may not mean what you mean.',
        'Shalini used two kinds. The NFHS fact sheets give the share of women with a bank or savings account they themselves use, so she could compare her villages with the state and the country. And with each group\'s permission, she copied a year of entries from its loan books, with names replaced by codes. The books gave exact amounts and dates that no one could be expected to remember.',
      ],
    },
    {
      id: 'how-to-choose-a-data-collection-method',
      title: 'How to choose a data collection method',
      Art: ChooseScene,
      caption: 'start from the question, then check the people, the time and the ethics',
      body: [
        'There is no best method, only the one that fits. If the question itself is still loose, sharpen it first with our guide on [how to write a good research question](/blogs/how-to-write-a-research-question/). Then work through these, in order.',
        {
          steps: [
            { title: 'What does your question ask?', text: 'How many, how much or how often points to a survey, an experiment or records. Why, how or what it is like points to interviews, focus groups or observation.' },
            { title: 'Does the data already exist?', text: 'Look for a reliable secondary source before collecting your own. If it answers part of your question, use it and collect only the rest.' },
            { title: 'Who are your participants?', text: 'Think about language, reading, phones and working hours. A method that suits college students may not suit farmers.' },
            { title: 'What can you manage?', text: 'Count the days, the travel and the cost. A small study done properly beats a large one done in a hurry.' },
            { title: 'Is it ethical?', text: 'Some methods need consent forms, recordings or entry into homes. Check what your ethics committee expects.' },
          ],
          tone: 'amber',
        },
        'Using more than one method on the same question is called **triangulation**. When the methods agree, you can trust the finding more. When they disagree, you have found something worth explaining.',
        'Shalini\'s final plan: a schedule for every woman in the sampled groups, interviews with a few, a focus group and observed meetings in each group, the loan books, and NFHS figures for context.',
      ],
    },
    {
      id: 'pilot-test-and-report-data-collection',
      title: 'Pilot test it, then write it up',
      Art: PilotScene,
      caption: 'one village first, the form corrected, then the real thing',
      body: [
        'Never take a new questionnaire, schedule or interview guide straight to the field. Test it first on a few people like your participants. A research methods chapter on INFLIBNET\'s e-books platform calls a pilot study "a small-scale implementation of a larger study or a part of a larger study", and describes pre-testing as a way to find questions that respondents cannot understand.',
        'Shalini tried her schedule with eight women in a village outside her sample. One question failed. She had asked for the "rate of interest per annum", and every woman answered it differently. She rewrote it the way the groups talked: "For every 100 rupees you borrow, how much extra do you pay back each month?" The answers became easy to compare.',
        'When you write your methodology, report your data collection so that someone else could repeat it:',
        {
          list: [
            'each method, and why it suits your question',
            'the tools: the questionnaire, schedule, interview guide or checklist, with the full version in an appendix',
            'the language, and who translated the tools',
            'where, when and by whom it was collected',
            'the pilot test and what you changed after it',
            'how consent was taken, and how the data was recorded and stored',
            'for secondary data: the source, the year and any changes you made',
          ],
          style: 'check',
        },
        'Dr. Minz read the chapter and asked one thing. "And the Google Form?" Shalini smiled. She had kept it for a short follow-up with the group leaders, the one group who really could reply on their phones.',
      ],
    },
  ],

  takeaways: [
    'The way you collect data decides whose answers you get.',
    'Primary data is collected by you for your study; secondary data was collected by someone else for another purpose.',
    'Surveys and experiments mostly give numbers; interviews, focus groups and observation mostly give words and reasons.',
    'A questionnaire is filled in by the respondent; a schedule is filled in by the researcher while asking, which suits people who cannot read the form.',
    'Choose from your question, your participants, your time and your ethics, and pilot test every tool first.',
  ],

  faq: [
    {
      q: 'What are the main methods of data collection in research?',
      a: 'Surveys, interviews, focus groups, observation and experiments are the five most guides name. Records and documents, such as registers and existing datasets, are a sixth, usually secondary data.',
    },
    {
      q: 'What is the difference between primary and secondary data?',
      a: 'Primary data is collected by you, for your own study, through surveys, interviews and similar methods. Secondary data was collected earlier by someone else for another purpose, such as NFHS reports or an organisation\'s records.',
    },
    {
      q: 'What is the difference between a questionnaire and a schedule?',
      a: 'A questionnaire is filled in by the respondent alone. A schedule is filled in by the researcher or an enumerator, who reads out each question and records the answer. Schedules usually get more replies and suit people who cannot read the form, but they cost more time.',
    },
    {
      q: 'Can I collect data through Google Forms for my dissertation?',
      a: 'Yes, if your participants can read the form and have regular access to a phone, and your guide and ethics committee accept it. Say how the link was shared, because those who choose to reply may differ from those who do not.',
    },
  ],

  cta: {
    title: 'See how other studies collected their data',
    text: 'Fiberarticle finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export, so you can compare the methods and tools other studies on your topic used. One payment unlocks all of it, for good.',
  },
}
