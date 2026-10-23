import Hero from './hero.jsx'
import {
  CallScene,
  ContributionScene,
  FormatScene,
  JournalScene,
  SubmitScene,
  TemplateScene,
  TypesScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'sixty-four pages of dissertation, one idea, twelve pages of paper',
  },

  intro: [
    'Ritesh Hembrom is in the final year of his MTech in Mining Engineering at an institute in Dhanbad. His dissertation asks whether cheap dust sensors can warn villages near the open-cast coal mines of Jharia when the dust in the air rises. For a year he has compared their readings with a proper monitoring station, and built a small model that corrects their errors. This term he also has to learn how to write a conference paper.',
    'In August his guide, Dr. Sunita Kerketta, forwarded him a call for papers from an international conference on sustainable mining at an engineering college in Nagpur. The proceedings were to come out in a Springer book series. Ritesh had a sixty-four page draft of his dissertation, so he copied his methods and results chapters into a new file and called it a conference paper. It was twenty-three pages long. Dr. Kerketta read the first page and asked, "What is the one thing a reviewer should remember after reading this?"',
    'This blog explains how to write a conference paper the way Ritesh learned to: what a conference paper is, the call for papers, choosing one contribution, the format section by section, the template and page limit, what happens after you submit, and how the paper can later grow into a journal article.',
  ],

  sections: [
    {
      id: 'what-is-a-conference-paper',
      title: 'What is a conference paper?',
      Art: TypesScene,
      caption: 'four sizes of conference paper, from a full paper down to an extended abstract',
      body: [
        'Editage describes a conference paper as a short, peer-reviewed report of original research, published in the conference proceedings. It is usually presented at the conference too. In engineering and computer science it is often a student\'s first publication.',
        'Conferences ask for different kinds of papers, and the call for papers will say which ones it accepts. Editage lists four common types:',
        {
          table: {
            head: ['type', 'what it is', 'typical length (Editage)'],
            rows: [
              ['full paper', 'complete research with methods and results', '6 to 10 pages'],
              ['short paper', 'a smaller result or work in progress', '2 to 4 pages'],
              ['poster paper', 'a short paper presented as a poster', 'set by the conference'],
              ['extended abstract', 'a longer summary of the work', 'about 1 to 4 pages'],
            ],
          },
          tone: 'blue',
        },
        '**Conference paper vs journal paper.** A journal paper is longer and more complete, and its review is usually slower and more thorough. A conference paper is shorter, it is reviewed more quickly, and it is built to be presented in a few minutes.',
        'Ritesh\'s call asked for full papers, so he needed real results, not a plan, in a limited number of pages.',
      ],
    },
    {
      id: 'read-the-call-for-papers',
      title: 'Read the call for papers before you write a word',
      Art: CallScene,
      caption: 'the call for papers sets the rules, and the checklist tests the conference',
      body: [
        'The call for papers, often shortened to CFP, is the conference\'s rule book. Editage warns that going over the page limit "can lead to automatic rejection", so read the call before you plan a single section. Ritesh printed his and marked these points:',
        {
          list: [
            '**The scope and tracks.** Does your topic fit one of the themes the conference lists?',
            '**The paper type and page limit.** His call allowed 12 pages, including references.',
            '**The template.** His conference wanted Springer\'s LNCS template, in Word or LaTeX.',
            '**The kind of review.** His was double-blind, so his name could not appear in the paper.',
            '**The deadlines.** Paper submission, notification of acceptance, camera-ready version and registration.',
            '**Where the proceedings will be published,** and whether at least one author must register and present.',
          ],
          style: 'check',
        },
        'Then check the conference itself. Library guides on predatory conferences warn that fake ones mostly target early career researchers, and some are cancelled without refunds. The Think. Check. Attend. initiative publishes a checklist that "aims to guide and assist researchers and scholars to judge the legitimacy and academic credentials of conferences." Its questions include "Are you aware of the society or the association organizing this conference?" and "Is the Organizing Committee clear about where the proceedings will be published?"',
        'If the conference promises Scopus indexing, check the book series behind it, not the logo on the poster. Our guide on [how to check a Scopus indexed journal](/blogs/how-to-check-scopus-indexed-journal/) has a section on conferences.',
        {
          note: 'be careful if you cannot find who organises the conference, if the fees are unclear, or if nobody can say where the proceedings will be published.',
          label: 'watch out',
          tone: 'red',
        },
      ],
    },
    {
      id: 'choose-one-contribution',
      title: 'How to write a conference paper around one contribution',
      Art: ContributionScene,
      caption: 'a whole dissertation goes in, one clear idea comes out',
      body: [
        'Many first conference papers go wrong the way Ritesh\'s first draft did: they try to carry the whole thesis. Reviewers read many papers for one conference and need to see quickly what is new in yours. Guides on conference writing suggest choosing a single core contribution, such as a new method, an improvement on an existing approach, insights from a case study or a new dataset or tool, and stating it in one sentence.',
        'Ritesh\'s dissertation had four parts: a review of dust monitoring methods, a survey of village health clinics, the sensor comparison and the correction model. Dr. Kerketta asked him which part another researcher could not find anywhere else. It was the correction model. After three tries his sentence read: *a simple correction model makes cheap dust sensors track a monitoring station closely enough to warn nearby villages.*',
        {
          steps: [
            { title: 'Write the sentence first.', text: 'If you cannot state your contribution in one sentence, the reviewer will not be able to either.' },
            { title: 'Keep only what proves it.', text: 'Every figure, table and paragraph should support that sentence. Ritesh kept the sensor comparison and the model, and saved the survey for later.' },
          ],
          tone: 'green',
        },
      ],
    },
    {
      id: 'conference-paper-format',
      title: 'Conference paper format, section by section',
      Art: FormatScene,
      caption: 'a short start, a clear method, and most of the pages on results',
      body: [
        'A conference paper follows the order of a journal paper, only shorter. Editage says most are 4 to 8 pages in two columns, and gives a typical length for each part. Here it is beside what Ritesh wrote.',
        {
          table: {
            head: ['section', 'typical length (Editage)', 'in Ritesh\'s paper'],
            rows: [
              ['title', 'under 15 words', 'the sensors, the model and the place, in twelve words'],
              ['abstract', '150 to 250 words', 'problem, method, main result and why it matters'],
              ['introduction', 'half a page to a page', 'dust near the mines, the cost of monitors, the gap, his aim'],
              ['methodology', '1 to 2 pages', 'sensor sites, the reference station, the correction model'],
              ['results and discussion', '1 to 3 pages', 'readings before and after correction, and what they mean'],
              ['conclusion', 'a quarter to half a page', 'the main finding, its limits and next steps'],
              ['references', 'half a page to a page', '24 sources, all of them read'],
            ],
          },
          tone: 'amber',
        },
        'Many conference papers add a short related work section after the introduction, and many combine results and discussion to save space. Follow recent papers from the same conference.',
        'The abstract matters more than its size suggests, because committees often sort papers by it. Our guide on [how to write an abstract](/blogs/how-to-write-an-abstract/) shows how to fit problem, method, result and meaning into a few sentences. Editage also suggests reading three to five accepted papers from the conference before you write, to see the tone and the level of detail reviewers expect.',
        {
          note: 'keep paragraphs short. Editage suggests keeping most paragraphs under 100 words, which also helps in a narrow two-column layout.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'template-and-page-limit',
      title: 'Use the conference template and stay within the page limit',
      Art: TemplateScene,
      caption: 'fifteen pages will not fit in twelve, and the name has to go for review',
      body: [
        'Conferences publish their papers through a publisher, and the publisher sets the layout. Editage names the common templates: IEEEtran for IEEE, the ACM template, LNCS for Springer and Elsevier\'s article template, each in LaTeX and Word. IEEE offers its conference template in A4 and US Letter sizes. Download the template from the conference website, since some conferences change it slightly.',
        'Write inside the template from the start. Ritesh wrote in plain Word and moved his text into the LNCS file a week before the deadline. It ran to fifteen pages, and cutting three taught him these rules.',
        {
          list: [
            '**Check whether references count.** Limits differ. The 2024 ISSEP conference, which used LNCS, set a "strict: 12 pages, including references" limit. Some IEEE conferences count references and some do not.',
            '**Do not shrink the margins or fonts.** Some conferences that use LNCS warn that changes to the style file will be undone, and IEEE asks authors to delete the template\'s guidance text before submitting.',
            '**Cut words, not results.** Ritesh removed his history of dust monitoring, merged two tables into one, and shortened every figure caption.',
          ],
          style: 'check',
        },
        'His conference also used double-blind review, so reviewers would not see who wrote the paper. Anonymising takes more than deleting your name. Guidelines from the HRI conference ask authors to remove names and institutions from the first page, the acknowledgements and the PDF file\'s metadata. The SC conference asks authors to refer to their own earlier work in the third person. Ritesh changed "the dust survey at our institute" to "a mining area in eastern India", and cited Dr. Kerketta\'s earlier study as "Kerketta et al. [7] showed", not "our earlier work".',
        {
          note: 'leave at least two full days before the deadline only for formatting and checking references, as Editage advises.',
          label: 'tip',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'submission-review-and-camera-ready',
      title: 'Submission, reviews and the camera-ready version',
      Art: SubmitScene,
      caption: 'submit, wait for the reviews, revise, and send the final camera-ready file',
      body: [
        'Conferences take papers through an online system such as EasyChair or Microsoft CMT. You fill in the title, abstract and authors, and upload the PDF. Ritesh submitted two days early and checked that the uploaded PDF showed no names.',
        'Seven weeks later the decision came: accepted, with comments from two reviewers. Editage says acceptance rates are about 15 to 25 percent at highly competitive conferences and above 50 percent at smaller or regional ones.',
        'An accepted paper is not finished yet. The final version you send for publication is called the **camera-ready** paper, and it comes with its own list:',
        {
          steps: [
            { title: 'Answer the reviewers.', text: 'Fix what they asked for. One of Ritesh\'s reviewers wanted to know how the model behaved during the monsoon, so he added a short paragraph and one line to a table.' },
            { title: 'Put the names back.', text: 'Add the authors, affiliations and acknowledgements removed for review. ISSEP 2024 also asked for each author\'s ORCID.' },
            { title: 'Sign the copyright or licence form.', text: 'Springer conferences ask the corresponding author to sign a licence to publish for all the authors, and other publishers have their own forms. ISSEP noted that authorship cannot be changed once files go to Springer.' },
            { title: 'Register and present.', text: 'Many conferences publish only papers that are presented. ISSRE 2026, an IEEE conference, says papers not presented are dropped from the proceedings and not sent to IEEE Xplore.' },
          ],
          tone: 'green',
        },
        'For the talk itself, our guide on [how to present a research paper](/blogs/how-to-present-a-research-paper/) covers slides, timing and questions.',
      ],
    },
    {
      id: 'conference-paper-to-journal-paper',
      title: 'Can a conference paper become a journal paper?',
      Art: JournalScene,
      caption: 'the journal version adds new work and cites the conference paper',
      body: [
        'Often, yes. Many journals accept an extended version of a conference paper, but only if it adds substantial new work. The IEEE Communications Society asks for "a significant amount of new material beyond that of the conference paper(s)". It does not set a number, and it says "we do not have a quantitative threshold for determining it." Authors must "inform the editor about these prior publications" and "cite the prior conference papers".',
        'Other editors use a rule of thumb. The editors of the journal Software Testing, Verification and Reliability describe a common guideline that a new paper should have at least 30 percent significant new material. Rules differ by publisher and journal, so read the policy of the journal you are aiming at.',
        'New material means new work, such as more data or a new experiment, not the same results in longer sentences. Ritesh plans to add a second year of readings and a test of the model at two more mines. He will cite his conference paper and mention it in his cover letter.',
        {
          note: 'reusing your own published text without saying so can be treated as self plagiarism. Our guide on [what self plagiarism is](/blogs/what-is-self-plagiarism/) explains how to reuse your earlier work honestly.',
          label: 'remember',
          tone: 'red',
        },
        'Ritesh presented his paper in Nagpur. A researcher from a pollution control board asked whether the sensors could be placed near schools. He did not know yet, and said so. It became the first line of his plan for the journal version.',
      ],
    },
  ],

  takeaways: [
    'A conference paper is a short, complete report of one piece of original research, reviewed and usually published in the conference proceedings.',
    'Read the call for papers first: scope, paper type, page limit, template, kind of review and deadlines. Check that the conference is genuine.',
    'Choose one contribution you can state in one sentence, and keep only what proves it.',
    'Follow the usual format: title, abstract, introduction, method, results and discussion, conclusion and references, inside the conference template from the start.',
    'After acceptance, revise for the reviewers, prepare the camera-ready version, sign the copyright form, and register and present.',
  ],

  faq: [
    {
      q: 'How many pages is a conference paper?',
      a: 'It depends on the conference. Editage says most conference papers are 4 to 8 pages in a two-column format, full papers often 6 to 10 and short papers 2 to 4. Springer LNCS conferences often allow around 12 pages. The call for papers gives the exact limit and says whether references count.',
    },
    {
      q: 'What is the difference between a conference paper and a journal paper?',
      a: 'A conference paper is shorter, reviewed faster and presented at the event, and it is published in the conference proceedings. A journal paper is longer and more complete, and its review is usually slower and more detailed.',
    },
    {
      q: 'What is a camera-ready paper?',
      a: 'It is the final version of an accepted conference paper, revised after the reviews, with the authors\' names restored and formatted exactly to the template, ready to be published in the proceedings.',
    },
    {
      q: 'How many references should a conference paper have?',
      a: 'There is no fixed number. Editage suggests that good examples cite about 20 to 40 sources and short papers about 10 to 15. Cite what you need to place your work, and only sources you have read.',
    },
  ],

  cta: {
    title: 'Find the closest studies to your contribution',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and shows the source behind every line it writes, so the related work in your conference paper rests on papers you have actually read. One payment unlocks all of it, for good.',
  },
}
