import Hero from './hero.jsx'
import { BridgeScene, BurrowScene, MapScene, NightScene, PaperScene, ScaleScene, SorterScene } from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a shelf full of research, and one empty slot where your study belongs',
  },

  intro: [
    'Fatima had just started her PhD in Environmental Science at a university in Lucknow when her guide, Professor Rizvi, gave her the instruction every new scholar dreads: "Read, and find the gap." That week she downloaded sixty papers on air pollution and read them late into the night. She found no gap at all. Everything seemed to have been studied already.',
    'The problem was not effort but method. A research gap is not found by reading more. It is found by reading in a particular way, and then checking what you think you found. This blog walks through that method, using Fatima\'s first semester as the example.',
  ],

  sections: [
    {
      id: 'what-a-research-gap-is',
      title: 'What a research gap actually is',
      Art: BridgeScene,
      caption: 'the literature is a bridge built plank by plank, and a gap is the plank still missing',
      body: [
        'A research gap is a question that matters and that existing research has not answered well yet. It is not simply something nobody has done. Plenty of things have never been studied because they are not worth studying.',
        {
          define: 'Research gap',
          hint: 'noun',
          meaning: 'A specific, worthwhile question that published research has not answered, or has answered only with weak, conflicting or narrow evidence.',
        },
        'Think of the research on a subject as a bridge that many people have built together, one plank at a time. A gap is a missing plank: a place where people need to cross and cannot. Your study is the plank you add.',
        'Fatima\'s sixty papers covered air pollution in general, which is like viewing a whole city of bridges from a plane. Gaps show up only when you walk one bridge slowly, which is why a narrow area of reading matters. Hers became the exposure of daily commuters to polluted air. If your area is still broad, start with [narrowing your topic](/blogs/how-to-choose-a-research-topic/).',
      ],
    },
    {
      id: 'kinds-of-gaps',
      title: 'The kinds of gaps you can find',
      Art: SorterScene,
      caption: 'every gap has its own shape, and each shape is found in a different place',
      body: [
        'Gaps come in a few recognisable kinds. Knowing them helps, because each kind shows up in a different part of the papers you read.',
        {
          table: {
            head: ['Kind of gap', 'What it looks like', 'For example'],
            rows: [
              ['Evidence gap', 'Studies disagree, or the evidence is thin', 'Two studies disagree on how much a mask lowers a driver\'s exposure'],
              ['Knowledge gap', 'The question has not been studied at all', 'No measurements inside shared autos in a particular city'],
              ['Method gap', 'The question was studied with weak or dated methods', 'Exposure estimated from fixed city monitors instead of personal sensors'],
              ['Population or context gap', 'Findings exist, but not for this group or place', 'Results from large metros that were never tested in smaller cities'],
              ['Theory gap', 'Results exist but nothing explains them', 'No model of why some routes are far more polluted than others'],
              ['Practical gap', 'Knowledge exists but is not used', 'Health advice for drivers that ignores what studies found'],
            ],
          },
          tone: 'green',
        },
        'Most student projects fill a population or context gap, or a method gap. These are honest and useful contributions. A finding from Delhi may not hold in Lucknow, and a better measurement can change what a whole field believes.',
        'Not every gap deserves a project. Before you choose one, ask three questions: would the answer change what someone knows or does, is it genuinely unanswered, and can you answer it with the time and resources you have? A gap that passes all three is worth your effort.',
      ],
    },
    {
      id: 'read-limitations-first',
      title: 'Read the limitations and future work sections first',
      Art: PaperScene,
      caption: 'authors often point to their own gaps, near the end of the paper',
      body: [
        'Authors are often the best guides to the gaps in their own work. Near the end of most papers there is a paragraph on limitations and another on future work, where they say what the study could not do and what should be tried next.',
        'Fatima changed how she read. For each paper she went straight to those sections, copied every limitation into a spreadsheet next to the paper\'s name, and only then read the rest. This kind of table is called a [literature review matrix](/blogs/literature-review-matrix/). Within two weeks it showed a pattern: most studies measured exposure in the largest metros, and several authors wrote that smaller cities and informal transport, such as shared autos and e-rickshaws, needed study.',
        'Limitations are not always labelled. Look for these as well:',
        {
          list: [
            'A small sample, or a single city, hospital or school.',
            'A short study period, or a single season.',
            'Data from one kind of device, language or group of people.',
            'Methods the authors themselves describe as a weakness.',
            'Questions listed as future work.',
          ],
          style: 'check',
        },
        'This is the job [Fiberarticle](https://app.fiberarticle.com)\'s Literature Reviewer was built for. For every paper it reads, it records the limitations, unresolved problems, assumptions, missing evaluations and opportunities in an evidence matrix, then reads the whole matrix together to list research gaps and future work. You can export the matrix as a CSV file and check each entry against its paper.',
      ],
    },
    {
      id: 'follow-the-disagreements',
      title: 'Follow the disagreements',
      Art: ScaleScene,
      caption: 'when good studies disagree, the reason is usually a question nobody has asked',
      body: [
        'When two careful studies reach different answers, there is almost always a question hiding between them. Why do they differ? Different people, places, methods or seasons can each change a result.',
        'Fatima found two studies of drivers\' exposure whose numbers did not agree. One had measured in winter and the other during the monsoon, and neither had followed the same drivers through the year. That gave her a question: how does one driver\'s exposure change from season to season?',
        'To spot disagreements, add columns to your reading table for the place, the season or period, the sample and the method of each study. When two results differ, those columns usually show why within a minute.',
        {
          quote: 'Two studies that disagree are not a problem to hide. They are a question someone forgot to ask.',
          by: 'Professor Rizvi, to Fatima',
          tone: 'green',
        },
        {
          note: 'a disagreement is worth a project only if it matters. Check that the difference is large enough to change a decision someone would actually make.',
          label: 'remember',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'use-reviews-as-maps',
      title: 'Use review papers as maps',
      Art: MapScene,
      caption: 'a recent review is the nearest thing to a map of where the gaps are',
      body: [
        'Review articles collect dozens of studies and summarise what is known, and most of them end with a section on what is still unknown. A recent review is the closest thing to a map of the gaps in a field. The different kinds of review are explained in [types of literature review](/blogs/types-of-literature-review/).',
        {
          steps: [
            { title: 'Find two or three recent reviews.', text: 'Search your topic with the words "review" or "systematic review" and prefer those from the last five years.' },
            { title: 'Read the conclusion and future research sections first.', text: 'Write down every open question the reviewers list.' },
            { title: 'Check what came after.', text: 'A gap named in an older review may since have been filled. Search for newer studies on each open question.' },
            { title: 'Follow the citations both ways.', text: 'The papers a review cites, and the newer papers that cite the review, show where the conversation went next.' },
          ],
          tone: 'amber',
        },
        'Systematic reviews often also rate how strong the evidence is. A conclusion described as resting on few, small or low-quality studies is itself a pointer to a gap.',
        'A review told Fatima that most exposure studies in India had focused on a few very large cities. It could not tell her whether that was still true, which is what the next step is for.',
      ],
    },
    {
      id: 'check-the-gap-is-real',
      title: 'Check that the gap is real',
      Art: BurrowScene,
      caption: 'before you move into a gap, shine a light in to make sure nobody lives there',
      body: [
        'Many gaps turn out to be gaps in what you have read, not in what exists. Before you build a project on one, test it.',
        {
          list: [
            'Search again with different words: synonyms, older terms and the words used in other countries.',
            'Look at the last two years, including preprint servers such as arXiv or medRxiv, where new work appears first.',
            'Search theses as well. In India, Shodhganga holds a large collection of PhD theses, many never published in journals.',
            'Ask who would care about the answer, and why.',
            'Ask whether you can fill it with the time, data and skills you have.',
            'Show it to your guide and to one other researcher in the field.',
          ],
          style: 'check',
        },
        'Fatima\'s second search turned up one small study of e-rickshaw drivers in another city. It was useful rather than fatal: the drivers had been followed for a few days in a single season. Her gap was still there, only sharper. Nobody had followed drivers in a city like Lucknow across a full year.',
      ],
    },
    {
      id: 'write-the-gap-in-one-sentence',
      title: 'Write the gap in one sentence',
      Art: NightScene,
      caption: 'one clear sentence at the end of the day, and then a proper night\'s sleep',
      body: [
        'If you cannot state a gap in one sentence, it is not yet clear enough to study. A simple template helps:',
        {
          note: '"Although **what is known**, little is known about **the missing piece** in **the setting**, which matters because **why it matters**."',
          label: 'template',
          tone: 'amber',
        },
        'Fatima\'s sentence read: "Although commuters\' exposure to air pollution has been measured in large Indian metros, little is known about how the exposure of e-rickshaw drivers in smaller cities such as Lucknow changes across seasons, which matters because these drivers spend most of the day on the road with no protection."',
        {
          list: [
            '**Specific:** it names the group, the place and what is missing.',
            '**Supported:** every claim in it can be backed by papers you have read.',
            '**Significant:** it says why the answer matters and to whom.',
            '**Feasible:** it describes something you could actually study.',
          ],
          style: 'check',
        },
        'Professor Rizvi read it twice and nodded. "Now you can plan a study," she said, "and I can sleep too." The sentence became the last paragraph of Fatima\'s literature review and the first line of her research proposal. Turning it into one precise question is the next step, covered in [how to write a good research question](/blogs/how-to-write-a-research-question/).',
      ],
    },
  ],

  takeaways: [
    'A research gap is a worthwhile question that existing research has not answered well yet.',
    'Gaps come in kinds: evidence, knowledge, method, population or context, theory and practice.',
    'Read the limitations and future work sections first, and record what they say.',
    'Disagreements between careful studies often hide a question nobody has asked.',
    'Recent reviews map a field, but check what has been published since.',
    'Test the gap with a second search, then write it in one clear sentence.',
  ],

  faq: [
    {
      q: 'How many papers should I read to find a gap?',
      a: 'There is no fixed number. Many students find a clear gap after reading thirty to fifty closely related papers carefully, especially recent studies and reviews. Reading fewer papers closely usually works better than skimming hundreds.',
    },
    {
      q: 'Is repeating a study in a new place a real gap?',
      a: 'Often, yes. Testing whether a finding holds for a different population or setting is a recognised contribution, as long as you explain why that setting could change the result.',
    },
    {
      q: 'What if someone publishes on my gap while I am working on it?',
      a: 'It happens. Cite their work, compare your results with theirs and explain what your study adds, such as a different season, place or method. Two studies on the same question also make the evidence stronger.',
    },
    {
      q: 'Where should the gap appear in my thesis?',
      a: 'Usually at the end of the literature review, where you show what is missing, and again where you state your research questions, where you explain how your study fills it. Many abstracts also mention it in a single sentence.',
    },
    {
      q: 'Can AI tools find research gaps for me?',
      a: 'They can speed up the reading by listing limitations and open questions across many papers. You still need to check each gap against the papers yourself and decide which one is worth a year of your time.',
    },
  ],

  cta: {
    title: 'See the gaps across many papers at once',
    text: 'Fiberarticle\'s Literature Reviewer reads each paper for its limitations and open problems, then lists research gaps and future work across all of them, with every point tied to its source. One payment unlocks all of it, for good.',
  },
}
