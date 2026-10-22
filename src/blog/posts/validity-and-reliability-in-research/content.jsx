import Hero from './hero.jsx'
import {
  AlphaScene,
  DifferenceScene,
  EnsureScene,
  InternalExternalScene,
  MeaningScene,
  QualitativeScene,
  ReliabilityTypesScene,
  ValidityTypesScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the same answer every time, and the right answer: you need both',
  },

  intro: [
    'Leena Mohanty is in the second year of her PhD in Management at a university in Sambalpur. Her study asks how much burnout anganwadi workers in western Odisha feel, and what makes it worse. She had found a burnout questionnaire in English, translated it into Odia herself over two evenings and tried it on 30 workers. Next month she wanted to give it to 400.',
    'Her guide, Dr. Bijay Panda, turned the Odia pages slowly. "Two questions," he said. "How do you know these questions measure burnout in a worker in Bargarh, and not just tiredness after a long day? And if she answered again next week, would you get the same score?" Leena had no answer. The first question was about validity, the second about reliability.',
    'This blog explains validity and reliability in research the way Dr. Panda explained them to Leena: what they mean, how they differ, their main types, how to check them with Cronbach\'s alpha, what qualitative researchers use instead, and how to write them up.',
  ],

  sections: [
    {
      id: 'what-are-validity-and-reliability',
      title: 'Validity and reliability in research: what they mean',
      Art: MeaningScene,
      caption: 'the anganwadi weighing scale: same reading every time, half a kilo too heavy',
      body: [
        'Every study measures with a tool: a questionnaire, a test, a machine or a marking rubric. Validity and reliability are the two questions you ask about that tool. The library guide on tests and measures at Walden University puts them simply: validity asks how well an instrument measures what it is supposed to measure, and reliability asks whether it performs consistently each time.',
        {
          table: {
            head: ['word', 'the question it asks', 'in Leena\'s study'],
            rows: [
              ['reliability', 'Does the tool give the same result when nothing has changed?', 'Would a worker get a similar score if she filled the form again next week?'],
              ['validity', 'Does the tool measure the thing it claims to measure?', 'Do the Odia questions capture burnout, and not just tiredness, low pay or a bad week?'],
            ],
          },
          tone: 'amber',
        },
        'Dr. Panda used an example from Leena\'s own field. Every anganwadi centre has a scale for weighing children. Suppose it shows half a kilo too much. Weigh the same child five times and you get the same wrong number five times. The scale is reliable, because it is consistent, but not valid, because it is wrong. Simply Psychology uses the same kind of example, a scale that reads two kilograms too heavy.',
        {
          note: 'reliability does not mean identical scores. A tool is reliable when the differences stay small and within an acceptable margin.',
          label: 'remember',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'validity-vs-reliability',
      title: 'Validity vs reliability: the difference',
      Art: DifferenceScene,
      caption: 'four targets: scattered, tight but off, loose around the middle, tight in the middle',
      body: [
        'The easiest way to see the difference is a target. Think of each dart as one measurement. Reliability is how close the darts land to each other. Validity is how close they land to the centre, the true value you are trying to measure.',
        {
          table: {
            head: ['what you see', 'reliable?', 'valid?', 'what it means'],
            rows: [
              ['darts all over the board', 'no', 'no', 'no answer can be trusted'],
              ['darts in a tight group, away from the centre', 'yes', 'no', 'consistent but wrong, like the heavy weighing scale'],
              ['darts spread loosely around the centre', 'no', 'not really', 'near the truth on average, but no single score is'],
              ['darts in a tight group on the centre', 'yes', 'yes', 'what every study wants'],
            ],
          },
          tone: 'blue',
        },
        'The two are not equal partners. A tool can be reliable without being valid, but a tool that keeps changing its answer cannot measure well. Simply Psychology puts it as reliability being necessary for validity but not enough on its own. Editage\'s guide says the same from the other side: a valid measure is generally reliable too.',
        {
          quote: 'A scale that is wrong the same way every time is very consistent, and still wrong.',
          by: 'Dr. Panda, to Leena',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'types-of-reliability',
      title: 'Types of reliability, with examples',
      Art: ReliabilityTypesScene,
      caption: 'same people two weeks apart, two raters on one answer, many items pulling one way',
      body: [
        'Reliability is checked in four main ways. Each one asks "consistent with what?" in a different way.',
        {
          table: {
            head: ['type', 'what it checks', 'how it is done', 'example'],
            rows: [
              ['test-retest', 'stability over time', 'same tool, same people, twice, after a gap; correlate the two sets of scores', 'Leena gives the form to 30 workers, then again two weeks later'],
              ['inter-rater', 'agreement between people who score or observe', 'two raters score the same answers on their own; measure their agreement', 'two researchers code the same open answers about workload'],
              ['internal consistency', 'whether items meant to measure one thing move together', 'split-half correlation, or more often Cronbach\'s alpha', 'the items on exhaustion should rise and fall together'],
              ['parallel forms', 'whether two versions of a test give the same result', 'give two equivalent versions to the same people', 'two question papers for a pre-test and post-test'],
            ],
          },
          tone: 'green',
        },
        'The gap in test-retest needs care. Editage warns about memory effects and an interval that is too short or too long: too short, and people remember their answers; too long, and the thing itself may change. Leena chose two weeks.',
        'You do not need every type. A questionnaire with several items on one idea needs internal consistency. Anything scored by people, such as interview codes or essays, needs inter-rater reliability.',
      ],
    },
    {
      id: 'types-of-validity',
      title: 'Types of validity in research',
      Art: ValidityTypesScene,
      caption: 'does the questionnaire cover every part of the idea, and nothing else?',
      body: [
        'Validity also comes in several types. Think of them as kinds of evidence that add up, not boxes to tick.',
        {
          table: {
            head: ['type', 'the question it asks', 'how it is usually checked'],
            rows: [
              ['face validity', 'Does the tool look as if it measures the right thing?', 'asking people who use the tool; it reflects perception only'],
              ['content validity', 'Does it cover every part of the idea, and only that idea?', 'a systematic review of each item by subject experts'],
              ['construct validity', 'Does it measure the theoretical idea it claims to?', 'convergent evidence: it agrees with measures of related ideas; discriminant evidence: it does not agree with unrelated ones'],
              ['criterion validity', 'Do its scores match an outcome or an accepted measure?', 'concurrent: compared with a measure taken at the same time; predictive: compared with an outcome later'],
            ],
          },
          tone: 'pink',
        },
        'Leena\'s first answer had been that her questions "clearly" asked about burnout. "That is face validity," Dr. Panda said. "It is what the questions look like to you." Editage\'s guide notes that it is hard to measure because it reflects perception, not actual validity.',
        'Content validity was more useful. Burnout, in her theory, had more than one part, and her form had to cover each. She sent the Odia version to five experts: two professors, a child development project officer and two senior workers. Each rated every question for relevance and clarity. Four of the five marked the same two questions unclear.',
        {
          define: 'construct',
          hint: 'noun',
          meaning: 'an idea you cannot measure directly, such as burnout, motivation or anxiety, so you measure it through questions or signs that should reflect it.',
          tone: 'pink',
        },
      ],
    },
    {
      id: 'internal-and-external-validity',
      title: 'Internal and external validity, with an example',
      Art: InternalExternalScene,
      caption: 'inside the study: was it really the cause? outside it: does it travel?',
      body: [
        'Validity is also used for a whole study, in two other senses.',
        {
          compare: {
            left: {
              title: 'internal validity',
              items: [
                'is the cause and effect you found real?',
                'threatened by confounds: something else that changed at the same time',
                'protected by design: control groups, random assignment, measuring other likely causes',
              ],
              mark: 'dots',
              tone: 'amber',
            },
            right: {
              title: 'external validity',
              items: [
                'do the results hold beyond your sample and setting?',
                'threatened by a narrow or unusual sample',
                'protected by a sample that represents the population you want to speak for',
              ],
              mark: 'dots',
              tone: 'green',
            },
          },
        },
        'Here is an internal validity example. Leena planned to test a two-day stress workshop in one block, measuring burnout before and after. Suppose scores fall. If workers\' honorarium was raised the same month, that alone could lower burnout. The pay rise is a confound. Editage gives a medical example: participants taking other medication during a study. A comparison block that got the pay rise but not the workshop would protect her result.',
        'External validity is about how far results travel. Burnout in rural blocks of Sambalpur district may not match burnout in Bhubaneswar city. That depends mostly on who you sampled, as our guide on [sampling methods in research](/blogs/sampling-methods-in-research/) explains.',
      ],
    },
    {
      id: 'how-to-check-reliability',
      title: 'How to check reliability: Cronbach\'s alpha and kappa',
      Art: AlphaScene,
      caption: 'alpha creeps up the dial as the items agree; past 0.9, check for repeats',
      body: [
        'For a questionnaire, the number most theses report is **Cronbach\'s alpha**. Tavakol and Dennick explain it in a short editorial in the *International Journal of Medical Education* (2011). Alpha measures internal consistency, how far the items of a test measure the same idea, and runs from 0 to 1. Their main points are worth knowing before you report one:',
        {
          list: [
            'There is no single pass mark. Reported acceptable values range from 0.70 to 0.95; 0.70 is the most common rule of thumb.',
            'Higher is not always better. Above 0.90, some items may be repeats in different words.',
            'Alpha depends on length: too few items lower it.',
            'If your tool has several parts, calculate alpha for each part, not one number for the whole.',
            'Alpha belongs to a sample, not to the tool. Calculate it again on your own data.',
          ],
          style: 'dots',
        },
        'Leena ran alpha on her 30 pilot forms, part by part. One part came out low. The cause was the two questions the experts had flagged: her Odia wording had turned a negative statement into a positive one. She fixed the wording and piloted again.',
        'For inter-rater reliability, the usual statistic is **Cohen\'s kappa**, which, as Simply Psychology explains, corrects for agreement that would happen by chance. For test-retest, report the correlation between the two rounds.',
        {
          note: 'whatever you report, name the statistic, the number and the sample it came from. "The tool is reliable" with no number tells an examiner nothing.',
          label: 'tip',
          tone: 'red',
        },
      ],
    },
    {
      id: 'validity-and-reliability-in-qualitative-research',
      title: 'Validity and reliability in qualitative research',
      Art: QualitativeScene,
      caption: 'four checks that let a reader trust interview findings',
      body: [
        'Leena also planned to interview 12 workers. Interviews have no score to correlate, so qualitative researchers usually speak of **trustworthiness** instead. The best known framework comes from Lincoln and Guba\'s 1985 book *Naturalistic Inquiry*, which offered four criteria as parallels to the quantitative ideas. Our guide to [qualitative vs quantitative research](/blogs/qualitative-vs-quantitative-research/) explains the difference between the two kinds of study.',
        {
          table: {
            head: ['criterion', 'parallel to', 'what it asks', 'common ways to show it'],
            rows: [
              ['credibility', 'internal validity', 'do the findings match what participants actually experienced?', 'member checking, triangulation, long engagement in the field'],
              ['transferability', 'external validity', 'can readers judge whether the findings apply to their setting?', 'thick description of the setting and participants'],
              ['dependability', 'reliability', 'is the process consistent and open to audit?', 'an audit trail of decisions; a second person checking transcripts against the recordings'],
              ['confirmability', 'objectivity', 'can the findings be traced back to the data, not the researcher\'s views?', 'an audit trail, reflexive notes on your own assumptions'],
            ],
          },
          tone: 'green',
        },
        '**Member checking** means taking your interpretation back to participants and asking whether it fits their experience. **Triangulation** means comparing more than one source, such as interviews, observation and records. Leena planned both: she would read her summary back to each worker, and compare what they said with the centres\' attendance registers.',
      ],
    },
    {
      id: 'how-to-ensure-validity-and-reliability',
      title: 'How to ensure validity and reliability in your thesis',
      Art: EnsureScene,
      caption: 'from a borrowed English form to a checked Odia one, step by step',
      body: [
        'Most of the work happens before you collect a single response. This is the order Leena followed the second time.',
        {
          steps: [
            { title: 'Define the idea first.', text: 'Write down what you mean, and which theory it comes from, before choosing questions.' },
            { title: 'Use an established tool where you can.', text: 'Published evidence of validity and reliability saves months. Check whether you need permission.' },
            { title: 'Translate it properly.', text: 'A tool in a new language must be checked again. WHO guidance on translating survey instruments describes forward translation, an expert panel, back-translation, pre-testing and a final version.' },
            { title: 'Ask experts to review every item.', text: 'Keep their ratings: they are your content validity evidence.' },
            { title: 'Pilot it.', text: 'Try it on a small group like your real sample.' },
            { title: 'Check reliability on your own data.', text: 'Alpha for each part, kappa for coded data, or a test-retest correlation.' },
            { title: 'Standardise how you collect.', text: 'Same instructions, similar conditions, trained helpers.' },
          ],
          tone: 'amber',
        },
        'Then write it up. Editage suggests explaining in the methods how you ensured validity and reliability, reporting coefficients such as alpha and kappa in the results, and admitting weaknesses in the discussion. Our guide on [how to write a research methodology](/blogs/how-to-write-a-research-methodology/) shows where the instrument paragraph goes. Any doubt that remains belongs in your [limitations of the study](/blogs/how-to-write-limitations-of-the-study/), stated plainly.',
        {
          note: 'universities and journals differ in what they expect for a new or translated tool. Ask your guide and read your department\'s thesis rules before you start.',
          label: 'check',
          tone: 'red',
        },
        'Leena\'s instrument section ended up a page and a half long: the original tool, the translation steps, the experts\' changes, two pilots and an alpha for each part. Dr. Panda asked his two questions again. This time she had an answer to both.',
      ],
    },
  ],

  takeaways: [
    'Reliability is consistency: the same result when nothing has changed. Validity is accuracy: measuring the thing you claim to measure.',
    'A tool can be reliable but not valid, like a scale that is wrong by the same amount every time. Check both.',
    'Reliability is checked by test-retest, inter-rater, internal consistency and parallel forms; validity by face, content, construct and criterion evidence.',
    'Cronbach\'s alpha has no single pass mark. Report it for each part of your tool, on your own data, and be wary of values above 0.90.',
    'Qualitative studies show trustworthiness through credibility, transferability, dependability and confirmability.',
  ],

  faq: [
    {
      q: 'What is the difference between validity and reliability?',
      a: 'Reliability is consistency: the same result each time under the same conditions. Validity is accuracy: measuring what the tool is meant to measure. You need both.',
    },
    {
      q: 'Can a test be reliable but not valid?',
      a: 'Yes. A weighing scale that always reads half a kilo too heavy is reliable but not valid.',
    },
    {
      q: 'What is a good Cronbach\'s alpha value?',
      a: 'The most common rule of thumb is 0.70 or above, though reported acceptable values range from 0.70 to 0.95. Very high values, above 0.90, can mean some items repeat each other. Ask your guide what your department expects.',
    },
    {
      q: 'How do you check the validity of a questionnaire?',
      a: 'Define what you are measuring, have experts review every item for content validity, pilot it, and where possible compare its scores with related measures or outcomes.',
    },
  ],

  cta: {
    title: 'See which tools other studies trusted',
    text: 'Fiberarticle\'s Literature Reviewer finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export, so you can compare which questionnaires studies on your topic used and the reliability they reported. One payment unlocks all of it, for good.',
  },
}
