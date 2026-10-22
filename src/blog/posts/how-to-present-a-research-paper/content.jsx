import Hero from './hero.jsx'
import {
  DesignScene,
  FormatScene,
  PractiseScene,
  QuestionsScene,
  RulesScene,
  SlidesScene,
  TalkScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'one clear message, a few clear slides, and one eye on the clock',
  },

  intro: [
    'Nusrat Jan is in the second year of her PhD in Electrical Engineering at a university in Srinagar. Her research puts small, low-cost moisture sensors into the saffron fields around Pampore. The sensors send their readings over a wireless network, so a farmer can see on a phone when the soil is too dry. Last month her first paper on it was accepted at an IEEE conference at an engineering college in Bengaluru, and the email said she had a fifteen minute slot.',
    'She made her slides in two evenings. There were thirty-one of them, and most were paragraphs copied from the paper. When she showed them to her guide, Dr. Showkat Ahmad Lone, he scrolled through in silence and then asked, "Who is going to read all this while you talk?"',
    'This blog explains how to present a research paper the way Dr. Lone helped Nusrat rebuild hers: what a presentation is for, the rules to check first, the slide by slide format, how many slides you need, how to design them, how to practise and how to answer questions.',
  ],

  sections: [
    {
      id: 'presenting-is-not-reading',
      title: 'How to present a research paper: talk, do not read',
      Art: TalkScene,
      caption: 'the paper is for reading later; the talk is for making people want to',
      body: [
        'A paper and a talk do different jobs. The paper holds every detail, so that someone can check and repeat your work. The talk has a few minutes to make a room of tired people interested. Editage puts it simply: a conference paper is meant to be "*heard*, not *read*." Listeners cannot go back a line the way readers can, so the talk has to be simpler than the paper.',
        {
          quote: 'The objective of your presentation is to get people interested in your work, not to explain it to them fully.',
          by: 'IEEE Author Center, on presenting your paper',
          tone: 'blue',
        },
        'The Association of Researchers in Construction Management reminds presenters that "the audience have your paper and that they will be able to read it later". So cover the one thing that matters, not everything.',
        'Dr. Lone asked Nusrat to write that one thing on a sticky note before she touched the slides again. After three tries she had it: *cheap sensors can tell saffron farmers when to water, and they last a full season in the field.* Every slide that did not help that sentence would go.',
        {
          note: 'IEEE\'s advice is that the first step is to decide "what key message you want to communicate to your audience." If you cannot say it in one sentence, the audience will not be able to either.',
          label: 'tip',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'check-the-conference-rules',
      title: 'Check your time slot and the conference rules first',
      Art: RulesScene,
      caption: 'read the circular before you open PowerPoint',
      body: [
        'Before you plan a single slide, read everything the conference has sent you: the acceptance email, the presenter guidelines and the programme. Time limits vary a lot. IEEE says most conference presentations last 10 to 20 minutes. Editage says paper sessions are often 20 to 30 minutes long, and that timings can change at the last minute. The Australasian Council for Undergraduate Research gives each presenter 15 minutes, "10 minutes for the presentation and 5 minutes for questions from the audience."',
        'So find the exact numbers for your own slot, and note these too:',
        {
          list: [
            '**How long you speak, and whether questions come out of that time.** Nusrat\'s fifteen minutes turned out to be twelve for the talk and three for questions.',
            '**The file format, template and deadline.** Some want a PDF, some a PowerPoint file sent before the day.',
            '**Who must present.** Many conferences say an author has to present the paper in person.',
            '**The registration rule.** Some publish a paper only if an author has registered.',
          ],
          style: 'check',
        },
        'The last two matter more than students expect. Many IEEE conferences have a no-show policy. ICIP, a large IEEE conference on image processing, wrote in its 2017 policy that "Papers which are not presented at the conference by an author shall be deemed No-show", and such papers were removed from the official proceedings and kept off IEEE Xplore. Rules differ, so read your own conference\'s policy, and if you cannot travel, tell the organisers early.',
        {
          note: 'acceptance is not the last step. If your paper is not presented, it may never be published, and the time you spent on it may not count.',
          label: 'remember',
          tone: 'red',
        },
      ],
    },
    {
      id: 'research-paper-presentation-format',
      title: 'Research paper presentation format, slide by slide',
      Art: FormatScene,
      caption: 'a short start, a clear method, and most of the time on results',
      body: [
        'IEEE suggests a talk in four parts: the purpose of your research and why it matters, a very brief look at the literature for context, the main points of your own work, and a conclusion that restates why it matters. The Australasian Council for Undergraduate Research turns this into a slide plan for a 10 minute talk. Here it is with what Nusrat put on each part.',
        {
          table: {
            head: ['part', 'slides', 'what goes on them', 'in Nusrat\'s talk'],
            rows: [
              ['title', '1', 'the paper\'s title, your name, your institution', 'title, her name, her university and her guide\'s name'],
              ['background and objectives', '1 to 2', 'the problem, why it matters, what you set out to do', 'a photo of a saffron field and one line on water use'],
              ['methods', '3 to 4', 'how you did it, as pictures more than words', 'the sensor, the network diagram, the test fields'],
              ['results', '3 to 4', 'your main findings, one per slide', 'sensor readings against lab tests, and battery life'],
              ['summary and future work', '1 to 2', 'the key message again, and what comes next', 'her one sentence, and the winter tests she plans'],
              ['acknowledgements and references', '1', 'funders, helpers and the few sources you showed', 'the farmers who lent their fields, and four references'],
            ],
          },
          tone: 'amber',
        },
        'Notice how little room the background gets. Your audience came for what *you* found. A good abstract is a ready skeleton for the talk, since it already moves from problem to method to result. Our guide on [how to write an abstract](/blogs/how-to-write-an-abstract/) shows that shape.',
        'The results slides deserve the most care. Show one finding per slide, with a title that states the finding, such as *Sensors matched lab readings within a small margin*, not just *Results 2*. Our guide on [how to write the results section of a research paper](/blogs/how-to-write-results-section-of-a-research-paper/) explains how to choose which figures carry your main findings, and the same choices work on slides.',
      ],
    },
    {
      id: 'how-many-slides',
      title: 'How many slides for a 10 minute presentation?',
      Art: SlidesScene,
      caption: 'about one slide a minute, not three',
      body: [
        'There is no fixed number, but there is a common rule of thumb. The Australasian Council for Undergraduate Research says: "Aim for about one slide per minute, but adjust based on your speaking style and content." It also sets a ceiling: "Use no more than 15 slides for a 10-minute presentation."',
        'Some go further. The Association of Researchers in Construction Management says of slides for a ten minute talk, "Two or three are more than enough to fill ten minutes." Every guide agrees on the direction: fewer is safer.',
        {
          table: {
            head: ['your speaking time', 'a sensible number of slides'],
            rows: [
              ['5 minutes', 'about 5'],
              ['10 minutes', 'about 10, and no more than 15'],
              ['12 minutes', 'about 12'],
              ['15 to 20 minutes', 'about 15 to 20'],
            ],
          },
          tone: 'green',
        },
        'Use the table as a starting point. A photo slide may take twenty seconds and a key graph two minutes. Nusrat went from thirty-one slides to thirteen for her twelve minutes.',
      ],
    },
    {
      id: 'how-to-design-ppt-slides',
      title: 'How to make research paper presentation PPT slides',
      Art: DesignScene,
      caption: 'a wall of text, or one finding people can read from the back',
      body: [
        'IEEE says "Slides are meant to illustrate your work, not explain it entirely." They should help you speak, not speak for you. That changes how you build them.',
        {
          compare: {
            left: {
              title: 'Nusrat\'s first draft',
              items: [
                'paragraphs copied from the paper',
                'a full results table with eight columns',
                'small text so everything would fit',
                'a different font and colour on each slide',
                'animations on every bullet point',
              ],
              tone: 'red',
            },
            right: {
              title: 'after Dr. Lone\'s notes',
              items: [
                'one message per slide, stated in the title',
                'one clear graph, with the key value circled',
                'short phrases, no more than five bullets',
                'one font and the college template throughout',
                'no animation unless it explains something',
              ],
              tone: 'green',
            },
          },
        },
        'These rules come from presenter guidelines. The Australasian Council for Undergraduate Research asks for "large, readable fonts (18pt or larger)" and "bullet points (maximum five per slide) instead of paragraphs," and suggests avoiding mixed fonts, all capitals and videos that are not essential. IEEE adds: use graphics where you can.',
        'Tables are the hardest thing to show. A table a reader can study in a paper is unreadable in the half minute an audience gets. Nusrat turned hers into one bar chart, and kept the full table on a backup slide at the end, in case someone asked.',
      ],
    },
    {
      id: 'practise-and-deliver',
      title: 'How to practise and deliver your talk',
      Art: PractiseScene,
      caption: 'aloud, with a timer, in front of someone who will be honest',
      body: [
        'Reading your slides silently is not practice. Editage explains why: "Reading in your mind will not help you keep time simply because reading aloud in front of an audience takes longer." Nusrat timed her first run aloud and finished in seventeen minutes, five over.',
        {
          steps: [
            { title: 'Say it aloud, with a timer.', text: 'Speak the whole talk at the pace you will use on the day, and note where you run long.' },
            { title: 'Record yourself.', text: 'IEEE suggests recording yourself giving the talk with the slides. You will hear the filler words and see where you look at the screen instead of the room.' },
            { title: 'Practise in front of people.', text: 'Present to your labmates. The Australasian Council for Undergraduate Research advises having your final version reviewed "by your supervisor or an experienced colleague."' },
            { title: 'Prepare a short version.', text: 'Editage suggests keeping a short skeleton outline in case your slot is cut, and extra material in case you get more time.' },
            { title: 'Stop rehearsing the night before.', text: 'Editage also warns against over-rehearsing just before the session. Sleep matters more than one more run.' },
          ],
          tone: 'blue',
        },
        'On the day, a few habits help most. Do not read your slides or notes word for word. Editage says you have the first 10 to 20 seconds to win the audience\'s attention, so open with the problem, not with a list of contents. Look up at the room, speak a little slower than feels natural, and pause between parts. Tell people when you move on: *that was how the sensors were built; now, did they work?*',
        'Carry a copy of your slides even if you sent them in advance. The Australasian Council for Undergraduate Research recommends "bringing your slides on a USB as a backup." Nusrat also reached the hall early to check that her file opened on the college computer.',
      ],
    },
    {
      id: 'how-to-answer-questions',
      title: 'How to answer questions after your presentation',
      Art: QuestionsScene,
      caption: 'a question is interest, not an attack',
      body: [
        'Many students fear the questions more than the talk, but this is where people tell you what they noticed. A few simple moves help.',
        {
          list: [
            '**If you do not understand the question, ask.** Ask the person to repeat or rephrase it. This is normal, and it gives you a moment to think.',
            '**If it is outside your study, say so.** The Australasian Council for Undergraduate Research says it is fine to answer, "This is outside the scope of my presentation."',
            '**If you did not test it, say that too.** The same guide offers: "That is a great question, but we did not explore it."',
            '**If you do not know, do not guess.** Editage suggests thanking the person and saying you will think about it.',
            '**If nobody asks anything,** Editage suggests pointing out a weakness of your own study to start the discussion.',
          ],
          style: 'check',
        },
        'Nusrat\'s first question came from a professor in the second row: would the sensors still work when the soil froze in a Kashmir winter? She had not tested that. She said so, explained that her field trials had run only from September to the end of flowering in early November, and added that winter testing was the next step in her plan. He nodded and wrote something down. After the session he came over to ask about the network, and they swapped email addresses.',
        'Editage advises, "Do not leave the room immediately," because people often come to talk to you after the session. Our guide to [PhD viva questions](/blogs/phd-viva-questions/) has more on answering hard questions calmly.',
        'Afterwards, write down every question you were asked. They show what was unclear, and if you later turn the paper into a journal article, our guide on [how to publish a research paper](/blogs/how-to-publish-a-research-paper/) covers the next steps.',
      ],
    },
  ],

  takeaways: [
    'A presentation is meant to be heard, not read: aim to get people interested in your work, not to explain all of it.',
    'Read the conference rules first: speaking time, question time, file format, who must present and any no-show policy.',
    'Follow a simple format: title, short background, methods, results with one finding per slide, summary, then acknowledgements.',
    'Plan about one slide per minute, use large fonts, short phrases and graphs, and keep big tables for a backup slide.',
    'Practise aloud with a timer, answer questions honestly, and stay after the session to talk.',
  ],

  faq: [
    {
      q: 'How long is a research paper presentation at a conference?',
      a: 'It depends on the conference. IEEE says most conference presentations last 10 to 20 minutes, and many conferences give about 10 minutes to speak and 5 for questions. Check your acceptance email or presenter guidelines for the exact time.',
    },
    {
      q: 'What should be on the first slide of a research paper presentation?',
      a: 'The title of your paper, the authors\' names and your institution. Some presenters add the conference name and an email address. Keep it simple; you will spend only a few seconds on it.',
    },
    {
      q: 'Can someone else present my paper if I cannot attend?',
      a: 'Sometimes, but only if the conference allows it. Some IEEE conferences accept a substitute presenter only in exceptional cases and with prior approval. Read your conference\'s no-show policy and write to the organisers as early as you can.',
    },
    {
      q: 'Should I read from a script during my presentation?',
      a: 'No. Presenter guidelines advise against reading your slides or notes word for word. Keep a few short notes for each slide, practise until you can speak from them, and look at the audience rather than the screen.',
    },
  ],

  cta: {
    title: 'Find the papers behind your background slide',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and shows the source behind every line it writes, so the few references on your slides are ones you have read. One payment unlocks all of it, for good.',
  },
}
