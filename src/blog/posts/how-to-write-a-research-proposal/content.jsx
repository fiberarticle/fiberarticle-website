import Hero from './hero.jsx'
import {
  BudgetScene,
  FormatScene,
  LiteratureScene,
  MethodScene,
  MistakesScene,
  PurposeScene,
  QuestionScene,
  StructureScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a proposal is a plan: what you will study, why it matters, and how you will finish it',
  },

  intro: [
    'Pallavi Rawat grew up in a village in Tehri Garhwal, where the spring her grandmother drew water from now runs only in the monsoon. She finished her MA in Geography in Dehradun, cleared UGC NET with a fellowship, and decided to study those springs for her PhD. The admission notice from the university she wanted asked for one more thing before the interview: a research proposal.',
    'She wrote nine pages in a week and titled them "Water problems in the Himalaya". Most of it was a summary of thirty papers, one after another. There was no question, no method and no plan. She sent it to her old MA teacher, Dr. Bisht, who read it on his phone and called her that night. "This tells me you have read a lot," he said. "It does not tell me what you will do for the next three years."',
    'This blog explains how to write a research proposal the way Dr. Bisht helped Pallavi rewrite hers: what each part must do, the format universities ask for, and the mistakes that make a committee lose interest.',
  ],

  sections: [
    {
      id: 'what-is-a-research-proposal',
      title: 'What is a research proposal?',
      Art: PurposeScene,
      caption: 'a committee reads the proposal to judge three things: clear, worth doing, doable',
      body: [
        'A research proposal is a short document that describes a study you have not done yet. It says what you want to find out, why it is worth finding out, and how you will do it in the time and with the resources you have.',
        'The UGC\'s 2022 PhD regulations define it as a "brief write-up giving an outline of the proposed research work" that a scholar submits with the application for registration. The Research Advisory Committee then reviews it and finalises the topic. So the proposal is read by the people who decide whether you get in, and then by the people who will guide your work.',
        'You may need one at several points:',
        {
          list: [
            'for a master\'s dissertation, before your department lets you start;',
            'for PhD admission, often uploaded with the application and discussed at the interview;',
            'for PhD registration after coursework, where many Indian universities call it a **synopsis**;',
            'for a fellowship or a research grant, where it decides who gets the money.',
          ],
          style: 'dots',
        },
        'Grad Coach, a popular student guide, puts what the reader wants in three words. Your study must be **clear**, with a well defined question; **worth doing**, adding something the field lacks; and **doable**, within your time, budget and skills. Every part of the proposal exists to prove one of these.',
      ],
    },
    {
      id: 'research-proposal-format',
      title: 'Research proposal format: check your university\'s rules first',
      Art: FormatScene,
      caption: 'two universities, two different sets of rules, and the notice always wins',
      body: [
        'Before rewriting anything, Dr. Bisht asked Pallavi to read the admission notice\'s proposal guidelines line by line. There is no single format for India. Each university, and often each department, sets its own.',
        'Here is how much two real formats differ. The first is from the PhD admission notice of the University of Delhi\'s Department of Political Science, October 2025. The second is a PhD proposal form from another Indian institution.',
        {
          table: {
            head: ['rule', 'DU Political Science', 'the second format'],
            rows: [
              ['length', '4,000 to 7,000 words', 'not fixed, but every section is mandatory'],
              ['literature review', 'the bulk of the proposal, thematic, not a list of sources', 'a review, then a separate section on research gaps'],
              ['timeline and budget', 'not asked for', 'a time plan in months and a break-up of expenses'],
              ['other parts', 'tentative chapters and a bibliography', 'pilot work done and a signed similarity report'],
              ['typing', 'Times New Roman 12, 1.5 spacing', 'set by the form'],
            ],
          },
          tone: 'amber',
        },
        'Delhi University\'s notice also asks for three hard copies at the interview, and the second format wants a similarity report with an index under 15 percent, signed by the candidate and the guide. Details like these are easy to miss and hard to fix on the morning of the interview.',
        {
          note: 'keep the notice open while you write. If your university gives no format, use the structure below and ask your prospective guide what the committee expects.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'research-proposal-structure',
      title: 'How to write a research proposal: the structure, part by part',
      Art: StructureScene,
      caption: 'the usual parts, in the usual order',
      body: [
        'Names and order vary, but most formats ask for the same core parts. Pallavi wrote each part on a sticky note, with the question it has to answer.',
        {
          steps: [
            { title: 'Title.', text: 'What exactly will you study, and where? Specific, not catchy.' },
            { title: 'Introduction and background.', text: 'What is the problem, why does it matter, and why are you the right person to study it?' },
            { title: 'Literature review and research gap.', text: 'What is already known, and what is still missing?' },
            { title: 'Research questions, objectives and hypotheses.', text: 'What exactly will your study answer?' },
            { title: 'Methodology.', text: 'How will you collect and analyse the data, and why is that the right way?' },
            { title: 'Ethics.', text: 'Who could be affected by your work, and how will you protect them?' },
            { title: 'Timeline and budget.', text: 'When will each piece of work be done, and what will it cost?' },
            { title: 'Expected outcomes and chapters.', text: 'What will the finished study add, and how will the thesis be arranged?' },
            { title: 'References.', text: 'Every source, in your department\'s citation style.' },
          ],
          tone: 'green',
        },
        'If you know the [structure of a research paper](/blogs/structure-of-a-research-paper/), you will see the resemblance: a proposal is the first half of a paper, with a plan in place of results.',
      ],
    },
    {
      id: 'title-and-research-questions',
      title: 'Title, problem and research questions',
      Art: QuestionScene,
      caption: 'from a whole mountain range to three villages and one question',
      body: [
        '"Water problems in the Himalaya" was a subject, not a study. No one could finish it in three years. Dr. Bisht made Pallavi narrow it down, one step at a time, until it fitted on a single line.',
        {
          table: {
            head: ['step', 'Pallavi\'s topic'],
            rows: [
              ['too broad', 'water problems in the Himalaya'],
              ['a place', 'drying springs in Tehri Garhwal'],
              ['a group of people', 'how households in three villages cope as their springs dry up'],
              ['a question', 'How have households in three villages of Tehri Garhwal changed the way they collect and use water as their springs give less, and who does the extra work?'],
            ],
          },
          tone: 'blue',
        },
        'From that question she wrote three objectives she could check off: to map the springs and measure their flow before and after the monsoon; to record how each household collects and uses water; and to find out who fetches it and how long that takes.',
        'Her new title said what the study was: "Drying springs and household water use in three villages of Tehri Garhwal, Uttarakhand".',
        {
          note: 'if you find this step hard, read [how to write a research question](/blogs/how-to-write-a-research-question/) first. A proposal built on a vague question stays vague in every section after it.',
          label: 'tip',
          tone: 'red',
        },
      ],
    },
    {
      id: 'literature-review-in-a-proposal',
      title: 'The literature review in a research proposal',
      Art: LiteratureScene,
      caption: 'papers grouped by theme, with the gap marked where nothing fits',
      body: [
        'Pallavi\'s first draft summarised thirty papers one after another. Delhi University\'s guidelines warn against exactly this: "Please do not write a bibliographical essay." They ask for a thematic review that connects the works to your research question.',
        'A proposal\'s review has one job: to lead the reader to your gap. Pallavi sorted her papers into three themes: why Himalayan springs are declining, including a NITI Aayog working group report which warned that many were drying up or giving less water; spring revival work; and who carries water in hill households. Then she wrote the line that mattered: many studies measure springs and some study households, but she had found few that follow the same villages from the spring to the kitchen.',
        {
          compare: {
            left: {
              title: 'summary',
              tone: 'red',
              mark: 'cross',
              items: [
                'Author A studied springs in Sikkim.',
                'Author B studied water collection in Nepal.',
                'Author C reviewed spring revival projects.',
              ],
            },
            right: {
              title: 'synthesis',
              tone: 'green',
              mark: 'check',
              items: [
                'Studies agree that spring flow is falling in many hill regions.',
                'Fewer ask what this means for the people who fetch the water.',
                'This study links both, in the same three villages.',
              ],
            },
          },
        },
        'For the full method, see [how to write a literature review](/blogs/how-to-write-a-literature-review/) and [how to find a research gap](/blogs/how-to-find-a-research-gap/). In a proposal the review is shorter than in a thesis, but it must end on your gap.',
      ],
    },
    {
      id: 'methodology-in-a-research-proposal',
      title: 'How to write the methodology in a research proposal',
      Art: MethodScene,
      caption: 'measure the spring, visit the homes, and say why each method fits',
      body: [
        'Committees read this section most closely, because it shows whether the study is doable. Write it in the future tense: it is a plan, not a finished study.',
        {
          list: [
            '**Design.** Quantitative, qualitative or mixed, and why.',
            '**Study area and sample.** Where, who, how many, and how you will choose them.',
            '**Data collection.** The instruments: surveys, interviews, field measurements, records, experiments.',
            '**Analysis.** What you will do with the data, and with which tools.',
            '**Limits.** What the study will not cover.',
          ],
          style: 'check',
        },
        'Pallavi chose a mixed design: measure the springs before and after the monsoon, survey the households, and interview the women who fetch most of the water. Grad Coach calls the justification "the most important part" of this section, so for each method she added one sentence on why it suited her question. Flow measurements show how much water there is. Only the interviews show what a dry spring costs a family.',
        'If your study involves people, plan for ethics approval before you collect any data. Most Indian universities have an institutional ethics committee for this, and health research in India follows the ICMR\'s 2017 National Ethical Guidelines. Say in the proposal how you will take informed consent and keep people\'s answers private.',
        {
          note: 'only promise what you can get. Grad Coach warns against depending on a resource you are not yet sure you can access. Pallavi checked that she could borrow a GPS device and a flow meter before she wrote them in.',
          label: 'careful',
          tone: 'red',
        },
      ],
    },
    {
      id: 'research-proposal-timeline-and-budget',
      title: 'Research proposal timeline, budget and expected outcomes',
      Art: BudgetScene,
      caption: 'three years, laid out month by month, with the costs beside them',
      body: [
        'A timeline shows the committee you understand how long research takes. The second format in our table gives a sample time plan of 36 months for full-time candidates and 48 for part-time ones, with rows for coursework, the literature survey, each step of the method and the thesis. A chart with months across the top and tasks down the side is enough.',
        {
          table: {
            head: ['months', 'what Pallavi planned'],
            rows: [
              ['1 to 6', 'coursework, refine the question, ethics approval'],
              ['7 to 12', 'pilot survey in one village, finalise the questionnaire'],
              ['13 to 24', 'fieldwork across two monsoons, flow measurements, interviews'],
              ['25 to 30', 'analysis, a conference paper, a journal article'],
              ['31 to 36', 'write and submit the thesis'],
            ],
          },
          tone: 'green',
        },
        'Fieldwork cannot be rushed. Pallavi\'s springs had to be measured in the dry season and after the rains, so her plan covered two monsoons, not one.',
        'If the format asks for a budget, list the real costs: travel, equipment, software, printing, consumables. The same format asks for the source of funding, wants a study that needs no funding to say so with a reason, and says your fellowship is not a research expense. Pallavi listed bus fares, survey printing and a rented flow meter.',
        'End with expected outcomes: what the study will add and who could use it. Keep this modest; you are predicting, not reporting.',
      ],
    },
    {
      id: 'research-proposal-mistakes',
      title: 'Common research proposal mistakes, and a last check',
      Art: MistakesScene,
      caption: 'the first draft and the second, side by side',
      body: [
        'Committees see the same problems often. Pallavi\'s first draft had at least three of them.',
        {
          compare: {
            left: {
              title: 'avoid',
              tone: 'red',
              mark: 'cross',
              items: [
                'a topic so broad it could fill ten theses',
                'a literature review that only summarises',
                'methods with no reason given',
                'equipment or data you cannot be sure of',
                'ignoring the word limit or the format',
                'text copied from papers or old proposals',
              ],
            },
            right: {
              title: 'do instead',
              tone: 'green',
              mark: 'check',
              items: [
                'one clear question you can finish in time',
                'themes that lead to your gap',
                'a reason for every method',
                'resources you have already checked',
                'the notice open while you write',
                'your own words, with every source cited',
              ],
            },
          },
        },
        'The last one matters. Delhi University\'s guidelines warn that high similarity will invite a penalty, and that in case of doubt it is better to over-cite. See [how to avoid plagiarism](/blogs/how-to-avoid-plagiarism/) for writing from sources in your own words.',
        'To see what accepted proposals look like, open ShodhGangotri, the INFLIBNET repository of synopses and research proposals approved for PhD programmes in Indian universities. Read two or three from your subject for their shape, and ask your guide or a teacher to read yours before you submit.',
        'Pallavi\'s second draft was shorter than her first and took three times as long to write. At the interview, a committee member asked why she would study only three villages. The answer was already in her methodology. Two weeks later her name was on the admission list.',
      ],
    },
  ],

  takeaways: [
    'A research proposal is a plan for a study you have not done yet: what you will find out, why it matters and how you will do it.',
    'Every part of it must show that your study is clear, worth doing and doable.',
    'Read your university\'s notice before you write. Formats, word limits and required sections differ a lot.',
    'Narrow a broad subject down to one research question, and let the literature review lead to your gap.',
    'Give a reason for every method, a realistic timeline and only resources you are sure you can get.',
  ],

  faq: [
    {
      q: 'How long should a research proposal be?',
      a: 'As long as your university or funder says. There is no common standard in India. Delhi University\'s Political Science department, for example, asks for 4,000 to 7,000 words for its PhD proposals. Other departments set their own limits, and a master\'s dissertation may have its own form. If no length is given, ask your guide.',
    },
    {
      q: 'What is the difference between a synopsis and a research proposal?',
      a: 'In many Indian universities the two words mean the same document: a plan of the study submitted for PhD registration. Many universities also ask for a pre-thesis synopsis near the end of the PhD, a short summary of the finished work submitted a few months before the thesis itself. Your university\'s PhD ordinance tells you which one it means.',
    },
    {
      q: 'Where can I find research proposal examples from Indian universities?',
      a: 'ShodhGangotri, run by INFLIBNET, holds synopses and research proposals approved for PhD programmes in Indian universities. Use them to study the shape of a good proposal, never to copy from.',
    },
  ],

  cta: {
    title: 'Build the literature review your proposal needs',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together, lists research gaps across the papers you choose with every point tied to its source, and formats your references in more than 10,000 citation styles. One payment unlocks all of it, for good.',
  },
}
