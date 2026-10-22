import Hero from './hero.jsx'
import { CheckScene, CiteScene, CompareScene, FindScene, FormatScene, GetScene, MeaningScene } from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the old link breaks, but the DOI still knows where the paper lives',
  },

  intro: [
    'Ruchi Tiwari is in the second year of her PhD in Horticulture at a university in Jabalpur. Every winter the city\'s mandis fill with sacks of green peas, and her research asks how long those peas stay green and sweet after picking: in a cold store, in a simple brick and sand cooling chamber, and on the open floor of a shop. Her first review paper, on keeping fresh peas from going starchy, was almost ready. Then she read the journal\'s guide for authors. One line said: *give the DOI for every reference that has one*.',
    'Ruchi had 48 references. Some ended in "doi:" and a string of numbers, some had long web addresses, and some had nothing. One link, copied two years ago, now opened an error page. She took the list to her guide, Dr. Alok Shrivastava. "Start with the basics," he said. "What is a DOI, actually?" Ruchi realised she did not know.',
    'This blog answers his question: what is DOI in research paper, what its parts mean, how to find and cite one, how a paper gets one, and how to check that a DOI is real.',
  ],

  sections: [
    {
      id: 'what-is-doi-in-research-paper',
      title: 'What is DOI in research paper?',
      Art: MeaningScene,
      caption: 'three letters for a permanent name: digital object identifier',
      body: [
        {
          define: 'DOI',
          hint: 'noun',
          meaning: 'short for **Digital Object Identifier**: a permanent code given to one research item, such as a journal article, a book chapter or a dataset, that also works as a link to it.',
          tone: 'blue',
        },
        'Think of a DOI as a name that never changes, plus a forwarding service. A web address breaks when a journal moves to a new website. The DOI stays the same: the publisher updates the record behind it, and it keeps sending readers to the right page. That is why the DOI Foundation calls it a *persistent* identifier, and why Ruchi\'s old link broke where a DOI would not have.',
        'The system is run by the DOI Foundation, a not-for-profit organisation, and it is an international standard, ISO 26324, first published in 2012. The Foundation does not hand out DOIs itself. That is done by registration agencies, each for its own community. **Crossref** registers DOIs for scholarly publishers and has over 24,000 members. **DataCite** registers DOIs for research data and other research outputs. Others serve particular countries or industries, such as JaLC in Japan and mEDRA in Europe.',
        'The Foundation\'s fact sheet says about 275 million DOIs have been assigned, and they are looked up about a billion times a month.',
        {
          note: 'the DOI full form is Digital Object Identifier, and "DOI number" just means the DOI itself.',
          label: 'small point',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'doi-number-format',
      title: 'DOI number format, with an example',
      Art: FormatScene,
      caption: 'a prefix for who registered it, a slash, and a suffix for the item',
      body: [
        'Every DOI has two parts joined by a forward slash: a **prefix** and a **suffix**. The DOI Foundation\'s own example is the DOI of its handbook, **10.1000/182**. Here 10.1000 is the prefix and 182 is the suffix.',
        {
          table: {
            head: ['part', 'in 10.1000/182', 'what it tells you'],
            rows: [
              ['prefix', '10.1000', 'the organisation that registered the DOI, usually a publisher'],
              ['the "10."', '10', 'marks it as a DOI; nearly every DOI you meet starts this way'],
              ['registrant code', '1000', 'a number given to that one organisation'],
              ['slash', '/', 'separates the two parts'],
              ['suffix', '182', 'the item itself, chosen by the organisation'],
            ],
          },
          tone: 'blue',
        },
        'The suffix can be any length and can mix letters, numbers and symbols, so real DOIs look very different from each other. The DOI Handbook\'s rule is only that each suffix must be unique within its prefix. It also says a DOI is case-insensitive: capital and small letters count as the same.',
        {
          list: [
            '**Do not read meaning into the suffix.** It is a label, not a code to decode.',
            '**Copy it, do not retype it.** A DOI with one wrong character points to nothing, or to someone else\'s paper.',
            '**Keep the whole string.** Everything after the slash belongs to the DOI, including full stops, brackets and hyphens.',
          ],
          style: 'dots',
        },
        'Ruchi looked at one of her references. "So the first half is the publisher, and the second half is this paper," she said. Dr. Shrivastava nodded.',
      ],
    },
    {
      id: 'how-to-find-doi-of-a-research-paper',
      title: 'How to find DOI of a research paper',
      Art: FindScene,
      caption: 'first look at the paper, then ask Crossref',
      body: [
        'Ruchi\'s first job was to fill the gaps in her list. University library guides describe the same few places to look.',
        {
          steps: [
            {
              title: 'Look at the first page.',
              text: 'Most journal articles print the DOI near the title, or in the header or footer of the first page of the PDF.',
            },
            {
              title: 'Check the article\'s web page.',
              text: 'The journal\'s page for the article usually shows the DOI near the title or in the citation details, often as a full link.',
            },
            {
              title: 'Check the database record.',
              text: 'Scopus usually shows the DOI in the document details. On PubMed, the DOI appears on the article\'s record and in the MEDLINE display, tagged [doi].',
            },
            {
              title: 'Search Crossref.',
              text: 'Crossref\'s free Metadata Search at search.crossref.org lets you search by title or author across journal articles, books, standards, datasets and more.',
            },
            {
              title: 'Paste a whole reference list.',
              text: 'Crossref\'s Simple Text Query lets you paste references, one per line with a blank line between them, and tries to match each to a DOI. It takes up to 1,000 references at a time.',
            },
          ],
          tone: 'blue',
        },
        'Ruchi pasted all 48 references into Simple Text Query, and most came back with a DOI. She opened each match to make sure it was the right paper, because a similar title can be matched by mistake. For datasets and software, library guides suggest DataCite Commons instead.',
        {
          note: 'not every paper has a DOI. Many older papers and some small journals never got one. That is normal. Cite them with the journal, volume, issue and pages.',
          label: 'remember',
          tone: 'red',
        },
        'If you use a reference manager, there is a shortcut the other way round. Paste a DOI into Zotero and it fills in the rest of the reference, as we show in [how to use Zotero](/blogs/how-to-use-zotero/).',
      ],
    },
    {
      id: 'how-to-write-doi-in-references',
      title: 'How to write a DOI in references',
      Art: CiteScene,
      caption: 'three ways people write a DOI, and the one Crossref and APA ask for',
      body: [
        'Ruchi\'s list wrote its DOIs in three different ways. Crossref\'s display guidelines, in force since March 2017, settle which one to use. A Crossref DOI should always be shown as a full link: **https://doi.org/** followed by the DOI.',
        {
          compare: {
            left: {
              title: 'older forms',
              tone: 'red',
              mark: 'cross',
              items: ['doi:10.1000/182', 'DOI: 10.1000/182', 'http://dx.doi.org/10.1000/182'],
            },
            right: {
              title: 'write it like this',
              tone: 'green',
              mark: 'check',
              items: ['https://doi.org/10.1000/182', 'the full link, so a reader can click it', 'https, with no "dx" in the address'],
            },
          },
        },
        'Old "dx" links still work, Crossref says, but new references should use the plain https://doi.org/ form. University library guides to APA 7th edition give these rules:',
        {
          list: [
            'Write the DOI as a link starting with https://doi.org/, without a "DOI:" label in front.',
            'Do not put a full stop after the DOI, because it can break the link.',
            'Do not add "Retrieved from" before it.',
            'If a work has a DOI, use the DOI, not the web address of the page or database where you found it.',
            'If a journal article from a database has no DOI, do not add the database\'s web address. End the reference after the page numbers.',
          ],
          style: 'check',
        },
        'Other styles and some journals have their own small rules, so check the guide for authors. For how the main styles compare, see [citation styles explained simply](/blogs/citation-styles-explained/).',
        {
          table: {
            head: ['Ruchi\'s draft had', 'she changed it to'],
            rows: [
              ['...journal, volume, pages. doi:10.xxxx/xxxxx', '...journal, volume, pages. https://doi.org/10.xxxx/xxxxx'],
              ['...Retrieved from the publisher\'s website address', '...https://doi.org/ and the paper\'s DOI, found with Crossref'],
              ['...an old regional journal, no DOI, with a library link', '...journal name, volume, issue and pages, and nothing after'],
            ],
          },
          tone: 'green',
        },
      ],
    },
    {
      id: 'doi-vs-issn-vs-isbn',
      title: 'DOI vs ISSN vs ISBN vs URL',
      Art: CompareScene,
      caption: 'one number for the journal, one for the book, one for each paper',
      body: [
        'Ruchi\'s junior, Aman, asked, "The journal\'s home page has an ISSN. Isn\'t that the same thing?" It is not. These identifiers label different things.',
        {
          table: {
            head: ['identifier', 'what it labels', 'example of use'],
            rows: [
              ['DOI', 'one item: an article, a chapter, a dataset', 'takes a reader straight to one paper'],
              ['ISSN', 'a whole journal or other serial title, across all its issues', 'tells you which journal; print and online versions can have separate ISSNs'],
              ['ISBN', 'one edition of a book', 'identifies a book; a chapter inside it does not get its own ISBN'],
              ['URL', 'a web address', 'points to a page today, but can change when the website does'],
            ],
          },
          tone: 'amber',
        },
        'So a journal has one ISSN for its whole run, while every paper inside it can have its own DOI. A book has an ISBN, and its chapters may each have a DOI. A URL is where something is today; a DOI is meant to last as long as the item.',
        {
          note: 'an ISSN only shows that a journal title is registered, not that it is peer reviewed. The same is true of a DOI.',
          label: 'careful',
          tone: 'red',
        },
      ],
    },
    {
      id: 'how-to-get-doi-for-your-paper',
      title: 'How to get a DOI for your own paper',
      Art: GetScene,
      caption: 'the journal registers the DOI; the author does not buy one',
      body: [
        'Four months later, Ruchi\'s review was accepted. The next morning she asked Dr. Shrivastava, "How do I get a DOI for my paper?" His answer: "You don\'t. The journal does."',
        'For journal articles, the publisher registers the DOI. Crossref\'s members are organisations, and its forum replies say membership is not open to individuals. Many small publishers join through a sponsor; Crossref says more than half of its members joined that way. When the journal publishes your paper, it registers the DOI and the DOI goes live.',
        {
          list: [
            '**Journal article:** the publisher registers the DOI when the paper is published. Check that the journal is a real one first, as we explain in [how to choose the right journal](/blogs/how-to-choose-the-right-journal/).',
            '**Dataset, poster or preprint:** a repository can give it a DOI. Zenodo, for example, registers a DOI for every upload when it is published, and lets you reserve one before the upload goes public, so you can quote it in your paper.',
            '**Conference paper or book chapter:** it gets a DOI only if the organiser or publisher registers one.',
          ],
          style: 'dots',
        },
        'Ruchi ended up with one of each. Her review paper got its DOI from the journal. Her storage temperature readings from two winters went to Zenodo with a DOI of their own, which she quoted in the data availability statement of her next paper. Once both were live, she added them to her ORCID record, which you can set up with [how to create ORCID ID](/blogs/how-to-create-orcid-id/).',
        {
          note: 'once your paper has a DOI, share the https://doi.org/ link on your CV and profiles. It keeps working even if the journal changes its website.',
          label: 'tip',
          tone: 'green',
        },
      ],
    },
    {
      id: 'how-to-check-if-a-doi-is-real',
      title: 'How to check if a DOI is real',
      Art: CheckScene,
      caption: 'paste it after doi.org: a real DOI lands on the paper',
      body: [
        'One paper in Ruchi\'s list, from a journal she had found through a WhatsApp forward, had a DOI on its first page. When she clicked it, doi.org said the DOI could not be found. "A DOI is easy to print," Dr. Shrivastava said. "It only counts if it is registered."',
        {
          steps: [
            {
              title: 'Resolve it.',
              text: 'Type https://doi.org/ followed by the DOI into your browser. A Crossref support note says this is the easiest test: a real DOI should take you to a working landing page for that paper.',
            },
            {
              title: 'Check that it lands on the right paper.',
              text: 'The title, authors and journal on the page should match the reference you have.',
            },
            {
              title: 'Check the prefix.',
              text: 'The same Crossref note says that resolving just the prefix, the 10.xxxx part, on doi.org shows which registration agency it belongs to.',
            },
            {
              title: 'Search Crossref for the title.',
              text: 'A real Crossref DOI should show up in Metadata Search against the same paper.',
            },
          ],
          tone: 'red',
        },
        'A failed DOI is not always fraud. Crossref notes that some publishers assign DOIs but never register them, and calls these unregistered DOIs, not fake ones. Still, take it seriously. A notice from Karl Landsteiner University in Austria about fraudulent journals lists, among its warning signs, that the DOIs they provide do not work.',
        'And a working DOI does not prove a paper is good. Crossref keeps a test DOI, 10.5555/12345678, that resolves to a made-up article in a made-up journal. A DOI shows that an item is registered, not that it was peer reviewed. AI chatbots can also invent DOIs that look right, one more reason to open every source, as we explain in [how to cite ChatGPT](/blogs/how-to-cite-chatgpt/).',
        'Ruchi dropped the paper with the dead DOI and replaced it with a study she could open and read. Her final list had 41 DOIs as https://doi.org/ links and seven older papers cited with volume and pages. Dr. Shrivastava clicked five at random. Every one opened.',
      ],
    },
  ],

  takeaways: [
    'DOI stands for Digital Object Identifier: a permanent code for one research item that also works as a link to it.',
    'A DOI has a prefix for the organisation that registered it and a suffix for the item, joined by a slash, as in 10.1000/182.',
    'Find a DOI on the paper\'s first page, its web page or database record, or with Crossref\'s Metadata Search and Simple Text Query.',
    'Write it in references as a full link, https://doi.org/ followed by the DOI, with no "doi:" label and no full stop after it.',
    'Authors do not buy DOIs; the journal or a repository such as Zenodo registers them. Check any DOI at doi.org, and remember a working DOI does not prove quality.',
  ],

  faq: [
    {
      q: 'What is the full form of DOI in a research paper?',
      a: 'DOI stands for Digital Object Identifier: a permanent code for an article, chapter or dataset that works as a link to it, even if its web address changes.',
    },
    {
      q: 'Does every research paper have a DOI?',
      a: 'No. Many older papers and some small journals have none. Cite those with the journal, volume, issue and pages. Never make one up.',
    },
    {
      q: 'Can I get a DOI for my research paper myself?',
      a: 'Not for a journal article. The publisher registers it when your paper is published. For a dataset, poster or preprint, a repository such as Zenodo can give it a DOI when you upload it.',
    },
    {
      q: 'Does a DOI mean the journal is peer reviewed or good?',
      a: 'No. A DOI shows that an item is registered and can be found, nothing more. Judge the journal separately, by its indexing, editors and review process.',
    },
  ],

  cta: {
    title: 'Find the paper behind every DOI',
    text: 'Fiberarticle searches Crossref, OpenAlex, Semantic Scholar and arXiv together, so the references in your draft lead to real papers you can open and check.',
  },
}
