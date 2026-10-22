import Hero from './hero.jsx'
import {
  ConsequenceScene,
  ErrorScene,
  FabricationScene,
  FalsificationScene,
  GreyScene,
  MeaningScene,
  OtherScene,
  ProtectScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'one plate that went wrong, one easy suggestion, and a notebook that has to tell the truth',
  },

  intro: [
    'Kunal Wankhede is in the second year of his PhD in Biochemistry at a university in Nashik. His research tests whether an extract of grape seeds, left over in huge piles after the grapes around the city are crushed, can protect liver cells grown in the lab from damage by alcohol. He measures how many cells survive with a colour test on small plastic plates, and he repeats every experiment three times.',
    'Last month the third plate went wrong. A fungus grew in half the wells, and the readings were useless. The results were due at a review meeting in ten days. A senior in his lab looked at the first two plates and said, kindly, "Your numbers are clear anyway. Make a third set close to these two, and put the matching band from your old blot into the figure. Nobody checks." Kunal went home and could not sleep. That night he typed into Google: research misconduct.',
    'This blog explains what he found and what his guide, Dr. Shubhangi Kale, told him the next morning: what research misconduct is, its main types with examples, the grey zone, how it differs from an honest mistake, what happens in India, and how to protect yourself.',
  ],

  sections: [
    {
      id: 'what-is-research-misconduct',
      title: 'What is research misconduct?',
      Art: MeaningScene,
      caption: 'three acts at the core of the definition, and honest error kept outside it',
      body: [
        'Research misconduct is dishonesty in how research is planned, done, reviewed or reported. The definition most often quoted comes from the US Office of Research Integrity (ORI), which names three acts.',
        {
          define: 'research misconduct',
          hint: 'noun',
          meaning: 'Fabrication, falsification or plagiarism in proposing, performing or reviewing research, or in reporting research results. In the ORI\'s words, it does not include honest error or differences of opinion.',
          tone: 'red',
        },
        'These three are often shortened to **FFP**. Other countries use wider definitions. The UK\'s Concordat to Support Research Integrity, as set out by the University of York, adds failing to meet legal and ethical duties, misrepresenting data, authorship, interests or qualifications, and improper handling of misconduct complaints, such as covering them up or punishing the person who raised them.',
        'Indian universities write their own rules, so the exact list depends on where you study. But FFP sits at the centre of every version, and that is where Kunal\'s problem was.',
      ],
    },
    {
      id: 'fabrication-in-research',
      title: 'Fabrication: making up data',
      Art: FabricationScene,
      caption: 'two real plates and a third that was never read',
      body: [
        'The ORI defines fabrication as making up data or results and recording or reporting them. The York list adds that it includes inventing documents and participant consent and presenting them as genuine.',
        {
          list: [
            'writing readings for an experiment that was never run, or never finished',
            'adding survey responses that nobody gave, to reach the sample size you promised',
            'inventing interview quotes, or patients who were never seen',
            'filling in consent forms after the study, for people who never signed them',
          ],
          style: 'cross',
        },
        'What Kunal\'s senior suggested was fabrication in its plainest form: a third set of numbers that no plate ever produced. It would have looked harmless, because the made up readings would sit close to the real ones. That is exactly why it is so serious. Every reader would believe the result had been repeated three times when it had been repeated twice.',
      ],
    },
    {
      id: 'falsification-in-research',
      title: 'Falsification: changing or leaving out data',
      Art: FalsificationScene,
      caption: 'the odd reading erased, and a clean band pasted in where a smudged one was',
      body: [
        'Falsification is subtler. The ORI defines it as manipulating research materials, equipment or processes, or changing or omitting data or results so that the research is not accurately represented. The data are real, but the picture they give is not.',
        {
          list: [
            'dropping a reading that does not fit, without saying so',
            'copying a clean band or image from another experiment into a figure',
            'cropping, splicing or adjusting an image so it shows something it did not',
            'changing dates, doses or sample sizes in the methods to look tidier',
            'filling missing answers with made up values and calling the data complete',
          ],
          style: 'cross',
        },
        'Images are a common place for it. In a study published in *mBio* in 2016, Elisabeth Bik, Arturo Casadevall and Ferric Fang screened 20,621 papers from 40 journals by eye. They found inappropriately duplicated images in 782 of them, about 3.8%, and at least half of those showed features suggesting deliberate manipulation.',
        'The second half of the senior\'s advice, pasting the matching band from an old blot, was falsification. The blot was real, but it came from a different experiment.',
        {
          note: 'excluding data is not always wrong. Removing a contaminated well or a failed sample is fine when you have a reason, you decide it by a rule, and you report it in your methods. Hiding it is the problem.',
          label: 'the honest version',
          tone: 'green',
        },
      ],
    },
    {
      id: 'types-of-research-misconduct',
      title: 'Plagiarism and other types of research misconduct',
      Art: OtherScene,
      caption: 'the other notes on the board: borrowed words, borrowed names, the same paper twice',
      body: [
        'The third act in FFP is plagiarism: in the ORI\'s words, using another person\'s ideas, processes, results or words without giving appropriate credit. It is the type students meet most, and it has many forms of its own, from copied sentences to recycled chapters. Our guide to [types of plagiarism](/blogs/types-of-plagiarism/) explains each one.',
        'Beyond FFP, the wider definitions name several other kinds of research misconduct. These examples come from the York list.',
        {
          table: {
            head: ['type', 'what it looks like'],
            rows: [
              ['**misrepresenting authorship**', 'adding someone who did no work as an author, or leaving off someone who did'],
              ['**duplicate publication**', 'publishing the same work twice, or sending it to two journals at once, without saying so'],
              ['**hidden interests**', 'not declaring a competing interest, such as funding from a company whose product you test'],
              ['**misusing peer review**', 'using or sharing a manuscript you were sent to review, or hiding a conflict of interest as a reviewer'],
              ['**breaching duty of care**', 'running a study without informed consent, or exposing participants\' personal data'],
              ['**misrepresenting qualifications**', 'claiming experience or credentials you do not have'],
            ],
          },
          tone: 'red',
        },
        'Authorship disputes are common in Indian labs, where guides, seniors and collaborators all expect a place on the paper. Our blog on [first author vs corresponding author](/blogs/first-author-vs-corresponding-author/) explains who should be named and why.',
      ],
    },
    {
      id: 'questionable-research-practices',
      title: 'The grey zone: questionable research practices',
      Art: GreyScene,
      caption: 'between clean practice and misconduct lies a long, slippery slope',
      body: [
        'Many bad habits fall short of FFP but still bend the truth. They are called **questionable research practices**. The FORRT glossary describes them as activities that, on purpose or not, distort data in favour of the researcher\'s own hypotheses.',
        {
          steps: [
            { title: 'p-hacking.', text: 'Running analysis after analysis, or adding and removing variables, until a result crosses the line of statistical significance, then reporting only that one.' },
            { title: 'HARKing.', text: 'Short for hypothesising after the results are known: finding a pattern in the data and writing the paper as if you had predicted it all along.' },
            { title: 'Selective reporting.', text: 'Leaving out the outcomes, groups or experiments that did not work.' },
            { title: 'Salami slicing.', text: 'Cutting one study into many thin papers to raise your publication count.' },
          ],
          tone: 'amber',
        },
        'These practices are far more common than outright fraud. In a 2009 analysis in *PLoS ONE*, Daniele Fanelli pooled earlier surveys of scientists. On average 1.97% admitted to having fabricated, falsified or modified data at least once, while up to 33.7% admitted to other questionable practices, such as dropping data points based on a gut feeling. Fanelli thought both numbers were likely underestimates.',
        {
          note: 'the cure for most of these is disclosure. An exploratory analysis is fine when you call it exploratory. A dropped outlier is fine when you say why you dropped it.',
          label: 'tip',
          tone: 'green',
        },
      ],
    },
    {
      id: 'research-misconduct-vs-honest-error',
      title: 'Research misconduct vs honest error',
      Art: ErrorScene,
      caption: 'the same wrong number can land on either side; what tips it is intent',
      body: [
        'Kunal\'s next fear was about mistakes. What if he had pipetted wrongly last year and never noticed? Was that misconduct too? Dr. Kale shook her head. Every definition separates the two.',
        {
          compare: {
            left: {
              title: 'honest error',
              tone: 'blue',
              mark: 'dots',
              items: [
                'a calculation slip or a mislabelled sample',
                'a wrong reading you did not notice',
                'a different reading of the same data',
                'fixed with a correction once found',
              ],
            },
            right: {
              title: 'misconduct',
              tone: 'red',
              mark: 'cross',
              items: [
                'numbers you knew were not real',
                'a figure you knew was altered',
                'data hidden because they spoiled the story',
                'a pattern of carelessness about the truth',
              ],
            },
          },
        },
        'The ORI excludes honest error and differences of opinion. The York list describes misrepresenting data as something done knowingly, recklessly or through gross negligence. So the question is not only what went wrong, but whether you knew, or should have known, and what you did about it.',
        'This matters for what you do after a mistake. If you find an error in your own published work, tell your guide and the journal. Many papers are corrected, and some are retracted, for honest errors their own authors reported. Our guide on [what retraction in research means](/blogs/what-is-retraction-in-research/) explains the difference between a correction and a retraction.',
      ],
    },
    {
      id: 'what-happens-if-research-misconduct-is-found',
      title: 'What happens if research misconduct is found in India',
      Art: ConsequenceScene,
      caption: 'a complaint goes to a panel, and a penalty or a retraction can follow',
      body: [
        'For plagiarism, Indian universities follow the UGC (Promotion of Academic Integrity and Prevention of Plagiarism in Higher Educational Institutions) Regulations, 2018. Under them, any member of an institution who believes plagiarism has happened can report it to the **Departmental Academic Integrity Panel (DAIP)**. The DAIP investigates and sends its recommendation to the **Institutional Academic Integrity Panel (IAIP)**.',
        {
          table: {
            head: ['level', 'similarity', 'for a thesis or dissertation'],
            rows: [
              ['0', 'up to 10%', 'no penalty'],
              ['1', '10% to 40%', 'submit a revised script within six months'],
              ['2', '40% to 60%', 'barred from submitting a revised script for one year'],
              ['3', 'above 60%', 'registration for the programme cancelled'],
            ],
          },
          tone: 'red',
        },
        'The regulations also say that if plagiarism is found after a degree has been awarded, the degree can be put in abeyance for a period the IAIP recommends. Teachers face their own penalties, from withdrawing the paper to losing increments and being barred from supervising new students. Our guide to [how plagiarism checkers work](/blogs/how-plagiarism-checkers-work/) explains what these percentages measure and what is left out of them.',
        'Fabrication and falsification are not covered by those percentage levels. Each university deals with them under its own rules, so ask your research office or read your university\'s policy. Journals act separately. Many follow guidance from COPE, the Committee on Publication Ethics, and a paper with fabricated or falsified results is usually retracted, with a public notice explaining why.',
        {
          note: 'the details of how a complaint is handled, who sits on the panel and how you can respond vary from one institution to another. Your own university\'s plagiarism and research integrity policies are the documents that apply to you.',
          label: 'check your rules',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'how-to-avoid-and-report-research-misconduct',
      title: 'How to protect yourself, and what to do if you see it',
      Art: ProtectScene,
      caption: 'a dated notebook, a raw data folder, and a conversation with your guide',
      body: [
        'Most students who end up in trouble did not plan to cheat. They were tired, scared of a deadline, and someone made a shortcut sound normal. A few habits make the shortcut much harder to take.',
        {
          steps: [
            { title: 'Keep a dated lab notebook or field diary.', text: 'Write what you did and what happened on the day, including the failures.' },
            { title: 'Never edit raw data files.', text: 'Save the original readings, survey exports and images untouched, and do your analysis on copies.' },
            { title: 'Decide your rules early.', text: 'Write down how you will handle outliers, missing answers and failed samples before you see the results.' },
            { title: 'Edit images only as your journal allows.', text: 'Read its rules on image editing, and keep the original file next to the one in your figure.' },
            { title: 'Cite as you write.', text: 'Keep every source next to the note you took from it, so nothing ends up uncredited.' },
            { title: 'Talk about authorship early.', text: 'Agree who will be named, and in what order, before the writing starts.' },
          ],
          tone: 'green',
        },
        'If you see misconduct, start by writing down what you saw, with dates, and keep any evidence safe. Then speak to someone you trust: your guide, another faculty member or your university\'s research or ethics office. For plagiarism, the DAIP is the formal route. Under the UK Concordat, punishing someone for raising a concern is itself misconduct, though protection for people who report it varies between institutions.',
        'Kunal took the third route the next morning. He told Dr. Kale about the fungus and about the advice. She was quiet for a moment, then asked him to note the contamination in his notebook, throw the plate away and start a fresh culture. At the review meeting he showed two repeats, said clearly that the third had failed and was being repeated, and showed the new plate a week later. The result held up.',
      ],
    },
  ],

  takeaways: [
    'Research misconduct is fabrication, falsification or plagiarism in planning, doing, reviewing or reporting research; wider definitions add authorship, duplicate publication, hidden interests and duty of care.',
    'Fabrication is making data up; falsification is changing, leaving out or manipulating data or images so the record is false.',
    'Questionable research practices such as p-hacking, HARKing and selective reporting sit in a grey zone, and honest disclosure fixes most of them.',
    'Honest error is not misconduct; what matters is whether you knew, or should have known, and whether you corrected it.',
    'In India, plagiarism goes through the DAIP and IAIP under the UGC Regulations of 2018; other misconduct follows your university\'s own rules and the journal\'s.',
  ],

  faq: [
    {
      q: 'What are the three main types of research misconduct?',
      a: 'Fabrication (making up data), falsification (changing or leaving out data so the record is false) and plagiarism (using others\' work without credit). Together they are called FFP.',
    },
    {
      q: 'Is self-plagiarism research misconduct?',
      a: 'Publishing the same work twice, or reusing your own results as if they were new, without saying so is counted as misconduct under wider definitions such as the UK Concordat. Reusing your own earlier words with a clear citation is treated differently, and journals and universities set their own limits.',
    },
    {
      q: 'Is removing outliers falsification?',
      a: 'Not if you have a sound reason, decide it by a rule and report it in your methods. It becomes falsification when you drop data simply because it spoils your result and hide that you did so.',
    },
    {
      q: 'Can a PhD be cancelled for research misconduct?',
      a: 'For plagiarism above 60% in a thesis, the UGC Regulations of 2018 say registration for the programme is cancelled, and a degree already awarded can be held in abeyance. For fabrication or falsification, the outcome depends on your university\'s rules.',
    },
  ],

  cta: {
    title: 'Build your work on sources you can trace',
    text: 'Fiberarticle finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and shows the source behind every line it writes, so every claim in your draft can be checked against the paper it came from. One payment unlocks all of it, for good.',
  },
}
