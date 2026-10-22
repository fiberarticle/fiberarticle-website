import Hero from './hero.jsx'
import {
  CalculateScene,
  CompareScene,
  DatabasesScene,
  FindScene,
  GoodScene,
  MeaningScene,
  ReadScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'sort the papers by citations, and count the steps until the bars fall short',
  },

  intro: [
    'Tenzin Dolma had spent five monsoons in the forests of Sikkim, counting wild orchids and the insects that visit them. She is a PhD scholar in Botany at a university in Gangtok, and her thesis was nearly done. Eight papers had come out of it, some with her guide, Dr. Pradhan, and some with friends from other labs.',
    'Then came the form for a postdoctoral fellowship. Between "date of birth" and "list of publications" sat a small box: h-index. Tenzin checked her Google Scholar profile and found 6. A friend checked Scopus for her and found 4. "Which one is true?" she asked Dr. Pradhan. "Both," he said, "and neither tells the whole story. Sit down, we will work it out by hand."',
    'This blog explains what is h-index the way Dr. Pradhan explained it to Tenzin: what the number means, how to calculate it, where to find it, why the databases disagree, and what it can never tell anyone about your work.',
  ],

  sections: [
    {
      id: 'what-is-h-index',
      title: 'What is h-index?',
      Art: MeaningScene,
      caption: 'h papers, each cited at least h times',
      body: [
        'The h-index is one number that looks at two things together: how many papers you have published, and how often they have been cited. The physicist Jorge Hirsch proposed it in 2005, in a paper in *PNAS*. He defined it as "the number of papers with citation number higher or equal to h".',
        'In plain words: **your h-index is h if h of your papers have each been cited at least h times.** An h-index of 6 means you have six papers with at least six citations each, but not seven papers with at least seven.',
        {
          define: 'h-index',
          hint: 'noun',
          meaning: 'the largest number h such that h of a researcher\'s papers have each received at least h citations.',
          tone: 'red',
        },
        'Hirsch wanted a number that rewards steady work. A long list of papers nobody cites does not raise it much. Neither does one famous paper on its own. To reach an h-index of 10, you need ten papers that other researchers have each cited at least ten times.',
        {
          note: 'Hirsch\'s study looked at physicists, though he suggested the index should be useful in other sciences as well. Keep that origin in mind when you compare across fields, as later sections explain.',
          label: 'good to know',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'how-to-calculate-h-index',
      title: 'How to calculate h-index, step by step',
      Art: CalculateScene,
      caption: 'paper six has six citations; paper seven has only three',
      body: [
        'Dr. Pradhan took a sheet of paper and asked Tenzin to read out the "cited by" number for each of her eight papers from Google Scholar. Then he showed her the method. You can do it with any list of citation counts.',
        {
          steps: [
            { title: 'List your papers.', text: 'Write down every paper with the number of times it has been cited.' },
            { title: 'Sort them.', text: 'Put the most cited paper first and the least cited last.' },
            { title: 'Number them.', text: 'Give each paper a rank: 1, 2, 3 and so on, down the list.' },
            { title: 'Find the crossing point.', text: 'Go down the list while the citations are still equal to or greater than the rank. The last rank where that is true is your h-index.' },
          ],
          tone: 'red',
        },
        {
          table: {
            head: ['rank', 'citations (Google Scholar)', 'citations at least the rank?'],
            rows: [
              ['1', '24', 'yes'],
              ['2', '15', 'yes'],
              ['3', '9', 'yes'],
              ['4', '7', 'yes'],
              ['5', '6', 'yes'],
              ['6', '6', 'yes'],
              ['7', '3', 'no'],
              ['8', '1', 'no'],
            ],
          },
          tone: 'red',
        },
        'Paper six has six citations, so the condition holds at rank 6. Paper seven has three citations, which is less than 7, so it stops there. **Tenzin\'s h-index in Google Scholar is 6.**',
        'Notice what does not matter. If her top paper had 240 citations instead of 24, her h-index would still be 6. If she published a ninth paper tomorrow with no citations, it would still be 6. It rises only when another paper crosses the line: here, when paper seven reaches seven citations and paper six still has at least seven.',
      ],
    },
    {
      id: 'what-the-h-index-tells-you',
      title: 'What the h-index tells you, and what it hides',
      Art: ReadScene,
      caption: 'one famous paper or forty quiet ones: both can give a small h',
      body: [
        'Because the h-index needs both many papers and many citations, it smooths out the extremes. That is its strength, and also why it hides things.',
        {
          list: [
            '**A single famous paper counts once.** A researcher with one paper cited 500 times has an h-index of 1.',
            '**Many uncited papers count for nothing.** Forty papers with two citations each give an h-index of 2.',
            '**It rarely goes down.** Citations only add up, so the number usually stays the same or rises, even after you stop publishing.',
            '**It grows with time.** Hirsch himself observed that h should increase roughly in step with the years of a career, so a senior professor will almost always have a higher h-index than a new PhD scholar.',
            '**It ignores your role.** First author, last author or tenth author: every paper you are on counts the same.',
          ],
          style: 'dots',
        },
        'For an early researcher like Tenzin, the last two points matter most. Her h-index of 6 after five years says very little next to a professor\'s h-index of 30 after thirty years. Hirsch suggested dividing the h-index by the number of years since a researcher\'s first paper, which he called *m*, as a fairer way to compare people at different stages.',
      ],
    },
    {
      id: 'where-to-find-your-h-index',
      title: 'Where to find your h-index: Google Scholar, Scopus and Web of Science',
      Art: FindScene,
      caption: 'three databases, three ways in',
      body: [
        'You rarely need to calculate the number by hand. Three databases work it out for you, each from the papers and citations it has indexed.',
        {
          table: {
            head: ['database', 'where the h-index appears', 'access'],
            rows: [
              ['Google Scholar', 'On your Google Scholar profile, in a small table on the right: citations, h-index and i10-index, each shown for "All" and for a recent period (the last five years).', 'free; you create the profile yourself'],
              ['Scopus', 'Search "Authors" by name and affiliation, or by ORCID iD, and open the author details page.', 'subscription, usually through your university library'],
              ['Web of Science', 'Search for the author, then create a citation report from the results.', 'subscription, usually through your university library'],
            ],
          },
          tone: 'blue',
        },
        'Google Scholar\'s help page says it computes "two versions, All and Recent, of three metrics": the h-index, the i10-index and the total number of citations. The i10-index is simply the number of your papers with at least ten citations. Tenzin\'s i10-index was 2.',
        'If your profile is meant to be found, make it public and add a verified email address at your university. Google Scholar says both are needed for a profile to appear in its search results.',
        {
          note: 'search Scopus by your ORCID iD rather than your name if you can. Names like "T. Dolma" are shared by many researchers. Our guide on [how to create an ORCID iD](/blogs/how-to-create-orcid-id/) explains why one identifier helps.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'why-google-scholar-and-scopus-differ',
      title: 'Why Google Scholar and Scopus give different h-index values',
      Art: DatabasesScene,
      caption: 'the same eight papers, seen through two different windows',
      body: [
        'Tenzin\'s 6 and 4 were both correct. Each database is likely to produce a different h-index for the same person, because each one covers different publications and counts different citations.',
        'The University of Texas at Dallas library guide explains that Google Scholar\'s h-index "tends to be higher" than the ones from Scopus and Web of Science, because Google Scholar also includes other publications such as books, while the other two count citations in journals and conference proceedings. It adds that Google Scholar has no filter to remove self-citations, and is less good at removing duplicate entries.',
        {
          compare: {
            left: {
              title: 'Google Scholar',
              tone: 'blue',
              mark: 'dots',
              items: [
                'wide coverage: journals, books, theses, preprints',
                'self-citations included',
                'duplicates possible',
                'free, and you manage the profile',
              ],
            },
            right: {
              title: 'Scopus',
              tone: 'green',
              mark: 'dots',
              items: [
                'selected journals and conference proceedings',
                'smaller, more curated index',
                'profile built by the database',
                'needs a subscription',
              ],
            },
          },
        },
        'Dr. Pradhan found Tenzin\'s gap quickly. Two of her citations came from a book chapter and a master\'s thesis that Scopus does not cover, and one of her papers appeared twice in Google Scholar. She merged the duplicate, which Google Scholar\'s help page explains how to do: select both versions and click "Merge". The h-index stayed at 6, but now it was honest.',
        {
          note: 'whenever you report an h-index, say which database it came from and on what date, for example "h-index 6 (Google Scholar, October 2026); 4 (Scopus)". A bare number invites doubt.',
          label: 'tip',
          tone: 'green',
        },
      ],
    },
    {
      id: 'h-index-vs-impact-factor',
      title: 'h-index vs i10-index vs impact factor',
      Art: CompareScene,
      caption: 'one measures a person, one counts papers, one describes a journal',
      body: [
        'These three numbers are often mixed up on forms and in conversations. They measure different things.',
        {
          table: {
            head: ['metric', 'what it describes', 'how it is worked out'],
            rows: [
              ['h-index', 'a researcher', 'h papers with at least h citations each'],
              ['i10-index', 'a researcher (Google Scholar only)', 'the number of papers with at least ten citations'],
              ['impact factor', 'a journal', 'citations in one year to what the journal published in the previous two years, divided by the number of citable items'],
            ],
          },
          tone: 'amber',
        },
        'Our post on [what is impact factor](/blogs/what-is-impact-factor/) explains the journal number in detail. The key point is that a high impact factor belongs to the journal, not to you or to your paper. The San Francisco Declaration on Research Assessment, known as DORA, asks that journal-based metrics not be used "to assess an individual scientist\'s contributions, or in hiring, promotion, or funding decisions."',
        'The h-index at least looks at your own papers and their own citations. That makes it more personal than an impact factor, but it is still only a count.',
      ],
    },
    {
      id: 'what-is-a-good-h-index',
      title: 'What is a good h-index?',
      Art: GoodScene,
      caption: 'the number grows slowly, one well-cited paper at a time',
      body: [
        'There is no single good h-index. It depends on your field and on how long you have been publishing. Hirsch noted that typical values differ between fields, and that high h-indices in the life sciences are much higher than in physics. Fields where papers carry long reference lists, or where many people publish often, produce higher numbers. So compare yourself only with people in the same field and at a similar stage, and better still, with your own number from last year.',
        'As for raising it, there are no shortcuts worth taking. The honest ways are the slow ones.',
        {
          compare: {
            left: {
              title: 'helps, honestly',
              tone: 'green',
              mark: 'check',
              items: [
                'doing work that others need to build on',
                'publishing in journals your field reads',
                'sharing an open-access version where allowed',
                'a clean profile: duplicates merged, ORCID linked',
              ],
            },
            right: {
              title: 'never do this',
              tone: 'red',
              mark: 'cross',
              items: [
                'citing your own papers where they do not belong',
                'citation swaps with friends',
                'adding papers that are not yours to your profile',
                'paying for citations',
              ],
            },
          },
        },
        'Our guide on [how to publish a research paper](/blogs/how-to-publish-a-research-paper/) covers the steps that make good work easy to find and cite.',
        'Tenzin filled in the box with both numbers, the database names and the date. In the section for her research statement, she wrote about what her orchid surveys had shown and who had used them. "The committee will see the number," Dr. Pradhan said, "but they will remember the orchids."',
      ],
    },
  ],

  takeaways: [
    'Your h-index is h if h of your papers have each been cited at least h times.',
    'To calculate it, sort your papers by citations and find the last rank where the citations are still at least the rank.',
    'Google Scholar, Scopus and Web of Science each give a different h-index, because they cover different publications.',
    'Always report the database and the date with the number, and keep your profiles clean.',
    'The h-index depends on field and career length, so compare only like with like, and never chase it with citation tricks.',
  ],

  faq: [
    {
      q: 'What is the difference between h-index and i10-index?',
      a: 'The h-index is the largest h for which h of your papers have at least h citations each. The i10-index, shown only by Google Scholar, is simply the number of your papers with at least ten citations.',
    },
    {
      q: 'Why is my h-index higher in Google Scholar than in Scopus?',
      a: 'Google Scholar indexes more kinds of publications, such as books and theses, and it does not remove self-citations, so it usually finds more citations. Scopus covers a selected set of journals and conference proceedings.',
    },
    {
      q: 'Can my h-index go down?',
      a: 'Not as long as the citations stay in the database, because citations only add up. It can drop if a database removes duplicates or wrongly added papers, or if you clean up your own profile.',
    },
    {
      q: 'Does the h-index count self-citations?',
      a: 'Google Scholar includes them and has no filter to remove them. If you want to check how much of your number rests on your own citations, look at who is citing each of your papers.',
    },
  ],

  cta: {
    title: 'Build the work that earns the citations',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref for the papers in your area, reads the open-access ones and shows the source behind every line it writes. One payment unlocks all of it, for good.',
  },
}
