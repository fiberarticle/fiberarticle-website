import Hero from './hero.jsx'
import {
  AddScene,
  AnnotateScene,
  CiteScene,
  InstallScene,
  OrganiseScene,
  SubmitScene,
  WhyScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'papers go into the box once, and the citations come out whenever you need them',
  },

  intro: [
    'Nikhil Sawant had 62 references in a Word file, every one typed by hand. He is in the second year of his MSc in Food Science at a university in Kolhapur, and his dissertation compares the jaggery made in small family units around the city. Two weeks before submission he wanted to learn how to use Zotero, because his guide, Dr. Patil, had just asked for the references in a different style.',
    'Changing 62 references by hand would take days, and he had already found two papers cited in the text but missing from the list. His senior, Rutuja, pulled a chair up to his laptop. "Give me one evening," she said. "After that you will never type a reference again."',
    'This blog follows that evening: what Zotero is, how to install it, how to save and organise papers, how to read them inside it, how to cite in Word or Google Docs, and what to check before you submit.',
  ],

  sections: [
    {
      id: 'what-is-zotero',
      title: 'What is Zotero, and why use it?',
      Art: WhyScene,
      caption: 'one box for every source, instead of a folder of PDFs and a list typed by hand',
      body: [
        'Zotero is a reference manager. Its own website describes it as a free, easy to use tool to collect, organise, annotate, cite and share research. It is open source, made by an independent nonprofit, and runs on Windows, Mac and Linux, with apps for iOS and Android.',
        'A reference manager does three jobs that most students do by hand.',
        {
          list: [
            '**It remembers every source.** Author, year, title, journal, volume, pages and DOI, saved once and correctly.',
            '**It keeps your reading in one place.** The PDF, your highlights and your notes sit with the reference.',
            '**It writes your citations.** In Word, LibreOffice or Google Docs, in the style you choose, and it builds the reference list for you.',
          ],
          style: 'check',
        },
        'The last job is where it saves the most time. Change the style and every citation and every reference changes with it. Cite a paper in the text and it appears in the list; remove the citation and the reference goes too. The two problems in Nikhil\'s file, the wrong style and the missing references, were exactly the two problems Zotero fixes.',
        {
          note: 'some universities buy EndNote, and many students use Mendeley. The ideas in this guide are the same in any reference manager; only the buttons change. We use Zotero here because it is free for anyone.',
          label: 'good to know',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'install-zotero',
      title: 'Install Zotero and the Zotero Connector',
      Art: InstallScene,
      caption: 'two pieces: the app on the laptop and the small button in the browser',
      body: [
        'Zotero comes in two pieces, and you need both. Download them from zotero.org, not from a third party site.',
        {
          steps: [
            { title: 'Install the Zotero desktop app.', text: 'This is the library itself. It keeps your references, PDFs and notes on your computer.' },
            {
              title: 'Install the Zotero Connector.',
              text: 'A small extension for Chrome, Firefox, Edge or Safari. It adds a button to the browser that saves the paper you are looking at.',
            },
            {
              title: 'Open Word once.',
              text: 'The plugins for Word and LibreOffice come bundled with Zotero and install themselves when you first start it. A Zotero tab appears in Word. If it does not, restart Word, or reinstall the plugin from the Cite section of Zotero\'s settings.',
            },
            {
              title: 'Make a free account, if you want a backup.',
              text: 'With an account, Zotero syncs your library to its servers and to your other computers. Syncing the references and notes is free and unlimited. Each user also gets 300 MB of free storage for attached files such as PDFs.',
            },
          ],
          tone: 'blue',
        },
        'Rutuja made Nikhil sign in on the first day. "Laptops get stolen and hard disks die," she said. "Your references should not die with them."',
      ],
    },
    {
      id: 'add-papers-to-zotero',
      title: 'How to add papers and books to Zotero',
      Art: AddScene,
      caption: 'from the browser, from a DOI or from a PDF on the desktop: three doors into the same box',
      body: [
        'Keep the desktop app open, then use whichever door suits the source.',
        {
          table: {
            head: ['you have', 'what to do'],
            rows: [
              ['a paper open in the browser', 'Click the Zotero Connector button. It saves the details, and the PDF when one is available.'],
              ['a DOI, ISBN, PubMed ID or arXiv ID', 'Click **Add Item by Identifier** and paste it. You can paste several at once, separated by spaces, commas or new lines.'],
              ['a PDF already on your computer', 'Drag it into Zotero. It tries to read the details from the file. If that fails, right click it and choose **Create Parent Item**, then give it the DOI.'],
              ['a report or an old book with no ID', 'Click **New Item**, choose the type, and fill in the fields yourself.'],
            ],
          },
          tone: 'green',
        },
        'Nikhil started with the identifiers. Most of his journal papers had DOIs on their first page, so he pasted twenty at a time and watched them fill in. The references he had typed by hand turned out to have four wrong years and one misspelt author. Zotero took those details from Crossref and the other lookup services, not from his memory.',
        'Still, check what comes in. Details saved from some web pages can be incomplete, titles may arrive in capitals, and a thesis or government report usually needs fields filled by hand. A reference manager can only format what it is given.',
        {
          note: 'if you search for papers in [databases](/blogs/how-to-search-academic-databases/) or with [Fiberarticle](https://app.fiberarticle.com), copy the DOI of each paper you keep. A DOI is the quickest and most accurate way into Zotero.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'organise-with-collections-and-tags',
      title: 'Organise your library with collections and tags',
      Art: OrganiseScene,
      caption: 'collections are folders, tags are coloured labels, and one paper can sit in many places',
      body: [
        'Zotero\'s help pages say to think of collections like playlists in a music player. A song can be on many playlists without being copied, and a paper can be in many collections in the same way. Nikhil made one collection for each chapter of his dissertation, and a subcollection under the review chapter for each theme.',
        {
          compare: {
            left: {
              title: 'collections',
              tone: 'blue',
              mark: 'dots',
              items: [
                'folders for chapters, themes or projects',
                'one paper can be in several at once',
                'removing a paper from a collection keeps it in your library',
              ],
            },
            right: {
              title: 'tags',
              tone: 'pink',
              mark: 'dots',
              items: [
                'labels such as "method", "India" or "to read"',
                'add as many to a paper as you like',
                'up to 9 tags can be given a colour for quick spotting',
              ],
            },
          },
        },
        'Be careful with deleting. Removing a paper from a collection only takes it out of that collection. Moving it to the trash removes it from your library, and the trash keeps it for 30 days by default.',
        'Duplicates creep in when you save the same paper twice. Click **Duplicate Items** in the left pane, check the pair, and click the merge button on the right. Zotero\'s help pages say to always merge duplicates rather than delete one, because merging keeps the collections and tags of both.',
      ],
    },
    {
      id: 'read-and-annotate-pdfs-in-zotero',
      title: 'Read and annotate PDFs inside Zotero',
      Art: AnnotateScene,
      caption: 'highlights on the page become a note that remembers where each one came from',
      body: [
        'Double click a PDF in Zotero and it opens in Zotero\'s own reader. Select text and pick a colour to highlight or underline it, or add a note in the margin.',
        'The useful part comes next. Right click the paper and choose **Add Note from Annotations**. Zotero gathers your highlights and comments into one note, and each one keeps a link back to its page in the PDF, with a citation. When you write, you know exactly where a point came from.',
        {
          list: [
            'Use one colour for each kind of point: yellow for findings, blue for methods, red for limitations.',
            'Write your comment in your own words next to the highlight, not later.',
            'Copy the key points into your [literature review matrix](/blogs/literature-review-matrix/), one row per paper.',
          ],
          style: 'dots',
        },
        {
          note: 'annotations made in Zotero\'s reader are stored in the Zotero database, not inside the PDF. Another PDF reader will not show them unless you export a copy of the PDF with the annotations included.',
          label: 'careful',
          tone: 'red',
        },
      ],
    },
    {
      id: 'how-to-use-zotero-in-word',
      title: 'How to use Zotero in Word and Google Docs',
      Art: CiteScene,
      caption: 'put the cursor where the citation goes, find the paper, press Enter',
      body: [
        'This is the part Nikhil needed most. In Word, the plugin adds a Zotero tab with five buttons: **Add/Edit Citation**, **Add/Edit Bibliography**, **Document Preferences**, **Refresh** and **Unlink Citations**.',
        {
          steps: [
            { title: 'Place the cursor', text: 'where the citation should go in your sentence.' },
            {
              title: 'Click Add/Edit Citation.',
              text: 'The first time, Zotero asks you to choose a citation style for the document. After that, a search box appears.',
            },
            {
              title: 'Type an author or a word from the title,',
              text: 'pick the paper and press Enter. To add a page number, type it, for example "p.34", before you press Enter.',
            },
            {
              title: 'Click Add/Edit Bibliography',
              text: 'where the reference list should start. It updates by itself as you add citations.',
            },
          ],
          tone: 'green',
        },
        'To change the style, click **Document Preferences** and choose another one. Every citation and every reference changes at once. Zotero comes with the common styles, and its Style Repository has more than 10,000 more, so your university or journal\'s style is probably there. Nikhil switched from APA to his department\'s style in under a minute. Which style to use, and how they differ, is explained in [citation styles explained](/blogs/citation-styles-explained/).',
        'In Google Docs, the Zotero Connector adds a Zotero menu with the same options; there the preferences item is simply called **Preferences**. The first time, Google asks you to allow access to your documents.',
        {
          note: 'never type over a citation or the reference list by hand. Zotero\'s help pages warn that manual edits stop it from updating that citation, and edits to the bibliography are overwritten at the next refresh. Fix the details in Zotero itself, then click **Refresh**.',
          label: 'careful',
          tone: 'red',
        },
      ],
    },
    {
      id: 'before-you-submit',
      title: 'Before you submit: check, copy and unlink',
      Art: SubmitScene,
      caption: 'a final check of every reference, then a plain copy for the examiner',
      body: [
        'Zotero formats references; it does not check that they are right. Before Nikhil submitted, Rutuja made him read the reference list once, slowly, against the style guide.',
        {
          list: [
            'every author name is spelt as on the paper',
            'titles are in the case your style wants',
            'no reference has a missing year, volume or page range',
            'web pages, theses and reports have every field filled in',
            'the reference list has no paper you did not cite',
            'you used the style your department or journal asked for',
          ],
          style: 'check',
        },
        'Then keep two files. Your working file keeps its live Zotero citations, so you can still edit them. For the final copy, save a duplicate and click **Unlink Citations** in that duplicate only. This turns the citations and reference list into plain text. Zotero\'s help pages say unlinking cannot be undone and should usually be done only in a final copy. In Google Docs, its advice is to use File, Make a copy, and unlink in the copy.',
        'A reference manager also helps you stay honest. When every quote and paraphrase is cited as you write, nothing is left uncited at the end. Our guide on [how to avoid plagiarism](/blogs/how-to-avoid-plagiarism/) explains the habits behind that.',
        'Nikhil\'s new reference list was ready in two evenings, not two weeks. Both missing references turned up the moment he cited them through Zotero. When Dr. Patil later asked for a numbered style for a paper from the same work, it took him one click.',
      ],
    },
  ],

  takeaways: [
    'Zotero is a free, open source reference manager that saves your sources, keeps your PDFs and notes, and writes citations for you.',
    'Install both the desktop app and the Zotero Connector, and make a free account so your library is backed up.',
    'Add papers with the Connector or a DOI, then check the details, because Zotero can only format what it is given.',
    'Use the Zotero tab in Word or the Zotero menu in Google Docs to cite, build the reference list and change styles in one step.',
    'Never edit citations by hand, and unlink citations only in a final copy of your document.',
  ],

  faq: [
    {
      q: 'Is Zotero free?',
      a: 'Yes. The software is free and open source, and syncing your references and notes is free and unlimited. Each user gets 300 MB of free storage for PDFs and other attachments, and Zotero sells more storage if you need it.',
    },
    {
      q: 'Can I use Zotero without an account or the internet?',
      a: 'Yes. The library lives on your computer, so you can add notes, organise and cite offline. You need the internet to save papers from websites or look up a DOI, and an account only if you want to sync.',
    },
    {
      q: 'Why did my edited citation change back?',
      a: 'Zotero rewrites citations and the bibliography when it refreshes the document, so text typed over them is lost or stops the citation from updating. Correct the reference in Zotero, or use the prefix, suffix and page boxes in the citation dialog, then click Refresh.',
    },
    {
      q: 'Does Zotero work with Google Docs?',
      a: 'Yes. The Zotero Connector adds a Zotero menu to Google Docs, with options to add citations, add a bibliography, change preferences, refresh and unlink. The desktop app must be running at the same time.',
    },
  ],

  cta: {
    title: 'Find the papers worth saving',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together, shows the passage behind every point it writes, and formats references in more than 10,000 citation styles. One payment unlocks all of it, for good.',
  },
}
