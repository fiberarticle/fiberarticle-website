import Hero from './hero.jsx'
import { BricksScene, CherryScene, CycleScene, LabScene, QuestionScene, SortingScene } from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'research is the walk from a question to an answer, with the evidence carried all the way',
  },

  intro: [
    'Ananya was in the final year of her BSc in Microbiology at a college in Pune when her professor told the class that every student would do a small research project that semester. She went home, opened Google, read eleven websites on antibiotic resistance and wrote a neat four-page summary.',
    'Professor Deshpande read it and handed it back. "This is a good summary," he said. "It is not research. Research finds out something that nobody has checked yet, in a way that others can check after you."',
    'That difference is what this blog explains: what academic research is, the main types, the steps most studies follow, and how a beginner can do a first project properly.',
  ],

  sections: [
    {
      id: 'research-starts-with-a-question',
      title: 'Research starts with a question, not an answer',
      Art: QuestionScene,
      caption: 'a question worth asking can be as ordinary as the water cooler in the hostel corridor',
      body: [
        'Ananya had started with a subject, antibiotic resistance, and gone looking for information about it. Research works the other way round. It begins with a question you want answered, and the reading, the method and the data all exist to answer that question.',
        {
          define: 'Research',
          hint: 'noun',
          meaning: 'A careful, organised way of answering a question with evidence, done openly enough that others can check how you did it and build on what you found.',
        },
        'Her question came from something she saw every day. She filled her bottle at the steel water cooler in the hostel corridor, and one afternoon she noticed a thin green film in its drip tray. Was the water from the cooler as clean as the tap water that fed it? The question was small, it mattered to everyone in the hostel, and nobody knew the answer.',
        'Useful research questions usually look like this. They are specific, they can be answered with evidence you can actually collect, and the answer is not already in a textbook. The steps for shaping one are in [how to write a good research question](/blogs/how-to-write-a-research-question/).',
      ],
    },
    {
      id: 'what-makes-research-academic',
      title: 'What makes research academic',
      Art: BricksScene,
      caption: 'every study stands on earlier studies and adds one more brick, which others then check',
      body: [
        'People "research" a phone before they buy it. Academic research is a particular kind of looking, with habits that make its answers trustworthy. Professor Deshpande listed seven of them on the board.',
        {
          list: [
            '**It is systematic.** You follow a planned method instead of looking around until something turns up.',
            '**It rests on evidence.** Claims come from data, observations or documents that others can see, not from opinion.',
            '**It builds on what is known.** You read earlier work first and cite it, so readers can see where your study fits.',
            '**It can be repeated.** You describe your method clearly enough for someone else to do it again and check your result.',
            '**It is checked by others.** Before a paper is published, experts in the field review it. This is called peer review.',
            '**It adds something new.** Even a small study should tell others one thing they did not know before.',
            '**It is ethical.** Studies involving people or animals need consent and, usually, approval from an ethics committee before they begin.',
          ],
          style: 'dots',
        },
        {
          quote: 'A summary tells people what is already known. Research adds one more brick to it.',
          by: 'Professor Deshpande, to his class',
          tone: 'green',
        },
        'This is also why citations matter. They show the reader which earlier bricks your work stands on, so the reader can check them too.',
      ],
    },
    {
      id: 'types-of-research',
      title: 'The main types of research, in plain words',
      Art: SortingScene,
      caption: 'most study types are sorted by the kind of evidence they collect',
      body: [
        'The names of research types sound harder than they are. Each one describes why a study is done, what kind of data it collects, or how much is already known about the subject. Here they are with examples from a microbiology class.',
        {
          table: {
            head: ['Type', 'What it means', 'Example'],
            rows: [
              ['Basic', 'Understanding how something works, with no immediate use in mind', 'How bacteria form a film on steel'],
              ['Applied', 'Solving a practical problem', 'Whether weekly cleaning keeps a water cooler safe'],
              ['Quantitative', 'Uses numbers: counts, measurements, scores', 'Counting bacterial colonies in water samples'],
              ['Qualitative', 'Uses words and meanings: interviews, observations', 'Asking students why they trust or avoid the cooler'],
              ['Mixed methods', 'Combines numbers and words in one study', 'Colony counts plus short student interviews'],
              ['Primary', 'You collect the data yourself', 'Taking your own water samples'],
              ['Secondary', 'You analyse data someone else collected', 'Studying records from a water testing lab'],
              ['Exploratory', 'Looks at a barely studied subject to find which questions to ask', 'Is hostel drinking water ever tested at all?'],
              ['Descriptive', 'Describes what is happening, accurately', 'How bacterial counts change over a week'],
              ['Explanatory', 'Tries to explain why something happens', 'Why cooler water holds more bacteria than tap water'],
            ],
          },
          tone: 'amber',
        },
        'These labels overlap. Ananya\'s project was applied, quantitative, primary and partly explanatory, all at once. The labels help you describe a study clearly; they are not boxes it must fit into.',
        {
          note: 'most first projects are small quantitative or qualitative studies with data the student collects. That is a sound place to start.',
          label: 'good to know',
          tone: 'green',
        },
      ],
    },
    {
      id: 'the-research-cycle',
      title: 'The research cycle, step by step',
      Art: CycleScene,
      caption: 'the cycle ends where it began, with a new question',
      body: [
        'Research is a loop rather than a straight line. Most studies end with new questions, and those questions start the next study. This is the loop Ananya followed.',
        {
          steps: [
            { title: 'Ask a clear question.', text: 'Does water from the hostel cooler carry more bacteria than the tap water that fills it?' },
            {
              title: 'Read what is already known.',
              text: 'She found papers on bacteria in water dispensers and storage tanks, which showed her what others had measured and how. The method in [how to read a research paper](/blogs/how-to-read-a-research-paper/) makes this step faster.',
            },
            { title: 'Choose a method.', text: 'Samples from the tap and the cooler on the same mornings, with colonies counted on agar plates, a standard microbiology method.' },
            { title: 'Collect the data.', text: 'Twelve pairs of samples over three weeks, each one labelled and written in her lab notebook on the day.' },
            { title: 'Analyse it.', text: 'She compared the counts and checked, with a simple statistical test, whether the difference was larger than chance would explain.' },
            { title: 'Write it up.', text: 'Question, method, results, what they mean, and what the study could not show.' },
            { title: 'Share it and let others check it.', text: 'First at the college research day, later perhaps in a journal, where reviewers ask hard questions.' },
            { title: 'Ask the next question.', text: 'Does regular cleaning fix the problem? That is a new study.' },
          ],
          tone: 'blue',
        },
        'Reading comes second on purpose. Beginners often want to skip it and start collecting data. Reading first stops you from repeating work that is already done, and from mistakes that others have already made and written about.',
        'Keep a simple research log as you go: the date, what you did and what you decided. Months later it is the only reliable record of why your study looks the way it does.',
      ],
    },
    {
      id: 'what-research-is-not',
      title: 'What research is not',
      Art: CherryScene,
      caption: 'picking only the fruit that agrees with you is the oldest mistake in research',
      body: [
        'Ananya\'s summary was the reading step, done early and given the wrong name. A few other things are often mistaken for research, and it helps to see them side by side.',
        {
          compare: {
            left: {
              title: 'not research',
              items: [
                'copying or summarising what others wrote',
                'stating an opinion, however strongly',
                'one quick search and the first answer',
                'keeping only the facts that agree with you',
                'a result nobody else could check',
              ],
            },
            right: {
              title: 'research',
              items: [
                'answering a question nobody has answered yet',
                'letting the evidence decide, even against your hopes',
                'a planned look at many sources',
                'reporting everything you found, surprises included',
                'a method written clearly enough to repeat',
              ],
            },
          },
        },
        'The fourth point has a name: *confirmation bias*, the habit of noticing evidence that agrees with what we already believe and ignoring the rest. It is also called cherry-picking.',
        'Ananya caught herself doing it. She was so sure the cooler would be dirtier that she nearly left out one sample that came back cleaner than the tap. Professor Deshpande made her keep it. "The data owes you nothing," he said. "Record all of it."',
      ],
    },
    {
      id: 'your-first-small-project',
      title: 'How to start your first small project',
      Art: LabScene,
      caption: 'two dishes, one question, and an answer the whole hostel could use',
      body: [
        'A first project does not need a big lab or a grant. It needs a small question, a simple method and careful notes. This is roughly how Ananya did hers.',
        {
          list: [
            'Pick a question you can answer with the time, tools and money you actually have.',
            'Read about ten good sources before you collect anything, and note where each idea came from.',
            'Choose the simplest method that can answer the question properly.',
            'Write down every step, sample and change of plan on the day it happens.',
            'Show your plan to your guide before you start. Ten minutes of advice can save ten days of work.',
            'Write up what you found honestly, including what went wrong and what you would change.',
          ],
          style: 'check',
        },
        'Before collecting anything, Ananya wrote a one-page plan: her question, why it mattered, the method, what she needed from the lab and a week-by-week timeline. Her guide changed two things: more samples, and a fixed time of day for collecting them, so the tap and cooler samples could be compared fairly. That page later became the method section of her report.',
        'For the reading step, [Fiberarticle](https://app.fiberarticle.com) can do the first search for you: give it your topic and it plans a few research questions, searches arXiv, OpenAlex, Semantic Scholar and Crossref together, and shows the source behind every point it writes. The samples, the thinking and the conclusions remain yours.',
        'Ananya\'s results were clear. On most mornings the cooler water had noticeably more bacteria than the tap water feeding it. She presented the findings at the college research day, and the hostel warden now has the cooler cleaned every month. The study was small, and it was real research. If you are ready to begin your own, start with [choosing a topic you will not regret](/blogs/how-to-choose-a-research-topic/).',
      ],
    },
  ],

  takeaways: [
    'Research is an organised way of answering a question with evidence that others can check.',
    'It starts with a specific question, not with a subject to read about.',
    'Academic research is systematic, based on evidence, built on earlier work, repeatable and reviewed by peers.',
    'Most studies follow a loop: question, reading, method, data, analysis, writing, sharing, new questions.',
    'Watch for confirmation bias. Record every result, including the ones you did not expect.',
    'A first project can be small. It has to be honest, careful and clearly written.',
  ],

  faq: [
    {
      q: 'Is a summary of papers a kind of research?',
      a: 'A proper literature review is research in its own right, because it organises and compares what is known and shows what is missing. A summary of a few websites is not. The difference is explained in [what a literature review really is](/blogs/what-is-a-literature-review/).',
    },
    {
      q: 'Can undergraduate students do real research?',
      a: 'Yes. Many good studies begin in the final year of a degree. Keep the question small, the method simple and the notes careful, and the work can be as sound as any larger study.',
    },
    {
      q: 'What is the difference between a project and research?',
      a: 'A project builds something, such as an app or a device. Research answers a question and finds out something new. Many final-year projects do both, for example building a tool and then testing whether it works better than the old way.',
    },
    {
      q: 'Where do I find research papers?',
      a: 'Start with Google Scholar and your college library, then open indexes such as OpenAlex, Semantic Scholar and arXiv, where many papers can be read free. Your guide can also name the two or three journals that matter most in your subject.',
    },
    {
      q: 'Do I need statistics to do research?',
      a: 'Quantitative studies usually need some basic statistics to compare results fairly. Qualitative studies need careful methods of a different kind. Your guide or a good methods textbook can show you the few techniques your own study needs.',
    },
  ],

  cta: {
    title: 'Start your reading from real papers',
    text: 'Fiberarticle searches four scholarly indexes at once, reads the open-access papers and shows the source behind every line it writes. One payment unlocks all of it, for good.',
  },
}
