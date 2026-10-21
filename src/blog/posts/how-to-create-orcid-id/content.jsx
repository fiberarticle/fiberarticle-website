import Hero from './hero.jsx'
import {
  FormatScene,
  MistakesScene,
  NameScene,
  RecordScene,
  RegisterScene,
  VisibilityScene,
  WhyScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'many people share a name, but only one of them has this number',
  },

  intro: [
    'Gurpreet Kaur is a PhD scholar in Food Technology at Guru Nanak Dev University in Amritsar. For two years she has baked and tested biscuits made with pearl millet flour, measuring how much fibre and protein they keep and whether people actually like the taste. Her first paper was ready. She opened the journal\'s submission page, filled in the title and the authors, and stopped at a box that said: *ORCID iD of the corresponding author*.',
    'She did not have one. Out of curiosity she searched for "G. Kaur" with "food science" on Google Scholar. Page after page of papers came up, by many different people, all called G. Kaur. Her guide, Dr. Navdeep Sandhu, looked over her shoulder and laughed. "That is exactly why the journal is asking," she said. "Make your ORCID iD today. It takes ten minutes, and you will use it for the rest of your career."',
    'This blog explains how to create ORCID ID the way Dr. Sandhu showed Gurpreet: what an ORCID iD is, why journals ask for it, the registration steps, the iD format, how to add your publications, the privacy settings, and the mistakes to avoid.',
  ],

  sections: [
    {
      id: 'what-is-an-orcid-id',
      title: 'What is an ORCID iD?',
      Art: NameScene,
      caption: 'one name, many researchers, and one number that tells them apart',
      body: [
        {
          define: 'ORCID iD',
          hint: 'noun',
          meaning: 'a free, unique and permanent 16 digit number that identifies you as a researcher, linked to an online record of your education, work and publications.',
          tone: 'green',
        },
        'ORCID stands for Open Researcher and Contributor ID. It is run by a global not-for-profit organisation of the same name, which is paid for by its member organisations, such as universities, publishers and funders. Researchers do not pay. ORCID\'s own pages say the iD is free of charge to researchers, and that anyone who takes part in research can register one for themselves.',
        'The idea is simple. Names are a poor way to tell researchers apart. Many people share a name, the same person may appear as "Gurpreet Kaur", "G. Kaur" and "Kaur, G." in different papers, and some people change their name during their career. A number does not have these problems. Your ORCID iD stays the same, ORCID says, even if your name changes or you move to a different organisation, subject or country.',
        {
          note: 'the "iD" with a small i is how ORCID writes it. People type "ORCID ID" into search engines, and both mean the same thing.',
          label: 'small point',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'why-you-need-an-orcid-id',
      title: 'Why researchers need an ORCID iD',
      Art: WhyScene,
      caption: 'one iD carries your work to the journal, the university and the funder',
      body: [
        'Gurpreet asked the obvious question. "Is it compulsory?" Dr. Sandhu\'s answer was the honest one: it depends on who is asking. Many journals now ask for it when you submit, some only from the corresponding author and some from every author. The guide for authors tells you, which is one more reason to read it before you submit, as we explain in [how to write a cover letter for journal submission](/blogs/how-to-write-a-cover-letter-for-journal-submission/).',
        {
          table: {
            head: ['the problem', 'how an ORCID iD helps'],
            rows: [
              ['many researchers share your name', 'the 16 digits belong to you alone'],
              ['your name is written differently in different papers', 'all versions point back to one record'],
              ['you change your university, city or even your name', 'the iD stays with you for your whole career'],
              ['forms keep asking for your publication list', 'systems can read it from your record'],
            ],
          },
          tone: 'green',
        },
        'In India there is one more reason. IRINS, the research profile system that INFLIBNET, a centre of the UGC, offers to Indian institutions, is built to pull in your publications using academic identifiers such as ORCID, Scopus and Google Scholar IDs. If your university uses IRINS, an ORCID iD helps your faculty profile fill itself in. Some universities have also asked their teachers to get one before registering on VIDWAN, the national database of experts. Rules differ between institutions, so ask your research cell or library what yours expects.',
        {
          note: 'an ORCID iD does not replace a Scopus author ID, a Google Scholar profile or a VIDWAN ID. Those are separate profiles. ORCID is the one you own and control yourself, and it can be linked to the others.',
          label: 'remember',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'how-to-create-orcid-id-step-by-step',
      title: 'How to create ORCID ID, step by step',
      Art: RegisterScene,
      caption: 'one form, a few fields, and an email to click',
      body: [
        'The steps below follow the registration guide published by Charles University\'s open science team; the form can change a little over time, but the parts stay the same.',
        {
          steps: [
            { title: 'Go to the real site.', text: 'Open orcid.org yourself and click "Sign in / Register", then "Register now". Do not use a link from an unknown email or website.' },
            {
              title: 'Enter your name and email.',
              text: 'Type your given name and family name, and your main email address. Charles University recommends a private email, one you will still have after you leave the university.',
            },
            { title: 'Add a backup email.', text: 'ORCID strongly recommends a second email, so you can get back into your account if you lose access to the first.' },
            { title: 'Create a password.', text: 'The form shows the rules your password must meet. Save it somewhere safe.' },
            {
              title: 'Add your current affiliation.',
              text: 'Start typing your university\'s name and choose it from the list, with your department and role, for example PhD scholar.',
            },
            { title: 'Choose the visibility.', text: 'This decides who can see your record. We look at the options in a later section.' },
            { title: 'Accept the terms and finish.', text: 'Agree to the terms of use, complete the "I am not a robot" check, and click "Complete registration".' },
            {
              title: 'Verify your email.',
              text: 'ORCID sends a message to your main email. Click "Verify email address". If it does not arrive, check your spam folder or use "Resend verification email".',
            },
          ],
          tone: 'green',
        },
        'Before it creates a new iD, the form may show existing records with names like yours and ask whether one of them is you. Read the list carefully. If you made an account years ago and forgot, use that one instead of making a second.',
        {
          note: 'some universities let you register through "Access through your institution", using your university login. That also links the iD to your university. Ask your library whether yours offers it.',
          label: 'tip',
          tone: 'amber',
        },
        'Gurpreet finished in eight minutes. The verification email took one more. Her record was live, with her name, her university and a number she had never seen before.',
      ],
    },
    {
      id: 'orcid-id-format',
      title: 'ORCID iD format, and where to use it',
      Art: FormatScene,
      caption: 'four groups of four, and the last character can be an X',
      body: [
        'An ORCID iD has 16 characters in four groups of four, separated by hyphens. ORCID\'s own example, made up for a fictional professor, is **0000-0002-1825-0097**. Every iD looks like this.',
        {
          list: [
            '**The first 15 are digits.** Most iDs start with 0000, so do not worry if yours does too.',
            '**The last one is a check character.** ORCID calculates it from the other 15, so a mistyped iD is easy to catch. It can be any digit from 0 to 9, or the letter X, which stands for 10.',
            '**An X at the end is normal.** ORCID\'s FAQ says plainly that iDs ending in X are valid and correct.',
          ],
          style: 'dots',
        },
        'When you share it, use the full web address: **https://orcid.org/0000-0002-1825-0097**, with your own number in place of the example. ORCID\'s display guidelines call this the preferred format, because anyone can click it and land on your record.',
        'Then put it everywhere you appear as a researcher. Gurpreet added hers to the journal\'s submission form, her CV, her email signature and her department profile page. When you submit, type it carefully or, better, let the submission system connect to ORCID and fill it in for you.',
        {
          note: 'save your iD in your phone notes too. If you forget it, the "Recover account details" button on ORCID\'s password reset page will email it to an address on your record.',
          label: 'tip',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'how-to-add-publications-to-orcid',
      title: 'How to add publications to ORCID',
      Art: RecordScene,
      caption: 'papers come in from the databases and settle into one record',
      body: [
        'A new ORCID record is almost empty. It becomes useful when it lists your education, your work and your publications. Gurpreet had no papers yet, so Dr. Sandhu opened her own record to show the ways works can be added.',
        {
          list: [
            '**Search and link.** In the Works section, click Add, then "Search & link". You will see a list of databases ORCID can connect to, such as Scopus and Crossref. Choose one, authorise it, and pick the papers that are yours.',
            '**Import a BibTeX file.** If your papers are in a reference manager or on Google Scholar, export them as a BibTeX file and import it.',
            '**Add one by hand.** For a conference paper or book chapter the databases miss, type in the details yourself, with the DOI if it has one.',
          ],
          style: 'numbers',
        },
        'There is also a way to keep the record up to date without lifting a finger. When a publisher includes your ORCID iD in the information it sends to Crossref for a new paper\'s DOI, Crossref sends a request to your ORCID inbox. If you give it permission, Crossref adds future papers that carry your iD to your record automatically, from any publisher. Older papers without your iD still need search and link, which is one more reason to give your iD at every submission.',
        'In the name section of your record you can also fill in a published name, the form of your name you want used when you are credited, and "also known as" names, the other ways your name has appeared. Dr. Sandhu has published as "Navdeep Sandhu" and "N. Sandhu", and both sit on her record.',
      ],
    },
    {
      id: 'orcid-visibility-settings',
      title: 'ORCID visibility settings and trusted parties',
      Art: VisibilityScene,
      caption: 'everyone, trusted parties or only me, chosen item by item',
      body: [
        'ORCID lets you decide who sees each part of your record. You choose a default when you register, and you can change the setting for each item later.',
        {
          table: {
            head: ['setting', 'who can see it', 'good for'],
            rows: [
              ['everyone', 'anyone who opens your record', 'your name, affiliation and publications'],
              ['trusted parties', 'only the organisations and people you have given permission to', 'details you share with your university or a funder'],
              ['only me', 'just you', 'things you are still checking, or a private email'],
            ],
          },
          tone: 'blue',
        },
        'A trusted organisation is a university, publisher or funder that you have allowed to connect to your record, usually by clicking "Authorize access" when its website asks. Depending on what you approve, it can read your iD and items marked for trusted parties, and add items such as a verified employment entry. You can also name a trusted individual, such as a colleague who helps keep your record tidy, who can edit it but cannot change anything that needs your password.',
        'The point of ORCID is to be found, so keep your publications and affiliation visible to everyone. Gurpreet did, and set only her personal email to "only me".',
      ],
    },
    {
      id: 'common-orcid-mistakes',
      title: 'Common ORCID mistakes, and how to fix them',
      Art: MistakesScene,
      caption: 'one person, one record: the spare one gets folded away',
      body: [
        'Six months later, Gurpreet\'s junior Harmeet came to her worried. He had found two ORCID records with his name: one he made in his master\'s, and one he made last week. This is the most common ORCID mistake, and the easiest to fix.',
        {
          compare: {
            left: {
              title: 'avoid',
              tone: 'red',
              mark: 'cross',
              items: [
                'making a second iD because you forgot the first',
                'registering with only a college email you will lose',
                'leaving the record empty after registering',
                'paying a website or agent to "create" an iD for you',
                'making an iD for your guide or a co-author',
                'writing your name differently on every paper',
              ],
            },
            right: {
              title: 'do instead',
              tone: 'green',
              mark: 'check',
              items: [
                'recover the old one with "Recover account details"',
                'add a personal backup email',
                'add your education, work and publications',
                'register yourself, on orcid.org, at no cost',
                'ask them to register their own iD',
                'choose one form of your name and keep it',
              ],
            },
          },
        },
        'For duplicates, ORCID\'s FAQ gives a direct fix. Sign in to the record you want to keep, go to Account Settings and choose "Remove duplicate record". Enter the email address or iD of the extra record and its password. The extra record\'s email moves to your main record and everything else on the extra record is deleted, so copy anything you need first. If you cannot get into the duplicate\'s email, write to ORCID support with your name, your iDs and the email addresses.',
        'Once the paperwork is done, the real work starts again: finding a good home for the paper, which we cover in [how to choose the right journal](/blogs/how-to-choose-the-right-journal/), and surviving [peer review](/blogs/peer-review-explained/). Gurpreet submitted her millet biscuit paper that evening, with her new iD in the box. When it is published, it will carry that number, and nobody will mistake her for any other G. Kaur.',
      ],
    },
  ],

  takeaways: [
    'An ORCID iD is a free, permanent 16 digit number that identifies you as a researcher, whatever your name or university.',
    'Register yourself at orcid.org with a personal email and a backup email, then verify the email to activate the record.',
    'Share the iD as a full link, https://orcid.org/ followed by your number, on submissions, your CV and your profile pages.',
    'Fill the record with search and link, a BibTeX import or manual entry, and let Crossref add future papers that carry your iD.',
    'Keep one iD for your whole career; if you have two, remove the duplicate from Account Settings.',
  ],

  faq: [
    {
      q: 'Is an ORCID iD free?',
      a: 'Yes, for researchers. ORCID is funded by its member organisations, and its own pages say researchers can create and keep an iD and record free of charge. If a website asks you to pay to create one, it is not ORCID.',
    },
    {
      q: 'Can an undergraduate or master\'s student create an ORCID iD?',
      a: 'Yes. ORCID says anyone who takes part in research, scholarship or innovation can register. Many students make one when they write their first paper, conference abstract or thesis, and keep using it through their PhD and beyond.',
    },
    {
      q: 'Can I have two ORCID iDs?',
      a: 'You should not. One iD is meant to last your whole career, even if you change your name, university or country. If you end up with two, keep the one you use and remove the other through "Remove duplicate record" in Account Settings.',
    },
  ],

  cta: {
    title: 'Give your new iD something to list',
    text: 'Fiberarticle helps you find and read the papers in your field, tie every claim to a real source and format your references in the style your journal asks for, so your first paper is ready to submit.',
  },
}
