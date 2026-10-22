import Hero from './hero.jsx'
import {
  BoundaryScene,
  ExampleScene,
  LengthScene,
  PurposeScene,
  StepsScene,
  ThesisScene,
  ThreeJobsScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'many readers jump from the title to the end; the conclusion has to be worth the jump',
  },

  intro: [
    'Ketan Parmar is in the final year of his MTech in Dairy Technology at a college in Anand, in Gujarat. For his dissertation he made paneer in the college dairy plant, packed half of each batch in ordinary polythene pouches and half in vacuum packs, and stored them all in a refrigerator. Every few days he measured the acidity, counted the bacteria and asked a small tasting panel to score the flavour and texture.',
    'In his trials, the vacuum-packed paneer stayed acceptable to the panel for about three weeks, while the paneer in pouches was rejected in less than one. He was turning the dissertation into his first journal paper and wrote the conclusion last, in twenty minutes. It began with "In conclusion", repeated most of his abstract, added a claim about the cost of a vacuum packing machine that appeared nowhere else in the paper, called vacuum packing "the best method for all dairy products" and ended with "further research is needed".',
    'His guide, Dr. Hetal Desai, read it during the lunch break. "Many people will read your title and then jump straight to this paragraph," she said. "If it is the only thing they read, what will they take away, and can they trust it?"',
    'This blog explains how to write a conclusion for a research paper the way Ketan rewrote his: what a conclusion is for, how it differs from the abstract and the discussion, five steps to write it, what to leave out, how long it should be, a before and after example, and how the conclusion chapter of a thesis is different.',
  ],

  sections: [
    {
      id: 'what-is-a-conclusion',
      title: 'What is the conclusion of a research paper?',
      Art: PurposeScene,
      caption: 'the last page is where a busy reader decides what your study said',
      body: [
        'The conclusion is the closing section of a research paper. It tells the reader the answer your study reached, why that answer matters and where it leaves the subject. Editage Insights describes it as the part that gives busy readers "the bottom line" of the research.',
        {
          define: 'conclusion',
          hint: 'noun',
          meaning: 'The closing section of a research paper: the answer the study reached, what it adds and what should come next, with no new data.',
          tone: 'blue',
        },
        'Not every journal asks for a separate conclusion. PLOS ONE, for example, lists "Conclusions" as an optional section and also accepts a mixed discussion and conclusions section, usually headed "Discussion". Many other journals want a short section of its own. Read your target journal\'s guide for authors, and look at how a few recent papers in it end. For where the conclusion sits among the other parts of a paper, see [the structure of a research paper](/blogs/structure-of-a-research-paper/).',
        {
          note: 'the conclusion is not a second abstract. Editage puts the difference this way: the abstract helps a reader decide whether to read the paper, while the conclusion gives the bottom line to someone who has read it, or who will trust it without reading the rest.',
          label: 'remember',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'conclusion-vs-discussion-vs-abstract',
      title: 'Conclusion vs discussion vs abstract',
      Art: ThreeJobsScene,
      caption: 'three sections, three different readers, three different jobs',
      body: [
        'Students often write the same paragraph three times: as the abstract, at the start of the discussion and as the conclusion. Each section has a different job.',
        {
          table: {
            head: ['', 'abstract', 'discussion', 'conclusion'],
            rows: [
              ['who it is for', 'someone deciding whether to read', 'someone reading the whole paper', 'someone who wants the bottom line'],
              ['what it holds', 'aim, method, key results, main message', 'what each finding means, other studies, limitations', 'the answer, why it matters, what comes next'],
              ['numbers', 'the key results', 'as many as the argument needs', 'one or two at most, often none'],
              ['citations', 'usually none', 'many', 'usually none'],
              ['length', 'a set word limit, often 250 to 300 words', 'several paragraphs or pages', 'often a single paragraph'],
            ],
          },
          tone: 'amber',
        },
        'Editage separates the last two clearly. The discussion is "a detailed interpretation of the data reported in the Results section", while the conclusion is "a snapshot of your study implications".',
        'This means a weak discussion cannot be rescued by a strong conclusion. Get the interpretation right first; our guide on [how to write discussion in research paper](/blogs/how-to-write-discussion-in-research-paper/) shows how. And if your abstract and conclusion read alike, rewrite one of them with [how to write an abstract](/blogs/how-to-write-an-abstract/) open beside you.',
      ],
    },
    {
      id: 'how-to-write-a-conclusion-for-a-research-paper',
      title: 'How to write a conclusion for a research paper in five steps',
      Art: StepsScene,
      caption: 'the introduction narrows down to your question; the conclusion opens back out',
      body: [
        'Guides from Editage and from university writing centres such as those at USC and UNC suggest much the same order. The USC guide adds a useful picture: the conclusion moves from the specific to the general, the reverse of the introduction, so the whole paper takes the shape of an hourglass.',
        {
          steps: [
            { title: 'Restate the aim, in new words.', text: 'Remind the reader what you set out to find. Editage advises phrasing it differently from the abstract and the introduction. One sentence is enough.' },
            { title: 'Give the answer.', text: 'State your main finding in plain words, with only the one or two numbers that carry the message. If a result was unexpected and it matters, report it too.' },
            { title: 'Say why it matters.', text: 'What does your study add to what was known, and who can use it? The UNC Writing Center suggests a "so what" game: ask a friend to read your draft and keep asking why each point matters.' },
            { title: 'Mark the boundary and the next step.', text: 'Say in one line where your result applies, then name the specific study that should come next. The detailed limitations stay in the discussion.' },
            { title: 'End with one clear sentence.', text: 'Finish on the take-home message: a single, plain statement the reader will remember. The USC guide lists this as one strong way to end.' },
          ],
          tone: 'green',
        },
        {
          note: 'take the aim from the last paragraph of your introduction. Editage notes that the objectives stated at the end of the introduction can be reused here. Read your [introduction](/blogs/how-to-write-an-introduction-for-a-research-paper/) and conclusion one after the other: they should sound like a question and its answer.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'what-not-to-include-in-a-conclusion',
      title: 'What not to include in a conclusion',
      Art: BoundaryScene,
      caption: 'new data, citations and big claims stay outside the door',
      body: [
        'Most weak conclusions go wrong by adding things, not by leaving them out. The guides agree these should stay out:',
        {
          list: [
            '**New data or new analysis.** Ketan\'s cost claim for a vacuum packing machine had appeared nowhere in his results. If something matters, it belongs in the results and discussion. The USC guide sums it up as "new insight, not new information".',
            '**Methods and detailed results.** In the USC guide\'s words, "The conclusion is not the place for details about your methodology or results."',
            '**Citations, tables and figures.** Editage advises leaving these out. Comparing your work with other studies was the discussion\'s job.',
            '**Claims bigger than the study.** One paneer recipe from one plant cannot prove anything about "all dairy products". PLOS ONE asks authors to "avoid overstating their conclusions".',
            '**Stock openings and apologies.** "In conclusion" tells the reader nothing new. The USC guide also advises against apologising for your work.',
            '**Empty endings.** "Further research is needed" is true of every study ever done. Name the research instead.',
          ],
          style: 'cross',
        },
        'The UNC Writing Center also names four kinds of ineffective conclusion:',
        {
          table: {
            head: ['type', 'what goes wrong'],
            rows: [
              ['"That\'s my story and I\'m sticking to it"', 'repeats the main point and stops; "usually painfully short"'],
              ['"Sherlock Holmes"', 'the main point appears for the first time at the very end'],
              ['the emotional appeal', 'a sentimental ending that does not suit an analytical paper'],
              ['"Grab bag"', 'leftover facts tipped in at the end, which "can just create confusion"'],
            ],
          },
          tone: 'pink',
        },
        'Ketan\'s first draft was part story, part grab bag: his abstract again, plus an unsupported cost claim.',
      ],
    },
    {
      id: 'how-long-should-a-conclusion-be',
      title: 'How long should a conclusion be?',
      Art: LengthScene,
      caption: 'a long paper, a short ending',
      body: [
        'There is no single rule, but there is useful evidence. George Choueiry, who writes the Quantifying Health website, analysed a random sample of 47,810 conclusion sections from research papers uploaded to PubMed Central between 2016 and 2021. The typical conclusion was a single paragraph of 5 sentences, about 130 words.',
        'He also offers a rule of thumb: divide the number of words in the body of your paper by 30. A paper with 4,500 words of body text would get a conclusion of about 150 words.',
        'The USC guide calls the conclusion often the shortest section of a paper, usually two or three well-developed paragraphs, and warns that "Conclusions that are too lengthy often have unnecessary information in them." Editage adds that the conclusion usually has no fixed word limit, but is typically a single paragraph.',
        {
          note: 'your journal comes first. If its guide for authors sets a limit or a format for the conclusion, follow that, whatever any rule of thumb says.',
          label: 'check',
          tone: 'red',
        },
        'Ketan\'s paper had about 4,000 words of body text, so the rule of thumb suggested around 130 words. His first conclusion was 410 words long. The rewrite, below, came to about 110.',
      ],
    },
    {
      id: 'conclusion-of-a-research-paper-example',
      title: 'Conclusion of a research paper example: before and after',
      Art: ExampleScene,
      caption: 'the first draft said more and meant less',
      body: [
        'Here is the heart of Ketan\'s first draft, shortened a little:',
        {
          quote: 'In conclusion, paneer is a popular dairy product in India. The present study was undertaken to study the effect of vacuum packaging on the shelf life of paneer. A vacuum packing machine will quickly pay for itself in any small dairy. This proves that vacuum packing is the best method for all dairy products. Further research is needed.',
          by: 'first draft',
          tone: 'pink',
        },
        'And here is the rewrite:',
        {
          quote: 'This study asked whether vacuum packaging keeps refrigerated paneer acceptable for longer than ordinary polythene pouches. In our trials, vacuum-packed paneer remained acceptable to a sensory panel for about three weeks, against less than one week for paneer in pouches, with lower acidity and bacterial counts throughout storage. For small dairies that send paneer beyond their own town, vacuum packaging could reduce the stock lost to spoilage. These results come from one recipe made in one plant and stored under refrigeration, so the next step is a trial with commercial batches moving through a real cold chain. For fresh paneer, the pack is part of the product.',
          by: 'rewrite',
          tone: 'green',
        },
        {
          table: {
            head: ['sentence in the rewrite', 'its job'],
            rows: [
              ['This study asked whether...', 'the aim, in new words'],
              ['In our trials...', 'the answer'],
              ['For small dairies...', 'why it matters'],
              ['These results come from...', 'the boundary and the next step'],
              ['For fresh paneer...', 'the take-home message'],
            ],
          },
          tone: 'green',
        },
        'Notice what went: the stock opening, the general fact about paneer, the cost claim with no data behind it and the claim about all dairy products. Nothing new came in. Every sentence in the rewrite can be traced back to Ketan\'s results or discussion.',
      ],
    },
    {
      id: 'conclusion-chapter-in-thesis',
      title: 'The conclusion chapter of a thesis or dissertation',
      Art: ThesisScene,
      caption: 'in a thesis, the last chapter has three parts',
      body: [
        'A thesis ends differently from a journal paper. Many Indian universities ask for a final chapter called "Summary and Conclusions", or simply "Conclusions", and some spell out exactly what it should contain.',
        'The thesis guidelines of Sardar Patel College of Engineering in Mumbai are a good example. They make Conclusions the final chapter and say that "a brief report of the work carried out shall form the first part of the Chapter". The conclusions themselves must be "clearly enumerated, each point stated separately", and the scope for future work comes in the last part.',
        {
          steps: [
            { title: 'A short summary.', text: 'Your aim, what you did and what you found, chapter by chapter, kept brief.' },
            { title: 'Numbered conclusions.', text: 'One conclusion per point, each one traceable to your results and discussion chapters.' },
            { title: 'Scope for future work.', text: 'Specific studies that could build on yours, with a reason for each.' },
          ],
          tone: 'amber',
        },
        'Because of that summary, a thesis conclusion chapter is usually longer than a paper\'s conclusion. The other rules stay the same: no new data and no claims bigger than the study. Formats differ between universities, and sometimes between departments, so follow your own university\'s thesis manual and look at recent theses from your department.',
        'Ketan\'s dissertation ended with a "Summary and Conclusions" chapter: two pages of summary, six numbered conclusions and four lines of future work. His paper ended with one paragraph. Same study, two different jobs. Dr. Desai read the new paragraph and said only, "Now I can quote you." Ketan submitted the paper that weekend.',
      ],
    },
  ],

  takeaways: [
    'The conclusion gives the reader the answer your study reached, why it matters and what should come next.',
    'Write it in five moves: the aim in new words, the answer, why it matters, the boundary and next step, and one take-home sentence.',
    'Leave out new data, methods, detailed results, citations, tables and any claim bigger than your study.',
    'A typical journal conclusion is a single paragraph; one rule of thumb is your body word count divided by 30, but your journal\'s guide comes first.',
    'A thesis conclusion chapter usually adds a short summary, numbered conclusions and scope for future work, in the format your university sets.',
  ],

  faq: [
    {
      q: 'How do you start a conclusion for a research paper?',
      a: 'Start by restating the aim or research question of your study in fresh words, then give the answer. Avoid opening with "In conclusion" or with a general statement about your topic; the reader already knows the paper is ending.',
    },
    {
      q: 'Can I cite references in the conclusion?',
      a: 'Most guides, including Editage, advise against it, because the comparison with other studies belongs in the discussion. Some fields and thesis formats are more relaxed, so check your journal or university guidelines if you are unsure.',
    },
    {
      q: 'Should the conclusion include limitations?',
      a: 'The full discussion of limitations belongs in the discussion section, and guides differ on whether the conclusion should mention them at all. One sentence marking where your result applies, followed by the next study needed, is a safe middle path unless your journal says otherwise.',
    },
    {
      q: 'What is the difference between a summary and a conclusion?',
      a: 'A summary repeats what the paper did and found. A conclusion says what it all adds up to. The UNC Writing Center puts it in three words: "Synthesize, don\'t summarize." In a thesis the final chapter often holds both, a short summary first and then the conclusions.',
    },
  ],

  cta: {
    title: 'Build your conclusion on papers you have checked',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and shows the passage behind every point it writes, so the claims you carry into your discussion and conclusion rest on studies you have actually read. One payment unlocks all of it, for good.',
  },
}
