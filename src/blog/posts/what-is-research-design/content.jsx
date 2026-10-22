import Hero from './hero.jsx'
import {
  ChooseScene,
  DescribeScene,
  ExperimentScene,
  QualitativeScene,
  TimeScene,
  TypesScene,
  WhatScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the plan comes first: who is compared with whom, and when',
  },

  intro: [
    'Lalit Tomar is in the second year of his Master of Physical Education at a university in Gwalior. Before that he coached kho-kho at a government girls\' school near the fort, where the Class 7 girls were tired out within minutes of a game. For his dissertation he wanted to test a simple fix, fifteen minutes of skipping at the start of every PE period, and see whether it made the girls fitter. Like many students, he had never stopped to ask: what is research design, and why does a guide care about it so much?',
    'His plan took a day. He would teach the skipping in one section, test the girls at the end of the term, and write that it worked. His guide, Dr. Rekha Bhadoria, read it and pushed it back across the table. "Worked compared to what?" she asked. "Fitter than when? And how will you know the change came from the rope and not from the cooler weather in November?" Lalit had a topic and a test. He did not yet have a research design.',
    'This blog explains research design the way Dr. Bhadoria explained it to Lalit: what it means, the main types with examples, and how to choose one and write it up.',
  ],

  sections: [
    {
      id: 'what-is-research-design',
      title: 'What is research design?',
      Art: WhatScene,
      caption: 'the design is the plan, the methods are the tools, the methodology explains both',
      body: [
        'A research design is the overall plan that connects your research question to your answer. It says what you will compare, with whom, and when you will measure. QuillBot\'s student guide puts it in one line: research design is "a strategy for answering your research question using empirical data".',
        'Many Indian methodology courses use an older definition. C. R. Kothari\'s textbook *Research Methodology* quotes Claire Selltiz and colleagues: research design is "the arrangement of conditions for collection and analysis of data in a manner that aims to combine relevance to the research purpose with economy in procedure". In plain words: answer the question, and waste nothing.',
        {
          table: {
            head: ['term', 'what it covers', 'in Lalit\'s study'],
            rows: [
              ['research design', 'the shape of the study: who is compared with whom, and when', 'girls who skip compared with girls who do not, tested before and after'],
              ['research methods', 'the tools and steps used to collect and analyse the data', 'an endurance run, a flexibility test, an attendance register, a statistical test'],
              ['research methodology', 'the reasoning, and the thesis chapter, that explains and defends all of these choices', 'Chapter 3 of his dissertation'],
            ],
          },
          tone: 'amber',
        },
        'Textbooks draw these lines a little differently. What matters is the order: the design comes first, because a perfect questionnaire cannot rescue a study that compares the wrong groups.',
        {
          note: 'write your design in one sentence before you choose a tool: "I will compare A with B, measured at these times."',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'types-of-research-design',
      title: 'Types of research design',
      Art: TypesScene,
      caption: 'three questions sort most designs into describe, relate or test',
      body: [
        'There is no single official list, and one study can carry two or three labels at once. Three questions sort most designs.',
        {
          steps: [
            { title: 'Do you only describe, or do you test a relationship?', text: 'A study that reports how many girls meet a fitness standard describes. A study that asks whether skipping changes fitness tests a relationship. Ranganathan and Aggarwal, writing in *Perspectives in Clinical Research* in 2018, call the first kind descriptive and the second analytical.' },
            { title: 'Do you change anything?', text: 'If the researcher gives an intervention, such as a skipping routine or a medicine, the study is experimental. If the researcher only measures what already happens, it is observational.' },
            { title: 'Did chance decide who got the intervention?', text: 'If participants were put into groups at random, it is a true experiment. If the groups already existed, it is a quasi-experiment.' },
          ],
          tone: 'amber',
        },
        {
          table: {
            head: ['design', 'what it does', 'example from physical education'],
            rows: [
              ['exploratory', 'looks into a problem little is known about, to find ideas and questions', 'talking to PE teachers about why girls stop playing sport after Class 8'],
              ['descriptive', 'describes what is there: how many, how much, how often', 'how many Class 7 girls in a district meet a set fitness standard'],
              ['correlational', 'measures whether two things move together, without changing either', 'whether girls with more daily screen time score lower on an endurance run'],
              ['experimental', 'changes one thing on purpose and compares groups formed at random', 'girls assigned by lottery to skipping or to the usual warm-up'],
              ['quasi-experimental', 'changes one thing but compares groups that already exist', 'one whole section skips, another section of the same class does not'],
            ],
          },
          tone: 'green',
        },
        'Over all of these sits another split: quantitative designs work with numbers, qualitative designs with words, and mixed methods combine the two. Our guide on [qualitative vs quantitative research](/blogs/qualitative-vs-quantitative-research/) covers that choice in detail.',
      ],
    },
    {
      id: 'descriptive-and-correlational-research-design',
      title: 'Descriptive and correlational research design',
      Art: DescribeScene,
      caption: 'one chart that counts, one plot that asks whether two things move together',
      body: [
        'Descriptive designs answer what, how many and how often. They do not try to explain why. A survey of fitness levels or a record of injuries over one season is descriptive, and a careful one is valuable on its own.',
        'Correlational designs go one step further. They measure two or more things in the same people and ask whether they are related. Does more time on the phone go with lower endurance? The researcher measures but changes nothing.',
        {
          quote: 'Two things that move together are not proof that one moves the other.',
          by: 'Dr. Bhadoria, to Lalit',
          tone: 'amber',
        },
        'That is the limit of a correlational design. If girls with more screen time have lower endurance, it may be that screens keep them sitting. It may also be that girls who already dislike running choose screens, or that a third thing, such as a long journey home that leaves no time to play, drives both. Correlational studies are good at finding relationships worth testing. On their own they cannot show cause and effect.',
        {
          note: 'for a correlational finding, write "was associated with", not "caused" or "led to". Examiners notice the difference.',
          label: 'check',
          tone: 'red',
        },
      ],
    },
    {
      id: 'experimental-vs-quasi-experimental-design',
      title: 'Experimental vs quasi-experimental research design',
      Art: ExperimentScene,
      caption: 'chance deals the girls into groups on one side; on the other, the sections were set long ago',
      body: [
        'When your question is about cause and effect, you need a design that changes something and compares. The *Research Methods Knowledge Base* by William Trochim sorts these designs with two questions. First: "does the design use random assignment to groups?" If yes, it is a randomised, or true, experiment. If not, does it use "either multiple groups or multiple waves of measurement?" If yes, it is a quasi-experiment. If neither, it is a non-experiment.',
        {
          compare: {
            left: {
              title: 'true experiment',
              items: [
                'participants are put into groups by chance',
                'the groups start out alike, so a difference at the end points to the intervention',
                'the strongest design for cause and effect',
                'often hard in schools, hospitals and villages, where groups already exist',
              ],
              mark: 'check',
              tone: 'green',
            },
            right: {
              title: 'quasi-experiment',
              items: [
                'the groups already exist: two sections, two schools, two villages',
                'a pre-test shows how different the groups were at the start',
                'easier to run in real settings',
                'other differences between the groups may explain the result',
              ],
              mark: 'dots',
              tone: 'amber',
            },
          },
        },
        'Trochim adds a warning that trips up many students: "random assignment is not the same thing as random selection of a sample from a population!" Random selection decides who enters your study, and our guide on [sampling methods in research](/blogs/sampling-methods-in-research/) explains how it works. Random assignment decides which group each person joins once they are in.',
        'Lalit wanted a true experiment, but the school could not shuffle girls between sections for a term. So he chose what Trochim calls probably the most common quasi-experimental design, the nonequivalent groups design. Section A of Class 7 would skip, Section B would keep its usual warm-up, and both would be tested before and after twelve weeks. The pre-test would show how far apart the sections were at the start.',
      ],
    },
    {
      id: 'cross-sectional-vs-longitudinal-study',
      title: 'Cross-sectional, longitudinal, cohort and case-control designs',
      Art: TimeScene,
      caption: 'one snapshot, the same girls again and again, and arrows that run forward or back',
      body: [
        'Another way to sort designs is by time: when you measure, and how many times. These terms are most common in health research, but they apply anywhere.',
        {
          table: {
            head: ['design', 'when the data is collected', 'example'],
            rows: [
              ['cross-sectional', 'once, at a single point in time', 'fitness and screen time of 300 girls, measured in the same week'],
              ['longitudinal', 'from the same people, at two or more points over time', 'the same girls tested every year from Class 6 to Class 8'],
              ['cohort', 'starts from an exposure and follows people forward to an outcome', 'girls who join a school team and girls who do not, followed for two years for injuries'],
              ['case-control', 'starts from an outcome and looks back at earlier exposures', 'injured and uninjured players, asked about their past training'],
            ],
          },
          tone: 'blue',
        },
        'Ranganathan and Aggarwal explain these by direction. A cohort study runs forward, from exposure to outcome; a case-control study runs backward. A cross-sectional study measures both at the same time.',
        'Cross-sectional studies are quick and cheap, but a single snapshot cannot tell you which came first. Longitudinal studies show change within the same people, but they take longer, and some participants drop out. That loss, called attrition, can bias the result if those who leave differ from those who stay.',
        {
          note: 'Lalit\'s pre-test and post-test made his study longitudinal in a small way: the same girls, measured twice, inside one school term.',
          label: 'in practice',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'qualitative-research-design',
      title: 'Qualitative research designs: case study, ethnography and more',
      Art: QualitativeScene,
      caption: 'one case up close, a notebook among the players, notes sorted into a theory, and a story in their own words',
      body: [
        'When you want to understand experiences or reasons, a qualitative design suits better. QuillBot\'s guide lists four common ones.',
        {
          table: {
            head: ['design', 'what it does', 'example'],
            rows: [
              ['case study', 'studies one case in depth, such as a school, a team or a programme, using several sources', 'how one government school built a girls\' kabaddi team that reached the state level'],
              ['ethnography', 'studies the culture of a group by spending a long time among its members and observing', 'months spent at a village akhara, watching how young wrestlers are trained'],
              ['grounded theory', 'builds a theory from the data itself, collected and analysed step by step', 'interviews with former players, built up into an explanation of why girls leave sport'],
              ['phenomenology', 'describes how people experience something, in their own words', 'what it is like to return to sport after a serious injury'],
            ],
          },
          tone: 'pink',
        },
        'Qualitative designs are planned too: whom to talk to, how many, and how you will analyse what they say. The plan is simply more open to change.',
        'Lalit added a small qualitative part. After the twelve weeks, he would talk to eight girls from Section A about the skipping. The numbers would show whether it worked; their words might show why. His study became mixed methods.',
      ],
    },
    {
      id: 'how-to-choose-a-research-design',
      title: 'How to choose a research design, with an example',
      Art: ChooseScene,
      caption: 'five ticks on the clipboard, then one plain paragraph in Chapter 3',
      body: [
        'Start from your question, not from the design a senior used last year. Then work through these steps.',
        {
          steps: [
            { title: 'Read the verb in your question.', text: '"How many" and "what is the level of" point to a descriptive design. "Is X related to Y" points to a correlational one. "Does X change Y" points to an experimental or quasi-experimental design. "How do people experience X" points to a qualitative one.' },
            { title: 'Ask whether you can change anything.', text: 'You can give girls a skipping routine. You cannot give them a long bus ride. If the cause cannot be changed by you, or should not be, the design will be observational.' },
            { title: 'Ask whether you can randomise.', text: 'If you can put people into groups by chance, do it. If you cannot, use a quasi-experimental design with a pre-test, and say so openly.' },
            { title: 'Count your time.', text: 'A one-year dissertation rarely allows a long longitudinal study. A cross-sectional design or a short pre-test and post-test may fit better.' },
            { title: 'Check ethics and permissions.', text: 'Studies with people need consent, and often ethics committee approval. See our guide on [ethical considerations in research](/blogs/ethical-considerations-in-research/).' },
          ],
          tone: 'green',
        },
        'Then name the design in your methodology chapter, in plain words. Lalit\'s first draft read like this:',
        {
          quote: 'The study used a quasi-experimental, nonequivalent groups design with a pre-test and a post-test. Two existing sections of Class 7 at one government girls\' school in Gwalior formed the groups. One section did fifteen minutes of skipping at the start of each PE period for twelve weeks; the other kept its usual warm-up. Endurance and flexibility were measured in both sections in the week before and the week after.',
          by: 'Lalit\'s methodology, first draft',
          tone: 'green',
        },
        'Our guide on [how to write a research methodology](/blogs/how-to-write-a-research-methodology/) shows where this paragraph goes. Dr. Bhadoria read it and asked one last question: "What else changed between the two tests?" Lalit added a line about the cooler weather, which both sections had felt. Then she signed it.',
      ],
    },
  ],

  takeaways: [
    'A research design is the plan that links your question to your answer: who is compared with whom, when, and how often.',
    'Descriptive designs describe, correlational designs find relationships, and experimental and quasi-experimental designs test cause and effect.',
    'Random assignment makes a true experiment. Without it, existing groups make a quasi-experiment, so add a pre-test and say so.',
    'Cross-sectional studies measure once; longitudinal, cohort and case-control studies add time.',
    'Choose from your question, what you can change, whether you can randomise, and your time, then name the design plainly.',
  ],

  faq: [
    {
      q: 'What are the main types of research design?',
      a: 'Most guides list descriptive, correlational, experimental and quasi-experimental designs for quantitative research, and case study, ethnography, grounded theory and phenomenology for qualitative research. Labels vary between textbooks, so use the ones your department uses.',
    },
    {
      q: 'What is the difference between research design and research methodology?',
      a: 'Research design is the plan of the study: what is compared, with whom and when. Research methodology explains how the whole study was done and why, covering design, sampling, tools and analysis. The design is usually one part of the methodology chapter.',
    },
    {
      q: 'Is a survey a research design?',
      a: 'Many textbooks treat a survey as a way of collecting data, and some call it a design of its own. A survey done once is usually part of a cross-sectional descriptive or correlational design. The same questionnaire given before and after an intervention can be part of a quasi-experimental design.',
    },
    {
      q: 'Which research design is best for a master\'s dissertation?',
      a: 'There is no single best one. The best design answers your question within your time, money and access. Agree on it with your guide before you collect any data.',
    },
  ],

  cta: {
    title: 'See which designs studies on your topic used',
    text: 'Fiberarticle\'s Literature Reviewer finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export, so you can compare the designs that studies on your question used before you choose yours. One payment unlocks all of it, for good.',
  },
}
