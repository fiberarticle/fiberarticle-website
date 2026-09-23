import Hero from './hero.jsx'
import {
  DialScene,
  FootnoteScene,
  LetterScene,
  SignpostScene,
  StampsScene,
  ThreadScene,
  TokenScene,
  YearScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'four doors, one paper: every citation style leads the reader back to the same source',
  },

  intro: [
    'Sana had written close to eighty footnotes for her paper. Each one followed the Chicago style her history department had taught her in the first semester of her MA in Srinagar: a small raised number in the sentence, and the full details of the source at the foot of the page.',
    'Then her professor suggested she send the paper to an education journal. Its guide for authors had one line in bold: *manuscripts must follow APA style, 7th edition.* No footnotes. Names and years in brackets. A reference list instead of a bibliography.',
    'The next morning she took her printout to the university library and asked Mrs. Wani, the librarian, how long it takes to learn a new citation style. Mrs. Wani said, "Less time than you think. They all do the same job. Let me show you."',
  ],

  sections: [
    {
      id: 'why-citation-styles-exist',
      title: 'Why citation styles exist',
      Art: SignpostScene,
      caption: 'a citation is a signpost: it gives credit, and it points the way back to the source',
      body: [
        'Every citation, in every style, does three jobs. It gives credit to the person whose idea, words or data you used. It lets your reader go back to the exact source and check it. And it shows that your argument rests on real work. Citing well is also your best protection against accidental copying, which we cover in [how to avoid plagiarism](/blogs/how-to-avoid-plagiarism/).',
        'So why are there so many styles? Because different fields have different needs. Historians like Sana quote letters, archives and exact pages, so they need room for detail, and footnotes give them that room. Psychologists and education researchers want to know how *recent* the evidence is, so the year appears inside the sentence. Engineers cite many short technical sources in dense paragraphs, so a small number in square brackets keeps the text clean.',
        {
          define: 'Citation style',
          hint: 'noun',
          meaning: 'A fixed set of rules for how a source is mentioned in your text and how its full details are written at the end, so that every reader knows exactly where to look.',
        },
        'No style is more correct than another. Your job is to use the one your reader expects, and to use it the same way every time.',
      ],
    },
    {
      id: 'two-parts-of-every-style',
      title: 'Every style has the same two parts',
      Art: ThreadScene,
      caption: 'a thread runs from the short pointer in your text to the full entry at the end',
      body: [
        'Mrs. Wani drew a line across the middle of a sheet of paper. "Top half is your writing. Bottom half is your list. Every style has both halves, whatever it calls them."',
        {
          compare: {
            left: {
              title: 'in the text',
              tone: 'blue',
              mark: 'dots',
              items: [
                'a short pointer inside your sentence',
                'a name and a year, a number in brackets, or a small raised number',
                'repeated every time you use the source',
              ],
            },
            right: {
              title: 'at the end',
              tone: 'green',
              mark: 'dots',
              items: [
                'the full details of every source',
                'called references, a bibliography or works cited',
                'written once, in an order the style decides',
              ],
            },
          },
        },
        'The two halves must match. Every citation in your text needs a full entry at the end, and every entry at the end must be cited somewhere in the text. In a journal article the list comes last, after the discussion and the conclusion, as we explain in [the structure of a research paper](/blogs/structure-of-a-research-paper/).',
        {
          note: 'when you finish a draft, pick five citations at random and find each one in your list. Then pick five entries from your list and find where you cited each of them. If all ten match, your two halves are probably in good shape.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'author-date-styles',
      title: 'Author-date styles: APA, Harvard and Chicago author-date',
      Art: YearScene,
      caption: 'a surname and a year, joined together, become the pointer in an author-date style',
      body: [
        'This is the family Sana now had to join. In an author-date style, the pointer in your sentence is the author\'s surname and the year of publication, usually in brackets, like (Keshav, 2007). If you quote someone\'s exact words, you add the page as well: (Keshav, 2007, p. 83). The reference list at the end is arranged alphabetically by surname, so a reader who sees a name in your text can find its entry at once.',
        '*APA* style comes from the American Psychological Association. Its seventh edition, published in 2019, is used widely in psychology, education, nursing and the social sciences. One rule catches beginners: for a work with three or more authors, APA 7 writes only the first surname followed by *et al.*, every time, including the first time you cite it.',
        '*Harvard* is not one official guide. It is a family of similar author-date styles, and many universities publish their own version, so small details such as commas differ from one institution to another. *Chicago* also has an author-date system of its own, which writes (Keshav 2007, 83) with no comma after the name.',
        {
          quote: 'The year in the bracket tells your reader, before they even turn to the reference list, whether you are relying on new evidence or old.',
          by: 'Mrs. Wani, to Sana',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'numbered-styles',
      title: 'Numbered styles: IEEE and Vancouver',
      Art: TokenScene,
      caption: 'like the token machine at a bank, a numbered style hands out numbers in the order sources arrive',
      body: [
        'Sana\'s cousin Faizan, an engineering student in Bengaluru, laughed when she told him about the change. "You write names inside your sentences? We just put numbers." He was describing the second family.',
        'In a numbered style, each source gets a number the first time you cite it, in the order it first appears. The first source you cite becomes [1], the second becomes [2], and if you cite the first one again later, it is still [1]. The list at the end is not alphabetical. It runs in number order.',
        {
          table: {
            head: ['style', 'in the text', 'common in'],
            rows: [
              ['IEEE', 'square brackets, like [1] or [2]', 'electrical engineering, computer science, electronics'],
              ['Vancouver', 'numbers in brackets, like (1), or a small raised number', 'medicine, nursing, public health'],
            ],
          },
          tone: 'blue',
        },
        'IEEE style comes from the Institute of Electrical and Electronics Engineers. Vancouver style takes its name from a meeting of medical journal editors held in Vancouver in 1978, and the United States National Library of Medicine explains it in detail in a free book called *Citing Medicine*. Both styles shorten journal titles in the list: IEEE writes Comput. Commun. Rev., and Vancouver writes Comput Commun Rev.',
        'Numbers keep a crowded page tidy, which is why engineers prefer them. The cost is that a reader cannot tell who wrote [14] without turning to the end.',
      ],
    },
    {
      id: 'footnotes-and-mla',
      title: 'Footnotes, OSCOLA and MLA: the humanities way',
      Art: FootnoteScene,
      caption: 'a small raised number sends the reader down to the foot of the page, where the full note waits',
      body: [
        'Sana\'s familiar style, Chicago notes and bibliography, belongs to the third family. In your sentence you place a small raised number. At the foot of the page, the note with that number gives the full details of the source the first time you cite it, and a shortened form after that. A bibliography at the end lists everything alphabetically. Historians like it because a footnote can also carry a comment, a second source or a detail about the archive where a letter was found.',
        'Law has footnote styles of its own. *OSCOLA*, the Oxford University Standard for Citation of Legal Authorities, is widely used in the United Kingdom for cases, statutes and treaties, and law schools in other countries teach it too.',
        '*MLA* style, from the Modern Language Association, sits in between. It puts the author\'s surname and the page number in brackets, with no year and no comma, like (Keshav 83), and ends with a list called Works Cited. You will meet it mostly in literature, languages and cultural studies, where the exact page of a quoted line matters more than the year.',
        {
          list: [
            '**Chicago notes and bibliography:** a raised number in the text, the details in a footnote, and a bibliography at the end.',
            '**OSCOLA:** footnotes designed for cases and statutes, used mostly in UK law.',
            '**MLA:** the author and the page in brackets, and a Works Cited list at the end.',
          ],
          style: 'dots',
        },
      ],
    },
    {
      id: 'one-paper-four-styles',
      title: 'One paper, four styles',
      Art: StampsScene,
      caption: 'one paper, four stamps: the details stay the same, only the order and the punctuation change',
      body: [
        'To make it concrete, Mrs. Wani took one short paper that most new researchers are told to read: S. Keshav\'s two-page guide on how to read a paper. She wrote its reference four ways, one under the other, so that Sana could compare them.',
        {
          table: {
            head: ['style', 'the same reference'],
            rows: [
              [
                'APA 7',
                'Keshav, S. (2007). How to read a paper. *ACM SIGCOMM Computer Communication Review, 37*(3), 83-84. [https://doi.org/10.1145/1273445.1273458](https://doi.org/10.1145/1273445.1273458)',
              ],
              [
                'IEEE',
                'S. Keshav, "How to read a paper," *ACM SIGCOMM Comput. Commun. Rev.*, vol. 37, no. 3, pp. 83-84, Jul. 2007, doi: 10.1145/1273445.1273458.',
              ],
              ['Vancouver', 'Keshav S. How to read a paper. ACM SIGCOMM Comput Commun Rev. 2007;37(3):83-4. doi:10.1145/1273445.1273458'],
              [
                'MLA 9',
                'Keshav, S. "How to Read a Paper." *ACM SIGCOMM Computer Communication Review*, vol. 37, no. 3, 2007, pp. 83-84.',
              ],
            ],
          },
          tone: 'blue',
        },
        'Compare them line by line. APA puts the year straight after the name. IEEE starts with the initial, puts the title in quotation marks and shortens the journal\'s name. Vancouver removes most of the punctuation and even shortens the page range. MLA capitalises every main word of the title, puts it in quotation marks, and moves the year near the end.',
        {
          note: 'style guides print page ranges with a short dash, the mark you see between two page numbers in a printed journal. On this page we use a plain hyphen instead, so the examples above are exact in every way except that one mark.',
          label: 'note',
          tone: 'blue',
        },
        'The information is identical in all four. Only the order, the brackets and the punctuation change, which is why converting between styles is mostly mechanical work.',
      ],
    },
    {
      id: 'which-style-should-you-use',
      title: 'Which style should you use?',
      Art: LetterScene,
      caption: 'the journal\'s letter settles it: the guide for authors names the style',
      body: [
        'Most of the time, you do not choose. The journal you are sending your paper to decides, in its guide for authors, and your university decides for your thesis, in its thesis rules. If neither says anything, use the style most common in your field, and ask your guide.',
        {
          table: {
            head: ['field', 'style you will often meet'],
            rows: [
              ['psychology, education, social sciences', 'APA'],
              ['engineering and computer science', 'IEEE'],
              ['medicine, nursing and health', 'Vancouver or AMA'],
              ['literature and languages', 'MLA'],
              ['history', 'Chicago notes and bibliography'],
              ['law in the UK', 'OSCOLA'],
            ],
          },
          tone: 'green',
        },
        'These are common habits, not fixed rules. Many journals use their own house version of a style, with small changes to punctuation or abbreviations, so open two or three recent papers from your target journal and copy exactly what they do. If you are still deciding where to send your work, our guide on [how to choose the right journal](/blogs/how-to-choose-the-right-journal/) will help.',
        'Sana\'s journal had been clear: APA 7. So the question was no longer *which* style, but how to convert eighty footnotes into APA quickly and correctly.',
      ],
    },
    {
      id: 'let-software-do-the-formatting',
      title: 'Let software do the formatting',
      Art: DialScene,
      caption: 'turn one dial, and every citation and every entry changes together',
      body: [
        'Mrs. Wani opened Zotero on the library computer. "You should never type a reference by hand again," she said. Reference managers such as Zotero, Mendeley and EndNote store the details of every source you collect, often pulled straight from a DOI or a library page. When you write, a plug-in for Word or Google Docs inserts each citation and builds the reference list for you.',
        'Behind most of these tools is the Citation Style Language, an open format for describing citation styles. Its public collection holds more than 10,000 styles, from APA and IEEE to the house style of a single journal. Changing styles means picking a new one from a menu, and every citation and every entry changes together.',
        {
          steps: [
            {
              title: 'Collect as you read.',
              text: 'Add each source to your reference manager on the day you read it, not the night before you submit.',
            },
            {
              title: 'Cite through the plug-in.',
              text: 'Insert every citation from inside your word processor, so the software knows where each one sits.',
            },
            {
              title: 'Switch the style.',
              text: 'Pick the new style from the menu and let the text and the list rebuild themselves.',
            },
            {
              title: 'Check by eye.',
              text: 'Software copies whatever details it was given. Fix missing DOIs, wrong capital letters and author names spelt two different ways.',
            },
          ],
          tone: 'blue',
        },
        '[Fiberarticle](https://app.fiberarticle.com) works the same way. When it writes with you, every point carries a numbered marker tied to a real paper it found, and you can choose the reference style for each document from more than 10,000 citation styles. Its Article Writer can then export your work to Word, PDF or HTML, or as an Overleaf-ready LaTeX project with a BibTeX file.',
        'Sana spent one afternoon adding her sources to Zotero and one evening correcting a few entries by hand. By the weekend her eighty footnotes had become a correctly formatted APA paper, ready to submit.',
      ],
    },
  ],

  takeaways: [
    'Every citation style does the same job: it credits the source and helps the reader find it.',
    'Every style has two matching parts, a short pointer in the text and the full details at the end.',
    'Author-date styles such as APA show the year, numbered styles such as IEEE use [1], and note styles such as Chicago use footnotes.',
    'Your journal or your university chooses the style, so read the guide for authors first.',
    'Let a reference manager do the formatting, then check its output by eye.',
  ],

  faq: [
    {
      q: 'What is the difference between a reference list and a bibliography?',
      a: 'A reference list includes only the sources you actually cited in your text. A bibliography, as in Chicago notes style, may also include works you read for background. Your style guide tells you which one to write.',
    },
    {
      q: 'Can I mix two citation styles in one paper?',
      a: 'No. Choose the one style your journal or university asks for and use it everywhere, from the first citation to the last entry in the list. Mixed styles make a paper look careless, and editors notice.',
    },
    {
      q: 'Do I need to include DOIs?',
      a: 'In APA 7, yes, whenever a source has one, written as a link such as https://doi.org/10.1145/1273445.1273458. Many other styles ask for DOIs too. A DOI is a permanent address for a paper, so it takes your reader to the exact version you used.',
    },
    {
      q: 'Does Fiberarticle format citations for me?',
      a: 'Yes. It cites with numbered markers tied to real papers it found, and you can choose the reference style for each document from more than 10,000 styles. As with any tool, check the final list by eye before you submit.',
    },
  ],

  cta: {
    title: 'Stop typing references by hand',
    text: 'Fiberarticle finds real papers across arXiv, OpenAlex, Semantic Scholar and Crossref, ties every point to its source, and formats your references in APA, IEEE, Vancouver or more than 10,000 other styles. One payment unlocks all of it, for good.',
  },
}
