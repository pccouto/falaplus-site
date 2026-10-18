// Every article shown on the article index pages, in each language.
// id = the PT slug; links between articles use [[id|text]] in any language.
// A language block with live: false shows an "Em breve / Coming soon" card and gets no links.
// Every live language block has a content file in ./conteudo/<lang>/<slug>.mjs.
export const THEMES = {
  brincar: {
    tagClass: '', bg: '#f6e4eb', ink: '#8c4464',
    pt: { name: 'Brincar', intro: 'Porque é que brincar conta, que tipos de brincadeira existem e como acompanhar a criança.' },
    en: { name: 'Play', intro: 'Why play matters, the different kinds of play and how adults can join in.' },
    es: { name: 'El juego', intro: 'Por qué jugar es importante, qué tipos de juego existen y cómo acompañar al niño o a la niña.' },
  },
  fala: {
    tagClass: 'tag-fala', bg: '#e4eedf', ink: '#31563c',
    pt: { name: 'Fala e linguagem', intro: 'Como a criança aprende a comunicar e quando procurar ajuda.' },
    en: { name: 'Speech and language', intro: 'How children learn to communicate and when to seek help.' },
    es: { name: 'Habla y lenguaje', intro: 'Cómo aprenden los niños a comunicarse y cuándo pedir ayuda.' },
  },
  jogos: {
    tagClass: 'tag-jogos', bg: '#fbe8d7', ink: '#825438',
    pt: { name: 'Jogos', intro: 'O que cada tipo de jogo pede à criança e como jogar em família.' },
    en: { name: 'Games', intro: 'What each type of game asks of a child and how to play together.' },
    es: { name: 'Juegos educativos', intro: 'Qué pide cada tipo de juego al niño y cómo jugar en familia.' },
  },
  mitos: {
    tagClass: '', bg: '#eee9f8', ink: '#5234b8',
    pt: { name: 'Mitos ou Verdades', intro: 'Perguntas frequentes sobre autismo, fala, desenvolvimento e alimentação, respondidas com evidência e prudência.' },
    en: { name: 'Myth or Fact', intro: 'Common questions about autism, speech, development and food, answered with evidence and care.' },
    es: { name: '¿Mito o verdad?', intro: 'Preguntas frecuentes sobre autismo, habla, desarrollo y alimentación, respondidas con evidencia y cuidado.' },
  },
}

