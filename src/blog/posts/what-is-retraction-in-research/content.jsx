import Hero from './hero.jsx'
import {
  CheckScene,
  CiteScene,
  CompareScene,
  LabelScene,
  MeaningScene,
  OwnScene,
  ReasonScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the paper stays on the shelf, but now it carries a red stamp',
  },

  intro: [
    'Nandini Reddy is in the second year of her MPharm in Pharmacology in Hyderabad. Her project tests whether an extract of a common medicinal plant lowers blood sugar in diabetic rats. One paper sat at the centre of her literature review: a study that reported a large drop in blood sugar with the same extract. Her whole hypothesis leaned on it.',
    'Two weeks before her review meeting, she added the paper to Zotero and a red banner appeared at the top of the item: *this work has been retracted*. Nandini did not know what that meant. Was the paper fake? Could she still cite it? Had she done something wrong by reading it? She typed into Google: what is retraction in research. Then she went to see her guide, Dr. Elizabeth Varghese.',
    'This blog explains what Dr. Varghese told her: what a retraction is, how it differs from a correction, why papers are retracted, how to check any paper in a few minutes, and what to do when a paper you rely on turns out to be retracted.',
  ],

  sections: [
    {
      id: 'what-is-retraction-in-research',
      title: 'What is retraction in research?',
      Art: MeaningScene,
      caption: 'the paper is not torn up; it is marked, so nobody builds on it by mistake',
      body: [
        'A retraction is the formal withdrawal of a published paper from the scientific literature. The journal tells every reader that the paper\'s findings can no longer be relied on. The library guide at HKUST puts the purpose simply: retraction helps stop misleading information from spreading and makes sure that future research is not built on flawed or fraudulent findings.',
        'What surprises most students is that a retracted paper usually does not disappear. The ICMJE recommendations, which many medical journals follow, say that retracted articles should remain in the public domain and be clearly labelled as retracted. Elsevier, for example, publishes a retraction note and puts a "retracted" watermark on the PDF of the original paper.',
        {
          define: 'retraction',
          hint: 'noun',
          meaning: 'A notice from a journal that a published article is withdrawn because its findings or conclusions cannot be trusted. The article usually stays online, clearly marked, alongside a notice that explains why.',
          tone: 'red',
        },
        'Why keep it at all? Because other papers have already cited it. If it simply vanished, readers following those citations would find nothing and never learn what went wrong. A marked paper with a notice beside it tells the whole story.',
        {
          note: 'the Retraction Watch Database counts an article as retracted when the whole article is removed from publication, for a time or for good. When only part of a paper is withdrawn, it records that as a correction.',
          label: 'whole or part',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'retraction-vs-correction-vs-expression-of-concern',
      title: 'Retraction vs correction vs expression of concern',
      Art: CompareScene,
      caption: 'three notices, from a small fix to a full withdrawal',
      body: [
        'Journals have three kinds of notice for problems found after a paper is published. Nandini had seen the words "erratum" and "expression of concern" on PubMed before and had never stopped to read them. Wiley\'s policy page explains each one clearly.',
        {
          table: {
            head: ['notice', 'when it is used', 'what it means for you'],
            rows: [
              ['**correction** (erratum or corrigendum)', 'an error affects some data or details, but not enough to change the conclusions', 'you can still use the paper; read the corrected version'],
              ['**expression of concern**', 'there are serious concerns about the paper, but not enough evidence to retract it, often while an investigation is going on', 'use it with great care, and check back later for the outcome'],
              ['**retraction**', 'the findings cannot be relied on, through misconduct or honest error', 'do not use it as evidence for anything'],
            ],
          },
          tone: 'red',
        },
        'An expression of concern is a warning, not a verdict. The National Library of Medicine notes that the outcome of the concern may later require a retraction notice. So if you cite a paper with an expression of concern, check its status again before you submit your own work.',
        {
          note: 'some publishers also "retract and replace": the flawed paper is retracted and a corrected version is published in the same journal. The new version is the one to read and cite.',
          label: 'one more kind',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'why-papers-are-retracted',
      title: 'Why papers are retracted',
      Art: ReasonScene,
      caption: 'honest mistakes on one side, misconduct on the other, and the same red stamp for both',
      body: [
        'Nandini\'s first question was whether the authors had cheated. "Not always," said Dr. Varghese. "A retraction tells you the paper cannot be trusted. It does not, on its own, tell you why." Elsevier divides retractions into two broad groups.',
        {
          compare: {
            left: {
              title: 'honest error',
              tone: 'blue',
              mark: 'dots',
              items: [
                'a mistake in the analysis that changes the conclusion',
                'results that cannot be reproduced',
                'contaminated samples or faulty equipment',
                'the authors find the problem and ask to retract',
              ],
            },
            right: {
              title: 'misconduct',
              tone: 'red',
              mark: 'cross',
              items: [
                'fabricated or falsified data',
                'plagiarism of text or ideas',
                'the same work published twice',
                'false authorship claims or unethical research',
              ],
            },
          },
        },
        'Wiley\'s policy lists the same main grounds: clear evidence that the findings are unreliable, through misconduct or honest error; findings published before without proper cross referencing; plagiarism; and unethical research. The Retraction Watch Database uses a long list of more specific reasons, including paper mills, computer generated content and even "cites retracted work".',
        'Plagiarism is on every list, which is one more reason to keep careful notes on your sources from the start. Our guide to [types of plagiarism](/blogs/types-of-plagiarism/) explains the forms it takes, including the accidental ones.',
        {
          note: 'PubMed does not separate retractions for honest error from those for misconduct; both get the same label. To learn the reason, read the retraction notice itself.',
          label: 'read the notice',
          tone: 'red',
        },
      ],
    },
    {
      id: 'what-a-retracted-paper-looks-like',
      title: 'What a retracted paper looks like',
      Art: LabelScene,
      caption: 'the labels to look for on the journal page, the PDF and PubMed',
      body: [
        'Dr. Varghese opened the paper on the journal\'s website. Across the first page of the PDF ran the word RETRACTED. At the top of the web page was a link to a short notice. These are the signs to look for.',
        {
          list: [
            '**On the journal\'s page:** a banner or link to a notice, often titled "Retraction: [article title]".',
            '**On the PDF:** a watermark or stamp saying the article has been retracted.',
            '**In PubMed:** the article is tagged "Retracted Publication" and shows a link that begins "Retraction in:", pointing to the notice.',
            '**In reference lists and databases:** the title is sometimes shown with "RETRACTED" in front of it.',
          ],
          style: 'check',
        },
        'Under the ICMJE recommendations, the notice should explain why the article is being retracted, include a full citation of the article, and carry its title in the heading. It should also be labelled in every form: the abstract, the full text and the PDF.',
        'Nandini read the notice. The journal had found that several images of tissue samples had been duplicated and altered, and the authors could not supply the original data. The blood sugar results could not be trusted.',
      ],
    },
    {
      id: 'how-to-check-if-a-paper-is-retracted',
      title: 'How to check if a paper is retracted',
      Art: CheckScene,
      caption: 'four places to look, and a reference manager that keeps watching',
      body: [
        'A paper can be retracted years after it was published, long after you downloaded it. So the PDF in your folder may not show what the journal\'s website now does. Check before you rely on a paper, and check your whole reference list again before you submit.',
        {
          steps: [
            { title: 'Open the journal\'s page for the article.', text: 'Use the DOI link, not your saved PDF. Look for any notice of correction, concern or retraction.' },
            { title: 'Look it up in PubMed, for health and life science papers.', text: 'Check for the "Retracted Publication" tag or a linked notice.' },
            {
              title: 'Search the Retraction Watch Database.',
              text: 'It is free to search by title, author, journal, DOI and more, and it also lists many corrections and expressions of concern. Crossref acquired the database in September 2023 and made the data openly available.',
            },
            { title: 'Check the Crossref record.', text: 'Search the DOI on Crossref and look for linked updates such as retraction notices.' },
          ],
          tone: 'green',
        },
        'The easiest habit is to let your reference manager watch for you. Since June 2019, Zotero has flagged retracted items in your library using Retraction Watch data, and its word processor plugin warns you before you cite one. It works for items that have a DOI or a PubMed ID, so fill those in. Our guide on [how to use Zotero](/blogs/how-to-use-zotero/) shows how to set up your library.',
        {
          note: 'no single source catches everything. Editage\'s guide on avoiding retracted papers suggests using more than one tool, and Crossref notes that its records can be incomplete for some older papers and publishers.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'can-you-cite-a-retracted-paper',
      title: 'Can you cite a retracted paper?',
      Art: CiteScene,
      caption: 'out of the evidence, but kept in the story with its label on',
      body: [
        'Nandini\'s next worry was her literature review. Three paragraphs leaned on the retracted study. "You cannot use it as evidence," said Dr. Varghese. "But you can mention it, if you say clearly what happened to it."',
        {
          compare: {
            left: {
              title: 'do not',
              tone: 'red',
              mark: 'cross',
              items: [
                'cite it as support for your hypothesis',
                'quote its numbers as if they were sound',
                'cite it without saying it is retracted',
              ],
            },
            right: {
              title: 'you may',
              tone: 'green',
              mark: 'check',
              items: [
                'mention it when you discuss the history of the question',
                'cite the paper and its retraction notice together',
                'say clearly in your text that it was retracted',
              ],
            },
          },
        },
        'Elsevier\'s advice is to cite both the article and the retraction notice and to say in the text that the article was retracted. Editage suggests labelling it in the reference list, for example: Author AA, et al. RETRACTED: Title of article. Journal name, year, volume, pages. Follow your journal\'s or university\'s style if it gives a rule.',
        'Retractions affect metrics too. As our guide to the [impact factor](/blogs/what-is-impact-factor/) explains, citations to and from retracted papers are now left out of the top number in the calculation.',
        'Nandini rewrote her three paragraphs around two smaller studies that were sound. Her hypothesis became more modest, and much easier to defend.',
      ],
    },
    {
      id: 'if-your-own-paper-has-a-problem',
      title: 'What to do if your own paper has a problem',
      Art: OwnScene,
      caption: 'finding your own mistake and saying so is the honest end of the story',
      body: [
        'Most students will never face a retraction of their own work. But mistakes happen in honest research too, and how you respond matters more than the mistake. If you find a serious error in a published paper, tell your co-authors and your guide, then write to the journal\'s editor and explain what you found.',
        {
          list: [
            'if the error is small and the conclusions still hold, the journal may publish a **correction**',
            'if the error changes the conclusions, the authors can ask for the paper to be **retracted**',
            'the editor decides which notice fits, and the notice explains what happened',
          ],
          style: 'dots',
        },
        'The HKUST library guide notes that although retraction is usually seen as a bad thing, it also gives authors a way to take responsibility for their work and keep their credibility. A retraction you ask for yourself, for an honest mistake, reads very differently from one forced by an investigation.',
        'The best protection is the boring kind: keep your raw data, record every step of your analysis, never alter an image beyond what the journal allows, and give credit to every source. Our guide on [ethical considerations in research](/blogs/ethical-considerations-in-research/) covers these habits in more detail.',
        'Before her review meeting, Nandini ran her whole Zotero library through one more check. No other red banners. In the meeting, a committee member asked why she no longer cited the well known extract study. She explained that it had been retracted, and showed the notice. He nodded and moved on to the next question.',
      ],
    },
  ],

  takeaways: [
    'A retraction is a formal notice that a published paper\'s findings cannot be relied on. The paper usually stays online, clearly marked.',
    'A correction fixes a small error, an expression of concern is a warning, and a retraction withdraws the paper.',
    'Papers are retracted for honest errors and for misconduct; read the retraction notice to learn which.',
    'Check papers on the journal\'s page, PubMed, the Retraction Watch Database and Crossref, and let Zotero flag retracted items for you.',
    'Never use a retracted paper as evidence; if you mention it, cite the paper and its notice and say it was retracted.',
  ],

  faq: [
    {
      q: 'Is a retracted paper the same as a fake paper?',
      a: 'No. Some retracted papers involve fabricated data, but many are retracted for honest errors that the authors found themselves. The retraction notice explains the reason in each case.',
    },
    {
      q: 'Does a retracted paper get deleted?',
      a: 'Usually not. Guidance such as the ICMJE recommendations says retracted articles should stay public and be clearly labelled, so that anyone who finds them also finds the notice. In rare cases an article is removed altogether, and a notice is left in its place.',
    },
    {
      q: 'What happens to authors when a paper is retracted?',
      a: 'It depends on the reason. A retraction for an honest error that the authors reported themselves is generally viewed as responsible behaviour. A retraction for misconduct is far more serious and carries a real risk to the researcher\'s reputation.',
    },
    {
      q: 'Can a retracted paper be published again?',
      a: 'Sometimes. A journal may retract a flawed paper and publish a corrected version in its place, and PubMed links such pairs as "retracted and republished". The corrected version is the one to read and cite.',
    },
  ],

  cta: {
    title: 'Build on papers you can trust',
    text: 'Fiberarticle finds papers through OpenAlex, Semantic Scholar, Crossref and arXiv, reads the open-access ones with you and shows the source behind every line it writes, so you can check each one before you cite it. One payment unlocks all of it, for good.',
  },
}
