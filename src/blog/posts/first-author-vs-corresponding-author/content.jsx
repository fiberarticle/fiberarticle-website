import Hero from './hero.jsx'
import {
  AgreeScene,
  CriteriaScene,
  DifferenceScene,
  DutiesScene,
  GiftScene,
  OrderScene,
  ValueScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'one name leads the byline, one name carries the letters',
  },

  intro: [
    'Aravind Krishnan is in the second year of his PhD in Marine Biology at a university in Puducherry. For eighteen months he had collected mud from the mangroves along the coast and grown the bacteria in it, looking for ones that can slowly break down polyethylene, the thin plastic of carry bags. His first paper was finally ready. Then came the question nobody in the lab wanted to raise: whose names go on it, and in what order?',
    'Keerthana, an MSc student, had spent three months weighing plastic strips for him. Dr. Joseph from the Statistics department had planned the analysis. Murugan, the lab attendant, had kept the cultures alive through two power cuts. A senior in the hostel told Aravind to insist on being corresponding author, "because that is the one that counts". Aravind typed into Google: first author vs corresponding author. Then he went to see his guide, Dr. Usha Natarajan.',
    'This blog explains what she told him: how the first author and the corresponding author differ, who counts as an author at all, what the order of names means, which of the two roles matters more, and how to settle all of it before anyone gets hurt.',
  ],

  sections: [
    {
      id: 'first-author-vs-corresponding-author',
      title: 'First author vs corresponding author: the difference',
      Art: DifferenceScene,
      caption: 'one did most of the work, the other speaks for the paper',
      body: [
        'The two roles answer different questions. The first author is about *who did the most work*. The corresponding author is about *who talks to the journal*. Springer Nature\'s support pages put it in one line each: the first author is typically the primary contributor to a research paper, and the corresponding author takes responsibility for the manuscript during submission, peer review and production.',
        {
          table: {
            head: ['', 'first author', 'corresponding author'],
            rows: [
              ['what it tells readers', 'who contributed the most, in most fields', 'who to contact about the paper'],
              ['where you see it', 'the first name in the byline', 'a star or envelope mark next to a name, with an email address'],
              ['main work', 'doing the research and writing the draft', 'submitting, answering the editor, handling proofs and later questions'],
              ['who it usually is', 'a student or early researcher', 'often the guide or senior researcher, but it can be anyone on the paper'],
            ],
          },
          tone: 'pink',
        },
        'The two roles can belong to one person or to two. Springer Nature says plainly that the corresponding author does not need to be the first author or a senior author. In many Indian labs the student is first author and the guide is corresponding author, and that is what Dr. Natarajan suggested for Aravind\'s paper.',
      ],
    },
    {
      id: 'what-does-a-corresponding-author-do',
      title: 'What does a corresponding author do?',
      Art: DutiesScene,
      caption: 'the corresponding author carries the paper from submission to long after it is out',
      body: [
        'Aravind had assumed the corresponding author simply clicks "submit". The job is longer than that. The ICMJE, the committee of medical journal editors whose recommendations many journals follow, lists these duties.',
        {
          steps: [
            { title: 'Before submission.', text: 'Make sure the administrative parts are complete: every author\'s details, ethics approval, trial registration where needed, and the declarations of interests. Co-authors can help with these.' },
            { title: 'During peer review.', text: 'Be the main contact for the journal and reply quickly to the editor\'s questions.' },
            { title: 'Up to publication.', text: 'Stay the contact while the journal prepares the paper. The ICMJE also asks editors to copy every letter to all the listed authors.' },
            { title: 'After publication.', text: 'Respond to critiques of the work and share data or extra information if questions arise.' },
          ],
          tone: 'pink',
        },
        'Springer Nature adds that all communication from submission to publication goes to the corresponding author, and that the submission must be made by the corresponding author, not by someone else on their behalf.',
        'The last step in that list, answering questions years later, is why many guides take the role. A PhD student moves on and the hostel email address stops working. A permanent faculty address is still there when another lab writes to ask for a bacterial strain.',
        {
          note: 'before you submit, look up your target journal\'s own rules on corresponding authors. Some allow co-corresponding authors and some do not. Our guide on [how to publish a research paper](/blogs/how-to-publish-a-research-paper/) walks through the rest of the submission.',
          label: 'check first',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'who-counts-as-an-author',
      title: 'Who counts as an author: the four ICMJE criteria',
      Art: CriteriaScene,
      caption: 'tick all four and your name goes on the paper; tick fewer and you are thanked instead',
      body: [
        'Before deciding the order, Dr. Natarajan made Aravind decide who should be on the list at all. The ICMJE says an author must meet all four of these criteria. Many journals outside medicine use them too, but check yours.',
        {
          list: [
            '**Substantial contribution** to the idea or design of the work, or to collecting, analysing or interpreting its data.',
            '**Drafting the paper** or revising it critically for important content.',
            '**Final approval** of the version to be published.',
            '**Agreeing to be accountable** for all parts of the work, including answering questions about its accuracy.',
          ],
          style: 'numbers',
        },
        'The rule cuts both ways. Everyone who meets all four should be named, and anyone who meets fewer should be thanked in the acknowledgements instead. The ICMJE gives examples of work that does not, on its own, earn authorship: getting the funding, general supervision of a research group or general administrative support, and help with writing, language editing or proofreading.',
        'So the lab sorted itself out. Dr. Joseph had designed the analysis and rewrote the results section, and he would read and approve the final draft: an author. Keerthana had collected a third of the data; Dr. Natarajan asked her to review the methods and discussion, approve the final version, and agree to stand behind it. Then she was an author too. Murugan\'s care of the cultures went into the acknowledgements, with his permission; the ICMJE says editors should ask the corresponding author to get that permission in writing.',
      ],
    },
    {
      id: 'author-order-in-research-paper',
      title: 'Author order in a research paper: first, middle and last',
      Art: OrderScene,
      caption: 'in the lab sciences the ends of the byline matter most; in mathematics the alphabet decides',
      body: [
        'Once the list was settled, the order came next. There is no single rule. The ICMJE says only that the criteria for ordering may vary and that the authors decide it together, not the editors.',
        {
          list: [
            '**First author:** in most lab and field sciences, the person who did most of the work and wrote the first draft.',
            '**Middle authors:** people who contributed parts of the work, often in roughly falling order of contribution.',
            '**Last author:** in many sciences, the senior researcher who led or supervised the project, often the guide.',
            '**Co-first authors:** when two people contributed equally, many journals let both be listed as first authors, with a note saying they contributed equally.',
          ],
          style: 'dots',
        },
        'Some fields do it differently. The American Mathematical Society\'s statement on joint research says that mathematicians traditionally list authors in alphabetical order, because joint work usually cannot be split into separate contributions. Economics often does the same. So always read a byline with the field in mind.',
        'Aravind\'s paper ended up as Aravind first, Keerthana second, Dr. Joseph third and Dr. Natarajan last and corresponding. A star beside her name pointed to her email address at the foot of the first page.',
      ],
    },
    {
      id: 'is-it-better-to-be-first-author-or-corresponding-author',
      title: 'Is it better to be first author or corresponding author?',
      Art: ValueScene,
      caption: 'for a student, first author is usually the weight that counts',
      body: [
        'This was the hostel senior\'s question, and the honest answer is that it depends on your career stage and on who is counting. For a PhD student, first authorship is usually what matters: it shows that the work and the writing were mainly yours. Being corresponding author shows responsibility for the paper, and it becomes more common as a researcher starts leading projects.',
        'In India, one place where the roles are counted formally is the research score for teachers in the UGC Regulations of 2018, used for recruitment and promotion in universities and colleges. Its note on shared papers reads like this.',
        {
          table: {
            head: ['authors on the paper', 'share of the paper\'s points'],
            rows: [
              ['two authors', '70 percent each'],
              ['more than two authors', '70 percent for the first, principal or corresponding author; 30 percent for each joint author'],
            ],
          },
          tone: 'amber',
        },
        'Notice that the regulation puts first and corresponding authors in the same group. Neither role is ranked above the other there. Universities fill in the details through their own forms, so check the one your institution uses. And these scores are for teachers; your PhD regulations will have their own publication requirements.',
        'Dr. Natarajan put it simply to Aravind. "Your name first tells everyone you did this work. My name as corresponding author tells them who will still be answering for it in ten years." Aravind stopped arguing.',
      ],
    },
    {
      id: 'gift-guest-and-ghost-authorship',
      title: 'Gift, guest and ghost authorship',
      Art: GiftScene,
      caption: 'a name added for a favour, and a name left out: both misrepresent the work',
      body: [
        'Two days later the head of department, who had signed the purchase forms for the project, asked whether his name could go on the paper. "Everyone does it," he said kindly. Dr. Natarajan explained why she would rather not. Elsevier\'s ethics factsheet on authorship names three kinds of authorship as unacceptable.',
        {
          list: [
            '**Ghost authors:** people who contributed substantially but are not acknowledged, often professional writers paid by commercial sponsors.',
            '**Guest authors:** people who made no discernible contribution but are listed to help the paper\'s chances of being published.',
            '**Gift authors:** people whose place on the paper rests only on a slight link to the study.',
          ],
          style: 'cross',
        },
        'The same factsheet says that deliberately misrepresenting a scientist\'s relationship to their work is a form of misconduct. That includes ordering the names in a way that suggests more involvement than someone really had, and submitting a paper without a co-author\'s permission.',
        'An author is accountable for the whole paper. If a gift author\'s name is on a paper that later turns out to have a problem, that person shares the blame for work they never saw. Our blog on [what retraction means](/blogs/what-is-retraction-in-research/) shows how far such problems can go. The head of department agreed to be thanked in the acknowledgements for his support, which was exactly what he had given.',
        {
          note: 'leaving someone out is as wrong as adding someone in. If Keerthana had been dropped after collecting a third of the data and meeting the other criteria, that would have been ghost authorship. Unacknowledged help with the data analysis can count too.',
          label: 'both ways',
          tone: 'red',
        },
      ],
    },
    {
      id: 'how-to-agree-on-authorship',
      title: 'How to agree on authorship before you write',
      Art: AgreeScene,
      caption: 'one meeting at the start saves a fight at the end',
      body: [
        'Elsevier\'s factsheet strongly advises a meeting before the research begins to write down how each person will be credited. Aravind had left it until the paper was finished, which made every conversation harder. For his next paper he followed these steps.',
        {
          steps: [
            { title: 'Talk about it early.', text: 'At the planning stage, agree on who is likely to be an author, who will be first and who will be corresponding. Write it in an email to everyone.' },
            { title: 'Revisit it as the work changes.', text: 'People join and leave, and roles grow or shrink. Check the list again before you start writing.' },
            { title: 'Use the four criteria.', text: 'Test every name against the ICMJE list, and move anyone who falls short to the acknowledgements.' },
            { title: 'Write a contribution statement.', text: 'Record what each person actually did, using the CRediT roles below.' },
            { title: 'Get everyone\'s approval.', text: 'Every author should read and approve the final version before it is submitted.' },
          ],
          tone: 'green',
        },
        'CRediT, the Contributor Roles Taxonomy, is a list of 14 roles that many journals now ask authors to use in contribution statements. It became an ANSI/NISO standard in 2022. The roles are conceptualization, data curation, formal analysis, funding acquisition, investigation, methodology, project administration, resources, software, supervision, validation, visualization, writing (original draft) and writing (review and editing). Aravind\'s statement listed him under conceptualization, investigation and the original draft, Keerthana under investigation, Dr. Joseph under formal analysis, and Dr. Natarajan under supervision, funding acquisition and review and editing.',
        'If a disagreement cannot be settled, the journal will not settle it for you. The ICMJE says editors do not decide who qualifies for authorship or arbitrate disputes; that is a matter for the institution where the work was done. If authors want to add or remove a name after submission, the ICMJE says editors should ask for an explanation and a signed agreement from every listed author and from the person being added or removed. AI tools cannot be authors at all, as our guide on [using AI in research honestly](/blogs/using-ai-in-research-honestly/) explains.',
        'Aravind\'s paper went to the journal a week later with four names, a contribution statement and an acknowledgements section that thanked Murugan and the head of department. Keerthana sent him a message that evening: her first paper, and she had not even had to ask.',
      ],
    },
  ],

  takeaways: [
    'The first author is usually the person who did most of the work; the corresponding author handles the journal and answers for the paper later.',
    'One person can hold both roles, and the corresponding author need not be first or senior.',
    'Under the ICMJE criteria, an author must meet all four: a real contribution, drafting or revising, final approval and accountability. Others go in the acknowledgements.',
    'Author order depends on the field. Lab sciences value first and last places; mathematics usually lists names alphabetically.',
    'Gift, guest and ghost authorship misrepresent who did the work. Agree on authorship early and record it in a CRediT contribution statement.',
  ],

  faq: [
    {
      q: 'Can a student be the corresponding author?',
      a: 'Yes. Nothing in the ICMJE recommendations or Springer Nature\'s rules says the corresponding author must be senior. Many guides take the role because their address will last longer, but a student who can handle the journal\'s questions, now and after publication, can do it. Agree on it with your co-authors first.',
    },
    {
      q: 'Can there be two first authors or two corresponding authors?',
      a: 'Often, yes. Many journals allow co-first authors with a note that they contributed equally, and some allow more than one corresponding author. Springer Nature, for example, allows both. Check your journal\'s guide for authors.',
    },
    {
      q: 'Should my guide always be an author on my paper?',
      a: 'Only if they meet the authorship criteria of the journal. General supervision alone does not qualify under the ICMJE criteria. Most guides who design the study with you, shape the analysis and revise the draft do meet them.',
    },
  ],

  cta: {
    title: 'Spend your time on the work that earns your name',
    text: 'Fiberarticle finds papers through OpenAlex, Semantic Scholar, Crossref and arXiv, reads the open-access ones with you and shows the source behind every line it writes, so your literature review takes less of the time you need for the research itself. One payment unlocks all of it, for good.',
  },
}
