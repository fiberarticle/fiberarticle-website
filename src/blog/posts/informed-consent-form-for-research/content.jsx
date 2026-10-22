import Hero from './hero.jsx'
import {
  AssentScene,
  ElementsScene,
  FormatScene,
  LanguageScene,
  MeaningScene,
  PlainScene,
  SampleScene,
  SurveyScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a form written for a lawyer, and the short one a driver at the auto stand can actually follow',
  },

  intro: [
    'Sravani Kondapalli is in the final year of her Master\'s in Audiology and Speech-Language Pathology at a college in Tirupati. Her dissertation is about the auto-rickshaw drivers who wait outside the bus station all day, among horns, engines and loudspeakers. She wants to know how many of them already have some hearing loss.',
    'Her plan had two parts: a short questionnaire about noise and ear trouble, and a hearing test with headphones at the college clinic. The ethics committee papers were due in a week, so she copied the consent form from a senior\'s thesis. It began "I, ________, hereby voluntarily give my consent" and used the words "pure tone audiometry" twice. Her guide, Dr. Padmavathi, read it and handed it back. "Read this aloud to one of the drivers in Telugu," she said. "If he can tell you what will happen to him, then it is a consent form."',
    'This blog explains how to write an informed consent form for research: what it must contain under the ICMR guidelines, the format part by part, how to make it readable, and a sample built from Sravani\'s final version.',
  ],

  sections: [
    {
      id: 'what-is-an-informed-consent-form',
      title: 'What is an informed consent form?',
      Art: MeaningScene,
      caption: 'two papers that travel together: the information first, the signature after',
      body: [
        'An informed consent form is the document a person reads, or has read to them, and signs to show that they understand what a study involves and agree, freely, to take part.',
        {
          define: 'informed consent',
          hint: 'noun',
          meaning: 'A person\'s voluntary agreement to take part in research, given after they have received and understood the information they need to decide.',
          tone: 'pink',
        },
        'In India, the ICMR\'s **National Ethical Guidelines for Biomedical and Health Research Involving Human Participants** (2017) call the whole package the informed consent document, and split it into two parts:',
        {
          table: {
            head: ['part', 'what it does'],
            rows: [
              ['participant information sheet (PIS)', 'tells the person what the study is, what will happen to them, the risks and benefits, and their rights'],
              ['informed consent form (ICF)', 'a short page where the person confirms that they have understood the information sheet and are volunteering, then signs'],
            ],
          },
          tone: 'pink',
        },
        'The paper is only the record. ICMR describes consent as a process: give the information, make sure the person has understood, and make sure the choice is voluntary, all before any study procedure begins. Sravani\'s copied form was only the second part, a page to sign with nothing to understand first.',
        {
          note: 'questionnaires, interviews, tests and focus groups all need consent. The wider duties are in our guide to [ethical considerations in research](/blogs/ethical-considerations-in-research/). Outside health research, rules vary by university.',
          label: 'who needs one',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'elements-of-informed-consent',
      title: 'Elements of informed consent: what the form must say',
      Art: ElementsScene,
      caption: 'ten things every participant should know, checked against the first draft',
      body: [
        'Box 5.1 of the ICMR guidelines lists what an informed consent document must include. In plain words:',
        {
          list: [
            'a statement that this is research',
            'the purpose and methods, in simple language',
            'how long taking part lasts, how many people will take part, and what data you will collect and how',
            'the benefits that can reasonably be expected, for them, the community or others',
            'any foreseeable risk, discomfort or inconvenience',
            'how far their records will stay confidential, and the limits of that',
            'any payment or reimbursement for taking part',
            'free treatment and, where needed, compensation for any injury or harm caused by the research',
            'that they are free to take part or to withdraw at any time, without penalty or loss of benefits they would otherwise get',
            'who the research team is and how to reach them, and a contact at the ethics committee for complaints',
          ],
          style: 'numbers',
        },
        'Some studies need more, such as how long samples or data will be stored and whether they will be shared, or a plan to publish photographs.',
        'Most real forms fall short. In a 2023 audit in *Perspectives in Clinical Research*, Himel Mondal and colleagues checked 44 online survey invitations against 13 components drawn from the ICMR guidelines. Ten had no consent statement at all. The 34 that did held about 4 of the 13 on average. Only 2 mentioned risks, and only 7 named the research team and a contact person.',
        'Sravani\'s copied form had three of the ten: research, purpose and withdrawal.',
        {
          note: 'Sravani added one thing no list gives: what happens if the test finds hearing loss. For a driver, that mattered most.',
          label: 'think',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'informed-consent-form-format',
      title: 'Informed consent form format, part by part',
      Art: FormatScene,
      caption: 'the information sheet from top to bottom, and the signature page at the end',
      body: [
        'If your ethics committee has a template, use it. ICMR also says researchers should use only the version the committee approved, including its translations. If there is no template, this order works for most student studies:',
        {
          steps: [
            { title: 'A title in plain words.', text: 'Not your dissertation title: "A study of hearing among auto-rickshaw drivers in Tirupati".' },
            { title: 'Who you are.', text: 'Your name, course, college and guide.' },
            { title: 'Why the study is being done.', text: 'Two or three sentences.' },
            { title: 'What they will be asked to do.', text: 'Each step, where, and how long in total.' },
            { title: 'Risks and discomforts.', text: 'Even small ones, such as time or tiredness.' },
            { title: 'Benefits.', text: 'If there is no direct benefit, say so.' },
            { title: 'Confidentiality.', text: 'Who will see the data, and how it is stored.' },
            { title: 'Payment.', text: 'Any reimbursement the committee approved.' },
            { title: 'Their rights.', text: 'They can refuse, skip a question or stop at any time, with no loss.' },
            { title: 'Contacts.', text: 'You, your guide, and the ethics committee.' },
            { title: 'The consent statement and signatures.', text: 'Statements to tick, then signatures and dates.' },
          ],
          tone: 'pink',
        },
        'The first ten parts make the information sheet; the last is the consent form. ICMR asks that participants get a copy of both, unless they decline, and that the originals are kept on file.',
        {
          note: 'ICMR says people should get time to read, talk it over with family, and ask questions before they decide.',
          label: 'remember',
          tone: 'red',
        },
      ],
    },
    {
      id: 'how-to-write-an-informed-consent-form',
      title: 'How to write an informed consent form people understand',
      Art: PlainScene,
      caption: 'one long sentence for a lawyer, turned into short lines for a driver',
      body: [
        'Sravani\'s copied form was written for a lawyer, not for a driver. These habits fix most forms:',
        {
          list: [
            '**Speak to the reader as "you".** The University of California, Irvine asks for consent documents in the second person.',
            '**Keep the reading level low.** It suggests a 6th to 8th grade level for adults.',
            '**Replace technical words** with what the person will experience.',
            '**Use numbers.** "About 30 minutes", not "a short duration".',
            '**Use at least 12 point type**, as UC Irvine recommends.',
            '**Promise nothing you cannot keep.** ICMR says researchers should not give unjustified assurances or pressure anyone.',
          ],
          style: 'dots',
        },
        {
          compare: {
            left: {
              title: 'first draft',
              items: [
                '"I, ________, hereby voluntarily give my consent."',
                '"Pure tone audiometry will be conducted."',
                '"Confidentiality will be maintained."',
              ],
            },
            right: {
              title: 'final draft',
              items: [
                '"You are invited to take part in a study about hearing."',
                '"You will wear headphones and raise your hand each time you hear a soft beep. This takes about 15 minutes."',
                '"Your name will not appear in any report. Your answers will be stored under a code number."',
              ],
            },
          },
        },
        'Then test it; ICMR suggests checking understanding in sensitive studies. Sravani read her Telugu version to two drivers outside the study and asked them to tell it back. One asked whether the test would hurt, so she added a line saying it does not.',
      ],
    },
    {
      id: 'consent-form-in-local-language',
      title: 'Local language, witnesses and thumb impressions',
      Art: LanguageScene,
      caption: 'the form read aloud in Telugu, a witness listening, and a thumb impression in place of a signature',
      body: [
        'ICMR says the information must be in a language the person understands, simple and suited to their cultural context. A Telugu lecturer translated Sravani\'s form, and a second person translated it back into English so the committee could check it. ICMR\'s list of papers for ethics review includes such back translation certificates where they apply.',
        'Some drivers could not read. ICMR has clear rules for this:',
        {
          list: [
            '**An impartial witness.** A literate person, not a relative and not connected to the research, who understands the participant\'s language, stays through the whole process.',
            '**A thumb impression.** If the participant cannot sign, a thumb impression is taken instead.',
            '**The researcher signs too.** Whoever takes consent signs and dates the form.',
            '**Oral consent only as an exception.** If someone agrees but cannot or will not sign, oral consent may be taken with the committee\'s approval and a witness who signs, and can be audio or video recorded. It is not for routine use.',
          ],
          style: 'check',
        },
        'The drivers\' union president let Sravani speak to drivers at the stand. ICMR allows such a gatekeeper\'s permission, but each person still gives their own consent. She asked him not to stand nearby while drivers decided.',
      ],
    },
    {
      id: 'consent-form-for-questionnaire',
      title: 'Consent form for questionnaire and online surveys',
      Art: SurveyScene,
      caption: 'the information on the first page, and the questions open only after a clear yes',
      body: [
        'A survey needs consent too. On paper, put the information sheet in front of the questionnaire. Online, put it on the first page, and open the questions only after a clear choice between "I agree to take part" and "I do not agree".',
        'ICMR allows electronic consent with a few conditions:',
        {
          list: [
            'it must contain all the elements of consent, in a language the participant understands',
            'the committee must approve the process beforehand',
            'participants should get a copy',
            'it should not be used with people uncomfortable with it',
          ],
          style: 'check',
        },
        'In the audit above, the median consent text was only 84 words, yet its readability score put it at about a college level. Short and vague helps no one.',
        'Surveying your juniors? ICMR counts students among people who may not feel free to say no. Say that refusing will not affect marks. Our guide to [data collection methods in research](/blogs/data-collection-methods-in-research/) covers choosing the method itself.',
        {
          note: 'a waiver is possible for some less than minimal risk studies, such as research on anonymised or public data. You apply; the committee decides.',
          label: 'waivers',
          tone: 'red',
        },
      ],
    },
    {
      id: 'assent-form-and-re-consent',
      title: 'Assent forms, re-consent and special cases',
      Art: AssentScene,
      caption: 'a parent\'s consent and a child\'s own yes, and a fresh signature when the study changes',
      body: [
        'A study with children needs a parent\'s consent and the child\'s own agreement, called **assent**. Under ICMR, assent need not be documented below 7 years; from 7 to 12 it is oral, in front of the parent, and recorded; from 12 to 18 it is a written assent form, also signed by the parent, in words that suit the child\'s age.',
        'ICMR also asks for fresh consent when:',
        {
          list: [
            'new information changes the risks or benefits of taking part',
            'a child in the study turns 18',
            'the study is extended or needs long follow up',
            'procedures or data collection change in a way that could change someone\'s decision',
            'a publication, through data or photographs, could reveal who someone is',
          ],
          style: 'dots',
        },
        'That last one came up for Sravani: a photograph of the auto stand for a conference poster showed recognisable drivers, so each of them was asked again.',
        'Studies that cannot reveal everything at the start need careful committee review, and ICMR asks researchers to debrief participants at the end.',
      ],
    },
    {
      id: 'informed-consent-form-sample',
      title: 'Informed consent form sample',
      Art: SampleScene,
      caption: 'the final form: one page of information in Telugu and English, and a signature page',
      body: [
        'Here is Sravani\'s final information sheet in English, shortened. Adapt it to your study and your committee\'s template.',
        {
          quote: 'A study of hearing among auto-rickshaw drivers in Tirupati. You are invited to a study by Sravani Kondapalli, a Master\'s student in audiology, guided by Dr. Padmavathi. We want to know whether traffic noise affects the hearing of auto drivers. You will answer 12 short questions, then wear headphones at the college clinic and raise your hand at each soft beep. It takes about 30 minutes and does not hurt. You will be paid for your time, as approved by the ethics committee. If we find hearing loss, we will tell you and give you a clinic appointment. Your name will not appear in any report; your answers are stored under a code. You can refuse, skip any question or stop at any time. For questions, call Sravani or Dr. Padmavathi; for complaints, the ethics committee. (Phone numbers below.)',
          by: 'from Sravani\'s information sheet',
          tone: 'pink',
        },
        'The consent form had four statements to tick:',
        {
          list: [
            'I have read the information sheet, or it has been read to me, in a language I understand.',
            'My questions have been answered.',
            'I can stop at any time without giving a reason.',
            'I agree to take part in this study.',
          ],
          style: 'check',
        },
        'Below came signature or thumb impression lines with dates for the participant, the researcher and, where needed, a witness. Describe this process in your methods chapter, as our guide on [how to write a research methodology](/blogs/how-to-write-a-research-methodology/) shows.',
        'Sravani read the Telugu version at the stand on a Monday. Ramesh, who had driven there for nineteen years, listened to the end and asked: "Thirty minutes, and you will tell me if my ears are bad?" She said yes. He came after the morning rush.',
      ],
    },
  ],

  takeaways: [
    'An informed consent form for research has two parts: a participant information sheet that explains the study, and a short consent form that the person signs.',
    'ICMR lists what it must cover: purpose, duration, risks, benefits, confidentiality, payment, the right to withdraw, and contacts.',
    'Write to the reader as "you", in short sentences, in their language, and check they can tell it back.',
    'For people who cannot read, use an impartial witness and a thumb impression.',
    'Online surveys need consent on the first page, and only the ethics committee can waive consent.',
  ],

  faq: [
    {
      q: 'What is an informed consent form in research?',
      a: 'The document a participant reads and signs to show they understand a study and agree to take part. ICMR splits it into an information sheet and a consent form.',
    },
    {
      q: 'What is the difference between a participant information sheet and a consent form?',
      a: 'The information sheet explains the study and the participant\'s rights. The consent form is the short part they sign to confirm they understood and agree.',
    },
    {
      q: 'Is informed consent needed for a questionnaire?',
      a: 'Usually, yes. Put the information on the front page. Some low risk studies get a waiver, but only the ethics committee can grant it.',
    },
    {
      q: 'Can I take informed consent through Google Forms?',
      a: 'ICMR allows electronic consent if it has every element, the committee approves it beforehand, and participants get a copy.',
    },
    {
      q: 'What if a participant cannot read or write?',
      a: 'Read it aloud in their language before an impartial literate witness. They give a thumb impression; the witness and researcher sign.',
    },
  ],

  cta: {
    title: 'Ground your information sheet in real studies',
    text: 'Fiberarticle finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and shows the source behind every line it writes, so the background you explain to participants rests on studies you have checked. One payment unlocks all of it, for good.',
  },
}
