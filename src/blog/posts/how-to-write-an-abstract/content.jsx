import Hero from './hero.jsx'
import {
  AloudScene,
  LimitScene,
  MovesScene,
  ReviewerScene,
  ReadersScene,
  StrongScene,
  TiffinScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a thick paper goes into the rollers, and one neat card comes out',
  },

  intro: [
    'It was nine in the evening, and the conference portal closed at midnight. Divya, an MTech student in Biomedical Engineering in Coimbatore, had finished her paper on a phone-based anaemia screening tool, and now the submission form wanted an abstract of no more than 250 words. Her draft was 410 words long. Most of them were about how serious anaemia is.',
    'She called her guide, Dr. Meenakshi, expecting sympathy. Instead she got a question: "If a reviewer reads only these 250 words, will they know what you did and what you found?" Divya looked at her draft. The answer was no.',
    'An abstract is the most read part of any paper, and often the only part. This blog shows how to write one that does its job: five moves, one worked example from weak to strong, and the mistakes that make reviewers stop reading.',
  ],

  sections: [
    {
      id: 'why-abstracts-matter',
      title: 'Why the abstract matters so much',
      Art: ReadersScene,
      caption: 'everyone reads the front card; far fewer open the paper behind it',
      body: [
        'An abstract is a short, complete summary of your paper, usually a single paragraph. It looks like a formality. In practice it decides what happens to your work.',
        'Think of who reads it: a student scanning fifty search results, an editor deciding which submissions go out for review, a committee sorting hundreds of conference abstracts. Each of them reads quickly and decides.',
        {
          list: [
            'Many readers only ever read the abstract, to decide whether the full paper is worth their time.',
            'Journal editors and conference committees often decide from it whether to send your paper for review, or to accept your talk.',
            'Databases such as Scopus and PubMed let people search titles and abstracts, so the words you use decide which searches find you.',
            'It is usually free to read even when the paper itself sits behind a paywall.',
          ],
          style: 'check',
        },
        'For readers without access to the full text, in India and everywhere else, the abstract is the paper.',
        {
          quote: 'Write the abstract for the reader who will read nothing else.',
          by: 'Dr. Meenakshi, to Divya',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'structured-and-unstructured',
      title: 'Structured and unstructured abstracts',
      Art: TiffinScene,
      caption: 'a tiffin with a compartment for each part, or one bowl with everything in it',
      body: [
        'Abstracts come in two shapes. A *structured* abstract splits the summary into labelled parts, usually Background, Methods, Results and Conclusions. An *unstructured* abstract says the same things in one flowing paragraph. You do not get to choose: the journal or conference decides, in its author instructions.',
        {
          compare: {
            left: {
              title: 'structured',
              items: [
                'labelled parts such as Background, Methods, Results, Conclusions',
                'common in medicine and health journals',
                'easy to scan for one piece of information',
                'every part has to be present',
              ],
              mark: 'dots',
              tone: 'blue',
            },
            right: {
              title: 'unstructured',
              items: [
                'one paragraph, no headings',
                'common in engineering, the sciences and many conferences',
                'reads as one flowing summary',
                'the same parts are there, just unlabelled',
              ],
              mark: 'dots',
              tone: 'green',
            },
          },
        },
        'Some medical journals use longer lists of headings, such as Objective, Design, Setting, Participants, Results and Conclusions. Use exactly the headings the journal lists, in its order.',
        'Divya\'s conference asked for an unstructured abstract. Dr. Meenakshi suggested she write it structured first, with the headings, and then remove them. Every heading forced her to put something real underneath it.',
      ],
    },
    {
      id: 'the-five-moves',
      title: 'The five moves of a good abstract',
      Art: MovesScene,
      caption: 'five stepping stones, crossed in order',
      body: [
        'Whatever its shape, a good abstract makes the same five moves, in this order.',
        {
          steps: [
            { title: 'Context.', text: 'One or two sentences on why the area matters. Not a history lesson: just enough for a reader outside your lab to see the point.' },
            { title: 'Problem or gap.', text: 'What is missing or unsolved: the reason your study exists.' },
            { title: 'Method.', text: 'What you did, briefly, with the details that decide whether the reader trusts it, such as the approach, the sample size and the setting.' },
            { title: 'Key results.', text: 'What you found, with the most important numbers. This is the heart of the abstract, so give it the most words.' },
            { title: 'Implication.', text: 'What the results mean and why they matter, stated no more strongly than your evidence allows.' },
          ],
          tone: 'blue',
        },
        {
          table: {
            head: ['Move', 'Rough share of a 250-word abstract'],
            rows: [
              ['Context', 'about 30 words'],
              ['Problem or gap', 'about 30 words'],
              ['Method', 'about 60 words'],
              ['Key results', 'about 90 words'],
              ['Implication', 'about 40 words'],
            ],
          },
          tone: 'amber',
        },
        'These shares are a rough guide, not a rule. Divya\'s draft had spent 300 words on context. Her results, the reason anyone would read the paper, got one vague sentence.',
        {
          note: 'use the past tense for what you did and found ("we recruited", "the app identified") and the present tense for what is generally true or what your findings mean ("anaemia is common", "these results suggest"). Many journals now accept "we"; check the author instructions.',
          label: 'tense',
          tone: 'green',
        },
      ],
    },
    {
      id: 'from-weak-to-strong',
      title: 'From a weak abstract to a strong one',
      Art: StrongScene,
      caption: 'the vague draft goes in the bin; the specific one goes to the conference',
      body: [
        'Here is a worked example, modelled on Divya\'s paper. Its numbers are illustrative, not results from a real study.',
        {
          define: 'The weak version',
          hint: '53 words',
          meaning: 'Anaemia is a major public health problem in India. Many methods exist for its detection. In this work, a smartphone application was developed for anaemia detection. The application was tested and it gave good results. The proposed system can be very useful for rural areas and can help many people in the future.',
          tone: 'red',
        },
        {
          define: 'The strong version',
          hint: '93 words, illustrative numbers',
          meaning: 'Anaemia is common in India, yet the standard blood test needs a laboratory and trained staff that many rural clinics lack. We developed a low-cost smartphone app that estimates haemoglobin from photographs of the inner eyelid. In a study of 300 adults at two primary health centres, we compared the app with laboratory haemoglobin values. The app identified anaemia with a sensitivity of 85 percent and a specificity of 80 percent, and each screening took under two minutes. A phone-based first screen could help health workers decide who needs a confirmatory blood test.',
          tone: 'green',
        },
        {
          list: [
            'The context shrank to one sentence that already points at the problem.',
            'The gap became specific: no laboratory, no trained staff.',
            'The method names the sample, the setting and the comparison.',
            'The results have numbers instead of "good results".',
            'The implication is useful and modest: a first screen, not a cure.',
          ],
          style: 'check',
        },
        'Notice that the strong version is longer, and far more useful. Length is not the enemy; empty words are.',
      ],
    },
    {
      id: 'word-limits-keywords-and-title',
      title: 'Word limits, keywords and the title',
      Art: LimitScene,
      caption: 'trimming to the limit, and a ring of keywords that open the right searches',
      body: [
        'Journals and conferences set a limit, and many submission forms refuse or cut off anything over it. Limits of roughly 150 to 300 words are common, and some conferences count characters instead. Whatever the number is, treat it as a hard wall, and check the author instructions before you start.',
        'Keywords come next. They help databases and search engines file your paper, so choose the words people actually type when looking for work like yours. Do not spend them repeating your title: if *anaemia* and *smartphone* are already in the title, add terms such as *haemoglobin estimation*, *point-of-care screening* or *conjunctiva*.',
        {
          note: 'read your title and abstract together. The title should promise exactly what the abstract delivers, no more and no less. Our guide to the [structure of a research paper](/blogs/structure-of-a-research-paper/) has more on titles.',
          label: 'title check',
          tone: 'blue',
        },
        'Some journals ask for more than the abstract. Many Elsevier journals, for example, want highlights: three to five short bullet points of the key findings. Others invite a graphical abstract, a single image that sums up the paper. The same rule applies to both: say specifically what you found.',
        'Divya cut 410 words down to 247. The count dropped fastest when she deleted sentences that only said what everyone already knew.',
      ],
    },
    {
      id: 'mistakes-reviewers-notice',
      title: 'Mistakes reviewers notice',
      Art: ReviewerScene,
      caption: 'a reviewer\'s red pen finds the same few problems again and again',
      body: [
        'Reviewers read a great many abstracts, and a few mistakes make them lose patience quickly.',
        {
          list: [
            'Citations inside the abstract, which many journals ask you to avoid.',
            'Abbreviations that are never defined, or defined and then used only once.',
            'Vague results such as "significant improvement" with no numbers.',
            'Claims that do not appear in the paper, or numbers that differ from the results section.',
            'So much background that the method and results are squeezed into one line.',
            'Promises such as "results will be discussed", which say nothing about what you found.',
            'Claims such as "for the first time" or "a novel approach" that the paper does not back up.',
          ],
          style: 'cross',
        },
        {
          quote: 'If your abstract could describe a hundred different papers, it describes none of them.',
          by: 'Dr. Meenakshi',
          tone: 'pink',
        },
        'The same habits shape how reviewers judge the whole paper; our guide to [peer review](/blogs/peer-review-explained/) explains what happens after you press submit. And when you choose where to send it, the abstract is also how you check the fit; see [how to choose the right journal](/blogs/how-to-choose-the-right-journal/).',
      ],
    },
    {
      id: 'write-it-last',
      title: 'Write it last, then read it aloud',
      Art: AloudScene,
      caption: 'reading the final version aloud before pressing submit',
      body: [
        'Write the abstract last, after the paper is finished. Only then do you know exactly what you found, and only then can the abstract match the paper on every number.',
        {
          steps: [
            { title: 'Write one sentence per move.', text: 'Five sentences: context, gap, method, results, implication. That is your skeleton.' },
            { title: 'Expand to the limit.', text: 'Add the key numbers and details, spending most of your words on method and results.' },
            { title: 'Cut what could appear in any paper.', text: 'Delete general statements, filler phrases and repeated ideas.' },
            { title: 'Check it against the paper.', text: 'Every number and claim must appear, identically, in the full text.' },
            { title: 'Read it aloud.', text: 'Your ear catches long sentences and missing steps that your eyes skip over.' },
          ],
          tone: 'green',
        },
        'Then give it to a friend from another department. If they can tell you, in one sentence, what you did and what you found, it is ready.',
        'The Article Writer in [Fiberarticle](https://app.fiberarticle.com) drafts an abstract along with the rest of a manuscript, and marks the Results section as a placeholder for your own findings. Its condense and simplify commands help when you need to trim. Whatever any tool drafts, every number in your abstract must come from your own results.',
        'Divya read her final version aloud to her roommate at 11.30, changed two sentences and submitted at 11.52. Three weeks later the acceptance email arrived, with one line from a reviewer: *clear and specific abstract*.',
      ],
    },
  ],

  takeaways: [
    'Write the abstract for the reader who will read nothing else.',
    'Follow the journal: structured or unstructured, and its exact word limit.',
    'Make five moves: context, gap, method, results with numbers, implication.',
    'Spend most of your words on method and results, not background.',
    'Choose keywords that add to your title rather than repeat it.',
    'Write it last, check every number against the paper, and read it aloud.',
  ],

  faq: [
    {
      q: 'How long should an abstract be?',
      a: 'As long as the journal or conference allows, and no longer. Limits of roughly 150 to 300 words are common. Check the author instructions, and remember that many submission forms refuse or cut off anything over the limit.',
    },
    {
      q: 'Should an abstract include citations?',
      a: 'Usually not. Many journals ask you to avoid references in the abstract, because it must make sense on its own. If a key idea comes from someone else, credit it in the paper itself.',
    },
    {
      q: 'What is the difference between an abstract and an introduction?',
      a: 'The abstract summarises the whole paper, including your results and conclusions. The introduction sets up the problem and your question, and does not give away the results in detail.',
    },
    {
      q: 'Can I write the abstract before the paper?',
      a: 'You can draft a rough one to guide your writing, but always rewrite it at the end, when you know your final results. A conference abstract sent before the work is finished should still report the results you already have.',
    },
    {
      q: 'Can I reuse my conference abstract for the journal version?',
      a: 'Rewrite it rather than copy it. The journal version usually has a different word limit and format, and your results may have changed since the conference. Follow that journal\'s author instructions, and check its policy on papers presented at conferences.',
    },
  ],

  cta: {
    title: 'Draft the whole paper, then tighten the abstract',
    text: 'Fiberarticle\'s Article Writer drafts a manuscript, abstract included, from real papers, and its condense and simplify commands help you bring an abstract under the limit. One payment unlocks all of it, for good.',
  },
}
