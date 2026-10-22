import Hero from './hero.jsx'
import {
  DefineScene,
  ExampleScene,
  MistakesScene,
  QualitativeScene,
  StepsScene,
  VariablesScene,
  VersusScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'six pages about a theory, and one diagram that finally shows what the study will measure',
  },

  intro: [
    'Esther Lalnunsiami is in the first year of her PhD in Commerce at a university in Aizawl. Her study asks a question she first noticed while buying vegetables: why do some women who run small shops in the market streets of Bara Bazar keep taking payments through UPI, while others try it for a few weeks and go back to cash?',
    'Her literature review was nearly done, and she had written six careful pages on the Technology Acceptance Model, the theory most of her papers used. At her research advisory committee meeting, one member turned the pages twice and asked, "Where is your conceptual framework? Which variables will you measure, and how do you expect them to connect?" Esther had the variables. They were scattered across thirty pages: trust, network signal, age, help from a son or daughter. There was no single place where they met.',
    'Her guide, Dr. Vanlalruata, told her to bring one diagram to their next meeting, with a reason for every arrow. This blog follows how she built it: what a conceptual framework in research is, how it differs from a theoretical framework, the variables it contains, the steps to make one, a worked example, how it works in qualitative research, where it goes in a thesis and the mistakes to avoid.',
  ],

  sections: [
    {
      id: 'what-is-a-conceptual-framework',
      title: 'What is a conceptual framework in research?',
      Art: DefineScene,
      caption: 'a map of the study: the things you will look at, and the arrows between them',
      body: [
        'A conceptual framework is a map of your own study. It names the main concepts or variables you will study and shows how you expect them to relate to each other. Editage puts it in one line: it is "the map of what variables you will study and how you expect the parts to connect."',
        {
          define: 'conceptual framework',
          hint: 'noun',
          meaning: 'A diagram or a written explanation, built by the researcher for one study, that sets out the key concepts or variables and the relationships expected between them.',
          tone: 'green',
        },
        'The idea is old. Miles and Huberman, in their 1994 book *Qualitative Data Analysis*, described a conceptual framework as something that explains, in a diagram or in words, the main things to be studied and the presumed relationships among them. Most frameworks today use both: a diagram of boxes and arrows, and a few paragraphs that explain it.',
        'You do not copy a conceptual framework from anywhere. You assemble it from three things: the theories in your field, the findings of earlier studies, and what you know about your own setting. That is why it usually grows out of your [literature review](/blogs/how-to-write-a-literature-review/), and why no two studies have quite the same one.',
      ],
    },
    {
      id: 'theoretical-framework-vs-conceptual-framework',
      title: 'Theoretical framework vs conceptual framework',
      Art: VersusScene,
      caption: 'the theory is the big map of the region; the conceptual framework is the route for this one trip',
      body: [
        'This is where many students get confused, because many papers use the two terms as if they meant the same thing. They do not. A theoretical framework rests on an established theory that others have already tested. Editage calls it "the foundation of theory you are basing your study on." A conceptual framework is built for your study alone, and it shows the particular variables you will measure.',
        {
          table: {
            head: ['', 'theoretical framework', 'conceptual framework'],
            rows: [
              ['comes from', 'an existing, tested theory', 'theory, earlier findings and your own setting'],
              ['scope', 'broad, used across many studies', 'narrow, made for one study'],
              ['usual form', 'written explanation', 'a diagram with a short explanation'],
              ['what it does', 'explains why things should happen', 'shows what you will measure and how it connects'],
              ['Esther\'s study', 'the Technology Acceptance Model', 'her diagram of eight boxes and their arrows'],
            ],
          },
          tone: 'green',
        },
        'The Technology Acceptance Model, from a 1989 paper by Fred Davis in *MIS Quarterly*, proposes that people accept a new technology mainly because of two beliefs: perceived usefulness and perceived ease of use. Davis defined perceived ease of use as "the degree to which a person believes that using a particular system would be free of effort." That theory says nothing about Aizawl, about vegetable shops or about mobile signal in a hill town. Esther\'s conceptual framework is where those details come in.',
        {
          quote: 'They are not alternatives. Most studies that investigate relationships between variables need both.',
          by: 'Editage, on the two frameworks',
          tone: 'green',
        },
      ],
    },
    {
      id: 'variables-in-a-conceptual-framework',
      title: 'The variables in a conceptual framework',
      Art: VariablesScene,
      caption: 'a cause, an effect, and the things that sit between them or press on the arrow',
      body: [
        'In a quantitative study, the boxes in a conceptual framework are usually variables, and each kind plays a different part. These are the ones you will meet most often:',
        {
          list: [
            '**Independent variable:** the presumed cause or predictor. For Esther, how useful and how easy a shopkeeper finds UPI.',
            '**Dependent variable:** the outcome you measure. For Esther, whether the shopkeeper is still taking UPI payments six months later.',
            '**Mediating variable:** a step on the path that explains how or why the cause leads to the effect. For Esther, the shopkeeper\'s intention to keep using UPI.',
            '**Moderating variable:** something that changes the strength or the direction of an effect without being caused by it. For Esther, the shopkeeper\'s age.',
            '**Control variable:** something you hold constant or measure so that it does not distort the result, such as the type of shop.',
          ],
          style: 'dots',
        },
        {
          note: 'mediators and moderators are easy to mix up. Editage offers a simple test: "a mediator is affected by the independent variable, a moderator is not." Finding UPI useful can change a shopkeeper\'s intention. It cannot change her age.',
          label: 'tip',
          tone: 'amber',
        },
        'Each variable also needs a way to be measured, such as a set of questionnaire items. A box labelled "engagement" or "awareness" with no clear measure is a common weakness. If your study tests predictions, each arrow usually becomes one [hypothesis](/blogs/how-to-write-a-hypothesis/).',
      ],
    },
    {
      id: 'how-to-make-a-conceptual-framework',
      title: 'How to make a conceptual framework, step by step',
      Art: StepsScene,
      caption: 'start from the question, add the boxes, then earn every arrow',
      body: [
        'Guides from Editage and the University of Southern California library suggest much the same order. Esther followed it over two weekends.',
        {
          steps: [
            { title: 'Write down your research question.', text: 'The question decides which variables matter. Esther\'s was: what makes women shopkeepers in Bara Bazar continue using UPI?' },
            { title: 'List the key concepts from your literature.', text: 'Go back through your notes and pull out every factor earlier studies linked to your outcome. Esther found usefulness, ease of use, trust and age again and again.' },
            { title: 'Choose your independent and dependent variables.', text: 'Put the cause on the left and the outcome on the right, and draw an arrow that starts at the independent variable and points to the dependent one.' },
            { title: 'Add mediators, moderators and controls.', text: 'Ask how the cause works, for whom the effect might be stronger, and what else could explain the outcome.' },
            { title: 'Justify every arrow.', text: 'Each arrow should trace back to a theory or a published finding. Editage warns that an arrow without one is "a guess wearing a box."' },
            { title: 'Write the narrative.', text: 'A few paragraphs that define each concept, cite the sources behind each arrow and state your assumptions.' },
          ],
          tone: 'green',
        },
        'A [literature review matrix](/blogs/literature-review-matrix/) makes step two much faster. Esther added a column called "variables measured" and filled it for every paper. Tools such as Fiberarticle\'s Extract can draft a table like this across many papers, with a short supporting quote for each cell, but she still checked every cell against the paper before drawing an arrow from it.',
        {
          note: 'one of her boxes, network signal, came from her own pilot visits rather than from a paper: two shopkeepers said they stopped using UPI because payments failed during the monsoon. Experience from your setting is a fair source, as long as you say so in the narrative.',
          label: 'remember',
          tone: 'green',
        },
      ],
    },
    {
      id: 'conceptual-framework-example',
      title: 'Conceptual framework example',
      Art: ExampleScene,
      caption: 'eight boxes, each arrow with a reason written beside it',
      body: [
        'This is the framework Esther took to her next meeting with Dr. Vanlalruata. The diagram sat on one page. The table below sets out the same thing in words.',
        {
          table: {
            head: ['box', 'type of variable', 'where it came from'],
            rows: [
              ['perceived usefulness', 'independent', 'Technology Acceptance Model'],
              ['perceived ease of use', 'independent', 'Technology Acceptance Model'],
              ['trust in UPI', 'independent', 'earlier studies of digital payments'],
              ['network signal', 'independent', 'her pilot visits in the market'],
              ['intention to continue', 'mediating', 'Technology Acceptance Model'],
              ['continued use after six months', 'dependent', 'her research question'],
              ['age of the shopkeeper', 'moderating', 'earlier studies of digital payments'],
              ['type of shop, years in business', 'control', 'her pilot visits in the market'],
            ],
          },
          tone: 'amber',
        },
        'Under the diagram she wrote a short narrative. Its opening paragraph read like this:',
        {
          quote: 'Drawing on the Technology Acceptance Model, this study proposes that perceived usefulness and perceived ease of use shape a shopkeeper\'s intention to continue using UPI, which in turn predicts continued use six months later. Two factors from the setting are added: trust in UPI, drawn from earlier studies of digital payments, and network signal, which emerged from pilot visits. The effect of ease of use is expected to be weaker for younger shopkeepers. Type of shop and years in business are treated as control variables.',
          by: 'from Esther\'s revised literature review chapter',
          tone: 'amber',
        },
        'Notice what the example does. Every box can be measured, every arrow has a named source, and a reader can see the whole study on one page before reading a single result.',
      ],
    },
    {
      id: 'conceptual-framework-in-qualitative-research',
      title: 'Conceptual framework in qualitative research',
      Art: QualitativeScene,
      caption: 'in interviews the map is drawn in pencil, and it changes as people talk',
      body: [
        'A conceptual framework is not only for surveys and experiments. In qualitative research it is looser. It names the ideas you expect to matter, and those ideas shape your interview guide and your first codes, but you do not test it with statistics.',
        'Editage describes the conceptual framework as "a working proposition that is expected to shift," especially in qualitative work. That is a strength, not a weakness. Esther also planned twelve interviews with shopkeepers who had stopped using UPI. Her first framework had no box for fear of being cheated. After four interviews it did, because three women spoke of fake payment screenshots shown by customers.',
        {
          list: [
            'Start with a rough map of the ideas you expect, drawn from your literature.',
            'Use it to plan your interview questions, not to limit them.',
            'Change it when the data shows something you did not expect, and keep each version.',
            'In your thesis, show the final framework and explain briefly how it changed.',
          ],
          style: 'check',
        },
        'For how this kind of study differs from a survey, see [qualitative vs quantitative research](/blogs/qualitative-vs-quantitative-research/).',
      ],
    },
    {
      id: 'where-it-goes-and-common-mistakes',
      title: 'Where the conceptual framework goes in a thesis, and mistakes to avoid',
      Art: MistakesScene,
      caption: 'the arrow with no source is rubbed out, and the framework is carried into every chapter after it',
      body: [
        'There is no single rule for where it goes. Editage notes that examiners usually look for the conceptual framework at the end of the literature review or at the start of the methodology chapter. Rules differ between universities and even between departments: some want a separate section with its own heading, others are happy with a diagram inside the review. Look at recent theses from your own department and ask your guide.',
        'These are the mistakes that committees and reviewers notice most:',
        {
          list: [
            'treating the conceptual framework and the theoretical framework as the same thing;',
            'drawing arrows with no theory or finding behind them;',
            'using boxes so vague that nobody could measure them;',
            'showing only the cause and the effect, with no mediators, moderators or controls where the study needs them;',
            'copying another study\'s diagram without adapting it to your setting;',
            'drawing the framework once and never using it again.',
          ],
          style: 'cross',
        },
        'That last one matters most. The USC writing guide warns, about theory, "Do not leave the theory hanging out there in the introduction never to be mentioned again." The same is true of a conceptual framework. Your methodology should measure each box, and your discussion should come back to each arrow and say whether the data supported it. If you are still at the proposal stage, [how to write a research proposal](/blogs/how-to-write-a-research-proposal/) shows where a first version of the framework fits.',
        'Esther\'s diagram now hangs above her desk. When the committee met again, the same member looked at it for a minute and asked only one question: why age was a moderator and not a control. Esther pointed to the two studies beside that arrow.',
      ],
    },
  ],

  takeaways: [
    'A conceptual framework is a map of your own study: the concepts or variables you will study and how you expect them to connect.',
    'A theoretical framework rests on an established theory; a conceptual framework is built for one study, and most studies need both.',
    'Name each variable as independent, dependent, mediating, moderating or control, and make sure each one can be measured.',
    'Every arrow needs a reason: a theory, a published finding or documented experience from your setting.',
    'In qualitative research the framework is looser and is expected to change as the data comes in.',
    'Use the framework through the whole thesis, from the methodology to the discussion.',
  ],

  faq: [
    {
      q: 'What is the difference between a conceptual framework and a theoretical framework?',
      a: 'A theoretical framework is built on an existing theory that has been tested by others, such as the Technology Acceptance Model. A conceptual framework is built by you for one study and shows the specific variables you will measure and how you expect them to relate.',
    },
    {
      q: 'Is a conceptual framework always a diagram?',
      a: 'No. It can be a diagram, a written explanation or both. Most theses use a diagram of boxes and arrows with a few paragraphs that define each concept and cite the sources behind each arrow.',
    },
    {
      q: 'Can I use a conceptual framework from another study?',
      a: 'You can build on one, as long as you cite it. But copying a diagram without changing it for your own question and setting is a common mistake. Explain what you kept, what you added and why.',
    },
    {
      q: 'Do I need a conceptual framework for a qualitative study?',
      a: 'Many qualitative studies use one, but it is looser and is expected to change as you collect data. Some approaches, such as grounded theory, aim to build theory from the data, so check what your field and your guide expect.',
    },
  ],

  cta: {
    title: 'See which variables your papers have already measured',
    text: 'Fiberarticle\'s Extract builds a table with your own columns across the papers you choose, with a short supporting quote from the paper for every cell, and exports it as CSV. One payment unlocks all of it, for good.',
  },
}
