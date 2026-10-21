import Hero from './hero.jsx'
import {
  CommitteeScene,
  ConsentScene,
  HarmScene,
  HonestyScene,
  MeaningScene,
  PrivacyScene,
  VulnerableScene,
  WritingScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'one vague line in a proposal, and the questions an ethics committee will ask about it',
  },

  intro: [
    'Ritika Sahu is in the final year of her Master of Social Work at a university in Raipur. Her dissertation is about the health of women who pick and sort waste on the edge of the city: the back pain, the cuts from glass and tin, the cough that never quite leaves. Her mother had once worked beside these women.',
    'Her plan was simple. The thekedar, the contractor who buys the sorted waste, had agreed to gather the women at noon. She would read out an English consent form, take photographs for her report, and finish forty interviews in a week. Under the heading on ethics she had written one line: "All ethical considerations will be followed." Her guide, Dr. Meenakshi Dewangan, put a circle around it. "Which ones?" she asked. "And how?"',
    'This blog explains the ethical considerations in research that every student working with people needs to know, through the answers Ritika had to find, and ends with how to write the ethics section of a proposal or thesis.',
  ],

  sections: [
    {
      id: 'what-are-ethical-considerations-in-research',
      title: 'What are ethical considerations in research?',
      Art: MeaningScene,
      caption: 'one promise in the proposal, many duties underneath it',
      body: [
        'Ethical considerations in research are the rules and choices that protect the people in your study and keep your work honest.',
        {
          define: 'research ethics',
          hint: 'noun',
          meaning: 'The principles that guide how research is planned, carried out and reported, so that participants are respected and protected and the results can be trusted.',
          tone: 'pink',
        },
        'In India, the main guide for research with people is the ICMR\'s **National Ethical Guidelines for Biomedical and Health Research Involving Human Participants**, published in October 2017. They are not only for doctors: they also cover social and behavioural science research for health, which is where Ritika\'s study sat.',
        'They rest on four basic principles: respect for persons, beneficence, non-maleficence and justice. In plain words: respect people\'s choices, do good, do no harm, and share the burdens and benefits of research fairly. These grow into 12 general principles, among them voluntariness, privacy and confidentiality, and risk minimisation.',
        {
          note: 'following a UGC letter of December 2019, a two credit course on Research and Publication Ethics is part of PhD coursework at universities across India.',
          label: 'for PhD scholars',
          tone: 'blue',
        },
      ],
    },
    {
      id: 'informed-consent-in-research',
      title: 'Informed consent and voluntary participation',
      Art: ConsentScene,
      caption: 'the information read out in her own language, a witness beside her, and a free choice',
      body: [
        'Informed consent is the heart of research ethics. ICMR describes it as a continuous process: give people the information they need, make sure they understand it, and make sure their decision is voluntary, all before any study activity begins.',
        'Before anyone agrees, the information sheet must tell them, in a language they understand:',
        {
          list: [
            'that this is research, and its purpose and methods in simple words',
            'the possible benefits, and any risks, discomfort or inconvenience',
            'how far their records will be kept confidential',
            'any payment or reimbursement for their time',
            'that they are free to refuse or withdraw at any time, without penalty or loss of anything they are entitled to',
            'who to contact with questions, including someone at the ethics committee for complaints',
          ],
          style: 'check',
        },
        'Written consent is the norm. If a participant cannot read, ICMR asks for an impartial literate witness, a person not connected to the research, to be present through the whole process. Oral consent, with no signature or thumb impression, is allowed only in exceptional cases with the ethics committee\'s approval. Ritika\'s English form went first. She rewrote the information sheet in Hindi and Chhattisgarhi and read it aloud.',
        '**Voluntary** was the harder word. "If the man who pays them asks them to come," Dr. Dewangan said, "how many will feel free to say no?" The guidelines note that power differences in India make open refusal hard, and ask researchers to read silence, one word answers or restlessness as discomfort, and not to press on.',
        {
          note: 'permission from a community leader, an employer or an organisation can open the door, but it never replaces each person\'s own consent.',
          label: 'remember',
          tone: 'red',
        },
      ],
    },
    {
      id: 'confidentiality-and-anonymity-in-research',
      title: 'Privacy, confidentiality and anonymity',
      Art: PrivacyScene,
      caption: 'names turned into codes, and the key kept in a separate locked place',
      body: [
        'People tell researchers things they would not tell their neighbours. Three words about protecting that trust are often mixed up:',
        {
          table: {
            head: ['word', 'what it means', 'in Ritika\'s study'],
            rows: [
              ['privacy', 'a person\'s right to control what information about them is collected, and who sees it', 'interviews held where no one else could overhear'],
              ['confidentiality', 'the researcher\'s duty to protect what was shared from anyone not authorised to see it', 'notes in a locked cupboard, recordings in a password protected folder'],
              ['anonymity', 'no answer can be linked back to the person who gave it', 'names replaced by codes such as W07 in transcripts and in the dissertation'],
            ],
          },
          tone: 'pink',
        },
        'In an interview study the researcher knows who said what, so promise confidentiality, with codes or pseudonyms. Promise anonymity only when you collect nothing that identifies anyone.',
        {
          list: [
            '**Photographs need care.** ICMR says publications must not show photographs or details that reveal who someone is. Ritika kept her photographs of the sorting piles and left out every face.',
            '**Collect only what you need.** She removed the question asking for each woman\'s exact address.',
            '**Keep the key apart.** The list linking codes to names stays separate from the data.',
            '**Be honest about the limits.** ICMR asks researchers to tell participants that confidentiality has limits; a threat to someone\'s life, for example, may have to be reported.',
          ],
          style: 'dots',
        },
      ],
    },
    {
      id: 'avoiding-harm-in-research',
      title: 'Avoiding harm and paying people fairly',
      Art: HarmScene,
      caption: 'risks on one side, benefits on the other, and the balance checked before the first interview',
      body: [
        'Harm in research is not only physical. For social and behavioural studies, the ICMR guidelines name several other kinds:',
        {
          list: [
            '**Harm to dignity:** people feel humiliated, dismissed, or treated as a means to someone else\'s end.',
            '**Psychological harm:** a question makes someone relive a painful or frightening experience.',
            '**Social harm:** taking part leads to stigma, or trouble with family, an employer or the community.',
            '**Informational harm:** identifiable information leaks out. For much social research, this is one of the main risks.',
          ],
          style: 'cross',
        },
        'For Ritika, social harm was the real danger. If the thekedar learned which women had complained about him, some could lose their work. So she met the women through a self help group in their basti instead, at times they chose, and never told him who took part.',
        'Then there was money. Every hour a woman spent answering questions was an hour not sorting, and sorting is paid by the kilo. ICMR allows researchers to pay participants for travel, time and inconvenience, including loss of wages. But it must not become an **undue inducement**, a sum so tempting that people agree against their judgement, and the ethics committee must approve it. Ritika proposed about an hour\'s earnings.',
        {
          note: 'the researcher\'s safety matters too, and ICMR counts it among the institution\'s responsibilities. Ritika never went to the site alone.',
          label: 'and you',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'vulnerable-groups-in-research',
      title: 'Vulnerable groups, children and fair selection',
      Art: VulnerableScene,
      caption: 'extra care for those who cannot easily protect themselves, without shutting them out',
      body: [
        'ICMR calls people vulnerable if they are disadvantaged and open to exploitation, cannot decide freely, or could be pushed into saying yes by hope of a benefit or fear of refusing. Ritika\'s participants fitted more than one of these.',
        'Vulnerable does not mean excluded. Such groups have an equal right to be included, so research benefits reach them too, and a study that recruits only a vulnerable group should answer that group\'s own needs. Ritika\'s did. This is justice at work: no one should carry the risks of research only for the benefit of people better off.',
        'Children need two permissions: consent from a parent or guardian, and the child\'s own agreement, called **assent**.',
        {
          table: {
            head: ['age of the child', 'what ICMR asks for'],
            rows: [
              ['below 7 years', 'parent\'s consent; assent need not be documented'],
              ['7 to 12 years', 'parent\'s consent, and the child\'s oral assent, taken in front of the parent and recorded'],
              ['12 to 18 years', 'parent\'s consent, and written assent, also signed by the parent'],
            ],
          },
          tone: 'amber',
        },
        'A few teenage girls sorted waste beside their mothers. Ritika\'s question was about adult women, so she limited the study to women aged 18 and above, and wrote that decision and its reason into her proposal.',
      ],
    },
    {
      id: 'ethics-committee-approval',
      title: 'Ethics committee approval in India',
      Art: CommitteeScene,
      caption: 'the proposal goes to the committee first; the fieldwork waits for its stamp',
      body: [
        'Who decides whether a study is ethical enough? Not the researcher. ICMR says all biomedical, social and behavioural research for health involving people must be approved by a properly constituted ethics committee, and that **a researcher cannot decide that her or his own proposal is exempt**. The committee chooses one of three kinds of review:',
        {
          table: {
            head: ['type of review', 'for what kind of study', 'examples ICMR gives'],
            rows: [
              ['exemption from review', 'less than minimal risk, with no linked identifiers', 'systematic reviews of published data; comparing teaching methods or curricula'],
              ['expedited review', 'no more than minimal risk', 'non-identifiable leftover samples or records; minor changes to an approved study'],
              ['full committee review', 'more than minimal risk, or special concerns', 'research with vulnerable populations, even if the risk is minimal; studies that use deception'],
            ],
          },
          tone: 'blue',
        },
        'Ritika\'s study involved a vulnerable group, so it went to full review with her information sheet, consent form, interview guide and planned payment. It was approved after one change: the committee\'s phone number had to go on the information sheet, so the women could complain to someone other than Ritika.',
        'Under the New Drugs and Clinical Trials Rules, 2019, institutions doing biomedical and health research with people must have an ethics committee, registered with the Department of Health Research. Outside health research, practice varies between universities.',
        {
          note: 'ask your guide which committee reviews student projects. Approval comes before data collection, never after.',
          label: 'check',
          tone: 'red',
        },
      ],
    },
    {
      id: 'research-misconduct',
      title: 'Honesty with data: fabrication, falsification and plagiarism',
      Art: HonestyScene,
      caption: 'blank answers reported as blank, not filled in to make the table look complete',
      body: [
        'Ethics does not end when the interviews do. The ICMR guidelines name three kinds of research misconduct:',
        {
          list: [
            '**Fabrication:** making up data or results and recording or reporting them.',
            '**Falsification:** manipulating materials, equipment or processes, or changing, leaving out or suppressing data or results without a scientific or statistical reason, so the research record is no longer accurate.',
            '**Plagiarism:** presenting another person\'s words, ideas or work as your own, including reusing your own published work without saying so.',
          ],
          style: 'cross',
        },
        'Ritika\'s test came in the last week. Eleven women had skipped the question on hours worked, and a classmate suggested filling the blanks with the average. Done quietly, that is falsification; honest ways of handling missing data are declared in the methods. Ritika reported the eleven as missing.',
        'The same honesty applies to writing. Cite every idea you borrow; see the [types of plagiarism](/blogs/types-of-plagiarism/) that catch students unawares. If you use AI tools, say so and check every claim, as our guide on [using AI in research honestly](/blogs/using-ai-in-research-honestly/) explains.',
      ],
    },
    {
      id: 'how-to-write-ethical-considerations',
      title: 'How to write the ethical considerations section',
      Art: WritingScene,
      caption: 'the one vague line, rewritten as what was actually done',
      body: [
        'An ethics section should describe what you did or will do, not promise good behaviour. Include:',
        {
          steps: [
            { title: 'The approval.', text: 'Name the ethics committee, and give the approval number and date if your university or journal asks for them.' },
            { title: 'Consent.', text: 'Who consented, in which language, and whether a witness or parent was involved.' },
            { title: 'Risks.', text: 'The real risks to your participants, and what you did about each.' },
            { title: 'Confidentiality.', text: 'How identities were protected and data stored.' },
            { title: 'Payment and conflicts.', text: 'Any payment or reimbursement, and any interest that could affect the study.' },
          ],
          tone: 'pink',
        },
        {
          quote: 'The study was approved by the university\'s Institutional Ethics Committee. Participants were women aged 18 and above who sort waste for a living. The information sheet was read aloud in Chhattisgarhi or Hindi, and written consent or a thumb impression was taken in the presence of an impartial literate witness. Participants could withdraw at any time. Names were replaced with codes, and the contractor who buys their waste was not told who took part. Each participant received a payment equal to about an hour\'s earnings, approved by the committee.',
          by: 'from Ritika\'s revised proposal',
          tone: 'pink',
        },
        'In a paper it usually closes the methods, as our guide on [how to write a research methodology](/blogs/how-to-write-a-research-methodology/) shows; in a [research proposal](/blogs/how-to-write-a-research-proposal/) it gets its own heading.',
        'Dr. Dewangan read it twice and signed the letter to the committee. "Now it says something," she said. Ritika\'s interviews took five weeks instead of one, and every woman she spoke to had chosen to be there.',
      ],
    },
  ],

  takeaways: [
    'Ethical considerations in research protect participants and keep the work honest: consent, confidentiality, avoiding harm, fair selection and truthful reporting.',
    'Informed consent must be voluntary, in a language the person understands, and open to withdrawal at any time; a gatekeeper\'s permission never replaces it.',
    'Promise confidentiality with codes or pseudonyms, and promise anonymity only when you collect nothing that identifies anyone.',
    'In India, the ICMR guidelines of 2017 cover social and behavioural research for health as well as biomedical work, and the ethics committee, not the researcher, decides the type of review.',
    'Fabrication, falsification and plagiarism are misconduct; report missing data as missing, and write your ethics section as steps you actually took.',
  ],

  faq: [
    {
      q: 'What are the main ethical considerations in research?',
      a: 'Voluntary informed consent, privacy and confidentiality, avoiding harm, care for vulnerable groups, fair selection, ethics committee approval, and honest reporting of data.',
    },
    {
      q: 'Do I need ethics approval for a student survey?',
      a: 'If it involves people or their data, assume so and ask before you begin. For health research, every proposal goes to an ethics committee, which decides the type of review. In other fields, rules vary by university.',
    },
    {
      q: 'What is the difference between confidentiality and anonymity?',
      a: 'Confidentiality means the researcher knows who said what but protects it from others. Anonymity means no answer can be linked to any person at all. Most interview studies can offer confidentiality, not anonymity.',
    },
    {
      q: 'Does a literature review need ethics approval?',
      a: 'It involves no participants, and ICMR lists systematic reviews of public data among studies that can be exempted. The exemption is still the committee\'s decision, so check your university\'s rule.',
    },
  ],

  cta: {
    title: 'Keep your reporting honest from the first source',
    text: 'Fiberarticle finds real papers across arXiv, OpenAlex, Semantic Scholar and Crossref and shows the passage behind every point it writes, so every claim in your thesis can be checked. One payment unlocks all of it, for good.',
  },
}
