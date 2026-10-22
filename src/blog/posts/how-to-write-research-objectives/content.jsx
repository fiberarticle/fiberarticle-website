import Hero from './hero.jsx'
import {
  AimScene,
  ChapterScene,
  ExampleScene,
  MeaningScene,
  SmartScene,
  SplitScene,
  StepsScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'one aim at the top of the hill, and numbered steps that lead up to it',
  },

  intro: [
    'Tanushree Barman is a first year PhD scholar in Tourism Management at a university in Siliguri. Every summer her cousins in a village above Kurseong turn two rooms of their house into a homestay. Guests from Kolkata come for the tea gardens and the view of Kanchenjunga. Tanushree wants to know what those guests actually change for the families who host them.',
    'Her synopsis was due at the research committee in three weeks. The topic was clear, the review of literature was half done, and then she reached the heading every synopsis in her department carries: objectives of the study. She wrote five lines quickly. Her guide, Dr. Anup Chhetri, read them and said, "These tell me what you are interested in. They do not tell me what you will do." That night she searched for how to write research objectives.',
    'This blog follows what she learned: what objectives are, how they differ from the aim, how to write research objectives step by step, the SMART test, examples, and where objectives go in a synopsis and thesis.',
  ],

  sections: [
    {
      id: 'what-are-research-objectives',
      title: 'What are research objectives?',
      Art: MeaningScene,
      caption: 'each objective is a job you can tick off when it is done',
      body: [
        'Research objectives are short statements of what your study will do to reach its aim. Each one names a piece of work you can finish and check off. Most guides agree that they start with "To" and an action verb, and that they are written as a numbered list.',
        {
          define: 'research objective',
          hint: 'noun',
          meaning: 'A specific, measurable statement of something a study will do or find out, which together with the other objectives carries out the study\'s aim.',
          tone: 'blue',
        },
        'Here are Tanushree\'s first five, the ones Dr. Chhetri sent back:',
        {
          list: [
            'To study homestays in the Darjeeling hills.',
            'To understand the impact of tourism on village life.',
            'To know the problems of homestay owners.',
            'To conduct a survey of homestays.',
            'To study and suggest ways to improve homestay tourism.',
          ],
          style: 'numbers',
        },
        'None of these is wrong about the topic. The trouble is that none of them can be finished. When would she have "studied" homestays enough? A good objective works like a job on a list: you can see what it asks for, and you know when it is done. Objectives also decide what data you collect, which methods you use and, in many theses, what the chapters are.',
      ],
    },
    {
      id: 'aims-vs-objectives',
      title: 'Aims and objectives: what is the difference?',
      Art: AimScene,
      caption: 'the aim is the target, and each objective is a shot that has to land on it',
      body: [
        'The aim and the objectives are often written together as "aims and objectives", but they do different jobs. A guide on Discover PhDs puts it simply: the aim says what is to be achieved, and the objectives say how it will be achieved.',
        {
          table: {
            head: ['', 'Aim', 'Objectives'],
            rows: [
              ['What it says', 'The overall purpose of the study', 'The specific things the study will do to reach that purpose'],
              ['How many', 'Usually one', 'Usually three to five'],
              ['Verbs', 'Broad ones such as examine or explore', 'Precise ones such as estimate, compare or identify'],
              ['Can you tick it off?', 'Only when the whole study is done', 'Yes, one by one'],
            ],
          },
          tone: 'blue',
        },
        'Tanushree\'s aim, after two drafts, read: "To examine how homestays in the Darjeeling hills affect the income and work of the village families who run them." It is broad, but it names the place, the people and the two things she cares about.',
        'A research question asks what you want to find out, a hypothesis predicts the answer, and an objective states the work you will do to get it. If you have not written your questions yet, start with [how to write a research question](/blogs/how-to-write-a-research-question/), and for predictions, see [how to write a hypothesis](/blogs/how-to-write-a-hypothesis/).',
        {
          note: 'Grad Coach calls the aim, objectives and research questions together the "golden thread" of a dissertation. Every objective should serve a question, and every question should have at least one objective that answers it.',
          label: 'remember',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'general-and-specific-objectives',
      title: 'General and specific objectives',
      Art: SplitScene,
      caption: 'one general objective, broken into smaller specific ones',
      body: [
        'Many guides split objectives into two kinds. A **general objective** states, in one line, what the study as a whole will do. It often reads almost like the aim. **Specific objectives** break it into smaller, connected pieces, each with its own method and its own result.',
        'How many should you write? Editage and Researcher.Life both suggest one or two general objectives and three or four specific ones for a student project. Editage adds that more than four or five specific objectives usually means the study is not focused. Discover PhDs gives no fixed number. So the count depends on your field and university, but a master\'s dissertation with nine objectives is almost always trying to do too much.',
        'Tanushree\'s general objective was a lightly reworded aim. Under it she placed four specific objectives:',
        {
          steps: [
            { title: 'Map.', text: 'Who runs homestays, and where?' },
            { title: 'Estimate.', text: 'How much of the family\'s income comes from guests?' },
            { title: 'Compare.', text: 'Who in the family does the work of hosting?' },
            { title: 'Identify.', text: 'What problems do the owners face?' },
          ],
          tone: 'green',
        },
        'Each piece answers one part of the aim, and none repeats another. Discover PhDs warns that overlapping objectives make it hard to say when each one is complete.',
      ],
    },
    {
      id: 'how-to-write-research-objectives',
      title: 'How to write research objectives, step by step',
      Art: StepsScene,
      caption: 'start from the problem, then write one line for each job',
      body: [
        'This is how Tanushree rewrote her list over the next week. The same steps work for any project, from a BSc to a PhD.',
        {
          steps: [
            {
              title: 'Start from the problem and the gap.',
              text: 'Objectives come out of your problem statement. Homestays are promoted as a way to bring tourism income to villages, but she had found little evidence on what they earn hill families in North Bengal, or who does the work. If your gap is still fuzzy, read [how to find a research gap](/blogs/how-to-find-a-research-gap/) first.',
            },
            {
              title: 'Write the aim in one sentence.',
              text: 'Name the place, the people and what you want to know about them.',
            },
            {
              title: 'Split the aim into parts.',
              text: 'Ask what you need to know to reach the aim. Each answer is a candidate objective.',
            },
            {
              title: 'Give each part one action verb.',
              text: 'Begin with "To" and a verb that says exactly what you will do: estimate, compare, identify. Editage notes that two verbs in one sentence usually means two objectives hiding in one.',
            },
            {
              title: 'Add who, where and when.',
              text: '"To estimate the share of household income" became "To estimate the share of annual household income that homestays provide to families in two blocks of Darjeeling district over one tourist year".',
            },
            {
              title: 'Check each one against a method.',
              text: 'For every objective, write down how you will collect and analyse the data. If you cannot, the objective is not ready.',
            },
            {
              title: 'Read the list as a whole.',
              text: 'Do they cover the aim, without overlaps, in the time you have?',
            },
          ],
          tone: 'amber',
        },
        'Without a place, a group and a time, an objective is still a topic. That is why the fifth step improves most first drafts the most.',
      ],
    },
    {
      id: 'smart-objectives-and-verbs',
      title: 'SMART objectives and the verbs to use',
      Art: SmartScene,
      caption: 'five checks for every objective, and verbs that can be measured',
      body: [
        'A common test for objectives is SMART. Guides expand the letters slightly differently, but the idea is the same. Researcher.Life notes that SMART applies mainly to specific objectives, since the general one is meant to be broad.',
        {
          table: {
            head: ['Letter', 'Ask yourself', 'Tanushree\'s second objective'],
            rows: [
              ['Specific', 'Does it say exactly what, who and where?', 'Share of income, homestay families, two blocks of Darjeeling district'],
              ['Measurable', 'Is there something you can count or record?', 'Income from guests as a share of total household income'],
              ['Achievable', 'Can you do it with your time, money and access?', 'About 120 families she can reach by shared jeep from Kurseong'],
              ['Relevant', 'Does it serve the aim?', 'Income is half of what the aim asks about'],
              ['Time-bound', 'Is the period clear?', 'One tourist year, from one spring season to the next'],
            ],
          },
          tone: 'green',
        },
        'The verb does a lot of the work. Editage and Discover PhDs both group verbs by purpose:',
        {
          table: {
            head: ['If the objective is to', 'Verbs that fit'],
            rows: [
              ['describe something', 'describe, document, estimate, profile'],
              ['explore or find out', 'explore, identify, examine, investigate'],
              ['test a relationship', 'determine, assess, analyse, evaluate'],
              ['compare groups', 'compare, contrast, differentiate'],
              ['build or check a tool', 'develop, design, validate'],
            ],
          },
          tone: 'amber',
        },
        {
          compare: {
            left: {
              title: 'Avoid',
              items: ['to study', 'to understand', 'to know', 'to look into', 'to appreciate'],
            },
            right: {
              title: 'Prefer',
              items: ['to estimate', 'to compare', 'to identify', 'to assess', 'to develop'],
            },
          },
        },
        'Nobody can tell when you have understood enough, but anyone can tell whether you have compared two groups.',
      ],
    },
    {
      id: 'research-objectives-examples',
      title: 'Research objectives examples, weak and strong',
      Art: ExampleScene,
      caption: 'a vague line crossed out, and a clear one that says what will be done',
      body: [
        'Here are Tanushree\'s first drafts beside the versions her guide accepted.',
        {
          table: {
            head: ['Weak', 'What is wrong', 'Stronger'],
            rows: [
              ['To study homestays in the Darjeeling hills.', 'No action you can finish', 'To map the homestays run by village families in two blocks of Darjeeling district, by size, season and years in business.'],
              ['To understand the impact of tourism on village life.', 'Vague verb, and far wider than the aim', 'To estimate the share of annual household income that homestays provide to these families over one tourist year.'],
              ['To conduct a survey of homestays.', 'A method, not an objective', 'To compare how the work of hosting guests is shared between women and men in the family.'],
              ['To know the problems of homestay owners.', 'Vague verb, no place or group', 'To identify the main problems owners report in running a homestay, such as access, bookings and registration.'],
            ],
          },
          tone: 'red',
        },
        'The third row is a common mistake. "To conduct a survey" describes a task, not what it is for. Grad Coach gives the same warning about objectives such as "to interview 20 managers". The survey belongs in your methodology. The objective is what the survey will tell you.',
        'Her fifth draft, "to suggest ways to improve homestay tourism", is a common kind of objective in Indian synopses. Dr. Chhetri let her keep a version of it, on one condition: the suggestions had to come from her own findings. It became "To recommend measures, based on the findings, that could help families run homestays".',
        'The same pattern works in other fields:',
        {
          list: [
            '**Nursing:** To assess the level of knowledge about gestational diabetes among pregnant women attending a district hospital antenatal clinic.',
            '**Education:** To compare the reading scores of Class 3 children taught in their home language with those taught in English in four government schools.',
            '**Engineering:** To determine the compressive strength of concrete blocks made with 10, 20 and 30 percent of the cement replaced by fly ash.',
          ],
          style: 'dots',
        },
      ],
    },
    {
      id: 'objectives-in-synopsis-and-thesis',
      title: 'Where objectives go in a synopsis and thesis',
      Art: ChapterScene,
      caption: 'each objective is tied to a chapter, and the conclusion answers each one',
      body: [
        'In a research paper or a dissertation, the aim and objectives usually come at the end of the introduction, right after the problem statement. Researcher.Life adds that the main objective should also appear in the abstract.',
        'Indian synopsis formats give objectives a heading of their own, but where it sits varies. Christ University\'s PhD synopsis guidelines, for example, list "Objectives of the study" after the review of related literature, followed by variables, operational definitions and hypotheses. Other universities put aims and objectives right after the introduction. Use your own university\'s format, and ask your guide if it is not clear. For the rest of the document, see [how to write a research proposal](/blogs/how-to-write-a-research-proposal/).',
        'Number your objectives. Discover PhDs notes that in a thesis each objective often gets its own chapter, as in Tanushree\'s plan:',
        {
          table: {
            head: ['Objective', 'Where it is answered'],
            rows: [
              ['1. Map the homestays', 'Chapter 4: who runs homestays, and where'],
              ['2. Estimate the share of income', 'Chapter 5: what guests bring to the household'],
              ['3. Compare who does the work', 'Chapter 6: hosting inside the family'],
              ['4. Identify the problems', 'Chapter 7: what gets in the way'],
              ['5. Recommend measures', 'Chapter 8: conclusion and suggestions'],
            ],
          },
          tone: 'blue',
        },
        'In the conclusion, answer each objective in turn. Editage points out that the final thesis must describe the research actually carried out, so if an objective changed, say so and why. Agree any change with your guide first.',
        'At the research committee, one member asked Tanushree how she would measure income from families who keep no written accounts. She had an answer ready, because objective two already named what she would record and for how long. The committee approved the synopsis, and a month later she took the shared jeep up to Kurseong for her first round of visits, starting with her cousins.',
      ],
    },
  ],

  takeaways: [
    'Research objectives are short, numbered statements of what your study will do, each starting with "To" and an action verb.',
    'The aim says what you want to achieve; the objectives say how you will achieve it.',
    'Write each objective with one precise verb and a clear who, where and when, and check it against SMART.',
    'A method such as "to conduct a survey" is not an objective; say what the survey will find out.',
    'Number the objectives, tie each to a chapter, and answer each one in the conclusion.',
  ],

  faq: [
    {
      q: 'How many objectives should a research proposal have?',
      a: 'Guides from Editage and Researcher.Life suggest one or two general objectives and three or four specific ones for most student projects. A large PhD thesis may have more. If your list grows past five or six specific objectives, check whether the study is too big for the time you have.',
    },
    {
      q: 'What is the difference between aims and objectives in research?',
      a: 'The aim is the overall purpose of the study, usually one sentence. The objectives are the specific, measurable steps you will take to reach it. You can tick off an objective when it is done; the aim is met only when the whole study is complete.',
    },
    {
      q: 'Should research objectives start with "to"?',
      a: 'Yes, by convention. Starting each objective with "To" followed by an action verb, such as "To estimate" or "To compare", makes them easy to find and read as actions. Check your university\'s format in case it asks for a different style.',
    },
    {
      q: 'What verbs should I avoid in research objectives?',
      a: 'Avoid verbs that cannot be measured or checked, such as study, understand, know and look into. Use precise verbs such as estimate, compare, identify, assess or develop instead.',
    },
  ],

  cta: {
    title: 'Ground your objectives in what is already known',
    text: 'Fiberarticle finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export, so you can see what earlier studies on your topic set out to do before you write your own objectives. One payment unlocks all of it, for good.',
  },
}
