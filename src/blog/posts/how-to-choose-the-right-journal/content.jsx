import Hero from './hero.jsx'
import {
  EmailScene,
  FlagsScene,
  PadlockScene,
  PassportScene,
  PlaneScene,
  ShortlistScene,
  StairsScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a shiny promise on a hook, and a friend pointing towards a real journal',
  },

  intro: [
    'Anil had just finished his first research paper, on a low-cost catalyst for removing dye from textile wastewater. He was in the second year of his PhD in Chemistry in Visakhapatnam and wanted the paper published before his next progress review.',
    'The next morning an email arrived: "Dear Esteemed Researcher, we invite you to publish in our international journal. Impact factor 8.9. Acceptance within 7 days. Publication fee only 99 US dollars." It seemed to solve his problem.',
    'Before replying, he showed it to Swathi, a final-year PhD scholar in his lab with three published papers. She read it once and said, "Close this tab. Let me show you how to choose a journal properly."',
  ],

  sections: [
    {
      id: 'the-email-that-was-too-good-to-be-true',
      title: 'The email that was too good to be true',
      Art: EmailScene,
      caption: 'a glittering impact factor, a seven day promise, and a reader who is not convinced',
      body: [
        'Swathi went through the email line by line. The journal had invited Anil without knowing anything about his work. The impact factor had no source. Seven days is not enough time for proper peer review, which usually takes weeks at the very least. And the fee was mentioned before anyone had read his paper.',
        {
          define: 'Predatory journal',
          hint: 'noun',
          meaning: 'A publication that charges authors fees while skipping the editorial checks and peer review a scholarly journal is supposed to provide. It often copies the look and language of genuine journals.',
        },
        'The term became widely known through the American librarian Jeffrey Beall, who began listing suspected predatory publishers around 2010. Such journals exist across many fields and countries, and they often target early career researchers, who are under the most pressure to publish.',
        'Publishing in one costs more than the fee. Your paper appears in a journal that experts do not read or trust, it may be hard to find later, and a reputable journal will usually not accept it afterwards, because it already counts as published.',
      ],
    },
    {
      id: 'start-with-scope-and-audience',
      title: 'Start with scope and audience',
      Art: PlaneScene,
      caption: 'aim for the journal whose readers need your paper, not the most famous name',
      body: [
        'The right journal is not the most famous one. It is the one whose readers need your paper. Swathi opened the website of a well-known chemistry journal and clicked on its "aims and scope" page, which describes the topics it publishes, the types of articles it accepts and who reads it.',
        {
          steps: [
            {
              title: 'Look at your own reference list.',
              text: 'The journals you cite most often are publishing work like yours, so your reference list is a ready-made shortlist.',
            },
            {
              title: 'Read the aims and scope.',
              text: 'Check that your topic, your methods and your type of article, such as a research article, a short communication or a review, are all things the journal publishes.',
            },
            {
              title: 'Read three recent papers.',
              text: 'If your paper would look out of place beside them, in topic or in depth, keep looking.',
            },
            {
              title: 'Check the practical rules.',
              text: 'Word limits, figure limits, data sharing rules and the citation style are all in the guide for authors.',
            },
          ],
          tone: 'green',
        },
        'A paper outside a journal\'s scope is often returned by the editor within days, without review. It is one of the easiest rejections to avoid. The guide for authors will also tell you which sections the journal expects, which usually follow [the standard structure of a research paper](/blogs/structure-of-a-research-paper/).',
      ],
    },
    {
      id: 'indexing-and-metrics',
      title: 'Indexing and metrics, without the confusion',
      Art: StairsScene,
      caption: 'quartiles are steps within one subject: Q1 is the top quarter of journals in that field',
      body: [
        'Next, Swathi checked where the journal was indexed. Indexing means a database has selected the journal and includes its papers, so researchers can find them. The best-known databases are Scopus, run by Elsevier, and Web of Science, run by Clarivate. In biomedicine, PubMed matters too.',
        {
          table: {
            head: ['metric', 'who publishes it', 'what it measures'],
            rows: [
              [
                'Journal Impact Factor',
                'Clarivate, in Journal Citation Reports',
                'citations in one year to papers the journal published in the two previous years, divided by the number of those papers',
              ],
              [
                'CiteScore',
                'Elsevier, from Scopus data',
                'citations over four years to papers published in those four years, divided by the number of those papers',
              ],
              ['SJR', 'SCImago, from Scopus data', 'citations weighted by how influential the citing journals are'],
              [
                'quartile (Q1 to Q4)',
                'SCImago and Clarivate, per subject category',
                'where a journal ranks in its field: Q1 is the top 25 percent, Q4 the bottom 25 percent',
              ],
            ],
          },
          tone: 'amber',
        },
        'Three cautions. Compare metrics only within the same field, because citation habits differ widely between, for example, mathematics and medicine. A journal can be Q1 in one subject category and Q2 in another. And a metric mentioned in an email means nothing until you have checked it on the official source.',
        {
          note: '[Fiberarticle](https://app.fiberarticle.com) shows the Scimago quartile of the journal behind each paper it finds, and can limit a search to Q1, Q2, Q3 or Q4 journals. It is a quick way to see which journals publish strong work on your topic.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'open-access-and-fees',
      title: 'Open access and fees',
      Art: PadlockScene,
      caption: 'who reads your paper and who pays for it: the three answers behind open access',
      body: [
        'The fee in Anil\'s email was not a warning sign on its own. Many genuine journals charge fees because of how open access works. Swathi summarised the main models.',
        {
          table: {
            head: ['model', 'who can read it', 'who pays'],
            rows: [
              ['subscription', 'readers whose library pays for access', 'usually no charge to the author'],
              ['gold open access', 'anyone, free, immediately', 'often the author or funder, through an article processing charge (APC)'],
              ['green open access', 'anyone, from a repository, sometimes after an embargo', 'no charge; you post your accepted manuscript yourself'],
              ['diamond open access', 'anyone, free', 'nobody; an institution or society covers the costs'],
              ['hybrid', 'subscribers, or anyone if you pay to open your article', 'an optional APC for open access'],
            ],
          },
          tone: 'blue',
        },
        'Genuine APCs range from a few hundred to several thousand US dollars, depending on the journal. What matters is that the fee is published openly on the journal\'s website before you submit, that it is normally charged after acceptance, and that real peer review comes with it. Many journals offer waivers or discounts, so ask before you rule one out.',
        'Anil\'s email had it the wrong way round: the price came first, and peer review was not mentioned at all.',
      ],
    },
    {
      id: 'red-flags-of-predatory-journals',
      title: 'The red flags of a predatory journal',
      Art: FlagsScene,
      caption: 'one red flag may be innocent; a letter full of them is not',
      body: [
        'By now Anil could see the problems himself. Swathi gave him the full list she uses. One flag on its own may be innocent. Several together should stop you.',
        {
          list: [
            'An unsolicited email that praises you and invites a submission, often in a field that is not quite yours.',
            'Guaranteed acceptance, or a promise of review and publication within days.',
            'Metrics you cannot verify, such as a "global impact factor" or other invented scores.',
            'An editorial board whose members you cannot find, or who do not mention the journal on their own pages.',
            'A scope so broad that it covers everything from chemistry to management.',
            'Fees that are hidden, vague, or revealed only after acceptance.',
            'Claims of indexing in Scopus or Web of Science that the databases themselves do not confirm.',
            'A website that copies the name, ISSN or design of a real journal. These are called hijacked or cloned journals.',
          ],
          style: 'cross',
        },
        {
          note: 'being listed in Google Scholar is not a sign of quality. Google Scholar indexes almost anything that looks like a scholarly paper, including papers from predatory journals.',
          label: 'remember',
          tone: 'red',
        },
      ],
    },
    {
      id: 'how-to-check-a-journal',
      title: 'How to check a journal in ten minutes',
      Art: PassportScene,
      caption: 'every journal has papers you can inspect: its indexing, its board and its fees',
      body: [
        'Swathi\'s check takes about ten minutes and uses only free tools.',
        {
          steps: [
            {
              title: 'Go through Think. Check. Submit.',
              text: 'This free checklist, backed by publishing and library organisations, takes you through the key questions to ask about any journal.',
            },
            {
              title: 'Confirm the indexing yourself.',
              text: 'Search for the journal\'s title and ISSN in the Scopus source list or the Web of Science Master Journal List, and make sure the website address matches the one listed there.',
            },
            {
              title: 'For open access journals, check DOAJ.',
              text: 'The Directory of Open Access Journals lists open access journals that meet its quality criteria.',
            },
            {
              title: 'Check any ethics membership.',
              text: 'If a journal says it follows the Committee on Publication Ethics (COPE), look for it on COPE\'s own website.',
            },
            {
              title: 'Read the recent issues.',
              text: 'Look for real authors from real institutions, consistent quality, and received and accepted dates that allow time for review.',
            },
            {
              title: 'Ask people you trust.',
              text: 'Your guide, your seniors and your university librarian have seen many of these emails before.',
            },
          ],
          tone: 'green',
        },
        'Publishers also offer journal finders. You paste in your title and abstract, and tools such as Elsevier JournalFinder and the Springer Nature Journal Suggester suggest matching journals from their own lists. They only recommend journals from their own publisher, so use them for ideas, not as the final word.',
      ],
    },
    {
      id: 'make-a-shortlist-of-three',
      title: 'Make a shortlist of three',
      Art: ShortlistScene,
      caption: 'three envelopes ready: send the first, keep the backup and the safe option pinned',
      body: [
        'Swathi\'s last advice was to choose three journals before submitting to the first: a first choice that is ambitious but a genuine fit, a backup that is solid and well matched, and a safe option with a broader scope. If the first journal rejects the paper, you already know where it goes next.',
        'For each journal, note the average time to first decision and to publication, which many journals show on their website, along with the fees and the formatting rules.',
        {
          list: [
            'The aims and scope match your topic and article type.',
            'The journal is confirmed in Scopus, Web of Science or DOAJ.',
            'The fees, if any, are clear and published.',
            'The review time suits your deadline.',
            'Your guide agrees with the choice.',
          ],
          style: 'check',
        },
        'Submit to one journal at a time. Sending the same paper to two journals at once is treated as misconduct, even if you plan to withdraw one later.',
        'Anil deleted the email. With Swathi\'s help he chose a well-established society journal in chemistry as his first choice, a solid Q2 journal as his backup and a DOAJ-listed open access journal as his safe option. Then he formatted the paper for the first one and submitted it. [What happens after you submit](/blogs/peer-review-explained/) is the next step, and a clear [abstract](/blogs/how-to-write-an-abstract/) helps at every stage.',
      ],
    },
  ],

  takeaways: [
    'Choose the journal whose readers need your paper, starting with its aims and scope.',
    'Check indexing and metrics on the official sources, and compare metrics only within your field.',
    'Fees are normal in open access, but they should be published openly and come with real peer review.',
    'Promises of fast acceptance, metrics you cannot verify and vague fees are red flags.',
    'Make a shortlist of three journals, and submit to one at a time.',
  ],

  faq: [
    {
      q: 'Is every journal that charges a fee predatory?',
      a: 'No. Many respected open access journals charge an article processing charge. The difference is transparency and real peer review: a genuine journal publishes its fees openly and sends your paper to independent reviewers.',
    },
    {
      q: 'Is a Q1 journal always the best choice?',
      a: 'Not always. A Q1 journal outside your topic will reject your paper, while a well-matched Q2 journal read by the right people may serve it better. Fit comes first and rank second.',
    },
    {
      q: 'What if I have already published in a predatory journal?',
      a: 'Talk to your guide. Some authors ask the journal to withdraw the paper and then submit it elsewhere, but withdrawal is not always possible. Be honest about it in future applications, and use the checks in this blog for your next paper.',
    },
    {
      q: 'Can Fiberarticle choose a journal for me?',
      a: 'No. It does not recommend journals or submit papers. It shows the Scimago quartile of the journals behind the papers it finds and can filter a search by quartile, which helps you see where strong work on your topic is published.',
    },
  ],

  cta: {
    title: 'See where the strong papers in your field are published',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together, shows the Scimago quartile of each paper\'s journal, and can filter by quartile, year, open access or citation count. It is free to use yourself.',
  },
}
