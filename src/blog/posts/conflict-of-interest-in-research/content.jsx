import Hero from './hero.jsx'
import {
  ConsequenceScene,
  ExampleScene,
  MeaningScene,
  SampleScene,
  StatementScene,
  TypesScene,
  WhoScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'the company had no say in the results, but readers still deserved to know it was there',
  },

  intro: [
    'Gauri Deshmukh is in the second year of her PhD in Agronomy at an agricultural university in Parbhani. Her field trial asks whether a spray made from seaweed extract raises the yield of soybean on the black soils of Marathwada. A company in Pune that sells the spray gave her the cans for her trial plots, free, and paid her registration and train fare for a conference in Hyderabad. Her guide, Dr. Sudhir Jadhav, sits on the same company\'s advisory panel.',
    'When she sent her first paper to a journal, the form had a box for competing interests. Gauri typed what she had seen in many papers: "The authors declare no conflict of interest." Two weeks later the editor wrote back. Dr. Jadhav\'s own disclosure form listed a yearly honorarium from the company whose spray the paper tested. Why did the paper say there was nothing to declare? Gauri had done the trial honestly. She did not know what she had done wrong. She typed into Google: conflict of interest in research.',
    'This blog explains what she learned: what a conflict of interest in research means, its types with examples, who has to declare one, how to write a conflict of interest statement, sample statements you can adapt, and what happens when a conflict is not declared.',
  ],

  sections: [
    {
      id: 'what-is-conflict-of-interest-in-research',
      title: 'What is conflict of interest in research?',
      Art: MeaningScene,
      caption: 'the main job on one side, a second interest on the other, and the judgment in between',
      body: [
        'Every researcher has a main duty: to find out what is true and report it fairly. A conflict of interest is any other interest that could pull on that duty. It may be money, a friendship, a rivalry or a strong belief.',
        'The International Committee of Medical Journal Editors (ICMJE), whose recommendations many journals follow, describes it as a situation where professional judgment about a primary interest may be influenced by a secondary interest. In India, the ICMR National Ethical Guidelines for Biomedical and Health Research Involving Human Participants, 2017, use a similar definition:',
        {
          define: 'conflict of interest',
          hint: 'noun',
          meaning: '"A set of conditions in which professional judgment concerning a primary interest like patient\'s welfare or the validity of research tends to be or appears to be unduly influenced by a secondary interest like non-financial (personal, academic or political) or financial gain." (ICMR, 2017)',
          tone: 'pink',
        },
        'Notice the words *appears to be*. The ICMJE says it plainly: perceptions of conflict of interest are as important as actual conflicts. Gauri had not changed a single number for the company. But a reader who later found out about the free cans and the honorarium might wonder, and that doubt is what a declaration is meant to clear away.',
        {
          note: 'having a conflict of interest is not misconduct. Almost every researcher has one at some point. The problem starts when it is hidden.',
          label: 'remember',
          tone: 'green',
        },
      ],
    },
    {
      id: 'types-of-conflict-of-interest',
      title: 'Types of conflict of interest in research',
      Art: TypesScene,
      caption: 'money is the easiest kind to see, but it is only one of five',
      body: [
        'Dr. Jadhav sat Gauri down in his office and drew five boxes on the back of an old exam sheet. Journals and guidelines sort conflicts in slightly different ways, but most lists look like this.',
        {
          table: {
            head: ['type', 'what it means', 'example'],
            rows: [
              ['**financial**', 'money or something worth money that could gain from the result', 'Dr. Jadhav\'s honorarium from the spray company; free product, paid travel, shares, a patent'],
              ['**personal**', 'a family tie, friendship or rivalry with someone who gains or loses', 'Gauri\'s cousin works in the company\'s sales team in Latur'],
              ['**academic or intellectual**', 'a strong stake in a theory, an earlier finding or competition with another group', 'a scientist who built a career on one method reviewing a paper that questions it'],
              ['**institutional**', 'the university itself gains from a result', 'a university that owns part of a start-up whose product its own staff are testing'],
              ['**reviewer or editor**', 'the person judging the paper has a tie to its authors or topic', 'an editor asked to handle a paper by a student they supervised'],
            ],
          },
          tone: 'pink',
        },
        'The ICMJE says financial relationships, such as employment, consultancies, stock ownership or options, honoraria, patents and paid expert testimony, are the easiest to identify. It lists the non-financial kind too: personal relationships or rivalries, academic competition and intellectual beliefs.',
      ],
    },
    {
      id: 'conflict-of-interest-examples',
      title: 'Conflict of interest examples students often miss',
      Art: ExampleScene,
      caption: 'a free sample, a paid ticket, a cousin on the payroll: small things that still count',
      body: [
        'Most conflicts students meet are small. Editage lists several that authors often overlook, and Gauri found three of her own in the list.',
        {
          list: [
            '**In-kind support:** free chemicals, seeds, kits, software licences or instrument time from a company. The cans of spray were this.',
            '**Paid travel or fees:** conference registration, train or air fare, or a speaking fee paid by someone with a stake in your topic.',
            '**Family ties:** a spouse, parent, sibling or close relative who works for the sponsor or the maker of the product.',
            '**Unpaid roles:** a seat on an advisory board or a society committee, even when no money changes hands.',
            '**Your guide\'s ties:** every co-author\'s interests count, not only your own. Dr. Jadhav\'s honorarium belonged in the paper\'s statement.',
            '**Your own stake:** a patent, a start-up or a product you plan to sell that your results could help.',
          ],
          style: 'dots',
        },
        'The ICMJE form asks authors to think broadly. Its instructions give the example of a paper on the epidemiology of hypertension: the authors should declare all relationships with makers of blood pressure medicines, even if no medicine is named in the paper.',
        'Funding on its own is not always a conflict. Editage puts it simply: funding becomes a conflict when the funder could benefit from a particular result. A government fellowship for Gauri\'s trial would be declared as funding. The company\'s free spray had to be declared as both.',
      ],
    },
    {
      id: 'who-must-declare',
      title: 'Who has to declare a conflict of interest?',
      Art: WhoScene,
      caption: 'authors, reviewers, editors and ethics committee members each declare their own',
      body: [
        'Gauri had assumed the statement was the corresponding author\'s job alone. It is not. Declaring is everyone\'s job, at every stage a paper passes through.',
        {
          steps: [
            { title: 'Every author.', text: 'Under the ICMJE recommendations, authors are responsible for disclosing all relationships and activities that might bias their work. Journals that use the ICMJE form ask each author to fill in their own.' },
            { title: 'The corresponding author.', text: 'Collects what every co-author declares and makes sure the statement in the paper matches all of it. This is where Gauri\'s paper went wrong.' },
            { title: 'Peer reviewers.', text: 'The ICMJE asks reviewers to tell the editor about anything that could bias their opinion, to step aside if there is a risk of bias, and never to use what they read for their own work.' },
            { title: 'Editors.', text: 'Editors with a conflict should stay out of the decision on that paper, and journal staff must not use what they see in manuscripts for private gain.' },
            { title: 'Ethics committee members.', text: 'The ICMR guidelines cover conflicts at the level of researchers and of ethics committee members. Committee rules at Indian institutions usually ask a member with a conflict to declare it, leave the room while that study is discussed, and not vote on it.' },
          ],
          tone: 'pink',
        },
        'A month later the lesson came back to Gauri from the other side. A journal invited her to review a paper on soybean irrigation. The first author was Pooja, her closest friend from her MSc batch. Gauri wrote to the editor, said why, and declined. Read more about how reviewers are chosen in our guide to [peer review](/blogs/peer-review-explained/).',
      ],
    },
    {
      id: 'how-to-write-a-conflict-of-interest-statement',
      title: 'How to write a conflict of interest statement',
      Art: StatementScene,
      caption: 'collect from everyone, check the time window, name names, and say what the funder did',
      body: [
        'A conflict of interest statement, also called a competing interests statement or declaration of interest, is a short paragraph in your paper, often placed near the acknowledgements or just before the references. Elsevier\'s guidance says authors must state explicitly whether potential competing interests do or do not exist, so you may be asked for one even when there is nothing to declare.',
        'Dr. Jadhav and Gauri rewrote theirs in an afternoon, following these steps.',
        {
          steps: [
            { title: 'Read the journal\'s guide for authors first.', text: 'Some want the statement in the manuscript, some want a separate form, some want both. Many medical journals use the ICMJE disclosure form; Elsevier offers its own Declaration Tool.' },
            { title: 'Collect a declaration from every co-author.', text: 'Ask each one in writing. Do not guess for them.' },
            { title: 'Use the right time window.', text: 'On the ICMJE form, support for the submitted work is reported with no time limit, and most other relationships cover the past 36 months. Other journals set their own periods.' },
            { title: 'Name the people, the organisations and the relationship.', text: 'Who received what, from whom. "Dr. S. Jadhav receives an honorarium for serving on the advisory panel of X" is clear; "some links with industry" is not.' },
            { title: 'Say what role the funder or supplier played.', text: 'Did they design the study, collect or analyse data, write or approve the paper? If they had no role, say so.' },
            { title: 'Keep funding separate.', text: 'The ICMJE asks for a funding statement that covers only direct support of the work, with support for one person\'s time reported separately.' },
            { title: 'Update it if anything changes.', text: 'A new consultancy or grant before publication should be added, and the editor told.' },
          ],
          tone: 'green',
        },
        {
          note: 'Springer\'s policy offers a simple test. Would the interest embarrass you if it became public after the paper came out? If yes, declare it.',
          label: 'quick test',
          tone: 'amber',
        },
        'Mention any important conflict in your cover letter too; our guide on [how to write a cover letter for journal submission](/blogs/how-to-write-a-cover-letter-for-journal-submission/) shows where it fits.',
      ],
    },
    {
      id: 'conflict-of-interest-statement-examples',
      title: 'Conflict of interest statement examples',
      Art: SampleScene,
      caption: 'two honest sentences took the place of one wrong one',
      body: [
        'Here are sample wordings you can adapt. Always check the exact wording your journal asks for, since many give their own template.',
        '**When there is nothing to declare.** These are the forms you will see most often:',
        {
          list: [
            '"The authors declare no conflict of interest."',
            '"The authors have no relevant financial or non-financial interests to disclose."',
            '"The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper."',
          ],
          style: 'check',
        },
        'Use one of these only when it is true for **every** author. That was Gauri\'s mistake: the sentence was true for her, and not for her guide.',
        '**When there is something to declare.** Name it, then add that everyone else has nothing. This is the statement Gauri and Dr. Jadhav sent back:',
        {
          quote: 'The seaweed extract used in this study was supplied free of cost by X Agro Pvt. Ltd., which also paid G. Deshmukh\'s registration and travel for a conference in Hyderabad. S. Jadhav receives an honorarium for serving on the company\'s scientific advisory panel. The company had no role in the design of the study, the collection or analysis of data, the writing of the paper or the decision to submit it. G. Deshmukh declares no other competing interests.',
          by: 'Gauri\'s revised statement, with the company\'s name left out here',
          tone: 'pink',
        },
        'Her cousin in the sales team took more thought. The journal\'s form asked about family members, so they listed him on the form as well. When in doubt, declare it and let the editor decide.',
        '**A funding statement.** This sits apart from the conflict statement. The ICMJE gives a model you can copy: "This study was funded by A; Dr. F\'s time on the work was supported by B." Gauri\'s named her department for the field work and, once more, the company for the free spray.',
      ],
    },
    {
      id: 'what-happens-if-you-do-not-declare',
      title: 'What happens if you do not declare a conflict of interest?',
      Art: ConsequenceScene,
      caption: 'declared, the paper goes on to review; found later, it carries a notice for good',
      body: [
        'Gauri was lucky. Her mistake was caught before review, and fixing it took one email. Found after publication, the same omission is far harder to undo.',
        {
          list: [
            '**At submission:** the editor asks you to correct the statement, as happened to Gauri, or may reject the paper if the explanation does not satisfy them.',
            '**After publication:** according to Editage, a missed conflict can lead to a published correction, an expression of concern while the journal looks into it, or a retraction in serious or repeated cases. Our guide on [what is retraction in research](/blogs/what-is-retraction-in-research/) explains what that notice looks like.',
            '**Beyond the journal:** the journal may tell your institution. The ICMJE treats purposeful failure to disclose on its form as a form of misconduct, which our guide on [research misconduct](/blogs/research-misconduct/) covers.',
          ],
          style: 'cross',
        },
        'Declaring does the opposite. Editage notes that sound work is rarely rejected just because a conflict exists. Gauri\'s paper went out to two reviewers a week after she sent the new statement. One of them asked whether the spray had been tested against a plain water spray. It had. The honorarium never came up again.',
      ],
    },
  ],

  takeaways: [
    'A conflict of interest in research is any secondary interest, financial or not, that could influence, or appear to influence, your judgment about the work.',
    'The five common types are financial, personal, academic or intellectual, institutional, and reviewer or editor conflicts.',
    'Small things count: free samples, paid travel, family ties, unpaid advisory roles and your co-authors\' interests.',
    'Every author declares, and so do reviewers, editors and ethics committee members. The corresponding author makes the paper\'s statement match all of them.',
    'Write "no conflict of interest" only when it is true for every author; otherwise name who, what, from whom, and the funder\'s role.',
  ],

  faq: [
    {
      q: 'Is having a conflict of interest wrong?',
      a: 'No. Having one is common and not in itself unethical. What is wrong is hiding it. Declare it clearly, and let the editor and readers judge the work with full information.',
    },
    {
      q: 'Do I need a conflict of interest statement in my thesis?',
      a: 'It depends on your university. Many theses have a declaration page, and some ask about funding and conflicts there. If a company supplied materials or paid for anything, mention it in the declaration or acknowledgements, and check your university\'s thesis guidelines.',
    },
    {
      q: 'What is the difference between a conflict of interest statement and a competing interests statement?',
      a: 'They are the same thing under different names. Elsevier and Springer Nature journals often say competing interests or declaration of interest, while many others say conflict of interest. Follow the heading your journal uses.',
    },
  ],

  cta: {
    title: 'Know where every source came from',
    text: 'Fiberarticle finds papers through OpenAlex, Semantic Scholar, Crossref and arXiv, reads the open-access ones and shows the source behind every line it writes, so you can see exactly whose work each claim rests on. One payment unlocks all of it, for good.',
  },
}
