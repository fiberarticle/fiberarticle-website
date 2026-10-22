import Hero from './hero.jsx'
import {
  ApaScene,
  DiscloseScene,
  ExampleScene,
  InTextScene,
  MlaScene,
  OtherStylesScene,
  SourceScene,
  WhenScene,
} from './scenes.jsx'

export default {
  hero: {
    Art: Hero,
    caption: 'a citation answers four questions: who made it, when, what you asked and where to find it',
  },

  intro: [
    'Mahima Chundawat is in the final year of her MSc in Environmental Science at a university in Udaipur. Her dissertation follows two of the city\'s lakes, Fateh Sagar and Pichola, through a monsoon. Every two weeks she collects water samples and measures their phosphate and nitrate. Too much of either feeds the algae and water hyacinth that boatmen clear by hand.',
    'Writing her review chapter late one night, she asked ChatGPT to explain eutrophication in simple words and pasted two of its sentences into her draft. To be honest about it, she added "(ChatGPT, 2026)" at the end. Her guide, Dr. Bhandari, circled it in red. "Which conversation? On what date? Where can I read it? And is a chatbot the right source for a definition at all?"',
    'This blog explains how to cite ChatGPT the way Mahima learnt to: when you need a citation and when a disclosure is enough, the current APA and MLA formats with examples, Harvard, Chicago and IEEE, in-text citations and shared links, and what to do with the references ChatGPT gives you.',
  ],

  sections: [
    {
      id: 'do-you-need-to-cite-chatgpt',
      title: 'Do you need to cite ChatGPT?',
      Art: WhenScene,
      caption: 'words or ideas from the chat need a citation; help with your own words needs a note',
      body: [
        'If ChatGPT\'s words or ideas appear in your work, yes. The MLA Style Center says to cite a generative AI tool "whenever you paraphrase, quote, or incorporate" content it created. APA\'s guidance, updated in September 2025, takes the same view. Using its sentences without saying so passes off text you did not write as your own. Our blog on [types of plagiarism](/blogs/types-of-plagiarism/) explains why that counts as plagiarism.',
        'Not every use of ChatGPT is the same, though. Mahima had used it in four ways, and each one needed something different:',
        {
          table: {
            head: ['how Mahima used it', 'what it needs'],
            rows: [
              ['pasted two sentences explaining eutrophication', 'a citation, or better, a scholarly source (see below)'],
              ['brainstormed questions for a short survey of boatmen', 'a citation, with the prompt, in her methods'],
              ['corrected the grammar of her introduction', 'a short disclosure, if her university asks for one'],
              ['suggested five references on Udaipur\'s lakes', 'nothing for ChatGPT; check each paper and cite the ones you read'],
            ],
          },
          tone: 'pink',
        },
        'The MLA Style Center separates these too. Functional uses, such as editing or translating, should be acknowledged "in a note, your text, or another suitable location". Library guides that summarise MLA\'s 2025 revision add that using AI only to find sources does not need a citation: you cite the source itself.',
        {
          note: 'before any of this, check whether you may use ChatGPT at all. Rules differ between Indian universities, departments and journals. Read your university\'s thesis guidelines, ask your guide, and for a paper, read the journal\'s author guidelines.',
          label: 'first',
          tone: 'red',
        },
      ],
    },
    {
      id: 'how-to-cite-chatgpt-in-apa',
      title: 'How to cite ChatGPT in APA style',
      Art: ApaScene,
      caption: 'one chat with a link, or the tool in general: two reference formats',
      body: [
        'On 9 September 2025, APA Style published new guidance on citing generative AI in three blog posts by Timothy McAdoo, Shelby Denneny and Chelsea Lee. It replaces APA\'s 2023 post on ChatGPT, now kept only as an archive. The author is always the company, here OpenAI, because an AI tool cannot be an author. There are two formats.',
        '**1. A specific chat.** Most chat tools, ChatGPT included, can make a shareable link to a conversation. When you have one, cite that chat:',
        {
          table: {
            head: ['part', 'what goes there'],
            rows: [
              ['author', 'OpenAI.'],
              ['date', 'the date of the chat: (2026, August 14).'],
              ['title', 'the chat\'s title, in italics and sentence case. Use the title ChatGPT gave it, or write your own.'],
              ['description', '[Generative AI chat].'],
              ['tool', 'ChatGPT.'],
              ['URL', 'the shared link to the chat.'],
            ],
          },
          tone: 'blue',
        },
        'Mahima\'s brainstorming chat became: OpenAI. (2026, August 14). *Survey questions for lake boatmen* [Generative AI chat]. ChatGPT. https://chatgpt.com/share/ followed by the code in her link.',
        '**2. The tool in general.** When you mean ChatGPT itself, or a chat link would be unhelpful or inappropriate, cite the tool. The year is the year the tool was most recently updated: OpenAI. (2026). *ChatGPT* [Large language model]. https://chatgpt.com',
        'The in-text citation is the same for both: (OpenAI, 2026) in brackets, or OpenAI (2026) in a sentence. Not (ChatGPT, 2026), which is what Mahima first wrote.',
        {
          note: 'many guides and older theses still show the 2023 format, OpenAI. (2023). *ChatGPT* (Mar 14 version) [Large language model]. If your department\'s style sheet still asks for it, follow your department. Otherwise use the current one.',
          label: 'old format',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'how-to-cite-chatgpt-in-mla',
      title: 'How to cite ChatGPT in MLA style',
      Art: MlaScene,
      caption: 'in MLA, your prompt takes the place of the title',
      body: [
        'MLA works differently. The MLA Style Center first published its guidance on 17 March 2023 and revised it in August 2025. It does not treat the AI tool as an author, so the entry has no author at all. Instead, it starts with a description of what the tool made, usually your prompt.',
        {
          steps: [
            { title: 'Title of source.', text: 'Describe what was generated, including the prompt, in quotation marks, followed by the word prompt.' },
            { title: 'Container.', text: 'The name of the tool, in italics: *ChatGPT*.' },
            { title: 'Version.', text: 'The version or model, as specifically as you can. The 2025 revision asks for the model name or number here.' },
            { title: 'Publisher.', text: 'The company that made the tool: OpenAI.' },
            { title: 'Date.', text: 'The date the content was generated.' },
            { title: 'Location.', text: 'A stable, shareable link to the chat if the tool gives one; if not, the tool\'s general web address.' },
          ],
          tone: 'green',
        },
        'Mahima\'s friend Rukhsar, doing her MA in English at the same university, used MLA for a paper on lakes in Rajasthani folk songs. Her entry: "Explain the meaning of the lake in this folk song in simple English" prompt. *ChatGPT*, model name as shown in the tool, OpenAI, 3 Sept. 2026, chatgpt.com/share/ followed by her link\'s code.',
        'In the text, MLA uses a shortened form of that title: ("Explain the meaning"). Cut long prompts to their first few words, so the reader can find the matching entry.',
      ],
    },
    {
      id: 'how-to-reference-chatgpt-in-harvard',
      title: 'How to reference ChatGPT in Harvard, Chicago and IEEE',
      Art: OtherStylesScene,
      caption: 'Harvard changes from one university to the next; Chicago and IEEE lean on notes',
      body: [
        'Harvard is not one style. Each university keeps its own version, and their advice on AI differs widely, as our blog on [citation styles](/blogs/citation-styles-explained/) explains. Three examples:',
        {
          list: [
            '**A full reference.** The University of Greenwich\'s guide, based on Cite Them Right, lists the company as author with the year, the type of content in square brackets, the tool, your prompt, the date and the chat link with the date you accessed it. In the text: ChatGPT (OpenAI, 2026).',
            '**A personal communication.** The London School of Economics library says that where the output exists only for you, as with a private chat, you cite it as a personal communication, described in the text.',
            '**In the text only.** The guide from Queensland University of Technology says AI content is generally cited where it occurs in the text and left out of the reference list. If it does go in, it should link to a public copy of the chat.',
          ],
          style: 'dots',
        },
        'So for Harvard, ask which guide your department follows and copy its AI example exactly.',
        '**Chicago.** Chicago prefers notes. A footnote such as "Text generated by ChatGPT, OpenAI, August 14, 2026," followed by the shared link, is usually enough, and Duke University\'s library guide notes that chats are usually left out of the bibliography.',
        '**IEEE.** IEEE\'s author guidelines ask for AI-generated content to be disclosed in the acknowledgments section: name the AI system, identify the sections that use its content, and briefly explain how much it was used. Using AI only for editing and grammar falls outside that rule, but IEEE still recommends disclosing it. Conferences may add their own rules.',
      ],
    },
    {
      id: 'chatgpt-in-text-citation',
      title: 'ChatGPT in-text citation, prompts and shared links',
      Art: InTextScene,
      caption: 'the citation points to the chat; the prompt tells the reader what you asked',
      body: [
        'A ChatGPT answer changes every time you ask, and nobody else can open your private chat. That is why APA and MLA now prefer a shared link to the exact conversation.',
        {
          steps: [
            { title: 'Create the shared link.', text: 'Use the share option in ChatGPT for the conversation you are citing, and copy the link it gives you.' },
            { title: 'Say what you asked.', text: 'Give the prompt in your text when it matters, as APA suggests: "When asked to suggest questions for a survey of boatmen, ChatGPT (OpenAI, 2026) proposed..."' },
            { title: 'Quote like any other source.', text: 'Exact words go in quotation marks with the in-text citation. A paraphrase still needs the citation.' },
            { title: 'Keep a record.', text: 'Save your important prompts and answers. APA\'s guidance suggests putting them in an appendix or supplementary material when they matter for understanding your work.' },
          ],
          tone: 'blue',
        },
        'Think before you share. Anyone with the link can read the chat, and a thesis in a repository such as Shodhganga can be read by anyone. Never share a chat containing unpublished data or participants\' details.',
        {
          note: 'if you cannot share the chat, MLA says to use the tool\'s general web address. In APA, you can cite the tool in general and put the full text of the conversation in an appendix.',
          label: 'no link?',
          tone: 'amber',
        },
      ],
    },
    {
      id: 'can-you-cite-chatgpt-as-a-source',
      title: 'Can you cite ChatGPT as a source for facts?',
      Art: SourceScene,
      caption: 'the chatbot points; the paper you open is the source',
      body: [
        'A citation only says where words came from. It does not make them true. ChatGPT predicts likely text and can state wrong facts confidently. For a definition, a number or a scientific claim, examiners expect a source someone is answerable for: a textbook, a journal paper or an official report.',
        'Dr. Bhandari told Mahima to find where the idea actually comes from. She found a definition of eutrophication in a limnology textbook in the department library, read the chapter, and cited the textbook instead.',
        'The five references ChatGPT had suggested needed the same care. The MLA Style Center asks writers to "take care to vet the secondary sources" an AI tool cites. If you read the original paper yourself, cite that paper; ChatGPT was only the route you took to it. Mahima searched each title on Google Scholar. Three were real and relevant. One was real but about a lake in another state. One she could not find anywhere, so it did not go in.',
        'Our blog on [using AI in research honestly](/blogs/using-ai-in-research-honestly/) explains why chatbots invent references and how to check them.',
      ],
    },
    {
      id: 'citing-vs-disclosing-ai-use',
      title: 'Citing vs disclosing: when a note is enough',
      Art: DiscloseScene,
      caption: 'a citation marks one borrowed passage; a disclosure describes your whole use',
      body: [
        'A citation marks one passage. A disclosure is a short statement about how you used AI across the whole work. Some universities and journals ask for both.',
        {
          compare: {
            left: {
              title: 'cite it',
              tone: 'blue',
              mark: 'dots',
              items: [
                'you quote ChatGPT\'s words',
                'you paraphrase or summarise its answer',
                'its ideas shaped your questions or analysis',
                'it made an image or table you include',
              ],
            },
            right: {
              title: 'disclose it',
              tone: 'pink',
              mark: 'dots',
              items: [
                'it corrected your grammar or spelling',
                'it translated or shortened your own text',
                'it helped you brainstorm and you used nothing directly',
                'your university or journal asks for a statement',
              ],
            },
          },
        },
        'APA\'s guidance notes that a citation alone may not explain how AI was used, and suggests describing substantial use in the text, the methods, the acknowledgments or an appendix. Where the disclosure goes depends on your university: a declaration page, the acknowledgments, or a line in the methods.',
        'Mahima\'s disclosure, placed after her declaration page, read: "I used ChatGPT (OpenAI) to correct the grammar of Chapter 1 and to brainstorm draft questions for the boatmen\'s survey in Chapter 3, as described there. I checked and edited all text and remain responsible for the content of this dissertation."',
        {
          note: 'ChatGPT should never be credited as an author or co-author. APA says an AI tool cannot be an author, MLA does not list one as an author even in a citation, and our blog on [how to avoid plagiarism](/blogs/how-to-avoid-plagiarism/) covers the habits that keep every borrowed idea traceable.',
          label: 'remember',
          tone: 'red',
        },
      ],
    },
    {
      id: 'how-to-cite-chatgpt-example',
      title: 'How to cite ChatGPT: Mahima\'s chapter, before and after',
      Art: ExampleScene,
      caption: 'one red circle, four clear fixes',
      body: [
        'Mahima\'s department follows APA, 7th edition. Here is what changed between the circled draft and the version she submitted.',
        {
          table: {
            head: ['first draft', 'final version'],
            rows: [
              ['ChatGPT\'s two sentences on eutrophication, followed by (ChatGPT, 2026)', 'her own sentence, citing the limnology textbook she read'],
              ['survey questions drafted with ChatGPT, not mentioned', 'the prompt in her methods, cited as (OpenAI, 2026), the chat in Appendix B'],
              ['five references copied from the chat', 'three she read and cited; two removed'],
              ['grammar help, not mentioned', 'one line in her disclosure statement'],
              ['no ChatGPT entry in the reference list', 'one entry for the shared chat, in APA format'],
            ],
          },
          tone: 'green',
        },
        'Her reference list ended up with one ChatGPT entry. Most of her use needed a real source or a line of disclosure, not a citation. Once you sort what ChatGPT did for you, the citation itself is the easy part.',
        'At her viva, the external examiner turned to Appendix B and asked why she kept only six of ChatGPT\'s twelve questions. She explained that four assumed the boatmen owned their boats, and two used words they never use. The examiner nodded and moved on.',
      ],
    },
  ],

  takeaways: [
    'Cite ChatGPT whenever its words or ideas appear in your work; disclose functional help such as grammar or translation.',
    'APA, updated in September 2025: OpenAI as author, the date, the chat title in italics, [Generative AI chat], ChatGPT and the shared link. In the text: (OpenAI, 2026).',
    'MLA: no author; your prompt is the title, then *ChatGPT*, the version or model, OpenAI, the date and the link.',
    'Harvard differs between universities, so copy your own university\'s example; IEEE asks for disclosure in the acknowledgments.',
    'ChatGPT is not a source for facts. Check every reference it suggests and cite the paper you actually read.',
  ],

  faq: [
    {
      q: 'What date do I use when citing ChatGPT?',
      a: 'For a specific chat, use the date of the conversation, in both APA and MLA. When APA cites the tool in general, it uses only the year the tool was last updated.',
    },
    {
      q: 'Can I cite ChatGPT in my thesis in India?',
      a: 'Usually, yes, if your university allows its use, but the rules are set by each university and sometimes each department. Follow your thesis guidelines and your guide\'s advice, and disclose your use even where a citation is not needed.',
    },
    {
      q: 'Does ChatGPT go in the reference list?',
      a: 'In APA, yes: one entry for each chat you cite, or one for the tool. In MLA, it goes in the Works Cited list. In Harvard it depends on your university\'s guide, Chicago often uses a note alone, and IEEE asks for a disclosure in the acknowledgments. Follow the style your department uses.',
    },
  ],

  cta: {
    title: 'Cite the papers, not the chatbot',
    text: 'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref together and shows the passage behind every point it writes, so the source you cite is a paper you can open and read. One payment unlocks all of it, for good.',
  },
}
