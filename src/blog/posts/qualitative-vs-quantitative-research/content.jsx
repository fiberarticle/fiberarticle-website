import Hero from './hero.jsx'
import {
  ChooseScene,
  DifferencesScene,
  ExamplesScene,
  MethodsScene,
  MixedScene,
  SampleScene,
  WhatScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'one side counts how many, the other listens for why',
  },

  intro: [
    'Anjali Thakur is in the second year of her MEd at a university in Shimla. Before that she taught for three years in a government senior secondary school in a village above the Sutlej valley, and one thing there stayed with her. Every April, when Class 11 began, most of the girls in her old school chose the arts stream, even the ones who had done well in science in Class 10. Her dissertation would find out why.',
    'Her first plan was a questionnaire of forty statements, each to be marked from "strongly agree" to "strongly disagree", for 300 girls across the district. Her guide, Dr. Kusum Verma, read it and asked, "Do you want to know how many girls choose arts, or why they choose it?" Anjali said both. "Then you need to decide which part of your question needs numbers and which needs words."',
    'That is the whole difference between qualitative and quantitative research. This blog explains qualitative vs quantitative research the way Dr. Verma explained it to Anjali: what each one is, the key differences, examples, how each collects and analyses data, how mixed methods combines them, and how to choose for your own thesis.',
  ],

  sections: [
    {
      id: 'what-is-qualitative-and-quantitative-research',
      title: 'What is qualitative and quantitative research?',
      Art: WhatScene,
      caption: 'a sheet of numbers and a sheet of words, about the same girls',
      body: [
        'The two differ in the evidence they collect and the question they answer.',
        {
          define: 'quantitative research',
          hint: 'noun',
          meaning: 'Research that collects numerical data and analyses it with statistics. It measures, counts and compares, and usually asks how many, how much or how strongly.',
          tone: 'blue',
        },
        {
          define: 'qualitative research',
          hint: 'noun',
          meaning: 'Research that collects non-numerical data, such as words, images and observations, and interprets it for meaning. It usually asks why, how and what it is like.',
          tone: 'pink',
        },
        'The psychology site Simply Psychology puts it in one line each: quantitative research "collects numerical data and analyzes it using statistical methods", while qualitative research "gathers non-numerical data (words, images, sounds)" to explore experiences and meanings.',
        'For Anjali, the quantitative question was easy to write: what share of girls in rural government schools of the district choose each stream in Class 11? The qualitative question was harder and more interesting: how do girls and their families decide which stream a girl should take?',
        {
          note: 'qualitative does not mean "less scientific", and quantitative does not mean "more serious". Each is a set of methods with its own rules for doing it well.',
          label: 'remember',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'qualitative-vs-quantitative-research-differences',
      title: 'Qualitative vs quantitative research: the key differences',
      Art: DifferencesScene,
      caption: 'two ways of knowing on one balance, and neither side wins',
      body: [
        'Read this table as tendencies, not fixed laws.',
        {
          table: {
            head: ['', 'quantitative research', 'qualitative research'],
            rows: [
              ['main question', 'how many, how much, is there a relationship', 'why, how, what is it like'],
              ['data', 'numbers: scores, counts, measurements', 'words, images, observations: transcripts, field notes, photos'],
              ['aim', 'to test a hypothesis or measure something', 'to explore and understand something'],
              ['reasoning', 'usually deductive: start from a theory and test it', 'usually inductive: build ideas from the data'],
              ['sample', 'larger, ideally chosen at random', 'smaller, chosen on purpose for what people can tell you'],
              ['tools', 'closed questionnaires, tests, scales, experiments', 'interviews, focus groups, observation, documents'],
              ['analysis', 'statistics', 'coding and finding themes'],
              ['results look like', 'tables, graphs, percentages, p values', 'themes, quotes, detailed description'],
              ['strength', 'can be generalised to a population and repeated', 'depth, context and new ideas'],
            ],
          },
          tone: 'blue',
        },
        'Underneath sits a difference in how each sees the world. An open nursing research textbook hosted by Thompson Rivers University, in Canada, links quantitative research to realism, the view that there is one truth to be discovered, and qualitative research to constructionism, the view that people create meanings and that there can be many realities.',
        'Dr. Verma drew it more simply on the back of Anjali\'s questionnaire. On one side she drew a small bar chart. On the other she wrote a sentence a girl had once said to Anjali: "Science means tuition in town, and the last bus comes at five." The chart tells you how big the problem is. The sentence tells you what the problem is.',
      ],
    },
    {
      id: 'qualitative-and-quantitative-research-examples',
      title: 'Qualitative and quantitative research examples',
      Art: ExamplesScene,
      caption: 'one topic, two questions, two kinds of answer',
      body: [
        'The same topic can be studied either way. What changes is the question you ask about it.',
        {
          table: {
            head: ['topic', 'a quantitative question', 'a qualitative question'],
            rows: [
              ['stream choice in Class 11', 'What share of girls in rural schools choose science, and does it differ by school?', 'How do girls and their parents decide on a stream?'],
              ['online classes', 'Is there a relationship between hours of online study and marks in the board exam?', 'What was it like for students in hill villages to attend classes on a shared phone?'],
              ['a midday meal scheme', 'Did attendance rise in the months after the scheme started?', 'How do cooks and teachers describe the scheme working day to day?'],
            ],
          },
          tone: 'green',
        },
        'Quantitative questions use words such as *how many*, *relationship* and *difference*, because the answer is a number. Qualitative questions use *how*, *why* and *experience*, because the answer is an explanation. If your question is still vague, our guide on [how to write a good research question](/blogs/how-to-write-a-research-question/) helps you sharpen it first.',
        'A quantitative study usually starts with a hypothesis, a prediction it can test. A qualitative study usually starts with an open question and lets the answers shape what it finds. Our guide on [how to write a hypothesis](/blogs/how-to-write-a-hypothesis/) covers the first kind.',
      ],
    },
    {
      id: 'data-collection-and-analysis',
      title: 'How each one collects and analyses data',
      Art: MethodsScene,
      caption: 'ticked boxes become bars, spoken words become themes',
      body: [
        'Simply Psychology lists interviews, focus groups, observation, diaries, case studies and ethnography as typical qualitative methods, and experiments, surveys, psychometric tests and rating scales as typical quantitative ones. Our blog on [data collection methods in research](/blogs/data-collection-methods-in-research/) explains each of these in detail.',
        'Some tools can give either kind of data, depending on how you build them. A survey is the best example. The library of Shenandoah University, in the United States, notes that surveys with fixed answer choices support quantitative research, while surveys with open-ended questions can support qualitative research.',
        {
          compare: {
            left: {
              title: 'quantitative item',
              items: [
                'Which stream did you choose? (science, commerce, arts)',
                'Rate this: "My parents decided my stream." 1 to 5',
                'answers can be counted and compared at once',
              ],
              mark: 'dots',
              tone: 'blue',
            },
            right: {
              title: 'qualitative item',
              items: [
                'Tell me about the day you chose your stream.',
                'Who did you talk to before you decided, and what did they say?',
                'answers must be read, coded and interpreted',
              ],
              mark: 'dots',
              tone: 'pink',
            },
          },
        },
        'A rating scale like Anjali\'s forty statements, called a Likert scale, is usually treated as quantitative. But the gap between "agree" and "strongly agree" is not a measured distance, so some researchers argue its scores are not exact measurements. Ask your guide which tests suit such data.',
        'The analysis differs just as much. **Quantitative data** is first summarised with descriptive statistics, such as percentages, means and standard deviations, and then tested with inferential statistics, which ask whether a pattern in the sample is likely to hold in the population. **Qualitative data** is usually transcribed, read many times and coded: short labels are attached to pieces of text, and similar codes are grouped into themes. Thematic analysis is a common approach; grounded theory and content analysis are others.',
        {
          note: 'software such as SPSS or R for numbers, and NVivo or ATLAS.ti for text, can help. It does not do the thinking. You still decide which test to run and what each theme means.',
          label: 'tip',
          tone: 'green',
        },
      ],
    },
    {
      id: 'sample-size-and-quality',
      title: 'Sample size, generalisation and quality',
      Art: SampleScene,
      caption: 'many people measured lightly, or a few people heard fully',
      body: [
        'A quantitative study wants its sample to stand for a whole population, so it usually needs more people and, ideally, chance in choosing them. A qualitative study wants people who can tell you a lot, so it chooses them on purpose and works with fewer. Our guide to [sampling methods in research](/blogs/sampling-methods-in-research/) explains both families.',
        'How few is enough? Many qualitative studies keep going until saturation, the point where new interviews stop bringing new ideas. Guest and colleagues, in a 2006 study, found that saturation was reached within the first twelve interviews of their study. Braun and Clarke, writing in 2021, questioned whether any fixed number like this means much at all, since it depends on the study. So do not write "12 interviews are enough" in your thesis. Explain how you decided when to stop.',
        'The two are also judged by different standards.',
        {
          table: {
            head: ['quantitative research asks', 'qualitative research asks'],
            rows: [
              ['**Reliability**: would the tool give the same result if used again?', '**Dependability**: is the process recorded well enough for someone to follow it?'],
              ['**Internal validity**: does it measure what it claims to?', '**Credibility**: would participants recognise their experience in the findings?'],
              ['**Generalisability**: does the result hold for the population?', '**Transferability**: is the setting described well enough for readers to judge where else it applies?'],
              ['**Objectivity**: is the result free of the researcher\'s bias?', '**Confirmability**: are the findings rooted in the data, not the researcher\'s wishes?'],
            ],
          },
          tone: 'amber',
        },
        'The right-hand column comes from Lincoln and Guba (1985), who proposed these four criteria of trustworthiness as rough parallels to reliability and validity. In a qualitative methodology, say how you met them: for example, by transcribing interviews word for word and keeping a diary of your decisions.',
      ],
    },
    {
      id: 'mixed-methods-research',
      title: 'What is mixed methods research?',
      Art: MixedScene,
      caption: 'three ways to put numbers and words in one study',
      body: [
        'You do not always have to choose. Mixed methods research collects both kinds of data in one study and brings them together in the analysis. The textbook *Research Design* by John Creswell and J. David Creswell describes three core designs.',
        {
          steps: [
            { title: 'Convergent design.', text: 'Collect quantitative and qualitative data in the same phase, analyse each separately, then compare the two to see whether they agree.' },
            { title: 'Explanatory sequential design.', text: 'Run the quantitative part first, then use qualitative data to explain what the numbers showed. Survey first, interviews after.' },
            { title: 'Exploratory sequential design.', text: 'Start qualitative to understand the topic or build a tool, then test it with a quantitative phase. Interviews first, survey after.' },
          ],
          tone: 'green',
        },
        'Mixed methods doubles the work: two kinds of data, two kinds of analysis, and a chapter that shows how they fit. Use it only when your question really has two parts.',
        'Anjali\'s question had two parts, so Dr. Verma agreed to an explanatory sequential design. First, a short questionnaire for Class 11 girls in a random sample of rural schools, asking which stream each girl chose and rating a few reasons. Then interviews with girls and parents, chosen from the survey to include girls who had scored well in science but taken arts.',
        {
          quote: 'The survey tells you where to look. The interviews tell you what you are looking at.',
          by: 'Dr. Verma, to Anjali',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'how-to-choose-qualitative-or-quantitative',
      title: 'How to choose between qualitative and quantitative research',
      Art: ChooseScene,
      caption: 'the question picks the road, not the fashion in the department',
      body: [
        'Do not begin with "I want to do a survey". Begin with your question, and ask these in order.',
        {
          steps: [
            { title: 'What does your question ask?', text: 'If the answer is a number, a difference or a relationship, it is quantitative. If the answer is an explanation, an experience or a process, it is qualitative.' },
            { title: 'How much is already known?', text: 'A new or little studied topic often needs qualitative work first, to find out what matters. A well studied topic with good measuring tools suits quantitative work.' },
            { title: 'Do you need to speak for a population?', text: 'A claim about all girls in the district needs a quantitative sample. A deep account of a few families does not.' },
            { title: 'What can you do well?', text: 'Statistics needs training and enough participants. Good interviews need patience and time to transcribe. Be honest about your skills and time.' },
            { title: 'What does your department expect?', text: 'Some departments and journals favour one approach. Read a few recent dissertations from your department and ask your guide before you design anything.' },
          ],
          tone: 'amber',
        },
        'Once you choose, name the approach in your methodology and give one sentence that ties it to your question. Then describe the design, sample, tools and analysis in the way our guide on [how to write a research methodology](/blogs/how-to-write-a-research-methodology/) shows.',
        {
          list: [
            'Calling a study "qualitative" because it has a few open questions at the end of a survey.',
            'Reporting percentages from eight interviews as if they spoke for a population.',
            'Choosing mixed methods only because it sounds stronger, then doing neither part properly.',
          ],
          style: 'cross',
        },
        'Anjali rewrote her proposal in a week. The forty statements became twelve, the 300 girls became a proper random sample of schools, and a second chapter plan appeared for the interviews. When she showed it to Dr. Verma, the guide took out the old questionnaire, with the sentence about the last bus still written on its back. "Now," she said, "you have a way to find out how many girls that sentence is true for."',
      ],
    },
  ],

  takeaways: [
    'Quantitative research collects numbers and analyses them with statistics; qualitative research collects words and observations and interprets their meaning.',
    'Quantitative questions ask how many, how much or whether things are related; qualitative questions ask why, how and what it is like.',
    'Quantitative studies use larger, ideally random samples; qualitative studies use smaller, purposive ones and often stop at saturation.',
    'Mixed methods combines both in one study, in a convergent, explanatory sequential or exploratory sequential design.',
    'Let your research question choose the approach, then explain that choice in your methodology.',
  ],

  faq: [
    {
      q: 'Is a survey qualitative or quantitative?',
      a: 'It depends on the questions. A survey with fixed choices or rating scales gives quantitative data. A survey with open-ended questions gives qualitative data. Many surveys have both, and you analyse each part in its own way.',
    },
    {
      q: 'Which is better, qualitative or quantitative research?',
      a: 'Neither. Quantitative research is better for measuring and generalising; qualitative research is better for understanding reasons and experiences. Choose the one that answers your question.',
    },
    {
      q: 'How many participants does a qualitative study need?',
      a: 'There is no single number. Many studies keep interviewing until new interviews stop bringing new themes. Explain in your methodology how you decided when to stop, and check what your department expects.',
    },
    {
      q: 'Can I use both qualitative and quantitative methods in my thesis?',
      a: 'Yes. That is called mixed methods research. Choose one of the designs, plan time for both kinds of analysis, and agree on it with your guide early, because it takes more work than either one alone.',
    },
  ],

  cta: {
    title: 'See which methods studies on your topic used',
    text: 'Fiberarticle\'s Literature Reviewer finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export, so you can compare whether earlier studies on your topic counted, listened or did both. One payment unlocks all of it, for good.',
  },
}