const live = true
export const CATALOG = [
  { id: 'importancia-do-brincar', theme: 'brincar',
    pt: { live, slug: 'importancia-do-brincar', title: 'A importância do brincar no desenvolvimento infantil', teaser: 'O que diz a ciência, os tipos de brincadeira e o papel do adulto.' },
    en: { live, slug: 'importance-of-play', title: 'The importance of play in child development', teaser: 'What the research says, the kinds of play and the adult’s role.' },
    es: { live, slug: 'importancia-del-juego', title: 'La importancia del juego en el desarrollo infantil', teaser: 'Qué dice la ciencia, los tipos de juego y el papel del adulto.' } },
  { id: 'brincadeiras-para-estimular-a-fala', theme: 'brincar', kind: { pt: 'Ideias práticas', en: 'Practical ideas', es: 'Ideas prácticas' },
    pt: { live, slug: 'brincadeiras-para-estimular-a-fala', title: 'Brincadeiras para estimular a fala', teaser: '12 ideias simples para fazer em casa, e como conversar sem pressionar.' },
    en: { live, slug: 'activities-to-encourage-speech', title: 'Activities to encourage speech', teaser: '12 simple play ideas for home, and how to talk without pressure.' },
    es: { live, slug: 'actividades-para-estimular-el-lenguaje', title: 'Actividades para estimular el lenguaje', teaser: '12 ideas sencillas para casa, y cómo conversar sin presionar.' } },
  { id: 'brincar-ao-faz-de-conta', theme: 'brincar',
    pt: { live, slug: 'brincar-ao-faz-de-conta', title: 'Brincar ao faz-de-conta', teaser: 'O jogo simbólico e a linguagem: o que a investigação mostra.' },
    en: { live, slug: 'pretend-play', title: 'Pretend play', teaser: 'Symbolic play and language: what the research shows.' },
    es: { live, slug: 'juego-simbolico', title: 'El juego simbólico', teaser: 'El juego de imitación y el lenguaje: lo que muestra la investigación.' } },
  { id: 'desenvolvimento-da-linguagem-infantil', theme: 'fala',
    pt: { live, slug: 'desenvolvimento-da-linguagem-infantil', title: 'Desenvolvimento da linguagem infantil', teaser: 'Como a criança aprende a comunicar e o que ajuda no dia a dia.' },
    en: { live, slug: 'language-development-in-children', title: 'Language development in children', teaser: 'How children learn to communicate and what helps every day.' },
    es: { live, slug: 'desarrollo-del-lenguaje-infantil', title: 'Desarrollo del lenguaje infantil', teaser: 'Cómo aprenden los niños a comunicarse y qué ayuda en el día a día.' } },
  { id: 'atraso-na-fala', theme: 'fala',
    pt: { live, slug: 'atraso-na-fala', title: 'Atraso na fala', teaser: 'Sinais a que vale a pena estar atento e quando procurar ajuda.' },
    en: { live, slug: 'speech-delay', title: 'Speech delay', teaser: 'Signs worth watching for and when to seek help.' },
    es: { live, slug: 'retraso-del-habla', title: 'Retraso del habla', teaser: 'Señales a tener en cuenta y cuándo pedir ayuda.' } },
  { id: 'comunicacao-aumentativa-e-alternativa', theme: 'fala',
    pt: { live, slug: 'comunicacao-aumentativa-e-alternativa', title: 'Comunicação aumentativa e alternativa', teaser: 'Comunicar com imagens, gestos e voz, e porque não impede a fala.' },
    en: { live, slug: 'augmentative-and-alternative-communication', title: 'Augmentative and alternative communication (AAC)', teaser: 'Communicating with pictures, signs and voice, and why it does not stop speech.' },
    es: { live, slug: 'comunicacion-aumentativa-y-alternativa', title: 'Comunicación aumentativa y alternativa', teaser: 'Comunicar con imágenes, gestos y voz, y por qué no frena el habla.' } },
  { id: 'beneficios-dos-jogos-educativos', theme: 'jogos',
    pt: { live, slug: 'beneficios-dos-jogos-educativos', title: 'Benefícios dos jogos educativos', teaser: 'O que a criança pratica quando joga, e o que nenhum jogo promete.' },
    en: { live, slug: 'benefits-of-educational-games', title: 'Benefits of educational games', teaser: 'What children practise when they play, and what no game can promise.' },
    es: { live, slug: 'beneficios-de-los-juegos-educativos', title: 'Beneficios de los juegos educativos', teaser: 'Qué practica el niño cuando juega, y lo que ningún juego promete.' } },
  { id: 'jogos-de-memoria-para-criancas', theme: 'jogos',
    pt: { live, slug: 'jogos-de-memoria-para-criancas', title: 'Jogos de memória para crianças', teaser: 'Atenção, sequências e padrões, e como jogar em família.' },
    en: { live, slug: 'memory-games-for-kids', title: 'Memory games for kids', teaser: 'Attention, sequences and patterns, and how to play together.' },
    es: { live, slug: 'juegos-de-memoria-para-ninos', title: 'Juegos de memoria para niños', teaser: 'Atención, secuencias y patrones, y cómo jugar en familia.' } },
  { id: 'jogos-de-logica-para-criancas', theme: 'jogos',
    pt: { live, slug: 'jogos-de-logica-para-criancas', title: 'Jogos de lógica para crianças', teaser: 'Torre de Hanói, Tangram e puzzles: planear e resolver.' },
    en: { live, slug: 'logic-games-for-kids', title: 'Logic games for kids', teaser: 'Tower of Hanoi, Tangram and puzzles: plan and solve.' },
    es: { live, slug: 'juegos-de-logica-para-ninos', title: 'Juegos de lógica para niños', teaser: 'Torre de Hanói, Tangram y puzles: planificar y resolver.' } },
  { id: 'bilinguismo-e-atraso-na-fala', theme: 'fala',
    pt: { live, slug: 'bilinguismo-e-atraso-na-fala', title: 'Bilinguismo e atraso na fala', teaser: 'Duas línguas em casa atrasam a fala? O que diz a investigação.' },
    en: { live, slug: 'bilingual-children-speech-delay', title: 'Bilingual children and speech delay', teaser: 'Do two languages at home delay speech? What research says.' },
    es: { live, slug: 'bilinguismo-y-retraso-del-habla', title: 'Bilingüismo y retraso del habla', teaser: '¿Dos idiomas en casa retrasan el habla? Lo que dice la investigación.' } },
  { id: 'diferenca-entre-fala-e-linguagem', theme: 'fala',
    pt: { live, slug: 'diferenca-entre-fala-e-linguagem', title: 'Fala, linguagem e comunicação', teaser: 'Qual é a diferença, e porque muda a forma de ajudar.' },
    en: { live, slug: 'speech-vs-language', title: 'Speech, language and communication', teaser: 'What the difference is, and why it changes how to help.' },
    es: { live, slug: 'diferencia-entre-habla-y-lenguaje', title: 'Habla, lenguaje y comunicación', teaser: 'Cuál es la diferencia, y por qué cambia la forma de ayudar.' } },
  { id: 'comunicacao-nas-rotinas-diarias', theme: 'fala', kind: { pt: 'Ideias práticas', en: 'Practical ideas', es: 'Ideas prácticas' },
    pt: { live, slug: 'comunicacao-nas-rotinas-diarias', title: 'Comunicação nas rotinas diárias', teaser: 'Ideias simples para criar oportunidades de comunicação ao longo do dia.' },
    en: { live, slug: 'communication-in-daily-routines', title: 'Communication in daily routines', teaser: 'Simple ideas for everyday opportunities to communicate.' },
    es: { live, slug: 'comunicacion-en-rutinas-diarias', title: 'Comunicación en las rutinas diarias', teaser: 'Ideas sencillas para crear oportunidades de comunicación durante el día.' } },
  { id: 'tempo-de-ecra-criancas', theme: 'brincar',
    pt: { live, slug: 'tempo-de-ecra-criancas', title: 'Tempo de ecrã nas crianças', teaser: 'Recomendações por idade e como escolher uma app educativa.' },
    en: { live, slug: 'screen-time-for-kids', title: 'Screen time for kids', teaser: 'Guidelines by age and how to choose an educational app.' },
    es: { live, slug: 'tiempo-de-pantalla-ninos', title: 'Tiempo de pantalla en niños', teaser: 'Recomendaciones por edad y cómo elegir una app educativa.' } },
  { id: 'jogos-para-aprender-palavras', theme: 'jogos',
    pt: { live, slug: 'jogos-para-aprender-palavras', title: 'Jogos para aprender palavras', teaser: 'O que pratica um jogo de vocabulário e como o tornar conversa.' },
    en: { live, slug: 'vocabulary-games-for-kids', title: 'Vocabulary games for kids', teaser: 'What a word game practises and how to turn it into conversation.' },
    es: { live, slug: 'juegos-de-vocabulario-para-ninos', title: 'Juegos de vocabulario para niños', teaser: 'Qué practica un juego de palabras y cómo convertirlo en conversación.' } },
  { id: 'jogos-para-aprender-a-ler', theme: 'jogos',
    pt: { live, slug: 'jogos-para-aprender-a-ler', title: 'Jogos para aprender a ler', teaser: 'Sílabas, letras, frases e histórias, e como apoiar os primeiros leitores.' },
    en: { live, slug: 'reading-games-for-kids', title: 'Reading games for kids', teaser: 'Syllables, letters, sentences and stories, and how to support early readers.' },
    es: { live, slug: 'juegos-para-aprender-a-leer', title: 'Juegos para aprender a leer', teaser: 'Sílabas, letras, frases e historias, y cómo apoyar a los primeros lectores.' } },
  {
  "id": "atraso-na-fala-e-pdl",
  "theme": "fala",
  "kind": {
    "pt": "Guia",
    "en": "Guide",
    "es": "Guía"
  },
  "pt": {
    "live": true,
    "slug": "atraso-na-fala-e-pdl",
    "title": "Atraso na fala e PDL: quais são as diferenças?",
    "teaser": "Atraso na fala e PDL não são a mesma coisa. Saiba o que cada termo descreve, como se avalia a linguagem e quando pedir orientação."
  },
  "en": {
    "live": true,
    "slug": "speech-delay-and-dld",
    "title": "Speech delay and DLD: what is the difference?",
    "teaser": "Speech delay and DLD are not the same. Learn what each term describes, how language is assessed and when to seek advice."
  },
  "es": {
    "live": true,
    "slug": "retraso-del-habla-y-tdl",
    "title": "Retraso del habla y TDL: ¿cuáles son las diferencias?",
    "teaser": "El retraso del habla y el TDL no son lo mismo. Conoce qué describe cada término, cómo se evalúa el lenguaje y cuándo pedir orientación."
  }
},
  {
  "id": "apraxia-da-fala-infantil",
  "theme": "fala",
  "kind": {
    "pt": "Guia",
    "en": "Guide",
    "es": "Guía"
  },
  "pt": {
    "live": true,
    "slug": "apraxia-da-fala-infantil",
    "title": "Apraxia da fala infantil: o que é e como apoiar a criança?",
    "teaser": "O que é apraxia da fala infantil, como se avalia e como apoiar a comunicação sem tentar diagnosticar por uma lista de sinais."
  },
  "en": {
    "live": true,
    "slug": "childhood-apraxia-of-speech",
    "title": "Childhood apraxia of speech: what is it and how can a child be supported?",
    "teaser": "What childhood apraxia of speech is, how it is assessed and how to support communication without diagnosing from a symptom list."
  },
  "es": {
    "live": true,
    "slug": "apraxia-del-habla-infantil",
    "title": "Apraxia del habla infantil: ¿qué es y cómo apoyar al niño?",
    "teaser": "Qué es la apraxia del habla infantil, cómo se evalúa y cómo apoyar la comunicación sin diagnosticar a partir de una lista de señales."
  }
},
  {
  "id": "primeira-consulta-terapia-da-fala",
  "theme": "fala",
  "kind": {
    "pt": "Guia",
    "en": "Guide",
    "es": "Guía"
  },
  "pt": {
    "live": true,
    "slug": "primeira-consulta-terapia-da-fala",
    "title": "O que acontece numa primeira consulta de terapia da fala?",
    "teaser": "Saiba o que pode acontecer numa primeira consulta de terapia da fala, que informação levar e como a família pode participar."
  },
  "en": {
    "live": true,
    "slug": "first-speech-therapy-appointment",
    "title": "What happens at a first speech and language therapy appointment?",
    "teaser": "What may happen at a child’s first speech and language therapy appointment, what information to bring and how family can take part."
  },
  "es": {
    "live": true,
    "slug": "primera-consulta-logopedia",
    "title": "¿Qué ocurre en una primera consulta de logopedia?",
    "teaser": "Qué puede ocurrir en la primera consulta de logopedia infantil, qué información llevar y cómo puede participar la familia."
  }
},
  {
  "id": "apoio-a-expressao-da-crianca",
  "theme": "fala",
  "kind": {
    "pt": "Guia",
    "en": "Guide",
    "es": "Guía"
  },
  "pt": {
    "live": true,
    "slug": "apoiar-a-crianca-a-expressar-o-que-pretende",
    "title": "Como apoiar uma criança quando não consegue expressar o que pretende",
    "teaser": "Ideias para compreender sinais, oferecer escolhas acessíveis e apoiar a comunicação quando a criança não consegue expressar o que precisa."
  },
  "en": {
    "live": true,
    "slug": "supporting-a-child-to-express-needs",
    "title": "How to support a child who cannot express what they want",
    "teaser": "Ways to notice communication, offer accessible choices and support a child when it is difficult to express a need."
  },
  "es": {
    "live": true,
    "slug": "apoyar-expresion-necesidades",
    "title": "Cómo apoyar al niño cuando no consigue expresar lo que quiere",
    "teaser": "Ideas para observar la comunicación, ofrecer opciones accesibles y apoyar al niño cuando le cuesta expresar lo que necesita."
  }
},
  {
  "id": "rotinas-visuais-para-criancas",
  "theme": "fala",
  "kind": {
    "pt": "Guia",
    "en": "Guide",
    "es": "Guía"
  },
  "pt": {
    "live": true,
    "slug": "rotinas-visuais-para-criancas",
    "title": "Rotinas visuais: como ajudar a criança a compreender o que vai acontecer",
    "teaser": "Como criar uma rotina visual simples para apoiar a compreensão de sequências e mudanças, em casa ou na escola, sem a tornar rígida."
  },
  "en": {
    "live": true,
    "slug": "visual-routines-for-children",
    "title": "Visual routines: helping a child understand what will happen",
    "teaser": "How to create a simple visual routine to support understanding of sequences and changes at home or school, without making it rigid."
  },
  "es": {
    "live": true,
    "slug": "rutinas-visuales-para-ninos",
    "title": "Rutinas visuales: ayudar al niño a comprender qué va a pasar",
    "teaser": "Cómo crear una rutina visual sencilla para apoyar la comprensión de secuencias y cambios en casa o en la escuela, sin volverla rígida."
  }
},
  {
  "id": "acompanhar-progressos-comunicacao",
  "theme": "fala",
  "kind": {
    "pt": "Guia",
    "en": "Guide",
    "es": "Guía"
  },
  "pt": {
    "live": true,
    "slug": "acompanhar-progressos-comunicacao-crianca",
    "title": "Como acompanhar pequenos progressos na comunicação da criança",
    "teaser": "Registe formas de comunicação, escolhas, compreensão e participação sem transformar notas ou checklists numa avaliação clínica."
  },
  "en": {
    "live": true,
    "slug": "tracking-child-communication-progress",
    "title": "How to track small steps in a child’s communication",
    "teaser": "Record communication, choices, understanding and participation without turning family notes or checklists into a clinical assessment."
  },
  "es": {
    "live": true,
    "slug": "seguir-progresos-comunicacion",
    "title": "Cómo observar pequeños progresos en la comunicación del niño",
    "teaser": "Anote formas de comunicación, elecciones, comprensión y participación sin convertir notas o listas en una evaluación clínica."
  }
},
  {
  "id": "escolher-app-comunicacao-caa",
  "theme": "fala",
  "kind": {
    "pt": "Guia",
    "en": "Guide",
    "es": "Guía"
  },
  "pt": {
    "live": true,
    "slug": "escolher-aplicacao-comunicacao-caa",
    "title": "Como escolher uma aplicação de comunicação adequada às necessidades da criança",
    "teaser": "Critérios para escolher uma aplicação de comunicação: acesso, vocabulário, personalização, privacidade, voz e uso em diferentes contextos."
  },
  "en": {
    "live": true,
    "slug": "choosing-an-aac-communication-app",
    "title": "How to choose a communication app for a child’s needs",
    "teaser": "Criteria for choosing a communication app: access, vocabulary, personalisation, privacy, voice and use across settings."
  },
  "es": {
    "live": true,
    "slug": "elegir-aplicacion-comunicacion-caa",
    "title": "Cómo elegir una aplicación de comunicación para las necesidades del niño",
    "teaser": "Criterios para elegir una app de comunicación: acceso, vocabulario, personalización, privacidad, voz y uso en distintos contextos."
  }
},
  {
  "id": "inclusao-escolar-comunicacao",
  "theme": "fala",
  "kind": {
    "pt": "Guia",
    "en": "Guide",
    "es": "Guía"
  },
  "pt": {
    "live": true,
    "slug": "inclusao-escolar-criancas-dificuldades-comunicacao",
    "title": "Inclusão escolar de crianças com dificuldades de comunicação",
    "teaser": "Ideias para apoiar a participação escolar de crianças com dificuldades de comunicação, em colaboração com a família e a equipa educativa."
  },
  "en": {
    "live": true,
    "slug": "school-inclusion-communication",
    "title": "School inclusion for children with communication difficulties",
    "teaser": "Ideas to support school participation for children with communication difficulties, in collaboration with family and education teams."
  },
  "es": {
    "live": true,
    "slug": "inclusion-escolar-comunicacion",
    "title": "Inclusión escolar de niños con dificultades de comunicación",
    "teaser": "Ideas para apoyar la participación escolar de niños con dificultades de comunicación, en colaboración con la familia y el equipo educativo."
  }
},
  {
  "id": "gaguez-infantil",
  "theme": "fala",
  "kind": {
    "pt": "Guia",
    "en": "Guide",
    "es": "Guía"
  },
  "pt": {
    "live": true,
    "slug": "gaguez-infantil",
    "title": "Gaguez infantil: quando procurar apoio?",
    "teaser": "Gaguez infantil: perceba a diferença entre hesitações e sinais persistentes e saiba como apoiar a comunicação da criança."
  },
  "en": {
    "live": true,
    "slug": "stuttering-in-children",
    "title": "Stuttering in children: when to seek support",
    "teaser": "Learn about stuttering in children, how it differs from everyday hesitations and ways to support communication without pressure."
  },
  "es": {
    "live": true,
    "slug": "tartamudez-infantil",
    "title": "Tartamudez infantil: ¿cuándo buscar apoyo?",
    "teaser": "Tartamudez infantil: diferencias entre las pausas habituales y las dificultades persistentes, y cómo apoyar la comunicación."
  }
},
  {
  "id": "mutismo-seletivo",
  "theme": "fala",
  "kind": {
    "pt": "Guia",
    "en": "Guide",
    "es": "Guía"
  },
  "pt": {
    "live": true,
    "slug": "mutismo-seletivo",
    "title": "Mutismo seletivo: compreender e apoiar a criança",
    "teaser": "O que é o mutismo seletivo, como se manifesta em diferentes contextos e que passos podem apoiar a criança."
  },
  "en": {
    "live": true,
    "slug": "selective-mutism",
    "title": "Selective mutism: understanding and supporting a child",
    "teaser": "What selective mutism is, how it can vary across settings and practical ways to support a child without adding pressure."
  },
  "es": {
    "live": true,
    "slug": "mutismo-selectivo",
    "title": "Mutismo selectivo: comprender y apoyar al niño",
    "teaser": "Qué es el mutismo selectivo, cómo puede manifestarse en distintos contextos y cómo apoyar al niño sin presionarlo."
  }
},
  {
  "id": "ecolalia-e-comunicacao",
  "theme": "fala",
  "kind": {
    "pt": "Guia",
    "en": "Guide",
    "es": "Guía"
  },
  "pt": {
    "live": true,
    "slug": "ecolalia-e-comunicacao",
    "title": "Ecolalia: porque a criança repete palavras?",
    "teaser": "O que é a ecolalia imediata ou tardia, como compreender a repetição de palavras e apoiar a comunicação da criança."
  },
  "en": {
    "live": true,
    "slug": "echolalia-and-communication",
    "title": "Echolalia: why does a child repeat words?",
    "teaser": "Learn about immediate and delayed echolalia, what repetition may communicate and how to support a child without pressure."
  },
  "es": {
    "live": true,
    "slug": "ecolalia-y-comunicacion",
    "title": "Ecolalia: ¿por qué el niño repite palabras?",
    "teaser": "Qué es la ecolalia inmediata o tardía, qué puede comunicar una repetición y cómo apoyar al niño sin presionarlo."
  }
},
  { id: 'autismo-e-comunicacao', theme: 'fala', kind: { pt: 'Guia' },
    pt: { live, slug: 'autismo-e-comunicacao', title: 'Autismo e comunicação: compreender diferentes formas de comunicar', teaser: 'Como reconhecer diferentes formas de comunicação e apoiar a participação da criança sem pressão.' },
    en: { live, slug: 'autism-and-communication', title: 'Autism and communication: understanding different ways to communicate', teaser: 'How to recognise different ways of communicating and support a child’s participation without pressure.' },
    es: { live, slug: 'autismo-y-comunicacion', title: 'Autismo y comunicación: comprender distintas formas de comunicar', teaser: 'Cómo reconocer distintas formas de comunicación y apoyar la participación del niño sin presionarlo.' } },
  { id: 'marcos-desenvolvimento-linguagem-2-a-5-anos', theme: 'fala', kind: { pt: 'Guia por idades' },
    pt: { live, slug: 'marcos-desenvolvimento-linguagem-2-a-5-anos', title: 'Marcos do desenvolvimento da linguagem dos 2 aos 5 anos', teaser: 'Referências por idade, variação individual e sinais que justificam procurar orientação profissional.' },
    en: { live, slug: 'language-milestones-ages-2-to-5', title: 'Language milestones from ages 2 to 5', teaser: 'Age-based reference points, individual variation and signs that professional advice may be helpful.' },
    es: { live, slug: 'hitos-desarrollo-lenguaje-2-a-5-anos', title: 'Hitos del desarrollo del lenguaje de los 2 a los 5 años', teaser: 'Referencias por edad, variación individual y señales que aconsejan pedir orientación profesional.' } },
  { id: 'personalizacao-da-aprendizagem-infantil', theme: 'fala', kind: { pt: 'Guia' },
    pt: { live, slug: 'personalizacao-da-aprendizagem-infantil', title: 'Personalizar a aprendizagem infantil com fotografias e vozes', teaser: 'Fotografias familiares, vozes conhecidas e palavras importantes ligadas ao quotidiano da criança.' },
    en: { live, slug: 'personalising-childrens-learning', title: 'Personalising children’s learning with photos and familiar voices', teaser: 'Family photos, familiar voices and meaningful words connected with a child’s everyday life.' },
    es: { live, slug: 'personalizacion-aprendizaje-infantil', title: 'Personalizar el aprendizaje infantil con fotos y voces', teaser: 'Fotos familiares, voces conocidas y palabras importantes relacionadas con la vida cotidiana del niño.' } },
  { id: 'terapia-da-fala-em-casa', theme: 'fala', kind: { pt: 'Guia prático' },
    pt: { live, slug: 'terapia-da-fala-em-casa', title: 'Terapia da fala: como apoiar a comunicação em casa', teaser: 'Estratégias para integrar objetivos nas brincadeiras e rotinas, em colaboração com o terapeuta.' },
    en: { live, slug: 'speech-therapy-at-home', title: 'Speech therapy: supporting communication at home', teaser: 'Ways to include communication goals in play and routines, in collaboration with the child’s therapist.' },
    es: { live, slug: 'logopedia-en-casa', title: 'Logopedia: cómo apoyar la comunicación en casa', teaser: 'Estrategias para integrar objetivos en el juego y las rutinas, en colaboración con el logopeda.' } },
  { id: 'comunicacao-nao-verbal', theme: 'fala', kind: { pt: 'Guia' },
    pt: { live, slug: 'comunicacao-nao-verbal', title: 'Comunicação não verbal: gestos, apontar e atenção conjunta', teaser: 'Como reconhecer gestos, escolhas e outras formas de comunicar antes e para além das palavras.' },
    en: { live, slug: 'nonverbal-communication', title: 'Nonverbal communication: gestures, pointing and joint attention', teaser: 'How to recognise gestures, choices and other ways of communicating before and beyond words.' },
    es: { live, slug: 'comunicacion-no-verbal', title: 'Comunicación no verbal: gestos, señalar y atención conjunta', teaser: 'Cómo reconocer gestos, elecciones y otras formas de comunicar antes y más allá de las palabras.' } },
  { id: 'vacinas-e-autismo', theme: 'mitos', kind: { pt: 'Mito ou verdade', en: 'Myth or fact', es: 'Mito o verdad' },
    pt: { live, slug: 'vacinas-e-autismo', title: "Vacinas causam autismo? Mitos e evidência", teaser: "O que mostram as revisões científicas e como distinguir coincidência temporal de causa." },
    en: { live, slug: 'vaccines-and-autism', title: "Do vaccines cause autism? Myths and evidence", teaser: "What scientific reviews show, and how to distinguish timing from cause." },
    es: { live, slug: 'vacunas-y-autismo', title: "¿Las vacunas causan autismo? Mitos y evidencia", teaser: "Qué muestran las revisiones científicas y cómo distinguir coincidencia temporal de causa." } },
  { id: 'autismo-nao-se-diagnostica-por-um-sinal', theme: 'mitos', kind: { pt: 'Mito ou verdade', en: 'Myth or fact', es: 'Mito o verdad' },
    pt: { live, slug: 'autismo-diagnostico-sinais', title: "Um atraso na fala significa autismo?", teaser: "Um sinal isolado não fecha um diagnóstico: veja como se avaliam desenvolvimento e comunicação." },
    en: { live, slug: 'autism-diagnosis-signs', title: "Does a speech delay mean autism?", teaser: "One sign alone does not establish a diagnosis. Learn how development and communication are assessed." },
    es: { live, slug: 'diagnostico-del-autismo-senales', title: "¿Un retraso del habla significa autismo?", teaser: "Una señal aislada no determina un diagnóstico: descubre cómo se valoran el desarrollo y la comunicación." } },
  { id: 'caa-impede-a-fala', theme: 'mitos', kind: { pt: 'Mito ou verdade', en: 'Myth or fact', es: 'Mito o verdad' },
    pt: { live, slug: 'caa-impede-a-fala', title: "A comunicação aumentativa impede a fala?", teaser: "O que se sabe sobre comunicação aumentativa e alternativa, fala e participação." },
    en: { live, slug: 'aac-stops-speech', title: "Does AAC stop a child from speaking?", teaser: "What is known about augmentative and alternative communication, speech and participation." },
    es: { live, slug: 'la-caa-impide-hablar', title: "¿La comunicación aumentativa impide hablar?", teaser: "Qué se sabe sobre comunicación aumentativa y alternativa, habla y participación." } },
  { id: 'bilinguismo-atraso-na-fala-mito', theme: 'mitos', kind: { pt: 'Mito ou verdade', en: 'Myth or fact', es: 'Mito o verdad' },
    pt: { live, slug: 'bilinguismo-causa-atraso-na-fala', title: "O bilinguismo causa atraso na fala?", teaser: "Como interpretar o repertório da criança que cresce com duas ou mais línguas." },
    en: { live, slug: 'does-bilingualism-cause-speech-delay', title: "Does bilingualism cause speech delay?", teaser: "How to understand the language skills of a child growing up with two or more languages." },
    es: { live, slug: 'el-bilinguismo-causa-retraso-del-habla', title: "¿El bilingüismo causa retraso del habla?", teaser: "Cómo interpretar el repertorio de un niño que crece con dos o más idiomas." } },
  { id: 'fala-tardia-recupera-sempre', theme: 'mitos', kind: { pt: 'Mito ou verdade', en: 'Myth or fact', es: 'Mito o verdad' },
    pt: { live, slug: 'fala-tardia-recupera-sozinha', title: "Quem fala tarde recupera sempre?", teaser: "As trajetórias variam: porque acompanhar o desenvolvimento é melhor do que esperar por uma promessa." },
    en: { live, slug: 'late-talkers-always-catch-up', title: "Do late talkers always catch up?", teaser: "Developmental paths vary. Why follow progress instead of relying on a promise." },
    es: { live, slug: 'los-ninos-que-hablan-tarde-siempre-se-ponen-al-dia', title: "¿Los niños que hablan tarde siempre se ponen al día?", teaser: "Las trayectorias varían: por qué conviene seguir el desarrollo en lugar de confiar en una promesa." } },
  { id: 'ecra-causa-atraso-na-fala', theme: 'mitos', kind: { pt: 'Mito ou verdade', en: 'Myth or fact', es: 'Mito o verdad' },
    pt: { live, slug: 'ecra-causa-atraso-na-fala', title: "O ecrã causa atraso na fala?", teaser: "O que as associações entre ecrãs e linguagem permitem concluir — e o que não permitem." },
    en: { live, slug: 'does-screen-time-cause-speech-delay', title: "Does screen time cause speech delay?", teaser: "What associations between screens and language can and cannot tell us." },
    es: { live, slug: 'las-pantallas-causan-retraso-del-habla', title: "¿Las pantallas causan retraso del habla?", teaser: "Qué permiten concluir —y qué no— las asociaciones entre pantallas y lenguaje." } },
  { id: 'estimular-aumenta-inteligencia', theme: 'mitos', kind: { pt: 'Mito ou verdade', en: 'Myth or fact', es: 'Mito o verdad' },
    pt: { live, slug: 'estimular-aumenta-inteligencia', title: "Brinquedos e exercícios aumentam a inteligência?", teaser: "O que a investigação apoia sobre aprendizagem precoce, interação e desenvolvimento cognitivo." },
    en: { live, slug: 'does-stimulation-increase-intelligence', title: "Do toys and exercises increase intelligence?", teaser: "What research supports about early learning, interaction and cognitive development." },
    es: { live, slug: 'estimular-aumenta-la-inteligencia', title: "¿Los juguetes y ejercicios aumentan la inteligencia?", teaser: "Qué respalda la investigación sobre aprendizaje temprano, interacción y desarrollo cognitivo." } },
  { id: 'seletividade-alimentar-maus-habitos', theme: 'mitos', kind: { pt: 'Mito ou verdade', en: 'Myth or fact', es: 'Mito o verdad' },
    pt: { live, slug: 'seletividade-alimentar-autismo-maus-habitos', title: "Seletividade alimentar no autismo é falta de limites?", teaser: "Sensibilidade, rotina e saúde podem influenciar as refeições; culpa e pressão não explicam tudo." },
    en: { live, slug: 'autism-food-selectivity-bad-parenting', title: "Is food selectivity in autism caused by poor discipline?", teaser: "Sensory needs, routines and health can shape meals; blame and pressure do not explain everything." },
    es: { live, slug: 'selectividad-alimentaria-autismo-mala-crianza', title: "¿La selectividad alimentaria en el autismo se debe a falta de límites?", teaser: "La sensibilidad, las rutinas y la salud influyen en las comidas; la culpa y la presión no lo explican todo." } },
  { id: 'dieta-sem-gluten-autismo', theme: 'mitos', kind: { pt: 'Mito ou verdade', en: 'Myth or fact', es: 'Mito o verdad' },
    pt: { live, slug: 'dieta-sem-gluten-autismo-mito', title: "A dieta sem glúten trata o autismo?", teaser: "O que os ensaios clínicos dizem sobre dietas de exclusão e porque a indicação individual importa." },
    en: { live, slug: 'gluten-free-diet-autism-myth', title: "Does a gluten-free diet treat autism?", teaser: "What clinical trials say about exclusion diets and why individual indications matter." },
    es: { live, slug: 'dieta-sin-gluten-autismo-mito', title: "¿La dieta sin gluten trata el autismo?", teaser: "Qué dicen los ensayos clínicos sobre dietas de exclusión y por qué importa la indicación individual." } },
  { id: 'obrigar-a-comer-aumenta-variedade', theme: 'mitos', kind: { pt: 'Mito ou verdade', en: 'Myth or fact', es: 'Mito o verdad' },
    pt: { live, slug: 'obrigar-crianca-a-comer', title: "Obrigar a criança a comer ajuda a aceitar alimentos?", teaser: "A alimentação responsiva apoia autonomia e segurança; veja formas de apresentar alimentos sem pressão." },
    en: { live, slug: 'does-forcing-children-to-eat-help', title: "Does forcing a child to eat help them accept foods?", teaser: "Responsive feeding supports autonomy and safety. Ways to introduce foods without pressure." },
    es: { live, slug: 'obligar-a-comer-aumenta-la-variedad', title: "¿Obligar al niño a comer ayuda a aceptar alimentos?", teaser: "La alimentación responsiva apoya la autonomía y la seguridad: cómo ofrecer alimentos sin presión." } },
]
