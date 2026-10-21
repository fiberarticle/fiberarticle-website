import Hero from './hero.jsx'
import {
  BiasScene,
  ChooseScene,
  FamiliesScene,
  NonProbabilityScene,
  ProbabilityScene,
  WhatScene,
  WriteScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a few people, drawn fairly, carrying the same mix as the whole field',
  },

  intro: [
    'Mohit Choudhary is in the second year of his MSc in Agricultural Economics at a university in Hisar. His dissertation asks a simple question: how many farmers in Hisar district use drip irrigation, and why do the others not? He grew up on a farm near Hansi, and his plan was to stand at the gate of the next farmers\' fair on his campus and fill 100 questionnaires by evening.',
    'His guide, Dr. Sushila Malik, listened to the plan and asked one question. "Who comes to a farmers\' fair to learn about new methods?" Mohit thought about it. Farmers who were already curious. Farmers with the time and money to travel. "Your answer will come out too high," she said, "and you will not even know by how much."',
    'This blog explains sampling methods in research the way Dr. Malik explained them to Mohit: the two families, the main types with examples, how to choose one, how size and bias differ, and how to write it up.',
  ],

  sections: [
    {
      id: 'what-is-sampling-in-research',
      title: 'What is sampling in research?',
      Art: WhatScene,
      caption: 'all the farmers in the district, the list that names them, and the few who are asked',
      body: [
        'Most studies cannot ask everyone. Mohit could not visit every farming household in Hisar district, so he would ask some and use their answers to speak for all. Choosing those few is called sampling. A short review by Elfil and Negida in *Archives of Academic Emergency Medicine* (2017) calls the sampling method "the process of selecting a sample population from the target population".',
        {
          table: {
            head: ['term', 'what it means', 'in Mohit\'s study'],
            rows: [
              ['population', 'the whole group your question is about', 'every farming household in Hisar district'],
              ['sampling frame', 'the list of the population that you actually draw from', 'the household lists of each village'],
              ['sample', 'the people or things you actually study', 'the households he will visit'],
            ],
          },
          tone: 'amber',
        },
        'A sample is useful only because it stands in for the population. If it does not look like the population, no analysis later can repair it. Elfil and Negida put it plainly: "The main methodological issue that influences the generalizability of clinical research findings is the sampling method." The same holds outside medicine.',
        {
          note: 'define your population before you choose a method. "Farmers" is not a population. "Households in Hisar district that grew a crop in the last rabi season" is.',
          label: 'tip',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'probability-vs-non-probability-sampling',
      title: 'Sampling methods in research: the two families',
      Art: FamiliesScene,
      caption: 'a fair lottery on one side, the nearest hands on the other',
      body: [
        'Every sampling method belongs to one of two families. What separates them is who decides who gets picked: chance, or the researcher.',
        {
          compare: {
            left: {
              title: 'probability sampling',
              items: [
                'chance decides, through a lottery or random numbers',
                'every member of the population has a known chance of being chosen',
                'needs a list, a sampling frame, to draw from',
                'supports statistical claims about the whole population',
              ],
              mark: 'check',
              tone: 'green',
            },
            right: {
              title: 'non-probability sampling',
              items: [
                'the researcher picks, by ease of access, judgement or referral',
                'no full list of the population is needed',
                'quicker and cheaper',
                'results cannot safely be stretched to the whole population',
              ],
              mark: 'dots',
              tone: 'red',
            },
          },
        },
        'Elfil and Negida note that samples "selected using probability sampling methods are more representatives of the target population". Etikan, Musa and Alkassim, in the *American Journal of Theoretical and Applied Statistics*, explain why non-probability sampling is still common: it helps when randomisation is impossible or when time, money and workforce are short. The cost is that such a sample may not represent the population well.',
        'Neither family is wrong. A study that wants to say what share of farmers in the district uses drip needs probability sampling. A study that wants to understand *why* needs people chosen for what they can tell you.',
      ],
    },
    {
      id: 'probability-sampling-methods',
      title: 'Types of probability sampling, with examples',
      Art: ProbabilityScene,
      caption: 'four ways of letting chance choose: anyone, every fourth, some from each group, whole villages',
      body: [
        'There are four main types. Each needs some kind of list, and each uses chance at the moment of choosing.',
        {
          table: {
            head: ['method', 'how it works', 'example'],
            rows: [
              ['simple random', 'every member of the frame has the same chance; you pick by lottery or with random numbers', 'number all 400 households on a village list and draw 20 numbers with a random number generator'],
              ['systematic', 'pick a random starting point, then every kth name on the list', 'start at household 3, then take every 20th: 3, 23, 43 and so on'],
              ['stratified', 'split the population into groups, called strata, then take a random sample from each', 'marginal, small and larger farmers, each sampled separately'],
              ['cluster', 'pick whole groups at random, such as villages or schools, then study everyone or a random sample inside them', 'draw 10 villages by lottery, then households within them'],
            ],
          },
          tone: 'green',
        },
        'Each has a catch. Systematic sampling goes wrong if the list has a pattern that matches your interval: if every tenth house on a list is a corner house with a bigger plot, an interval of ten keeps picking the same kind of house. Stratified sampling needs each person\'s group known in advance. Cluster sampling saves travel, but often needs a larger sample for the same accuracy, because people in one village tend to be alike.',
        'Large surveys usually combine these in stages, called **multistage sampling**: villages or wards first, then households inside the chosen ones.',
        'Mohit\'s plan became a multistage one. He listed every village in the district and drew 10 by lottery. He split each chosen village\'s household list into marginal, small and larger farmers, and drew households at random from each group. "Now every farming household in the district had a chance," Dr. Malik said, "including the ones who never come to a fair."',
      ],
    },
    {
      id: 'non-probability-sampling-methods',
      title: 'Types of non-probability sampling, with examples',
      Art: NonProbabilityScene,
      caption: 'the nearest people, the right people, a quota filled, and one person leading to the next',
      body: [
        'Here the researcher, or the participants themselves, decide who ends up in the sample. That is fine as long as you say so openly.',
        {
          table: {
            head: ['method', 'how it works', 'main risk'],
            rows: [
              ['convenience', 'whoever is easiest to reach: your classmates, patients in one OPD, visitors at a fair', 'the easiest people to reach are rarely typical, so the risk of bias is high'],
              ['purposive, or judgement', 'you choose people because they have the experience or knowledge your question needs', 'it rests on the researcher\'s judgement, which can itself be biased'],
              ['quota', 'you fix targets, such as 50 men and 50 women, and fill each with whoever you find', 'it looks like stratified sampling, but the choice inside each group is not random'],
              ['snowball', 'each participant introduces you to others like them', 'people with many contacts get over-represented'],
              ['self-selection', 'people choose to join, as with an online form shared on WhatsApp', 'those who reply often feel strongly about the topic'],
            ],
          },
          tone: 'pink',
        },
        'Elfil and Negida call convenience sampling "the most applicable and widely used method in clinical research". For snowball sampling they describe a survey of street children, in which one child leads the researcher to others. That is its strength: it reaches groups no list would ever show you.',
        'In qualitative research, purposive sampling is usually the right tool, not a compromise. For the second part of his study, interviews on why farmers give up drip, Mohit did not want any farmer at all. He wanted farmers who had installed drip and then gone back to flooding their fields. He found the first two through his survey, and each of them named others. That is purposive sampling with a little snowball, and he wrote it exactly that way.',
        'Qualitative studies also decide their size differently. Instead of a formula, many keep interviewing until saturation, which Guest, Bunce and Johnson, in a 2006 paper in *Field Methods*, describe as the point at which no new information or themes are observed in the data.',
      ],
    },
    {
      id: 'how-to-choose-a-sampling-method',
      title: 'How to choose a sampling method',
      Art: ChooseScene,
      caption: 'one question at the fork: do you need to speak for everyone?',
      body: [
        'Start from your research question, not from a senior\'s thesis. If your question is still loose, sharpen it first with our guide on [how to write a good research question](/blogs/how-to-write-a-research-question/). Then ask these, in order.',
        {
          steps: [
            { title: 'Do you need to generalise?', text: 'If your result must speak for a whole population, such as the share of farmers in a district who use drip, you need probability sampling. If you want depth and reasons, purposive sampling suits better.' },
            { title: 'Is there a list?', text: 'Simple random and systematic sampling need a list of the whole population. If none exists, cluster sampling lets you start from a list of places, such as villages, wards or schools, and make lists of people only inside the chosen ones.' },
            { title: 'Are there groups you must not miss?', text: 'If small groups matter, such as women farmers or first-generation students, stratify, so that each group is sampled on its own.' },
            { title: 'What can you afford?', text: 'A smaller probability sample done well beats a large convenience sample.' },
            { title: 'Can you defend it?', text: 'Your examiner will ask why. Write one sentence that ties the method to your question.' },
          ],
          tone: 'amber',
        },
        'Mohit\'s answers were clear. He needed a percentage for the district, so the survey had to be a probability sample. He needed reasons, so the interviews had to be purposive. One study, two methods, each matched to its half of the question.',
        {
          note: 'some departments expect a particular method for a dissertation, and ethics committees often ask how participants will be approached. Check with your guide before you start collecting data.',
          label: 'check',
          tone: 'red',
        },
      ],
    },
    {
      id: 'sample-size-and-sampling-bias',
      title: 'Sample size, sampling error and sampling bias',
      Art: BiasScene,
      caption: 'a tight cluster that misses the centre, and a looser spread around it',
      body: [
        'Two different things can make a sample\'s answer differ from the truth. **Sampling error** is chance: even a perfectly random sample will not match the population exactly, and the gap tends to shrink as the sample grows. **Sampling bias** is a fault in how the sample was chosen, and it pushes the answer in one direction. A bigger sample does not cure bias. It only measures the wrong group more precisely.',
        'The famous example comes from 1936. The American magazine *The Literary Digest* polled about ten million people before the US presidential election, and 2.38 million replied. It predicted that Alf Landon would beat Franklin Roosevelt with about 57 percent of the vote. Roosevelt won with 60.8 percent and carried every state except Maine and Vermont. Its names came from its own readers and from lists of car owners and telephone users, groups richer than average. Later research found the bigger problem was who chose to reply: people who strongly disliked Roosevelt were more likely to answer.',
        {
          quote: 'A big sample from the wrong list is still the wrong list.',
          by: 'Dr. Malik, to Mohit',
          tone: 'amber',
        },
        'So how many people do you need? It depends on how precise your answer must be, how much people vary, and the analysis you plan. Surveys that estimate a percentage use a standard formula; studies that compare groups use a power calculation. Name and cite the method you used, and for clinical work, ask a statistician.',
        'Then plan for people who will not take part. Mohit drew a few extra names in each group and recorded how many said no. A low response rate is a warning sign, because those who refuse may differ from those who agree.',
      ],
    },
    {
      id: 'how-to-write-the-sampling-method',
      title: 'How to write the sampling method in your thesis',
      Art: WriteScene,
      caption: 'everything a reader needs to repeat the draw, on one page',
      body: [
        'The sampling paragraph of your methodology should let a reader repeat exactly what you did. Our guide on [how to write a research methodology](/blogs/how-to-write-a-research-methodology/) shows where it sits. Include:',
        {
          list: [
            'the population and the sampling frame you drew from',
            'the sampling method, named correctly, and why it suits your question',
            'the sample size and how you decided it',
            'how the selection was done in practice: the lottery, the random number tool or the interval',
            'your inclusion and exclusion criteria',
            'how many people were approached, how many took part, and why the others did not',
          ],
          style: 'check',
        },
        'Name the method honestly. Stopping people "at random" in a crowd is convenience sampling, not random sampling, and reviewers notice. If you are still at the proposal stage, write the same paragraph in the future tense, as our guide on [how to write a research proposal](/blogs/how-to-write-a-research-proposal/) explains.',
        'Mohit\'s final sampling paragraph was six sentences long. Dr. Malik read it and asked only one thing: "And the farmers\' fair?" He smiled. He would still go next year, but to share his results, not to collect them.',
      ],
    },
  ],

  takeaways: [
    'A sample stands in for a population, so define the population and the sampling frame first.',
    'Probability sampling lets chance choose and supports claims about the whole population; non-probability sampling lets the researcher choose.',
    'Simple random, systematic, stratified and cluster are the main probability methods; convenience, purposive, quota and snowball are the main non-probability ones.',
    'Choose from your research question, the list you have, the groups you must not miss and what you can afford.',
    'A bigger sample reduces chance error but never fixes bias. Report the method, the size and the response honestly.',
  ],

  faq: [
    {
      q: 'What are the four types of probability sampling?',
      a: 'Simple random, systematic, stratified and cluster sampling. Large surveys often combine them in stages, which is called multistage sampling.',
    },
    {
      q: 'Which sampling method is best for qualitative research?',
      a: 'Usually purposive sampling, where you choose people who have the experience your question is about. Snowball sampling helps when such people are hard to find. Many qualitative studies keep adding participants until new interviews stop bringing new themes.',
    },
    {
      q: 'What is the difference between stratified and quota sampling?',
      a: 'Both split the population into groups and take people from each. In stratified sampling the people inside each group are chosen at random. In quota sampling the researcher fills each group with whoever is available, so it is a non-probability method.',
    },
    {
      q: 'Is convenience sampling acceptable for a dissertation?',
      a: 'It can be, for a pilot study or when no other method is possible, as long as you name it honestly and do not claim your results apply to the whole population. Ask your guide what your department accepts.',
    },
  ],

  cta: {
    title: 'See how other studies chose their samples',
    text: 'Fiberarticle\'s Literature Reviewer finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref and builds an evidence matrix you can export, so you can compare how studies on your topic drew their samples. One payment unlocks all of it, for good.',
  },
}
