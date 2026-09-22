import Hero from './hero.jsx'
import { BinScene, FinerScene, HypothesisScene, StairsScene, StallScene, TentScene, TrayScene } from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a sea of possible questions, and the one worth reeling in',
  },

  intro: [
    'Deepak was in the final year of his MBA at a college in Delhi when his dissertation proposal fell due. The topic came easily. His uncle runs a small grocery shop in East Delhi that still takes only cash, while the paan stall next door has a UPI QR code taped to its counter. Deepak wanted to study UPI, the Unified Payments Interface run by the National Payments Corporation of India, among small shopkeepers.',
    'His guide, Professor Mehta, read the proposal and asked one thing: "So what is your research question?" Deepak had a topic, but not a question. This blog follows how he turned one into the other: what a research question does, the steps from topic to question, the tests a good question passes, the main types, two frameworks that do half the work, the usual mistakes, and how questions differ from hypotheses.',
  ],

  sections: [
    {
      id: 'one-question-holds-the-project',
      title: 'One question holds up the whole project',
      Art: TentScene,
      caption: 'the question is the tent pole: pull it out and everything else sags',
      body: [
        'A research question is the question your study is designed to answer. Everything else in the project hangs from it, like the canvas of a tent from its centre pole. The papers you read, the method you choose, the data you collect and the chapters you write are all there to answer that one question.',
        {
          define: 'Research question',
          hint: 'noun',
          meaning: 'A clear, focused question that a study sets out to answer, using evidence that can be collected and analysed.',
        },
        'Deepak\'s first attempt was "What is the impact of UPI on India?" Professor Mehta replied with three questions of his own: impact on what, on whom, and measured how? A question that broad cannot tell you what to read, whom to ask or when you have finished. It needs national data and a team of researchers. A dissertation needs a question one student can answer in a few months.',
        'A good question decides three things for you: what you read, what data you collect and when you are done. Most dissertations have one main question and two to four sub-questions that break it into smaller steps.',
      ],
    },
    {
      id: 'from-topic-to-question',
      title: 'From topic to question, one step at a time',
      Art: StairsScene,
      caption: 'from a broad topic to one clear question, one step at a time',
      body: [
        'Few people write a good research question in one go. It is reached in steps, and each step makes the question smaller and sharper. This is how Deepak got there.',
        {
          steps: [
            {
              title: 'Name the topic in a few words.',
              text: '"UPI and small shopkeepers" is a topic, not yet a question. If you do not have a topic yet, start with [how to choose a research topic](/blogs/how-to-choose-a-research-topic/).',
            },
            {
              title: 'Write down what puzzles you.',
              text: 'In ten minutes Deepak listed twelve questions: why his uncle refused UPI, whether shopkeepers trust it, whether it changes how they keep accounts, whether customers push them into it. Do not judge them yet.',
            },
            {
              title: 'Read what is already known.',
              text: 'Check which of your questions have been studied and which have not. Deepak found many studies of people paying with UPI and fewer of the shopkeepers receiving the money. How to spot this is covered in [how to find a research gap](/blogs/how-to-find-a-research-gap/).',
            },
            {
              title: 'Narrow it with who, where and when.',
              text: 'Not "shopkeepers" but "owners of small grocery shops"; not "India" but "two markets in East Delhi"; not "ever" but "in the past year".',
            },
            {
              title: 'Write it as one open question.',
              text: 'Start with what, how or why, and include the key terms: "What factors influence whether owners of small grocery shops in East Delhi accept UPI payments?"',
            },
            {
              title: 'Test it and show it to your guide.',
              text: 'Run it through the checks in the next section before you plan anything else.',
            },
          ],
          tone: 'blue',
        },
        'Most people rush the fifth step. Write three or four versions of the same question and compare them side by side. The clearest one is usually the plainest.',
        'For a head start, [Fiberarticle](https://app.fiberarticle.com) plans three to five research questions from a topic and searches arXiv, OpenAlex, Semantic Scholar and Crossref in parallel for papers on it. Treat those questions as drafts to test and rewrite, not as your final question.',
      ],
    },
    {
      id: 'five-tests-of-a-good-question',
      title: 'Five tests of a good question',
      Art: FinerScene,
      caption: 'five checks every question should pass before you build a study on it',
      body: [
        'A common checklist for research questions is FINER, from *Designing Clinical Research*, a textbook by Stephen Hulley and colleagues. It was written for medicine but works in any field. A good question is feasible, interesting, novel, ethical and relevant.',
        {
          table: {
            head: ['Test', 'Ask yourself', 'Deepak\'s answer'],
            rows: [
              ['Feasible', 'Can I answer it with the time, money, data and skills I have?', 'He could visit about a hundred shops in two markets in two months. All of Delhi was out of reach.'],
              ['Interesting', 'Do I, my guide and my readers care about the answer?', 'He had watched his uncle refuse UPI for years and wanted to know why.'],
              ['Novel', 'Does it add something new: a new place, group, method or angle?', 'His reading had found far fewer studies of shopkeepers than of customers.'],
              ['Ethical', 'Can I answer it without harming or exposing anyone?', 'Questions about sales could worry owners about tax, so he asked for ranges and kept every shop anonymous.'],
              ['Relevant', 'Will the answer matter to someone beyond me?', 'Banks, payment apps and traders\' associations all want to know what holds small shops back.'],
            ],
          },
          tone: 'green',
        },
        'A question that fails one test can usually be fixed. If it is not feasible, narrow the place or the group. If it is not novel, change the setting or the method. If it raises ethical problems, change what you ask or how you ask it, and check your university\'s ethics rules before you collect any data.',
        {
          note: 'read the question aloud to a friend outside your field. If they cannot tell what you would measure or whom you would ask, it is not specific enough yet.',
          label: 'tip',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'types-of-research-questions',
      title: 'The main types of research question',
      Art: StallScene,
      caption: 'one shop counter, many questions: how many pay by UPI, who does, and why',
      body: [
        'Research questions come in a few main types, and the type decides the method. One topic can produce every type. Here they are with Deepak\'s examples.',
        {
          table: {
            head: ['Type', 'What it asks', 'Deepak\'s example'],
            rows: [
              ['Descriptive', 'What is happening, how much or how often?', 'What share of small shops in the two markets accept UPI?'],
              ['Comparative', 'How do two or more groups differ?', 'Do grocery shops and vegetable sellers differ in how often they accept UPI?'],
              ['Relationship', 'Are two things connected?', 'Is an owner\'s age related to whether the shop accepts UPI?'],
              ['Causal', 'Does one thing change another?', 'Does a one-hour training session increase UPI use in the following month?'],
              ['Exploratory', 'How or why does something happen, in people\'s own words?', 'How do owners decide whether to accept UPI?'],
            ],
          },
          tone: 'amber',
        },
        'Each type points to a method. Descriptive and comparative questions usually need a survey or records. Relationship questions need data on both things from the same shops, analysed with correlation or regression. Causal questions need an experiment or a careful before and after design. Exploratory questions need interviews or observation.',
        {
          note: 'a relationship is not a cause. If older owners accept UPI less often, age may not be the reason. Older owners might also run smaller shops or serve fewer young customers.',
          label: 'remember',
          tone: 'amber',
        },
        'Deepak\'s main question mixes two types, which is common in business research: a survey to describe and compare the shops, then interviews with a few owners to understand their reasons.',
      ],
    },
    {
      id: 'frameworks-pico-and-spider',
      title: 'Frameworks that build the question for you',
      Art: TrayScene,
      caption: 'fill each slot and the question almost writes itself',
      body: [
        'Some fields use frameworks: fixed slots, one for each part of a question. Fill every slot and the question almost writes itself. The two best known are PICO and SPIDER.',
        {
          define: 'PICO',
          hint: 'framework',
          meaning: 'Population, Intervention, Comparison, Outcome. Developed in the 1990s for clinical questions in evidence-based medicine, and now used widely in health research.',
        },
        'A health example: in adults with type 2 diabetes (population), does a daily 30-minute walk (intervention), compared with no exercise plan (comparison), lower blood sugar after three months (outcome)? Deepak borrowed the same slots for his causal question: among small shop owners in East Delhi, does a one-hour training session on UPI, compared with no session, change the share of payments received through UPI over the next month?',
        {
          define: 'SPIDER',
          hint: 'framework',
          meaning: 'Sample, Phenomenon of Interest, Design, Evaluation, Research type. Proposed in 2012 for qualitative and mixed-methods research, where there is often nothing to compare.',
        },
        'Deepak used SPIDER to plan his interviews:',
        {
          list: [
            '**Sample:** shop owners who tried UPI and then went back to cash.',
            '**Phenomenon of interest:** their reasons for going back.',
            '**Design:** in-depth interviews.',
            '**Evaluation:** their experiences, worries and views.',
            '**Research type:** qualitative.',
          ],
          style: 'dots',
        },
        'Other frameworks, such as PEO (population, exposure, outcome) and SPICE, work the same way. The filled slots also give you ready-made search terms, which makes your literature search far more precise.',
      ],
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes, and how to fix them',
      Art: BinScene,
      caption: 'the vague drafts go in the bin, and the sharper one stays on the board',
      body: [
        'Deepak\'s notebook from that month holds seven crossed-out drafts. Most first drafts fail in the same few ways.',
        {
          compare: {
            left: {
              title: 'Weak',
              items: [
                '"What is the impact of UPI on India?" Far too broad.',
                '"Do shopkeepers like UPI?" Only a yes or no answer.',
                '"When was UPI launched?" A fact you can look up.',
                '"Why are shopkeepers afraid of technology?" Assumes the answer.',
                '"Is UPI successful among small businesses?" Vague words.',
              ],
            },
            right: {
              title: 'Stronger',
              items: [
                '"How has accepting UPI changed daily cash handling in small grocery shops in East Delhi?"',
                '"What makes shop owners in the two markets prefer UPI or cash?"',
                'Not a research question at all. One search answers it.',
                '"What concerns, if any, do shop owners have about accepting UPI?"',
                '"Has the share of sales received through UPI changed in the past year for these shops?"',
              ],
            },
          },
        },
        'Two more mistakes are harder to spot. The first is asking several questions at once. "How and why do shop owners and customers use UPI and cash?" is really four questions: split it and keep the one that matters most. The second is a question your method cannot answer. A survey of a hundred shops cannot tell you in depth why each owner decided as they did, and interviews with ten owners cannot tell you what share of all shops accept UPI.',
        'Professor Mehta had a simple test: "If I gave you the data tomorrow, would you know exactly what to do with it?" If the answer is no, the question needs another draft.',
      ],
    },
    {
      id: 'questions-and-hypotheses',
      title: 'Research questions and hypotheses',
      Art: HypothesisScene,
      caption: 'a question asks, a hypothesis predicts, and the data decide whether the prediction holds',
      body: [
        'A research question asks. A hypothesis predicts: it is a testable statement of the answer you expect, written before you collect the data.',
        {
          table: {
            head: ['Feature', 'Research question', 'Hypothesis'],
            rows: [
              ['Form', 'A question', 'A statement'],
              ['Used in', 'All kinds of research', 'Mostly quantitative studies that test a prediction'],
              ['Outcome', 'Answered', 'Supported or not supported by the data'],
              ['Deepak\'s example', 'Is an owner\'s age related to whether the shop accepts UPI?', 'Owners under 40 are more likely to accept UPI than owners over 40.'],
            ],
          },
          tone: 'blue',
        },
        'Quantitative studies often state a hypothesis in two forms. The **null hypothesis** says there is no difference or relationship: UPI acceptance is the same for owners under and over 40. The **alternative hypothesis** says there is one. A statistical test then shows whether the data give enough reason to reject the null hypothesis.',
        'Exploratory and qualitative studies usually have questions but no hypotheses, because they aim to understand something before predicting it. Deepak\'s interviews had no hypothesis at all.',
        'In a thesis or paper, the question usually appears at the end of the introduction. The methods section is built to answer it, and the conclusion answers it directly. [The structure of a research paper](/blogs/structure-of-a-research-paper/) shows how the parts fit together.',
        'Deepak\'s final main question read: "What factors influence whether owners of small grocery shops in two East Delhi markets accept UPI payments?" Professor Mehta asked how he would measure each factor, listened to the answer and approved the proposal that afternoon. The first shop Deepak visited for his pilot survey was his uncle\'s.',
      ],
    },
  ],

  takeaways: [
    'A research question is the one question your whole study is built to answer.',
    'Move from topic to question in steps: list what puzzles you, read, narrow by who, where and when, then write it.',
    'Test the question with FINER: feasible, interesting, novel, ethical and relevant.',
    'The type of question, from descriptive to exploratory, decides your method.',
    'PICO and SPIDER turn a vague idea into slots you can fill and search.',
    'A hypothesis predicts the answer to a question, and many qualitative studies need none.',
  ],

  faq: [
    {
      q: 'How many research questions should a dissertation have?',
      a: 'Usually one main question and two to four sub-questions. Many more than that often means the project is too big for the time you have. Check your department\'s guidelines, as some expect a set format.',
    },
    {
      q: 'Should a research question have a yes or no answer?',
      a: 'Usually not, because a yes or no answer is thin. Start with what, how or why instead. If you are testing a prediction, a question such as "Does training increase UPI use?" is fine, as long as you also ask by how much.',
    },
    {
      q: 'Can I change my research question later?',
      a: 'Yes. Many researchers refine the question after the first round of reading or a pilot study. Change it early, note why, and agree the change with your guide, since the method and data may need to change with it.',
    },
    {
      q: 'What is the difference between a research question and a research objective?',
      a: 'A question states what you want to find out. An objective states what you will do to find it out, such as "to survey 100 shop owners in two markets". Many proposals list both, with one objective for each sub-question.',
    },
  ],

  cta: {
    title: 'Start from a topic, leave with research questions',
    text: 'Give Fiberarticle a topic and it plans three to five research questions, then searches arXiv, OpenAlex, Semantic Scholar and Crossref for related papers. It is free to use yourself.',
  },
}
