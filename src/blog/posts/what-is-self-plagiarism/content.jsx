import Hero from './hero.jsx'
import {
  AvoidScene,
  MeaningScene,
  OutcomeScene,
  SectionScene,
  SliceScene,
  ThesisScene,
  UgcScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the paragraph was hers, and the report still found where it came from',
  },

  intro: [
    'Harini Prasad is in the final year of her PhD in Computer Science at a university in Tumakuru. Her research teaches a computer to spot disease in coconut leaves from photos that farmers around Tiptur take on their phones. Last year she presented an early version of the work at a conference, and the paper appeared in the proceedings. This year, with more photos and a better model, she wrote the full study up for a journal, and learned what self plagiarism means the hard way.',
    'To save time, she copied the introduction and most of the methods from her conference paper. A week after she submitted, the editor sent back the journal\'s similarity report: 41 percent, nearly all of it from one source, her own conference paper. Please explain the overlap, the editor wrote. Harini was confused. How can you copy from yourself? She typed into Google: what is self plagiarism. Then she went to see her guide, Dr. Gayathri Murthy.',
    'This blog explains what Dr. Murthy told her: what self plagiarism means, what the UGC says about it, its types, publishing from your thesis or a conference paper, which parts you can reuse, and how to avoid it.',
  ],

  sections: [
    {
      id: 'what-is-self-plagiarism',
      title: 'What is self plagiarism?',
      Art: MeaningScene,
      caption: 'the reader thinks the page is new; an older copy sits right behind it',
      body: [
        '"These were my own words," said Harini. Dr. Murthy agreed that nobody had been robbed. The problem is the reader. A journal, an examiner or a promotion committee reads your paper believing it is new work. If parts of it were already published and you do not say so, they have been misled.',
        'Miguel Roig\'s guide to ethical writing, made available by the US Office of Research Integrity, puts it this way: self plagiarism occurs when authors reuse their own previously written work or data in a "new" written product without letting the reader know that this material has appeared elsewhere.',
        {
          define: 'self plagiarism',
          hint: 'noun',
          meaning: 'Reusing your own earlier published work, its text, data or findings, in a new piece without clearly citing and disclosing it, so that readers take it as new.',
          tone: 'pink',
        },
        'Notice the key words: *without letting the reader know*. Reuse in itself is not always wrong. What turns it into self plagiarism is hiding it.',
        {
          note: 'the Committee on Publication Ethics (COPE) and the Text Recycling Research Project prefer the neutral term **text recycling** for reused wording, because reuse can be appropriate or not depending on how and where it happens.',
          label: 'two names',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'what-the-ugc-says',
      title: 'What the UGC says about self plagiarism',
      Art: UgcScene,
      caption: 'one public notice from April 2020, with five kinds of reuse it does not accept',
      body: [
        'For Indian researchers there is a clear official statement. On 20 April 2020, the University Grants Commission issued a public notice titled "Self-Plagiarism", building on its plagiarism regulations of 2018 and on the standards of COPE.',
        'The notice says that reproducing, in part or whole, your own previously published work without adequate citation and proper acknowledgment, and claiming the most recent work as new and original for any academic advantage, amounts to text recycling, also known as self plagiarism, and is not acceptable. It then lists what this includes:',
        {
          list: [
            'republishing the same paper already published elsewhere without due and full citation;',
            'publishing smaller or excerpted work from a longer, earlier work without due and full citation, in order to show a larger number of publications;',
            'reusing data already used in a published work, or sent for publication, in another work without due and full citation;',
            'breaking up a longer or larger study into smaller sections and publishing them as altogether new work without due and full citation;',
            'paraphrasing your own previously published work without due and full citation of the original.',
          ],
          style: 'cross',
        },
        'Look at the phrase that repeats in every line: *without due and full citation*. The UGC is not telling you never to build on your own work. It is telling you to say so.',
        'The notice also advises vice chancellors, selection committees and IQACs to check published work for self plagiarism when deciding promotions, selections and the award of research degrees.',
        {
          note: 'the notice said the UGC would issue a set of parameters to evaluate text recycling. Universities also write their own plagiarism policies, so check what yours says before you submit a thesis.',
          label: 'check locally',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'types-of-self-plagiarism',
      title: 'Types of self plagiarism, with examples',
      Art: SliceScene,
      caption: 'one study, sliced into four thin papers',
      body: [
        'Roig\'s guide groups self plagiarism into redundant and duplicate publication, salami slicing, text recycling and copyright problems. Here are the common types, with examples from Harini\'s world.',
        {
          table: {
            head: ['type', 'what it means', 'example'],
            rows: [
              ['**duplicate publication**', 'the same paper, or essentially the same findings, published twice without saying so', 'Harini\'s conference paper sent again, with a new title, to a journal'],
              ['**duplicate submission**', 'one manuscript sent to two journals at the same time', 'sending the coconut paper to two journals to see which replies first'],
              ['**salami slicing**', 'one study cut into several thin papers to raise the count', 'one paper per leaf disease from a single dataset and model'],
              ['**text recycling**', 'reusing your own published sentences or paragraphs without citing them', 'pasting the conference paper\'s introduction into the journal paper'],
              ['**data reuse**', 'using data from an earlier paper as if it were collected for this one', 'using the conference paper\'s 400 leaf photos again without saying they were used before'],
            ],
          },
          tone: 'pink',
        },
        'Salami slicing was Harini\'s next plan: one paper for each of the four diseases in her photos. Roig\'s guide explains the harm. Readers may believe the data in each slice comes from a different sample, so four papers from one study look like four studies.',
        'Copyright is a separate problem. When a journal publishes your paper, you often transfer copyright to the publisher, so reusing large parts of that text may need its permission, even though you wrote it. Other kinds of plagiarism are covered in our guide to [types of plagiarism](/blogs/types-of-plagiarism/).',
      ],
    },
    {
      id: 'publishing-from-your-thesis-or-conference-paper',
      title: 'Is it self plagiarism to publish from your thesis or a conference paper?',
      Art: ThesisScene,
      caption: 'a thesis and a conference paper can both grow into journal papers, with the history said out loud',
      body: [
        'This was Harini\'s biggest worry. Her thesis would soon be online in Shodhganga, the INFLIBNET repository of Indian theses, and she wanted two more papers from it.',
        '**From a thesis to a paper.** Usually this is fine. Elsevier, for example, does not treat publication as an academic thesis, an abstract or an electronic preprint as prior publication, though Cell Press, The Lancet and some society journals have their own policies. Check the journal\'s guide for authors and mention the thesis in your cover letter, since a checker may match the paper to it.',
        '**From a conference paper to a journal paper.** The rules are stricter here, because a paper in published proceedings is already a publication. Journals that accept extended versions usually ask you to:',
        {
          list: [
            'cite the conference paper in the new manuscript;',
            'say clearly what the new paper adds, such as new data, new analysis or new results;',
            'tell the editor in the cover letter, and get any permissions the conference publisher needs.',
          ],
          style: 'check',
        },
        'How much new material is enough differs. The INFORMS Journal on Data Science asks for extensions that are "substantial and meaningful". The IEEE Robotics and Automation Magazine says it rejects papers that only fill in details of proofs, add experiments or give more background. Check your journal\'s rule before you write.',
        '**From your papers into your thesis.** Published papers often become thesis chapters. UCL\'s guidance for its doctoral students is a useful model: reference the published source clearly, even if you own the copyright, and if you do not own it or are unsure, get permission. Your own university\'s rules have the final word.',
      ],
    },
    {
      id: 'methods-vs-results',
      title: 'Which parts of a paper can you reuse?',
      Art: SectionScene,
      caption: 'the same method, cited, can stay; the same results cannot come back as new',
      body: [
        'Dr. Murthy went through Harini\'s similarity report section by section. Where the overlap sits matters as much as how big it is. The text recycling guidance COPE prepared with BioMed Central asks editors to weigh how much text is recycled, where it appears and whether the source is acknowledged.',
        {
          compare: {
            left: {
              title: 'usually acceptable',
              tone: 'green',
              mark: 'check',
              items: [
                'describing a method you used before, in similar words, with a citation to the earlier paper',
                'standard wording that has few other ways to be said, such as the names of tests and equipment',
                'a short quotation from your earlier paper, in quotation marks and cited',
              ],
            },
            right: {
              title: 'usually not acceptable',
              tone: 'red',
              mark: 'cross',
              items: [
                'the same results presented again as new findings',
                'a recycled discussion or conclusion, even lightly reworded',
                'any overlap you did not disclose',
              ],
            },
          },
        },
        'COPE says that overlap in the methods, referring to a method used before, can be entirely appropriate when the original article is cited, while undisclosed overlap, or overlap in the results, discussion or conclusions, is unlikely to be acceptable. Overlap in data and results is handled separately, as redundant or duplicate publication.',
        'So the methods overlap could stay, with a citation. The introduction, copied from the conference paper, had to be written fresh for a bigger dataset and a different story. Our guide on [how plagiarism checkers work](/blogs/how-plagiarism-checkers-work/) explains how to read each match in a report.',
      ],
    },
    {
      id: 'how-to-avoid-self-plagiarism',
      title: 'How to avoid self plagiarism',
      Art: AvoidScene,
      caption: 'cite yourself, write the new parts fresh, and tell the editor the history',
      body: [
        'You do not have to avoid your own earlier work. Handle it the way you would handle anyone else\'s. Dr. Murthy gave Harini a short routine.',
        {
          steps: [
            { title: 'Keep a list of everything you have published or submitted.', text: 'Papers, conference papers, preprints and your thesis. You cannot disclose what you have forgotten.' },
            { title: 'Cite your earlier work wherever you build on it.', text: 'Treat your old paper exactly like a paper by someone else. If you quote a line from it, use quotation marks.' },
            { title: 'Write the introduction, discussion and conclusion fresh.', text: 'These carry the argument of the new paper. If it is the same as before, ask whether the paper is really new.' },
            { title: 'Reuse methods wording only with a citation.', text: 'Or shorten it to one line, such as: images were collected as described in our earlier study, with a reference.' },
            { title: 'Disclose the history to the editor.', text: 'Mention any earlier version in your cover letter. The Text Recycling Research Project also suggests a short reuse statement just before the references.' },
            { title: 'Send one manuscript to one journal at a time.', text: 'Wait for a decision, or withdraw it formally, before you send it anywhere else.' },
            { title: 'Check your copyright agreement.', text: 'Read what you signed before you reuse text or figures, and ask the publisher for permission if needed.' },
          ],
          tone: 'green',
        },
        'Two plain sentences are enough; our guide on [how to write a cover letter for journal submission](/blogs/how-to-write-a-cover-letter-for-journal-submission/) shows where they go. Harini wrote: "An earlier version of this work, using 400 images and one disease class, was presented at a conference in 2025 and is cited as reference 12. This manuscript adds 800 new images, three more disease classes and a field test with farmers."',
        {
          note: 'run a similarity check before you submit, if your library offers one. A match to yourself is still a match the editor will see.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'what-happens-if-a-journal-finds-self-plagiarism',
      title: 'What happens if a journal finds self plagiarism?',
      Art: OutcomeScene,
      caption: 'caught at submission, you revise; caught after publication, the paper itself is marked',
      body: [
        'Under the COPE guidance, editors judge each case on its own. What happens depends a lot on when the overlap is found.',
        {
          list: [
            '**Before review or publication:** the editor may ask you to explain, rewrite and cite, as Harini\'s editor did, or may reject the manuscript.',
            '**After publication:** the journal may publish a correction, or in serious cases retract the paper, depending on how much overlaps and what kind. Our guide on [what is retraction in research](/blogs/what-is-retraction-in-research/) explains what that looks like.',
            '**At your institution:** the UGC notice asks committees to check for self plagiarism before promotions, selections and the award of research degrees.',
          ],
          style: 'dots',
        },
        'Whether it counts as research misconduct differs between countries. The US Office of Research Integrity notes that the US federal rules do not count it as misconduct, while the UGC says plainly that it is not acceptable. Either way, a journal can still reject or retract a paper for it.',
        'Harini took a week. She cited her conference paper in the methods, rewrote the introduction, wrote the discussion around the new results, and added two sentences to her cover letter. She dropped the plan for four papers and kept all four diseases in one stronger paper. The new report showed a small, cited overlap in the methods, and the editor sent the manuscript out for review.',
      ],
    },
  ],

  takeaways: [
    'Self plagiarism is reusing your own published text, data or findings as if they were new, without citing and disclosing them. Duplicate publication, salami slicing and text recycling are common types.',
    'The UGC\'s public notice of 20 April 2020 says this is not acceptable and lists five forms, each one "without due and full citation".',
    'Publishing from a thesis is usually allowed; extending a conference paper needs a citation, clearly new content and a note to the editor.',
    'Reused methods wording with a citation is usually fine; reused results, discussion or conclusions are not.',
    'Cite yourself, write the new parts fresh, check your copyright agreement and tell the editor the history.',
  ],

  faq: [
    {
      q: 'Can you plagiarise yourself?',
      a: 'Yes. You cannot steal your own ideas, but you can mislead readers by presenting old work as new. That is why self plagiarism is judged by disclosure: the same reuse can be fine when cited and declared, and a problem when hidden.',
    },
    {
      q: 'Is it self plagiarism to use my published paper in my PhD thesis?',
      a: 'Usually not, if you say clearly which chapter is based on which paper and cite it. Check whether you transferred copyright to the publisher and whether you need permission, and follow your university\'s rules on including published work.',
    },
    {
      q: 'How much overlap with my own earlier paper is allowed?',
      a: 'There is no single number. COPE asks editors to look at how much is reused, where it sits and whether it is acknowledged. A cited methods section can be fine, while recycled results or conclusions are unlikely to be accepted at any percentage.',
    },
  ],

  cta: {
    title: 'Keep track of where every idea came from',
    text: 'Fiberarticle finds papers through OpenAlex, Semantic Scholar, Crossref and arXiv and shows the source behind every line it writes, so you always know which work an idea came from, including your own. One payment unlocks all of it, for good.',
  },
}
