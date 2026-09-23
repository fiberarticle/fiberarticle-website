import Hero from './hero.jsx'
import { FlagsScene, FunnelScene, GuideScene, MagnetScene, SearchScene, SignpostScene, TargetScene } from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a board full of possible topics, and the one worth circling',
  },

  intro: [
    'Karthik had two weeks. The MTech coordinator at his college in Chennai wanted every first-year Computer Science student to submit a research topic by the end of the month, and Karthik wrote the only word that came to mind: AI. Everyone said AI was the future, so it felt like the safe choice.',
    'His guide, Dr. Meenakshi, read the form and asked one question: "AI for what?" Karthik had no answer. Over the next two weeks she showed him how to go from a popular word to a topic he could finish and still enjoy a year later.',
    'This blog follows those two weeks, one step at a time.',
  ],

  sections: [
    {
      id: 'why-the-topic-matters',
      title: 'Why the topic decides most of the journey',
      Art: SignpostScene,
      caption: 'every direction looks promising from the signpost, and the sand keeps running',
      body: [
        'A research topic is more than a title on a form. It decides what you will read for the next year, which skills you must learn, what data you need, who can help you and often what kind of work you are ready for when you finish.',
        'It is also expensive to change. Students who switch topics in the second semester usually lose months, because the reading, the experiments and the half-written literature review rarely carry over. A few extra days spent choosing well is the cheapest time in the whole project.',
        {
          define: 'Research topic',
          hint: 'noun',
          meaning: 'The subject your project studies, narrow enough to finish with the time, skills and data you have. The research question is the exact question you ask inside it.',
        },
        {
          quote: 'Choose the topic you can finish. An exciting topic you cannot finish helps nobody, least of all you.',
          by: 'Dr. Meenakshi, to Karthik',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'start-with-what-pulls-you',
      title: 'Start with what genuinely pulls you',
      Art: MagnetScene,
      caption: 'the best topics are pulled out of real life, not picked from a list of buzzwords',
      body: [
        'Popularity is a weak reason to choose a topic. When everyone picks the same trendy word, there is more competition and less room for anything new. Interest lasts longer. Dr. Meenakshi asked Karthik to write down every problem that had caught his attention in the past year, however small.',
        {
          list: [
            'Problems you saw during an internship or a job.',
            'A course, lecture or paper that made you want to know more.',
            'Problems around you: traffic, farming, local languages, health care in small towns.',
            'Projects already running in your guide\'s lab, where data and help exist.',
            'A dataset, tool or piece of equipment you can actually use.',
          ],
          style: 'dots',
        },
        'Karthik\'s list had seven lines. One came from the summer before, when he had volunteered at a free eye camp near Tiruvannamalai. A single doctor was trying to examine hundreds of patients with diabetes, looking for damage to the retina. The length of that queue had stayed with him.',
        {
          note: 'keep the whole list. Ideas that do not become your topic often turn into the future work section of your thesis, or a second project.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'run-it-through-filters',
      title: 'Run every idea through a few honest filters',
      Art: FunnelScene,
      caption: 'many ideas go in at the top, one topic comes out at the bottom',
      body: [
        'An idea you like is not yet a topic. Before you commit, test it with a few plain questions. Karthik put his seven ideas in a table and marked each one against these filters.',
        {
          table: {
            head: ['Filter', 'The honest question'],
            rows: [
              ['Interest', 'Will I still care about this in month ten, when the work gets repetitive?'],
              ['Time', 'Can it be finished in the months I have, with room for things going wrong?'],
              ['Skills', 'Do I have the skills, or can I learn them in the first few weeks?'],
              ['Data', 'Can I get the data I need, legally and soon?'],
              ['Resources', 'Do I have the computing power, equipment and money it needs?'],
              ['Novelty', 'Is there something left to find out, or has it been done many times over?'],
              ['Guide fit', 'Does my guide know this area well enough to help me?'],
              ['Relevance', 'Would anyone, in research or in practice, use the answer?'],
            ],
          },
          tone: 'blue',
        },
        'Most of his ideas failed at least one filter. A traffic prediction idea needed city data he could not get. A chatbot for Tamil needed far more computing power than the college had. The eye screening idea passed almost every filter, and the one it did not clearly pass, novelty, needed a closer look.',
        'Data deserves special attention, because it is where most student topics quietly fail. An idea with no data you can access is not a topic. Karthik found that public collections of retinal photographs already existed, including images gathered by an Indian eye hospital that screens patients in rural areas, which solved his biggest problem in an afternoon.',
        {
          note: 'data about patients, students or any other people usually needs consent and approval from an ethics committee. Ask about it in the first week, because approval can take a month or more.',
          label: 'careful',
          tone: 'red',
        },
      ],
    },
    {
      id: 'narrow-it-down',
      title: 'Narrow it down, then narrow it again',
      Art: TargetScene,
      caption: 'each ring inward is a limit added, until the topic is small enough to hit',
      body: [
        'The first version of a topic is almost always too broad. "AI in healthcare" is a field, not a topic; whole books are written about it. You narrow a topic by adding limits: which problem, which data, which people and which setting.',
        {
          steps: [
            { title: 'AI', text: 'A field. Thousands of topics live inside it.' },
            { title: 'AI in healthcare', text: 'Still a field. Which part of health care?' },
            { title: 'AI in eye care', text: 'Closer, but eye care has many problems, each with its own data.' },
            {
              title: 'Screening for diabetic retinopathy',
              text: 'A specific problem: damage to the retina caused by diabetes, which can lead to loss of vision if it is not caught early.',
            },
            {
              title: 'Deep learning to screen retinal photographs from rural eye camps',
              text: 'A topic. It names the method, the data and the setting, and it can be finished in a year.',
            },
          ],
          tone: 'amber',
        },
        'Each step down makes the reading list shorter and the work more concrete. When you can picture the data you will collect and the result you will report, you have probably narrowed enough.',
        'It is possible to go too far. A topic limited to one clinic, one camera and one month of photographs may leave too little data to learn from and too few earlier studies to compare with. If a narrower version starts to fail the data filter, step back up one rung.',
        {
          note: 'narrow does not mean small. A focused topic is easier to do well, and work done well is what gets published.',
          label: 'remember',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'the-one-hour-test',
      title: 'Test it with a one-hour search',
      Art: SearchScene,
      caption: 'one honest hour of searching tells you more than a week of wondering',
      body: [
        'Before you commit to a topic, spend one focused hour searching for it. Use Google Scholar and one or two databases in your field, and read the results the way an examiner would.',
        {
          list: [
            '**Thousands of close matches** usually mean the topic is still too broad, or so well studied that little is left to add.',
            '**No matches at all** can mean a new idea, but more often it means the topic is not feasible, or you are using different words from the people who work on it.',
            '**A handful of recent papers and a review or two** is often a good sign: people care about the subject and questions remain open.',
            '**Datasets and code mentioned in those papers** show you what is practical for a student.',
          ],
          style: 'dots',
        },
        'Karthik\'s hour turned up plenty of work on screening with deep learning, most of it tested on photographs from high-end hospital cameras. Far fewer studies seemed to look at the lower-quality photographs taken in field camps. That was a possible gap, and the next step was to check it properly, which is what [finding a research gap](/blogs/how-to-find-a-research-gap/) covers.',
        'A tool can make that hour go further. [Fiberarticle](https://app.fiberarticle.com) searches arXiv, OpenAlex, Semantic Scholar and Crossref in parallel, removes duplicates, and plans three to five research questions from a topic, which shows quickly whether an idea has enough substance. The manual route is explained in [how to search academic databases](/blogs/how-to-search-academic-databases/).',
      ],
    },
    {
      id: 'talk-to-your-guide',
      title: 'Talk to your guide before you commit',
      Art: GuideScene,
      caption: 'three one-page options make a far better conversation than one word on a form',
      body: [
        'Karthik nearly made the most common mistake: deciding alone and handing the guide a finished choice. Dr. Meenakshi asked for something else, two or three options, each on one page.',
        {
          list: [
            'The problem, in two or three sentences.',
            'Why it matters, and to whom.',
            'The data you will use, and how you will get it.',
            'A first idea of the method.',
            'The biggest risk, and your plan if it goes wrong.',
          ],
          style: 'numbers',
        },
        'One page is enough to show that you have thought an idea through, and short enough for a busy guide to read between classes. It also makes the conversation concrete. Instead of "Is AI a good topic?", you are discussing a specific plan. Send the pages a day before you meet, so the meeting is spent on decisions rather than on reading.',
        {
          quote: 'Bring me three pages, not one word. Then we can talk about something real.',
          by: 'Dr. Meenakshi',
          tone: 'blue',
        },
        'Your guide knows things you cannot know yet: which topics earlier students tried and abandoned, what the lab\'s computers can handle and which examiners ask difficult questions. How well your guide fits the topic matters as much as the topic itself.',
      ],
    },
    {
      id: 'warning-signs',
      title: 'Warning signs of a topic you will regret',
      Art: FlagsScene,
      caption: 'red flags are easy to see before you start, and hard to ignore later',
      body: [
        'Some topics look fine on the form and become painful by the third month. Check for these signs before you commit.',
        {
          list: [
            'You chose it only because it is trending.',
            'You cannot name the data you will use, or how you will get it.',
            'It needs equipment, money or computing power you do not have.',
            'It is so broad that every paper you read seems relevant.',
            'Your guide has never worked in the area and knows nobody who has.',
            'Reading about it leaves you feeling nothing.',
          ],
          style: 'cross',
        },
        'Karthik submitted his topic a day before the deadline: deep learning to screen retinal photographs from rural eye camps for diabetic retinopathy. Ten months later he was still working on it and still interested, which is the best test a topic can pass. His next step was to turn the topic into one precise question, and [how to write a good research question](/blogs/how-to-write-a-research-question/) shows how.',
      ],
    },
  ],

  takeaways: [
    'Your topic decides your reading, skills, data and much of the next year, so choose it carefully.',
    'Start from problems that genuinely interest you, not from what is popular.',
    'Test each idea against interest, time, skills, data, resources, novelty, guide fit and relevance.',
    'Narrow a topic by adding limits: the problem, the data, the people and the setting.',
    'Spend an hour searching before you commit, and read the results like an examiner.',
    'Take two or three one-page options to your guide, not a single word.',
  ],

  faq: [
    {
      q: 'How long should choosing a topic take?',
      a: 'For a master\'s project, two to four weeks of reading and discussion is common. Most of that time goes into testing ideas against the filters. If you are still undecided after a month, ask your guide to help you cut the list down.',
    },
    {
      q: 'Can I change my topic later?',
      a: 'Usually, but it costs time, and some universities have formal rules for it. Changing within the same area, such as a different dataset or method, is far easier than moving to another field.',
    },
    {
      q: 'Should I take a topic my guide suggests?',
      a: 'It is often a good choice, because your guide already knows it is feasible and can support you. Make sure it genuinely interests you as well, since you will work on it for a year or more.',
    },
    {
      q: 'What if my topic has already been studied?',
      a: 'That is normal; most research builds on earlier work. Look for what is still missing, such as a different population, setting, dataset or method, and focus your project on that.',
    },
  ],

  cta: {
    title: 'Check a topic before you commit to it',
    text: 'Give Fiberarticle a topic and it searches four scholarly indexes, removes duplicates and plans research questions from what it finds, so you can judge quickly whether an idea has enough behind it. One payment unlocks all of it, for good.',
  },
}
