import Hero from './hero.jsx'
import {
  ChooseScene,
  DefineScene,
  ExampleScene,
  MistakesScene,
  TheoriesScene,
  VersusScene,
  WhyScene,
  WriteScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'six theories crowded onto one page, and the one the whole study will stand on',
  },

  intro: [
    'Shruti Malviya is in the second year of her MEd at a university in Ajmer. During her own BEd year she noticed something odd. Nearly everyone in her class signed up for a course on SWAYAM, the government\'s online learning platform, and most of them stopped watching the videos within a month. Her dissertation asks why some student teachers finish these courses and others drop out.',
    'Her review of literature was going well, so she added a section called "Theoretical framework". It ran to nine pages and described six theories one after another, from constructivism to the Technology Acceptance Model. Her guide, Dr. Anupama Sengar, asked two questions. "Which of these six is yours? And when I read your questionnaire, where do I see it?" Shruti could not answer either.',
    'This blog follows the month Shruti spent rewriting those nine pages: what a theoretical framework in research is, how to choose a theory, how to write the section step by step, and an example.',
  ],

  sections: [
    {
      id: 'what-is-a-theoretical-framework',
      title: 'What is a theoretical framework in research?',
      Art: DefineScene,
      caption: 'the same scattered data, sorted into a pattern once it is seen through one theory',
      body: [
        'A theory is an explanation that other researchers have already tested. It says why something happens and which factors matter. A theoretical framework is how you put such a theory to work in your own study. The research guide of the University of Southern California (USC) libraries calls it "the structure that can hold or support a theory of a research study."',
        {
          define: 'theoretical framework',
          hint: 'noun',
          meaning: 'The established theory, or theories, that a study is built on, with its key concepts defined and an explanation of how it shapes the research questions, the method and the reading of the results.',
          tone: 'blue',
        },
        'Think of it as a lens. A unit on writing the framework, on the Open University\'s OpenLearn Create site, gives an example: a question about why staff resist a new computer system reads one way through the Technology Acceptance Model and another way through the theory of planned behaviour. The framework tells your reader, before any data appears, which lens you chose and why.',
        {
          note: 'it is not a list of every theory you read about, but the one or two your study actually uses.',
          label: 'remember',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'why-you-need-a-theoretical-framework',
      title: 'Why your research needs a theoretical framework',
      Art: WhyScene,
      caption: 'the blueprint comes first, and every floor of the study is built on it',
      body: [
        'In a 2014 paper in the *Administrative Issues Journal*, Cynthia Grant and Azadeh Osanloo compared the theoretical framework to the blueprint of a house. The blueprint is not drawn after the walls are up; it decides where the walls go. In the same way, the theory should shape your questions, method and analysis, not be added at the end.',
        'The USC guide lists what a good framework does for a study:',
        {
          list: [
            '**It makes your assumptions visible,** so readers can judge them.',
            '**It links your study to what is already known.**',
            '**It limits the scope** to the few things that matter.',
            '**It gives you a way to read your results,** even unexpected ones.',
          ],
          style: 'dots',
        },
        'Shruti could see the problem. Her questionnaire had been written before her framework, so it asked about internet speed and video length, and almost nothing her six theories would predict. Her framework had been decoration.',
      ],
    },
    {
      id: 'theoretical-framework-vs-conceptual-framework',
      title: 'Theoretical framework vs conceptual framework',
      Art: VersusScene,
      caption: 'the tested theory on one side, and the map of one study drawn from it on the other',
      body: [
        'Students often use these two terms as if they meant the same thing. The OpenLearn unit notes that Grant and Osanloo found them "frequently and incorrectly used as synonyms." The difference is simple once you see it side by side.',
        {
          table: {
            head: ['', 'theoretical framework', 'conceptual framework'],
            rows: [
              ['what it is', 'an established, named theory that others have tested', 'your own map of the variables in one study'],
              ['usual form', 'a written explanation', 'a diagram with a short explanation'],
              ['the question it answers', 'why should these things be related?', 'what exactly will I measure, and how do the parts connect?'],
              ['Shruti\'s study', 'self-determination theory', 'her diagram linking three needs to finishing the course'],
            ],
          },
          tone: 'blue',
        },
        'Most studies need both, and the theory usually comes first. For a guide to drawing the second, see [conceptual framework in research](/blogs/conceptual-framework-in-research/).',
      ],
    },
    {
      id: 'examples-of-theories-in-research',
      title: 'Examples of theories used in research',
      Art: TheoriesScene,
      caption: 'a shelf of tested theories, and one taken down for a closer look',
      body: [
        'Every field has a handful of theories that turn up again and again. Treat these as starting points for reading, not as recommendations for your topic.',
        {
          table: {
            head: ['field', 'theory', 'what it tries to explain'],
            rows: [
              ['education', 'constructivism (Piaget, Vygotsky)', 'how learners build knowledge through activity and interaction'],
              ['education, psychology', 'self-determination theory (Deci and Ryan)', 'what keeps people motivated from within'],
              ['education, psychology', 'social cognitive theory (Bandura)', 'how people learn by watching others, and the role of belief in their own ability'],
              ['public health, nursing', 'Health Belief Model', 'why people do or do not take a health action, such as a screening test'],
              ['management, commerce', 'theory of planned behaviour (Ajzen)', 'how attitudes, social pressure and a sense of control shape what people intend to do'],
              ['information systems', 'Technology Acceptance Model (Davis)', 'why people accept or reject a new technology'],
              ['agriculture, communication', 'diffusion of innovations (Rogers)', 'how new ideas and products spread through a group of people'],
            ],
          },
          tone: 'amber',
        },
        'Know where your theory came from. The Health Belief Model, for example, was developed in the 1950s at the US Public Health Service, when few people came forward for tuberculosis screening even when mobile X-ray vans visited. What a theory was built to explain tells you where it fits and what it may miss.',
        {
          note: 'read how recent journal articles in your area use a theory, not only how a textbook summarises it. The OpenLearn unit counts relying on textbooks rather than journal articles among the common mistakes.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'how-to-choose-a-theory',
      title: 'How to choose the right theory for your study',
      Art: ChooseScene,
      caption: 'two strong theories on the scale, weighed against one research problem',
      body: [
        'Shruti had read about six theories and could not bear to leave any out, because choosing felt like throwing away work. Dr. Sengar gave her three tasks instead.',
        {
          steps: [
            {
              title: 'Start from your research problem.',
              text: 'The USC guide treats it as the anchor of the whole study. Shruti\'s question, why people keep going with a course nobody forces them to finish, is about motivation, not technology.',
            },
            {
              title: 'Read three or four recent papers on your exact topic.',
              text: 'The OpenLearn unit suggests noting which framework each one uses; departing from your field\'s usual choice needs a reason. Shruti found that several recent studies of why learners finish or abandon online courses used self-determination theory.',
            },
            {
              title: 'Weigh each theory against its rivals.',
              text: 'The USC guide suggests judging a theory by its "appropriateness, ease of application, and explanatory power." Ask of each one: does it explain my problem, can I measure its concepts, and does it tell me something the others do not?',
            },
          ],
          tone: 'blue',
        },
        'Shruti put her two strongest candidates side by side. The Technology Acceptance Model explains why people start using a system. But her classmates had found SWAYAM easy enough to join; what they lost was the will to continue. Self-determination theory, set out by Edward Deci and Richard Ryan in their 1985 book *Intrinsic Motivation and Self-Determination in Human Behavior*, is about exactly that. It holds that people stay motivated from within when three basic needs are met: autonomy, competence and relatedness. She chose it, and kept two short paragraphs on why she had not chosen the other.',
        {
          note: 'two theories are sometimes justified, when each one explains a different part of your problem. If you cannot say what the second one adds, leave it out.',
          label: 'tip',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'how-to-write-a-theoretical-framework',
      title: 'How to write a theoretical framework, step by step',
      Art: WriteScene,
      caption: 'one theory, written up in six short moves',
      body: [
        'Once the theory is chosen, the section has a fairly standard shape. This order brings together the USC and OpenLearn advice.',
        {
          steps: [
            { title: 'Name the theory and where it comes from.', text: 'Who proposed it, when, and what it was built to explain. Cite the original work.' },
            { title: 'Define its key concepts.', text: 'Pick the three or four terms that carry the weight of your study and define each from the literature. Where authors define a term differently, say which definition you adopt and why.' },
            { title: 'Explain how the concepts relate.', text: 'What does the theory predict? Which factor is expected to lead to which outcome?' },
            { title: 'Justify your choice.', text: 'Say why this theory fits your problem better than the obvious alternatives. The OpenLearn unit suggests that two or three paragraphs of comparison are usually enough.' },
            { title: 'Show how it shapes your study.', text: 'Link each concept to a research question, a hypothesis or a part of your research tool, and say how the theory will guide your analysis.' },
            { title: 'State its limits.', text: 'Every theory leaves something out. The USC guide asks you to say which parts of your problem the theory cannot explain.' },
          ],
          tone: 'green',
        },
        'Two small rules from the USC guide help. Use the present tense for the theory, since you are applying it now. And do not treat it as settled truth: "Don\'t just take what the theory says as a given!"',
        'If your study tests predictions, this is the section each [hypothesis](/blogs/how-to-write-a-hypothesis/) should grow out of. Every prediction should trace back to something the theory says.',
      ],
    },
    {
      id: 'theoretical-framework-example',
      title: 'Theoretical framework example',
      Art: ExampleScene,
      caption: 'each need from the theory becomes one section of the questionnaire',
      body: [
        'Here is how Shruti\'s rewritten framework connected the theory to her study. This table sits in her chapter, and each row became a section of her questionnaire.',
        {
          table: {
            head: ['concept from the theory', 'what it means for a SWAYAM learner', 'how she measures it'],
            rows: [
              ['autonomy', 'feeling that taking the course was their own choice, not a college order', 'questionnaire section A'],
              ['competence', 'feeling able to keep up with the videos, quizzes and assignments', 'questionnaire section B'],
              ['relatedness', 'feeling connected to other learners or a teacher during the course', 'questionnaire section C'],
              ['outcome', 'finished the course or stopped before the end', 'one question, checked against the certificate where there is one'],
            ],
          },
          tone: 'green',
        },
        'And here is the opening of the section itself:',
        {
          quote: 'This study draws on self-determination theory (Deci and Ryan, 1985), which proposes that people stay motivated from within when three basic psychological needs are met: autonomy, competence and relatedness. Leaving a course that nobody requires one to finish is, at heart, a question of sustained motivation. The Technology Acceptance Model was considered, but it explains why people begin to use a system rather than why they continue. Each need is measured in a separate section of the questionnaire. The theory does not account for practical barriers such as the cost of mobile data, which are recorded as control variables.',
          by: 'from Shruti\'s revised second chapter',
          tone: 'green',
        },
        'Those few sentences name the theory and its source, give a reason for the choice, set aside a rival openly, link the theory to the method and admit a limit. Her old nine pages did none of these things.',
      ],
    },
    {
      id: 'where-it-goes-and-mistakes',
      title: 'Where it goes in a thesis, and mistakes to avoid',
      Art: MistakesScene,
      caption: 'the theory runs like a thread from the second chapter to the last one',
      body: [
        'There is no single rule for where it goes. The OpenLearn unit says that in a master\'s dissertation the framework usually sits within chapter two, alongside the review of literature. The USC guide places it in the introduction of a research paper, after the research problem. Rules differ between universities and departments, so look at recent theses from your own department and ask your guide.',
        'In qualitative research the role is softer. A theory can guide what you ask and suggest first codes, but you do not test it with statistics, and your use of it may change as the interviews come in. See [qualitative vs quantitative research](/blogs/qualitative-vs-quantitative-research/) for how the two kinds of study differ.',
        'These are the mistakes examiners notice most often. The first five are on the OpenLearn unit\'s list:',
        {
          list: [
            'using "theoretical framework" and "conceptual framework" as if they meant the same thing;',
            'writing a summary of other people\'s work instead of a framework;',
            'naming a theory without defending the choice;',
            'not linking the framework back to your own study;',
            'relying on textbooks instead of journal articles;',
            'describing many theories and using none of them.',
          ],
          style: 'cross',
        },
        'The fix for most of them is to keep using the theory: your methodology measures its concepts, and your [discussion](/blogs/how-to-write-discussion-in-research-paper/) says whether your results support, extend or challenge it.',
        'Shruti\'s framework is now four pages instead of nine. When Dr. Sengar read it, she opened the questionnaire, found section A and nodded. "Now I can see the theory," she said. "Keep it with you until the last chapter."',
      ],
    },
  ],

  takeaways: [
    'A theoretical framework is the established theory your study stands on, with its key concepts defined and its use in your study explained.',
    'A theoretical framework rests on a tested theory; a conceptual framework is your own map of variables, usually built from it.',
    'Choose a theory by starting from your research problem, reading recent papers on your topic and weighing the theory against its rivals.',
    'Write it in order: name the theory, define its concepts, explain how they relate, justify the choice, link it to your study and state its limits.',
    'Carry the theory through the whole thesis, from the questionnaire to the discussion.',
  ],

  faq: [
    {
      q: 'What is a theoretical framework in simple words?',
      a: 'It is the existing theory your research is built on. It names the tested explanation you are using, defines its key ideas and shows how it shapes your questions, method and analysis.',
    },
    {
      q: 'What is the difference between a theory and a theoretical framework?',
      a: 'A theory is a general explanation that many researchers have tested, such as self-determination theory. A theoretical framework is your use of that theory in one study: the concepts you take from it, how you define them and how they guide your research.',
    },
    {
      q: 'Can I use more than one theory in my theoretical framework?',
      a: 'Yes, if each theory explains a different part of your problem and you can say what each one adds. Describing several theories without using them is a common weakness.',
    },
    {
      q: 'Does every research study need a theoretical framework?',
      a: 'Most theses are expected to have one, especially quantitative studies. Some qualitative approaches, such as grounded theory, aim to build theory from the data instead, so ask your guide what your department expects.',
    },
  ],

  cta: {
    title: 'See which theories your field already uses',
    text: 'Fiberarticle finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export, so you can see which theories recent studies on your topic used before you choose your own. One payment unlocks all of it, for good.',
  },
}
