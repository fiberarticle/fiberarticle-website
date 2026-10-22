import Hero from './hero.jsx'
import {
  AddScene,
  BeforeScene,
  MetricsScene,
  PublicScene,
  StepsScene,
  TidyScene,
  WhatScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'her own papers in, everyone else\'s papers out, and the profile open to the world',
  },

  intro: [
    'Aswathy Raj is in the third year of her PhD in Physics at a university in Kottayam. Her lab boils coconut husk into tiny carbon dots that glow under ultraviolet light, and she is testing whether that glow can reveal lead in well water from villages around Vaikom. She has three journal papers and one conference paper. Last month the department\'s research cell sent a circular asking every scholar for a Google Scholar profile link for the new research page.',
    'That evening she typed her name into Google Scholar and found a mess. There were papers by A. Raj in cardiology, A. Raj in civil engineering and A. Raj in economics, and her own papers were scattered among them. Her guide, Dr. Joseph Kurian, pulled up a chair. "That is why you make a profile," he said. "Then the papers that are yours sit in one place, under your name, and nobody has to guess."',
    'This blog explains how to create Google Scholar profile the way Dr. Kurian showed Aswathy: what a profile is, what you need before you start, the steps, how to add the right papers, how to make the profile public, what the numbers mean and how to keep it clean.',
  ],

  sections: [
    {
      id: 'what-is-a-google-scholar-profile',
      title: 'What is a Google Scholar profile?',
      Art: WhatScene,
      caption: 'one page with your papers, who cites them, and three numbers',
      body: [
        {
          define: 'Google Scholar profile',
          hint: 'noun',
          meaning: 'A page on Google Scholar that lists your publications and their citations. Google\'s help page says profiles "provide a simple way for authors to showcase their academic publications."',
          tone: 'blue',
        },
        'On your profile, Google says, you can "check who is citing your articles, graph citations over time, and compute several citation metrics." Those metrics are the total citations, the h-index and the i10-index, each in two versions, All and Recent.',
        'A Google Scholar profile is not the same as an ORCID iD, and you will probably want both.',
        {
          table: {
            head: ['', 'Google Scholar profile', 'ORCID iD'],
            rows: [
              ['what it is', 'a list of your papers that Google finds and counts citations for', 'a permanent 16 digit number that you own and control'],
              ['who fills it', 'mostly Google, with your checking', 'you, or systems you give permission to'],
              ['citation counts', 'yes, with h-index and i10-index', 'no'],
            ],
          },
          tone: 'blue',
        },
        'If you do not have an ORCID iD yet, our guide on [how to create ORCID ID](/blogs/how-to-create-orcid-id/) walks you through it in ten minutes.',
      ],
    },
    {
      id: 'what-you-need-before-you-start',
      title: 'What you need before you create a Google Scholar profile',
      Art: BeforeScene,
      caption: 'a personal Google account, a university email, and the name on your papers',
      body: [
        'Aswathy was about to sign in with her university Google account. Dr. Kurian stopped her. Google\'s own help page says: "We recommend that you use a personal account, not an account at your institution". A university account may be closed when you finish your PhD or move to another job, and you do not want your profile to disappear with it.',
        'Keep these ready before you start:',
        {
          list: [
            '**A personal Google account.** Any Google account works. Make one if you do not have one.',
            '**Your university or institution email address.** You will add it to the profile and verify it. This is what lets the profile appear in search results, as we explain below.',
            '**The name you publish under.** Use the spelling that appears on your papers. If you have published under more than one form, note them all.',
            '**Your affiliation.** Your department and university, written the way you want people to see it.',
            '**A few areas of interest.** Short phrases such as *carbon dots* or *heavy metal sensing*.',
            '**A list of your papers.** Titles and DOIs, so you can check that every one of them ends up on the profile.',
          ],
          style: 'check',
        },
        {
          note: 'Google says plainly that "non-institutional email addresses, such as gmail.com, hotmail.com, aol.com, yahoo.com, qq.com, etc., are not suitable" for verification. Use your personal account to sign in, and your university email for verification.',
          label: 'remember',
          tone: 'red',
        },
      ],
    },
    {
      id: 'how-to-create-google-scholar-profile-step-by-step',
      title: 'How to create Google Scholar profile, step by step',
      Art: StepsScene,
      caption: 'sign in, fill the form, add papers, choose updates, verify, go public',
      body: [
        'The steps below follow Google\'s help page. Button names can change a little over time, but the order stays the same.',
        {
          steps: [
            { title: 'Sign in.', text: 'Go to Google Scholar and sign in with your personal Google account. Then open the profile sign up form from the **My profile** link. Some older guides call it *My Citations*.' },
            { title: 'Fill in the form.', text: 'Google asks you to "confirm the spelling of your name, enter your affiliation, interests, etc." Enter your university email address in the email field too.' },
            { title: 'Add your articles.', text: 'Google shows groups of articles "written by people with names similar to yours". Add only the ones you wrote. The next section explains how to do this carefully.' },
            { title: 'Choose how updates work.', text: 'Google asks what to do when it finds changes. You can have updates applied automatically, or review them first. Pick review if your name is common.' },
            { title: 'Add a photo and verify your email.', text: 'Upload a clear, professional photo. Then open your university inbox and click the verification link Google sends you.' },
            { title: 'Check, then make it public.', text: 'Your profile is private until you choose otherwise. Once the list of papers is right, make it public, as shown below.' },
          ],
          tone: 'green',
        },
        'Aswathy finished the form in five minutes. The articles took longer, and that is where most people go wrong.',
      ],
    },
    {
      id: 'how-to-add-publications-to-google-scholar',
      title: 'How to add publications to Google Scholar',
      Art: AddScene,
      caption: 'into the profile go her papers; back out go the other A. Rajs',
      body: [
        'Google is honest about the limits here. Its help page says: "Alas, we have no way of knowing which articles are really yours." It guesses from your name, so if you share a name with others, expect some wrong papers.',
        {
          table: {
            head: ['what you want to do', 'how to do it'],
            rows: [
              ['add a whole group of papers at once', 'click **Add article groups**, but only after checking every paper in the group'],
              ['add one paper', 'use **Add articles** from the menu and search by title'],
              ['add a paper Google cannot find', 'click **Add article manually** and type in the details'],
              ['remove a paper that is not yours', 'select it and click **Delete**; it goes to the trash, from where you can restore it'],
              ['join two copies of the same paper', 'select both and click **Merge**, then choose the better version'],
            ],
          },
          tone: 'amber',
        },
        'Aswathy skipped the groups and added papers one by one. Three of hers were easy to find. The fourth, a short paper in a conference proceedings from a college in Thrissur, did not show up at all, so she added it manually. Google notes that "citations to manually added articles may not appear in your profile for a few days", so she did not worry when it showed zero.',
        'One paper appeared twice, once from the journal and once from a copy on a repository. When she merged them, the two citation counts became one, which is what Google says should happen: merged versions are counted "as a single article, not two different articles."',
        {
          note: 'if you published under different forms of your name, such as Aswathy Raj and A. Raj, search for each one. Google warns that "you may need to do several searches to add all your articles."',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'how-to-make-google-scholar-profile-public',
      title: 'How to make your Google Scholar profile public',
      Art: PublicScene,
      caption: 'public, and verified: both locks must open for your name to show up',
      body: [
        'Click the **Edit** button next to your name, tick **Make my profile public** and click **Save**. To hide it again later, untick the same box.',
        'A week later Aswathy searched for her name on Google Scholar and her profile did not appear at the top. The reason was simple. She had made it public but had not clicked the link in her university inbox. Google\'s rule is that for your profile to appear in search results, it "needs to be public and needs to have a verified email address at your university".',
        {
          list: [
            'Is the box **Make my profile public** ticked?',
            'Does the profile say your email is verified at your university\'s domain?',
            'Did the verification email land in spam? Search your inbox for it.',
            'Is the email you added really an institutional one, and not a Gmail or Yahoo address?',
          ],
          style: 'check',
        },
        'She found the email in her spam folder, clicked the link, and a few days later her profile appeared when she searched for her name. Google adds that it "will not display your email address on your public profile", so verifying it does not expose your inbox.',
      ],
    },
    {
      id: 'citations-h-index-and-i10-index',
      title: 'Citations, h-index and i10-index on your profile',
      Art: MetricsScene,
      caption: 'three numbers, two columns, and citations graphed over time',
      body: [
        'Once your papers are in, the profile shows three numbers, each in an All version and a Recent version, along with a graph of your citations over time.',
        {
          table: {
            head: ['number', 'what it counts'],
            rows: [
              ['citations', 'how many times your papers have been cited in the works Google Scholar has found'],
              ['h-index', 'the largest number h such that h of your papers have at least h citations each'],
              ['i10-index', 'the number of your papers with at least ten citations'],
            ],
          },
          tone: 'pink',
        },
        'Google says the metrics "will be automatically updated whenever Google Scholar is updated", so the numbers can change without you doing anything. They will often be different from your numbers in Scopus, because the two count different sources. Our guide on [what is h-index and how to calculate it](/blogs/what-is-h-index/) explains why, and why an early researcher\'s h-index says little on its own.',
        'You can also get an email when someone cites you. Click **Follow** next to your name, tick **New citations to my articles** and click **Done**. Aswathy did this the same day. Her first alert came two weeks later, from a group in another country working on mercury sensors, and she read their paper the same night.',
      ],
    },
    {
      id: 'keep-your-google-scholar-profile-accurate',
      title: 'How to keep your Google Scholar profile accurate',
      Art: TidyScene,
      caption: 'a few minutes every month keeps the profile honest',
      body: [
        'A profile is not a one-time job. Google keeps adding papers it thinks are yours, and a profile full of other people\'s work looks careless to anyone who checks it.',
        {
          steps: [
            { title: 'Choose your update setting with care.', text: 'Use **Configure article updates** in the menu. With the email setting, Google sends you changes to review before they are applied. With a common name, this is the safer choice.' },
            { title: 'Look through the list every month or two.', text: 'Google\'s advice is to "look through the articles in your profile and remove the ones that were written by others."' },
            { title: 'Fix small errors yourself.', text: 'You can edit an article\'s details. Google says automated updates "will not make changes to an article that you have edited."' },
            { title: 'Be patient with publisher fixes.', text: 'If the error is on the publisher\'s side, Google says it "usually takes 6-9 months" for corrections to reach Google Scholar for most publishers.' },
            { title: 'Link your other profiles.', text: 'The University of Sheffield library suggests adding your ORCID as your profile\'s homepage. Paste the link into the Homepage field under Edit.' },
          ],
          tone: 'blue',
        },
        'Never add papers that are not yours to look more productive. Anyone can open your profile and check, and your guide, a selection committee or a reviewer may well do so. The profile is a public record of your work, so the same honesty applies as in the paper itself.',
        'Aswathy sent the link to the research cell on Friday. When her next paper comes out, she plans to share it on her profile and ORCID record the same week, as we suggest in [how to publish a research paper](/blogs/how-to-publish-a-research-paper/).',
      ],
    },
  ],

  takeaways: [
    'A Google Scholar profile lists your papers and shows citations, h-index and i10-index, each for All years and a Recent period.',
    'Sign in with a personal Google account, as Google recommends, but verify a university or institution email address.',
    'Add papers one by one if your name is common, remove the ones that are not yours, and merge duplicate copies.',
    'Your profile shows in search results only if it is public and has a verified institutional email.',
    'Choose to review updates, check the list every month or two, and never keep papers that are not yours.',
  ],

  faq: [
    {
      q: 'Can I create a Google Scholar profile without a university email?',
      a: 'You can create one with any Google account, but it will not appear in Google Scholar search results unless you add and verify an email address at your university or institution. Google says Gmail, Yahoo and similar addresses are not suitable for this.',
    },
    {
      q: 'Why is my Google Scholar profile not showing in search results?',
      a: 'Usually because it is not public, or because your institutional email has not been verified. Tick Make my profile public under Edit, and click the verification link Google sent to your university inbox. Check the spam folder too.',
    },
    {
      q: 'How do I add a paper that Google Scholar does not show?',
      a: 'Search for it with Add articles first. If it still does not appear, use Add article manually and type in the title, authors, journal and year. Citations to a manually added paper may take a few days to appear.',
    },
    {
      q: 'Should I choose automatic updates or review them?',
      a: 'If your name is unusual and your papers are easy to find, automatic updates are fine. If many people share your name, choose to review updates by email, so that other people\'s papers do not slip into your profile.',
    },
  ],

  cta: {
    title: 'Read the papers that cite yours',
    text: 'When a citation alert arrives, Fiberarticle\'s Literature Reviewer can find related papers across arXiv, OpenAlex, Semantic Scholar and Crossref and build an evidence matrix you can export. One payment unlocks all of it, for good.',
  },
}
