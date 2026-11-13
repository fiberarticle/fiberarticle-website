import Hero from './hero.jsx'
import {
  ChecklistScene,
  ExampleScene,
  LengthScene,
  MeaningScene,
  PartsScene,
  StepsScene,
  VersusScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a full shelf, an empty bench, and two numbers that do not match',
  },

  intro: [
    'Kaveri Hegde is a first year PhD scholar in Library and Information Science at a university in Shivamogga. She grew up in a village in Thirthahalli taluk, where the gram panchayat library is one room beside the panchayat office. Since 2020, Karnataka has run a programme called Oduva Belaku, the light of reading, which enrols school children as members of these libraries. Kaveri wants to study how the children use them. First she had to learn how to write a problem statement.',
    'Her synopsis had a heading called "Statement of the problem". Under it she wrote that libraries are temples of knowledge, that the reading habit is declining day by day, and that her study would therefore study gram panchayat libraries. Her guide, Dr. Shashidhar Bhat, read it and asked one question: "You have told me your topic. What is the problem?" That evening she began reading guides on the subject.',
    'This blog follows what she learned: what a problem statement is, how it differs from a research question, its five parts, how to write a problem statement step by step, a full example, how long it should be, and the mistakes to avoid.',
  ],

  sections: [
    {
      id: 'what-is-a-problem-statement',
      title: 'What is a problem statement in research?',
      Art: MeaningScene,
      caption: 'a topic is a wide cloud, and a problem is one point pinned down inside it',
      body: [
        'A problem statement is a short piece of writing that tells the reader what your study is trying to fix or find out, and why that is worth doing. Wordvice defines it as "a concise statement describing the problem or issue addressed by the research study". Editage adds one important word: it is an *evidence-based* description of a specific gap. Indian synopses and theses usually call it the **statement of the problem**.',
        {
          define: 'problem statement',
          hint: 'noun',
          meaning: 'A short, evidence-based description of a specific problem or gap that a study will address, saying what is wrong or unknown, who it affects and why it matters.',
          tone: 'blue',
        },
        'The problem does not have to be a disaster. Scribbr describes two kinds. A **practical problem** is something that is not working, or a difficulty a group of people face. A **theoretical problem** is something not yet understood, such as a relationship nobody has explored or a debate that is still open.',
        'Kaveri\'s first draft had neither. "Rural libraries" is a topic. "The reading habit is declining" is an opinion with no source. A problem statement needs a particular place, particular people and something you can show is wrong or unknown.',
      ],
    },
    {
      id: 'problem-statement-vs-research-question',
      title: 'Problem statement vs research question, aim and objectives',
      Art: VersusScene,
      caption: 'four cards in a row, each one growing out of the card before it',
      body: [
        'Students often mix up the problem statement with the lines that come after it. Scribbr places the problem statement after you have narrowed your topic and before you write your research questions, because the questions are built from it.',
        {
          table: {
            head: ['', 'What it does', 'Kaveri\'s version'],
            rows: [
              ['Topic', 'Names the area', 'Gram panchayat libraries in Shivamogga district'],
              ['Problem statement', 'Says what is wrong or unknown, with evidence', 'Children are enrolled as members, but few of them come, and nobody has asked why'],
              ['Aim or purpose', 'Says what the study will do about it', 'To examine what keeps enrolled children away from the library'],
              ['Research question', 'Asks what you want to find out', 'What keeps enrolled children aged 11 to 16 from using their gram panchayat library?'],
              ['Objectives', 'List the jobs that answer the question', 'To measure use, to compare users and non-users, to identify barriers'],
            ],
          },
          tone: 'blue',
        },
        'The simplest test is grammar. Editage says a problem statement cannot be a question: it "makes a declarative claim supported by evidence". If your sentence ends with a question mark, it belongs under research questions. If it starts with "To" and a verb, it is an aim or an objective.',
        'For the lines that follow it, see [how to write a research question](/blogs/how-to-write-a-research-question/) and [how to write research objectives](/blogs/how-to-write-research-objectives/).',
      ],
    },
    {
      id: 'parts-of-a-problem-statement',
      title: 'The five parts of a problem statement',
      Art: PartsScene,
      caption: 'what should be, what is, and the gap between the two',
      body: [
        'Guides divide a problem statement in slightly different ways. Wordvice uses three elements: the context, the relevance, and the aims and objectives. Editage uses five parts, which are easier to check your own draft against:',
        {
          table: {
            head: ['Part', 'What it answers', 'In Kaveri\'s study'],
            rows: [
              ['Ideal state', 'What should be happening?', 'Children enrolled in the library use it to read'],
              ['Actual state', 'What is happening instead?', 'Most enrolled children do not come'],
              ['Evidence', 'How do you know?', 'Her own count at six libraries, and earlier studies'],
              ['Consequences', 'What happens if nothing changes?', 'Money goes into books and computers that few children use'],
              ['Response', 'What will your study add?', 'It will find out what keeps the children away'],
            ],
          },
          tone: 'amber',
        },
        'The problem lives in the space between the first two rows. If you cannot show what is actually happening, you have only a guess.',
        {
          note: 'Editage asks that every claim about the size of a problem carries a source, and that the statement names the population, the setting and the time frame. Words like "very", "huge" and "day by day" are not evidence.',
          label: 'remember',
          tone: 'red',
        },
      ],
    },
    {
      id: 'how-to-write-a-problem-statement',
      title: 'How to write a problem statement, step by step',
      Art: StepsScene,
      caption: 'a wide topic goes in at the top, and one tight paragraph comes out',
      body: [
        'Dr. Bhat did not ask Kaveri to rewrite the paragraph. He sent her back to Thirthahalli for two weeks to count. These are the six steps Editage gives, with what she did at each.',
        {
          steps: [
            {
              title: 'Narrow the topic.',
              text: 'Editage calls this the 4W test: who, where, what and when. "Rural libraries" became children aged 11 to 16, in the gram panchayat libraries of Thirthahalli taluk, and how often they visit, during the current school year.',
            },
            {
              title: 'Gather evidence.',
              text: 'Use official data, your institution\'s records or a small pilot, and prefer sources from the last five years. Kaveri sat in six libraries for two weeks with the membership registers and the visitors\' books.',
            },
            {
              title: 'Name the gap.',
              text: 'Say exactly what is missing: a group, a method, or a practice that does not match the evidence. The studies she found described buildings, collections and staff. Very few asked the children. For help with this step, read [how to find a research gap](/blogs/how-to-find-a-research-gap/).',
            },
            {
              title: 'Put a number on it.',
              text: 'Give at least one figure and something to compare it with. Across the six libraries, 1,140 children were enrolled. On an average day about 50 of them came in. That is fewer than one in twenty.',
            },
            {
              title: 'State the consequences.',
              text: 'Say who loses if nothing changes, in plain facts. Panchayats keep buying for a room that stays empty, and children with no books at home gain the least.',
            },
            {
              title: 'Draft, then cut.',
              text: 'Write one paragraph, then remove every sentence that describes the field in general. Editage suggests a test: read the first sentence alone and see if it still tells you the problem.',
            },
          ],
          tone: 'green',
        },
        'A problem statement is not written once. AJE\'s guide advises revising it as your literature search goes on, because what you read may change how you see the problem.',
      ],
    },
    {
      id: 'problem-statement-example',
      title: 'Problem statement example: weak and strong',
      Art: ExampleScene,
      caption: 'one paragraph, five colours, one job for each',
      body: [
        'Here is the paragraph Kaveri first wrote under "Statement of the problem":',
        {
          quote: 'Libraries are temples of knowledge. In the digital age, the reading habit among children is declining day by day. Rural libraries face many problems. Therefore the present study will study the gram panchayat libraries of Shivamogga district.',
          by: 'Kaveri\'s first draft',
          tone: 'pink',
        },
        'It has no place smaller than a district, no group of people, no number and no source. Three weeks later it read like this:',
        {
          quote: 'Since 2020, Karnataka has enrolled school children as members of gram panchayat libraries to bring them back to reading. Enrolment, however, is not use. In a two week pilot at six libraries in Thirthahalli taluk, 1,140 children were on the membership registers, but only about 50 visited on an average day. Studies of rural libraries in the state have mostly described buildings, collections and staffing. Little is known about why enrolled children stay away, particularly in Malnad villages where homes are scattered and the monsoon is long. If the reasons stay unknown, panchayats will go on spending on books and computers that few children use, and children with no books at home will gain the least. This study therefore examines what keeps enrolled children aged 11 to 16 from using gram panchayat libraries in Thirthahalli taluk.',
          by: 'the version her guide accepted',
          tone: 'green',
        },
        'Read it against the five parts. The first sentence is the ideal state, the next two are the actual state with evidence, the fourth and fifth name the gap, the sixth gives the consequences, and the last is the response. In her synopsis, the first and fourth sentences carry citations.',
        'The same pattern works in other fields. Here are two, shortened to show the shape:',
        {
          list: [
            '**Nursing:** Hand washing before touching a newborn is standard practice in a neonatal unit. In one week of observation in a district hospital unit, the step was missed in a large share of contacts during night shifts. Why night staff skip it has not been studied in this setting.',
            '**Education:** First year BTech students are expected to pass Engineering Mathematics in one attempt. In one college, the department\'s records show that students from regional language schools fail it far more often than others. Little is known about why.',
          ],
          style: 'dots',
        },
        'A real statement would give the actual figure and its source.',
      ],
    },
    {
      id: 'how-long-and-where',
      title: 'How long should it be, and where does it go?',
      Art: LengthScene,
      caption: 'the same problem, written at four different lengths',
      body: [
        'There is no single rule. AJE says one page is more than enough. Editage gives rough ranges by type of document:',
        {
          table: {
            head: ['Document', 'Typical length', 'Where it sits'],
            rows: [
              ['Conference abstract', '40 to 80 words', 'The first two sentences'],
              ['Journal article', '100 to 200 words', 'The last paragraphs of the introduction'],
              ['Master\'s thesis', '300 to 500 words', 'Chapter 1'],
              ['PhD thesis', '400 to 800 words', 'Chapter 1, under its own heading'],
            ],
          },
          tone: 'green',
        },
        'Treat these as a guide and follow your own university or journal first. In a longer version, the extra words go into the context and the evidence.',
        'Wordvice explains the placement. In a research proposal, the statement of the problem is usually a separate section near the beginning. In a journal paper there is no such heading: the introduction itself does the job.',
        'Indian synopsis formats differ in what they call it. Some have a heading named "Statement of the problem". St. Joseph University in Nagaland lists "need for the study". The University of Engineering and Management, Jaipur asks for a "definition of the problem". Others fold it into the introduction. Check your university\'s format and ask your guide. For the rest of the document, see [how to write a research proposal](/blogs/how-to-write-a-research-proposal/).',
      ],
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes, and a final checklist',
      Art: ChecklistScene,
      caption: 'five ticks before the synopsis goes to the committee',
      body: [
        'Editage lists the mistakes that weaken a problem statement. Kaveri\'s first draft made several of them in four sentences.',
        {
          compare: {
            left: {
              title: 'Avoid',
              items: [
                'Describing a topic, with no problem in it',
                'Claiming that no research exists',
                'Leaving out numbers',
                'Taking on a whole state or country',
                'Giving the solution or the expected findings',
              ],
            },
            right: {
              title: 'Do',
              items: [
                'Name the people, place and period',
                'Say what kind of gap it is',
                'Give a figure and a comparison',
                'Keep to what you can study',
                'Stop at what the study examines',
              ],
            },
          },
        },
        'The second mistake is the most tempting. "No study has been done on this topic" is almost never true, and one paper found by an examiner is enough to sink it. "Little is known about" is safer and usually more honest.',
        'Before you submit, run through this list, adapted from Editage\'s final checklist:',
        {
          list: [
            'The population, the setting and the time frame are named.',
            'At least one figure has a source and something to compare it with.',
            'The gap is stated, and it is not "nobody has studied this".',
            'The consequences are concrete, and no solution is promised.',
            'A reader outside your field can say what the problem is after one reading.',
          ],
          style: 'check',
        },
        'At the research committee, one member asked Kaveri why she had not chosen the whole district. She went back to the first step: she could count children properly in one taluk, and only guess for a whole district. The synopsis was approved. The following Saturday she was back in the one-room library in her own village, sitting by the door with the visitors\' book. Nine children came in that day, and she began asking each of them why.',
      ],
    },
  ],

  takeaways: [
    'A problem statement says what is wrong or unknown, how you know, and why it matters. It is a claim with evidence, not a topic and not a question.',
    'Check your draft against five parts: the ideal state, the actual state, the evidence, the consequences and your study\'s response.',
    'Narrow the problem to particular people, a particular place and a period, and give at least one figure with a source.',
    'Do not claim that no research exists, and do not promise a solution.',
    'Length depends on the document, so follow your university\'s or journal\'s format.',
  ],

  faq: [
    {
      q: 'What is the difference between a problem statement and a research question?',
      a: 'A problem statement is a declarative claim, backed by evidence, that something is wrong or unknown. A research question asks what the study will find out within that problem. Write the problem statement first, then build the questions from it.',
    },
    {
      q: 'How long should a problem statement be?',
      a: 'It depends on the document. Editage suggests about 100 to 200 words in a journal article, 300 to 500 in a master\'s thesis and 400 to 800 in a PhD thesis. AJE says one page is more than enough. Follow your own university or journal first.',
    },
    {
      q: 'What are the five elements of a problem statement?',
      a: 'In Editage\'s framework they are the ideal state, the actual state, the supporting evidence, the consequences of doing nothing and the response your study proposes.',
    },
    {
      q: 'Is the statement of the problem the same as the problem statement?',
      a: 'Yes. "Statement of the problem" is the name used in many synopsis and thesis formats, and "problem statement" is the everyday name for the same section. Some universities use other headings, such as "need for the study".',
    },
  ],

  cta: {
    title: 'Find the evidence behind your problem',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and builds an evidence matrix you can export, so you can see what earlier studies covered and what they left out before you write your statement of the problem. One payment unlocks all of it, for good.',
  },
}
