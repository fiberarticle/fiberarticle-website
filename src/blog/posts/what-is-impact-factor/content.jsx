import Hero from './hero.jsx'
import {
  CalculateScene,
  CheckScene,
  FakeScene,
  GoodScene,
  LimitsScene,
  MeaningScene,
  MetricsScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'one number for a whole journal, read from the right source and in the right field',
  },

  intro: [
    'Prakash Meena is in the second year of his PhD in Fisheries Science at a college in Mangaluru. Every week he buys Indian mackerel, bangude to the fishermen, at the old harbour, and in the lab he opens the gut of each fish to count the tiny pieces of plastic inside. His first paper, on microplastics in mackerel from the Karnataka coast, was finally written. Now he had to choose where to send it.',
    'His labmate Vinay had firm advice. "Only a journal with an impact factor above five. Anything less is a waste." The same evening an email arrived from a journal Prakash had never heard of, promising "Impact Factor 7.21" and publication in ten days. Prakash took both to his guide, Dr. Rekha Shenoy. She asked him one question: "What is impact factor, exactly?" He could not answer.',
    'This blog explains what impact factor means, how it is calculated, how to check the impact factor of a journal, what a good one looks like, how it differs from CiteScore and SJR, and how to spot a fake, following what Dr. Shenoy showed Prakash over two afternoons.',
  ],

  sections: [
    {
      id: 'what-is-impact-factor',
      title: 'What is impact factor?',
      Art: MeaningScene,
      caption: 'citations from all over the literature, counted for one journal in one year',
      body: [
        'The impact factor is a number that shows how often, on average, the recent papers in a journal were cited in one year. Its full name is the **Journal Impact Factor**, often shortened to JIF or IF. It belongs to the journal, not to any single paper in it.',
        {
          define: 'impact factor',
          hint: 'noun, short form JIF',
          meaning: 'The citations a journal receives in one year to the items it published in the two previous years, divided by the number of citable items it published in those two years.',
          tone: 'blue',
        },
        'The idea came from Eugene Garfield, who founded the Institute for Scientific Information in Philadelphia. Impact factors have been calculated every year since 1975 and published in the **Journal Citation Reports**, or JCR. Today the JCR is published by the company Clarivate, which also runs the Web of Science database.',
        'So only one source gives a real impact factor: the JCR. A journal gets one only if it is indexed in the Web of Science Core Collection, and since the 2023 release every journal in that collection receives one.',
        'Prakash had thought the impact factor was a score his own paper would carry. "It is closer to the average marks of a class," Dr. Shenoy said. "It tells you about the class. It does not tell you what any one student scored."',
      ],
    },
    {
      id: 'how-is-impact-factor-calculated',
      title: 'How is impact factor calculated?',
      Art: CalculateScene,
      caption: 'citations this year to the last two years of papers, divided by those papers',
      body: [
        'The calculation is a simple division. Take the impact factor a journal received in the JCR released in June 2026. It is called the 2025 impact factor, because it uses citations made during 2025.',
        {
          steps: [
            { title: 'Count the papers.', text: 'Count the citable items the journal published in 2023 and 2024. Citable items are mainly research articles and reviews.' },
            { title: 'Count the citations.', text: 'Count every citation made in 2025, in publications indexed in the Web of Science, to anything the journal published in 2023 and 2024.' },
            { title: 'Divide.', text: 'Citations divided by citable items gives the 2025 impact factor.' },
          ],
          tone: 'amber',
        },
        'Dr. Shenoy worked an example with made-up numbers. Suppose a fisheries journal published 120 citable items in 2023 and 2024, and in 2025 those items were cited 330 times. Then 330 divided by 120 gives 2.75, which the JCR would show as 2.8.',
        {
          list: [
            '**One decimal place.** Since 2023 the JCR shows the impact factor to one decimal instead of three. Clarivate wanted people to stop ranking journals by tiny differences.',
            '**Retracted papers.** Since the 2025 release, citations to and from retracted papers are left out of the top number. The retracted papers still count in the bottom number.',
            '**New journals wait.** A new journal needs at least two or three years of indexing before it can have an impact factor.',
          ],
          style: 'dots',
        },
      ],
    },
    {
      id: 'how-to-check-impact-factor-of-a-journal',
      title: 'How to check the impact factor of a journal',
      Art: CheckScene,
      caption: 'the number on the website, checked against the JCR by title and ISSN',
      body: [
        'Many journal websites print an impact factor on the home page. Treat that as a claim to check, not a fact. Here is how Prakash checked the two journals on his shortlist.',
        {
          steps: [
            { title: 'Note the exact claim.', text: 'Write down the journal\'s full title, its ISSN, the number it shows and the year it says the number belongs to. A real impact factor always comes with a year.' },
            { title: 'Open the JCR through your library.', text: 'The JCR needs a subscription. Ask your library whether your university subscribes and how to log in from home.' },
            { title: 'Search by title or ISSN.', text: 'Open the journal\'s profile and read the impact factor, the year, the subject category and the journal\'s rank and quartile within that category.' },
            { title: 'No JCR access? Check indexing first.', text: 'The Web of Science Master Journal List is free to use with a free account. It shows whether the journal is in the Web of Science Core Collection at all. If it is not there, it cannot have a real impact factor.' },
            { title: 'Match the details.', text: 'Make sure the ISSN, the publisher and the website address in the JCR or the Master Journal List match the journal you are looking at. Fake journals often copy the name of a real one.' },
          ],
          tone: 'blue',
        },
        'Clarivate releases a new JCR every year, usually in June. The 2026 release came out on 17 June 2026 and covers 22,643 journals in 254 subject categories, of which 521 journals received an impact factor for the first time.',
        {
          note: 'websites that list impact factors for thousands of journals, with no source and no year, may show old or made-up numbers. Trust only the JCR.',
          label: 'careful',
          tone: 'red',
        },
      ],
    },
    {
      id: 'what-is-a-good-impact-factor',
      title: 'What is a good impact factor?',
      Art: GoodScene,
      caption: 'the same number can be low in one field and near the top in another',
      body: [
        'There is no single good impact factor. The answer depends on the field, because fields cite at very different speeds. Papers in biology and medicine are cited quickly and often. In mathematics and the humanities, a much smaller share of citations arrives within the first two years, so a two year window favours the fast fields.',
        'This is why Vinay\'s rule of "above five" did not make sense for Prakash. An impact factor that looks small next to a large medical journal can still place a journal in the top half of a fisheries or marine science list.',
        {
          list: [
            '**Compare within one subject category.** The JCR ranks journals inside each category. A journal\'s rank there tells you more than its raw number.',
            '**Use the quartile.** Q1 is the top quarter of journals in a category, Q4 the bottom quarter.',
            '**Check the fit first.** A journal with a high impact factor is no use if it does not publish work like yours. Our guide on [how to choose the right journal](/blogs/how-to-choose-the-right-journal/) starts with fit for this reason.',
          ],
          style: 'check',
        },
        'Remember too that the impact factor is an average of very uneven numbers. One analysis of the journal Nature found that about a quarter of its papers produced about 90 percent of its impact factor for one year. A high number says little about the typical paper in a journal.',
      ],
    },
    {
      id: 'impact-factor-vs-citescore-vs-sjr',
      title: 'Impact factor vs CiteScore vs SJR vs h5-index',
      Art: MetricsScene,
      caption: 'four journal metrics, made by different companies from different data',
      body: [
        'Indian application forms and progress reports often ask for "impact factor" when they mean any journal metric. These are the four you will meet most often, and they are not the same thing.',
        {
          table: {
            head: ['metric', 'made by', 'how it works'],
            rows: [
              ['Journal Impact Factor', 'Clarivate, from Web of Science', 'citations in one year to the previous two years of citable items; shown in the JCR, which needs a subscription'],
              ['CiteScore', 'Elsevier, from Scopus', 'citations over four years to documents published in the same four years; free to view on the Scopus website'],
              ['SJR', 'SCImago, from Scopus data', 'citations weighted by how important the citing journal is, over three years; free, and gives quartiles by category'],
              ['h5-index', 'Google Scholar Metrics', 'the h-index of the papers a journal published in the last five complete years; free, but Google does not say exactly what it covers'],
            ],
          },
          tone: 'amber',
        },
        'Scopus does not give an impact factor. A journal that is in Scopus but not in the Web of Science has a CiteScore and an SJR, but no Journal Impact Factor. If a journal says "Scopus impact factor", it is mixing up two different things.',
        'The JCR also includes the **Journal Citation Indicator**, which adjusts for differences between fields so that journals in slow and fast fields can be compared more fairly. When a form asks for a metric, write which one, its year and its source, for example "JIF 2025: 2.8 (JCR 2026)".',
      ],
    },
    {
      id: 'fake-impact-factors',
      title: 'Fake impact factors and how to spot them',
      Art: FakeScene,
      caption: 'a big number in an email, and no trace of it in the JCR',
      body: [
        'Back to the email that promised "Impact Factor 7.21". In small letters below the number were the words "Global Impact Factor". Prakash searched the JCR for the journal\'s title and its ISSN and found nothing. The Master Journal List did not have it either.',
        'Some companies sell their own metrics with names that sound like the real one. An article in the journal Electronic Physician named Global Impact Factor, Citefactor and Universal Impact Factor among them. The use of a fake metric is itself a warning sign.',
        {
          list: [
            'a "global", "universal", "international" or "scientific" impact factor, or any score not from Clarivate\'s JCR',
            'an impact factor with no year, or one given to three decimal places for a recent year',
            'a large impact factor for a journal that started only a year or two ago',
            'a claim of Web of Science indexing that the Master Journal List does not confirm',
          ],
          style: 'cross',
        },
        'In India the same journals often claim to be "UGC approved" as well. UGC stopped keeping its CARE list of journals in February 2025, so no journal can honestly claim a current approval. Our guide to the [UGC CARE list and what replaced it](/blogs/ugc-care-list/) explains how to check a journal without it.',
        'Prakash deleted the email. "If they invented the number," Dr. Shenoy said, "ask yourself what else they would invent. The peer review, for a start."',
      ],
    },
    {
      id: 'limits-of-impact-factor',
      title: 'What impact factor cannot tell you',
      Art: LimitsScene,
      caption: 'a journal\'s average on one side, one paper\'s worth on the other',
      body: [
        'The impact factor was built to compare journals. In its note on the 2026 release, Clarivate says that journal-level indicators are not meant "to assess the performance of individual papers or researchers". Garfield himself warned against using it to judge individual scientists.',
        {
          list: [
            '**It does not rate your paper.** A paper in a journal with a high impact factor may never be cited, and a paper in a modest journal may be cited for decades.',
            '**It can be pushed up.** Publishing more reviews, which are cited often, or counting fewer items as citable, can raise the number without any change in the research.',
            '**It leaves many journals out.** Many good regional and Indian language journals are not in the Web of Science and so have no impact factor at all.',
          ],
          style: 'dots',
        },
        'Many institutions around the world have signed the San Francisco Declaration on Research Assessment, released in May 2013, which asks that journal metrics such as the impact factor not be used to judge individual researchers for hiring, promotion or funding. In India, rules for PhD submission, appointments and promotions are set by UGC regulations and by each university. UGC\'s suggestive parameters for choosing journals list the impact factor, where a journal has one, as just one item among many, next to the review process, research ethics and indexing. Ask your department for its current written rule instead of trusting a rumour in the lab.',
        'In the end Prakash chose a marine pollution journal that publishes microplastics studies from Asia every year. He checked its impact factor and quartile in the JCR and its indexing in the Master Journal List. Its impact factor was nowhere near five. It was the right home for his paper. Dr. Shenoy read his cover letter, and the paper went in that Friday. What happens next is explained in our guide to [peer review](/blogs/peer-review-explained/).',
      ],
    },
  ],

  takeaways: [
    'The impact factor is the average number of citations in one year to the papers a journal published in the two previous years.',
    'Only Clarivate\'s Journal Citation Reports gives a real Journal Impact Factor, updated every June, and only for journals in the Web of Science Core Collection.',
    'Check any claimed impact factor in the JCR, or at least confirm indexing in the free Master Journal List, by title and ISSN.',
    'A good impact factor depends on the field; compare a journal with others in its own category and look at its quartile.',
    'CiteScore and SJR are different metrics from Scopus data; a "global" impact factor is a warning sign, and none of them rates your own paper.',
  ],

  faq: [
    {
      q: 'Is impact factor free to check?',
      a: 'The official Journal Impact Factor is in the Journal Citation Reports, which needs a subscription, often through a university library. The Master Journal List, which shows whether a journal is indexed, and CiteScore and SJR are free.',
    },
    {
      q: 'What is a good impact factor for a journal?',
      a: 'There is no fixed number. It depends on how quickly papers in the field are cited. Compare a journal only with others in the same JCR subject category, and use its rank or quartile there rather than the raw number.',
    },
    {
      q: 'When is the impact factor updated?',
      a: 'Once a year, when Clarivate releases the Journal Citation Reports, usually in June. The release in June 2026 gave the 2025 impact factors, based on citations made in 2025 to items published in 2023 and 2024.',
    },
    {
      q: 'Does a Scopus indexed journal have an impact factor?',
      a: 'Not because of Scopus. Scopus gives CiteScore, and SCImago gives SJR from Scopus data. A journal has a Journal Impact Factor only if it is in the Web of Science Core Collection. Some journals are in both and have all three.',
    },
  ],

  cta: {
    title: 'See where strong work on your topic is published',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together, shows the Scimago quartile of each paper\'s journal, and can filter by quartile, year or open access. One payment unlocks all of it, for good.',
  },
}
