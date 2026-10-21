import Hero from './hero.jsx'
import {
  CheckScene,
  CloneScene,
  GroupsScene,
  ParametersScene,
  RulesScene,
  TimelineScene,
  WhyScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the old list is closed and kept for reference; the checking is now in your hands',
  },

  intro: [
    'Simran Kaur is in the third year of her PhD in Punjabi literature at a university in Patiala. Her thesis is on women\'s voices in Punjabi folk songs, and her first paper, on wedding songs from the Malwa region, was finally ready. That week a message arrived on WhatsApp: "UGC CARE approved journal. Publish in 7 days. Certificate given."',
    'She almost replied. Then she forwarded it to her supervisor, Dr. Gill, and asked whether the journal was on the UGC CARE list. His answer surprised her. "There is no UGC CARE list any more," he wrote. "UGC stopped it last year. Come to my room and I will show you how we check journals now."',
    'This blog explains what the UGC CARE list was, why UGC discontinued it, what replaced it, and how to check a journal yourself, the way Dr. Gill showed Simran.',
  ],

  sections: [
    {
      id: 'what-was-the-ugc-care-list',
      title: 'What was the UGC CARE list?',
      Art: GroupsScene,
      caption: 'two groups on one list: journals UGC checked, and journals in global databases',
      body: [
        'UGC-CARE stands for the UGC Consortium for Academic and Research Ethics. UGC set it up through a public notice in November 2018, and the journal list started in June 2019. It replaced an older "UGC approved list of journals" that had been criticised for including predatory and low-quality journals.',
        'For years, the list decided which papers counted. Universities used it for PhD requirements, teacher appointments and promotions, so "Is it UGC CARE?" became the first question many Indian researchers asked about a journal.',
        {
          table: {
            head: ['part of the list', 'what it held'],
            rows: [
              ['Group I', 'journals that qualified through UGC\'s own method of review, and were reviewed by experts from time to time'],
              ['Group II', 'journals indexed in globally recognised databases such as Scopus and Web of Science, included automatically'],
            ],
          },
          tone: 'red',
        },
        {
          define: 'Peer-reviewed journal',
          hint: 'noun',
          meaning: 'A journal that sends each submitted paper to independent experts, who judge it before the editor decides whether to publish. Our guide to [peer review](/blogs/peer-review-explained/) explains the steps.',
        },
      ],
    },
    {
      id: 'is-the-ugc-care-list-still-valid',
      title: 'Is the UGC CARE list still valid?',
      Art: TimelineScene,
      caption: 'from a decision in October 2024 to a closed list in February 2025',
      body: [
        'No. UGC no longer maintains a list of approved journals. These are the steps, taken from UGC\'s own notices.',
        {
          steps: [
            { title: '3 October 2024.', text: 'At its 584th meeting, on the advice of an expert committee, the Commission decided to discontinue UGC-CARE listing of journals.' },
            {
              title: '11 February 2025.',
              text: 'A public notice announced the decision and placed draft "suggestive parameters for choosing peer-reviewed journals" in the public domain, with feedback invited until 25 February 2025.',
            },
            { title: '24 June 2025.', text: 'At its 591st meeting, the Commission approved the final suggestive parameters after looking at the feedback.' },
            {
              title: '16 July 2025.',
              text: 'A second notice published the parameters and said UGC would put up a list of 1,474 journals that were on the CARE list as on 10 February 2025, for reference only.',
            },
            {
              title: '22 December 2025.',
              text: 'A letter to universities said the list "has been discontinued with effect from 11 February, 2025" and asked them to report how they were using the parameters.',
            },
          ],
          tone: 'blue',
        },
        'The words about the 1,474 journals matter. UGC wrote that "the inclusion or exclusion of a journal in this list does not imply validation or endorsement by the Commission." So the old list is a historical record. It does not tell you that a journal is good today, and a journal\'s absence from it does not make the journal bad.',
        {
          note: 'Dr. Gill opened the WhatsApp message again. "Whoever sent this is still selling a stamp that UGC stopped issuing," he said.',
          label: 'in the story',
          tone: 'red',
        },
      ],
    },
    {
      id: 'why-ugc-stopped-the-list',
      title: 'Why UGC stopped the list',
      Art: WhyScene,
      caption: 'a list that kept changing, and copies that looked like the real thing',
      body: [
        'UGC\'s notices give the decision but say little about the reasons. Reports in the press at the time, collected on the UGC-CARE Wikipedia page, point to two problems that had grown over the years.',
        {
          list: [
            '**The list kept changing.** Journals were added and removed often. Some researchers published in a Group I journal and later found it had been dropped, so their paper no longer counted for their evaluation.',
            '**Cloned journals.** Many genuine journals on the list, often print journals, were copied by fake websites using their names. Many researchers sent papers to these clones without knowing, often to meet a PhD or promotion requirement.',
          ],
          style: 'numbers',
        },
        'There was a deeper problem too. A single list turned a quality question into a yes or no question. Once a journal was "on the list", many people stopped checking it. The new approach asks institutions and researchers to judge journals by their qualities instead.',
      ],
    },
    {
      id: 'ugc-suggestive-parameters',
      title: 'What replaced it: UGC\'s suggestive parameters',
      Art: ParametersScene,
      caption: 'eight groups of questions to ask about any journal',
      body: [
        'In place of the list, UGC published a set of "suggestive parameters for peer-reviewed journals". They are not a list of journals. They are questions to ask about a journal, grouped under eight headings.',
        {
          table: {
            head: ['group', 'some of the things it asks about'],
            rows: [
              ['preliminary criteria', 'title, ISSN, a regular publishing schedule, the publisher\'s address and contact details, a clear review policy, a secure website, and an archive of past issues'],
              ['editorial board', 'names, affiliations and expertise of the board, and a rigorous review process with clear timelines'],
              ['editorial policy', 'aims and scope, subject areas, a transparent fee structure, the time from submission to publication, and the acceptance rate'],
              ['content quality', 'whether articles add to existing knowledge and fit the journal\'s scope'],
              ['journal standards', 'accurate referencing, professional layout, citations in reputable databases, and a well-kept website'],
              ['research ethics', 'ethical guidelines for authors, plagiarism checks, conflict of interest disclosure, and a policy on AI-generated content'],
              ['visibility', 'impact factor where it applies, and indexing in reputed databases'],
              ['impact', 'self-citation, total citations and CiteScore, compared with similar journals'],
            ],
          },
          tone: 'green',
        },
        'UGC also suggested that each higher education institution may set up internal committees to fine-tune these parameters for its own subjects. In practice, this means your university, not UGC, now decides which journals count for its own purposes.',
        {
          note: 'the parameters are "suggestive". They describe what a good journal looks like. They do not give a score that makes a journal pass or fail.',
          label: 'note',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'ugc-care-list-2026-claims',
      title: 'Beware of "UGC CARE list 2026" offers',
      Art: CloneScene,
      caption: 'the real journal and its copy, with the same title and a different web address',
      body: [
        'Search for "UGC CARE list" today and you will still find pages offering a new list for download, and journals calling themselves "UGC CARE approved". Since UGC stopped listing journals in February 2025, no journal can truthfully claim a current UGC approval.',
        'The message Simran received had the usual signs of trouble.',
        {
          compare: {
            left: {
              title: 'warning signs',
              tone: 'red',
              mark: 'cross',
              items: [
                'a promise of publication in days',
                'a "UGC CARE approved" or "UGC approved" badge',
                'a certificate offered with the paper',
                'contact only through WhatsApp or a free email address',
                'a fee asked for before any review',
              ],
            },
            right: {
              title: 'what a genuine journal shows',
              tone: 'green',
              mark: 'check',
              items: [
                'peer review that takes weeks or months',
                'indexing you can confirm on the database\'s own website',
                'a named editorial board you can verify',
                'an official website and institutional contacts',
                'fees, if any, stated openly on its website',
              ],
            },
          },
        },
        'Our guide on [how to choose the right journal](/blogs/how-to-choose-the-right-journal/) lists more red flags of predatory journals.',
      ],
    },
    {
      id: 'how-to-check-a-journal-now',
      title: 'How to check a journal without the UGC CARE list',
      Art: CheckScene,
      caption: 'the title, the ISSN and the web address have to match everywhere you look',
      body: [
        'Dr. Gill pulled his chair beside Simran\'s and they checked the journal from the message together. It took fifteen minutes.',
        {
          steps: [
            {
              title: 'Read your university\'s rule first.',
              text: 'Ask the research cell or your supervisor which journals your university accepts for the PhD, appointments or promotions. This is the rule that applies to you now.',
            },
            {
              title: 'Match the title, ISSN and website.',
              text: 'Clones copy a real journal\'s name and details but use a different web address. Find the journal\'s official website through its publisher, a university press or a library record, and compare.',
            },
            {
              title: 'Confirm indexing on the source.',
              text: 'If a journal claims Scopus or Web of Science, search for it in the Scopus source list or the Web of Science Master Journal List, and check that the web address listed there is the same.',
            },
            {
              title: 'For open access journals, check DOAJ.',
              text: 'The Directory of Open Access Journals lists open access journals that meet its quality criteria.',
            },
            {
              title: 'Go through the parameters.',
              text: 'Use UGC\'s groups as a checklist: a real editorial board, a clear review policy, open fees, regular issues, and papers that fit the scope.',
            },
            {
              title: 'Read a few recent papers.',
              text: 'Look for real authors from real institutions, careful editing, and dates that leave time for review.',
            },
          ],
          tone: 'green',
        },
        'The journal in Simran\'s message failed at the second step. Its title matched a respected Punjabi literary journal, but its website did not. The real journal, run from a university department, had no fee and a review time of four months.',
      ],
    },
    {
      id: 'what-it-means-for-phd-scholars',
      title: 'What it means for PhD scholars and teachers',
      Art: RulesScene,
      caption: 'the university\'s own rule book is now the first place to look',
      body: [
        'Many older university rules, PhD ordinances and job notices still mention "UGC-CARE listed journals". Since the list is closed, each university has to decide what those words mean now, and their answers differ. Ask for your university\'s current written rule rather than relying on what a senior was told years ago.',
        'The UGC\'s 2022 PhD regulations themselves speak of "peer-reviewed or refereed journals", for example when they set how many publications a teacher needs to be recognised as a research supervisor. They do not name a list.',
        {
          list: [
            'Keep a record of each paper: the journal\'s website, its ISSN, its indexing on the date you published, and your acceptance email.',
            'If your paper appeared in a journal while it was on the CARE list, keep proof of that too, and ask your university how it treats such papers.',
            'Choose journals for their quality and their readers, not for a badge. A good journal in your field will meet the parameters anyway.',
          ],
          style: 'check',
        },
        'Simran did not reply to the WhatsApp message. She sent her paper to the real journal with a short [cover letter](/blogs/how-to-write-a-cover-letter-for-journal-submission/), and four months later it came back with two reviewers\' comments and a request for minor revisions.',
      ],
    },
  ],

  takeaways: [
    'UGC discontinued the UGC CARE list through a public notice dated 11 February 2025, and it is no longer updated.',
    'The 1,474 journals listed on 10 February 2025 are kept for reference only, and UGC says inclusion does not mean validation or endorsement.',
    'In place of the list, UGC published suggestive parameters for peer-reviewed journals, and each university may fine-tune them through its own committees.',
    'Any journal that advertises itself as "UGC CARE approved" today is making a claim UGC no longer supports.',
    'Check a journal yourself: your university\'s rule, a matching title, ISSN and website, indexing confirmed on the source, and the quality of recent papers.',
  ],

  faq: [
    {
      q: 'Is the UGC CARE list discontinued?',
      a: 'Yes. UGC decided to discontinue UGC-CARE listing of journals at its meeting on 3 October 2024 and announced it in a public notice dated 11 February 2025. It no longer maintains a list of approved journals.',
    },
    {
      q: 'Is there a UGC CARE list for 2026?',
      a: 'No. Lists sold or shared under that name are either copies of the old list or made up. UGC only kept the list of 1,474 journals as on 10 February 2025, for reference.',
    },
    {
      q: 'Do papers published in UGC CARE journals before 2025 still count?',
      a: 'That depends on your university and the purpose, such as a PhD, an appointment or a promotion. Keep proof that the journal was listed when you published, and ask your university\'s research cell how it treats such papers.',
    },
    {
      q: 'What were UGC CARE Group 1 and Group 2 journals?',
      a: 'Group I held journals that qualified through UGC\'s own review method. Group II held journals indexed in global databases such as Scopus and Web of Science, which were included automatically.',
    },
  ],

  cta: {
    title: 'See where good papers in your field are published',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together, shows the Scimago quartile of each paper\'s journal, and can filter by quartile, year or open access. One payment unlocks all of it, for good.',
  },
}
