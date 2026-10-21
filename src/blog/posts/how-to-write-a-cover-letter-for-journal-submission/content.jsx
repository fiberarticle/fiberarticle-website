import Hero from './hero.jsx'
import {
  ExampleScene,
  FormatScene,
  GuideScene,
  MistakesScene,
  PartsScene,
  PurposeScene,
  SendScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the cover letter rides on top of the paper, and the editor reads it first',
  },

  intro: [
    'Tanvi Kulkarni had spent two kharif seasons in maize fields around Dharwad. She is a PhD scholar in Agricultural Entomology, and her study tested whether a spray made from neem seed kernels could keep fall armyworm, a caterpillar that chews through young maize, below the level that harms the crop. The paper was finished. Only one box on the journal\'s submission page was still empty: cover letter.',
    'It was late, so she typed "Dear Sir/Madam", pasted her abstract under it and added "Kindly consider our paper for publication". Just to be safe, she sent the draft to her guide, Dr. Shivakumar. His reply came in five minutes: "Do not submit this. The editor reads this letter before the paper. Come and see me tomorrow."',
    'This blog explains how to write a cover letter for journal submission the way Dr. Shivakumar taught Tanvi, with a simple format, a full example and the mistakes editors notice.',
  ],

  sections: [
    {
      id: 'what-a-cover-letter-does',
      title: 'What a cover letter for journal submission does',
      Art: PurposeScene,
      caption: 'a busy editor, a tall pile of new papers, and a few minutes for each letter',
      body: [
        'A cover letter is a short, formal letter to the journal\'s editor that goes with your manuscript. It may be a separate file or a text box in the submission system. Either way, it is usually the first thing the editor reads.',
        'The editor reads it while making the first decision on your paper: should it go out to reviewers, or back to you without review? We explain that first check in [peer review explained](/blogs/peer-review-explained/). A good letter helps the editor answer three questions quickly.',
        {
          list: [
            '**What is this paper?** The title, the type of article, and what it found, in plain words.',
            '**Why this journal?** How the work fits the journal\'s aims and scope, and why its readers will care.',
            '**Is everything in order?** The paper is original, it is not under review anywhere else, and all the authors agree to the submission.',
          ],
          style: 'numbers',
        },
        'Elsevier\'s advice to authors quotes an editor-in-chief who says that papers which do not fit a journal\'s aims and scope are a primary reason for desk rejection. A letter cannot rescue a paper that does not fit, but it makes the fit easy to see.',
        {
          note: 'some editors admit they give cover letters little weight. That is a reason to keep yours short, not to skip it. Elsevier also notes that many journals pass the letter on to reviewers.',
          label: 'honest note',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'check-the-journals-rules-first',
      title: 'Check the journal\'s rules first',
      Art: GuideScene,
      caption: 'the guide for authors comes first, before a single word of the letter',
      body: [
        'Before Tanvi wrote a word, Dr. Shivakumar opened the journal\'s guide for authors. "Every journal has its own rules for this letter," he said. "Read them first, and follow them over anything I tell you." Even the big publishers do not agree with each other.',
        {
          table: {
            head: ['item', 'Springer Nature\'s guidance', 'Elsevier\'s guidance'],
            rows: [
              ['a short summary and the fit with the journal', 'yes', 'yes'],
              ['statement that the paper is not under review elsewhere', 'yes, in every letter', 'not in the letter; asked for separately'],
              ['suggested or excluded reviewers', 'yes, with reasons, if you wish', 'not in the letter; asked for separately'],
              ['related or earlier submissions', 'yes, if any', 'yes, if any'],
            ],
          },
          tone: 'red',
        },
        'Both publishers end with the same advice: check the individual journal\'s instructions, because each journal sets its own rules. Look for a section called "cover letter" or "submission checklist". Some journals want specific lines, such as a list of your related papers under consideration elsewhere.',
        {
          note: 'see whether the letter is a file or a text box, and whether there is a word limit. For a text box, Taylor & Francis suggests drafting the letter separately first, so you can check it before pasting it in.',
          label: 'tip',
          tone: 'amber',
        },
        'If you are still deciding where to send the paper, read [how to choose the right journal](/blogs/how-to-choose-the-right-journal/) first.',
      ],
    },
    {
      id: 'what-to-include-in-a-cover-letter',
      title: 'What to include in a cover letter to the editor',
      Art: PartsScene,
      caption: 'seven parts, stacked in order, make one page',
      body: [
        'Publishers and editing services list much the same core parts, though not every journal wants all of them.',
        {
          list: [
            '**The editor\'s name.** Use the handling editor\'s name if the journal lists one, usually on its editorial board page; otherwise "Dear Editor".',
            '**The title and article type.** The title exactly as on the manuscript, and whether it is a research article, review, short communication or case report.',
            '**What you studied and found.** Two to four sentences in your own words, not copied from the abstract.',
            '**Why it belongs in this journal.** Link the work to the journal\'s scope and to its readers.',
            '**The standard statements.** The paper has not been published before, it is not under review at another journal, and all authors have approved it.',
            '**Disclosures the journal asks for.** Competing interests, ethics approval or a preprint, for example.',
            '**Contact details.** The corresponding author\'s name, affiliation, email and phone number.',
          ],
          style: 'check',
        },
        'Springer Nature gives two sentences that it says every cover letter to its journals should contain. They suit most journals that want these statements in the letter.',
        {
          quote: 'We confirm that this manuscript has not been published elsewhere and is not under consideration by another journal. All authors have approved the manuscript and agree with its submission to [name of the journal].',
          by: 'the model sentences in Springer Nature\'s guidance',
          tone: 'blue',
        },
        'Editage\'s guide adds two newer items. If you used a generative AI tool, say to polish your English, check whether the journal wants it disclosed, and name the tool and what it did. If the paper grew out of your thesis, say so and explain how the article differs from it.',
      ],
    },
    {
      id: 'cover-letter-format',
      title: 'Cover letter format, paragraph by paragraph',
      Art: FormatScene,
      caption: 'one page, four short paragraphs, then your name',
      body: [
        'Dr. Shivakumar drew four boxes on a sheet of paper. "One page," he said. "Four short paragraphs, and then your name." This shape follows the structure Springer Nature suggests, and it works for most journals.',
        {
          steps: [
            { title: 'The top.', text: 'The date, the editor\'s name and role, and the journal\'s name. Then "Dear Dr. [surname],".' },
            { title: 'Paragraph 1: what you are submitting.', text: 'The manuscript title, the article type, and in one or two sentences the problem and the question you asked.' },
            { title: 'Paragraph 2: what you did and found.', text: 'Your approach in one sentence, the main finding, and why it matters.' },
            {
              title: 'Paragraph 3: why this journal.',
              text: 'How the paper fits the journal\'s scope, and which of its readers will use it. If you are submitting to a special issue, name it here.',
            },
            { title: 'Paragraph 4: the statements.', text: 'Originality, no other submission, every author\'s approval, competing interests and anything else the journal asks for.' },
            {
              title: 'The close.',
              text: '"Thank you for considering our manuscript." Then the corresponding author\'s full name, designation, department, institution, email and phone.',
            },
          ],
          tone: 'green',
        },
        'Keep it to one page, the limit both Taylor & Francis and Elsevier give, and keep the look plain: block paragraphs, a standard 11 or 12 point font, single spacing. Write "we" if you have co-authors. Keep the tone formal and factual. The letter is a professional introduction, not a request for a favour.',
      ],
    },
    {
      id: 'journal-cover-letter-example',
      title: 'A journal cover letter example',
      Art: ExampleScene,
      caption: 'the second draft: shorter, plainer, and written for one journal',
      body: [
        'Here is the letter Tanvi wrote the next evening, part by part. The journal and the editor are made up for this example, and the details are simplified, but the shape is the one editors expect.',
        {
          table: {
            head: ['part', 'what Tanvi wrote'],
            rows: [
              ['top', '[date]. Dr. R. Menon, Handling Editor, [journal name]. Dear Dr. Menon,'],
              [
                'paragraph 1',
                'Please consider our manuscript, "Neem seed kernel extract for managing fall armyworm in rainfed maize: a two-season field study", for publication as a research article. Fall armyworm, first reported in India in Karnataka in 2018, is now a serious pest of maize. We asked whether a low-cost neem extract could keep the damage below the level that reduces yield.',
              ],
              [
                'paragraph 2',
                'Over two kharif seasons in farmers\' fields in Dharwad district, plots sprayed with the extract had less leaf damage than unsprayed plots, and yields close to those of plots sprayed with a chemical insecticide. The extract costs less and can be prepared in the village.',
              ],
              [
                'paragraph 3',
                'Your journal publishes field research on pest management that farmers can adopt, and many of its readers advise farmers directly. We believe our results will be useful to them, especially in rainfed areas where maize is a smallholder crop.',
              ],
              [
                'paragraph 4',
                'We confirm that this manuscript has not been published elsewhere and is not under consideration by another journal. All authors have approved the manuscript and agree with its submission to your journal. We have no competing interests to declare. The article is based on work for the first author\'s PhD thesis, which has not yet been submitted.',
              ],
              ['close', 'Thank you for considering our manuscript. Tanvi Kulkarni, PhD Scholar, Department of Agricultural Entomology, [university], Dharwad, with her email and phone number.'],
            ],
          },
          tone: 'green',
        },
        'Notice what the letter does not contain: no copied abstract, no praise for the journal\'s "esteemed reputation", no claim that the work is groundbreaking. An editor can read it in a minute.',
        {
          note: 'paragraph 3 is the hardest to write and the most useful. Read the journal\'s aims and scope and a few of its recent papers first. If one is close to your work, mention it in a phrase; it shows you know the journal.',
          label: 'tip',
          tone: 'amber',
        },
        'Keep paragraph 2 different from your [abstract](/blogs/how-to-write-an-abstract/). The abstract reports the study; the letter tells the editor why it matters to this journal.',
      ],
    },
    {
      id: 'cover-letter-mistakes',
      title: 'Cover letter mistakes editors notice',
      Art: MistakesScene,
      caption: 'the first draft and the second, side by side',
      body: [
        'Tanvi\'s first draft had three of these mistakes. Most come from writing the letter in a hurry, at the very end.',
        {
          compare: {
            left: {
              title: 'avoid',
              tone: 'red',
              mark: 'cross',
              items: [
                '"Dear Sir/Madam" when the editor\'s name is on the website',
                'pasting the abstract in place of a summary',
                'words like groundbreaking, revolutionary and first ever',
                'an old letter that still names a different journal',
                'a second page on methods and limitations',
                'missing a statement the journal asked for',
              ],
            },
            right: {
              title: 'do instead',
              tone: 'green',
              mark: 'check',
              items: [
                'the handling editor by name, spelled correctly',
                'the significance in your own words',
                'plain claims your results can support',
                'a fresh letter for every journal',
                'one page, four short paragraphs',
                'the guide for authors open while you write',
              ],
            },
          },
        },
        'The reused letter is the most embarrassing one. Elsevier\'s advice warns against reusing a letter for a different journal without updating it, and against template letters shared around an institution. An editor who finds another journal\'s name in your letter learns two things you did not mean to say.',
        'Avoid pleading, too. "Kindly publish at the earliest" or "this paper is needed for my PhD" does not help, because the editor judges the paper, not your deadline. And check every claim in the letter against the paper: if the numbers differ, the editor will wonder which is true.',
      ],
    },
    {
      id: 'suggested-reviewers-and-revised-manuscripts',
      title: 'Suggested reviewers, revisions and a last check',
      Art: SendScene,
      caption: 'every box ticked, and the letter goes in with the paper',
      body: [
        'Some journals invite you to suggest reviewers, or to name people who should not review your paper. Springer Nature\'s guidance says you can do this in the cover letter, with your reasons; Elsevier asks for it in separate fields of the submission form. If you suggest names, choose experts with no conflict of interest, so not your co-authors, close collaborators or friends, and give their full names, affiliations and institutional emails. Keep any reason for excluding someone short and professional.',
        'A revised manuscript needs a cover letter too, but a different one. The detailed answers to the reviewers go in a separate response letter, which our [peer review guide](/blogs/peer-review-explained/) explains. The revision\'s cover letter is short: thank the editor and reviewers, say you have answered every comment, sum up the main changes, and point to the response document.',
        'After a rejection elsewhere, write a fresh letter for the new journal. Editage notes that you need not mention the earlier rejection unless the journal asks about the paper\'s history.',
        {
          list: [
            'the editor\'s name and the journal\'s name are correct',
            'the title matches the title page exactly',
            'the summary is in your own words, not the abstract',
            'every statement the guide for authors asks for is there',
            'the numbers match the manuscript',
            'it fits on one page',
            'a co-author or your guide has read it',
          ],
          style: 'check',
        },
        'Tanvi\'s new letter took her forty minutes. Dr. Shivakumar changed two words and told her to submit it. Three weeks later the status on the journal\'s website changed to "under review". The reviewers would still have their say, but the editor had read her letter and sent the paper on.',
      ],
    },
  ],

  takeaways: [
    'A cover letter is a short, formal letter that introduces your paper to the editor, who usually reads it first.',
    'Read the journal\'s guide for authors before you write, because publishers disagree on what belongs in the letter.',
    'Use four short paragraphs: what you are submitting, what you found, why this journal, and the statements.',
    'Explain the significance in your own words, and never paste in the abstract.',
    'Keep it to one page, address the editor by name, and write a fresh letter for every journal.',
  ],

  faq: [
    {
      q: 'How long should a cover letter for a journal be?',
      a: 'One page at most. Taylor & Francis and Elsevier both say so, and Editage puts most letters at about 300 to 500 words. If the journal gives a word limit, follow it.',
    },
    {
      q: 'Is a cover letter compulsory for journal submission?',
      a: 'It depends on the journal. Many submission systems ask for one, as a file or in a text box, and the submission checklist in the guide for authors tells you whether it is required. Even when it is optional, a short letter helps the editor see why your paper fits.',
    },
    {
      q: 'What is the difference between a cover letter and a response letter?',
      a: 'The cover letter introduces your paper to the editor, at first submission and again, more briefly, with each revision. The response letter answers the reviewers\' comments one by one and says what you changed and where.',
    },
  ],

  cta: {
    title: 'Write the paper your letter introduces',
    text: 'Fiberarticle helps you read the literature, tie every claim to a real source and format your references in the style your journal asks for. One payment unlocks all of it, for good.',
  },
}
