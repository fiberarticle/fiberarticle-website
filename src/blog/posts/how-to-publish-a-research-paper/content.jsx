import Hero from './hero.jsx'
import {
  AcceptedScene,
  FilesScene,
  GuideScene,
  JournalScene,
  PortalScene,
  ReadyScene,
  ReviewScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'publishing is a staircase of ordinary steps, taken one at a time',
  },

  intro: [
    'Revathi Subramanian finished her Master of Physiotherapy at a college in Madurai last year. Her dissertation followed sixty women with knee osteoarthritis for twelve weeks. Half were taught their home exercises over a weekly WhatsApp video call; the other half got the usual printed exercise sheet. The video group ended with less knee pain. Her guide, Dr. Senthil Murugan, said the result deserved more readers than her four examiners. Revathi agreed, but she had no idea how to publish a research paper.',
    'That evening she searched online, found a journal that promised publication in seven days, and nearly emailed it her whole dissertation as a single 96 page PDF.',
    '"A dissertation is not a paper, and an email is not a submission," Dr. Senthil said the next morning. "Let us do this in order."',
    'This blog follows that order: how to publish a research paper step by step, from checking that it is ready to what happens after acceptance.',
  ],

  sections: [
    {
      id: 'is-your-paper-ready',
      title: 'How to publish a research paper: is yours ready?',
      Art: ReadyScene,
      caption: 'a dissertation and a paper hold the same study, in very different sizes',
      body: [
        'To publish a research paper usually means getting it accepted by a peer-reviewed journal. The editor and outside experts check the work first, and only then does the journal publish it under its name. Before you look for a journal, check three things.',
        {
          steps: [
            { title: 'The study is finished.', text: 'A journal article reports complete work, not a plan or half the data.' },
            { title: 'It is written as a paper, not a thesis.', text: 'Revathi\'s dissertation had a long review of literature and pages of appendices. A journal article is much shorter, within the journal\'s word limit, and usually runs introduction, methods, results, discussion. She had to cut and rewrite, not copy.' },
            { title: 'Everyone agrees on who the authors are.', text: 'Settle the author list and its order before you submit. Agreeing now is far easier than changing names on a paper under review.' },
          ],
          tone: 'amber',
        },
        'Authorship is where many first papers go wrong. The ICMJE, the committee of medical journal editors whose recommendations many journals follow, says an author must meet all four of these criteria:',
        {
          list: [
            '"Substantial contributions" to the idea or design of the work, or to collecting, analysing or interpreting the data.',
            'Drafting the paper, or "reviewing it critically for important intellectual content".',
            '"Final approval of the version to be published".',
            '"Agreement to be accountable for all aspects of the work".',
          ],
          style: 'numbers',
        },
        'People who helped but do not meet all four, such as someone who gave only general supervision or administrative support, go in the acknowledgements. Revathi\'s paper had three authors: herself, Dr. Senthil and the colleague who did the blinded pain assessments and the analysis with her. The head of department, who had signed the permissions, was thanked instead.',
      ],
    },
    {
      id: 'choose-the-journal',
      title: 'Step 1: choose the journal before you format anything',
      Art: JournalScene,
      caption: 'three journals that fit, and one that only sent an advertisement',
      body: [
        'Every later step depends on the journal: its word limit, its reference style, even its headings. Taylor & Francis advises its authors to pick the journal first, so they can shape the paper to fit it.',
        'Dr. Senthil set the seven day journal aside. Instead, Revathi looked at where the papers in her reference list were published, read each journal\'s aims and scope, and confirmed the indexing on the databases themselves. Our guide on [how to choose the right journal](/blogs/how-to-choose-the-right-journal/) walks through those checks and the warning signs of predatory journals.',
        {
          list: [
            'The journal publishes your kind of study. For Revathi, that meant clinical trials in physiotherapy or rehabilitation.',
            'Its indexing and its fees are shown openly, and you can confirm both yourself.',
            'If the paper is for a PhD admission or a job, your university or employer accepts the journal.',
          ],
          style: 'check',
        },
        {
          note: 'submit to one journal at a time. The ICMJE says authors "should not submit the same manuscript, in the same or different languages, simultaneously to more than one journal." Keep two or three journals on your list, but send the paper to one at a time.',
          label: 'rule',
          tone: 'red',
        },
      ],
    },
    {
      id: 'guide-for-authors',
      title: 'Step 2: read the guide for authors and format your paper',
      Art: GuideScene,
      caption: 'the guide for authors is the rulebook, and the editor checks it first',
      body: [
        'Every journal has a page called "guide for authors", "instructions for authors" or "submission guidelines". Taylor & Francis advises authors to "carefully check through the instructions for authors for your chosen journal". Read it all once, and note down:',
        {
          list: [
            '**Article type and word limit.** Original articles, short communications and reviews often differ.',
            '**Structure.** The headings it wants, and whether the abstract needs fixed headings.',
            '**Reference style.** Vancouver, APA or its own, followed exactly.',
            '**Figures and tables.** File types, quality and where they go.',
            '**Blinding.** For double-blind review, no names, institution or acknowledgements in the main file.',
            '**Required statements.** Ethics approval, consent, funding, conflicts of interest and data availability.',
          ],
          style: 'dots',
        },
        'Health research journals often ask for one more thing: a reporting guideline. The EQUATOR Network keeps a library of them, such as CONSORT for randomised trials, STROBE for observational studies, PRISMA for systematic reviews and SRQR or COREQ for qualitative research. Some journals want the completed checklist uploaded too.',
        'Clinical trials have a rule of their own. The ICMJE asks editors to require that a trial is registered "at or before the time of first patient consent for enrollment". In India, the usual place is the Clinical Trials Registry of India (CTRI), a primary register of the WHO\'s trial registry platform that has accepted only prospective registration since April 2018. Revathi had registered her trial there before her first patient joined, because Dr. Senthil insisted. Without that number, a journal that follows the ICMJE would not consider her paper.',
        {
          note: 'rules differ between journals and change over time. Use the guide on the journal\'s own website, not an old copy a senior shared, and see how recent papers in the journal follow it.',
          label: 'check',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'submission-files',
      title: 'Step 3: prepare your manuscript submission files',
      Art: FilesScene,
      caption: 'one study, packed into several separate files',
      body: [
        'A submission is a set of files, not one PDF. The exact list is in the guide for authors, but most journals ask for something close to this:',
        {
          table: {
            head: ['file', 'what goes in it'],
            rows: [
              ['cover letter', 'a short letter to the editor: what you found, why it suits this journal, and any declarations the journal asks for'],
              ['title page', 'the title, every author with their affiliation, the corresponding author, the word count and the acknowledgements'],
              ['main manuscript', 'the abstract, keywords and full text, with no author names if the review is blinded'],
              ['figures and tables', 'often uploaded as separate files, in the formats the journal names'],
              ['declarations', 'ethics approval number, consent, funding, competing interests, data availability and author contributions'],
              ['supporting files', 'a reporting checklist, the trial registration number, questionnaires or extra data'],
            ],
          },
          tone: 'green',
        },
        'Two of these have their own guides on this blog. For the letter, see [how to write a cover letter for journal submission](/blogs/how-to-write-a-cover-letter-for-journal-submission/). For the ORCID iD that many journal portals ask authors for, see [how to create an ORCID iD](/blogs/how-to-create-orcid-id/).',
        'Many journals also ask for author contributions in the CRediT format, a list of 14 named roles such as conceptualization, methodology, formal analysis, investigation and supervision.',
        {
          note: 'keep one folder per journal and name every file plainly. If the paper is rejected, you reformat this folder for the next journal instead of starting again.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'how-to-submit-a-research-paper',
      title: 'Step 4: how to submit a research paper to a journal',
      Art: PortalScene,
      caption: 'the portal asks, you answer, and then the status line starts to move',
      body: [
        'Most journals take papers through an online system such as Editorial Manager, ScholarOne or Open Journal Systems. The steps look much the same everywhere:',
        {
          steps: [
            { title: 'Register as an author.', text: 'Create an account for the corresponding author and link your ORCID iD.' },
            { title: 'Choose the article type.', text: 'Original article, short communication or review. The wrong type can reach the wrong editor.' },
            { title: 'Enter the details.', text: 'Title, abstract, keywords, and every author exactly as on the title page.' },
            { title: 'Upload the files.', text: 'Each file under its correct label. Many systems then build one PDF.' },
            { title: 'Answer the questions.', text: 'Ethics, funding, conflicts of interest and data, answered as in your files.' },
            { title: 'Check the PDF, then submit.', text: 'Read the combined PDF page by page. After you submit, an email gives you a manuscript number.' },
          ],
          tone: 'blue',
        },
        'After that, a status line in the portal shows where your paper is. Labels vary a little; these come from Cochrane\'s guide to Editorial Manager:',
        {
          table: {
            head: ['status', 'what it means'],
            rows: [
              ['Manuscript Submitted', 'received; the journal office is running its first checks'],
              ['Sent Back to Author', 'returned as incomplete; fix it and submit again'],
              ['With Editor', 'an editor has been assigned and has the paper'],
              ['Under Review', 'peer reviewers have agreed to review it'],
              ['Required Reviews Completed', 'all the reviewer feedback is in'],
              ['Decision in Process', 'the editor is deciding; you have not been told yet'],
            ],
          },
          tone: 'blue',
        },
        'Revathi\'s first attempt came back as "Sent Back to Author" two days later. Her blinded manuscript still named the college in the methods section. She removed it, uploaded the file again, and a week later the status changed to "Under Review".',
      ],
    },
    {
      id: 'peer-review-and-revision',
      title: 'Step 5: peer review, revision or rejection',
      Art: ReviewScene,
      caption: 'most papers come back with work to do, and that is good news',
      body: [
        'Before any reviewer sees your paper, the editor screens it. Editage calls this "the stage where desk rejections are highly likely to occur", and its advice for avoiding one is to "always take care to address all critical submission requirements". Papers that pass go to subject experts, who recommend acceptance, minor revision, major revision or rejection.',
        'A revision decision means the journal is interested, if you fix what the reviewers found. Editage notes that "it\'s completely normal to have multiple rounds of revisions" before a paper is ready. Send the revised paper with a response letter that answers every comment, point by point. Our guide, [peer review explained](/blogs/peer-review-explained/), shows how to read the decision letter and how to answer reviewers well.',
        {
          compare: {
            left: {
              title: 'if it is a revision',
              items: [
                'Read every comment, then wait a day.',
                'Make the changes and mark them.',
                'Answer each comment in the response letter.',
                'Return it before the deadline.',
              ],
              mark: 'check',
              tone: 'amber',
            },
            right: {
              title: 'if it is a rejection',
              items: [
                'Read the reasons; they are free expert advice.',
                'Fix what was fair.',
                'Reformat for the next journal on your list.',
                'Submit it, and start the steps again.',
              ],
              mark: 'dots',
              tone: 'red',
            },
          },
        },
        'Revathi\'s decision came about two months later: major revision. One reviewer wanted to know how many women had dropped out of each group, and why. The other asked her to soften a sentence claiming that video calls "should replace" clinic visits, since one small trial could not show that. She added a CONSORT style flow diagram of participants, rewrote the sentence and answered both reviewers in four pages.',
      ],
    },
    {
      id: 'after-acceptance',
      title: 'Step 6: what happens after your paper is accepted',
      Art: AcceptedScene,
      caption: 'acceptance is not quite the end: a licence, the proofs, then a DOI',
      body: [
        'The acceptance email is the best email in research, but a little work remains, some of it on a short deadline.',
        {
          steps: [
            { title: 'The licence or agreement.', text: 'You sign a form that says who holds which rights. Open access papers usually carry a Creative Commons licence such as CC BY, and at Springer Nature the authors keep the copyright. For subscription articles, Springer Nature mostly asks for an exclusive licence to publish instead. Read what you sign.' },
            { title: 'Fees, if any.', text: 'If you chose open access in a journal with an article processing charge, the invoice usually comes now. Genuine journals publish their charges, or say they have none.' },
            { title: 'The proofs.', text: 'The journal typesets the paper and sends you proofs. Elsevier says most of its journals send them within two weeks of acceptance, with a correction deadline "typically ranging from 48 hours to one week". Check names, numbers, figures and references. Proofs fix errors; they are not for rewriting.' },
            { title: 'Online publication and the DOI.', text: 'The paper goes online with a DOI, a permanent identifier that always leads to it.' },
          ],
          tone: 'green',
        },
        'Then add it to your ORCID record and Google Scholar profile, and send the link to the people who helped. Revathi also sent a two line summary in Tamil to every woman in the study who had asked to hear the result.',
        'Dr. Senthil printed the first page of the paper and pinned it on the notice board outside the physiotherapy department. Under it he wrote one word: "Next?"',
      ],
    },
  ],

  takeaways: [
    'First make sure the study is complete, written as a paper, not a thesis, and that every author agrees on the author list.',
    'Choose the journal before you format anything, and submit to one journal at a time.',
    'Prepare a set of files, not one PDF: cover letter, title page, blinded manuscript, figures and declarations.',
    'Answer revisions point by point, and treat a rejection as a reason to improve and reformat.',
    'After acceptance, read the licence, return the proofs before the deadline and add the DOI to your ORCID record.',
  ],

  faq: [
    {
      q: 'How long does it take to publish a research paper?',
      a: 'There is no fixed time. It depends on the journal, the field and the rounds of revision, and can run from a few months to well over a year. Many journals show their average time to first decision on their website.',
    },
    {
      q: 'How can I publish a research paper for free?',
      a: 'Many journals charge authors nothing, including many subscription journals and many open access journals that are funded in other ways. A genuine journal states its charges on its website, or states that it has none. Be wary of any journal that asks for a fee before it has reviewed your paper.',
    },
    {
      q: 'Can a student publish a research paper?',
      a: 'Yes. Undergraduate, master\'s and PhD students publish papers, usually from a project or dissertation with their guide as a co-author. The rules are the same for everyone.',
    },
    {
      q: 'Can I send my paper to two journals at the same time?',
      a: 'No. The ICMJE says the same manuscript should not be submitted to more than one journal at once. Wait for a decision, or formally withdraw the paper, before you send it anywhere else.',
    },
  ],

  cta: {
    title: 'Find the papers your paper stands on',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and shows the passage behind every point it writes, so the studies you cite in your introduction and discussion are ones you have actually read. One payment unlocks all of it, for good.',
  },
}
