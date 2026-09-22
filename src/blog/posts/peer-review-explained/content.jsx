import Hero from './hero.jsx'
import {
  BlindfoldScene,
  DecisionScene,
  ResponseScene,
  ReviewersScene,
  SubmitScene,
  TraysScene,
  WaitScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the review journey: every paper stops at the same three stations',
  },

  intro: [
    'Kiran submitted his first journal paper on a Monday night: a study of flood mapping along the Brahmaputra using satellite images. He was a PhD scholar in Guwahati and had spent eight months on it.',
    'For the next three months he opened the journal\'s website every morning. The status changed from "with editor" to "under review" and then stayed there. When the decision finally arrived, it said *major revision*, with comments from three reviewers.',
    'He took the letter to his guide, Dr. Anjali Bora, expecting sympathy. She said, "Major revision is good news. It means they want the paper. Let me explain what happened to it all these weeks."',
  ],

  sections: [
    {
      id: 'after-you-press-submit',
      title: 'After you press submit',
      Art: SubmitScene,
      caption: 'one click, and the paper leaves your desk for the journal',
      body: [
        'Most journals take submissions through an online system such as Editorial Manager or ScholarOne. After you upload your files, the editorial office runs a technical check: are all the files there, is the formatting right, and are the declarations complete, such as conflicts of interest, funding and ethics approval?',
        'Most systems also ask for a cover letter. Keep it short: the title, one or two sentences on what the paper found, why it suits this journal, and a statement that it is not under review anywhere else. If a file or declaration is missing, the office sends the paper back to you before any editor reads it, which costs days, so check everything before you press submit.',
        'The paper then goes to an editor. In many journals the editor-in-chief assigns it to a handling editor who knows the subject. The status messages you see along the way describe where your paper is in this chain, though their exact wording varies from one system to another.',
        {
          list: [
            '**With editor:** an editor is reading the paper or looking for reviewers.',
            '**Under review:** reviewers have agreed and are reading it.',
            '**Reviews complete:** the reports are in and the editor is deciding.',
          ],
          style: 'dots',
        },
        'Finding reviewers is often the slowest step. They are busy researchers who usually review without pay, and an editor may need to invite several people before two or three agree.',
      ],
    },
    {
      id: 'the-editors-desk-check',
      title: 'The editor\'s desk check',
      Art: TraysScene,
      caption: 'the first sorting: out to reviewers, or back to the author',
      body: [
        'Before anyone else reads your paper, the editor decides whether it should go to reviewers at all. This first look usually covers four things.',
        {
          steps: [
            { title: 'Scope.', text: 'Does the paper fit what the journal publishes and what its readers want?' },
            { title: 'Contribution.', text: 'Is there something new here, stated clearly in the abstract and the introduction?' },
            { title: 'Basic quality.', text: 'Are the methods described, the results presented clearly and the language readable?' },
            {
              title: 'Integrity.',
              text: 'Many journals run a similarity check at this stage, using a service such as Crossref Similarity Check, and look at the ethics declarations.',
            },
          ],
          tone: 'blue',
        },
        'If the answer to any of these is no, the editor may reject the paper without review. This is called a desk rejection. It is common, it is often quick, and it is usually about fit rather than your ability. You can revise the paper and send it to another journal straight away.',
        'You can lower the chance of a desk rejection before you submit. Read the journal\'s aims and scope, look at the papers it has published in the last year or two, and follow its guide for authors on length, structure and reference style.',
        {
          note: 'the title and abstract carry a lot of weight in the desk check, because they are the first things the editor reads. See [how to write an abstract](/blogs/how-to-write-an-abstract/).',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'single-blind-double-blind-and-open-review',
      title: 'Single-blind, double-blind and open review',
      Art: BlindfoldScene,
      caption: 'who can see whom: the three common ways a journal runs its review',
      body: [
        'Kiran\'s paper went to three reviewers. Whether they knew his name depended on the journal\'s review model.',
        {
          table: {
            head: ['model', 'what reviewers know', 'what authors know'],
            rows: [
              ['single-blind', 'the authors\' names', 'not the reviewers\' names'],
              ['double-blind', 'not the authors\' names', 'not the reviewers\' names'],
              ['open', 'the authors\' names', 'the reviewers\' names, and sometimes the reports are published with the paper'],
            ],
          },
          tone: 'blue',
        },
        'Single-blind review is common in the sciences. Double-blind review is common in the social sciences and humanities, and in many computer science conferences. The journal\'s guide for authors tells you which model it uses. If it is double-blind, remove anything that identifies you before you submit.',
        {
          list: [
            '**Names:** take the authors\' names and affiliations out of the manuscript, and out of the file\'s properties too.',
            '**Self-citations:** cite your earlier work in the third person, as "earlier work showed [12]", not "in our earlier study [12]".',
            '**Acknowledgements and funding:** move them to the separate title page, if the journal asks for one.',
          ],
          style: 'check',
        },
      ],
    },
    {
      id: 'what-reviewers-look-for',
      title: 'What reviewers look for',
      Art: ReviewersScene,
      caption: 'three reviewers, three magnifying glasses, one manuscript',
      body: [
        'Reviewers are experts in your field, usually two or three per paper, who read your work closely and write a report for the editor. Most do it without pay, as a service to their field. Their reports usually cover the same questions.',
        {
          list: [
            '**Originality:** does the paper add something new to what is already known?',
            '**Methods:** are the design, data and analysis sound, and described well enough to repeat?',
            '**Evidence:** do the results actually support the conclusions?',
            '**Clarity:** can a reader in the field follow the argument? A standard [structure](/blogs/structure-of-a-research-paper/) helps.',
            '**References:** is the relevant earlier work cited fairly and kept up to date?',
            '**Ethics:** are approvals, consent, data availability and conflicts of interest handled properly?',
          ],
          style: 'check',
        },
        'A typical report opens with a short summary of the paper, then lists the major concerns, which affect the conclusions, and the minor ones, such as unclear figures or typing errors. It ends with a recommendation to the editor. Reviewers can also send the editor comments that the authors never see.',
        'Reviewers advise; the editor decides. When reviewers disagree, the editor weighs their reports and may invite another reviewer. Reviewers are also expected to keep your paper confidential while it is under review.',
        'Kiran\'s three reports were very different. Reviewer 1 liked the study and asked for two extra figures. Reviewer 3 wanted more detail on the methods. Reviewer 2 had nineteen comments, several of them sharp.',
      ],
    },
    {
      id: 'the-decision-letter-decoded',
      title: 'The decision letter, decoded',
      Art: DecisionScene,
      caption: 'major revision: not a rejection, but a list of what stands between you and acceptance',
      body: [
        'Every decision letter uses one of a handful of standard outcomes. Each one tells you what to do next.',
        {
          table: {
            head: ['decision', 'what it means', 'what to do'],
            rows: [
              ['accept', 'the paper is ready as it is; rare on the first round', 'check the proofs when they arrive'],
              ['minor revision', 'small changes are needed', 'make them carefully and reply to each comment'],
              ['major revision', 'substantial changes are needed, and the paper will usually be reviewed again', 'plan the work, revise, and reply point by point'],
              ['reject and resubmit', 'not acceptable in its current form, but the journal will consider a new version', 'rework the paper and submit it as a new manuscript'],
              ['reject', 'the journal will not publish it', 'read the reports, improve the paper and submit elsewhere'],
            ],
          },
          tone: 'amber',
        },
        'A revision decision usually comes with a deadline, often a few weeks for a minor revision and one to three months for a major one. If you need more time, ask the editorial office before the deadline passes. After a rejection, some publishers offer to transfer the paper, sometimes with its reviews, to another journal in the same group. Accept only if that journal suits your paper.',
        '"Major revision is not a rejection," Dr. Bora told Kiran. "It is a list of what stands between your paper and acceptance." Outright acceptance on the first round is rare, so a revision decision is the usual path to publication.',
        'Read the letter twice, then put it away for a day. Reviewer comments feel personal on the first reading and practical on the second.',
      ],
    },
    {
      id: 'how-to-answer-reviewers',
      title: 'How to answer reviewers well',
      Art: ResponseScene,
      caption: 'a response letter in two columns: every comment, and exactly what changed',
      body: [
        'Your answer goes in a response letter, submitted with the revised manuscript. Editors read it closely, and a clear one makes their decision easier.',
        {
          steps: [
            { title: 'List every comment.', text: 'Copy all the comments into a table, number them, and note what each one asks for.' },
            {
              title: 'Answer point by point.',
              text: 'Quote each comment, then give your reply directly under it. Never skip one, including the ones you disagree with.',
            },
            {
              title: 'Say what changed and where.',
              text: 'Give the section, page and line numbers, and mark the changes in the revised manuscript as the journal asks.',
            },
            {
              title: 'Disagree politely, with evidence.',
              text: 'If a request is wrong or impossible, explain why, respectfully, with data or references.',
            },
            { title: 'Thank the reviewers once.', text: 'A short thank you at the start is enough. Spend the rest of the letter on the substance.' },
          ],
          tone: 'green',
        },
        {
          quote: 'Comment 2.4: The flood maps are not checked against ground data. Response: Thank you for this point. We have added a comparison with field survey points in Section 3.4 (page 9, lines 210 to 226) and discuss its limits in Section 5.',
          by: 'from Kiran\'s response letter',
          tone: 'blue',
        },
        'Keep the tone calm even when a comment stings. Reviewer 2 had asked Kiran to reconsider his entire approach. Kiran explained, with two references, why the approach suited his data, and added a paragraph on its limitations. The editor accepted the explanation. If two reviewers ask for opposite changes, choose the one you can defend, and tell the editor which you followed and why.',
        'Reviewers also often ask for more recent references. [Fiberarticle](https://app.fiberarticle.com) can help with that search: it looks through arXiv, OpenAlex, Semantic Scholar and Crossref together, can limit results to recent years, and shows the passage behind each point it writes, so you can check that a new reference really supports your text before you add it.',
      ],
    },
    {
      id: 'how-long-it-takes-and-what-comes-next',
      title: 'How long it takes, and what comes next',
      Art: WaitScene,
      caption: 'ninety days of waiting, then the letter that makes it worth it',
      body: [
        'A first decision can take anywhere from a few weeks to several months, depending on the field and the journal. Many journals publish their average times on their websites. If the stated time has passed, a short, polite email to the editorial office asking about the status is acceptable.',
        {
          compare: {
            left: {
              title: 'after acceptance',
              tone: 'green',
              mark: 'check',
              items: [
                'you receive proofs to check: correct errors, do not rewrite',
                'you sign a copyright or licence agreement',
                'the paper appears online, then in an issue',
              ],
            },
            right: {
              title: 'after rejection',
              tone: 'red',
              mark: 'dots',
              items: [
                'read the reports again after a day or two',
                'fix what the reviewers found, where it makes sense',
                'choose the next journal and submit there',
              ],
            },
          },
        },
        'If you believe a rejection rests on a clear factual error, such as a reviewer misreading your data, most journals let you appeal to the editor. Keep appeals for real mistakes, not for disagreement with a reviewer\'s opinion. In most cases, improving the paper and sending it to another journal is the quicker path.',
        {
          note: 'submit to one journal at a time. Sending the same paper to two journals at once is duplicate submission, and journals treat it as misconduct. Our guide to [choosing the right journal](/blogs/how-to-choose-the-right-journal/) explains how to plan a shortlist.',
          label: 'remember',
          tone: 'red',
        },
        'Kiran sent his revision six weeks later with a twelve-page response letter. The second round came back as minor revision, and two weeks after that, the paper was accepted.',
      ],
    },
  ],

  takeaways: [
    'After a technical check, the editor decides whether your paper goes to reviewers at all.',
    'Desk rejection is common and usually about fit, so choose the journal carefully.',
    'Reviewers judge originality, methods, evidence, clarity, references and ethics; the editor decides.',
    'Major revision is not a rejection: it lists what stands between you and acceptance.',
    'Answer every comment point by point, politely, and say exactly what changed and where.',
  ],

  faq: [
    {
      q: 'How long does peer review take?',
      a: 'It varies widely. A first decision can take a few weeks to several months, depending on the field and the journal, and each revision adds another round. Check the journal\'s website for its average times.',
    },
    {
      q: 'Can I suggest reviewers?',
      a: 'Many journals let you suggest reviewers, or ask for someone to be excluded, when you submit. Suggest experts without conflicts of interest, which means not your collaborators, colleagues or friends. The editor makes the final choice.',
    },
    {
      q: 'What if a reviewer is simply wrong?',
      a: 'Say so politely in your response letter, with evidence such as data or references, and explain what you changed to prevent the same misunderstanding. The editor sees both sides.',
    },
    {
      q: 'Does Fiberarticle take part in peer review?',
      a: 'No. Fiberarticle helps you research and write: it finds real papers, shows the source behind each point and formats your references. It does not submit or review papers, and you remain responsible for everything in your manuscript.',
    },
  ],

  cta: {
    title: 'Build a paper that holds up under review',
    text: 'Fiberarticle helps you read the literature, tie every claim to a real source and format your references in the style your journal asks for. It is free to use yourself.',
  },
}
