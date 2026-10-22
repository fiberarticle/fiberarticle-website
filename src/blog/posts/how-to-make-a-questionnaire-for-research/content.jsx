import Hero from './hero.jsx'
import {
  FormatScene,
  MeaningScene,
  MistakesScene,
  ObjectivesScene,
  PilotScene,
  SampleScene,
  TypesScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'one form, the same questions for everyone, ticked one by one',
  },

  intro: [
    'Keerthana Selvam is in the final year of her MCom at a college in Tiruppur. Her mother has stitched T-shirts in one of the city\'s knitwear export units for eleven years, and Keerthana\'s dissertation starts from a question she has heard at home all her life: where does a tailor\'s monthly wage go, and why is so little of it saved? She planned to put that question to 150 women who work in the units near her home.',
    'On a Sunday she typed 58 questions into a Google Form, in English, from "What is your opinion on financial inclusion?" to "Do you save money in a chit fund and a bank account?" Her guide, Dr. R. Senthil Kumar, scrolled through it on his phone and said, "Your amma would stop at question nine." That evening Keerthana searched for how to make a questionnaire for research.',
    'This blog follows what she learned: what a questionnaire is, how to build it from your objectives, the types of questions, the mistakes that spoil answers, the format, translation and pilot testing, and a short sample questionnaire.',
  ],

  sections: [
    {
      id: 'what-is-a-questionnaire',
      title: 'What is a questionnaire in research?',
      Art: MeaningScene,
      caption: 'one master copy, and every respondent gets exactly the same questions',
      body: [
        {
          define: 'questionnaire',
          hint: 'noun',
          meaning: 'A planned list of written questions, with instructions and answer options, that every respondent answers in the same words and order, so that the answers can be counted and compared.',
          tone: 'blue',
        },
        'A questionnaire is the tool. A survey is the whole exercise: choosing the people, giving them the tool and analysing what comes back. When a researcher reads the questions aloud and writes down the answers, the same tool is usually called a schedule. Our blog on [data collection methods in research](/blogs/data-collection-methods-in-research/) explains when each one fits.',
        'Most of the women in Keerthana\'s study read Tamil well but few read English. So the women could fill in the form themselves, as long as it was in Tamil, on paper as well as online, and short enough to finish in a lunch break.',
        {
          note: 'a questionnaire is not a list of everything you are curious about. Every question has to feed one of your objectives or an analysis you have planned.',
          label: 'remember',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'start-from-your-objectives',
      title: 'Start from your objectives, not from questions',
      Art: ObjectivesScene,
      caption: 'each objective sends its own questions to the form, and the rest go in the bin',
      body: [
        'Keerthana\'s first draft came straight out of her head. Survey design handbooks work the other way round: set the objectives, define the key ideas, decide what tables the results will need, and only then write questions. She wrote her four objectives on a page and, under each, the question that would answer it.',
        {
          table: {
            head: ['Objective', 'Question that answers it'],
            rows: [
              ['1. Estimate how much of the wage is saved', 'Q3 and Q4: take-home wage and saving last month'],
              ['2. Identify where savings are kept', 'Q5: where do you keep your savings? Tick all that apply'],
              ['3. Assess attitudes to saving', 'Q6 to Q11: one choice between two statements and five agree or disagree statements'],
              ['4. Identify what stops her saving more', 'Q12: what stops you from saving more each month?'],
            ],
          },
          tone: 'amber',
        },
        'Then she asked of each of her 58 questions: which objective does this serve, and what will I do with the answer? Thirty-one had no answer to either, so they went. If your objectives are still loose, sort them out first; [how to write research objectives](/blogs/how-to-write-research-objectives/) shows how.',
        'Also look for a questionnaire that already measures your idea. Many published studies print theirs in an appendix, and a tested scale, used with a citation and with permission where the authors ask for it, saves you from proving that brand new questions work.',
      ],
    },
    {
      id: 'types-of-questions',
      title: 'Types of questions in a questionnaire',
      Art: TypesScene,
      caption: 'yes or no, a list to choose from, a scale to mark, and a blank line',
      body: [
        'Every question is open or closed. Pew Research Center, in its guide to writing survey questions, describes open-ended questions as ones people answer "in their own words", and closed-ended ones as giving a list to choose from.',
        {
          table: {
            head: ['Type', 'Example from Keerthana\'s form'],
            rows: [
              ['Dichotomous (two options)', 'Do you have a bank account in your own name? Yes or No'],
              ['Multiple choice (one answer)', 'How are you paid? Weekly, every two weeks or monthly'],
              ['Checkboxes (several answers)', 'Where do you keep your savings? Tick all that apply'],
              ['Likert scale', '"I decide how my wage is spent": strongly disagree to strongly agree'],
              ['Ranking', 'Rank these expenses from biggest to smallest'],
              ['Open-ended', 'What stops you from saving more each month?'],
            ],
          },
          tone: 'blue',
        },
        'The **Likert scale**, named after the psychologist Rensis Likert, who introduced it in 1932, is the one most student questionnaires use. The common version has five points from strongly disagree to strongly agree, scored 1 to 5 so that answers to several statements about one idea can be added up. Britannica notes that these scores are ordinal: the gap between "agree" and "strongly agree" is not known to equal the gap between "neutral" and "agree". Agree on your analysis with your guide before you collect data.',
        'Open or closed changes the answers you get. In a 2008 Pew survey about the issue that mattered most to voters, 58 percent chose the economy when it was offered in a list, but only 35 percent named it when they answered in their own words.',
        {
          note: 'Pew suggests asking open questions in a pilot, then turning the most common answers into options. Keerthana\'s pilot gave her one she had missed: the monthly gold savings scheme at the jewellery shop.',
          label: 'tip',
          tone: 'green',
        },
      ],
    },
    {
      id: 'how-to-write-questionnaire-questions',
      title: 'How to write questionnaire questions: mistakes to avoid',
      Art: MistakesScene,
      caption: 'a question that asks two things gets split into two questions',
      body: [
        'Most bad survey data comes from bad wording, not bad analysis, and Pew points out that a good sample cannot rescue a badly written question. Here are five of Keerthana\'s first drafts and how she fixed them.',
        {
          table: {
            head: ['First draft', 'What is wrong', 'Better'],
            rows: [
              ['Do you save money in a chit fund and a bank account?', 'Double-barrelled: two questions in one', 'One checkbox question listing every place'],
              ['Don\'t you agree that women should save more?', 'Leading: it pushes towards yes', '"I try to save some money every month": disagree to agree'],
              ['Monthly wage: ₹8,000 to ₹10,000, ₹10,000 to ₹12,000', 'Options overlap at ₹10,000 and leave out lower wages', 'Less than ₹8,000, ₹8,000 to ₹9,999, ₹10,000 to ₹11,999, ₹12,000 or more'],
              ['What is your opinion on financial inclusion?', 'Jargon', 'Do you have a bank account in your own name?'],
              ['I do not think saving is not useful.', 'Double negative', '"Saving money is useful for my family."'],
            ],
          },
          tone: 'red',
        },
        {
          list: [
            'Ask one thing at a time, in the words your respondents use.',
            'Make options cover every possible answer without overlapping, and add "Other (please specify)" when you cannot list everything.',
            'Keep opinion scales short. Pew suggests "just four or perhaps five at most" options.',
            'Give a clear time frame: last month, last week, the past year.',
          ],
          style: 'check',
        },
        'Pew also warns that people tend to agree with agree or disagree statements (acquiescence bias) and to give the answer that sounds good (social desirability bias), and that both are stronger when an interviewer is present. One fix it suggests is a choice between two statements. So Keerthana asked which was closer to the woman\'s view: "With my wage, I can save something every month" or "With my wage, saving is not possible right now". She also left out names.',
      ],
    },
    {
      id: 'questionnaire-format',
      title: 'Questionnaire format: order, length and layout',
      Art: FormatScene,
      caption: 'introduction at the top, easy questions first, thank you at the bottom',
      body: [
        'A sensible order makes people willing to finish. Pew advises that a questionnaire should flow by topic, open with questions that are easy to engage with, avoid piling hard questions together, and usually leave background questions for later. A format that suits most student projects:',
        {
          steps: [
            { title: 'Title and introduction.', text: 'Who you are, what the study is about, how long it takes, and that answers stay anonymous.' },
            { title: 'Consent.', text: 'A short consent statement with a box to tick, or a separate form if your ethics committee asks; see our guide to the [informed consent form for research](/blogs/informed-consent-form-for-research/).' },
            { title: 'Screening question.', text: 'Only if you need one: "Do you currently work as a tailor in a knitwear unit?"' },
            { title: 'Main sections, one topic each.', text: 'Easy, factual questions first; attitudes and sensitive questions such as income later.' },
            { title: 'Background details and thanks.', text: 'Age, schooling, years in the job, then a thank you and a contact number.' },
          ],
          tone: 'amber',
        },
        'There is no fixed number of questions. A University of Florida IFAS Extension guide lists the time each question takes and the overall length among the things a pilot should check. The women had a thirty minute lunch break, so Keerthana aimed for a form that took about ten.',
        'Number every question and leave real space for open answers. In Google Forms, Google\'s help page shows you can mark questions as required and send people to a different section based on an answer, which is how a form skips questions that do not apply.',
      ],
    },
    {
      id: 'translate-and-pilot-test',
      title: 'Translate it and pilot test your questionnaire',
      Art: PilotScene,
      caption: 'into Tamil, back into English, then tried on a small group first',
      body: [
        'If your respondents read another language, translation is part of the design. WHO guidance on translating survey instruments describes forward translation by someone whose first language is the target language, review by an expert panel, back-translation, pre-testing with cognitive interviews, and a final version. The aim is the same meaning, not the same words.',
        'Keerthana translated the form into Tamil, and a Tamil lecturer at her college translated it back into English without seeing her original. "Take-home wage" came back as "monthly salary", which the women would read as the wage before PF and ESI deductions, so she rewrote it in the words used at the units.',
        'Then the pilot. The IFAS Extension guide says there is no prescribed sample size for a field test, quotes older suggestions of 10 to 25 and 20 to 50 respondents, and says the pilot group should be like your target population. In a pilot, watch for:',
        {
          list: [
            'questions people hesitate over, skip or ask you to explain',
            'how long each section takes',
            'answers that all look the same',
            'common answers to open questions, which can become options',
          ],
          style: 'dots',
        },
        'She gave the Tamil form to 20 tailors from a unit outside her sample, then sat with five of them and asked what each question meant to them, a simple version of a cognitive interview. Nearly everyone stumbled over the ranking question, so she replaced it with two plain multiple choice questions. If you will report Cronbach\'s alpha, check it on the pilot first; see [validity and reliability in research](/blogs/validity-and-reliability-in-research/).',
      ],
    },
    {
      id: 'sample-questionnaire-for-research',
      title: 'A sample questionnaire for research',
      Art: SampleScene,
      caption: 'the final form goes out, and the returned copies pile up',
      body: [
        'Here is a shortened version of Keerthana\'s final questionnaire, in English. Use it as a pattern for the shape, not as a ready-made tool for your own study.',
        {
          table: {
            head: ['No.', 'Question', 'Answer options'],
            rows: [
              ['1', 'Do you currently work as a tailor in a knitwear unit in Tiruppur?', 'Yes, No (if No, the form ends)'],
              ['2', 'How are you paid?', 'Weekly, every two weeks, monthly'],
              ['3', 'What was your take-home wage last month?', 'Less than ₹8,000, ₹8,000 to ₹9,999, ₹10,000 to ₹11,999, ₹12,000 or more'],
              ['4', 'Last month, did you save any part of your wage?', 'Yes, No'],
              ['5', 'Where do you keep your savings? Tick all that apply.', 'Bank, post office, chit fund, self-help group, gold scheme, at home, other'],
              ['6', 'Which is closer to your view?', '"With my wage, I can save something every month" or "With my wage, saving is not possible right now"'],
              ['7 to 11', 'How much do you agree? For example: "I decide how my wage is spent."', 'Strongly disagree to strongly agree, five points'],
              ['12', 'What stops you from saving more each month?', 'Open answer'],
            ],
          },
          tone: 'green',
        },
        'In your methodology chapter, describe the sections, the question types, where any borrowed items came from, how the form was translated and what the pilot changed. Put the full questionnaire, in every language you used, in an appendix.',
        'Dr. Senthil Kumar read the final version in eight minutes, about as long as the women would take. In the first week, 61 forms came back from lunch breaks across three units, and nobody stopped at question nine. Her mother filled one in at home, and Keerthana left it out of the data, because her mother had read every draft.',
      ],
    },
  ],

  takeaways: [
    'A questionnaire asks everyone the same written questions in the same order, so the answers can be compared.',
    'Start from your objectives: every question should feed an objective or a planned analysis, or it goes.',
    'Use mostly closed questions, such as multiple choice and Likert scales, with one or two open ones, and make options complete and non-overlapping.',
    'Ask one thing at a time, in your respondents\' words, without leading wording, jargon or double negatives.',
    'Translate with care, pilot test on people like your sample, and put the final questionnaire in an appendix.',
  ],

  faq: [
    {
      q: 'How many questions should a research questionnaire have?',
      a: 'There is no fixed number. It depends on your objectives and on how much time your respondents can give. Time the questionnaire in your pilot, and cut any question that does not serve an objective.',
    },
    {
      q: 'What is the difference between a questionnaire and a survey?',
      a: 'A questionnaire is the list of questions. A survey is the whole exercise: choosing a sample, giving them the questionnaire and analysing the answers.',
    },
    {
      q: 'Can I use a questionnaire from another study?',
      a: 'Often, yes, and a tested scale can make your results stronger. Cite the source, check whether the authors ask for permission, and if you translate or change it, pilot it again. Your guide and your department\'s rules decide what is allowed.',
    },
    {
      q: 'Is Google Forms good for a research questionnaire?',
      a: 'For many student projects it works well, with multiple choice, checkboxes, linear scales, required questions and sections. But an online form only reaches people who can read it and have a phone, so think about who will be left out.',
    },
  ],

  cta: {
    title: 'See how other studies asked the same questions',
    text: 'Fiberarticle finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export, so you can see which questionnaires earlier studies on your topic used before you write your own. One payment unlocks all of it, for good.',
  },
}
