import Hero from './hero.jsx'
import {
  CabinetScene,
  CriticScene,
  FigureScene,
  NotesScene,
  OrderScene,
  PassesScene,
  StopScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'three passes, a magnifying glass, and a bookworm who reads along',
  },

  intro: [
    'Imran started his PhD in Aligarh with a promise to himself: he would read every paper properly. He began at the title, read every sentence of every section, looked up every unfamiliar term, and reached the references about three hours later.',
    'After a month he had read fourteen papers and clearly remembered perhaps three. His research on detecting crop diseases from leaf photographs had not moved. One evening his senior, Zoya, found him asleep on page nine of a paper. "You read papers like novels," she said. "They are not written to be read that way. Let me show you how people who read many papers a week do it."',
    'Here is what she showed him.',
  ],

  sections: [
    {
      id: 'a-paper-is-not-a-novel',
      title: 'A paper is not a novel',
      Art: CabinetScene,
      caption: 'a paper is a cabinet of labelled drawers: open the one you need',
      body: [
        'A novel is written to be read from the first page to the last. A research paper is written to be *consulted*. It has a fixed structure, and each part answers a different question, so you can go straight to the part you need.',
        {
          table: {
            head: ['Part', 'The question it answers'],
            rows: [
              ['Title and abstract', 'What is this paper about, and what did it find?'],
              ['Introduction', 'Why does the problem matter, and what was missing before?'],
              ['Methods', 'How exactly was the work done?'],
              ['Results', 'What did the authors find, in numbers, figures and tables?'],
              ['Discussion', 'What do the results mean, and what are their limits?'],
              ['Conclusion', 'What is the main takeaway?'],
              ['References', 'Whose work does this build on?'],
            ],
          },
          tone: 'blue',
        },
        'Before opening any paper, ask yourself one question: *why am I reading this?* To decide whether it is relevant, to understand a method, or to check one number? Each purpose needs a different amount of reading, and most papers need far less than three hours. Each part is explained in more detail in [the structure of a research paper](/blogs/structure-of-a-research-paper/).',
      ],
    },
    {
      id: 'the-three-pass-method',
      title: 'The three-pass method',
      Art: PassesScene,
      caption: 'first a glance, then a careful read, then the deep study only a few papers need',
      body: [
        'The best known advice on this comes from a short note by the computer scientist S. Keshav, *How to Read a Paper*, published in 2007. His idea is simple: instead of reading a paper once, slowly, read it up to three times, a little deeper each time, and stop as soon as you have what you need.',
        {
          steps: [
            {
              title: 'The first pass: about five to ten minutes.',
              text: 'Read the title, abstract and introduction, glance at the section headings, read the conclusion, and skim the references for names you recognise. You are only deciding whether this paper is for you and what kind of paper it is.',
            },
            {
              title: 'The second pass: up to an hour.',
              text: 'Read with care, but skip heavy detail such as proofs. Study the figures and tables, note the key points in the margin, and mark references you may want to read later.',
            },
            {
              title: 'The third pass: as long as it takes.',
              text: 'Keshav describes this as virtually re-creating the work: following every assumption and step as if you had to do it yourself. He notes it can take a beginner four or five hours, so keep it for the few papers at the centre of your research.',
            },
          ],
          tone: 'amber',
        },
        'Keshav also suggests that after the first pass you should be able to answer five questions, which he calls the five Cs: the *category* of the paper, its *context* (which other papers it relates to), whether it looks *correct*, its main *contributions*, and whether it is written with *clarity*.',
        {
          quote: 'Most papers only need the first pass. That is not laziness. That is how you find time for the few that need the third.',
          by: 'Zoya, to Imran',
          tone: 'green',
        },
      ],
    },
    {
      id: 'a-smarter-reading-order',
      title: 'A smarter reading order',
      Art: OrderScene,
      caption: 'the order in which to read a paper is not the order in which it was printed',
      body: [
        'Within each pass, the order matters too. Zoya\'s order, which many researchers use in some form, looks like this:',
        {
          list: [
            '**Title and abstract**, to know the claim.',
            '**Conclusion**, to see whether the claim was delivered.',
            '**Figures and tables**, because they usually hold the actual results.',
            '**Introduction**, for the background and the gap the authors say they fill.',
            '**Methods and results**, when the paper has earned your time.',
            '**Discussion**, for the limitations and what the authors think it all means.',
          ],
          style: 'numbers',
        },
        {
          note: 'in many papers, the last paragraph of the introduction lists the contributions in one place. It is often the fastest summary of what the authors believe they have added.',
          label: 'tip',
          tone: 'amber',
        },
        'Reading the conclusion early feels like reading the last page of a mystery first. In research, that is the right move. You are reading to decide, and the sooner you know where a paper ends up, the sooner you know how much more of it to read.',
        'Imran tried it the next morning on a paper about disease detection in tomato leaves. The abstract promised high accuracy. The conclusion admitted that the model had been tested only on photographs taken in a laboratory, not in real fields. Ten minutes in, he knew exactly what the paper could and could not tell him.',
      ],
    },
    {
      id: 'let-the-figures-talk',
      title: 'Let the figures do the talking',
      Art: FigureScene,
      caption: 'read the axes, the units and the sample size before you believe the bars',
      body: [
        'Figures and tables are where a paper stops describing and starts showing. They are also where it is easiest to be misled if you read too fast. Read a figure one part at a time.',
        {
          list: [
            'Read the **caption** first. It tells you what is being shown.',
            'Check the **axes and units**. Is it percent, count or score? Does the axis start at zero?',
            'Find the **sample size**, often written as *n*. A difference seen in 12 people means less than one seen in 1,200.',
            'Look for **error bars** or ranges. If they overlap a lot, the difference may be less clear than the text suggests.',
            'In tables, read the **column headings** and units before the numbers.',
          ],
          style: 'check',
        },
        'A y-axis that starts at 90 instead of 0 can make a tiny improvement look enormous. The authors may not have meant to mislead, but the figure will still do it if you read it carelessly.',
        {
          note: 'redraw a key figure in rough on paper, with the axes starting at zero. If the result still looks important, it probably is.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'read-like-a-friendly-critic',
      title: 'Read like a friendly critic',
      Art: CriticScene,
      caption: 'weigh every claim against the evidence that holds it up',
      body: [
        'Reading is not only taking in what a paper says. It is quietly checking whether you believe it. Zoya called this reading like a friendly critic: kind to the authors, strict with the evidence.',
        {
          list: [
            'What exactly is the **main claim**?',
            'What **evidence** supports it, and is it enough?',
            'Who or what was studied, and **how many**? Would the result hold for a different group or setting?',
            'What was it **compared against**? A new method that beats a weak baseline has not proved much.',
            'What **limitations** do the authors admit, and what do they leave out?',
            'Who **funded** the work, and do the authors declare any conflicts of interest?',
          ],
          style: 'dots',
        },
        'You will not answer every question for every paper. Asking them turns reading from an act of trust into an act of judgement, and judgement is what a thesis is assessed on.',
        {
          note: 'a paper being published does not make every claim in it true. Peer review catches many problems, not all of them. Your job is to weigh the evidence, not simply repeat it. [How peer review works](/blogs/peer-review-explained/) explains what reviewers do and do not check.',
          label: 'remember',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'take-notes-you-can-use-later',
      title: 'Take notes you can use later',
      Art: NotesScene,
      caption: 'short notes in your own words, with page numbers, beat a highlighted PDF',
      body: [
        'Imran\'s old notes were highlighted PDFs. Months later, the yellow lines meant nothing to him. Useful notes are written down, short, and in your own words. For every paper you read closely, record:',
        {
          list: [
            'The full reference, so you never have to search for it again.',
            'One or two sentences on what the paper did and found, **in your own words**.',
            'The method, the data and the sample size.',
            'Key numbers, each with its **page number**.',
            'Limitations, whether the authors state them or you notice them.',
            'How it connects to your work: supports, contradicts, or leaves a gap.',
            'Any sentence you copy, inside **quotation marks**, with its page number.',
          ],
          style: 'check',
        },
        'Write the note on the day you read the paper. A note written a week later is usually written from memory, and memory is exactly what the note was meant to replace.',
        'The last habit matters more than it looks. Copied lines without quotation marks are how careful students end up with plagiarism in their drafts, as [how to avoid plagiarism](/blogs/how-to-avoid-plagiarism/) explains. And if you use the same headings for every paper, your notes become a table almost by themselves, which is exactly what a [literature review matrix](/blogs/literature-review-matrix/) is.',
        '[Fiberarticle](https://app.fiberarticle.com)\'s Extract tool builds that kind of table for you. You name the columns you care about, such as method, dataset or accuracy, and it fills each cell from the paper along with a supporting quote, so every value can be checked against the source.',
      ],
    },
    {
      id: 'know-when-to-stop',
      title: 'Know when to stop',
      Art: StopScene,
      caption: 'skim many, read some, study a few',
      body: [
        'You do not have to finish every paper. A useful rule of thumb is to skim many, read some and study a few.',
        {
          list: [
            '**Skim many:** the first pass, for every paper that looks relevant.',
            '**Read some:** the second pass, for the papers that matter to your question.',
            '**Study a few:** the third pass, for the handful your own work builds on directly.',
          ],
          style: 'dots',
        },
        'Deciding to stop reading a paper is not a failure. A paper that does not answer your question has already given you something useful: the knowledge that you can set it aside.',
        'Three months later, Imran had skimmed more than a hundred papers, read about thirty with care, and studied five closely enough to explain them to Zoya without notes. His notes fitted in one spreadsheet, and his own experiments had finally started.',
      ],
    },
  ],

  takeaways: [
    'Decide why you are reading a paper before you start.',
    'Read in passes: five to ten minutes first, up to an hour second, and a deep third pass only for key papers.',
    'Read the abstract, conclusion and figures before the details.',
    'Check axes, units, sample sizes and error bars before believing a figure.',
    'Question claims kindly but firmly: evidence, comparison, limitations and funding.',
    'Take short notes in your own words, with page numbers and quotation marks.',
  ],

  faq: [
    {
      q: 'How long should it take to read a research paper?',
      a: 'It depends on why you are reading it. A first pass takes about five to ten minutes, a careful second pass up to an hour, and a full third pass can take several hours for a beginner. Most papers only need the first pass.',
    },
    {
      q: 'Should I print papers or read them on screen?',
      a: 'Whatever helps you focus. Many people skim on screen and print only the few papers they study closely, so they can write in the margins.',
    },
    {
      q: 'What if I do not understand the methods section?',
      a: 'Read about the same technique in a review article or a textbook chapter first, then return to the paper. It is also fine to ask your guide or a senior; everyone finds their first papers hard.',
    },
    {
      q: 'Can AI summarise papers for me?',
      a: 'It can help you decide what to read, but check any summary against the paper, especially numbers and limitations. Fiberarticle, for instance, shows the passage behind each point it writes so you can verify it quickly.',
    },
  ],

  cta: {
    title: 'Spend your reading time on the right papers',
    text: 'Fiberarticle finds and reads open-access papers on your topic and shows the passage behind every point it makes, so you know which papers deserve your second and third pass. It is free to use yourself.',
  },
}
