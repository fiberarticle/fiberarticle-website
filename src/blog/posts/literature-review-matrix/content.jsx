import Hero from './hero.jsx'
import {
  ColumnsScene,
  CrateScene,
  LoomScene,
  MatrixScene,
  NotebookScene,
  ParagraphScene,
  ToolsScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'seventy papers, one table, and the gaps you can finally see',
  },

  intro: [
    'Meera is a PhD scholar in Education at a university in Jaipur. Her topic is how teaching children in their mother tongue during the first years of school affects their reading. After eight months she had seventy PDFs in a folder called "Lit Review FINAL", nearly all of them read and highlighted.',
    'At her monthly review meeting, her guide, Professor Rathore, asked a simple question: "Which of these studies used a standardised reading test?" Meera knew she had read the answer somewhere. She could not say where. That evening her lab-mate Ishaan showed her the table that had saved his own thesis: a literature review matrix.',
    'This blog explains what that table is, how to build one, and how it turns a folder of papers into a review you can actually write.',
  ],

  sections: [
    {
      id: 'the-seventy-pdf-problem',
      title: 'Why seventy PDFs stop making sense',
      Art: CrateScene,
      caption: 'the folder keeps filling up, and the answers get harder to find',
      body: [
        'Reading papers one after another feels productive, and each paper makes sense on its own. The trouble starts when you need to compare them, because your notes live inside seventy separate files, as highlights and margin comments that can never sit side by side.',
        'Memory does not help much either. By the twentieth paper, the details of the fifth have blurred into the ninth. You remember that someone found a strong effect in Grade 2, but not who, with how many children, or in which state.',
        {
          quote: 'Your PDFs are not your notes. Your notes need a place where papers can sit next to each other.',
          by: 'Ishaan, to Meera',
          tone: 'blue',
        },
        'A literature review is about comparison: what studies agree on, where they differ, and what nobody has looked at yet. So your notes need a shape that makes comparison easy.',
      ],
    },
    {
      id: 'what-is-a-literature-review-matrix',
      title: 'What a literature review matrix is',
      Art: MatrixScene,
      caption: 'across a row you meet one paper; down a column you meet the whole field',
      body: [
        {
          define: 'Literature review matrix',
          hint: 'also called a synthesis matrix',
          meaning: 'A table with one row for each source and one column for each question you ask of every source, such as its aim, method, sample, findings and limitations.',
          tone: 'amber',
        },
        'The idea is simple, and that is its strength. Reading across a row gives you one paper at a glance. Reading down a column shows how every paper answered the same question, and that second view is where synthesis happens, because patterns only appear when papers are placed next to each other.',
        'In health research the same idea is often called an evidence table, and systematic reviews use a stricter version of it for data extraction. For a thesis chapter or a first review, a plain spreadsheet is enough. Our guide to [writing a literature review](/blogs/how-to-write-a-literature-review/) shows where the matrix fits into the whole process.',
      ],
    },
    {
      id: 'choose-your-columns',
      title: 'Choose your columns before you read',
      Art: ColumnsScene,
      caption: 'the column headings are the questions you will ask every paper',
      body: [
        'Columns are questions. Choose them from your research question before you open the next paper, so that you read with a purpose. Six to ten columns are usually enough to start, and you can add one later if you find yourself asking the same new question of every paper.',
        {
          table: {
            head: ['column', 'what to write', 'an example from Meera'],
            rows: [
              ['Citation', 'Authors, year, short title, and where you found it', 'Study A (2021), journal article'],
              ['Aim', 'The question the study asked, in one line', 'Does teaching in the home language in Grades 1 and 2 improve reading?'],
              ['Method', 'The design: survey, experiment, case study and so on', 'Two groups of schools compared'],
              ['Sample', 'Who or what was studied, and how many', 'Children in one rural district'],
              ['Findings', 'The main result, in your own words', 'Better reading fluency by the end of Grade 2'],
              ['Limitations', 'What the authors admit, and what you notice', 'One district only; no follow-up after Grade 2'],
              ['Relevance', 'How it connects to your own question', 'Directly on topic'],
              ['Theme', 'The group it belongs to in your review', 'Early reading gains'],
            ],
          },
          tone: 'amber',
        },
        {
          note: 'columns depend on the field. An engineering student might add dataset, model and evaluation metric; a health student might use population, intervention, comparison and outcome.',
          label: 'tip',
          tone: 'amber',
        },
        'Two practical columns are worth adding in any field. One records where you found the paper, such as a database search or another paper\'s reference list, which helps when your guide or an examiner asks how you searched. The other holds the file name or DOI, so you can reopen the right PDF in seconds instead of hunting through the folder.',
      ],
    },
    {
      id: 'fill-it-as-you-read',
      title: 'Fill it in as you read, in your own words',
      Art: NotebookScene,
      caption: 'one paper read, one row written, while the details are still fresh',
      body: [
        'The matrix only works if you fill each row while the paper is fresh, not at the end of the month. Meera set herself a routine for every paper.',
        {
          steps: [
            {
              title: 'Read the abstract and the conclusion first.',
              text: 'Decide whether the paper belongs in your review at all. If it does not, note why in one line and move on.',
            },
            {
              title: 'Skim the method and the results.',
              text: 'Look for the design, the sample and the main numbers. Our guide on [how to read a research paper](/blogs/how-to-read-a-research-paper/) shows how to do this quickly.',
            },
            {
              title: 'Fill the row in your own words.',
              text: 'Short phrases are fine. Writing in your own words forces you to understand the paper, and it protects you from copying by accident later.',
            },
            {
              title: 'Mark anything you copy.',
              text: 'If you keep an exact phrase, put it in quotation marks and add the page number.',
            },
            {
              title: 'Add one line of your own.',
              text: 'A doubt, a link to another paper, or a question for your guide.',
            },
          ],
          tone: 'pink',
        },
        'When a paper does not report something, write "not reported" instead of leaving the cell blank. A blank cell looks like work you forgot. "Not reported" is information, and a column full of it is often the first sign of a gap.',
        'Meera filled five rows a day. In two weeks all seventy papers were in the table.',
      ],
    },
    {
      id: 'read-across-and-down',
      title: 'Read across the rows, then down the columns',
      Art: LoomScene,
      caption: 'papers run one way, questions the other, and the hole in the weave is the gap',
      body: [
        'Once the rows are filled, the real work begins. Reading across a row reminds you what one paper did. Reading down a column tells you what the whole field has done. When you read down a column, ask:',
        {
          list: [
            'Where do the studies agree?',
            'Where do they disagree, and is there a reason, such as different ages or different tests?',
            'Which methods keep repeating, and which are missing?',
            'Which places, groups or years appear again and again, and which never appear?',
            'How has the picture changed over time?',
          ],
          style: 'dots',
        },
        'Colour helps here. Shade the cells of studies that agree in one colour and those that disagree in another, or sort the table by year to see how the findings shift over time.',
        'When Meera read down her Sample column, she saw that almost every study came from urban schools. Rural classrooms, where many children speak a language at home that is different from the one used in school, barely appeared. That empty stretch of the column was a [research gap](/blogs/how-to-find-a-research-gap/), and it became the centre of her thesis.',
      ],
    },
    {
      id: 'from-matrix-to-paragraphs',
      title: 'From the matrix to paragraphs',
      Art: ParagraphScene,
      caption: 'one column of the table becomes one paragraph of the review',
      body: [
        'A good literature review is organised by ideas, not by papers. The matrix makes this easy, because each theme or column can become a paragraph.',
        {
          steps: [
            { title: 'Pick a theme or a column.', text: 'For example, everything your matrix says about reading gains in the early grades.' },
            { title: 'Write the pattern first.', text: 'Say in your own words what the studies show together.' },
            { title: 'Support it with several studies.', text: 'Cite two or three that agree, and say how strong their evidence is.' },
            { title: 'Add the contrast.', text: 'Bring in the studies that disagree and explain why they might differ.' },
            { title: 'End with what it means.', text: 'Point to the open question or gap that follows.' },
          ],
          tone: 'blue',
        },
        {
          note: '*Most studies report better early reading when children are taught in their mother tongue (Study A, 2021; Study B, 2019), but they disagree on how long the benefit lasts. Study C (2022) found the difference between groups had narrowed by Grade 5, while Study D (2020) did not follow children beyond Grade 2. Almost all of this work comes from urban schools, so little is known about rural classrooms.*',
          label: 'example',
          tone: 'green',
        },
        'Compare that with a paragraph that summarises one paper after another. The first builds an argument; the second is a list. Meera wrote her first paragraph like this in twenty minutes, straight from two columns of her matrix.',
      ],
    },
    {
      id: 'tools-for-your-matrix',
      title: 'Tools that make the matrix easier',
      Art: ToolsScene,
      caption: 'the same table, on a screen, ready to export',
      body: [
        'You do not need special software. A spreadsheet in Excel or Google Sheets works well: freeze the top row, turn on text wrapping, and use filters to show one theme at a time. Some people keep the matrix in a notes app such as Notion or Obsidian, or use tags and notes inside a reference manager like Zotero.',
        'Research tools can also build a first draft for you. [Fiberarticle](https://app.fiberarticle.com)\'s Literature Reviewer reads each paper it selects and fills an evidence matrix with the contribution, methodology, models, dataset, tools, metrics, results, limitations, unresolved problems, assumptions, missing evaluations and opportunities, and it tells you whether it read the full text or only the abstract. Its Extract feature lets you set your own columns, up to twenty across up to fifty papers, with a short supporting quote from the paper for every cell. Both export as CSV, so the table opens straight in your spreadsheet.',
        'Treat any automatic draft as a starting point. Check the cells against the papers, especially where only the abstract was available, and keep a column for your own comments, because the thinking in a review is still yours.',
        'Meera\'s matrix now has eighty-four rows. At her next review meeting Professor Rathore asked about standardised reading tests again. She filtered one column and answered in ten seconds.',
      ],
    },
  ],

  takeaways: [
    'A literature review matrix has one row per source and one column per question you ask of every source.',
    'Choose the columns from your research question before you read.',
    'Fill each row while the paper is fresh, in your own words, with quotation marks and page numbers for anything copied.',
    'Write "not reported" instead of leaving a cell empty; missing information often points to a gap.',
    'Reading down a column shows where studies agree, where they differ and what is missing.',
    'Each theme or column can become a paragraph of your review.',
  ],

  faq: [
    {
      q: 'How many columns should a literature review matrix have?',
      a: 'Six to ten is a good start. With too few you miss comparisons, and with too many you stop filling them in. Add a column when you find yourself asking the same new question of every paper.',
    },
    {
      q: 'Is a synthesis matrix the same as a literature review matrix?',
      a: 'For most purposes, yes. Literature review matrix, synthesis matrix and evidence table all describe the same idea: sources in rows, questions in columns. Systematic reviews use a stricter version of it for data extraction.',
    },
    {
      q: 'Should I use Excel or a special tool?',
      a: 'Any spreadsheet works, and Google Sheets makes it easy to share the matrix with your guide. Specialised tools can save time, but the comparison still happens when you read down the columns yourself.',
    },
    {
      q: 'Can I include the matrix in my thesis?',
      a: 'Many theses include a summary table of key studies, in the review chapter or as an appendix. Check your university\'s format, keep the table readable, and cite every row.',
    },
  ],

  cta: {
    title: 'Get a first draft of your matrix',
    text: 'Fiberarticle\'s Literature Reviewer fills an evidence matrix for the papers it reads, and Extract builds a table with your own columns and a supporting quote for every cell. Both export as CSV. It is free to use yourself.',
  },
}
