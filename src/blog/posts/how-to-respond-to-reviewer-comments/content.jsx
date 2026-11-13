import Hero from './hero.jsx'
import {
  ChecklistScene,
  DisagreeScene,
  ExamplesScene,
  FilesScene,
  FormatScene,
  PointsScene,
  SortScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'twenty-three comments on one side, and a calm reply to each on the other',
  },

  intro: [
    'Yamini Rajendran is in the third year of her PhD in Civil Engineering at an institute in Tiruchirappalli. The district grows bananas, and after every harvest the farmers cut down the stems and leave them to rot. Her first journal paper tests whether fibre pulled from those stems can strengthen the soft clay under village roads. Four months after she submitted it, the decision arrived: major revision, with 23 comments from two reviewers and 60 days to reply.',
    'She read the comments on her phone in the hostel corridor. Reviewer 2 had called the testing "inadequate" and one section "hard to follow". By midnight she had typed a long, angry reply. Next morning she showed it to her guide, Dr. Vijayalakshmi Raghavan, who read it, smiled and said, "Good. Now delete it, and we will write the real one."',
    'This blog follows what Yamini learned about how to respond to reviewer comments: what you send back, the format of the response letter, how to answer each comment, sample replies, and how to disagree.',
  ],

  sections: [
    {
      id: 'what-you-send-back',
      title: 'What a response to reviewers is, and what you send back',
      Art: FilesScene,
      caption: 'four files go back to the editor, not one',
      body: [
        'When a journal asks for a revision, it wants two things from you: a better paper, and a clear account of what you changed. That account is the **response letter**, also called the response to reviewers. [Peer review](/blogs/peer-review-explained/) does not end with the decision letter: the editor, and often the same reviewers, will read your reply and decide again.',
        {
          define: 'response letter',
          hint: 'noun',
          meaning: 'A document sent with a revised manuscript that answers every comment from the editor and the reviewers, one by one, and shows what was changed and where. A reply that disagrees with a comment and explains why no change was made is called a rebuttal.',
          tone: 'blue',
        },
        'An Elsevier guide by Catherine Carnovale says a resubmission should contain four things:',
        {
          table: {
            head: ['File', 'What it is for'],
            rows: [
              ['Cover letter', 'A brief, polite note to the editor, usually from the corresponding author, saying that this is a resubmission'],
              ['List of responses', 'Your reply to every comment, point by point'],
              ['Manuscript with changes marked', 'Shows where the edits are, for example with Track Changes in Word'],
              ['Clean manuscript', 'The final version with no marks on it'],
            ],
          },
          tone: 'amber',
        },
        'Journals differ in the details, and some have their own template, so read the decision letter and the author guidelines first. Frontiers gives the basic rule in its guidance for authors: unless the editor suggests otherwise, respond to every point, including those that recommend rejection.',
      ],
    },
    {
      id: 'before-you-reply',
      title: 'Before you reply: wait, read and sort',
      Art: SortScene,
      caption: 'sleep on it first, then sort every comment into a box',
      body: [
        'The first reading of a review hurts. The Elsevier guide calls its method CALM, and the C stands for comprehend. Read the decision letter and the comments, then leave them until the following day. Letting time pass, it says, prevents "an impulsive and heated response" that you would regret later.',
        'William Stafford Noble, who wrote "Ten simple rules for writing a response to reviewers" in PLOS Computational Biology in 2017, goes one step further: if necessary, write the response twice. The first draft is for you and your co-authors, and it can say whatever you feel. The second is the one the journal sees. Yamini\'s midnight draft was her first version. It never left her laptop.',
        'Then get organised. Taylor & Francis suggests these steps:',
        {
          steps: [
            {
              title: 'Catalogue the comments.',
              text: 'Copy every requested change into a new document, with a separate part for the editor and for each reviewer.',
            },
            {
              title: 'Mark up the manuscript.',
              text: 'Note where each change belongs. This shows you where two comments touch the same paragraph.',
            },
            {
              title: 'Start with the biggest changes.',
              text: 'New analysis and restructuring come first, so that you do not polish sentences that will later be deleted.',
            },
            {
              title: 'Track everything.',
              text: 'Keep every change visible from the first edit, with comments or Track Changes.',
            },
          ],
          tone: 'amber',
        },
        'Yamini sorted her 23 comments into three groups: 15 she agreed with and could fix, 6 that needed new work, and 2 she did not agree with. Seeing only two in the last group changed her mood.',
        {
          note: 'Tell your co-authors as soon as the reviews arrive. Editage notes that journals generally expect all listed co-authors to review and approve the revised manuscript and the response letter before resubmission.',
          label: 'remember',
          tone: 'red',
        },
      ],
    },
    {
      id: 'response-letter-format',
      title: 'Response to reviewers letter format',
      Art: FormatScene,
      caption: 'the parts of a response letter, from the thank you to the page and line',
      body: [
        'There is no single official format, but the guides agree on the parts. A good letter can be read without opening the manuscript. Noble calls this making the response self-contained.',
        {
          table: {
            head: ['Part', 'What goes in it'],
            rows: [
              ['Opening', 'A short thank you to the editor and the reviewers, and a few lines on the main changes'],
              ['Your convention', 'One line saying how comments, replies and new text are shown, for example comments in bold and new text in italics'],
              ['A heading for each reviewer', 'The editor first, then Reviewer 1 and Reviewer 2, with the comments numbered 1.1, 1.2 and so on'],
              ['The comment', 'Copied in full, in the reviewer\'s own words'],
              ['Your response', 'A direct answer, then what you did'],
              ['The changed text', 'Quoted in the letter, with its page and line numbers'],
            ],
          },
          tone: 'blue',
        },
        'Taylor & Francis asks that each comment be recorded "without paraphrasing or shortening". If you trim a harsh comment, the reviewer will notice.',
        'Noble adds one detail: when you give line numbers, say whether they refer to the original or the revised manuscript, because the two no longer match.',
        'How long should the letter be? As long as it needs to be. Editage says a response letter is often 3 to 10 pages. Taylor & Francis notes that a good one can be more than 20 pages and still be quick to follow if it is properly structured. Yamini\'s came to nine.',
      ],
    },
    {
      id: 'how-to-respond-point-by-point',
      title: 'How to respond to reviewer comments, point by point',
      Art: PointsScene,
      caption: 'a one-word reply on the left, and a reply with four parts on the right',
      body: [
        'Each reply is small, and each follows the same order. These five habits come from Noble, the Elsevier guide and the European Association of Science Editors (EASE).',
        {
          steps: [
            {
              title: 'Answer first.',
              text: 'Noble asks for a direct answer at the start of each reply, a yes or a no whenever possible. Background comes after.',
            },
            {
              title: 'Say what you did.',
              text: 'The Elsevier guide warns against lazy responses like "answered" or "fixed in manuscript". Name the action: added, removed, rewrote, tested again.',
            },
            {
              title: 'Show the change.',
              text: 'EASE passes on this advice: the reviewer or editor should not have to peruse the manuscript to find a change you made. Give the original text, the new text and where it is.',
            },
            {
              title: 'Take the blame for confusion.',
              text: 'If a reviewer missed something that was already in the paper, Noble suggests apologising for not making it clear, and revising the text anyway.',
            },
            {
              title: 'Do what is asked, when you can.',
              text: 'Noble\'s eighth rule is simple: when possible, do what the reviewer asks. Keep your disagreements for the points that really matter.',
            },
          ],
          tone: 'green',
        },
        'Thank the reviewers at the start, as both EASE and Elsevier advise, and keep the tone level after that. The Elsevier guide puts it bluntly: "There is no space for ego in your response."',
      ],
    },
    {
      id: 'response-to-reviewer-comments-example',
      title: 'Response to reviewer comments: example replies',
      Art: ExamplesScene,
      caption: 'three kinds of comment, and the reply each one got',
      body: [
        'Here are three replies from Yamini\'s letter. The first is to a comment she agreed with.',
        {
          quote: 'Comment 1.3: Each soil mix was tested with only three samples. This is too few to support the conclusions. Response: We agree. We have prepared and tested three more samples for each mix, so every result is now the average of six. Table 3 has been updated and reports the range as well as the average (revised manuscript, page 8, lines 171 to 180). The overall pattern is unchanged.',
          by: 'when you agree',
          tone: 'green',
        },
        'The second is about something she thought was already in the paper.',
        {
          quote: 'Comment 2.2: It is not clear how the fibres were treated before mixing. Response: We apologise that this was unclear. The treatment was mentioned in the introduction but not in the methods. We have added a paragraph to Section 2.2 that gives the soaking time, the drying method and the cut length of the fibres (page 5, lines 96 to 107).',
          by: 'when the reviewer missed something',
          tone: 'blue',
        },
        'The third asks for work she could not do.',
        {
          quote: 'Comment 1.7: The fibre will decay in wet soil. The authors should test the samples again after 12 months. Response: We agree that decay is an important concern. A 12 month test was not possible within this study, which ends before such a test could finish. We have stated this as a limitation in Section 4.3 (page 12, lines 268 to 275) and named long term durability as the first item of future work.',
          by: 'when you cannot do what is asked',
          tone: 'amber',
        },
        'The third reply follows Editage\'s advice for a request you cannot meet: do not ignore the comment, explain clearly why the change is not feasible, and offer an alternative, such as an added limitation statement. Our guide on [how to write limitations of the study](/blogs/how-to-write-limitations-of-the-study/) shows how to word one.',
        'All three replies work the same way: an answer, what was done, and where to look. In the full letter, the new paragraph and the new table were pasted under each reply.',
      ],
    },
    {
      id: 'how-to-disagree-with-a-reviewer',
      title: 'How to disagree with a reviewer, and other hard cases',
      Art: DisagreeScene,
      caption: 'one reviewer says shorter, the other says more, and the author has to explain her choice',
      body: [
        'You do not have to accept every suggestion. Taylor & Francis reminds authors that peer review is a dialogue, and that it is quite natural to disagree respectfully as long as you make a good argument why. Editage gives the other half of the rule: never argue that a reviewer is simply wrong without offering evidence, data or a citation.',
        'Reviewer 2 wanted Yamini to add cement to every mix, because fibre alone was "of little practical use". She did not agree. Her reply thanked the reviewer and explained that the aim of the study was a low-cost treatment that a village road crew could use without cement. It cited two published studies that had tested natural fibre alone, and she added a sentence to the introduction to make that aim plain. The paper changed a little, and her design stayed.',
        {
          table: {
            head: ['Situation', 'What to do'],
            rows: [
              ['Two reviewers ask for opposite things', 'Editage: "Do not silently pick a side without explanation." Note the conflict in the letter, say which approach you chose and give your reasons'],
              ['You do not understand a comment', 'Do not guess. Ask the editor for clarification (Editage)'],
              ['A comment is rude or sarcastic', 'Respond to the scientific content only and ignore the tone (Editage)'],
              ['A comment seems unfair or unprofessional', 'Do not argue inside the response letter. Write to the editor separately and ask for advice (Noble, EASE)'],
            ],
          },
          tone: 'pink',
        },
        'Yamini had one clash. Reviewer 1 wanted the introduction shorter. Reviewer 2 wanted more on coir and jute, the fibres that others had studied. She cut two general paragraphs, added one comparing the three fibres, and wrote the same explanation under both comments.',
      ],
    },
    {
      id: 'before-you-resubmit',
      title: 'Before you resubmit: files, deadline and a checklist',
      Art: ChecklistScene,
      caption: 'six ticks, four files, and eight days to spare',
      body: [
        'The cover letter to the editor is short. Editage lists its parts: the editor\'s name and the manuscript number, a line saying you are resubmitting, two or three of the main changes in plain language, a sentence confirming that a point-by-point response is attached, and a thank you. It is a shorter cousin of the [cover letter for journal submission](/blogs/how-to-write-a-cover-letter-for-journal-submission/) you wrote the first time.',
        'Watch the deadline. Editage says most journals allow 4 to 8 weeks for a standard revision, and occasionally longer for major changes, but the date in your own decision letter is the one that counts. If you cannot meet it, write to the editorial office before the deadline passes, ideally one to two weeks ahead, with a new date and a short reason. A late revision with no explanation can be treated as withdrawn.',
        {
          list: [
            'Every comment from the editor and each reviewer has a reply, including the ones you did not act on.',
            'Each reply begins with a direct answer and says what was done.',
            'Changed text is quoted in the letter, with page and line numbers from the revised manuscript.',
            'Nothing is promised in the letter that is missing from the paper.',
            'All co-authors have read and approved the manuscript and the letter.',
            'The cover letter, the response letter, the marked manuscript and the clean manuscript are in the form the journal asks for.',
          ],
          style: 'check',
        },
        'Yamini uploaded her four files on day 52 of the 60. Five weeks later the editor wrote back: minor revision, with three small comments, all from Reviewer 2. One of them began, "The authors have responded carefully to my earlier concerns." She answered all three in an afternoon, and the paper was accepted the following month. The angry draft is still on her laptop, in a folder named "do not send".',
      ],
    },
  ],

  takeaways: [
    'Send back four things: a cover letter, a point-by-point response letter, the manuscript with changes marked and a clean manuscript.',
    'Wait a day before you reply, and keep any angry draft to yourself.',
    'Copy every comment in full, answer it directly, say what you did, and quote the changed text with its page and line.',
    'You may disagree, politely and with evidence, but never skip a comment.',
    'Explain conflicting comments openly, take unfair ones to the editor, and ask for more time before the deadline, not after.',
  ],

  faq: [
    {
      q: 'How do you write a point-by-point response to reviewer comments?',
      a: 'List each reviewer separately, number their comments, copy each comment in full and put your reply directly under it. Begin the reply with a direct answer, say what you changed, quote the new text and give its page and line number.',
    },
    {
      q: 'Is it okay to disagree with a reviewer?',
      a: 'Yes. Peer review is a dialogue, and you are not required to accept every suggestion. Explain your reasons politely, support them with data or references, and where you can, make a small change that removes the cause of the comment. Never leave the comment unanswered.',
    },
    {
      q: 'What if I cannot finish the revision before the deadline?',
      a: 'Write to the handling editor or the editorial office before the deadline passes, give a specific new date and a brief reason. Editage advises asking one to two weeks ahead, and says most editors will grant a reasonable extension.',
    },
  ],

  cta: {
    title: 'Find the studies a reviewer asks for',
    text: 'When a reviewer asks for more or newer references, Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and shows the passage behind every point it writes, so you can check that a study really supports your reply before you cite it. One payment unlocks all of it, for good.',
  },
}
