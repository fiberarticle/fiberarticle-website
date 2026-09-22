import Hero from './hero.jsx'
import {
  AiScene,
  CiteScene,
  FinalScene,
  KnowledgeScene,
  PeelScene,
  StationsScene,
  TraysScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a week to go, and every note on the board labelled with what it is',
  },

  intro: [
    'Neha is in the final year of B.Tech in Electronics and Communication at a college in Indore. Her team\'s project is a low-cost water quality monitor for village tanks, with pH and turbidity sensors on an ESP32 board. The hardware worked. The project report was due in a week, and it was a mess.',
    'Her project partner Aditya had pasted paragraphs from tutorial websites and sensor datasheets into the draft "to rewrite later". Nobody could say any more which paragraphs those were. Their guide, Prof. Mehta, had already told the class that every report would go through the college\'s similarity check.',
    'Neha spent the first evening not writing but setting up a system. This blog is that system: the habits that keep plagiarism out of your work, from the first note to the final check.',
  ],

  sections: [
    {
      id: 'plagiarism-starts-in-your-notes',
      title: 'Plagiarism starts in your notes',
      Art: PeelScene,
      caption: 'the label falls off between notes and draft, and the copied line passes for your own',
      body: [
        'Very few students sit down meaning to copy. Most plagiarism starts earlier, while taking notes. You paste a useful paragraph into your notes, planning to rewrite it later. A week on, the label is gone, the words look familiar, and they slip into the draft as if they were yours.',
        'That is what had happened in Neha\'s report. A paragraph explaining how a turbidity sensor measures cloudiness from scattered light had come, word for word, from a tutorial website. Aditya had forgotten it was not his own. When Neha searched for one of its sentences inside quotation marks, the website came up first.',
        {
          quote: 'A copied line without its label is a problem waiting in your draft.',
          by: 'Prof. Mehta, to the class',
          tone: 'red',
        },
        'So the first rule is simple. The moment something enters your notes, it must carry two things: where it came from, and whether the words are yours or someone else\'s.',
        'A second habit helps too: write your draft from your notes, not from the open PDF or web page. When the source is on screen while you type, its sentence shapes leak into yours without you noticing.',
      ],
    },
    {
      id: 'a-note-taking-system-that-protects-you',
      title: 'A note-taking system that protects you',
      Art: TraysScene,
      caption: 'every note sorted by what it is: exact words, a paraphrase, a summary or your own idea',
      body: [
        'Neha set up one notes file for the whole project, with a fixed format for every entry.',
        {
          table: {
            head: ['type of note', 'how to mark it', 'example'],
            rows: [
              ['Exact words', 'Quotation marks, the source and the page number', '"The output voltage falls as turbidity rises" (sensor datasheet, p. 3)'],
              ['Paraphrase', 'Start with P: and give the source', 'P: cloudier water scatters more light, so less of it reaches the receiver (tutorial website, with link)'],
              ['Summary', 'Start with S: and give the source', 'S: a field study comparing three low-cost pH sensors over six months (journal paper, with DOI)'],
              ['Your own idea', 'Start with ME:', 'ME: recalibrate every morning, because the tank temperature changes'],
            ],
          },
          tone: 'blue',
        },
        {
          list: [
            'Every entry starts with its source: author, title, year, and a link or DOI.',
            'Copied words always go inside quotation marks, with the page number.',
            'Paraphrases, summaries and your own ideas are marked differently, so they never mix.',
            'Everything lives in one file, not in twenty browser tabs.',
          ],
          style: 'check',
        },
        'It feels slow for the first hour. After that it saves time, because you never have to hunt for a source again.',
        'If you are taking notes from many papers, [Fiberarticle](https://app.fiberarticle.com) can help. Its Extract feature builds a table with columns you choose, up to 20 of them across up to 50 papers, and gives a short supporting quote from the paper for each cell, so every note arrives with its source. You can export the table as CSV.',
      ],
    },
    {
      id: 'quote-paraphrase-or-summarise',
      title: 'Quote, paraphrase or summarise',
      Art: StationsScene,
      caption: 'quote the exact words, rebuild the sentence, or shrink it to the main point, and cite all three',
      body: [
        'When you use a source in your writing, you have three choices, and all three need a citation.',
        {
          list: [
            '**Quote** when the exact words matter, such as a definition or a striking phrase. Keep quotations short and use them rarely.',
            '**Paraphrase** when you want to explain someone\'s idea in detail. Change both the words and the sentence structure, and keep the meaning.',
            '**Summarise** when you only need the main point of a long passage or a whole paper, in far fewer words.',
          ],
          style: 'numbers',
        },
        'The common trap is the half-paraphrase: a few words swapped and the sentence shape unchanged. Checkers often catch it, and it counts as plagiarism even with a citation, because the wording is still mostly the original author\'s. Here is the datasheet line from Neha\'s notes, handled both ways.',
        {
          list: [
            '**Original:** "The output voltage falls as turbidity rises."',
            '**Half-paraphrase:** "The output voltage drops as turbidity increases." Same shape, two words swapped.',
            '**Paraphrase:** "In cloudier water, the sensor puts out a lower voltage [3]." New structure, same meaning, and a citation.',
          ],
          style: 'dots',
        },
        'Our guide to [paraphrasing, summarising and quoting](/blogs/paraphrasing-vs-summarising-vs-quoting/) has more worked examples.',
        'Neha\'s final report had just one short quotation, a definition from a datasheet. Everything else was in the team\'s own words, with citations.',
      ],
    },
    {
      id: 'cite-as-you-write',
      title: 'Cite as you write, not at the end',
      Art: CiteScene,
      caption: 'each sentence gets its citation the moment it is written, and the reference list grows with it',
      body: [
        '"I will add the references at the end" is how sources go missing. By then you have forgotten which sentence came from where, and a citation ends up attached to the wrong claim, or to nothing at all.',
        'Add the citation the moment you write a sentence that depends on a source. A reference manager makes this easy. Zotero is free and open source, and Mendeley and EndNote are also widely used. All three can insert citations into Microsoft Word as you type and build the reference list for you.',
        {
          steps: [
            { title: 'Save each source as you read it.', text: 'Use the browser connector or import the PDF, so the author, title, year and DOI are captured.' },
            { title: 'Insert the citation as you type.', text: 'Put it right after the sentence it supports.' },
            { title: 'Pick the style your department uses.', text: 'IEEE is common in engineering reports, but follow your college\'s format.' },
            { title: 'Generate the reference list.', text: 'The tool builds it from the citations you actually used.' },
            { title: 'Check a few entries by hand.', text: 'Imported details are sometimes wrong or incomplete.' },
          ],
          tone: 'green',
        },
        'Fiberarticle can also format your references in more than 10,000 citation styles, IEEE included. For how the main styles differ, see [citation styles explained](/blogs/citation-styles-explained/).',
      ],
    },
    {
      id: 'what-counts-as-common-knowledge',
      title: 'What counts as common knowledge',
      Art: KnowledgeScene,
      caption: 'a law every engineer learns needs no citation; a limit taken from a standard does',
      body: [
        'You do not need to cite everything. Common knowledge is information that is widely known, not disputed, and found in many general sources. For an electronics reader, Ohm\'s law is common knowledge, and so is the fact that a microcontroller reads analogue signals through an analogue-to-digital converter.',
        {
          compare: {
            left: {
              title: 'no citation needed',
              tone: 'green',
              mark: 'dots',
              items: [
                'facts found in many basic textbooks',
                'well-known laws and definitions in your field',
                'dates and events most readers already know',
              ],
            },
            right: {
              title: 'cite it',
              tone: 'amber',
              mark: 'dots',
              items: [
                'statistics and measured values',
                'recent or specific findings',
                'anyone\'s interpretation or argument',
                'limits and details from a standard or datasheet',
              ],
            },
          },
        },
        'Common knowledge also depends on your field. What every electronics engineer knows may be new to a biologist, so think about who will read your work. A quick test: if you had to look it up, or found it in only one or two places, cite it. When in doubt, cite: an extra citation costs nothing, and a missing one can cost a lot.',
        'Neha\'s draft said that drinking water should have a pH between 6.5 and 8.5. That range comes from IS 10500, the Bureau of Indian Standards specification for drinking water, so it needed a citation.',
      ],
    },
    {
      id: 'your-own-work-and-ai-tools',
      title: 'Your own earlier work, and AI tools',
      Art: AiScene,
      caption: 'three neat references from a chatbot, and only one of them real',
      body: [
        'Two newer questions catch many students. The first is reusing your own work. If part of your report comes from your mini-project report or a conference paper you wrote, say so and cite it. Submitting the same work twice without saying so is self-plagiarism, even though you wrote it. Checkers often hold earlier student submissions as well, so reused text tends to show up in the report anyway.',
        'The second is AI. Many colleges and journals now have written rules on AI tools, and many ask you to state how you used them. Chatbots can also invent references that look real but do not exist, and they can repeat wording from existing sources without saying where it came from.',
        'Aditya had asked a chatbot to write the literature survey. It gave three neat references. Neha searched each title on Google Scholar and found only one of them; the other two did not exist. The team rewrote the section from papers they had actually read.',
        {
          note: 'follow your college\'s rules on AI, say how you used it, and check every reference it gives you before it goes into your work. Our guide to [using AI in research honestly](/blogs/using-ai-in-research-honestly/) covers the details.',
          label: 'remember',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'the-final-check-before-you-submit',
      title: 'The final check before you submit',
      Art: FinalScene,
      caption: 'every box ticked, the report sealed in its envelope, and a day to spare',
      body: [
        'Two days before the deadline, Neha went through the report with a checklist.',
        {
          list: [
            'Every quotation has quotation marks and a citation.',
            'Every paraphrase and summary has a citation.',
            'Every figure, circuit diagram and table taken from elsewhere says "adapted from" or "reproduced from", with its source.',
            'Every citation in the text appears in the reference list, and every entry in the list is cited.',
            'Every reference has been checked to exist.',
            'Reused work and any AI help are disclosed as the college requires.',
          ],
          style: 'check',
        },
        'Then run the similarity check your college provides and read the matches, not just the percentage. A match to your reference list or to standard technical terms is usually fine; a match to someone else\'s paragraph needs attention. Our guide on [how plagiarism checkers work](/blogs/how-plagiarism-checkers-work/) explains how to read the report.',
        'Neha\'s report came back at 8 percent, mostly matches to the reference list and to standard terms such as sensor and component names. The team submitted a day early.',
      ],
    },
  ],

  takeaways: [
    'Most plagiarism starts with notes that lose their labels, so give every note its source.',
    'Put copied words in quotation marks, with the page number, the moment you copy them.',
    'Quote rarely, paraphrase properly, summarise often, and cite all three.',
    'Cite as you write, and let a reference manager build your list.',
    'Common knowledge needs no citation; numbers, findings and interpretations do.',
    'Disclose reused work and AI help, check every reference, and read the similarity matches before you submit.',
  ],

  faq: [
    {
      q: 'Do I need to cite a website or a datasheet?',
      a: 'Yes. Websites, datasheets, application notes, videos and lecture slides are all sources. Cite them in the style your department uses, with the date you accessed them if the style asks for it.',
    },
    {
      q: 'Can I use a figure from a paper if I cite it?',
      a: 'In a college report, usually yes, with a clear "adapted from" or "reproduced from" and the citation; redrawing it yourself is even better. For a publication you may also need permission from the copyright holder.',
    },
    {
      q: 'How many words can I copy without quotation marks?',
      a: 'There is no safe number. If you use someone\'s exact words, even a short and distinctive phrase, put them in quotation marks and cite them.',
    },
    {
      q: 'Can I reuse parts of a senior\'s project report?',
      a: 'You can read it to see how a report is organised, but copying its text, figures or results is plagiarism, even with the senior\'s permission. If your project builds on theirs, cite their report like any other source.',
    },
  ],

  cta: {
    title: 'Keep the source beside every note',
    text: 'Fiberarticle finds real papers, gives a supporting quote from the paper for every cell it extracts, and formats your references in more than 10,000 citation styles. It is free to use yourself.',
  },
}
