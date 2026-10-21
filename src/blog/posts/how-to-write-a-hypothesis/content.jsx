import Hero from './hero.jsx'
import {
  ChecklistScene,
  ExamplesScene,
  NullScene,
  PredictScene,
  StepsScene,
  TypesScene,
  VariablesScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a hunch about phones and sleep, turned into a prediction the data can check',
  },

  intro: [
    'Rohini Nair is in the second year of her MSc in Psychology at a university in Thiruvananthapuram. She lives in the women\'s hostel, where the lights go off at eleven and the phone screens come on. Her friends scroll until one or two in the morning and complain of headaches in the first class. For her dissertation she wanted to study this, and she wrote her hypothesis in one confident line: "Mobile phones are harmful for students."',
    'Her guide, Dr. Thomas Varghese, read it twice. "Tell me one result that would prove you wrong," he said. Rohini could not think of one. "Then this is an opinion, not a hypothesis. Which students? Harmful how? And how will you measure it?"',
    'This blog explains how to write a hypothesis the way Dr. Varghese taught Rohini to write hers: what a hypothesis is, what makes a good one, how to find your variables, the steps from question to prediction, the main types, the null and alternative hypothesis, and examples of weak hypotheses made strong.',
  ],

  sections: [
    {
      id: 'what-is-a-hypothesis',
      title: 'What is a hypothesis in research?',
      Art: PredictScene,
      caption: 'a question asks, a hypothesis predicts, and the data check the prediction',
      body: [
        'A hypothesis is a clear, testable statement of the result you expect, written before you collect any data. It is a prediction about how two or more things are related, and your study is designed to check whether that prediction holds.',
        {
          define: 'hypothesis',
          hint: 'noun, plural hypotheses',
          meaning: 'A tentative statement about the expected relationship between two or more variables. It is tentative because the data have not tested it yet.',
          tone: 'blue',
        },
        'A hypothesis always grows out of a research question. The question asks; the hypothesis gives the answer you expect. If your question is still a broad topic, work on it first with our guide on [how to write a good research question](/blogs/how-to-write-a-research-question/).',
        {
          table: {
            head: ['', 'Rohini\'s version'],
            rows: [
              ['topic', 'phone use and sleep among hostel students'],
              ['research question', 'Is phone use after lights out related to sleep quality among women students in a university hostel?'],
              ['hypothesis', 'Students who use their phones for more time after lights out will report poorer sleep quality than students who use them less.'],
            ],
          },
          tone: 'amber',
        },
        'Not every study needs one. Hypotheses belong mostly to quantitative research that tests a prediction: surveys, experiments and studies that compare groups. Most qualitative studies, such as interviews about people\'s experiences, work with open research questions instead, because they set out to understand something before predicting it.',
      ],
    },
    {
      id: 'characteristics-of-a-good-hypothesis',
      title: 'Characteristics of a good hypothesis',
      Art: ChecklistScene,
      caption: 'four of the tests every hypothesis should pass before data collection begins',
      body: [
        'Dr. Varghese\'s question, "what would prove you wrong?", comes from the philosopher Karl Popper. Popper argued that a scientific claim must make a prediction that could, in principle, be shown false by an observation. A statement that no result could ever contradict tells you nothing. "Mobile phones are harmful" fails this test, because any finding at all could be explained away.',
        {
          list: [
            '**Testable.** You can collect data that would support it or count against it, with the time and tools you have.',
            '**Falsifiable.** You can describe the result that would show it is wrong.',
            '**Specific.** It names the variables, the group of people and the direction you expect, in plain words.',
            '**Grounded.** It rests on theory or earlier studies, not only on a hunch. A hypothesis is an informed guess, and the information comes from your reading.',
            '**Simple.** One clear relationship per hypothesis. If you need three, write three.',
            '**Free of value words.** "Should", "good" and "harmful" are judgements. Data cannot test them; they can test "lower", "higher" or "related to".',
          ],
          style: 'check',
        },
        {
          compare: {
            left: {
              title: 'opinion',
              items: ['Mobile phones are harmful for students.', 'Yoga should be taught in every school.'],
            },
            right: {
              title: 'hypothesis',
              items: [
                'More phone use after lights out is linked to poorer sleep quality in hostel students.',
                'Students who join a twelve week yoga programme will show lower stress scores than those who do not.',
              ],
            },
          },
        },
      ],
    },
    {
      id: 'independent-and-dependent-variables',
      title: 'Find your independent and dependent variables first',
      Art: VariablesScene,
      caption: 'the thing that varies on the left, the outcome it may move on the right',
      body: [
        'Every hypothesis is a sentence about variables, so name them before you write a word of it.',
        {
          table: {
            head: ['variable', 'what it is', 'in Rohini\'s study'],
            rows: [
              ['independent', 'the factor you change or compare; the possible cause', 'minutes of phone use after lights out'],
              ['dependent', 'the outcome you measure; the possible effect', 'sleep quality score on a standard questionnaire'],
              ['population', 'the group the prediction is about', 'women students living in one university hostel'],
            ],
          },
          tone: 'green',
        },
        'For each variable, ask how you will measure it. "Phone use" could mean hours per day, screen time after eleven, or how often a student wakes to check messages. Rohini chose screen time after lights out, read from each phone\'s own screen time record for one week, because it matched her question and did not depend on memory.',
        'Other factors may also affect sleep: caffeine, exam stress, a noisy room. You can measure some of them and allow for them in the analysis. These are often called control variables, and naming them early makes the methods chapter much easier. Our guide on [how to write a research methodology](/blogs/how-to-write-a-research-methodology/) shows how to describe your variables, tools and analysis in the methods.',
      ],
    },
    {
      id: 'how-to-write-a-hypothesis',
      title: 'How to write a hypothesis in six steps',
      Art: StepsScene,
      caption: 'from a hostel complaint to one sentence a test can check',
      body: [
        'Here is the path Rohini followed, from a hostel complaint to a sentence she could test.',
        {
          steps: [
            { title: 'Start with your research question.', text: 'Write it as one clear question. Rohini\'s was: is phone use after lights out related to sleep quality among women students in a university hostel?' },
            { title: 'Read what is already known.', text: 'Look for earlier studies, theories and reviews on your topic. They tell you whether a relationship is likely and in which direction. Rohini found several studies linking phone use at bedtime with poorer sleep quality among university students, which gave her a reason to predict a direction.' },
            { title: 'Name your variables and your group.', text: 'Independent, dependent and the population, each in a few words, with how you will measure them.' },
            { title: 'Write the prediction.', text: 'Put the variables into one sentence that says what you expect. You can use an if-then form, "If students use their phones longer after lights out, then their sleep quality scores will be poorer", or a direct statement of the relationship, which is more common in papers.' },
            { title: 'Check it against the list.', text: 'Is it testable, falsifiable, specific and free of value words? Could you describe the result that would prove it wrong?' },
            { title: 'Write the null and alternative versions.', text: 'If you will test it with statistics, state both, as the next sections explain.' },
          ],
          tone: 'amber',
        },
        'Rohini\'s first try after this was "Phone use affects sleep in students." Better, but Dr. Varghese pointed out two problems. "Affects" claims cause, which a one week survey cannot show. And "students" was every student in the world. Her next draft said "is associated with" and named the hostel. He nodded at that one.',
        {
          note: 'write the hypothesis before you see the data, and keep a dated copy. A prediction written after the results is not a test; it only describes what you found.',
          label: 'tip',
          tone: 'red',
        },
      ],
    },
    {
      id: 'types-of-hypothesis',
      title: 'Types of hypothesis, with examples',
      Art: TypesScene,
      caption: 'four pairs that describe the same sentence from different sides',
      body: [
        'Textbooks list the types of hypothesis in different ways, but most lists come down to the pairs below. One hypothesis can belong to several of them at once: Rohini\'s is simple, directional and associative.',
        {
          table: {
            head: ['type', 'what it predicts', 'example'],
            rows: [
              ['simple', 'a relationship between one independent and one dependent variable', 'More phone use after lights out is linked to poorer sleep quality.'],
              ['complex', 'a relationship involving two or more independent or dependent variables', 'Phone use after lights out and caffeine after 6 pm are linked to poorer sleep quality and more daytime tiredness.'],
              ['directional', 'which way the effect goes: higher, lower, more, less', 'Students with more phone use after lights out will have poorer sleep scores.'],
              ['non-directional', 'that a relationship or difference exists, without saying which way', 'Sleep quality will differ between high and low phone users.'],
              ['associative', 'that two variables change together, without claiming one causes the other', 'Phone use after lights out is associated with sleep quality.'],
              ['causal', 'that a change in one variable produces a change in the other', 'Switching phones off at lights out for two weeks will improve sleep quality scores.'],
            ],
          },
          tone: 'blue',
        },
        '**Directional or non-directional?** Make it directional only when earlier studies or theory give you a reason to expect a direction. In statistics a directional hypothesis is tested with a one-tailed test and a non-directional one with a two-tailed test, so the choice also shapes your analysis.',
        '**Associative or causal?** Match the claim to the design. A survey at one point in time can show that two things go together; usually it takes an experiment, where you change one thing and keep the rest the same, to support a causal claim. Rohini\'s survey could only support an associative hypothesis, so that is what she wrote.',
      ],
    },
    {
      id: 'null-and-alternative-hypothesis',
      title: 'Null and alternative hypothesis, explained',
      Art: NullScene,
      caption: 'the data weigh the null hypothesis, and either reject it or do not',
      body: [
        'When a hypothesis is tested with statistics, it is written in two forms. The **null hypothesis**, written H0, says there is no effect, no difference or no relationship. The **alternative hypothesis**, written H1 or Ha, is the prediction your study is built to test.',
        {
          table: {
            head: ['', 'Rohini\'s hypotheses'],
            rows: [
              ['H0, null', 'There is no relationship between phone use after lights out and sleep quality among women students in the hostel.'],
              ['H1, alternative', 'Greater phone use after lights out is associated with poorer sleep quality among women students in the hostel.'],
            ],
          },
          tone: 'pink',
        },
        'The test starts by assuming the null hypothesis is true and asks how likely your data would be if it were. That likelihood is the p-value. If it falls below a threshold set in advance, the significance level, you reject the null hypothesis in favour of the alternative. The threshold is commonly 0.05, but that is a convention, not a law, and some fields use stricter ones.',
        {
          list: [
            'Say "reject the null hypothesis", not "prove the hypothesis". Rejecting H0 supports H1; it does not prove it is true.',
            'If the p-value is above the threshold, say you "fail to reject the null hypothesis". The data did not give enough evidence against it, which is not the same as showing it is true.',
            'Decide the significance level and the test before you collect data, and report them in your methods.',
          ],
          style: 'dots',
        },
        'Dr. Varghese liked to put it this way to his students: "The null hypothesis is the sceptic in the room. Your data have to convince the sceptic. Even when they do, you have only won an argument, not found the final truth."',
      ],
    },
    {
      id: 'hypothesis-examples-and-mistakes',
      title: 'Hypothesis examples and common mistakes',
      Art: ExamplesScene,
      caption: 'the same idea, crossed out and rewritten until a test can check it',
      body: [
        'Here are weak hypotheses from different fields, each with a version that can be tested.',
        {
          table: {
            head: ['weak', 'what is wrong', 'stronger'],
            rows: [
              ['Online classes are bad.', 'value word; no variables; no group', 'Class 9 students in Ernakulam who attended mostly online classes in one year will score lower in mathematics than those who attended mostly in person.'],
              ['Fertiliser affects rice.', 'no direction; vague variables', 'Paddy plots given vermicompost will give a higher grain yield per hectare than plots given no organic manure.'],
              ['UPI changed everything for shops.', 'too broad to test', 'Small shops that accept UPI will report higher monthly sales than shops that accept only cash.'],
              ['Stress causes poor marks.', 'causal claim for what is usually a survey', 'Higher perceived stress scores are associated with lower semester marks among final year nursing students.'],
            ],
          },
          tone: 'amber',
        },
        {
          list: [
            'writing it as a question instead of a statement',
            'packing several predictions into one sentence joined by "and"',
            'using words you cannot measure, such as "better life" or "more aware"',
            'claiming cause when your design can only show a link',
            'writing it after seeing the results, to match what you found',
          ],
          style: 'cross',
        },
        '**Where does it go?** In a paper or thesis, the hypothesis usually comes at the end of the introduction, after the gap in the literature and the research question. In a proposal or synopsis, it often follows the objectives. Formats differ between universities, so check yours; our guide on [how to write a research proposal](/blogs/how-to-write-a-research-proposal/) shows the usual order.',
        'Rohini\'s final proposal had one research question, one null and one alternative hypothesis, and a line saying her survey could show a link but not a cause. Dr. Varghese signed it the same afternoon. "Now if the data say there is no link," he said, "you will have learnt something real. That is what a hypothesis is for."',
      ],
    },
  ],

  takeaways: [
    'A hypothesis is a testable prediction about how two or more variables are related, written before you collect data.',
    'A good one is testable, falsifiable, specific, grounded in your reading and free of value words.',
    'Name your independent variable, dependent variable and population first, and how you will measure each.',
    'Choose directional or non-directional, and associative or causal, to match your reading and your design.',
    'For statistics, state a null and an alternative hypothesis, and reject or fail to reject the null; never claim to prove it.',
  ],

  faq: [
    {
      q: 'What is the difference between a research question and a hypothesis?',
      a: 'A research question asks what you want to find out. A hypothesis is a statement of the answer you expect, which your data then support or fail to support. Every hypothesis comes from a question, but not every question needs a hypothesis.',
    },
    {
      q: 'Does every research study need a hypothesis?',
      a: 'No. Hypotheses are used mainly in quantitative studies that test a prediction. Exploratory and most qualitative studies work with research questions instead. Some universities ask for hypotheses in every synopsis, so check your own guidelines.',
    },
    {
      q: 'How many hypotheses should a dissertation have?',
      a: 'There is no fixed number. Write one hypothesis for each prediction your study tests, which often means one to four. Each should match a research question or objective and a planned analysis.',
    },
    {
      q: 'What happens if my hypothesis is not supported?',
      a: 'Report it honestly. A hypothesis that the data do not support is still a result, and it tells other researchers something useful. Discuss possible reasons, such as sample size or measurement, without changing the hypothesis after the fact.',
    },
  ],

  cta: {
    title: 'Ground your prediction in what others found',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and shows the source behind every line it writes, so the reasoning behind your hypothesis rests on papers you can check. One payment unlocks all of it, for good.',
  },
}
