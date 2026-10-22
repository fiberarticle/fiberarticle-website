import Hero from './hero.jsx'
import {
  CloneScene,
  ConferenceScene,
  DetailsScene,
  DiscontinuedScene,
  MeaningScene,
  StepsScene,
  SecondScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the email says Scopus; the only proof is the record on Scopus itself',
  },

  intro: [
    'Rutuja Patil is in the second year of her PhD in Chemistry at a university in Solapur. Her research tests whether dyes made from pomegranate peel can colour cotton fabric and stay fast through washing and sunlight, a question the weavers of her city care about. Her first paper was ready, and her university\'s rules said it should appear in a journal indexed in Scopus or Web of Science.',
    'Then an email arrived. "Scopus indexed, Q1 journal. Fast track publication in 15 days." It had a Scopus logo at the top and a long list of past issues. Rutuja was tempted. Before she replied, she typed into Google: how to check Scopus indexed journal. Then she took her laptop to her guide, Dr. Nasreen Shaikh.',
    'This blog follows what Dr. Shaikh showed her: what Scopus indexed means, how to check a journal on Scopus yourself, how to read the record, and how to spot discontinued and hijacked journals before you submit.',
  ],

  sections: [
    {
      id: 'what-does-scopus-indexed-mean',
      title: 'What does Scopus indexed mean?',
      Art: MeaningScene,
      caption: 'a publisher applies, an independent board decides, and only then does the journal go in',
      body: [
        'Scopus is a large database of research abstracts and citations run by Elsevier. Its content policy says it includes titles from more than 7,000 publishers worldwide. When a journal is "Scopus indexed", Scopus has selected it, and the papers it publishes are recorded in the database, where researchers can find them and count their citations.',
        {
          define: 'Scopus indexed journal',
          hint: 'noun',
          meaning: 'A journal that Scopus has accepted after review by its Content Selection and Advisory Board, and whose papers are currently being added to the Scopus database.',
          tone: 'blue',
        },
        'A journal cannot simply decide it is in Scopus. The publisher or editor suggests the title, and the independent Content Selection and Advisory Board, the CSAB, evaluates it. Elsevier lists five groups of criteria: journal policy, content, journal standing, publishing regularity and online availability. The Scopus blog adds one line every student should remember: "Scopus does not ask authors to pay in order to be indexed."',
        'Why do Indian universities ask for it? UGC discontinued the CARE list of journals in February 2025, and the suggestive parameters it published in its place count indexing in reputed databases among the signs of a good journal. Each university now sets its own rules, and some, like Rutuja\'s, name Scopus or Web of Science. Rules differ, so check your own university\'s ordinance. Our guide to the [UGC CARE list](/blogs/ugc-care-list/) explains what changed.',
        {
          note: 'Scopus and Web of Science are separate databases run by different companies. A journal can be in one and not the other, so if your rule says "Scopus or Web of Science", check each one on its own site.',
          label: 'two databases',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'how-to-check-scopus-indexed-journal',
      title: 'How to check Scopus indexed journal: step by step',
      Art: StepsScene,
      caption: 'the ISSN goes in, the official record comes out',
      body: [
        '"We do not trust the email," said Dr. Shaikh. "We trust the Scopus record." You do not need a paid subscription for this. Scopus says its title lists are publicly available, and Scopus Preview, its free version, gives anyone access to the Sources page.',
        {
          steps: [
            {
              title: 'Find the journal\'s ISSN.',
              text: 'Copy the ISSN, and the E-ISSN if there is one, from the journal\'s website or the email. Write down the exact title and the publisher\'s name too.',
            },
            {
              title: 'Open the Scopus Sources page.',
              text: 'Go to scopus.com/sources. Without an institutional login you see it through Scopus Preview, which is enough to search the list.',
            },
            {
              title: 'Search by ISSN, not by title.',
              text: 'Choose ISSN in the search box and paste the number. Searching by title also works, but a small difference in spelling can return nothing, and fake journals often copy a real title word for word.',
            },
            {
              title: 'Open the journal\'s source details page.',
              text: 'Click the title in the results. This page is the official record of what Scopus covers.',
            },
            {
              title: 'Check the coverage years and status.',
              text: 'Look for "Scopus coverage years". A range that runs to "Present" means Scopus is still adding the journal\'s papers. A range that ends in a past year means it has stopped.',
            },
            {
              title: 'Match every detail.',
              text: 'The title, ISSN, E-ISSN and publisher on the Scopus record should all match the journal you plan to submit to. If one of them differs, stop and find out why.',
            },
          ],
          tone: 'green',
        },
        'Rutuja pasted the ISSN from the email. A journal came up, with a respected title in materials science. "So it is real," she said. "The journal is real," said Dr. Shaikh. "We have not yet checked that the email came from it."',
        {
          note: 'if you are still unsure, the Scopus Helpdesk can tell you whether a title is indexed or due to be indexed. Ask them before you pay any fee.',
          label: 'when in doubt',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'scopus-source-details-page',
      title: 'How to read the Scopus source details page',
      Art: DetailsScene,
      caption: 'the lines on the record that matter most',
      body: [
        'The source details page holds more than a yes or a no. Elsevier\'s support page lists what each part shows; these are the ones to read before you submit.',
        {
          table: {
            head: ['on the page', 'what it tells you'],
            rows: [
              ['**Scopus coverage years**', 'the years of the journal that are in Scopus; "to Present" means coverage is ongoing'],
              ['**coverage status**', 'whether coverage is current, or marked "coverage discontinued in Scopus"'],
              ['**publisher**', 'the one publisher Scopus has on record for this journal'],
              ['**ISSN and E-ISSN**', 'the print and electronic numbers, to match against the journal\'s website'],
              ['**subject area**', 'the fields Scopus files the journal under; check that your paper fits them'],
              ['**CiteScore, SJR and SNIP**', 'journal level citation metrics, useful for comparing journals in the same field'],
            ],
          },
          tone: 'blue',
        },
        'Scopus is careful to say that coverage years are not a promise. They show which years are in Scopus, not the publisher\'s full archive, and they do not guarantee that coverage will continue.',
        'The metrics help you choose between genuine journals, but they do not prove that a journal is genuine. Our guide to the [impact factor](/blogs/what-is-impact-factor/) explains how CiteScore and SJR differ from the Journal Impact Factor, and why a "Scopus impact factor" does not exist.',
      ],
    },
    {
      id: 'scopus-discontinued-journals',
      title: 'Scopus discontinued journals: why a listing is not enough',
      Art: DiscontinuedScene,
      caption: 'the coverage line stops, and papers after that point are not added',
      body: [
        'The most common mistake is to stop at "the journal is on Scopus". A journal can have a Scopus record and still not be covered today. According to Elsevier\'s support page, the label "coverage discontinued in Scopus" can mean one of three things.',
        {
          list: [
            '**Inactive:** Scopus has received no records from the publisher in the last three years.',
            '**Discontinued:** the journal no longer meets Scopus standards. It was flagged and re-evaluated by the CSAB, which decided to end coverage.',
            '**Stopped:** the journal changed its name and ISSN. Scopus links the old title to the new one, so check the new title\'s record.',
          ],
          style: 'dots',
        },
        'Scopus also keeps a separate Discontinued Sources List, an Excel file linked from Elsevier\'s content policy page and updated every month. The Scopus blog says it shows the volume and issue where indexing stopped. A journal can show as discontinued on the Scopus website without appearing in that file, for example when it is inactive, so treat the source details page as the first check and the list as the second.',
        'What happens to papers already in Scopus? Elsevier\'s policy says the content already indexed "remains as a matter of scientific record", except in rare cases of proven, severe unethical publishing. Papers published after coverage stops are not added. So a paper sent today to a discontinued journal will not appear in Scopus, however good the journal\'s old record looks.',
        {
          note: 'Rutuja\'s journal showed "to Present" and no discontinued label. That settled the journal. It did not yet settle the email.',
          label: 'in the story',
          tone: 'red',
        },
      ],
    },
    {
      id: 'hijacked-journals-scopus',
      title: 'Hijacked journals that borrow a Scopus listing',
      Art: CloneScene,
      caption: 'the same title and ISSN, on a website the real journal never owned',
      body: [
        'A hijacked journal is a fake website that copies the name, ISSN and look of a real journal. Fraudsters often target journals indexed in Scopus or Web of Science, sometimes by registering a real journal\'s expired web address. When you search the ISSN on Scopus, you find the real journal\'s record, and the fake site borrows its good name.',
        'The Retraction Watch Hijacked Journal Checker, maintained by Anna Abalkina with Retraction Watch, lists these websites. It started in May 2022 with a little over 100 entries, and by December 2025 it had passed 400. The same report mentions a study that found 67 hijacked journals had compromised the data of genuine journals in Scopus, so papers from fake sites have sometimes slipped into real records.',
        {
          compare: {
            left: {
              title: 'warning signs',
              tone: 'red',
              mark: 'cross',
              items: [
                'publication promised within days',
                'payment asked before any peer review',
                'contact from a free email address or only by WhatsApp',
                'a web address that differs from the one the publisher uses',
                'a Scopus logo or screenshot as the only proof',
              ],
            },
            right: {
              title: 'what to check',
              tone: 'green',
              mark: 'check',
              items: [
                'search the web address in the Hijacked Journal Checker',
                'reach the journal through the publisher\'s own website',
                'look up the ISSN on the ISSN Portal and match the title',
                'confirm that recent issues are in Scopus',
                'ask your guide or library before paying anything',
              ],
            },
          },
        },
        'A 2025 guest post on Retraction Watch described one such site: a polished website, a real Scopus listing, an ISSN that belonged to a different title, and editors who could not be verified.',
        'Dr. Shaikh opened the publisher\'s own website and followed its link to the journal. The address was different from the one in Rutuja\'s email. The email\'s site was in the Hijacked Journal Checker. "The journal is in Scopus," she said. "This website is not the journal."',
      ],
    },
    {
      id: 'scimago-and-other-free-checks',
      title: 'Second checks: SCImago, the ISSN Portal and your library',
      Art: SecondScene,
      caption: 'one official record, and a few quick checks around it',
      body: [
        'The Scopus Sources page is the official answer. A few free tools help you confirm what you find there.',
        {
          table: {
            head: ['tool', 'what it is good for', 'keep in mind'],
            rows: [
              ['**SCImago Journal & Country Rank**', 'a free portal built on Scopus data; shows each journal\'s SJR and its quartile, Q1 to Q4, in each subject category', 'a second source, not the official record; a journal can sit in a different quartile in each subject'],
              ['**ISSN Portal**', 'the ISSN International Centre\'s free search, to confirm that an ISSN belongs to the title you were given', 'a valid ISSN shows the number is registered, not that the journal is good'],
              ['**Web of Science Master Journal List**', 'checks the other database many rules name', 'a separate database from Scopus'],
              ['**your library or research cell**', 'knows your university\'s own rules and which journals it accepts', 'rules differ from one university to another'],
            ],
          },
          tone: 'green',
        },
        'Quartiles are where "Q1" claims come from. Q1 means the top quarter of a subject category by SJR, so an email that says "Q1 journal" without naming the category tells you very little. Check it yourself on SCImago.',
        'Whether a genuine journal suits your paper is a separate question. Our guide on [how to choose the right journal](/blogs/how-to-choose-the-right-journal/) covers it.',
      ],
    },
    {
      id: 'how-to-check-if-a-conference-is-scopus-indexed',
      title: 'How to check if a conference is Scopus indexed',
      Art: ConferenceScene,
      caption: 'the conference is an event; Scopus indexes the book series behind it',
      body: [
        'Engineering and computer science students often publish in conferences, and conference posters often carry the Scopus logo. Scopus covers serial publications with an ISSN, such as journals, book series and conference series, and one-off publications with an ISBN, such as single volumes of proceedings. It does not index a conference\'s website.',
        {
          steps: [
            { title: 'Find out who publishes the proceedings.', text: 'Ask the organisers for the publisher and the name of the proceedings series. A vague "will be submitted to Scopus" is not an answer.' },
            { title: 'Search the series on the Scopus Sources page.', text: 'Check its coverage years and status, exactly as you would for a journal.' },
            { title: 'Look at the last edition.', text: 'Ask for the ISBN of the proceedings, or a link to the previous year\'s volume in Scopus. If last year\'s papers are not in Scopus, take that as a warning.' },
          ],
          tone: 'amber',
        },
        {
          note: 'even in a genuine series, a volume is indexed only after the conference. Keep proof of the series and the publisher with your certificate.',
          label: 'remember',
          tone: 'red',
        },
        'Rutuja deleted the email. With Dr. Shaikh she drew up a short list of three textile and dye chemistry journals, checked each one\'s Scopus record and website, and reached the first through its publisher\'s own submission page. Then she started on the formatting. Our guide on [how to publish a research paper](/blogs/how-to-publish-a-research-paper/) covers what came next.',
      ],
    },
  ],

  takeaways: [
    'A Scopus indexed journal has been selected by Scopus\'s independent board; Scopus does not charge authors to be indexed.',
    'Check on scopus.com/sources by ISSN, open the source details page and read the coverage years and status.',
    'A Scopus record that ends in a past year, or says "coverage discontinued in Scopus", means new papers will not be added.',
    'A real Scopus listing does not prove the website you found is the journal; match the web address, ISSN and publisher, and use the Hijacked Journal Checker.',
    'For conferences, check the proceedings series and its previous volumes in Scopus, not the logo on the poster.',
  ],

  faq: [
    {
      q: 'Is it free to check if a journal is Scopus indexed?',
      a: 'Yes. Scopus says its title lists are public, and Scopus Preview gives free access to the Sources page. You need a free Elsevier account only to see some extras such as CiteScore.',
    },
    {
      q: 'Is every Scopus indexed journal a good journal?',
      a: 'Not always. Scopus re-evaluates journals and discontinues some, and hijacked websites have sometimes got their papers into genuine Scopus records. Indexing is a useful first check, not a full judgement of quality.',
    },
    {
      q: 'If a journal is discontinued after my paper is published, will my paper be removed from Scopus?',
      a: 'Usually not. Elsevier\'s policy says content already indexed stays as part of the scientific record, except in rare cases of proven, severe unethical practice. Papers published after coverage stops are not added.',
    },
    {
      q: 'Is SCImago the same as Scopus?',
      a: 'No. SCImago is a separate free portal that builds its rankings from Scopus data. It is a good second check and a good way to see quartiles, but the Scopus Sources page is the official record.',
    },
  ],

  cta: {
    title: 'See where good papers in your field are published',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together, shows the Scimago quartile of each paper\'s journal, and can filter by quartile, year or open access. One payment unlocks all of it, for good.',
  },
}
