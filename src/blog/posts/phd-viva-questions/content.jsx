import Hero from './hero.jsx'
import {
  AfterScene,
  AnswerScene,
  DefineScene,
  PrepareScene,
  ProcessScene,
  QuestionsScene,
  SlidesScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'one examiner, one guide, a hall full of juniors, and a thesis he knows better than anyone in the room',
  },

  intro: [
    'Ankit Raina is in the final year of his PhD in Geology at a university in Jammu. For five years he has studied landslides on the national highway between Jammu and Srinagar, walking the slopes near Ramban after every monsoon and matching each slide against the rainfall before it. His thesis runs to 260 pages, and lately the one thing he keeps searching for on his phone is PhD viva questions.',
    'In August, both examiners\' reports came back. Both recommended the thesis for the viva. One of them added three questions in the margin of his report, and the first one read: "Why does the rainfall analysis rely on a single station?" Ankit read it and felt his stomach drop. The viva was five weeks away, in the seminar hall, open to anyone.',
    'His guide, Professor Kotwal, gave him one piece of advice that evening: "Nobody in that room will know your thesis as well as you do. Your job is to show it." This blog follows Ankit through those five weeks: what a PhD viva is, how it works under the UGC rules, the questions examiners ask most, how to answer them, the presentation, and what happens after.',
  ],

  sections: [
    {
      id: 'what-is-a-phd-viva',
      title: 'What is a PhD viva voce?',
      Art: DefineScene,
      caption: 'the thesis is on the table, but the examiners are really looking at the person who wrote it',
      body: [
        'A viva voce, Latin for "with the living voice", is the oral examination at the end of a PhD. In many countries it is called the thesis defence, and that is close to what it is: you explain your choices and answer for them.',
        {
          define: 'PhD viva voce',
          hint: 'noun',
          meaning: 'The oral examination in which a PhD scholar presents the thesis and answers the examiners\' questions.',
          tone: 'amber',
        },
        'A list of typical viva questions from the University of Nottingham gives its purpose in three parts: to see whether the thesis is your own work, whether you understand what you did, and whether the thesis is worth a PhD, that is, whether it adds something to knowledge.',
        'That is reassuring. In India, the examiners have already read your thesis and recommended it before the viva is held. The viva is a check that the person in front of them is the researcher behind the pages.',
      ],
    },
    {
      id: 'how-the-phd-viva-works-in-india',
      title: 'How the PhD viva works in India',
      Art: ProcessScene,
      caption: 'the thesis goes out to two examiners, and only comes back to the hall if both say yes',
      body: [
        'For most universities in India, the rules come from the UGC (Minimum Standards and Procedures for Award of Ph.D. Degree) Regulations, 2022. Each university writes its own ordinance on top of them. This is the path they set out:',
        {
          steps: [
            { title: 'Pre-submission presentation.', text: 'You present your work to the Research Advisory Committee, in a session open to faculty and research scholars.' },
            { title: 'Plagiarism check and undertaking.', text: 'You submit the thesis with an undertaking that there is no plagiarism, and your supervisor certifies that it is original.' },
            { title: 'Evaluation by two external examiners.', text: 'Your supervisor and at least two external experts from other institutions evaluate the thesis. Wherever possible, one should be from outside India.' },
            { title: 'Both reports must recommend acceptance.', text: 'The viva needs both to accept. If one rejects the thesis, an alternate examiner reads it, and the viva happens only if that examiner accepts.' },
            { title: 'The viva itself.', text: 'The board is your supervisor and at least one of the two external examiners. It may be held online, and it is open to committee members, faculty, research scholars and students.' },
          ],
          tone: 'amber',
        },
        'The whole evaluation, including the viva result, should be finished within six months of submission. The details in between vary a great deal. Presidency University, for example, sends the examiners\' reports to the candidate before the viva and asks for a written response to their suggestions. Sathyabama\'s 2024 circular asks for the corrections to be made and certified before the viva can be held, and wants an audience of at least 30 people. Ankit\'s university shared the reports and asked for written answers to each query. Read your own ordinance, and ask your guide.',
      ],
    },
    {
      id: 'common-phd-viva-questions',
      title: 'Common PhD viva questions',
      Art: QuestionsScene,
      caption: 'most questions are about your own thesis, but the shapes they come in are easy to predict',
      body: [
        'Most questions come from your own thesis, but the same kinds keep turning up. Enago Academy sorts them into four groups: general questions, research context and methods, analysis and findings, and discussion and implications. These examples come from the Nottingham list, Enago and a 2021 paper on the doctoral viva by Martin Cortazzi and Lixian Jin.',
        {
          table: {
            head: ['kind of question', 'examples'],
            rows: [
              ['opening', 'In one sentence, what is your thesis? Give a short summary of your work. Why did you choose this topic?'],
              ['contribution', 'What is original about your work? What have you done that merits a PhD?'],
              ['context', 'How did your research questions emerge? What has changed in your field since you began?'],
              ['methods', 'Why have you done it in this way? What are the alternatives to your approach?'],
              ['findings', 'Summarise your key findings. What do your results mean? How do they relate to the literature?'],
              ['reflection', 'What are the strongest and weakest parts of your work? Looking back, what might you have done differently?'],
              ['the future', 'Which parts of your thesis could be published? What would you do next?'],
            ],
          },
          tone: 'amber',
        },
        'Cortazzi and Jin also give six foundational questions that every candidate should be able to answer clearly, even to someone outside the field:',
        {
          list: [
            'What questions are you asking?',
            'Why are these questions worthwhile?',
            'What methods did you use to answer them?',
            'Why were these methods worthwhile?',
            'What answers have you found?',
            'Why are these answers worthwhile?',
          ],
          style: 'numbers',
        },
        'For Ankit, that meant the single rainfall station and why he chose the stretch near Ramban. Go through your examiners\' reports line by line: every comment in them is a likely question.',
      ],
    },
    {
      id: 'how-to-answer-viva-questions',
      title: 'How to answer viva questions, including the hard ones',
      Art: AnswerScene,
      caption: 'a pause, a straight answer first, and the limitation named before anyone else names it',
      body: [
        'Knowing the questions is half the work. The other half is how you answer. Cortazzi and Jin point out that examiners expect the main point to come first. They also note that in some cultures an answer begins with background, and that candidates who treat examiners with great deference tend to give indirect answers. If that sounds like you, practise putting the point first.',
        {
          list: [
            '**Answer the question that was asked.** A common slip is to catch two key words and recite a prepared answer that fits them but not the question.',
            '**Give the main point first, then the detail.** Signposts help: "I would like to make three points, and the third is the most important."',
            '**Take a moment, and ask if you are unsure what a question means.** Cortazzi and Jin suggest saying, "That\'s an interesting question, please give me a moment to think about it," and making a quick note before you answer.',
            '**Check if you are unsure you answered well.** "Have I given a reasonable answer?" lets the examiner steer you.',
          ],
          style: 'check',
        },
        'Then there is criticism. As the same paper says, "no thesis is perfect", and examiners who criticise are doing their job. If the criticism is wrong, keep calm and give your reasons with evidence. If it is right, say so, and say how the weakness could be overcome. Admitting a real limitation earns credit.',
        'This is how Ankit planned his answer about the single rainfall station. First the point: it was the only nearby station with daily records for the whole study period. Then the limit: rain varies from one valley to the next, so some slides may be matched to rain that fell elsewhere. Then the way forward: satellite rainfall estimates could test his thresholds in future work. Three sentences, in that order.',
      ],
    },
    {
      id: 'phd-viva-presentation',
      title: 'How to prepare your PhD viva presentation',
      Art: SlidesScene,
      caption: 'fewer slides than chapters, and eyes on the room, not on the screen',
      body: [
        'In most vivas you begin by presenting your work. Cortazzi and Jin note that this part commonly lasts no more than 10 or 15 minutes, though in some countries it runs longer. Ask your department how much time you will have.',
        'The examiners have already read the whole thesis, so your talk is not news to them. It is your chance to show that you understand the work and care about it. The paper warns that reading out notes or slides gets in the way of that.',
        {
          compare: {
            left: {
              title: 'slides that hurt',
              items: ['one slide for every chapter', 'full paragraphs copied from the thesis', 'every result, in the order you got them', 'you reading from the screen'],
            },
            right: {
              title: 'slides that help',
              items: ['the question, the gap and why it matters', 'one clear figure per key finding', 'your contribution, said plainly', 'limitations and future work, by name'],
            },
          },
        },
        'Enago suggests preparing a summary of your thesis in three lengths: about one minute, three to five minutes, and ten minutes. Ankit found the one-minute version the hardest and the most useful. Once he could say the whole thesis in a minute, every slide had to earn its place.',
        {
          note: 'keep a few backup slides after your last one, such as the full data table or a map of your sites. If an examiner asks, you can show the evidence instead of describing it. Ankit ended with 18 slides and 6 backups.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'how-to-prepare-for-phd-viva',
      title: 'How to prepare for a PhD viva',
      Art: PrepareScene,
      caption: 'one more slow reading, a one-page summary, the new papers, and a practice round with friends',
      body: [
        'Cortazzi and Jin argue that preparation should not be squeezed into the last few weeks, and that viva questions can be part of your talks with your guide all through the PhD. If your viva is already close, this is the order Ankit followed.',
        {
          steps: [
            { title: 'Re-read the thesis, slowly and critically.', text: 'Read it as an examiner would, and note anything you would now say differently.' },
            { title: 'Make a list of corrections.', text: 'Note every error you find, with page and line number, so you can show the examiners some are already fixed.' },
            { title: 'Write a one-page summary.', text: 'Answer the six foundational questions on a single page.' },
            { title: 'Catch up on new papers.', text: 'Find important work published since you wrote your literature review.' },
            { title: 'Answer every query in the reports.', text: 'Write a short answer to each comment from the examiners, with the page where you dealt with it.' },
            { title: 'Hold a mock viva.', text: 'Ask your guide or two lab mates to question you for an hour, hard questions included.' },
          ],
          tone: 'green',
        },
        'Ankit searched for papers on landslides and rainfall published since 2024 and found four he had not cited. Our guide on [how to search academic databases](/blogs/how-to-search-academic-databases/) shows how to run that kind of search quickly, and a tool like Fiberarticle can help you skim the new papers before you choose which to read in full.',
        'In his mock viva, his lab mate Shazia played the toughest examiner she could imagine and asked about the rainfall station twice. The second time, Ankit\'s answer was half as long and twice as clear.',
      ],
    },
    {
      id: 'after-the-viva',
      title: 'What to bring, and what happens after the viva',
      Art: AfterScene,
      caption: 'a tabbed copy of the thesis goes in, and a list of corrections comes out',
      body: [
        'On the day, Cortazzi and Jin suggest bringing a few simple things:',
        {
          list: [
            'your own copy of the thesis, with key pages marked;',
            'a notepad and pen to note questions and suggestions;',
            'examples of your raw data and analysis, if your field uses them;',
            'a printed list of the corrections you have already made;',
            'a good breakfast inside you.',
          ],
          style: 'dots',
        },
        'Outcomes and their names vary between universities. Cortazzi and Jin note that in the UK, acceptance with minor corrections is a very common result, and corrections are not a failure. Their advice: understand exactly what each change is and why, make it, and keep a list of every revision with page and line numbers. Under the UGC regulations, once the evaluation is complete and before the degree is announced, the university sends an electronic copy of your thesis to INFLIBNET, so other institutions can read it.',
        'If your thesis is going into journal papers next, our guides on [how to publish a research paper](/blogs/how-to-publish-a-research-paper/) and [how to write a conclusion for a research paper](/blogs/how-to-write-a-conclusion-for-a-research-paper/) are good next steps.',
        'Ankit\'s board was Professor Kotwal and one of the two external examiners, with about forty juniors and teachers watching. It lasted about an hour and a half. The examiner asked about the rainfall station in the first ten minutes, and Ankit gave his three sentences. The examiner nodded and asked whether his slope data could be shared with the highway engineers. It became the best conversation of the day. He left with two small corrections and an invitation to write a paper together.',
      ],
    },
  ],

  takeaways: [
    'The viva checks that the thesis is your own work, that you understand it and that it adds to knowledge.',
    'Under the UGC regulations of 2022, the viva is held only after both external examiners recommend the thesis, and it may be held online.',
    'Most viva questions come from your own thesis, so read the examiners\' reports line by line and prepare an answer to every comment.',
    'Answer directly, main point first, and name the limitations of your work before the examiners have to.',
    'A slow re-read, a one-page summary, the newest papers and a mock viva are the core of good preparation.',
  ],

  faq: [
    {
      q: 'What questions are asked in a PhD viva?',
      a: 'Mostly questions about your own thesis: why you chose the topic, what is original, why you used your methods, what your results mean, its strengths and weaknesses, and what comes next. Your examiners\' reports are the best guide.',
    },
    {
      q: 'How long is a PhD viva in India?',
      a: 'The UGC regulations set no length. Each university sets the details in its ordinance, so ask your department how long the presentation and questions usually run.',
    },
    {
      q: 'Can you fail a PhD viva?',
      a: 'It is possible but uncommon, because in India the viva is held only after both external examiners have recommended the thesis. Some universities let a candidate who does not satisfy the board appear again after a set period.',
    },
    {
      q: 'What should I do if I do not know the answer to a viva question?',
      a: 'Take a moment, and ask the examiner to clarify if needed. If you still do not know, say so honestly, share what you do know that is close to it, and say how you would find out.',
    },
  ],

  cta: {
    title: 'Walk into your viva knowing the newest papers',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and shows the passage behind every point it writes, so you can catch up on what your field has published since you wrote your literature review. One payment unlocks all of it, for good.',
  },
}
