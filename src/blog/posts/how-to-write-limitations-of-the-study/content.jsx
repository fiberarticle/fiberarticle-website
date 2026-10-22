import Hero from './hero.jsx'
import {
  BoundaryScene,
  ChoiceScene,
  ExampleScene,
  FourPartScene,
  MistakesScene,
  PlaceScene,
  TypesScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the limitations are the fence around your findings: they show how far your answer reaches',
  },

  intro: [
    'Hemlata Meghwal is in the final year of her MVSc in Veterinary Public Health at a veterinary college in Bikaner. For her dissertation she interviewed 120 dairy farmers in six villages around the city about one habit: when a cow is treated with antibiotics for mastitis, an infection of the udder, does the farmer wait for the withdrawal period to end before selling her milk? If the milk is sold too soon, traces of the medicine can reach the families who drink it.',
    'Her results chapter was careful. The limitations section was two lines long: "Due to time constraints and limited resources, the sample size was small and the results may not be generalised. Further research is needed." Her guide, Dr. Purohit, circled both lines. "This could be pasted into any thesis in the library," he said. "What exactly could your study not see, and what does that mean for your numbers?"',
    'This blog explains how to write limitations of the study the way Hemlata rewrote hers: what limitations are, how they differ from delimitations, where they go, a four part method for writing each one, an example, and the mistakes examiners notice first.',
  ],

  sections: [
    {
      id: 'what-are-limitations-of-a-study',
      title: 'What are the limitations of a study?',
      Art: BoundaryScene,
      caption: 'inside the line, what the study can say; outside it, what it cannot',
      body: [
        'The limitations of a study are the weaknesses in its design, data or analysis that affect how far its findings can be trusted or applied. AJE, an author editing service, describes them as "the practical or theoretical shortcomings of a study that are often outside of the researcher\'s control". Time, money, access to people, the tools you could use and the design you could afford all set limits.',
        'Students often write this section as a confession, kept short so nobody notices. It works the other way. AJE puts it plainly: "limitations boost a study\'s credibility". A limitation you name yourself shows that you understand your own method. One the examiner has to point out looks like something you missed.',
        {
          define: 'limitation',
          hint: 'noun',
          meaning: 'A constraint on your study that you could not avoid, which narrows what your findings can show or how widely they apply.',
          tone: 'blue',
        },
        'Journals take this seriously too. Reporting guidelines, the checklists many journals ask authors to follow, include an item for it. The STROBE checklist for observational studies, for example, asks authors to "discuss limitations of the study, taking into account sources of potential bias or imprecision".',
      ],
    },
    {
      id: 'limitations-vs-delimitations',
      title: 'Limitations vs delimitations, and what is not a limitation',
      Art: ChoiceScene,
      caption: 'a delimitation is a line you drew; a limitation is a wall you met',
      body: [
        'Two words get mixed up in many Indian theses, often under one heading called "scope and limitations of the study". A common way to separate them: limitations are what you could not do, and delimitations are what you chose not to do.',
        {
          compare: {
            left: {
              title: 'delimitations',
              tone: 'amber',
              mark: 'dots',
              items: [
                'boundaries you set on purpose',
                'decided while planning the study',
                'Hemlata chose cows, not buffaloes, and six villages near Bikaner',
                'usually explained in the introduction or methods',
              ],
            },
            right: {
              title: 'limitations',
              tone: 'blue',
              mark: 'dots',
              items: [
                'constraints you could not avoid',
                'often noticed during or after the study',
                'Hemlata could not afford lab tests of the milk',
                'usually discussed near the end of the discussion',
              ],
            },
          },
        },
        'Editage gives a quick test for the difference: if unlimited time and money would have changed the decision, it is a limitation. Hemlata would have tested milk samples for antibiotic residues if she had the money. That makes it a limitation. Choosing cows and not buffaloes was a decision about her question, not a constraint. That is a delimitation.',
        'A delimitation can still cost you something. Hemlata chose villages near the city, which was a delimitation, but what that choice means for her findings belongs among the limitations.',
        'Your scope belongs at the start. Bikaner Technical University\'s PhD thesis guidelines, for example, ask the introduction chapter to set out the aim, sub-objectives and scope of the work. Check what your own university\'s format asks for, and where.',
        {
          note: 'a mistake is not a limitation. If you entered data wrongly or used the wrong test, fix it and run the analysis again before you submit. Editage and other guides warn against dressing up errors as limitations.',
          label: 'careful',
          tone: 'red',
        },
      ],
    },
    {
      id: 'types-of-limitations-in-research',
      title: 'Types of limitations in research, with examples',
      Art: TypesScene,
      caption: 'five boxes most limitations fall into',
      body: [
        'Guides sort limitations in different ways. AJE uses five types: theoretical, methodological, empirical, analytical and ethical. For a student writing a thesis, it is easier to think about where in the study the limit came from.',
        {
          table: {
            head: ['where it comes from', 'what it looks like', 'from Hemlata\'s study'],
            rows: [
              ['the sample', 'too few people, or people chosen for convenience rather than at random', 'six villages within easy reach of the college'],
              ['the design', 'a design that cannot show cause, or cannot show change over time', 'one survey at one point in time'],
              ['the measurement', 'self-reported answers, a tool not tested in your setting, missing data', 'farmers reported their own practice'],
              ['the setting', 'one place, one season or one group, so results may not travel', 'one district, one winter'],
              ['time, money and access', 'tests you could not run, people you could not reach', 'no lab test for antibiotic residues in milk'],
            ],
          },
          tone: 'amber',
        },
        '"Small sample size" on its own tells the reader little. Say why it matters: is it too small to detect a difference you cared about, or too narrow to represent the people you want to talk about? Our guide to [sampling methods in research](/blogs/sampling-methods-in-research/) explains how the way you chose people shapes what you can claim about them.',
      ],
    },
    {
      id: 'where-do-limitations-go',
      title: 'Where do limitations go, and how many should you write?',
      Art: PlaceScene,
      caption: 'in most papers, near the end of the discussion, before the conclusion',
      body: [
        'In most journal articles, limitations sit inside the discussion section. AJE notes they are placed "either at the beginning of the discussion section" or at its end, and that "it varies depending upon the target journal or publication guidelines". Editage adds that many fields put them just before the concluding paragraph, while engineering and computer science papers often have a separate "Limitations and future work" section.',
        'In a thesis, the usual places are a subsection of the discussion chapter or a section of the final chapter. Some formats ask for scope and limitations in Chapter 1 as well. Whatever your format, do not hide a limitation in the middle of the results. AJE advises keeping the section "prominently positioned and clearly introduced".',
        {
          table: {
            head: ['what you are writing', 'Editage\'s suggestion'],
            rows: [
              ['journal article', '3 to 5 limitations in 150 to 350 words'],
              ['brief report or short communication', '50 to 100 words'],
              ['doctoral thesis', '5 to 8 limitations in 500 to 1,500 words'],
            ],
          },
          tone: 'blue',
        },
        'Treat these numbers as a rough guide, not a rule. Fewer than three can suggest you have not looked hard. Many more can bury the important ones. If you are writing the discussion around them, our blog on [how to write discussion in research paper](/blogs/how-to-write-discussion-in-research-paper/) shows how limitations fit with the other parts.',
      ],
    },
    {
      id: 'how-to-write-limitations-of-the-study',
      title: 'How to write limitations of the study: a four part method',
      Art: FourPartScene,
      caption: 'name it, say what it does, say what you did, point to the next study',
      body: [
        'Two researchers at the University of Michigan Medical School, Ross and Bibler Zaidi, wrote a short paper on this in *Perspectives on Medical Education* in 2019, called "Limited by our limitations". Their complaint was simple: "Too often, authors use generic descriptions to describe study limitations." They also noticed that "too often, authors only list the potential limitations" without explaining them. Editage gives a similar four step pattern. Put together, each limitation gets four parts:',
        {
          steps: [
            { title: 'Name it.', text: 'State the limitation plainly, and say where it came from: the sample, the design, the measurement, the setting or the resources.' },
            { title: 'Say what it does to your findings.', text: 'Which way might it push your results, and roughly how much? Which claim can you no longer make because of it?' },
            { title: 'Say what you did about it.', text: 'Describe any step you took to reduce it, or why you still chose this approach over the alternatives.' },
            { title: 'Point to the next study.', text: 'Name the specific design, measure or sample that would remove this limit. This is where your future scope comes from.' },
          ],
          tone: 'green',
        },
        'Parts two and four are the ones students skip, and they are the ones examiners read most closely. A limitation without its consequence is just a complaint. A limitation with its consequence is a careful boundary around your claim.',
        'Open the section with a neutral line, such as "Several limitations should be kept in mind when reading these findings." Avoid "unfortunately", "sadly" or "we regret". You are describing your study, not apologising for it.',
        {
          note: 'write the limitations with your methods chapter open beside you. Most limitations come straight from choices described there, and the two chapters must agree. Our guide on [how to write a research methodology](/blogs/how-to-write-a-research-methodology/) covers that chapter.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'limitations-of-the-study-example',
      title: 'Limitations of the study example: before and after',
      Art: ExampleScene,
      caption: 'two lines that said nothing, and one paragraph that says something',
      body: [
        'Hemlata started again with her methods chapter open. She found three real limitations: the answers were self-reported, she had no lab test of the milk, and all six villages were close to the city. Here is how her first draft compared with the rewrite.',
        {
          table: {
            head: ['first draft', 'rewrite'],
            rows: [
              ['Due to time constraints the sample size was small.', 'Six villages within 30 km of Bikaner were chosen for access, so farmers further from milk collection centres, whose practice may differ, were not included.'],
              ['The results may not be generalised.', 'The findings describe cattle-owning farmers in these six villages in one winter, and should not be read as the practice of the whole district.'],
              ['Further research is needed.', 'A survey paired with residue testing of milk samples, across villages near and far from the city, would show how far reported practice matches actual practice.'],
            ],
          },
          tone: 'green',
        },
        'Her full paragraph on the first limitation used all four parts:',
        {
          quote: 'First, withdrawal practice was self-reported. Farmers were interviewed by a veterinary student, and some may have given the answer they felt was expected, so the share who said they always wait the full withdrawal period (86 of 120, or 72 percent) is more likely an overestimate than an underestimate. To reduce this, questions were asked in Rajasthani by a local livestock assistant, and farmers were told their names would not be recorded with their answers. Testing milk samples for antibiotic residues alongside the survey would show how closely reported practice matches what reaches the milk can.',
          by: 'from Hemlata\'s rewritten limitations section',
          tone: 'green',
        },
        'The paragraph names the limit, says which way it pushes her main number, explains what she did to reduce it, and turns the gap into a specific next study. Her finding still stands as a careful description of what farmers say they do.',
      ],
    },
    {
      id: 'mistakes-to-avoid',
      title: 'Common mistakes when writing limitations',
      Art: MistakesScene,
      caption: 'a long apology on one side, three clear limits on the other',
      body: [
        'These are the mistakes Hemlata\'s first draft made, and the ones that Editage, AJE and Ross and Bibler Zaidi warn about most:',
        {
          list: [
            '**Generic lines.** "Small sample size" and "limited time" with no detail could belong to any thesis.',
            '**Listing without explaining.** A list of weaknesses with no word on what each one does to the findings.',
            '**Too many.** Fifteen small worries bury the two that matter.',
            '**Apologising.** "Unfortunately, this study suffers from many problems" makes the reader doubt everything.',
            '**Errors called limitations.** A wrong formula or a coding slip should be fixed, not confessed.',
            '**New results.** A fresh analysis slipped into the limitations looks like an attempt to rescue the study. Put it in the results.',
            '**A different story elsewhere.** An abstract or conclusion that claims more than the limitations allow.',
            '**"Further research is needed."** Name the study that is needed.',
          ],
          style: 'cross',
        },
        'Examiners often ask about limitations at the viva, so this section is also your preparation. If you can explain each one calmly in writing, you can explain it out loud. Our list of [PhD viva questions](/blogs/phd-viva-questions/) includes the ones examiners ask about the weak points of a study.',
        'Hemlata\'s new section was about 300 words, three limitations in three short paragraphs. At her viva, the external examiner asked how she knew the farmers were telling the truth. She said she did not know for certain, explained which way the answers were likely to lean and why, and described the residue study that could check them. The examiner nodded and moved on to the next question.',
      ],
    },
  ],

  takeaways: [
    'Limitations are constraints you could not avoid; delimitations are boundaries you chose. Mistakes are neither, so fix them.',
    'Name each limitation plainly, then say what it does to your findings, what you did about it and what study would remove it.',
    'Choose the three to five limitations that matter most for a paper; skip trivial worries and generic lines.',
    'In most papers, limitations go in the discussion, usually near the end; in a thesis, follow your university\'s format.',
    'Write without apology, and keep the abstract, discussion and conclusion making the same size of claim.',
  ],

  faq: [
    {
      q: 'How many limitations should a study have?',
      a: 'There is no fixed number. Editage suggests three to five for a journal article and five to eight for a thesis. What matters more is that each limitation is real, specific and explained. Two well explained limitations beat ten one line ones.',
    },
    {
      q: 'Is a small sample size a limitation?',
      a: 'It can be, but writing "the sample size was small" is not enough. Say how many people you studied, how they were chosen, and what that means: that the study could miss a small difference, or that the results may not hold for a wider group.',
    },
    {
      q: 'Should I mention limitations in the abstract?',
      a: 'Some journals ask for one short clause about the main limitation in the abstract, and many do not. Check the author guidelines of your journal or the format of your university.',
    },
    {
      q: 'What is the difference between limitations and future scope?',
      a: 'Limitations say what your study could not show. Future scope, or recommendations for further research, says what the next study should do. They are closely linked: each good limitation points to a specific piece of future work, so many theses place the two together.',
    },
  ],

  cta: {
    title: 'See how other studies wrote their limits',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and shows the passage behind every point it writes, so you can see what limitations studies on your topic reported before you write your own. One payment unlocks all of it, for good.',
  },
}
