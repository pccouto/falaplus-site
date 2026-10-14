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
]
