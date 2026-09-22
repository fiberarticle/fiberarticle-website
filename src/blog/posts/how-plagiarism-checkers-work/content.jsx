import Hero from './hero.jsx'
import {
  FixScene,
  FingerprintScene,
  LevelsScene,
  NetScene,
  PanicScene,
  ReportScene,
  SieveScene,
  SourcesScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a lens over the text, a needle on the dial, and a number that needs reading',
  },

  intro: [
    'Sai is finishing his MPharm at a college in Vijayawada. His dissertation is on sustained-release tablets of metformin, a common diabetes medicine. A week before submission, the department\'s similarity report arrived by email with one number at the top: 18 percent.',
    'Sai had written every chapter himself. He read the number five times, then went to see Dr. Swathi, the research coordinator who runs the checks for every thesis in the department. She opened the report and said, "Before you worry, let us see what this number is made of."',
    'This blog walks through what she showed him: how checkers such as Turnitin, iThenticate and DrillBit work, what the percentage measures, and how to read a report calmly.',
  ],

  sections: [
    {
      id: 'what-the-percentage-measures',
      title: 'What the percentage actually measures',
      Art: PanicScene,
      caption: 'one number on a screen, late at night, and no idea yet what it means',
      body: [
        'The number at the top of a report is usually called the similarity index or similarity score. It is the share of your document that matches text somewhere in the checker\'s collection of sources. Nothing more.',
        'It does not measure plagiarism. It cannot tell whether a match is a properly quoted definition, your reference list, a common phrase or a copied paragraph. It only knows that the same words exist somewhere else. Deciding what a match means is a human job: yours, your guide\'s, and sometimes a committee\'s.',
        {
          define: 'Similarity index',
          hint: 'the headline number',
          meaning: 'The percentage of a document\'s text that matches sources in a checker\'s collection, after any exclusions the person running the check has set.',
          tone: 'pink',
        },
        'So 18 percent can be perfectly fine, and 5 percent can hide a serious problem. The number starts the conversation; it does not end it.',
      ],
    },
    {
      id: 'how-a-checker-reads-your-text',
      title: 'How a checker reads your text',
      Art: FingerprintScene,
      caption: 'overlapping pieces of text go in, compact fingerprints come out',
      body: [
        'Checkers do not read the way people do. Vendors keep their exact methods to themselves, but the broad idea is well known: your document is broken into small overlapping pieces, and each piece is turned into a compact code, often called a fingerprint, that comes out the same whenever the same words appear.',
        {
          steps: [
            {
              title: 'Clean the text.',
              text: 'Formatting, capital letters and often punctuation are set aside, so small changes do not hide a match.',
            },
            {
              title: 'Cut it into overlapping pieces.',
              text: 'A sentence such as "the tablets were stored at room temperature" becomes a chain of short word runs that overlap by a word or two.',
            },
            {
              title: 'Turn each piece into a fingerprint.',
              text: 'A short code is worked out for every piece. Identical pieces always give identical codes.',
            },
            {
              title: 'Look the fingerprints up.',
              text: 'The codes are compared with those stored for a huge collection of documents. Where many codes match in a row, the checker marks a matching passage.',
            },
          ],
          tone: 'blue',
        },
        'Because the pieces overlap, changing one word in a sentence rarely hides it: the pieces on either side still match. This is also why swapping a few words for synonyms is a poor disguise.',
      ],
    },
    {
      id: 'what-it-compares-against',
      title: 'What your text is compared against',
      Art: SourcesScene,
      caption: 'one page, checked against the web, the journals and the work of students before',
      body: [
        'Each checker compares your work with its own collection. The large ones include:',
        {
          list: [
            'public web pages, including blogs, tutorials and course notes',
            'published journal articles and books; many publishers share their full text through Crossref Similarity Check, which is powered by iThenticate',
            'earlier student submissions stored by a college or by the vendor, where the institution allows it',
            'theses and dissertations in open repositories',
          ],
          style: 'dots',
        },
        'Different tools hold different collections, so the same document can score differently on Turnitin, iThenticate and DrillBit, which many Indian universities use. That is normal. Compare reports from the same tool, run with the same settings.',
        {
          note: 'some checkers keep a copy of what you upload. If a draft is stored, your final version can later match your own earlier draft. Ask how drafts are handled before you check one.',
          label: 'remember',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'how-to-read-a-similarity-report',
      title: 'How to read a similarity report',
      Art: ReportScene,
      caption: 'every colour in the text points to one source in the list',
      body: [
        'A report usually has three parts: the overall percentage, your document with the matching passages highlighted in colour, and a list of sources, each with its own percentage and a colour that ties it to the highlights.',
        {
          steps: [
            {
              title: 'Look at the source list, not the total.',
              text: 'One source with 12 percent means something very different from twelve sources with 1 percent each.',
            },
            {
              title: 'Open the biggest matches first.',
              text: 'Read each highlighted passage next to the source it matches.',
            },
            {
              title: 'Sort every match.',
              text: 'Is it a quotation you marked and cited, your reference list, a standard phrase, a name or title, or text you copied without credit?',
            },
            {
              title: 'Check the settings.',
              text: 'See whether quotations, the bibliography and very small matches were excluded, as your rules allow.',
            },
            {
              title: 'Fix only what needs fixing.',
              text: 'Quote and cite what should be quoted, rewrite what you copied, and leave common phrases alone.',
            },
          ],
          tone: 'amber',
        },
        'Sai\'s 18 percent broke down like this. Six percent was his own reference list. Four percent was standard wording in his methods, such as the names of tests and equipment. Three percent was definitions he had quoted and cited correctly, and two percent was scattered matches of a few words each. The last 3 percent was a test procedure he had pasted from the Indian Pharmacopoeia with no quotation marks and no citation. Only that part was a real problem.',
      ],
    },
    {
      id: 'similarity-is-not-plagiarism',
      title: 'Why similarity is not the same as plagiarism',
      Art: SieveScene,
      caption: 'most matches fall through as harmless; one is left behind to be checked',
      body: [
        'Plenty of matches are innocent. Most checkers let the person running the check exclude some kinds of match, and many rules expect it.',
        {
          compare: {
            left: {
              title: 'usually fine',
              tone: 'green',
              mark: 'check',
              items: [
                'quotations with marks and a citation',
                'your reference list',
                'common phrases such as "the results show that"',
                'names of methods, chemicals, tests and standards',
              ],
            },
            right: {
              title: 'needs attention',
              tone: 'red',
              mark: 'cross',
              items: [
                'whole sentences with no quotation marks',
                'a long match to a single source',
                'a close paraphrase that follows the original line by line',
                'your own earlier work, reused without saying so',
              ],
            },
          },
        },
        'Zero percent is not the goal. A thesis with no matches at all may simply cite nothing. What matters is that every match is either legitimate or fixed. For the different kinds of copying a report can reveal, see [types of plagiarism](/blogs/types-of-plagiarism/).',
      ],
    },
    {
      id: 'the-ugc-levels',
      title: 'The UGC levels for Indian theses',
      Art: LevelsScene,
      caption: 'four levels on one scale, and the marker sliding down once the report is read properly',
      body: [
        'In India, the University Grants Commission set out plagiarism levels in the UGC (Promotion of Academic Integrity and Prevention of Plagiarism in Higher Educational Institutions) Regulations, 2018. For student theses and dissertations they work like this:',
        {
          table: {
            head: ['level', 'similarity', 'what follows for students'],
            rows: [
              ['Level 0', 'up to 10 percent', 'Minor similarity, no penalty'],
              ['Level 1', 'above 10 to 40 percent', 'Submit a revised script within a period of up to six months'],
              ['Level 2', 'above 40 to 60 percent', 'Barred from submitting a revised script for one year'],
              ['Level 3', 'above 60 percent', 'Registration for the programme cancelled'],
            ],
          },
          tone: 'pink',
        },
        'The regulations also list material to leave out of the calculation, such as quoted work with proper attribution, references and bibliography, and standard terms, symbols and equations. Many universities set their own stricter limits or procedures, so check your department\'s rules as well.',
        'Sai\'s raw 18 percent would have put him in Level 1. With the reference list and quotations excluded, as the rules allow, and the pasted procedure fixed, he was comfortably inside Level 0.',
      ],
    },
    {
      id: 'what-checkers-cannot-see',
      title: 'What checkers cannot see well',
      Art: NetScene,
      caption: 'the net catches the copied page; the reworded, the translated and the picture slip past',
      body: [
        'A low number does not prove that work is original. Similarity checkers are good at one thing, finding matching text, and they struggle with anything that leaves no textual trace:',
        {
          list: [
            'a good paraphrase of someone else\'s idea with no citation',
            'text translated from another language',
            'borrowed ideas, arguments or structure',
            'images, figures and data tables, which some tools do not check at all',
            'sources that are not in the checker\'s collection',
          ],
          style: 'dots',
        },
        'Examiners and reviewers fill these gaps by reading. They know the literature of their field, and a borrowed argument is often easy for them to spot even when the words are new.',
        'AI-writing detectors are a separate kind of tool, and far less reliable. They guess from patterns in the writing instead of finding a source, and studies have found they can wrongly flag honest work, especially writing by people who use English as a second language. A detector\'s score alone should never be treated as proof.',
      ],
    },
    {
      id: 'bringing-the-number-down-honestly',
      title: 'Bringing the number down, honestly',
      Art: FixScene,
      caption: 'fix the passage itself, and the number follows',
      body: [
        'If a report shows a real problem, fix it at the source.',
        {
          list: [
            'Put exact words in quotation marks and cite them.',
            'Rewrite copied passages from your own understanding, and cite the idea. Our guide to [paraphrasing, summarising and quoting](/blogs/paraphrasing-vs-summarising-vs-quoting/) shows how.',
            'Replace long pasted procedures or standards with a short summary and a citation to the standard.',
            'Disclose any reuse of your own earlier work.',
            'Ask for the exclusions your rules allow, such as the reference list and quotations.',
          ],
          style: 'check',
        },
        'Never try to trick the checker. Word spinners, swapping letters for look-alike characters from other alphabets, hidden white text and pasting text as images are all forms of misconduct. Many checkers now flag unusual characters and hidden text, and even when a trick slips through, the strange writing it leaves behind is obvious to any examiner.',
        'The easiest way to keep the number honest is to never lose track of your sources, which is the subject of [how to avoid plagiarism](/blogs/how-to-avoid-plagiarism/). Tools can help with that part: [Fiberarticle](https://app.fiberarticle.com) finds real papers, shows the passage behind each point it writes and formats citations in the style you need. It does not check plagiarism, so still run the checker your university provides.',
        'Sai wrote a short summary of the pharmacopoeia procedure and cited it properly. The new report came back at 6 percent, almost all of it standard method wording, and Dr. Swathi signed the certificate the same afternoon.',
      ],
    },
  ],

  takeaways: [
    'The similarity percentage shows how much of your text matches other text, not whether you plagiarised.',
    'Checkers fingerprint short overlapping pieces of your text and compare them with a large collection of web pages, publications and submissions.',
    'Read the source list and the highlighted matches, not just the total.',
    'Quotations, reference lists and standard phrases are usually fine, and can often be excluded.',
    'Under the UGC 2018 regulations, similarity up to 10 percent is minor for student theses, with penalties rising in levels above that.',
    'Fix real problems at the source, and never use tricks to fool the checker.',
  ],

  faq: [
    {
      q: 'What is an acceptable similarity percentage for a thesis?',
      a: 'In India, the UGC treats similarity up to 10 percent as minor for student theses, and many universities use that as a working limit. Journals rarely publish a fixed number; editors read the report and judge the matches. Always check the rules that apply to you.',
    },
    {
      q: 'Why do Turnitin and DrillBit give different percentages?',
      a: 'Each tool compares your document with its own collection of sources and uses its own settings, so the same text can match different things. Compare reports from the same tool, with the same exclusions.',
    },
    {
      q: 'Does the similarity report include my references?',
      a: 'By default it often does. Most checkers let the person running the check exclude the bibliography and quoted text, and the UGC regulations list references among the material to leave out. Ask your coordinator which settings were used.',
    },
    {
      q: 'Can a similarity checker tell if I used AI?',
      a: 'Similarity checkers look for matching text, not AI writing. Separate AI detectors exist, but they are unreliable and can wrongly flag human writing, so their scores should not be treated as proof on their own. Follow your institution\'s policy on AI use and disclose it where required.',
    },
  ],

  cta: {
    title: 'Keep track of every source as you write',
    text: 'Fiberarticle finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref, shows the passage behind every point it writes, and formats references in more than 10,000 citation styles. It is free to use yourself.',
  },
}
