import Hero from './hero.jsx'
import {
  CarsScene,
  ExampleScene,
  FunnelScene,
  GapScene,
  JobScene,
  LastScene,
  LengthScene,
  StepsScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'from the wide hills of the big picture, down a narrowing road, to the door where the methods begin',
  },

  intro: [
    'Mrinal Saikia is in the third year of his PhD in Agricultural Engineering at a university in Jorhat. His first journal paper is about bhut jolokia, the fiery chilli that farmers grow across Assam. With a farmers\' group near the town, he built a low-cost solar dryer from bamboo and plastic sheet and compared it with the usual way of drying the pods: on mats, in the open sun. The methods, results and discussion took him a month. The introduction took longer than all three together.',
    'His draft began: "Since ancient times, chillies have been an important part of human civilisation." Two pages later the reader had travelled with chillies from South America to India, and only then met bhut jolokia. His own study appeared in the last line. His guide, Dr. Nandita Kalita, read it and wrote one note in the margin: "By page two, a reviewer still does not know why your dryer matters."',
    'This blog explains how to write an introduction for a research paper: what it must do, the funnel and the three moves most good introductions make, a step by step method, a worked example, and the mistakes reviewers notice.',
  ],

  sections: [
    {
      id: 'what-does-an-introduction-do',
      title: 'What does the introduction of a research paper do?',
      Art: JobScene,
      caption: 'four questions every reader brings to the first page, ticked off one by one',
      body: [
        'The introduction is the first full section of a research paper. In the common IMRaD structure it comes before the methods, results and discussion, and our guide to the [structure of a research paper](/blogs/structure-of-a-research-paper/) shows how it fits with the rest. Its job is to answer one question for the reader: why does this study exist?',
        'To answer it, a good introduction tells the reader four things, in roughly this order.',
        {
          list: [
            'What the topic is, and why it matters now.',
            'What is already known about it, with citations to the studies that showed it.',
            'What is still missing, unclear or untested: the gap.',
            'What this paper sets out to do about that gap.',
          ],
          style: 'check',
        },
        'The introduction is not the abstract. The abstract summarises the whole paper, results included; the introduction sets up the problem and the question, and leaves the findings for later. Our guide on [how to write an abstract](/blogs/how-to-write-an-abstract/) covers the other one.',
        {
          quote: 'Your introduction should end exactly where your methods section begins.',
          by: 'Dr. Kalita, to Mrinal',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'the-funnel-structure',
      title: 'The funnel: from the big picture to your question',
      Art: FunnelScene,
      caption: 'zooming in from the hills of Assam to one dryer on one farm',
      body: [
        'Most writing guides describe the introduction as a funnel. It begins with a broad area a reader outside your lab can recognise, narrows to the specific problem, and ends on one precise question or aim.',
        'Mrinal\'s funnel had four levels once Dr. Kalita made him write them down:',
        {
          list: [
            '**Broad:** bhut jolokia is a valuable crop for small farmers in Assam.',
            '**Narrower:** how the pods are dried after harvest affects their colour, their heat and the price they fetch.',
            '**Narrower still:** open sun drying is slow in humid weather and leaves the pods open to dust, rain and insects.',
            '**The point:** does a low-cost solar dryer do better for this chilli, in this climate?',
          ],
          style: 'numbers',
        },
        'The trouble with his first draft was the top. "Since ancient times" could open every paper on chillies ever written. Start one level above your problem, not ten.',
        {
          note: 'read only your first sentence and your last sentence. If the first could open a hundred different papers, narrow it. If the last does not state your aim or question, add it.',
          label: 'quick test',
          tone: 'green',
        },
      ],
    },
    {
      id: 'cars-model',
      title: 'The CARS model: three moves of an introduction',
      Art: CarsScene,
      caption: 'a hillside full of other people\'s flags, one empty patch, and a new flag planted in it',
      body: [
        'In 1990 the linguist John Swales published *Genre Analysis*, a study of how research articles are actually written. Looking at introductions from many fields, he found that most of them made the same three moves. He called the pattern CARS, short for Create a Research Space, and university writing centres still teach it.',
        {
          steps: [
            { title: 'Move 1: establish a territory.', text: 'Show that the area matters, and review what earlier studies have found about it.' },
            { title: 'Move 2: establish a niche.', text: 'Point out what those studies leave open: a gap, a limitation, a disagreement, or a question nobody has tested in your setting.' },
            { title: 'Move 3: occupy the niche.', text: 'Say what your study does about it: its aim, its question or hypothesis, and in some fields its main finding and the plan of the paper.' },
          ],
          tone: 'blue',
        },
        'Swales borrowed the word niche from ecology, where it means a small space in which one living thing can thrive. The first two moves show the reader that a space exists; the third puts your study in it. Other guides use other names for the moves, such as context, problem and response, but the idea is the same.',
      ],
    },
    {
      id: 'how-to-write-an-introduction-step-by-step',
      title: 'How to write an introduction for a research paper, step by step',
      Art: StepsScene,
      caption: 'one line in the notebook for each step, ticked as it is written',
      body: [
        'Here is the method Dr. Kalita gave Mrinal. It turns the funnel and the three moves into six things to write.',
        {
          steps: [
            { title: 'Open with the problem, not with history.', text: 'Your first sentence names the area and why it matters now, in words that belong to your field. One or two sentences are enough.' },
            { title: 'Give the background the reader needs.', text: 'Summarise what earlier studies found, grouped by idea rather than paper by paper, and cite each one. This is a short slice of your literature review, not the whole of it.' },
            { title: 'State the gap.', text: 'Say plainly what those studies leave open. Our guide on [how to find a research gap](/blogs/how-to-find-a-research-gap/) explains how to spot one and check that it is real.' },
            { title: 'State your aim, question or hypothesis.', text: 'One or two sentences on exactly what this study sets out to do. If your study tests a prediction, see [how to write a hypothesis](/blogs/how-to-write-a-hypothesis/).' },
            { title: 'Say what you contribute.', text: 'What the reader gains from your paper: a new method, new data from a place no one has studied, or a test of an old idea under new conditions.' },
            { title: 'Add a roadmap only if it helps.', text: 'A line such as "Section 2 describes the dryer" helps when the paper is organised in an unusual way. With the usual sections, you can often leave it out.' },
          ],
          tone: 'green',
        },
        'An empirical paper, one that reports a study, usually ends its introduction with the research question, the hypothesis, or both. An argumentative paper ends instead with a thesis statement: the one claim the rest of it defends.',
        'Mrinal\'s new plan fitted on one notebook page, a line for each step. The journey of chillies from South America did not make it.',
      ],
    },
    {
      id: 'the-gap-statement',
      title: 'The gap statement: the sentence that matters most',
      Art: GapScene,
      caption: 'the word however turns the story from what is known to what is missing',
      body: [
        'The gap statement is the hardest sentence in an introduction to write, and the one that matters most. It is the hinge between what others have done and what you did, and it often begins with *however* or *despite this*.',
        {
          compare: {
            left: {
              title: 'a vague gap',
              items: [
                'says only that "little research has been done"',
                'claims "no study has ever" without a careful search',
                'is so general it would fit any topic',
                'sits in the middle and is never answered',
              ],
              mark: 'cross',
              tone: 'red',
            },
            right: {
              title: 'a specific gap',
              items: [
                'names what earlier studies did, and what they did not',
                'points to a missing setting, group, method or variable',
                'leads straight into your aim',
                'can be checked against the papers you cite',
              ],
              mark: 'check',
              tone: 'green',
            },
          },
        },
        'Be careful with "for the first time". A reviewer who knows one earlier paper on your exact question will stop trusting the rest. Write "we found no study that..." only after a proper database search, and note what you searched.',
        {
          note: 'Earlier studies have shown A. However, they have [not tested B / been done only in C / used only method D]. This study therefore asks whether...',
          label: 'a pattern to adapt',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'research-paper-introduction-example',
      title: 'Research paper introduction example: weak and strong',
      Art: ExampleScene,
      caption: 'the old draft wanders for pages; the new one does one job in each paragraph',
      body: [
        'Here is the opening of Mrinal\'s introduction, before and after. The details are illustrative, not findings from a real study, and the numbers in brackets show where citations go.',
        {
          define: 'The weak version',
          hint: 'the first paragraph of the old draft',
          meaning: 'Since ancient times, chillies have been an important part of human civilisation. Chillies were first grown in South America and later spread across the world. They are used in food, medicine and many other things. Drying is an important process for chillies. In this study, a solar dryer was made and tested.',
          tone: 'red',
        },
        {
          define: 'The strong version',
          hint: 'a short form, illustrative',
          meaning: 'Bhut jolokia is a high-value crop for small farmers in Assam, but much of its value can be lost after harvest. Most growers dry the pods on mats in the open sun, which is slow in humid weather and leaves them open to dust, rain and insects [1, 2]. Solar dryers have shortened drying time and kept colour better for several other chilli varieties [3, 4]. However, these trials were mostly run in drier regions, and we found none that tested a low-cost dryer for bhut jolokia in the humid months of the Assam harvest. This study compares a bamboo-framed solar dryer, built with a farmers\' group near Jorhat, with open sun drying, and asks whether it shortens drying time and better keeps the colour and heat of the pods.',
          tone: 'green',
        },
        {
          list: [
            'The first sentence names the crop, the place and the problem.',
            'The background is grouped by idea: what open drying does, then what solar dryers have done elsewhere.',
            'The gap begins with *however* and is specific: this chilli, this climate, this kind of dryer.',
            'The last sentence states the aim, and leads straight into the methods.',
          ],
          style: 'check',
        },
        'The full version Mrinal sent was about 600 words. Each paragraph did one job, and every claim about earlier work had a citation.',
      ],
    },
    {
      id: 'length-and-tense',
      title: 'How long should an introduction be, and which tense to use',
      Art: LengthScene,
      caption: 'one slim slice of the paper, written mostly in the present tense',
      body: [
        'There is no fixed length. A common rule of thumb is about ten percent of the paper\'s words, often 500 to 1,000 words for a journal article. The journal\'s author guidelines always come first, and short conference papers may leave room for only a few paragraphs.',
        'Tense follows what each sentence is about. Editing guides broadly agree:',
        {
          table: {
            head: ['What the sentence is about', 'Usual tense', 'Example'],
            rows: [
              ['Accepted facts and the current problem', 'Present', '"Open sun drying exposes the pods to dust and insects."'],
              ['One specific earlier study', 'Past', '"An earlier trial [3] dried green chillies in a tunnel dryer."'],
              ['A line of research that is still going on', 'Present perfect', '"Several studies have tested solar dryers for chillies."'],
              ['Your own aim', 'Present', '"This study compares two drying methods."'],
            ],
          },
          tone: 'amber',
        },
        'These are habits, not laws, and fields differ. Read the introductions of three recent papers in your target journal and follow their pattern.',
        {
          note: 'in an Indian thesis or dissertation the introduction is usually a whole chapter. Besides the background, the problem and the objectives, it often covers the significance and scope of the study, definitions of key terms and an outline of the chapters. Your university or department template decides the exact headings, so follow it.',
          label: 'thesis chapter',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes, and why to write it last',
      Art: LastScene,
      caption: '"since ancient times" gets a red line, and the introduction is written after the discussion',
      body: [
        'Reviewers meet the same few problems again and again.',
        {
          list: [
            'Starting so broad that the first page says nothing about your study.',
            'Turning the introduction into a full literature review.',
            'Piling ten citations after one sentence without saying what any of them found.',
            'Telling the reader the topic is important instead of showing why, with a specific problem.',
            'Bringing in details of the method or the results that belong in later sections.',
            'Missing the turn from gap to aim, so the reader never learns what this paper does.',
          ],
          style: 'cross',
        },
        'Many researchers treat the first draft of the introduction as a placeholder and write the final version last. By then you know exactly which background the reader needs and which gap your findings answer, and you can cut everything else.',
        'The background needs recent, real studies. [Fiberarticle](https://app.fiberarticle.com) searches papers across arXiv, OpenAlex, Semantic Scholar and Crossref and shows the passage behind each point it writes, so you can check a paper before you cite it. Either way, read what you cite.',
        'Mrinal rewrote his introduction after his discussion was done. Five pages came down to under two. Dr. Kalita read it in one sitting, and this time she wrote only one word in the margin: *send*.',
      ],
    },
  ],

  takeaways: [
    'The introduction answers one question: why does this study exist?',
    'Shape it like a funnel, from a specific big picture down to your aim.',
    'Make the three CARS moves: show the area matters, show the gap, say how your study fills it.',
    'Write a specific gap statement, and back any "no study has" claim with a real search.',
    'End with your research question, hypothesis or aim, so the methods follow naturally.',
    'Keep it to about a tenth of the paper unless the journal says otherwise, and write the final version last.',
  ],

  faq: [
    {
      q: 'What should be included in the introduction of a research paper?',
      a: 'The context and why the topic matters, a short review of what is already known with citations, the gap, your aim, research question or hypothesis, and what your study adds. A brief outline of the paper is optional.',
    },
    {
      q: 'How do you start an introduction for a research paper?',
      a: 'Start with a sentence that names your area and the specific problem in it. Avoid openings such as "since ancient times" or a dictionary definition. A good first sentence could only belong to a paper in your field.',
    },
    {
      q: 'How long should the introduction of a research paper be?',
      a: 'A common guide is about ten percent of the paper, often 500 to 1,000 words for a journal article. Always follow the journal\'s author guidelines, which may set something different.',
    },
    {
      q: 'Is a thesis introduction different from a research paper introduction?',
      a: 'Yes. In a thesis it is usually a full chapter, which also covers the significance and scope of the study and an outline of the chapters. Follow your university\'s template.',
    },
  ],

  cta: {
    title: 'Find the studies your background needs',
    text: 'Fiberarticle finds real papers across arXiv, OpenAlex, Semantic Scholar and Crossref and shows the passage behind every point it writes, so the background of your introduction rests on sources you can check. One payment unlocks all of it, for good.',
  },
}
