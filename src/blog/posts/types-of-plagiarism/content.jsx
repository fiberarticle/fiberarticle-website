import Hero from './hero.jsx'
import {
  CheckScene,
  CopierScene,
  CratesScene,
  DisguiseScene,
  IdeaScene,
  MirrorScene,
  PatchworkScene,
  TranslateScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the washing line of plagiarism: six kinds, one careful inspector',
  },

  intro: [
    'Rohan had never copied anything in his life. At least, that is what he told his guide, Dr. Lakshmi, when the similarity report for his first conference paper came back at 31 percent. He was in the second year of his MTech in Hyderabad and had spent three full weeks on that paper. Late nights in the hostel, two cutting chais a day, and not a single sentence taken from anyone else. Or so he thought.',
    'Dr. Lakshmi did not shout. She turned her laptop towards him and said, "Rohan, plagiarism is not one thing. It is a whole family. Let me introduce you to the relatives." Over the next hour she walked him through every kind, one by one. Some he knew. Most he did not.',
    'This is that conversation, written down. If you are working on a thesis, a journal paper or even a semester assignment, it can save you from the sinking feeling Rohan had that evening.',
  ],

  sections: [
    {
      id: 'what-plagiarism-really-means',
      title: 'What plagiarism really means',
      Art: IdeaScene,
      caption: 'an idea travels from one head to another, and the name on it changes on the way',
      body: [
        'Most of us think plagiarism means copying somebody\'s sentences. That is only the most visible part. The University Grants Commission, in its 2018 regulations on academic integrity, describes plagiarism as taking someone else\'s work or idea and passing it off as your own. Notice the word *idea*. You can plagiarise without copying a single sentence.',
        'The "work" can be words, but it can also be data, a figure, a table, a method, a piece of code or even the way an argument is built. If a reader would believe it came from you, and it did not, you owe them a citation.',
        {
          define: 'Plagiarism',
          hint: 'noun',
          meaning: 'Presenting another person\'s words, ideas, data or work as your own, whether you meant to or not.',
        },
        'That last part, *whether you meant to or not*, is the one that catches people. Intention matters when a committee decides what to do about it. It does not change what the similarity report shows. Under the UGC rules, similarity of up to 10 percent is treated as minor, and the consequences grow in steps above that. We explain those levels, and what the percentage really measures, in [how plagiarism checkers work](/blogs/how-plagiarism-checkers-work/).',
      ],
    },
    {
      id: 'direct-plagiarism',
      title: 'Direct plagiarism: the copy everyone can see',
      Art: CopierScene,
      caption: 'the photocopier way: fast, easy, and the first thing any checker catches',
      body: [
        'This is the classic kind. You take a paragraph from a paper, a website or a friend\'s report and put it in your work word for word, with no quotation marks and no citation. Sometimes it is one line. In the worst cases it is a whole assignment, copied from a senior\'s old project or bought from someone who writes them for money.',
        'Direct plagiarism is also the easiest to catch. Similarity checkers are built for exactly this. They compare your document with a huge collection of web pages, published papers and earlier submissions, and a copied paragraph lights up in bright colour within minutes.',
        {
          quote: 'If you need someone\'s exact words, you are allowed to have them. Put them inside quotation marks and say whose they are.',
          by: 'Dr. Lakshmi, to Rohan',
          tone: 'amber',
        },
        'The fix is simple. If the exact wording matters, quote it and cite it. If it does not, understand the idea, write it in your own words, and still cite it.',
      ],
    },
    {
      id: 'mosaic-plagiarism',
      title: 'Mosaic plagiarism: cut, paste and stitch',
      Art: PatchworkScene,
      caption: 'three sources, busy little helpers, and a patchwork that still belongs to other people',
      body: [
        'Mosaic plagiarism, also called patchwriting, is sneakier. You do not copy one big block. You take a phrase from one paper, half a sentence from another, change a few words, shuffle the order and stitch it together with your own linking words. The result looks new. It is not.',
        'Rohan had done this without realising it. His literature review had lines like "deep learning models have shown remarkable performance in medical image analysis", which he had assembled from three different abstracts. Each piece was small. Together they made up 19 percent of his paper.',
        {
          compare: {
            left: {
              title: 'patchwork',
              items: [
                'keeps the original sentence shapes',
                'swaps a few words for synonyms',
                'mixes phrases from several papers',
                'hides where each idea came from',
              ],
            },
            right: {
              title: 'real synthesis',
              items: [
                'starts from your own understanding',
                'says where the sources agree and differ',
                'uses sentences you built yourself',
                'cites every source it leans on',
              ],
            },
          },
        },
        'The cure is a change in how you take notes. Read the paper, close it, and then write down what you understood in your own words. When you later write your draft from those notes instead of from the open PDF, patchwriting simply has nowhere to come from.',
      ],
    },
    {
      id: 'paraphrasing-plagiarism',
      title: 'Paraphrasing plagiarism: new words, borrowed thinking',
      Art: DisguiseScene,
      caption: 'the same idea in a false moustache is still the same idea',
      body: [
        'Suppose you read a brilliant argument in a paper. You rewrite it completely, in your own words, with your own examples. Not one phrase matches. Is that fine? Only if you cite it.',
        'Paraphrasing is a skill every researcher needs. Paraphrasing *without credit* is plagiarism of ideas, and it is taken seriously because the idea is often the most valuable part of a paper. A similarity checker may not flag it at all, since the words are different. A reviewer who knows the field will still recognise the thinking.',
        {
          note: 'a good paraphrase changes the words and the sentence structure, keeps the meaning, and still carries a citation. Our guide to [paraphrasing, summarising and quoting](/blogs/paraphrasing-vs-summarising-vs-quoting/) has worked examples.',
          label: 'remember',
          tone: 'blue',
        },
        'Common knowledge is the one exception. You do not need to cite that water boils at 100 degrees Celsius at sea level. You do need to cite a specific finding, a statistic, or anyone\'s interpretation of the facts. When in doubt, cite. Nobody has ever failed a viva for one citation too many.',
      ],
    },
    {
      id: 'self-plagiarism',
      title: 'Self-plagiarism: yes, you can copy yourself',
      Art: MirrorScene,
      caption: 'last year\'s paper, looking back from the mirror at this year\'s',
      body: [
        'This one surprises people the most. How can it be plagiarism if the words are mine? Because the reader, the journal or the examiner believes the work in front of them is new, and it is not.',
        'Self-plagiarism takes a few forms. Sending the same manuscript to two journals at the same time is *duplicate submission*. Publishing results you have already published, without saying so, is *duplicate publication*. Cutting one study into several thin papers to raise your count is known as *salami slicing*. Pasting large parts of your own earlier writing, say from your thesis, into a new paper without mentioning it is *text recycling*.',
        {
          list: [
            'Say where an earlier version appeared (thesis, conference, preprint) and cite it.',
            'Read the journal\'s policy. Many accept a paper that grew out of a thesis or a preprint, as long as you disclose it.',
            'Rewrite reused background sections instead of pasting them.',
            'Never send the same manuscript to two journals at once.',
          ],
          style: 'check',
        },
        'Rohan\'s paper had two paragraphs lifted from his own B.Tech project report. He had never thought of that as copying. The checker had found the report anyway, because his old college had put it online.',
      ],
    },
    {
      id: 'source-based-plagiarism',
      title: 'Source-based plagiarism: when the citation itself is wrong',
      Art: CratesScene,
      caption: 'a citation should point to where the idea really lives, not to wherever is convenient',
      body: [
        'Sometimes the problem is not a missing citation but a misleading one. It usually happens in one of three ways.',
        {
          steps: [
            {
              title: 'Citing a source you never read.',
              text: 'You read a claim in a review article, which cites an original study. You cite the original study directly, as if you had read it. If the review got it slightly wrong, now you have too. Cite what you actually read, or go and read the original.',
            },
            {
              title: 'Citing the wrong source.',
              text: 'The idea came from paper A, but you cite paper B because it was easier to find or sounds more impressive. Your reader is now sent to the wrong place.',
            },
            {
              title: 'Citing a source that does not exist.',
              text: 'This used to be rare. With AI chatbots it has become common: a neat, confident reference with real-sounding authors and a real journal name, for a paper that was never written.',
            },
          ],
          tone: 'pink',
        },
        'A made-up reference is treated very seriously, because it looks like an attempt to deceive even when it was an accident. It takes two minutes to search the title on Google Scholar or look up the DOI. Do it for every reference you did not open yourself.',
        'This is also why [Fiberarticle](https://app.fiberarticle.com) only cites papers it has actually found in arXiv, OpenAlex, Semantic Scholar and Crossref, and shows you the passage behind each point it writes, so you can check a source before you trust it.',
      ],
    },
    {
      id: 'translation-and-ai-plagiarism',
      title: 'Two newer kinds: translated text and AI-written text',
      Art: TranslateScene,
      caption: 'a paper from another language and a paper from a chatbot both need an honest label',
      body: [
        '*Translation plagiarism* means taking a paper written in another language, say Hindi, Tamil or Spanish, translating it into English and presenting it as your own work. Because the English words are new, many similarity checkers struggle to catch it. It is still plagiarism, and examiners who read both languages do catch it.',
        '*AI-written text* is the newest question. If a chatbot writes your paragraphs and you submit them as your own writing, most universities and journals now treat that as a breach of integrity unless you disclose it. Major publishers also agree that an AI tool cannot be listed as an author, because it cannot take responsibility for the work.',
        'Using AI is not the problem. Hiding it is, and so is trusting it blindly. Our guide to [using AI in research honestly](/blogs/using-ai-in-research-honestly/) covers the simple rules most institutions now follow.',
      ],
    },
    {
      id: 'accidental-plagiarism',
      title: 'Accidental plagiarism, and the one habit that prevents it',
      Art: CheckScene,
      caption: 'most plagiarism is not theft, it is untidy notes',
      body: [
        'Rohan\'s 31 percent had not come from dishonesty. It came from untidy notes: lines copied without quotation marks, an old report reused without a thought, and summaries that stayed too close to the abstracts they came from. This is accidental plagiarism, and among students it is by far the most common kind.',
        'The good news is that one habit prevents almost all of it: **always know where every sentence came from.** When you copy a line into your notes, put it in quotation marks and write the source beside it that very minute. When you write your draft, write from your notes in your own words, and add the citation as you type, not later.',
        {
          list: [
            'Quotation marks and a source for every line you copy into your notes.',
            'Write from your understanding, not from the open PDF.',
            'Cite as you write. "I will add the references at the end" is how sources get lost.',
            'Check every reference you did not open yourself.',
            'Disclose any reuse of your own earlier work.',
            'Run your draft through your university\'s checker before you submit.',
          ],
          style: 'check',
        },
        'Rohan rewrote his literature review from his own notes over the next week. The new report came back at 7 percent, almost all of it from properly quoted definitions and his reference list. Dr. Lakshmi signed the form without a word, which, from her, was high praise.',
      ],
    },
  ],

  takeaways: [
    'Plagiarism covers ideas, data and structure, not only copied sentences.',
    'Copied and patched text is easy to catch; an uncited paraphrase often is not, but reviewers notice.',
    'Reusing your own earlier work without saying so is self-plagiarism.',
    'Cite what you actually read, and check that every reference exists.',
    'Translated text and AI-written text both need honest disclosure.',
    'Most plagiarism is accidental. Tidy notes with quotation marks and sources prevent it.',
  ],

  faq: [
    {
      q: 'Is it plagiarism if I change every word?',
      a: 'Yes, if the idea belongs to someone else and you do not cite it. Changing the words only changes how easy it is to detect. A proper paraphrase with a citation is perfectly fine.',
    },
    {
      q: 'How much similarity is allowed in a thesis in India?',
      a: 'Under the UGC regulations of 2018, similarity of up to 10 percent is treated as minor and carries no penalty for students, and the consequences rise in levels above that. Many universities set their own stricter limits, so always check your department\'s rules.',
    },
    {
      q: 'Can I turn my conference paper into a journal paper?',
      a: 'Often, yes. Many journals accept extended versions of conference papers that add substantial new work. Check the journal\'s policy, cite the conference version, and mention it in your cover letter.',
    },
    {
      q: 'Does Fiberarticle check for plagiarism?',
      a: 'No. Fiberarticle helps you avoid it: it finds real papers, shows the source behind each point it writes, and formats your citations in the style you need. Before you submit, still run your work through the similarity checker your university or journal uses.',
    },
  ],

  cta: {
    title: 'Keep every sentence tied to its source',
    text: 'Fiberarticle reads the literature with you and shows the paper behind every line it writes, with references in APA, IEEE, Vancouver and more than 10,000 other citation styles. One payment unlocks all of it, for good.',
  },
}
