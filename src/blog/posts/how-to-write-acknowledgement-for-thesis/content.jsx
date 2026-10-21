import Hero from './hero.jsx'
import {
  FundingScene,
  MistakesScene,
  OrderScene,
  PlaceScene,
  SampleScene,
  WhatScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a short page of thank-yous at the front of a very long thesis',
  },

  intro: [
    'Bhavna Joshi spent four years counting butterflies. She is a PhD scholar in Zoology at a university in Nagpur, and her thesis compares the butterflies of city gardens, lake edges and scrub land around the city across the seasons. Two hundred and forty pages were finished, checked and formatted. One page was still blank: acknowledgement.',
    'She opened a senior\'s thesis from the department shelf, copied the shape of his three-page acknowledgement, changed the names and sent it to her guide, Dr. Wankhede, with the rest. He sent back one line: "Lovely words, but where is the fellowship that paid for four years of your fieldwork? And these sentences are not yours."',
    'This blog explains how to write acknowledgement for thesis the way Bhavna rewrote hers: what the page is for, where it goes, who to thank and in what order, how to acknowledge funding, a sample, and the mistakes to avoid.',
  ],

  sections: [
    {
      id: 'what-is-an-acknowledgement-in-a-thesis',
      title: 'What is the acknowledgement in a thesis?',
      Art: WhatScene,
      caption: 'the one page where the people behind the work are named',
      body: [
        'The acknowledgement, often written acknowledgements, is a short section at the front of a thesis or dissertation where you thank the people and organisations who helped you complete it. It is the only part of the thesis that is openly personal.',
        'That makes the tone different from the rest. Guides on thesis writing agree that you can use "I", and a slightly warmer, less formal style than in your chapters. It should still read as professional: your examiners, your guide and your department will all read it, and so may anyone who finds your thesis online years later.',
        {
          list: [
            'It names the people who guided you, such as your supervisor and committee.',
            'It credits the organisations that paid for or supported the work, such as a fellowship or a grant.',
            'It thanks the colleagues, staff, participants and family who helped along the way.',
          ],
          style: 'check',
        },
        {
          note: 'the acknowledgement is not where you report who did what in the research. If someone did part of the work, such as an analysis or a set of measurements, that belongs in the methods or a contribution statement too, wherever your university asks for it.',
          label: 'note',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'where-it-goes-and-how-long',
      title: 'Where it goes and how long it should be',
      Art: PlaceScene,
      caption: 'front matter first, and usually no more than a page',
      body: [
        'The acknowledgement sits in the front matter, the pages before Chapter 1. Its exact place varies. Some guides put it straight after the title page, before the abstract; others put it after the abstract and before the table of contents. Indian universities often have their own order of front pages, with a declaration and a supervisor\'s certificate as well, so follow the format your university gives.',
        {
          table: {
            head: ['question', 'usual answer'],
            rows: [
              ['where', 'in the front matter, in the position your thesis format sets'],
              ['how long', 'one page or less is preferred; there is rarely a strict limit'],
              ['heading', 'Acknowledgement or Acknowledgements, as your format spells it'],
              ['voice', 'first person, warm but professional'],
              ['signature', 'your name, and often the place and date, at the end'],
            ],
          },
          tone: 'amber',
        },
        'Bhavna\'s first draft ran to three pages. Dr. Wankhede\'s view was simple: a page of real thanks is worth more than three pages of polite ones. Thesis guides say the same in different words; a long list of names can make each thank-you feel thinner.',
      ],
    },
    {
      id: 'who-to-thank-and-in-what-order',
      title: 'Who to thank, and in what order',
      Art: OrderScene,
      caption: 'from the guide at the top to family at the end',
      body: [
        'A common and sensible order runs from academic support to personal support. It also helps you avoid forgetting anyone.',
        {
          steps: [
            { title: 'Your supervisor.', text: 'Your guide, and any co-guide, first. Say what they actually did for you, not only that they were "kind".' },
            { title: 'Committee and examiners.', text: 'Your Research Advisory Committee and any teachers who shaped the work.' },
            { title: 'Funding and institutions.', text: 'The fellowship, grant or scheme that paid for the work, and the department, library or field station that hosted it.' },
            { title: 'People who helped the research.', text: 'Lab mates, technicians, field assistants, librarians, and the participants or communities who gave their time.' },
            { title: 'Friends and family.', text: 'Parents, partner, children and friends, usually at the end, where the tone can be most personal.' },
          ],
          tone: 'green',
        },
        'You do not have to name every person. Name the few who made a real difference, and thank groups together where that is enough, such as "the staff of the department library".',
        'Bhavna\'s rewrite started with Dr. Wankhede, then her committee, then her funder, then the forest guard who walked the scrub transects with her at six in the morning, and only then her parents.',
      ],
    },
    {
      id: 'how-to-acknowledge-funding',
      title: 'How to acknowledge your fellowship or grant',
      Art: FundingScene,
      caption: 'the funder, the scheme and the reference number, in one sentence',
      body: [
        'Funding is the item students forget most, and it is the one you should never leave out. If a fellowship paid your stipend or a grant paid for your equipment and travel, the thesis must say so.',
        'Write it plainly. Name the funding body, the scheme and, if you have one, the sanction or reference number. A thesis from the University of North Bengal, held in its online repository, does exactly this: it thanks the University Grants Commission for a named UGC research fellowship and gives the reference number and date.',
        {
          define: 'A funding sentence',
          hint: 'the pattern to follow',
          meaning: 'I am grateful to [funding body] for the [name of fellowship or scheme] ([reference number, if any]), which supported this work. I also thank [institution or department] for providing [facilities, field station, laboratory].',
          tone: 'green',
        },
        {
          list: [
            'Many scholars in India hold a Junior Research Fellowship from the UGC or the CSIR. Name it exactly as it appears in your award letter.',
            'If the work was part of your supervisor\'s funded project, name that project and its funder too.',
            'Check your award letter and your university\'s thesis rules; some say how the funder must be credited.',
          ],
          style: 'dots',
        },
        'Papers you publish from the thesis usually need their own funding statement as well, in the place the journal asks for it. The [structure of a research paper](/blogs/structure-of-a-research-paper/) explains where that goes.',
      ],
    },
    {
      id: 'acknowledgement-for-thesis-sample',
      title: 'Acknowledgement for thesis: a sample',
      Art: SampleScene,
      caption: 'one page, in her own words, signed at the end',
      body: [
        'Here is Bhavna\'s second draft, shortened a little. The details are made up for this example, but the shape works for most theses.',
        {
          table: {
            head: ['part', 'what Bhavna wrote'],
            rows: [
              [
                'supervisor',
                'I thank my supervisor, Dr. R. Wankhede, who taught me to look at a butterfly as data and not only as a pretty thing, and who read every chapter twice, the second time more kindly.',
              ],
              ['committee', 'I am grateful to the members of my Research Advisory Committee for their questions at every progress review, which made the sampling plan far stronger.'],
              ['funding', 'This work was supported by a Junior Research Fellowship from [funding body] ([reference number]). I thank the Department of Zoology for laboratory space and the use of its field equipment.'],
              ['field help', 'I thank the forest guards and the garden staff who walked the transects with me, often before sunrise, and the lab mates who identified the specimens I could not.'],
              ['family', 'Finally, I thank my parents, who never asked when I would finish, and my sister, who learned the names of more butterflies than she ever wanted to.'],
              ['close', 'Bhavna Joshi, Nagpur, [date]'],
            ],
          },
          tone: 'green',
        },
        {
          steps: [
            { title: 'List first, write second.', text: 'Make a list of everyone and everything that helped, in the order above, before you write a sentence.' },
            { title: 'One specific line each.', text: 'Say what each person did. "Read every chapter twice" means more than "for constant support".' },
            { title: 'Check every name.', text: 'Spellings, titles and the exact name of the fellowship. A misspelt name on a bound thesis stays wrong forever.' },
            { title: 'Read it aloud.', text: 'If a line sounds like it could be in anyone\'s thesis, rewrite it so it could only be in yours.' },
          ],
          tone: 'amber',
        },
      ],
    },
    {
      id: 'acknowledgement-mistakes-to-avoid',
      title: 'Mistakes to avoid',
      Art: MistakesScene,
      caption: 'the copied three-page draft out, the honest one-page draft in',
      body: [
        'Bhavna\'s first draft had three of these. Most come from writing the page last, in a hurry, from someone else\'s thesis.',
        {
          compare: {
            left: {
              title: 'avoid',
              tone: 'red',
              mark: 'cross',
              items: [
                'copying a senior\'s acknowledgement and changing the names',
                'leaving out the fellowship or grant',
                'three pages of names with nothing specific',
                'jokes and nicknames only your friends understand',
                'complaints about people or the department',
                'private details about anyone',
              ],
            },
            right: {
              title: 'do instead',
              tone: 'green',
              mark: 'check',
              items: [
                'your own words, even if they are simple',
                'the funder named exactly, with the reference number',
                'one page, with a specific line for each key person',
                'warmth that a stranger would still understand',
                'thanks only; leave the rest out',
                'nothing you would not want examiners to read',
              ],
            },
          },
        },
        'Copying deserves a special word. The acknowledgement is part of your thesis, and a copied one reads hollow to the people it names. Under the UGC\'s 2022 PhD regulations, universities must have software to detect plagiarism in research work, so write every page yourself. Our guide on [how to avoid plagiarism](/blogs/how-to-avoid-plagiarism/) covers the rest of the thesis.',
        {
          note: 'if you used an AI tool, say to polish your English, check whether your university wants it disclosed and where. Some ask for a line in the acknowledgement; [using AI in research honestly](/blogs/using-ai-in-research-honestly/) explains how to word it.',
          label: 'ai tools',
          tone: 'pink',
        },
        'Bhavna\'s final version fitted on one page. Dr. Wankhede read it, smiled at the line about reading every chapter twice, and signed the forwarding letter for her thesis the same afternoon.',
      ],
    },
  ],

  takeaways: [
    'The acknowledgement thanks the people and organisations who helped you finish the thesis, in your own voice.',
    'Put it where your university\'s thesis format says, and keep it to about one page.',
    'Go from academic to personal: supervisor, committee, funders, helpers, then family.',
    'Always name your fellowship or grant exactly, with its reference number if you have one.',
    'Write it yourself, say something specific about each key person, and leave out jokes and complaints.',
  ],

  faq: [
    {
      q: 'Is it acknowledgement or acknowledgements?',
      a: 'Both are used. Many universities write Acknowledgements, many Indian theses use Acknowledgement, and American English often drops the e, as in acknowledgments. Use the spelling in your university\'s thesis format, and keep it the same in the contents page.',
    },
    {
      q: 'Can I thank God in my thesis acknowledgement?',
      a: 'Yes, if it matters to you. Many theses do. Keep it short and sincere, and still give the people and funders who helped you their own clear lines.',
    },
    {
      q: 'Should I thank my examiners?',
      a: 'You usually do not know who they are when you submit, so most students do not. You can thank your Research Advisory Committee and the teachers who reviewed your work along the way.',
    },
    {
      q: 'How do I write an acknowledgement for a project report?',
      a: 'The same way, only shorter. Put it in the front pages, keep it to a paragraph or a page, and thank your guide, the department or company that hosted the project, the people who helped with the work and your family. Follow the report format your department gives, and name any funding or internship stipend too.',
    },
    {
      q: 'How is a dissertation acknowledgement different from a PhD one?',
      a: 'Only in length and scale. A master\'s or bachelor\'s dissertation acknowledgement is often a short paragraph thanking the guide, the department and family. The same order and the same rules apply.',
    },
  ],

  cta: {
    title: 'Write the chapters behind the thank-yous',
    text: 'Fiberarticle helps you read the literature, tie every claim to a real source and format your references in the style your university asks for. One payment unlocks all of it, for good.',
  },
}
