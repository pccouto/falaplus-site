// Every article shown on /artigos/. live: false = "Em breve" card, no links point to it.
// Every live article has a content file in ./conteudo with the same slug.
export const THEMES = {
  brincar: { name: 'Brincar', tagClass: '', bg: '#f6e4eb', ink: '#8c4464', intro: 'Porque é que brincar conta, que tipos de brincadeira existem e como acompanhar a criança.' },
  fala: { name: 'Fala e linguagem', tagClass: 'tag-fala', bg: '#e4eedf', ink: '#31563c', intro: 'Como a criança aprende a comunicar e quando procurar ajuda.' },
  jogos: { name: 'Jogos', tagClass: 'tag-jogos', bg: '#fbe8d7', ink: '#825438', intro: 'O que cada tipo de jogo pede à criança e como jogar em família.' },
}

export const CATALOG = [
  { slug: 'importancia-do-brincar', theme: 'brincar', live: true, title: 'A importância do brincar no desenvolvimento infantil', teaser: 'O que diz a ciência, os tipos de brincadeira e o papel do adulto.' },
  { slug: 'brincadeiras-para-estimular-a-fala', theme: 'brincar', live: true, kind: 'Ideias práticas', title: 'Brincadeiras para estimular a fala', teaser: '12 ideias simples para fazer em casa, e como conversar sem pressionar.' },
  { slug: 'brincar-ao-faz-de-conta', theme: 'brincar', live: true, title: 'Brincar ao faz-de-conta', teaser: 'O jogo simbólico e a linguagem: o que a investigação mostra.' },
  { slug: 'desenvolvimento-da-linguagem-infantil', theme: 'fala', live: true, title: 'Desenvolvimento da linguagem infantil', teaser: 'Como a criança aprende a comunicar e o que ajuda no dia a dia.' },
  { slug: 'atraso-na-fala', theme: 'fala', live: true, title: 'Atraso na fala', teaser: 'Sinais a que vale a pena estar atento e quando procurar ajuda.' },
  { slug: 'comunicacao-aumentativa-e-alternativa', theme: 'fala', live: true, title: 'Comunicação aumentativa e alternativa', teaser: 'Comunicar com imagens, gestos e voz, e porque não impede a fala.' },
  { slug: 'beneficios-dos-jogos-educativos', theme: 'jogos', live: true, title: 'Benefícios dos jogos educativos', teaser: 'O que a criança pratica quando joga, e o que nenhum jogo promete.' },
  { slug: 'jogos-de-memoria-para-criancas', theme: 'jogos', live: true, title: 'Jogos de memória para crianças', teaser: 'Atenção, sequências e padrões, e como jogar em família.' },
  { slug: 'jogos-de-logica-para-criancas', theme: 'jogos', live: true, title: 'Jogos de lógica para crianças', teaser: 'Torre de Hanói, Tangram e puzzles: planear e resolver.' },
]
