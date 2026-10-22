import Hero from './hero.jsx'
import {
  AskScene,
  LibraryScene,
  OpenScene,
  PaywallScene,
  ScholarScene,
  SciHubScene,
  VersionScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the front door is locked, but there are other doors, and most of them are open',
  },

  intro: [
    'Nazia Parveen is a first year PhD scholar in Linguistics at a state university in Darbhanga. Her study listens to children in government primary schools around the town and asks how they mix Maithili and Hindi in the classroom, and when they switch from one to the other. Her guide, Dr. Shailendra Jha, gave her a list of twenty papers to read before the next research committee meeting. Within a day, she was searching for how to download research papers for free.',
    'She had found the first paper on Google in a minute. Then the publisher\'s page asked her to pay in dollars just to read it. The second paper did the same, and so did the fourth. By the end of the evening she had read eleven abstracts and not one full paper, and she was close to giving up.',
    'The answer Dr. Jha gave her the next morning was longer than she expected, and much better. Most papers can be read for free, legally, if you know which doors to knock on. This blog walks through those doors in the order Nazia learned to try them: her library and One Nation One Subscription, Google Scholar, Unpaywall and open access sources, the authors themselves, and why Sci-Hub is not one of them.',
  ],

  sections: [
    {
      id: 'why-research-papers-are-behind-a-paywall',
      title: 'Why research papers are behind a paywall',
      Art: PaywallScene,
      caption: 'one paper, three versions, and only one of them behind the lock',
      body: [
        'Most journals still earn their money from subscriptions. A university library pays the publisher every year, and everyone on that campus can read the journal. Anyone else meets a paywall. Open access journals work the other way round: the paper is free for every reader, and the costs are met in other ways.',
        'The useful thing to know is that a single paper often exists in more than one version, and the paywall usually guards only the last one.',
        {
          table: {
            head: ['version', 'what it is', 'often free?'],
            rows: [
              ['**preprint**', 'the manuscript before peer review', 'yes, on preprint servers such as arXiv'],
              ['**accepted manuscript**', 'the reviewed and accepted text, before the journal\'s editing and layout', 'often, in university repositories and on authors\' pages'],
              ['**version of record**', 'the final typeset paper the journal publishes', 'only if the journal is open access or the library pays'],
            ],
          },
          tone: 'amber',
        },
        'Subscription journals usually do not let authors post the published version online. Many do allow them to share the accepted manuscript, sometimes after a waiting period. So when a paper is locked, there is often a legal copy of nearly the same text sitting somewhere else.',
        {
          note: 'publishers\' sharing rules can be looked up in Open Policy Finder, the tool that used to be called Sherpa Romeo and is run by Jisc. It is a guide; the journal\'s own policy is the final word.',
          label: 'good to know',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'library-and-one-nation-one-subscription',
      title: 'Start with your library and One Nation One Subscription',
      Art: LibraryScene,
      caption: 'one national key, held by the library, for thousands of journals',
      body: [
        'Before anything else, Dr. Jha sent Nazia to the university library. "You are not paying for these papers," he said. "The country is."',
        'He meant **One Nation One Subscription**, or ONOS. The Union Cabinet approved it in November 2024 as a central scheme to give researchers across the country access to international journals, with about Rs 6,000 crore set aside for three calendar years from 2025. Access began on 1 January 2025. The subscription is coordinated by INFLIBNET, the UGC\'s inter-university centre in Gandhinagar.',
        {
          list: [
            '**What it covers:** about 13,000 e-journals from 30 publishers. The list on the Guru Gobind Singh Indraprastha University library page counts 13,137, including Taylor and Francis, Springer Nature, Elsevier, Wiley, Sage, IEEE and Oxford University Press.',
            '**Who can use it:** students, faculty and researchers at higher education institutions run by the central or state governments, and at central government R and D institutions.',
            '**Who cannot, for now:** private universities and colleges are not part of Phase I. Reports in September 2026 said the Centre is considering a second phase that would include private universities, but that is still a proposal.',
          ],
          style: 'dots',
        },
        'On campus, access usually works through the university\'s internet address, so the full text simply opens when you are on the campus network. Off campus, it depends on how your institution has set things up; some give users a login with their university email. Ask your librarian how it works at your institution.',
        'Nazia\'s university was on the list. Seven of her twenty papers opened the moment she logged in from the library computers.',
        {
          note: 'even without ONOS, your library may subscribe to some journals itself, and a librarian can often get a paper from another library for you. Asking costs nothing.',
          label: 'tip',
          tone: 'green',
        },
      ],
    },
    {
      id: 'how-to-download-research-papers-for-free-on-google-scholar',
      title: 'How to download research papers for free on Google Scholar',
      Art: ScholarScene,
      caption: 'the [PDF] link on the right, and the versions hiding underneath',
      body: [
        'For the papers that were still locked, Dr. Jha showed Nazia the two places to look on Google Scholar. Most students search there already, but few look past the first link.',
        {
          steps: [
            { title: 'Search the exact title.', text: 'Put the title in quotation marks so the paper comes up first.' },
            { title: 'Look to the right of the result.', text: 'A link marked **[PDF]** or **[HTML]** points to a free full text, often on a university repository or the author\'s page.' },
            { title: 'Click "All versions".', text: 'It sits under the result. It lists every copy Google Scholar has found, and one of them is often free even when the first link is not.' },
            { title: 'Check what you have opened.', text: 'Compare the title, authors and abstract with the journal\'s page, and note whether it is a preprint, an accepted manuscript or the final version.' },
          ],
          tone: 'blue',
        },
        'Four more of Nazia\'s papers turned up this way, three as accepted manuscripts in university repositories and one on the author\'s own website.',
        'If you are new to searching, our guide on [how to search academic databases](/blogs/how-to-search-academic-databases/) explains keywords, filters and following citations, which will bring you to better papers before you even worry about access.',
      ],
    },
    {
      id: 'unpaywall-and-open-access-sources',
      title: 'Free research papers: Unpaywall and open access sources',
      Art: OpenScene,
      caption: 'a green tab on the edge of the screen, pointing to a free copy',
      body: [
        '**Unpaywall** is a free browser extension for Chrome and Firefox. When you open a paper\'s page, it looks for a legal open access copy, one placed online by the author, a repository or an open access journal. If it finds one, a green tab appears at the side of the screen, and one click takes you there. If it finds nothing, the tab stays grey. It does not use pirated copies.',
        'The green tab found free copies of three more of Nazia\'s papers on her first evening with it. Some places are open by design, and are worth knowing by name:',
        {
          table: {
            head: ['where', 'what you find', 'good for'],
            rows: [
              ['**arXiv**', 'preprints', 'physics, mathematics, computer science and related fields'],
              ['**PubMed Central**', 'full text journal articles', 'biomedical and life sciences'],
              ['**DOAJ**', 'a directory of peer reviewed open access journals', 'every subject'],
              ['**CORE**', 'open access papers gathered from repositories around the world', 'every subject'],
              ['**Shodhganga**', 'Indian PhD and MPhil theses, run by INFLIBNET', 'Indian studies in every subject'],
              ['**National Digital Library of India**', 'books, articles and theses, run by IIT Kharagpur, with free registration', 'students at every level'],
            ],
          },
          tone: 'green',
        },
        'Shodhganga crossed six lakh theses in May 2025, and the UGC asks universities to deposit theses there once a degree is awarded. For Nazia it was a gift. Three Indian theses on Maithili and Hindi in schools were there in full, each with a long literature review and a reference list she could follow.',
        {
          note: 'theses are not peer reviewed in the way journal papers are. Read them for ideas, data and references, and say clearly in your text that you are citing a thesis.',
          label: 'careful',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'ask-the-author',
      title: 'Ask the author: email and ResearchGate',
      Art: AskScene,
      caption: 'a short polite email out, and very often a paper back',
      body: [
        'Six papers were still locked. "Write to the authors," said Dr. Jha. Nazia was nervous. Would a professor abroad answer a first year scholar from Darbhanga? Many do. Researchers want their work to be read, and a request from someone who is clearly reading it closely is welcome.',
        'Keep the email short and specific:',
        {
          quote: 'Dear Professor [surname], I am a first year PhD scholar in Linguistics at a university in Darbhanga, working on how children mix Maithili and Hindi in primary school classrooms. Your paper "[title]" in [journal, year] is central to my literature review, but I cannot access it through my library. Would you be able to share a copy for my research? Thank you for your time. Nazia Parveen',
          by: 'the email Nazia sent, with each author\'s name and paper filled in',
          tone: 'pink',
        },
        'On **ResearchGate**, the "request full-text" button does much the same thing. The request goes to the authors, and only an author can choose to share a copy; ResearchGate itself never sends one. Whether an author may share it depends on the agreement they signed with the publisher, which is why some send the accepted manuscript rather than the journal PDF.',
        {
          list: [
            'find a current email on the author\'s university page or the paper\'s first page',
            'write to the corresponding author first',
            'send one reminder after a week, not more',
            'thank them, and cite the paper properly',
          ],
          style: 'check',
        },
        'Five of the six authors replied within a week. One sent a newer paper too, which turned out to be more useful than the one Nazia had asked for.',
      ],
    },
    {
      id: 'is-sci-hub-legal-in-india',
      title: 'Is Sci-Hub legal in India?',
      Art: SciHubScene,
      caption: 'a shortcut that looks easy, with a court order across it',
      body: [
        'In her hostel, Nazia\'s friends told her there was a quicker way: Sci-Hub. Dr. Jha was clear that she should not use it.',
        'Sci-Hub and similar shadow libraries share copies of paywalled papers without the publishers\' permission. In 2020, Elsevier, Wiley and the American Chemical Society sued its founder, Alexandra Elbakyan, in the Delhi High Court for copyright infringement. In August 2025, the court ordered Sci-Hub, its mirror sites and a related site called Sci-Net to be blocked in India. The court found that she had broken an undertaking given in December 2020 not to upload new papers by these publishers, and held her prima facie guilty of contempt. That order was an interim one, made while the case continues.',
        {
          compare: {
            left: {
              title: 'shadow libraries',
              tone: 'red',
              mark: 'cross',
              items: [
                'copies shared without permission',
                'blocked by court order in India',
                'some guides warn of malware on such sites',
                'a source you could never mention openly',
              ],
            },
            right: {
              title: 'the legal doors',
              tone: 'green',
              mark: 'check',
              items: [
                'library and ONOS access',
                'Google Scholar versions and Unpaywall',
                'open repositories and Shodhganga',
                'a polite email to the author',
              ],
            },
          },
        },
        'There is also a quieter reason. A research career is built on doing things you can describe openly. For every paper Nazia read, she could say exactly where she got it.',
      ],
    },
    {
      id: 'check-the-version-and-save-it',
      title: 'Check the version, then save it properly',
      Art: VersionScene,
      caption: 'read any version you can get, cite the one the journal published',
      body: [
        'A free copy is not always the final copy. A preprint may have changed a lot during peer review, and page numbers in an accepted manuscript will not match the journal. Before you rely on a paper, check which version you have.',
        {
          list: [
            '**Read** whichever legal version you can get; for most purposes the accepted manuscript is close to the final text.',
            '**Cite** the published version of record, with the journal, volume and DOI, unless your style guide tells you to cite the preprint itself.',
            '**Quote** carefully from preprints, because the wording may have changed. If you can, check the quote against the final paper.',
            '**Check** that the paper has not been retracted since it was posted. Our guide on [what retraction means and how to check](/blogs/what-is-retraction-in-research/) shows how.',
          ],
          style: 'numbers',
        },
        'Then save each paper the moment you find it, with its details. Nazia put every PDF into a reference manager, with a note saying where it came from and which version it was. Our guide on [how to use Zotero](/blogs/how-to-use-zotero/) shows how to set that up, and [how to read a research paper](/blogs/how-to-read-a-research-paper/) shows how to get through twenty of them without drowning.',
        'At the research committee meeting a month later, Nazia had read nineteen of the twenty papers in full and found five more of her own. The twentieth was a conference paper from 1998 that nobody seemed to have a copy of. "Write to the library," said Dr. Jha. "That is what they are there for."',
      ],
    },
  ],

  takeaways: [
    'Most paywalled papers have a legal free copy somewhere: a preprint, an accepted manuscript or an open access version.',
    'If you study at a government institution in India, One Nation One Subscription gives you about 13,000 journals through your library.',
    'On Google Scholar, look for the [PDF] link on the right and click "All versions" under the result.',
    'Unpaywall, arXiv, PubMed Central, DOAJ, CORE and Shodhganga are free and legal; a short email to the author often works too.',
    'Sci-Hub is blocked in India by court order. Read any legal version you can find, but cite the published version of record.',
  ],

  faq: [
    {
      q: 'How can I download research papers for free legally?',
      a: 'Check your library and One Nation One Subscription first, then look for a [PDF] link or "All versions" on Google Scholar, use the Unpaywall extension, search open sources such as arXiv, PubMed Central, DOAJ, CORE and Shodhganga, and finally email the author for a copy.',
    },
    {
      q: 'Can students at private colleges use One Nation One Subscription?',
      a: 'Not in Phase I, which covers government higher education institutions and central government R and D institutions. A second phase that may include private universities was under discussion in 2026. Check onos.gov.in and ask your library for the current position.',
    },
    {
      q: 'Is it legal to ask an author for a copy of their paper?',
      a: 'Yes, asking is fine, and authors get such requests all the time. Whether they can send you the journal PDF or only the accepted manuscript depends on their agreement with the publisher, so leave that choice to them.',
    },
    {
      q: 'Can I cite a preprint in my thesis?',
      a: 'You can, but say clearly that it is a preprint, because it has not been peer reviewed. If the paper has since been published in a journal, cite the published version instead. Your university or journal may have its own rule.',
    },
  ],

  cta: {
    title: 'Let the open papers come to you',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref for you, reads the open-access papers, and shows the source behind every line it writes. One payment unlocks all of it, for good.',
  },
}
