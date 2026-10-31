import Hero from './hero.jsx'
import {
  BiasScene,
  ForestScene,
  HeterogeneityScene,
  PoolScene,
  StepsScene,
  VersusScene,
  WhatScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'nine small trials go in, and one clearer answer comes out at the bottom',
  },

  intro: [
    'Shreya Saxena is in the second year of her MD in Community Medicine at a medical college in Kanpur. Every Thursday she helps at the diabetes clinic of an urban health centre, and every Thursday patients ask her the same thing: "Doctor, if I walk every day, will my sugar come down?"',
    'She went looking for an answer. She found nine small trials that tested walking programmes in adults with type 2 diabetes. Four said walking lowered HbA1c, the three month blood sugar test. Five found no clear change. Most had fewer than a hundred patients. Her guide, Dr. Verma, looked at her notes and said, "Stop counting which side has more papers. Add up their numbers properly. That is a meta analysis."',
    'This blog explains meta analysis in research the way Shreya learnt it: what it means, how it differs from a systematic review, when studies can be pooled, the steps, and how to read the forest plot, heterogeneity and funnel plot that come with it.',
  ],

  sections: [
    {
      id: 'what-is-meta-analysis',
      title: 'What is meta analysis in research?',
      Art: WhatScene,
      caption: 'many small results, combined with care, give one estimate you can trust more',
      body: [
        {
          define: 'Meta analysis',
          hint: 'noun',
          meaning: 'The statistical combination of results from two or more separate studies. This is the definition used in the Cochrane Handbook, the standard guide for health reviews.',
          tone: 'blue',
        },
        'The word comes from the statistician Gene Glass. In his presidential address to the American Educational Research Association, published in *Educational Researcher* in 1976, he described meta analysis as "the analysis of analyses". Each study analyses its own patients; a meta analysis analyses the results of the studies.',
        'The Cochrane Handbook gives three reasons to do one:',
        {
          list: [
            '**to improve precision**, because many small studies together tell you more than any one of them',
            '**to answer questions the single studies did not ask**, such as whether an effect holds across different groups of people',
            '**to settle controversies** when studies seem to disagree, or to suggest new hypotheses',
          ],
          style: 'check',
        },
        'Shreya\'s nine trials were a classic case for the first and third reasons. Each was too small to be sure on its own, and together they seemed to disagree.',
      ],
    },
    {
      id: 'meta-analysis-vs-systematic-review',
      title: 'Meta analysis vs systematic review',
      Art: VersusScene,
      caption: 'the systematic review is the whole house; the meta analysis is one room inside it',
      body: [
        'Students often use the two words as if they meant the same thing. They do not.',
        {
          compare: {
            left: {
              title: 'a systematic review',
              tone: 'green',
              mark: 'dots',
              items: [
                'the whole process: question, protocol, search, screening, judging bias',
                'can combine studies in words and tables',
                'reported with PRISMA',
              ],
            },
            right: {
              title: 'a meta analysis',
              tone: 'blue',
              mark: 'dots',
              items: [
                'one statistical step: pooling the numbers',
                'needs studies that report comparable numbers',
                'produces a pooled estimate and a forest plot',
              ],
            },
          },
        },
        'The Cochrane Handbook is clear that a systematic review need not contain any meta analysis. The reverse is the problem: a meta analysis built on papers you happened to find is only as good as that set of papers. That is why most guides say a meta analysis should sit inside a systematic review, with a search planned and recorded in advance. Our blog on [how to do a systematic review](/blogs/how-to-do-a-systematic-review/) walks through those steps, and [types of literature review](/blogs/types-of-literature-review/) shows where both fit among other kinds of review.',
      ],
    },
    {
      id: 'when-can-studies-be-pooled',
      title: 'When can studies be pooled?',
      Art: PoolScene,
      caption: 'pool apples with apples; describe a mixed basket in words',
      body: [
        'A meta analysis can only combine numbers that measure the same thing. The Cochrane Handbook says to do one only if the participants, interventions, comparisons and outcomes are judged similar enough, and warns that meta analyses of very diverse studies can be misleading. Combining apples and oranges, it says, can give a meaningless result.',
        'Shreya checked each of her nine trials against four questions:',
        {
          list: [
            'Were the patients similar? All adults with type 2 diabetes.',
            'Was the intervention similar? Walking programmes of at least eight weeks.',
            'Was the comparison similar? Usual care, with no exercise programme.',
            'Was the outcome similar? HbA1c, reported as a percentage.',
          ],
          style: 'numbers',
        },
        'All nine passed. A tenth study, which mixed walking with a new diet, did not, because nobody could tell which part did the work. She described it in words instead.',
        'Pooling also needs numbers. Interviews and other qualitative studies cannot go into a meta analysis of this kind, though they have their own ways of being synthesised. If you are unsure which kind of evidence you have, our blog on [qualitative vs quantitative research](/blogs/qualitative-vs-quantitative-research/) explains the difference.',
        {
          note: 'when studies are too different to pool, that is not a failure. A careful synthesis in words and tables is still a proper systematic review.',
          label: 'good to know',
          tone: 'green',
        },
      ],
    },
    {
      id: 'how-to-do-a-meta-analysis-step-by-step',
      title: 'How to do a meta analysis, step by step',
      Art: StepsScene,
      caption: 'six steps, and each one is written down before the next begins',
      body: [
        'Shreya\'s meta analysis followed the same steps most guides describe.',
        {
          steps: [
            {
              title: 'Fix the question and the protocol.',
              text: 'Write down the population, intervention, comparison and outcome, and decide in advance how you will pool the results and which subgroups, if any, you will compare.',
            },
            {
              title: 'Search and screen systematically.',
              text: 'Search several databases, record every search, and screen with two people working independently. Our guide to [searching academic databases](/blogs/how-to-search-academic-databases/) shows how to build the search.',
            },
            {
              title: 'Extract the numbers from each study.',
              text: 'For an outcome measured on a scale, like HbA1c, the Cochrane Handbook asks for the mean, the standard deviation and the number of participants in each group. For a yes or no outcome, such as whether a patient was admitted to hospital, you need the number in each group who did and did not have the event.',
            },
            {
              title: 'Choose an effect measure.',
              text: 'This is the number that compares the two groups in each study (see the table below).',
            },
            {
              title: 'Pool the results and draw a forest plot.',
              text: 'Software does the arithmetic. Cochrane\'s own review tool, RevMan, is widely used for health reviews, and free R packages such as meta and metafor offer more methods.',
            },
            {
              title: 'Check heterogeneity, bias and robustness.',
              text: 'Ask how much the studies disagree, whether small negative studies may be missing, and whether your answer changes if you make a different reasonable choice.',
            },
          ],
          tone: 'amber',
        },
        {
          table: {
            head: ['your outcome', 'common effect measures', 'when to use'],
            rows: [
              ['yes or no (an event happened or not)', 'risk ratio, odds ratio', 'Cochrane generally recommends risk ratios or odds ratios'],
              ['a measurement on the same scale in every study', 'mean difference (MD)', 'when all studies report the outcome on the same scale, like HbA1c in %'],
              ['a measurement on different scales', 'standardised mean difference (SMD)', 'when studies measure the same thing with different tools, like two depression scales'],
            ],
          },
          tone: 'blue',
        },
        {
          note: 'two of Shreya\'s trials did not report standard deviations. The Handbook says the simplest fix is to borrow one from similar studies, but to avoid this where possible, and not to impute at all if most studies are missing them. She wrote to both authors first, and one replied with the numbers.',
          label: 'careful',
          tone: 'red',
        },
      ],
    },
    {
      id: 'how-to-read-a-forest-plot',
      title: 'How to read a forest plot',
      Art: ForestScene,
      caption: 'squares for studies, lines for uncertainty, a diamond for the pooled answer',
      body: [
        'The result of a meta analysis is usually shown as a forest plot. Once you know its four parts, you can read one in any journal.',
        {
          list: [
            '**The square** for each study sits at that study\'s result. Its area shows the weight the study gets in the meta analysis.',
            '**The horizontal line** through each square is the study\'s confidence interval: the range of effects that fits its result.',
            '**The vertical line** marks no effect, where the two groups did equally well.',
            '**The diamond** at the bottom is the pooled result. Its centre is the estimate and its width is the confidence interval.',
          ],
          style: 'dots',
        },
        'Why do some squares look bigger? In the common inverse variance method, each study\'s weight is one divided by the variance of its result. Larger studies have more precise results, so they get more weight. Here are three of Shreya\'s trials, with the pooled result for just these three. The numbers are made up for this blog.',
        {
          table: {
            head: ['trial', 'patients', 'change in HbA1c (walking vs usual care)', 'weight'],
            rows: [
              ['Trial A', '60', '-0.6 (95% CI -1.0 to -0.2)', '18%'],
              ['Trial B', '220', '-0.3 (95% CI -0.5 to -0.1)', '74%'],
              ['Trial C', '40', '+0.1 (95% CI -0.5 to +0.7)', '8%'],
              ['pooled', '320', '-0.32 (95% CI -0.49 to -0.15)', '100%'],
            ],
          },
          tone: 'green',
        },
        'Trial C on its own seems to say walking does nothing, and Trial A seems to say it does a lot. The pooled diamond sits close to Trial B, the biggest and most precise study, and its whole width lies on the side that favours walking. That is the point of pooling: one confident answer from three uncertain ones.',
      ],
    },
    {
      id: 'heterogeneity-and-fixed-vs-random-effects',
      title: 'Heterogeneity, I² and fixed vs random effects',
      Art: HeterogeneityScene,
      caption: 'when the squares line up, the studies agree; when they scatter, ask why',
      body: [
        'Studies rarely agree exactly. Variation in the effects found by different studies is called statistical **heterogeneity**. The statistic most papers report is **I²**, which the Cochrane Handbook describes as the percentage of the variability in effect estimates that is due to heterogeneity rather than chance. It gives this rough guide:',
        {
          table: {
            head: ['I²', 'rough reading'],
            rows: [
              ['0% to 40%', 'might not be important'],
              ['30% to 60%', 'may represent moderate heterogeneity'],
              ['50% to 90%', 'may represent substantial heterogeneity'],
              ['75% to 100%', 'considerable heterogeneity'],
            ],
          },
          tone: 'amber',
        },
        'The ranges overlap on purpose. The Handbook warns that such thresholds can mislead, and that I² is very uncertain when there are only a few studies.',
        'Heterogeneity also shapes the choice of model.',
        {
          compare: {
            left: {
              title: 'fixed effect',
              tone: 'blue',
              mark: 'dots',
              items: [
                'assumes every study estimates the same true effect',
                'differences between studies are put down to chance alone',
              ],
            },
            right: {
              title: 'random effects',
              tone: 'pink',
              mark: 'dots',
              items: [
                'assumes the true effect varies from study to study',
                'gives an average effect across that spread',
              ],
            },
          },
        },
        'When there is no heterogeneity, the two give identical results. Shreya\'s nine trials gave an I² of 38%, and since the programmes differed in length and intensity, Dr. Verma asked her to report a random effects model, as her protocol had said.',
        {
          note: 'it is tempting to explain heterogeneity by splitting studies into subgroups after you see the results. The Handbook asks you to name subgroups in the protocol, and advises against meta-regression with fewer than ten studies.',
          label: 'careful',
          tone: 'red',
        },
      ],
    },
    {
      id: 'publication-bias-sensitivity-and-reporting',
      title: 'Publication bias, sensitivity analysis and reporting',
      Art: BiasScene,
      caption: 'a funnel plot with a bite missing from one corner',
      body: [
        'A meta analysis can only add up the studies that reached the world. If small studies with disappointing results were never published, the pooled answer will look better than the truth. Cochrane now calls this **non-reporting bias**: when decisions about how, when or where results are reported depend on what those results were.',
        'The usual check is a **funnel plot**, a scatter of each study\'s result against its size or precision. Big studies sit near the top, close together; small ones spread out at the bottom. Ideally it looks like an upside down funnel. A gap in one bottom corner suggests small studies are missing. Two cautions from the Handbook: tests for funnel plot asymmetry should be used only when there are at least 10 studies, and asymmetry can have causes other than missing studies, so it is not proof of bias. With nine trials, Shreya drew the plot but did not run a test, and said why.',
        'Next comes a **sensitivity analysis**: repeating the meta analysis with a different reasonable choice to see if the answer holds. Shreya re-ran hers without the two trials with a high risk of bias, and again with a fixed effect model. HbA1c still came down in every version, a little less in one.',
        'Finally, report everything with **PRISMA 2020**, the Preferred Reporting Items for Systematic reviews and Meta-Analyses, published in the *BMJ* in 2021. It has a 27 item checklist and a flow diagram that accounts for every record from search to final set. Whether a meta analysis can count as an MD thesis, or a chapter of a PhD thesis, depends on your university, so check with your guide early.',
        'Back at the Thursday clinic, Shreya now has an honest answer: regular walking probably brings HbA1c down a little, and the bigger trials agree more than the small ones suggested. For the chapter that will surround her numbers, she is using our guide on [how to write a literature review](/blogs/how-to-write-a-literature-review/).',
      ],
    },
  ],

  takeaways: [
    'A meta analysis is the statistical combination of results from two or more separate studies, to get a more precise answer.',
    'A systematic review is the whole process; a meta analysis is an optional step inside it, and should rest on a systematic search.',
    'Pool only studies similar in participants, interventions, comparisons and outcomes, and describe the rest in words.',
    'In a forest plot, squares are studies sized by weight, lines are confidence intervals, and the diamond is the pooled result.',
    'Report I², choose fixed or random effects in advance, check bias with a funnel plot when you have at least 10 studies, and follow PRISMA 2020.',
  ],

  faq: [
    {
      q: 'What is the meaning of meta analysis in simple words?',
      a: 'It means adding up the results of several similar studies in a careful, weighted way, so that bigger and more precise studies count for more. The result is one combined estimate with its own confidence interval.',
    },
    {
      q: 'How many studies do you need for a meta analysis?',
      a: 'Technically two, since the Cochrane definition is the combination of two or more studies. But with very few studies the pooled result and I² are uncertain, and funnel plot tests need at least 10 studies, so more is better.',
    },
    {
      q: 'Can I do a meta analysis without a systematic review?',
      a: 'You can run the statistics, but the result depends entirely on which studies you included. Without a planned, recorded search, a reader cannot tell whether you missed studies that point the other way, so most guides say to embed it in a systematic review.',
    },
    {
      q: 'Which software is used for meta analysis?',
      a: 'RevMan, Cochrane\'s review tool, is common in health research, and the free R packages meta and metafor are widely used for more advanced methods. Ask your guide or department which one your field expects.',
    },
  ],

  cta: {
    title: 'Pull the numbers out of every paper',
    text: 'Fiberarticle finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref, and its Extract builds a table with your own columns across the papers you choose, with a short supporting quote from the paper for every cell, and exports it as CSV. One payment unlocks all of it, for good.',
  },
}
