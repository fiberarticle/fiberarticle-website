import Hero from './hero.jsx'
import {
  ExampleScene,
  KeywordsScene,
  LengthScene,
  PurposeScene,
  StepsScene,
  ThesisScene,
  TypesScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'three plain sentences about the study, pressed into one line that people can find',
  },

  intro: [
    'Manish Negi is in the final year of his MSc in Forestry at a university in Dehradun. Every summer in his village in Pauri Garhwal, the dry needles of chir pine lie thick on the forest floor and catch fire easily. For his dissertation he collected those needles, pressed them into briquettes with three different binders, cow dung, wheat flour paste and paper pulp, and tested how well each kind burned compared with the oak firewood that village kitchens use. The one thing nobody had taught him was how to write a title for a research paper.',
    'The results were good, and his guide, Dr. Sunita Bisht, asked him to turn the dissertation into a journal paper. Manish wrote every section with care. The title he typed in two minutes: "A Study on Pine Needles". Then, worried it was dull, he changed it to "From Fire to Fuel: Turning the Hills\' Burning Problem into an Answer!"',
    'Dr. Bisht read both and shook her head. "If someone searches for pine needle briquettes, will they find this paper? And if they see the title in a list of fifty results, will they know what you did?"',
    'This blog explains how to write a title for a research paper the way Manish rewrote his: the types of titles, five steps to write one, how long it should be, what to cut, examples, and running and thesis titles.',
  ],

  sections: [
    {
      id: 'why-the-title-matters',
      title: 'Why the title of a research paper matters',
      Art: PurposeScene,
      caption: 'a database, an editor and a reader all meet the title first',
      body: [
        'The title is the first part of your paper that anyone sees, and often the only part. In a 2019 paper in the *Saudi Journal of Anaesthesia*, Milind Tullu says a title should be simple, direct, accurate and specific, with just enough detail to make the reader want to read the abstract.',
        'Three kinds of readers depend on it:',
        {
          list: [
            '**Search engines and databases.** Tullu notes that databases use the words in a title to find and index papers. Editage adds that indexing services such as PubMed and Scopus give title text a lot of weight. If a word is not in your title, people searching for it may never see your paper.',
            '**Editors.** According to Editage, editors use the title when they choose reviewers for a paper. A vague title makes that job harder.',
            '**Readers scanning a list.** On a results page, people decide in a second or two whether to click. Tullu points out that Google may show only the first six or seven words of a title, so the important words should come first.',
          ],
          style: 'dots',
        },
        'Manish\'s two titles failed in opposite ways. "A Study on Pine Needles" was too short to be found or understood. The clever one had none of the words a forester would type into a search box, and Tullu warns that whimsical titles can be missed or taken less seriously.',
      ],
    },
    {
      id: 'types-of-research-paper-titles',
      title: 'Types of research paper titles',
      Art: TypesScene,
      caption: 'describe the study, state the finding, or ask the question',
      body: [
        'Most research paper titles fall into three types.',
        {
          table: {
            head: ['type', 'what it does', 'Manish\'s study as an example'],
            rows: [
              ['descriptive', 'names what was studied, without giving the result', 'Chir pine needle briquettes with three binders: fuel properties compared with oak firewood'],
              ['declarative', 'states the main finding', 'Cow dung binder gives chir pine needle briquettes the longest burning time'],
              ['interrogative', 'asks the research question', 'Can chir pine needle briquettes replace oak firewood in village kitchens?'],
            ],
          },
          tone: 'amber',
        },
        'Tullu prefers descriptive titles for research papers. They let readers judge the findings for themselves and tend to hold more keywords. He suggests avoiding declarative titles, because they can suggest the authors are biased towards their result, and question titles, because they can sound sensational, though a question can suit a review article.',
        'Fields differ, though. Editage observes that descriptive titles are common in biology and ecology, declarative titles in medicine and clinical research, and question titles in psychology and social science. Before you choose, look at the titles of ten recent papers in the journal you are aiming for. A fourth form, the compound title, joins a topic and a subtitle with a colon; Editage advises using only one colon in a title.',
      ],
    },
    {
      id: 'how-to-write-a-title-for-a-research-paper',
      title: 'How to write a title for a research paper in five steps',
      Art: StepsScene,
      caption: 'three sentences go in, one clear line comes out',
      body: [
        'Tullu and Editage agree on one thing above all: write the title last, after the paper and the [abstract](/blogs/how-to-write-an-abstract/) are finished, because only then do you know exactly what the paper says. Their methods fit together into five steps.',
        {
          steps: [
            { title: 'Describe the study in three sentences.', text: 'Tullu suggests writing about three sentences that describe the paper, without the results, using its most important keywords.' },
            { title: 'List the key elements.', text: 'Pick out what defines your study: the population or material, the main variables or outcomes, the method or design, and the setting only if it matters.' },
            { title: 'Join them into one sentence.', text: 'Combine the three sentences and remove every word that repeats.' },
            { title: 'Trim it.', text: 'Cut filler such as "a study of" or "research on". Tullu suggests editing down to about 10 to 15 words, keeping it accurate.' },
            { title: 'Check it with the journal and a colleague.', text: 'Confirm the journal\'s word or character limit and its rules on capitals and punctuation. Then show the title to a colleague who has not read the paper and ask what they think the study did.' },
          ],
          tone: 'green',
        },
        'Here is how it went for Manish. His three sentences were:',
        {
          list: [
            'We made briquettes from chir pine needles using three binders: cow dung, wheat flour paste and paper pulp.',
            'We measured the calorific value, ash content and burning time of each kind of briquette.',
            'We compared them with oak firewood, which village households burn for cooking.',
          ],
          style: 'numbers',
        },
        'Joined together, they became a 20 word line: "Calorific value, ash content and burning time of chir pine needle briquettes made with three binders, compared with oak firewood". The three measurements could be summed up as "fuel properties", and the details could wait for the abstract. Since anyone looking for his work would search for pine needle briquettes, he moved those words to the front and put a colon before the rest. After trimming, he had 13 words: ==Chir pine needle briquettes with three binders: fuel properties compared with oak firewood==.',
      ],
    },
    {
      id: 'how-long-should-a-research-paper-title-be',
      title: 'How long should a research paper title be?',
      Art: LengthScene,
      caption: 'long enough to be found, short enough to be read',
      body: [
        'There is no single rule, but the advice clusters around the same range. Tullu suggests about 10 to 15 words. Editage suggests 10 to 16 words with 3 to 5 searchable keywords, and notes that some journals cap titles at 12 words while others allow up to 25. Some journals count characters instead of words, so read the guide for authors before you submit.',
        'APA Style, 7th edition, sets no maximum length; university guides to it simply advise keeping the title focused.',
        'Do shorter titles get more citations? A 2015 study by Letchford, Moat and Preis in *Royal Society Open Science* looked at about 140,000 highly cited Scopus papers from 2007 to 2013 and found that journals publishing shorter titles received more citations per paper. But the link did not hold for 2011 to 2013, and Times Higher Education reported that it weakens once journal prestige is taken into account. Treat it as a hint, not a law.',
        'A title can also be too long. Tullu warns that very long titles may put readers off, while very short ones may miss the keywords that indexing needs. If your title runs to 20 words or more, look for a list of measurements that one phrase could cover, as "fuel properties" did for Manish.',
      ],
    },
    {
      id: 'keywords-abbreviations-and-words-to-avoid',
      title: 'Keywords, abbreviations and words to avoid in a title',
      Art: KeywordsScene,
      caption: 'the words people search for go first; the filler goes out',
      body: [
        'A good title is mostly made of the words someone would type into a database. Put the most important of them near the start. Tullu gives an example: in a title ending with "A Study of Compliance", the key word "compliance" would work better at the beginning. For how people actually search, see our guide on [how to search academic databases](/blogs/how-to-search-academic-databases/).',
        'Then cut or fix these:',
        {
          list: [
            '**Filler openings.** "A study of", "A study on", "Research on" and "An investigation into" add length and no meaning. Tullu\'s example "Study of Ventilator-Associated Pneumonia in a Pediatric Intensive Care Unit" works just as well without the first two words.',
            '**Abbreviations.** Spell terms out. Tullu allows only abbreviations that everyone knows, such as HIV, DNA and ECG.',
            '**Numbers that do not matter.** Tullu advises leaving out the sample size or study period unless it is essential.',
            '**Jokes, puns and exclamation marks.** Editage lists exclamation marks among the punctuation to avoid.',
            '**Vague nouns.** Editage names words such as "factors", "aspects" and "issues". Say which factors.',
          ],
          style: 'cross',
        },
        {
          note: 'the keywords you list under the abstract should add to the title, not repeat it. Tullu advises using different words there, since the title words are already indexed. Manish listed "biomass fuel", "forest fire" and "household energy".',
          label: 'tip',
          tone: 'amber',
        },
        'What about the place of study? Tullu suggests naming it only if it is likely to affect the results. Manish\'s needles came from Pauri Garhwal, but how well pine needle briquettes burn is not a question about one district, so he moved the place to the abstract.',
      ],
    },
    {
      id: 'research-paper-title-examples',
      title: 'Research paper title examples: before and after',
      Art: ExampleScene,
      caption: 'the clever title went; the clear one stayed',
      body: [
        'Here are Manish\'s drafts side by side:',
        {
          table: {
            head: ['draft', 'title', 'what was wrong or right'],
            rows: [
              ['first', 'A Study on Pine Needles', 'filler opening; no method, outcome or comparison'],
              ['second', 'From Fire to Fuel: Turning the Hills\' Burning Problem into an Answer!', 'a pun and an exclamation mark; no searchable words except "fuel"'],
              ['third', 'Calorific value, ash content and burning time of chir pine needle briquettes made with three binders, compared with oak firewood', 'accurate but 20 words long'],
              ['final', 'Chir pine needle briquettes with three binders: fuel properties compared with oak firewood', '13 words; the search words first, then the outcome and the comparison'],
            ],
          },
          tone: 'green',
        },
        'Editage gives weak and strong pairs from other fields that show the same pattern. Each strong title names who or what was studied, what was measured and how.',
        {
          table: {
            head: ['field', 'weak', 'strong'],
            rows: [
              ['medicine', 'A Study on an Exercise Intervention for Diabetes Management', 'Effects of a 12-Week Walking Program on Fasting Glucose in Adults with Type 2 Diabetes'],
              ['computer science', 'A New Algorithm for Real-Time Object Detection', 'A Lightweight Convolutional Neural Network for Real-Time Object Detection on Mobile Devices'],
              ['social science', 'How Poverty Affects Education', 'Household Income and High School Completion Rates in Rural Districts, 2015-2023'],
            ],
          },
          tone: 'amber',
        },
        'The strong titles are longer, but every added word tells you something.',
      ],
    },
    {
      id: 'running-title-and-thesis-title',
      title: 'Running title and thesis title',
      Art: ThesisScene,
      caption: 'the short title on every page, and the long one on the thesis cover',
      body: [
        'Many journals also ask for a **running title**, a short version printed at the top of each page of the published paper. Tullu puts the usual limit at 40 to 50 characters, and Editage at about 50 to 60, so check your journal. A running title may use standard abbreviations and should keep the most searchable words. Manish\'s was "Chir pine needle briquettes as fuel", 35 characters with spaces.',
        'A **thesis title** follows the same rules, with two differences. First, your university decides the format of the title page, so follow its thesis manual and look at recent theses from your department. Second, in a PhD the title is often approved at registration, along with the [research proposal](/blogs/how-to-write-a-research-proposal/), and changing it later can need permission.',
        'How strict that is varies. At Bhattadev University in Assam, the Research Advisory Committee approves any change of thesis title. At the Sree Chitra Tirunal Institute in Thiruvananthapuram, the form for changing a PhD thesis title needs the Doctoral Advisory Committee\'s signature, and a change is allowed only once in the whole programme. Read your own university\'s PhD ordinance before your title drifts too far from the one you registered.',
        {
          note: 'the title of a paper you take from your thesis does not have to match the thesis title. A thesis title covers the whole work; a paper title covers only the part that paper reports.',
          label: 'check',
          tone: 'red',
        },
        'Manish kept the longer, broader title for his dissertation, as his department had approved it, and used the 13 word version for the paper. Dr. Bisht typed it into a search box to see what came up beside it. "Now someone looking for your work will find it," she said. He submitted the paper that evening.',
      ],
    },
  ],

  takeaways: [
    'Write the title last, after the paper and the abstract, and build it from their words.',
    'Most research papers suit a descriptive title that names the material or population, what was measured and how, without giving the result.',
    'Aim for about 10 to 15 words, but follow your journal\'s word or character limit first.',
    'Put the most searchable words at the start, and cut filler like "a study of", abbreviations, jokes and exclamation marks.',
    'Prepare a running title if the journal asks for one, and check your university\'s rules before changing a registered thesis title.',
  ],

  faq: [
    {
      q: 'How do you write a good title for a research paper?',
      a: 'Describe your study in about three sentences without the results, join them into one, then cut every word that does not help a reader or a database understand what you did. Check the result against your journal\'s limits and show it to a colleague who has not read the paper.',
    },
    {
      q: 'Can a research paper title be a question?',
      a: 'Yes, and question titles are common in psychology and social science, according to Editage. Tullu advises against them for most research articles because they can sound sensational, though they can suit review articles. Follow what the journal you are aiming for usually publishes.',
    },
    {
      q: 'Is it fine to use abbreviations in a research paper title?',
      a: 'Usually not. Spell terms out in full, since readers and databases may not know your abbreviation. Tullu makes an exception only for abbreviations that everyone knows, such as HIV, DNA and ECG.',
    },
  ],

  cta: {
    title: 'Find the papers your title will sit beside',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together, so you can see how recent papers on your topic are titled and which words they use. It shows the passage behind every point it writes, so your abstract and title rest on studies you have actually read. One payment unlocks all of it, for good.',
  },
}
