import Hero from './hero.jsx'
import {
  BooleanScene,
  ConveyorScene,
  FunnelScene,
  KeywordScene,
  LogScene,
  SignpostScene,
  TrailScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a heap of results, one torch, and the one paper that actually answers the question',
  },

  intro: [
    'Sneha had a clear question for her MSc Nursing dissertation in Kochi: does listening to music calm patients before surgery? She typed the whole question into Google and got more than a million results. Hospital advertisements, news reports, blogs, a piano video, and somewhere far below, a few research papers.',
    'By evening she had forty tabs open and could not tell which of them counted as evidence. She took the problem to the college library. Sreeja chechi, the librarian, listened and said, "You are fishing in the sea with your hands. Sit down, I will give you a net."',
    'What Sreeja chechi showed her that afternoon works for any subject, from nursing to engineering to commerce. Here it is, step by step.',
  ],

  sections: [
    {
      id: 'where-papers-live',
      title: 'Where research papers actually live',
      Art: SignpostScene,
      caption: 'every database points somewhere different, so choose the ones that point at your subject',
      body: [
        'Google searches everything at once: shops, news, opinions and research, mixed together. Academic databases search scholarly work only, and most of them let you search it far more precisely. Some cover every subject. Others go deep into one.',
        {
          table: {
            head: ['Where to search', 'Good for', 'Free?'],
            rows: [
              ['Google Scholar', 'A quick start in almost any subject', 'Yes'],
              ['PubMed', 'Medicine, nursing and the life sciences', 'Yes'],
              ['CINAHL', 'Nursing and allied health', 'Subscription'],
              ['Scopus', 'Broad coverage of journals, with citation counts', 'Subscription, usually through your library'],
              ['Web of Science', 'Selective, well-established journals, with citation data', 'Subscription, usually through your library'],
              ['IEEE Xplore and ACM Digital Library', 'Engineering and computing', 'Searching is free; full texts vary'],
              ['arXiv', 'Preprints in physics, mathematics, computer science and more', 'Yes'],
              ['OpenAlex', 'An open catalogue of hundreds of millions of scholarly works', 'Yes'],
              ['Semantic Scholar', 'AI-assisted search across many fields', 'Yes'],
              ['Crossref', 'Looking up DOIs and publication details', 'Yes'],
              ['DOAJ', 'Open-access journals that meet its quality standards', 'Yes'],
              ['Shodhganga', 'Indian PhD theses, hosted by INFLIBNET', 'Yes'],
            ],
          },
          tone: 'amber',
        },
        'You do not need all of them. Start with one broad database and one for your own subject. For Sneha that meant Google Scholar to get a feel for the topic, and PubMed and CINAHL for the nursing studies that mattered.',
        {
          note: 'if your college subscribes to Scopus or Web of Science, you can use them free through the library, and some colleges also offer remote access from home. Ask your librarian what you have access to.',
          label: 'tip',
        },
      ],
    },
    {
      id: 'turn-your-question-into-keywords',
      title: 'Turn your question into keywords',
      Art: KeywordScene,
      caption: 'one long question, three ideas worth searching for',
      body: [
        'Databases do not read sentences the way people do. They match words. A full question makes the search engine hunt for every small word in it, including "does", "to" and "before".',
        'So the first job is to pull out the main ideas, which librarians call concepts. Sneha\'s question had three: music, anxiety and surgery. For each concept, list the other words authors might use for the same thing.',
        {
          table: {
            head: ['Concept', 'Other words authors use'],
            rows: [
              ['music', 'music therapy, music intervention, listening to music'],
              ['anxiety', 'preoperative anxiety, stress, fear, worry'],
              ['surgery', 'surgical patients, operation, perioperative, preoperative'],
            ],
          },
          tone: 'blue',
        },
        'Two more kinds of synonym are easy to forget: abbreviations, which authors define once and then use everywhere, and older terms a field has since replaced. Including both catches papers that a quick search misses.',
        {
          note: 'spelling changes by country. British and Indian English write *anaesthesia* and *paediatric*, while American papers write *anesthesia* and *pediatric*. Searching one spelling can miss half the papers, so include both.',
          label: 'watch out',
          tone: 'amber',
        },
        'PubMed goes one step further. Indexers tag most of its papers with standard subject terms called MeSH, short for Medical Subject Headings, so studies that use different words for the same idea sit under one heading. Many subject databases keep a list like this. Using it is like asking the librarian for the right shelf instead of walking every aisle.',
      ],
    },
    {
      id: 'and-or-not',
      title: 'AND, OR and NOT: three small words that do the heavy lifting',
      Art: BooleanScene,
      caption: 'AND narrows, OR widens, NOT leaves things out',
      body: [
        'Once you have concepts and synonyms, join them with three words, usually typed in capitals. They are called Boolean operators, after the mathematician George Boole, and they need no maths at all.',
        {
          table: {
            head: ['Type', 'What it does', 'Example'],
            rows: [
              ['AND', 'Every word must appear, so you get fewer and more focused results.', 'music AND anxiety'],
              ['OR', 'Any of the words may appear, so you get more results. Use it for synonyms.', 'anxiety OR stress'],
              ['NOT', 'Leaves out papers with that word. Use it rarely; it can throw away good papers.', 'anxiety NOT depression'],
              ['" "', 'Finds the exact phrase, with the words together and in order.', '"music therapy"'],
              ['*', 'Finds every ending of a word stem.', 'anxi* finds anxiety and anxious'],
              ['( )', 'Groups the synonyms of one concept together.', '(music OR "music therapy")'],
            ],
          },
          tone: 'green',
        },
        'Put together, Sneha\'s search looked like this:',
        {
          note: '(music OR "music therapy" OR "music intervention") AND (anxi* OR fear) AND (surgery OR surgical OR preoperative)',
          label: 'her search',
          tone: 'green',
        },
        'Each database handles these a little differently. Google Scholar, for example, does not support the * trick and works best with short phrases, while PubMed and CINAHL handle long bracketed searches well. A minute on the help page of each database saves an hour of confusion.',
        'This single line took Sneha from over a million web pages to a few hundred research papers, all of them about music, anxiety and surgery.',
      ],
    },
    {
      id: 'filters',
      title: 'Filters: from hundreds of results to a handful',
      Art: FunnelScene,
      caption: 'each filter is a choice, so write down every one you use',
      body: [
        'A few hundred papers is still too many to read. The filters beside the results list are how you narrow it further.',
        {
          list: [
            '**Years.** Sneha kept the last ten years, since recent studies reflect current hospital practice.',
            '**Document type.** Articles, reviews, clinical trials or theses. One good review article can save weeks of searching.',
            '**Subject area.** Removes papers from unrelated fields that happen to use the same words.',
            '**Language and full text.** Useful, but "free full text only" can hide important studies your library can still get for you.',
            '**Sort order.** Relevance is the default. Sorting by date shows the newest work; sorting by citations shows the papers others rely on most.',
          ],
          style: 'dots',
        },
        {
          quote: 'Every filter is a decision. Write it down, so that later you can explain why a paper is missing.',
          by: 'Sreeja chechi, to Sneha',
          tone: 'blue',
        },
        'A filter you forget about can quietly remove the one study your examiner expects to see. Keep filters few, deliberate and recorded.',
      ],
    },
    {
      id: 'follow-the-citation-trail',
      title: 'Follow the citation trail, backwards and forwards',
      Art: TrailScene,
      caption: 'one good paper points back to older work and forward to newer work',
      body: [
        'One good paper is a map to others. It points backwards, through its reference list, to the older work it builds on, and forwards, through the papers that cite it, to newer work.',
        {
          steps: [
            {
              title: 'Look backwards.',
              text: 'Read the reference list of a good paper and pick the studies that match your question. This finds the older, foundational work.',
            },
            {
              title: 'Look forwards.',
              text: 'Click "Cited by" in Google Scholar, or the citation count in Scopus or Web of Science, to see newer papers that built on it.',
            },
            {
              title: 'Repeat with the best new finds.',
              text: 'Each good paper leads to a few more. This is called snowballing, and it often finds papers that no keyword search did.',
            },
            {
              title: 'Stop when the same papers keep returning.',
              text: 'When every trail leads back to studies you already have, you have probably found the core of the field.',
            },
          ],
          tone: 'pink',
        },
        'Sneha started from a review article that had pooled several trials on music before surgery. Its reference list gave her eleven studies in ten minutes, and its "Cited by" page gave her six more from later years.',
        'Free tools such as Connected Papers draw these trails as a map, which makes the most connected papers in a field easy to spot. The map is a guide, not a verdict: check each paper yourself.',
        'Trails also show where the discussion stops, which is often where [a research gap](/blogs/how-to-find-a-research-gap/) begins.',
      ],
    },
    {
      id: 'keep-a-search-log',
      title: 'Keep a search log',
      Art: LogScene,
      caption: 'where, when, what and how many, one line per search',
      body: [
        'Every time you run a search, write down the database, the date, the exact words you typed, the filters you used and how many results came back.',
        {
          table: {
            head: ['Date', 'Database', 'Search', 'Filters', 'Results'],
            rows: [
              ['12 Aug', 'PubMed', 'music AND anxiety AND surgery', 'last 10 years, trials', '84'],
              ['12 Aug', 'CINAHL', 'the same, with synonyms', 'last 10 years', '61'],
              ['14 Aug', 'Google Scholar', '"music therapy" preoperative anxiety', 'since 2015', 'first 50 checked'],
            ],
          },
          tone: 'amber',
        },
        'A spreadsheet works well, and so does the first page of a notebook. The format matters less than writing every search down on the day you run it.',
        'A log lets you run the same search a month later to catch new papers. It answers your guide when they ask how you found your sources. And if you ever write a systematic [literature review](/blogs/how-to-write-a-literature-review/), it is required: every search is reported in the methods.',
      ],
    },
    {
      id: 'let-tools-carry-the-routine-work',
      title: 'Let tools carry the routine work',
      Art: ConveyorScene,
      caption: 'several sources feed one list, and the duplicates stay out',
      body: [
        'Deciding what to search is thinking work. Saving, sorting and formatting references is not, and free tools do it well.',
        {
          list: [
            '**A reference manager** such as Zotero or Mendeley saves a paper with one click, keeps its details, and formats your citations later. Zotero is free and open source.',
            '**Alerts.** Google Scholar and PubMed can email you when new papers match a saved search.',
            '**Clear file names** for your PDFs, such as Author_Year_ShortTitle, so you can find them months later.',
          ],
          style: 'check',
        },
        '[Fiberarticle](https://app.fiberarticle.com)\'s Researcher does the first round of searching for you. Give it a topic and it searches arXiv, OpenAlex, Semantic Scholar and Crossref in parallel, removes duplicates by DOI and title, applies filters such as years, Scimago quartile, open access and minimum citations, and reads the open-access PDFs it can find without ever getting around a paywall. For nursing and medicine, still search PubMed and CINAHL yourself, because specialist databases know their field best.',
        'Sneha\'s final log listed four databases and two search strings. From more than a million web pages she reached 23 studies worth reading closely, and she could explain exactly how she found each one. Reading them well is the next step, and [how to read a research paper](/blogs/how-to-read-a-research-paper/) picks up from there.',
      ],
    },
  ],

  takeaways: [
    'Search academic databases, not the open web: one broad database and one for your subject.',
    'Break your question into concepts, and list the synonyms and spellings for each.',
    'Join synonyms with OR and concepts with AND; use NOT rarely.',
    'Use filters deliberately and write down every one.',
    'Follow citations backwards and forwards from your best papers.',
    'Keep a search log, and let a reference manager handle the details.',
  ],

  faq: [
    {
      q: 'Is Google Scholar enough for a thesis?',
      a: 'It is a good place to start but rarely enough on its own. Its results are hard to reproduce exactly and its filters are basic. Pair it with at least one subject database, such as PubMed for health or IEEE Xplore for engineering.',
    },
    {
      q: 'How many databases should I search?',
      a: 'For most dissertations, two to four well chosen databases are enough: one broad and the rest specific to your subject. Systematic reviews usually search more, and state exactly which ones.',
    },
    {
      q: 'What if a paper is behind a paywall?',
      a: 'Check your library first, since it may subscribe. Look for a free version on the author\'s page, a preprint server or an institutional repository. You can also email the author politely; many are happy to share their work.',
    },
    {
      q: 'Does Fiberarticle search PubMed?',
      a: 'Not directly. It searches arXiv, OpenAlex, Semantic Scholar and Crossref, which together include many biomedical papers. For a health topic, still run your own search in PubMed and any subject database your course expects.',
    },
  ],

  cta: {
    title: 'Let the first search run while you think',
    text: 'Fiberarticle searches four open scholarly indexes in parallel, removes duplicates, and reads the open-access papers for you. One payment unlocks all of it, for good.',
  },
}
