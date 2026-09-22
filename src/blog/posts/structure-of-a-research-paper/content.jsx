import Hero from './hero.jsx'
import {
  DiscussionScene,
  DoorScene,
  FunnelScene,
  HourglassScene,
  MethodsScene,
  OrderScene,
  ResultsScene,
  ShelvesScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the blueprint of a research paper, one block at a time',
  },

  intro: [
    'Rahul had the data. For three months he had climbed to the roof of the Physics department in Chandigarh every morning, measured the output of four small solar panels, and cleaned two of them while leaving the other two dusty. The dusty pair produced visibly less as the weeks passed. His professor, Dr. Kaur, was pleased. "Write it up," she said. "It could be a paper."',
    'That evening Rahul opened a blank document, typed a title, and stopped. What comes first? How much background? Where do the graphs go? His senior, Simran, a PhD student in the same lab, took the pen from his hand and drew an hourglass on a paper napkin. "Every research paper has this shape," she said. "Once you see it, you will know where everything goes."',
    'This blog walks through that napkin: the standard parts of a research paper, what goes in each one, and the order that makes the writing far easier.',
  ],

  sections: [
    {
      id: 'imrad-and-the-hourglass',
      title: 'The IMRaD shape and the hourglass',
      Art: HourglassScene,
      caption: 'wide at the top, narrow in the middle, wide again at the bottom',
      body: [
        'Most original research papers in science and engineering follow a structure called IMRaD: Introduction, Methods, Results and Discussion. Journals have used it for decades because it answers the four questions every reader brings, in the order they bring them: why did you do this, what exactly did you do, what did you find, and what does it mean?',
        {
          table: {
            head: ['Part', 'The question it answers', 'Usual tense'],
            rows: [
              ['Introduction', 'Why did you do this?', 'Present for what is known, past for earlier studies'],
              ['Methods', 'What exactly did you do?', 'Past'],
              ['Results', 'What did you find?', 'Past'],
              ['Discussion', 'What does it mean?', 'Present for meaning, past for your findings'],
            ],
          },
          tone: 'blue',
        },
        'Simran\'s hourglass shows how the focus moves. The introduction starts wide, with the big picture, and narrows to your specific question. The methods and results sit at the narrow waist, where you talk only about your own study. The discussion widens again, from your findings back out to what they mean for the field.',
        {
          note: 'not every paper is IMRaD. Review articles, theoretical papers and much of the humanities use other structures, and some journals merge results and discussion into one section. Always follow the journal\'s own author guidelines.',
          label: 'good to know',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'title-abstract-and-keywords',
      title: 'Title, abstract and keywords: the front door',
      Art: DoorScene,
      caption: 'the name above the door, the notice beside it and the keys that let the right readers in',
      body: [
        'Before anyone reads your introduction, they meet three things: the title, the abstract and the keywords. Together they decide whether a busy reader, an editor or a search engine ever opens the rest.',
        {
          list: [
            '**Title**: specific and informative. Name the main variable, method or setting. "Effect of dust on the output of small rooftop solar panels in Chandigarh" tells a reader far more than "A study of solar panels".',
            '**Abstract**: a short summary of the whole paper, usually a single paragraph. It is often the only part people read, so it has its own guide: [how to write an abstract](/blogs/how-to-write-an-abstract/).',
            '**Keywords**: often four to six terms that help databases file your paper. Choose words people actually search for, including ones that are not already in your title.',
          ],
          style: 'dots',
        },
        'Rahul\'s first title was "Solar panel study". By the end of the week it was a sentence that told a reader exactly what he measured, where, and why it mattered.',
      ],
    },
    {
      id: 'introduction',
      title: 'Introduction: why this matters',
      Art: FunnelScene,
      caption: 'the big picture goes in at the top, and one clear question comes out at the bottom',
      body: [
        'The introduction answers one question: why should anyone care about this study? It does that by moving from the general to the specific, like the top half of the hourglass.',
        {
          steps: [
            { title: 'Start with the context.', text: 'Why the broad area matters. For Rahul: rooftop solar is spreading fast in Indian cities, and its output matters to every household that invests in it.' },
            { title: 'Say what is already known.', text: 'Summarise the most relevant earlier studies and cite them. This is where your literature review earns its place.' },
            { title: 'Name the gap.', text: 'What those studies leave open. In Rahul\'s case, perhaps few of them measured small panels through a dry north Indian winter.' },
            { title: 'State your question or aim.', text: 'One or two sentences on exactly what this study sets out to do.' },
            { title: 'Say what you contribute.', text: 'What the reader gains from your paper, and sometimes a line on how the rest of it is organised.' },
          ],
          tone: 'amber',
        },
        'Keep it focused. An introduction is not a history of the whole field; it is the shortest path from what everyone knows to the question only your paper answers. If you are unsure how to phrase that question, our guide to [writing a research question](/blogs/how-to-write-a-research-question/) will help.',
      ],
    },
    {
      id: 'methods',
      title: 'Methods: what you did, so others can repeat it',
      Art: MethodsScene,
      caption: 'every step written down, the way a good recipe is',
      body: [
        'The methods section describes what you did in enough detail that another researcher could repeat it and check your result. That is the test to keep in mind: could someone in another city, with similar equipment, do exactly what you did?',
        {
          list: [
            'What you studied: materials, equipment, samples or participants, with makes, models and settings where they matter.',
            'How you collected the data: the setup, the procedure, the schedule and any conditions you controlled.',
            'How you analysed it: the calculations, statistical tests and software, with version numbers.',
            'Ethics approval and consent, if people or animals were involved.',
          ],
          style: 'check',
        },
        'Rahul listed the panel model, the angle and direction the panels faced, the time of each reading, the meter he used, and how often he cleaned the clean pair. None of it was exciting to write. All of it was essential, because without it nobody could trust, or repeat, his numbers.',
        'Write methods in the past tense, and use subheadings if the section grows long. Keep explanations of *why* a result happened for the discussion.',
      ],
    },
    {
      id: 'results',
      title: 'Results: what you found, without opinions',
      Art: ResultsScene,
      caption: 'the evidence first, with its error bars showing',
      body: [
        'The results section reports what you found, in a logical order, without interpreting it yet. Think of it as the evidence room: the reader sees the facts before hearing your argument about them.',
        {
          list: [
            'Lead with the main finding, then the supporting ones.',
            'Use figures and tables for patterns and exact values, and state the key point of each one in the text.',
            'Give numbers with units, and show uncertainty or statistical tests where they apply.',
            'Do not show the same data twice, once in a table and again in a graph.',
            'Report the results that did not go as expected too. They are still results.',
          ],
          style: 'dots',
        },
        {
          quote: 'Results say what happened. The discussion says what it means. Keep them in separate rooms and both get clearer.',
          by: 'Simran, to Rahul',
          tone: 'amber',
        },
        'Rahul\'s first draft said the dusty panels "clearly suffered badly". Simran circled *badly*. In the results you report the drop, with its size and its uncertainty. Whether that is bad, and for whom, belongs in the discussion.',
      ],
    },
    {
      id: 'discussion-and-conclusion',
      title: 'Discussion and conclusion: what it all means',
      Art: DiscussionScene,
      caption: 'from one rooftop out to a whole city of them',
      body: [
        'The discussion is where you finally interpret. It is the bottom half of the hourglass: you start from your own findings and widen out to what they mean.',
        {
          steps: [
            { title: 'Answer your question.', text: 'Say plainly what your results show about the question you set in the introduction.' },
            { title: 'Compare with earlier work.', text: 'Where do your findings agree or disagree with other studies, and why might that be?' },
            { title: 'Admit the limitations.', text: 'A short season, a small sample, a single location. Honest limitations make a paper more trusted, not less.' },
            { title: 'Draw the implications.', text: 'What should a researcher, an engineer or a household do differently because of your result?' },
            { title: 'Point to future work.', text: 'The next study that would settle what yours could not.' },
          ],
          tone: 'green',
        },
        'The conclusion, where a journal asks for one, is short: the main finding and why it matters, in a paragraph or two, with no new results. Rahul\'s conclusion was four sentences long, and Dr. Kaur called it the best part of the draft.',
      ],
    },
    {
      id: 'references-and-the-rest',
      title: 'References, acknowledgements and the rest',
      Art: ShelvesScene,
      caption: 'the small parts every submission needs, each in its own box',
      body: [
        'Around the core of the paper sit several smaller parts. Each one is easy to write and easy to forget.',
        {
          table: {
            head: ['Part', 'What goes in it'],
            rows: [
              ['References', 'Every source you cited, in the exact style the journal uses; see [citation styles explained](/blogs/citation-styles-explained/).'],
              ['Acknowledgements', 'People and institutions who helped but are not authors.'],
              ['Funding and conflicts of interest', 'Who paid for the work, and any financial or personal interests that could be seen to influence it.'],
              ['Data availability', 'Where readers can find your data or code, or why it cannot be shared.'],
              ['Author contributions', 'Who did what. Many journals use a standard list of roles called CRediT.'],
              ['Supplementary material', 'Extra tables, figures, code or data that support the paper but would crowd the main text.'],
            ],
          },
          tone: 'green',
        },
        'Journals differ on which of these they require and where they go, so read the author guidelines before you submit. Rahul nearly forgot the data availability statement; the submission form reminded him.',
      ],
    },
    {
      id: 'the-order-to-write-it-in',
      title: 'The order to write it in',
      Art: OrderScene,
      caption: 'the tower is built from the bottom up: methods first, abstract and title last',
      body: [
        'The order in which a paper is read is not the order in which it is best written. Most experienced researchers write the parts they know best first.',
        {
          steps: [
            { title: 'Methods.', text: 'You know exactly what you did. Write it while the details are fresh.' },
            { title: 'Results.', text: 'Make the figures and tables first, then write the text around them.' },
            { title: 'Discussion.', text: 'With the evidence in front of you, interpret it.' },
            { title: 'Introduction.', text: 'Once you know what you found, you know which background the reader needs.' },
            { title: 'Conclusion.', text: 'A short paragraph on the main finding and why it matters.' },
            { title: 'Abstract and title.', text: 'Last of all, because they summarise everything else.' },
          ],
          tone: 'pink',
        },
        'If you are writing a review or survey rather than reporting an experiment of your own, the same shape still helps. The Article Writer in [Fiberarticle](https://app.fiberarticle.com) drafts a full manuscript this way: Abstract, Introduction, Related Work, Methodology, Results, Discussion and Conclusion, grounded in the papers it found. Because it cannot run your experiments, it writes the Results section as clearly marked placeholders for your own numbers. You can pick a journal template such as IEEE, ACM, Elsevier, Springer Nature, NeurIPS or APA, and export to Word, PDF, HTML or an Overleaf-ready LaTeX project.',
        'Rahul wrote his methods in one evening, his results over a weekend and the rest in the following week. Dr. Kaur sent the paper to a conference with one change to the title. Simran kept the napkin.',
      ],
    },
  ],

  takeaways: [
    'Most research papers follow IMRaD: Introduction, Methods, Results and Discussion.',
    'Think of an hourglass: start broad, narrow to your study, then widen to what it means.',
    'Methods must be detailed enough for someone else to repeat your work.',
    'Results report findings; the discussion interprets them. Keep the two apart.',
    'Write methods and results first, and the abstract and title last.',
    'Check the author guidelines for the smaller parts a journal requires.',
  ],

  faq: [
    {
      q: 'What does IMRaD stand for?',
      a: 'Introduction, Methods, Results and Discussion. It is the standard structure for original research papers in most sciences, usually with an abstract before it and often a conclusion after it.',
    },
    {
      q: 'Can results and discussion be combined?',
      a: 'Yes. Some journals and many conference papers use a single "Results and Discussion" section. Follow the author guidelines of the journal you are writing for.',
    },
    {
      q: 'How long should each section be?',
      a: 'It depends on the field and the journal. Journals usually set a total word limit rather than one per section, so look at a few recent papers in your target journal to see what is typical.',
    },
    {
      q: 'Does a review paper follow IMRaD?',
      a: 'Not usually. A review is often organised by themes or questions, although a systematic review has its own methods section describing how the literature was searched and selected.',
    },
  ],

  cta: {
    title: 'Start from a structure, not a blank page',
    text: 'Fiberarticle\'s Article Writer drafts every section of a manuscript from real papers, with journal templates and exports to Word, PDF and LaTeX. It is free to use yourself.',
  },
}
