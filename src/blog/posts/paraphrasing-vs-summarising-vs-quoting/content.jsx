import Hero from './hero.jsx'
import {
  ExampleScene,
  LetterScene,
  PracticeScene,
  QuoteScene,
  RewriteScene,
  SignpostScene,
  SummaryScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'three stations on one workbench: keep it, retell it, or boil it down',
  },

  intro: [
    'Aisha had highlighted half of every paper she read. Yellow for important, green for very important, pink for "must quote this". She was doing her MA in Economics in Kolkata, and her term paper on digital payments and small businesses was due in two weeks. The highlighting was the easy part. The hard part came when she sat down to write and did not know what to do with all those coloured lines.',
    'Should she copy the pink sentences inside quotation marks? Rewrite the yellow ones in her own words? Squeeze whole papers into a line each? She tried all three at random, and her first draft came back from Professor Ghosh with one comment in red ink: *You are using your sources, but you are not yet using them well.*',
    'Quoting, paraphrasing and summarising are the three tools every researcher uses to bring other people\'s work into their own. They look alike, but they do different jobs. Here is what Aisha learnt about each one, with a single small passage done every possible way.',
  ],

  sections: [
    {
      id: 'three-tools-three-jobs',
      title: 'Three tools, three different jobs',
      Art: LetterScene,
      caption: 'one long letter, three ways of passing it on',
      body: [
        'Think of a source as a long letter from a friend. Quoting is reading out one line exactly as she wrote it. Paraphrasing is telling someone what one part of the letter says, in your own words. Summarising is saying in one breath what the whole letter was about. In all three cases, you still say who wrote the letter.',
        {
          table: {
            head: ['Tool', 'What it keeps', 'Best for', 'Length'],
            rows: [
              ['Quoting', 'The exact words', 'Definitions, striking phrases, wording you will analyse', 'As few words as you need'],
              ['Paraphrasing', 'One idea, in full detail', 'Explaining a specific point in your own voice', 'About as long as the original'],
              ['Summarising', 'Only the main point', 'An overview of a paper or an argument', 'Much shorter than the original'],
            ],
          },
          tone: 'blue',
        },
        'All three need a citation. This is the part many students miss. A citation is not a penalty for copying exactly; it is how you tell the reader where an idea came from, whatever words you use to express it.',
        'Aisha had been quoting almost everything, because it felt safest. Her professor\'s point was that a paper made only of quotations is a scrapbook, not an argument. The reader wants to hear her voice, guided by her sources.',
      ],
    },
    {
      id: 'quoting',
      title: 'Quoting: when the exact words matter',
      Art: QuoteScene,
      caption: 'lift the exact words out carefully, and note the page they came from',
      body: [
        'Quote when the exact wording is the point. A formal definition, a memorable phrase, the text of a law or policy, or a sentence you are about to analyse closely are all good reasons. If you could say it just as well in your own words, you probably should.',
        'The rules are simple but strict. The words inside the quotation marks must match the source exactly, including spelling and punctuation. If you leave something out in the middle, show the gap with an ellipsis (three dots). If you add a word so the sentence reads smoothly, put it in square brackets. And give the page number, or a paragraph number for sources without pages, so the reader can find the exact line.',
        {
          list: [
            'Use quotation marks for short quotes inside your own sentence.',
            'Set longer quotes apart as an indented block. APA does this at 40 words or more; MLA at more than four lines of prose.',
            'Add the page number to the citation, for example (Author, year, p. 12).',
            'Keep quotes short. Quote the phrase that matters, not the whole paragraph.',
          ],
          style: 'check',
        },
        {
          note: 'exact words without quotation marks are not a quote. Even with a citation, copying someone\'s wording without marking it counts as plagiarism.',
          label: 'careful',
        },
        'The exact format of the citation depends on the style your department or journal uses; our guide to [citation styles](/blogs/citation-styles-explained/) walks through the common ones. Aisha cut her twelve quotations down to three: one definition from a policy report, and two short phrases she wanted to argue with.',
      ],
    },
    {
      id: 'paraphrasing',
      title: 'Paraphrasing: same idea, your own words',
      Art: RewriteScene,
      caption: 'read it, turn it over, then write it your way',
      body: [
        'A paraphrase restates one specific idea from a source in your own words and your own sentence structure. It is usually about as long as the original, because you keep the detail and only change how it is expressed. Done well, it shows that you understood the idea, which a quotation never can.',
        'The trick is never to paraphrase with the original open in front of you. When the source is on screen, your eyes keep borrowing its words and its rhythm. That is how patchwriting happens: a few synonyms swapped in, and the skeleton of the sentence left exactly as it was.',
        {
          steps: [
            { title: 'Read it until you understand it.', text: 'Read the passage twice. If you cannot explain it to a friend, you are not ready to paraphrase it.' },
            { title: 'Close it.', text: 'Turn the page over or switch the tab. This one step prevents most patchwriting.' },
            { title: 'Write it your way.', text: 'Explain the idea from memory, as you would to a classmate, in sentences you build yourself.' },
            { title: 'Compare.', text: 'Open the source again. If a run of three or four words matches, or your sentences follow the same order, rewrite them.' },
            { title: 'Cite it.', text: 'Add the citation. A paraphrase is still someone else\'s idea.' },
          ],
          tone: 'green',
        },
        {
          compare: {
            left: {
              title: 'patchwriting',
              items: [
                'swaps words for synonyms',
                'keeps the original sentence order',
                'written with the source open',
                'reads like the original in disguise',
              ],
            },
            right: {
              title: 'a real paraphrase',
              items: [
                'new words and a new structure',
                'the same meaning, nothing added',
                'written from understanding',
                'still carries a citation',
              ],
            },
          },
        },
        'Aisha\'s first draft was full of the left column. Now she writes her paraphrases on a separate sheet of paper, away from her laptop, and types them in only after the compare step.',
      ],
    },
    {
      id: 'summarising',
      title: 'Summarising: the big picture, much shorter',
      Art: SummaryScene,
      caption: 'the bookworm crawls through the whole pile and comes back with one line',
      body: [
        'A summary gives the main point of a source, or of a large part of it, in far fewer words. You leave out the examples, the details and the side arguments, and keep the central claim. A whole paper can often be summarised in two or three sentences: what it asked, how it went about answering, and what it found.',
        'Summaries are the backbone of a literature review. When you write that three studies found one thing and two found another, you are summarising each of them in a line. Our guide to [writing a literature review](/blogs/how-to-write-a-literature-review/) shows how those one-line summaries become a real argument.',
        {
          quote: 'If your summary is as long as the paper, you have not summarised it. You have only retyped it more slowly.',
          by: 'Professor Ghosh, in the margin of Aisha\'s draft',
          tone: 'pink',
        },
        'Here is a good test. Could someone who has not read the source understand its main point from your summary alone, without being misled? If yes, you have done it well. And yes, a summary still needs a citation.',
      ],
    },
    {
      id: 'one-passage-every-way',
      title: 'One passage, done every way',
      Art: ExampleScene,
      caption: 'one sample passage, four very different results',
      body: [
        'Here is a short passage we wrote for this guide. It is a made-up example for practice, not a real study, so the citations below simply say *(Sample passage, 2025)*. In your own work, the brackets would hold the author\'s surname and the year, in the style your department uses.',
        {
          quote: 'Small shopkeepers in Indian towns adopted QR-code payments quickly after 2016, but not for the reasons most people assume. Speed at the counter mattered less to them than record-keeping: every payment left a trail they could show a lender. For many, that trail was the first proof of steady income they had ever had, and it opened the door to small business loans.',
          by: 'a sample passage written for this guide, not a real study',
          tone: 'blue',
        },
        {
          define: 'A quotation',
          hint: 'exact words, marked and cited',
          meaning: 'For these shopkeepers, the passage argues, "speed at the counter mattered less to them than record-keeping" (Sample passage, 2025).',
          tone: 'amber',
        },
        {
          define: 'A bad paraphrase',
          hint: 'patchwriting',
          meaning: 'Small shopkeepers in Indian towns took up QR-code payments fast after 2016, though not for the reasons people think. Speed at the counter was less important to them than keeping records, as each payment left a trail to show a lender (Sample passage, 2025).',
          tone: 'red',
        },
        {
          define: 'A good paraphrase',
          hint: 'new words, same meaning',
          meaning: 'What drew small traders to digital payments was not a quicker checkout. It was the record the payments created: a history of sales that lenders would accept, which for many traders was the first evidence of a reliable income and so their route to a small business loan (Sample passage, 2025).',
          tone: 'green',
        },
        {
          define: 'A summary',
          hint: 'the main point only',
          meaning: 'Small shopkeepers valued QR payments mainly because the payment records helped them get loans (Sample passage, 2025).',
          tone: 'pink',
        },
        'Notice how the bad paraphrase keeps the original\'s skeleton: the same order, the same length and many of the same words. It carries a citation, and it is still patchwriting. The good paraphrase and the summary both started from understanding, not from the original sentence.',
      ],
    },
    {
      id: 'signal-phrases',
      title: 'Signal phrases that make citations flow',
      Art: SignpostScene,
      caption: 'a signal phrase is a signpost: it tells the reader whose road they are on',
      body: [
        'A signal phrase introduces a source inside your sentence, so the reader knows where your words end and someone else\'s ideas begin. It also lets you show your attitude to the source: whether the author found something, argued it, claimed it or only suggested it.',
        {
          list: [
            '"According to Author (year), ..." for a neutral report of what a source says.',
            '"Author (year) argues that ..." when the source is making a case.',
            '"Author (year) found that ..." for the results of a study.',
            '"As Author (year) shows, ..." when you accept the evidence and build on it.',
            '"In contrast, Author (year) reports ..." to set two sources against each other.',
            '"Building on Author (year), ..." when your idea grows out of theirs.',
            '"Several studies suggest that ... (Author, year; Author, year)." to sum up a group.',
          ],
          style: 'dots',
        },
        'Choose the verb with care. *Found* and *showed* tell the reader the evidence is solid. *Suggests* and *claims* keep some distance. Writing that one small study *proves* something is one of the fastest ways to lose an examiner\'s trust.',
        'Aisha\'s revised draft moved most of her citations into signal phrases. Her paragraphs began to read like a conversation between economists, with her own voice as the host.',
      ],
    },
    {
      id: 'mistakes-and-practice',
      title: 'Mistakes that turn into plagiarism, and a quick practice routine',
      Art: PracticeScene,
      caption: 'ten minutes and one abstract a day, with the morning tea',
      body: [
        'Almost every plagiarism problem with these three tools comes from a handful of mistakes, and most of them are accidental.',
        {
          list: [
            'Swapping in synonyms while keeping the original sentence shape.',
            'Paraphrasing an idea and skipping the citation because "the words are mine".',
            'Copying exact words without quotation marks, even with a citation.',
            'Summarising someone\'s opinion as if it were an established fact.',
            'Quoting without a page number, so the line cannot be found.',
            'Building whole paragraphs out of other people\'s quotations.',
          ],
          style: 'cross',
        },
        'Rewording tools do not change any of this. When the Article Writer in [Fiberarticle](https://app.fiberarticle.com) rewrites or simplifies a passage, it keeps the numbered citation markers in place, because changing the words never removes the need to credit the source. The same is true of anything you rewrite by hand. For the wider habits that keep you safe, read [how to avoid plagiarism](/blogs/how-to-avoid-plagiarism/).',
        {
          steps: [
            { title: 'Pick one abstract a day.', text: 'Any paper from your reading list will do. It takes about ten minutes.' },
            { title: 'Quote one phrase.', text: 'Choose the single phrase most worth keeping word for word, and cite it with its page number.' },
            { title: 'Paraphrase one sentence.', text: 'Read, close, write, compare, cite.' },
            { title: 'Summarise the whole abstract in one sentence.', text: 'Question, method and finding, in about twenty to thirty words.' },
            { title: 'Check with a friend.', text: 'Swap with a classmate and ask whether your paraphrase and summary say what the original says.' },
          ],
          tone: 'amber',
        },
        'Aisha did this every morning for two weeks, with her first cup of tea. Her final term paper had three quotations, careful paraphrases and tight one-line summaries, each tied to its source. Professor Ghosh returned it with a new comment in red: *Now you are using your sources well.*',
      ],
    },
  ],

  takeaways: [
    'Quote when the exact words matter, with quotation marks and a page number.',
    'Paraphrase to explain one idea in detail, in your own words and your own sentence structure.',
    'Summarise to give the main point of a source in far fewer words.',
    'All three need a citation, whatever words you use.',
    'Paraphrase with the source closed, then compare, to avoid patchwriting.',
    'Signal phrases and careful verbs turn your sources into part of your argument.',
  ],

  faq: [
    {
      q: 'Do I need to cite a paraphrase if I changed every word?',
      a: 'Yes. A paraphrase restates someone else\'s idea, so it needs a citation even when none of the words match. Only common knowledge can go uncited.',
    },
    {
      q: 'How many quotations are too many?',
      a: 'There is no fixed number, but in most research writing quotations should be rare. If a paragraph holds more quotation than your own words, try paraphrasing or summarising instead, and save quotes for wording that truly matters.',
    },
    {
      q: 'Is a summary the same as an abstract?',
      a: 'They are related. An abstract is a summary of a paper written by its own authors. When you summarise someone else\'s paper, write it in your own words rather than copying their abstract, and cite it.',
    },
    {
      q: 'Can I paraphrase with an AI rewriting tool?',
      a: 'You can use one to polish your own wording, but an automatic rewrite of someone else\'s text is still their idea and needs a citation, and it can drift from the original meaning. Check it against the source, and follow your university\'s rules on disclosing AI use.',
    },
  ],

  cta: {
    title: 'Keep every source attached',
    text: 'Fiberarticle shows the passage behind each point it writes, and keeps the citation markers in place when you rewrite, simplify or change the tone of a section. It is free to use yourself.',
  },
}
