import Hero from './hero.jsx'
import {
  ConfoundScene,
  ControlScene,
  DataTypesScene,
  IdentifyScene,
  IndependentDependentScene,
  LevelsScene,
  MediatorModeratorScene,
  VariableScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'one study, many variables: the one you change, the one you measure, and the ones that sneak in',
  },

  intro: [
    'Devansh Saini is in the second year of his MSc in Yoga Science at a university in Haridwar. His dissertation asks a question he first heard from his uncle, a clerk at a bank branch in Roorkee: can a short yoga routine before work bring down blood pressure in bank staff who already have it high? He planned a twelve-week programme for 60 clerks, with half of them doing yoga and half carrying on as usual.',
    'His synopsis came back from his guide, Dr. Meenakshi Pant, with one line circled in red: "Variables: yoga, BP, stress, age, etc." In the margin she had written, "Which one do you change? Which one do you measure? Which ones could fool you? And what is etc.?" Devansh had used the word variable for two years without ever sorting his into types.',
    'This blog walks through the types of variables in research the way Dr. Pant walked Devansh through them: what a variable is, independent and dependent variables, control and extraneous variables, confounding variables, mediating and moderating variables, categorical and quantitative variables, the four levels of measurement, and how to name and define each variable in your own thesis.',
  ],

  sections: [
    {
      id: 'what-is-a-variable',
      title: 'What is a variable in research?',
      Art: VariableScene,
      caption: 'five clerks, five readings: blood pressure varies, so it is a variable',
      body: [
        {
          define: 'variable',
          hint: 'noun',
          meaning: 'any characteristic, number or quality that can take different values in a study, such as age, an exam score or a blood pressure reading.',
          tone: 'blue',
        },
        'That definition is from Editage\'s guide to variables, and the key word is *different*. If every clerk had the same blood pressure, there would be nothing to study.',
        'Variables are sorted in two different ways, and students often mix them up:',
        {
          list: [
            '**By the role they play in the study:** independent, dependent, control, extraneous, confounding, mediating and moderating.',
            '**By the kind of data they hold:** categorical or quantitative, and within those, nominal, ordinal, discrete, continuous, interval or ratio.',
          ],
          style: 'dots',
        },
        'Every variable has one type of each kind. Blood pressure is Devansh\'s dependent variable by role, and a continuous ratio variable by data. The role shapes your design; the data type decides your statistics.',
      ],
    },
    {
      id: 'independent-and-dependent-variables',
      title: 'Independent and dependent variables, with examples',
      Art: IndependentDependentScene,
      caption: 'the cause on the left, the effect on the right, and the arrow only goes one way',
      body: [
        'Every study that looks at cause and effect has these two at its centre. Editage defines the **independent variable** as the one a researcher changes or categorises to see its effect on another variable, the presumed cause. The **dependent variable** is the outcome you measure, the presumed effect.',
        {
          table: {
            head: ['study', 'independent variable', 'dependent variable'],
            rows: [
              ['Devansh\'s yoga trial', 'yoga routine (yes or no)', 'systolic blood pressure after 12 weeks'],
              ['a fertiliser trial on paddy', 'type of fertiliser', 'grain yield per hectare'],
              ['a study of online classes', 'mode of teaching (online or in person)', 'marks in a mathematics test'],
            ],
          },
          tone: 'amber',
        },
        'If you cannot tell which is which, ask: what am I changing, or grouping people by? That is the independent variable. What am I measuring? That is the dependent variable. Then test them in a sentence: "yoga changes blood pressure" makes sense, but "blood pressure changes whether a clerk did yoga" does not.',
        {
          note: 'in a survey, where you change nothing, people often say **predictor** for the independent variable and **outcome** for the dependent one. The idea is the same.',
          label: 'remember',
          tone: 'amber',
        },
        'Naming these two is also the first step in writing a hypothesis, which our guide on [how to write a hypothesis](/blogs/how-to-write-a-hypothesis/) explains step by step.',
      ],
    },
    {
      id: 'control-and-extraneous-variables',
      title: 'Control variables and extraneous variables',
      Art: ControlScene,
      caption: 'same cuff, same chair, same hour: what you hold steady cannot spoil the result',
      body: [
        'Blood pressure moves for many reasons besides yoga: a cup of tea, a rushed walk from the bus stand, a Monday morning. Editage calls any factor other than the independent variable that could affect the outcome an **extraneous variable**.',
        'You deal with extraneous variables in one of two ways. You hold them constant, or you measure them so you can allow for them in the analysis. A variable you deliberately hold constant is a **control variable**: Editage\'s example is giving every participant the same room, lighting and quiz time.',
        'Dr. Pant asked Devansh to list everything that could move a blood pressure reading. Then they decided what to fix:',
        {
          steps: [
            { title: 'Same time of day.', text: 'Every reading taken between 9 and 10 in the morning, before the branch opens.' },
            { title: 'Same machine.', text: 'One digital monitor and the same size of cuff for everyone.' },
            { title: 'Same routine before the reading.', text: 'Five minutes of rest, sitting, with no tea in the half hour before.' },
            { title: 'Measure what cannot be fixed.', text: 'Age, weight and whether a clerk takes BP medicine, recorded at the start.' },
          ],
          tone: 'green',
        },
        'You cannot make every clerk the same age, but if you record age, you can check later whether it explains part of the result.',
      ],
    },
    {
      id: 'confounding-variables',
      title: 'Confounding variables: the hidden third factor',
      Art: ConfoundScene,
      caption: 'hot weather sells iced coffee and causes heat stroke; the coffee is not to blame',
      body: [
        'A **confounding variable** is the most dangerous kind of extraneous variable. The York St John University study skills factsheet defines it as a variable that is correlated with the independent variable and affects the dependent variable. Their example: when sales of iced coffee go up, so do cases of heat stroke. Iced coffee is not causing heat stroke. Temperature is pushing both up.',
        'Devansh had a confound in his own plan. He had meant to let clerks choose whether to join the yoga group. Dr. Pant pointed out that clerks who volunteer for morning yoga may already eat less salt and walk more. If their blood pressure falls, is it the yoga, or the kind of person who signs up for yoga?',
        {
          compare: {
            left: {
              title: 'with the confound',
              items: [
                'health-minded clerks choose the yoga group',
                'they already eat less salt',
                'BP falls, and yoga gets the credit',
              ],
              mark: 'cross',
              tone: 'red',
            },
            right: {
              title: 'with it controlled',
              items: [
                'clerks are put into groups at random',
                'salt habits are spread across both groups',
                'any difference left is more likely the yoga',
              ],
              mark: 'check',
              tone: 'green',
            },
          },
        },
        'Random assignment, matching groups on likely confounds, or measuring them and adjusting in the analysis are the usual answers. Which ones you can use depends on your [research design](/blogs/what-is-research-design/). If you can do none of these, say so in your limitations, because a confound left unexplained is exactly what an examiner is likely to ask about.',
      ],
    },
    {
      id: 'mediating-vs-moderating-variables',
      title: 'Mediating vs moderating variables',
      Art: MediatorModeratorScene,
      caption: 'a mediator sits on the path; a moderator turns the dial on it',
      body: [
        'These two sound alike but do different jobs. Both involve a third variable, and each answers a different question.',
        {
          table: {
            head: ['type', 'the question it answers', 'York St John example', 'in Devansh\'s study'],
            rows: [
              ['mediating variable', '*how* or *why* does the independent variable affect the dependent one?', 'more time on social media means less time with people, which leads to loneliness', 'yoga lowers stress, and lower stress lowers BP'],
              ['moderating variable', '*when* or *for whom* is the effect stronger or weaker?', 'practice hours improve driving test results, but less so for people who already drive well', 'the effect of yoga may be weaker in clerks over 50'],
            ],
          },
          tone: 'pink',
        },
        'The factsheet points out a common slip: people call a mediator a confound. The difference is direction. A confounder changes both the independent and dependent variable. A mediator is changed by the independent variable, and then it changes the dependent one.',
        {
          quote: 'If it explains the route, it is a mediator. If it changes the size of the effect, it is a moderator.',
          by: 'Dr. Pant, to Devansh',
          tone: 'pink',
        },
        'Devansh decided to measure stress at the start and end, to test it as a mediator, and to compare clerks under and over 50, to test age as a moderator. If you draw these links as boxes and arrows, you already have the start of a [conceptual framework](/blogs/conceptual-framework-in-research/).',
      ],
    },
    {
      id: 'categorical-and-quantitative-variables',
      title: 'Categorical and quantitative variables',
      Art: DataTypesScene,
      caption: 'labels go in boxes; numbers are counted or measured',
      body: [
        'Now the second way of sorting: by the kind of data a variable holds. Editage describes **qualitative** or categorical variables as ones that describe a quality or category, summarised with frequencies or percentages, and **quantitative** variables as ones expressed in numbers, analysed with statistics such as means and standard deviations.',
        {
          table: {
            head: ['type', 'what it holds', 'example from Devansh\'s data'],
            rows: [
              ['categorical, unordered (nominal)', 'groups with no order', 'gender; yoga group or usual routine'],
              ['categorical, ordered (ordinal)', 'groups in a clear order', 'job grade: clerk, officer, manager'],
              ['quantitative, discrete', 'whole numbers you count', 'number of yoga sessions attended out of 60'],
              ['quantitative, continuous', 'any value in a range, decimals included', 'blood pressure, weight, age'],
            ],
          },
          tone: 'blue',
        },
        'A quick test: if "half" of it makes sense, it is continuous. Half a kilo makes sense; half a session attended does not.',
        {
          note: 'age in years is continuous; age as "under 50" and "50 and over" is categorical. Decide before you design the form: you cannot get the exact number back from a tick box.',
          label: 'tip',
          tone: 'red',
        },
      ],
    },
    {
      id: 'levels-of-measurement',
      title: 'Levels of measurement: nominal, ordinal, interval and ratio',
      Art: LevelsScene,
      caption: 'four steps up: each level can do everything the one below it can, and a bit more',
      body: [
        'The psychologist S. S. Stevens set out these four scales in a paper called "On the Theory of Scales of Measurement" in *Science* in 1946, and they are still the best-known way of sorting data. GraphPad\'s guide gives a clear summary of each, and of the calculations that make sense at each level.',
        {
          table: {
            head: ['level', 'what it means', 'examples', 'what you can calculate'],
            rows: [
              ['nominal', 'categories with no natural order', 'blood group, gender, state of birth', 'counts and percentages'],
              ['ordinal', 'order matters, but the gaps between values are not equal', 'education level; satisfaction from dislike to like', 'counts, median, percentiles'],
              ['interval', 'equal gaps, but no true zero', 'temperature in Celsius, pH', 'adds mean and standard deviation; ratios do not make sense'],
              ['ratio', 'equal gaps and a true zero', 'weight, length, dose, blood pressure', 'everything above, plus ratios'],
            ],
          },
          tone: 'amber',
        },
        'The difference between interval and ratio is easy to check. GraphPad notes that 10 degrees Celsius is not twice as hot as 5 degrees, because zero on that scale does not mean no heat. A weight of 4 grams, though, is twice as heavy as 2 grams.',
        'Devansh\'s stress questionnaire used five-point answers, from "never" to "very often". Each answer is ordinal. Statisticians still debate whether a total of many such answers can be treated as interval and averaged, so follow what your field accepts, and say what you did.',
        'You can find an average blood pressure, but not an average blood group. Our guide on [qualitative vs quantitative research](/blogs/qualitative-vs-quantitative-research/) explains how this fits the wider choice of method.',
      ],
    },
    {
      id: 'how-to-identify-variables-in-your-study',
      title: 'How to identify the variables in your own study',
      Art: IdentifyScene,
      caption: 'Devansh\'s new variable table: every name has a role, a type and a way to measure it',
      body: [
        'Dr. Pant\'s red circle was really asking for one table. This is the order Devansh built it in.',
        {
          steps: [
            { title: 'Start from your research question.', text: 'The thing you change or compare is the independent variable; the thing you hope to see change is the dependent variable.' },
            { title: 'List everything else that could move the outcome.', text: 'Ask your guide and read similar studies. These are your extraneous variables.' },
            { title: 'Decide what to do with each one.', text: 'Hold it constant, measure it, or design it out with random assignment.' },
            { title: 'Look for mediators and moderators.', text: 'Include one only if your theory gives you a reason.' },
            { title: 'Write an operational definition for every variable.', text: 'Say exactly how it will be measured, with the tool and the unit.' },
            { title: 'Note the type of data for each.', text: 'Nominal, ordinal, interval or ratio. This decides which tests you can run.' },
          ],
          tone: 'amber',
        },
        'Editage calls the fifth step **operationalisation**: defining a variable in specific, measurable terms. "Stress" is an idea; "the total score on a ten-item stress questionnaire" is a variable. Here is part of Devansh\'s final table:',
        {
          table: {
            head: ['variable', 'role', 'how it is measured', 'level'],
            rows: [
              ['yoga routine', 'independent', '30 minutes, five mornings a week, for 12 weeks, or usual routine', 'nominal'],
              ['systolic BP', 'dependent', 'mean of two readings, digital monitor, 9 to 10 am, after 5 minutes of rest', 'ratio'],
              ['stress', 'mediating', 'total score on a ten-item questionnaire, start and end', 'treated as interval'],
              ['age', 'moderating', 'years on the date of joining; also under 50 and 50 and over', 'ratio'],
              ['BP medicine', 'measured and adjusted for', 'yes or no, from the clerk\'s own report', 'nominal'],
            ],
          },
          tone: 'green',
        },
        'This table belongs in your methodology chapter, often under a heading such as "variables of the study". Our guide on [how to write a research methodology](/blogs/how-to-write-a-research-methodology/) shows where it fits. Department formats vary, so check yours.',
        'Devansh took the new table to Dr. Pant a week later. There was no "etc." on it. She read it twice and drew a small tick beside every row.',
      ],
    },
  ],

  takeaways: [
    'A variable is anything that can take different values in your study. Sort each one by its role and by its kind of data.',
    'The independent variable is what you change or compare; the dependent variable is what you measure.',
    'Extraneous variables can also move your outcome. Hold them constant as control variables, or measure them and adjust for them.',
    'A confounder pushes both the cause and the effect; a mediator explains how the cause works; a moderator changes how strong the effect is.',
    'Nominal, ordinal, interval and ratio levels decide which statistics you can use. Write an operational definition for every variable before you collect data.',
  ],

  faq: [
    {
      q: 'What are the main types of variables in research?',
      a: 'By role: independent, dependent, control, extraneous, confounding, mediating and moderating. By data: categorical (nominal or ordinal) and quantitative (discrete or continuous), measured at the nominal, ordinal, interval or ratio level.',
    },
    {
      q: 'What is the difference between an independent and a dependent variable?',
      a: 'The independent variable is the presumed cause, the one you change or group people by. The dependent variable is the presumed effect, the outcome you measure.',
    },
    {
      q: 'What is the difference between a control variable and a confounding variable?',
      a: 'A control variable is one you deliberately hold constant. A confounding variable is one you did not control that is linked to both your independent and dependent variables, so it can make a false link look real.',
    },
    {
      q: 'Can a variable be both independent and dependent?',
      a: 'Yes, in different parts of a study. A mediator is one example: stress is the outcome of yoga in one link, and a cause of blood pressure change in the next.',
    },
  ],

  cta: {
    title: 'See how other studies measured the same variables',
    text: 'Fiberarticle\'s Literature Reviewer finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export, so you can compare which variables studies on your topic measured and how they defined them. One payment unlocks all of it, for good.',
  },
}
