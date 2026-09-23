import Hero from './hero.jsx'
import {
  BalloonScene,
  ChoiceScene,
  ForestScene,
  FunnelScene,
  RoutesScene,
  TourScene,
  UmbrellaScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'one question, many roads: picking the right kind of review',
  },

  intro: [
    'Kavya teaches at a nursing college in Mysuru. This year her principal asked her to write her first review article, on whether nurse-led education helps people with type 2 diabetes keep their blood sugar under control. "Make it a systematic review," the principal added. "Journals like those." Kavya nodded, went home, and realised she did not really know what made a review *systematic*.',
    'So on Saturday she went to the medical college library to meet her friend Anjali, the librarian there, who had helped with many reviews. Anjali listened and asked two questions. "What exactly do you want to find out? And how much time and help do you have?"',
    'Those two questions decide the answer, because there is not one kind of literature review but several, each built for a different job. Here is what Anjali explained, one type at a time.',
  ],

  sections: [
    {
      id: 'why-the-type-matters',
      title: 'Why the type of review matters',
      Art: RoutesScene,
      caption: 'three ways to reach the same answer: a winding walk, a train on rails, a plane overhead',
      body: [
        'Anjali started with an example. "To reach Bengaluru you can take a bus, a train or a flight," she said. "All three get you there. The right one depends on how fast you need to reach, how much you are carrying, and whether you want to see the places on the way." Reviews work the same way. They all study research that already exists, but they go about it very differently.',
        'The type you choose decides almost everything that follows: how you search, how many papers you read, whether you need a written plan before you start, whether you need a second person, how long the work takes and what a journal will expect. Changing the type halfway through is painful, because the early steps often have to be done again.',
        {
          note: 'choose the type from your question and your resources, not from what sounds most impressive. A careful narrative review is worth far more than a weak systematic one.',
          label: 'remember',
          tone: 'blue',
        },
        'If the idea of a literature review is itself new to you, start with [what a literature review really is](/blogs/what-is-a-literature-review/). The rest of this blog assumes you know the basic purpose and want to pick the right form.',
      ],
    },
    {
      id: 'narrative-review',
      title: 'The narrative review: a guided tour',
      Art: TourScene,
      caption: 'a guide who knows the town, showing you the places that matter',
      body: [
        'A narrative review is an overview of a topic written by someone who knows it well. The author picks the important studies, groups them into themes and explains how the field has developed: what is known, what people argue about and where things seem to be heading.',
        'It is the most common kind. Most thesis chapters that set up a research question are narrative reviews, and so are many invited reviews in journals. Kavya realised that the literature chapter of her own MSc dissertation had been one, without her ever calling it that.',
        {
          compare: {
            left: {
              title: 'good for',
              tone: 'green',
              mark: 'check',
              items: [
                'giving background and context',
                'explaining theories and debates',
                'broad or fast-changing topics',
                'readers who want the big picture',
              ],
            },
            right: {
              title: 'watch out for',
              tone: 'red',
              mark: 'cross',
              items: [
                'choosing only studies that agree with you',
                'no record of how papers were found',
                'claiming to cover everything',
                'being hard for others to repeat',
              ],
            },
          },
        },
        'None of this makes a narrative review bad. It means you should be honest about what it is: an informed guide, not a complete inventory. Saying briefly where and how you searched already makes one stronger, and many journals now ask for exactly that.',
      ],
    },
    {
      id: 'systematic-review',
      title: 'The systematic review: a train with a timetable',
      Art: FunnelScene,
      caption: 'many records go in at the top, and every one is accounted for on the way down',
      body: [
        'A systematic review answers a focused question using a method that is planned in advance and followed exactly, so that someone else could repeat it. In health research the question is often framed with PICO: the population, the intervention, the comparison and the outcome. Kavya\'s question fitted neatly: adults with type 2 diabetes, nurse-led education, usual care, and blood sugar control.',
        {
          steps: [
            {
              title: 'Write the protocol first.',
              text: 'The question, the search plan, the inclusion and exclusion criteria and the methods are fixed before the search begins. Health reviews are often registered in advance, for example on PROSPERO, so the plan cannot quietly change later.',
            },
            {
              title: 'Search widely.',
              text: 'Several databases, a documented search string, and usually the reference lists of key papers too, so nothing important slips past.',
            },
            {
              title: 'Screen in pairs.',
              text: 'Two reviewers usually check titles, abstracts and then full texts on their own, and settle any disagreement by discussion.',
            },
            {
              title: 'Appraise quality.',
              text: 'Each included study is checked for risk of bias with an established tool, because a review is only as strong as the studies in it.',
            },
            {
              title: 'Extract and combine.',
              text: 'The same details are pulled from every study into one table, a [literature review matrix](/blogs/literature-review-matrix/) of sorts, and then combined in words or with statistics.',
            },
            {
              title: 'Report openly.',
              text: 'Most journals expect the PRISMA 2020 statement, including a flow diagram that shows how many records were found, screened, excluded and finally included.',
            },
          ],
          tone: 'green',
        },
        {
          define: 'PRISMA 2020',
          hint: 'reporting guideline',
          meaning: 'A widely used guideline for reporting systematic reviews: a checklist of what to report, and a flow diagram that tracks every record from the search to the final set of included studies.',
          tone: 'green',
        },
        'All this care has a cost. A systematic review usually takes many months and needs at least two people. Kavya realised her principal had imagined something she could finish in the summer holidays, working alone.',
      ],
    },
    {
      id: 'meta-analysis',
      title: 'Meta-analysis: adding up the numbers',
      Art: ForestScene,
      caption: 'each square is one study; the diamond at the bottom is what they say together',
      body: [
        'A meta-analysis is not a separate kind of search. It is a statistical step, usually inside a systematic review, that combines the numerical results of several similar studies into one overall estimate. When many small trials each hint at an effect, pooling them can show it far more clearly than any single trial can.',
        'It only makes sense when the studies are alike: similar people, similar interventions, and outcomes measured in comparable ways. If they differ too much, one pooled number can mislead, and reviewers describe the findings in words instead, which is called a narrative synthesis.',
        {
          define: 'Forest plot',
          hint: 'chart',
          meaning: 'The usual picture of a meta-analysis. Each study sits on its own line as a square with a whisker showing its uncertainty, a vertical line marks "no effect", and a diamond at the bottom shows the pooled result.',
          tone: 'amber',
        },
        'Kavya\'s outcome had a fair chance. Diabetes studies often report blood sugar control using HbA1c, a blood test that reflects average glucose over roughly the previous two to three months, so trials can be compared on the same scale. Whether a meta-analysis was possible would depend on how many trials she found and how alike they turned out to be.',
      ],
    },
    {
      id: 'scoping-review',
      title: 'The scoping review: the view from above',
      Art: BalloonScene,
      caption: 'rising above the fields to see what has been planted, and where nothing grows yet',
      body: [
        'Sometimes you do not yet know enough to ask a sharp question. A scoping review maps a broad or new area: what has been studied, with which methods, in which places and people, and where nothing has been done at all.',
        'It uses a systematic and transparent search, like a systematic review, but its aim is to chart the field rather than to judge whether something works. So it usually does not appraise the quality of each study, and it rarely pools results. The most widely used approach grew out of a framework published by Arksey and O\'Malley in 2005, and scoping reviews are reported with PRISMA-ScR, the extension of PRISMA written for them. A scoping review is a good fit when:',
        {
          list: [
            'the topic is new, broad or scattered across several fields',
            'you want to know what kinds of evidence exist before planning a systematic review',
            'you need to map concepts, methods or gaps rather than measure an effect',
            'the studies are too varied to compare directly',
          ],
          style: 'dots',
        },
        'This is where Kavya stopped Anjali. She had no idea how many studies of nurse-led diabetes education existed in India, or what they measured. A scoping review would answer exactly that, and the empty patches on its map would point her to a real [research gap](/blogs/how-to-find-a-research-gap/).',
      ],
    },
    {
      id: 'other-types-of-review',
      title: 'Rapid, umbrella, integrative and critical reviews',
      Art: UmbrellaScene,
      caption: 'an umbrella review keeps several systematic reviews under one cover',
      body: [
        'A few more types come up often enough to know by name.',
        {
          table: {
            head: ['type', 'what it does', 'when it helps'],
            rows: [
              [
                'Rapid review',
                'Follows systematic methods but simplifies some steps, such as searching fewer databases or using one screener, and says so openly.',
                'When a decision cannot wait many months, as in health policy.',
              ],
              [
                'Umbrella review',
                'Reviews existing systematic reviews instead of individual studies.',
                'When several reviews already exist and you want the overall picture.',
              ],
              [
                'Integrative review',
                'Brings together different kinds of studies, experimental and not, and sometimes theory.',
                'When a question needs many kinds of evidence. It is especially common in nursing.',
              ],
              [
                'Critical review',
                'Goes beyond describing studies to evaluate them and argue for a position or a new model.',
                'When the aim is to challenge or develop thinking in a field.',
              ],
            ],
          },
          tone: 'amber',
        },
        'These names are used loosely, and the same label can mean slightly different things in different fields. In computing, for example, a *systematic literature review* often follows guidelines published by Kitchenham and colleagues. When in doubt, describe exactly what you did, and let the method speak louder than the label.',
      ],
    },
    {
      id: 'how-to-choose',
      title: 'How to choose the right one',
      Art: ChoiceScene,
      caption: 'weighing the time you have against the rigour your question needs',
      body: [
        'Anjali summed it up in a small table.',
        {
          table: {
            head: ['if you want to', 'choose'],
            rows: [
              ['set out the background for a thesis, or give an expert overview', 'a narrative review'],
              ['answer a focused question about what works, using all the evidence', 'a systematic review'],
              ['combine the numbers from similar studies', 'a meta-analysis, inside a systematic review'],
              ['map a broad or new field and find the gaps', 'a scoping review'],
              ['inform an urgent decision quickly', 'a rapid review'],
              ['compare what several systematic reviews found', 'an umbrella review'],
              ['bring together very different kinds of studies', 'an integrative review'],
            ],
          },
          tone: 'green',
        },
        'Then check your resources honestly. A systematic review needs time, access to databases and a second reviewer. A scoping review needs a careful search but less appraisal. A narrative review needs real knowledge of the field and a clear structure. Our guide to [writing a literature review](/blogs/how-to-write-a-literature-review/) walks through the steps all of them share.',
        'Tools can take some of the load, as long as you know what they are for. [Fiberarticle](https://app.fiberarticle.com)\'s Literature Reviewer suits narrative and mapping-style reviews: it searches arXiv, OpenAlex, Semantic Scholar and Crossref together, screens papers against your own inclusion and exclusion criteria, and builds an evidence matrix with themes, research gaps and future work that you can export as CSV. It also tells you, for every paper, whether it read the full text or only the abstract. That is a strong head start, but it does not replace a registered systematic review protocol with two human screeners.',
        'Kavya left the library with a plan. First, a scoping review of nurse-led diabetes education in India, with Anjali helping on the search. Then, if enough similar trials turned up, a full systematic review with a meta-analysis, with a colleague as her second screener. Her principal approved it on Monday, because it promised a publishable paper within the year and a stronger one after that.',
      ],
    },
  ],

  takeaways: [
    'Choose the type of review from your question, your time and your team, not from what sounds impressive.',
    'A narrative review is a flexible expert overview: readable and useful, but not built to be repeated.',
    'A systematic review follows a protocol set in advance, searches widely, screens in pairs and reports with PRISMA 2020.',
    'A meta-analysis combines the numbers from similar studies, usually inside a systematic review.',
    'A scoping review maps a broad or new field and shows where the gaps are.',
    'Rapid, umbrella, integrative and critical reviews each solve a more specific problem.',
  ],

  faq: [
    {
      q: 'Can I do a systematic review on my own?',
      a: 'Most guidelines expect at least two people to screen studies and extract data independently, because it reduces mistakes and bias. If you truly work alone, say so openly, choose a scoping or narrative review instead, or ask a colleague to double check at least a sample.',
    },
    {
      q: 'How long does a systematic review take?',
      a: 'Usually many months, and sometimes more than a year, depending on the question, the number of records and the size of the team. A rapid review trades some steps for speed and reports what it simplified.',
    },
    {
      q: 'Is a systematic literature review different from a systematic review?',
      a: 'Usually people mean the same thing. The longer name is common in computing and engineering, where such reviews often follow guidelines written for those fields. What matters is that the method is planned, documented and repeatable.',
    },
    {
      q: 'Which type suits a PhD thesis chapter?',
      a: 'Most thesis literature chapters are narrative or thematic reviews that lead up to your research question. Some universities encourage a scoping or systematic review as a publishable first paper. Ask your guide what your department expects.',
    },
  ],

  cta: {
    title: 'Start with a map of the literature',
    text: 'Fiberarticle\'s Literature Reviewer searches four scholarly indexes, screens papers against your own criteria, and builds an evidence matrix with themes and research gaps you can export. One payment unlocks all of it, for good.',
  },
}
