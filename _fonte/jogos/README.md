# Catálogo de jogos Fala Mais — 11-11-2026

58 jogos, cada um em PT/EN/ES: 174 páginas e três catálogos pesquisáveis.

## Manutenção

`python _fonte/jogos/build.py` gera páginas estáticas e atualiza exclusivamente as entradas deste catálogo no sitemap. Não requer dependências externas. Não editar HTML gerado à mão.

- `games.json`: nomes e instruções da app, identificadores, slugs e classificação.
- `prompts.json`: propostas específicas para cada jogo, na ordem PT, EN, ES.
- `build.py`: modelo e localização dos conteúdos comuns.
- `validate.py`: verificação de ligações, idiomas, metadados e sitemap.
- `urls.json`: rotas geradas.
- `/assets/css/games.css` e `/assets/js/games.js`: apresentação e pesquisa progressiva.
- `/assets/games/{pt,en,es}/`: vídeos e capas para a web.

Os nomes e as instruções foram extraídos de `src/i18n/pt.json`, `src/i18n/en.json` e `src/locales/es/es.json` no repositório da app. A classificação reutiliza `src/reports/gameMeta.js` e serve para organizar o catálogo, não como afirmação de eficácia clínica.

As gravações provêm **exclusivamente dos `fb-*.mp4`** em `FALA + GERAL/05 - Redes Sociais/Instagram/reels jogos/` (PT na raiz, EN e ES nas subpastas). Os ficheiros originais permanecem intactos. As capas são as aprovadas nessa coleção.

Os textos de apresentação das páginas de Escolhe a Imagem, Rebentar Balões, Jogo das Rolhas e Batalha Icon foram corrigidos nas três línguas face às mecânicas atuais. As legendas/textos incorporados nos reels aprovados não foram alterados; podem refletir descrições anteriores. As instruções das páginas correspondem ao código atual da app.

Conversão: FFmpeg, H.264 360×640, CRF 30, limite de vídeo 380 kbit/s, AAC 64 kbit/s, faststart. Os vídeos só carregam após interação (`preload=none`), não têm autoplay nem mute. Controlos nativos; pausa ao ocultar a página ou sair da área visível. As instruções e a explicação ficam disponíveis em texto.

## Conteúdo e pesquisa

Cada página tem título e descrição próprios, URL localizada, canonical, hreflang recíproco, WebPage e BreadcrumbList em JSON-LD, instruções reais, proposta específica, sugestões por tipo, artigos relacionados e CTA Google Play. Os catálogos têm ItemList. Não há keyword stuffing em meta keywords nem promessa de resultados clínicos. Não se anuncia elegibilidade para resultados enriquecidos de vídeo.

Terapia da fala, atraso da fala, apraxia, autismo e CAA aparecem em contexto educativo com os respetivos limites. EN e ES localizam os termos profissionais e mantêm a associação da marca Talk Plus/Habla Más à marca Fala Mais (Fala+). O acompanhamento por um adulto é recomendado como possibilidade e não como condição para jogar. Nenhum jogo é apresentado como tratamento, diagnóstico ou avaliação.

Fontes profissionais consultadas em 11-11-2026: ASHA, Late Language Emergence; Childhood Apraxia of Speech; Autism. Ligações diretas nas páginas. As fontes contextualizam o acompanhamento; não demonstram eficácia destes jogos.

## Validação e estado

- 177 páginas, títulos únicos, uma H1 por página, canonical e alternates corretos.
- 5 061 ligações internas verificadas; JSON-LD e sitemap válidos.
- 174 vídeos verificados com FFprobe: H.264, 360×640, AAC, duração superior a 10 s; cerca de 66,6 MB no total.
- Verificação no Chrome: catálogo, pesquisa sem acentos, página EN, carregamento do vídeo (21 s), áudio não silenciado e ausência de autoplay. Sem overflow horizontal na janela de computador.
- Revisão visual atualizada em 11-11-2026: capturas reais com Playwright, catálogo e página individual em 360, 768 e 1366 px. Verificada ausência de overflow e erros JavaScript nas três línguas; pesquisa, combinação com filtros, estado vazio, reposição e disponibilidade dos 58 jogos sem JavaScript.
- Não se instalaram dependências. O site é estático e não tem scripts npm de lint/test/build. A app e o Menu Necessidades não foram alterados.
- Estado: preparado localmente. Sem commit, push ou publicação. Não incluir inadvertidamente outras alterações pendentes do site no commit.

Os únicos ficheiros existentes alterados por esta funcionalidade são as três homepages (uma ligação ao catálogo em cada idioma) e o sitemap. Os artigos e o seu gerador permanecem intactos. O gerador dos artigos preserva entradas do sitemap fora das rotas dos artigos.

## Redesenho visual — 11-11-2026

Pedido do Paulo: melhorar o grafismo do catálogo e das páginas individuais. Novo módulo layout.py partilhado pelos três idiomas, com ícones ilustrados oficiais reutilizados de public/game-card-icons da app, em /assets/games/icons/. Não foram geradas imagens nem instaladas dependências.

Catálogo: introdução curta com composição de quatro jogos, cartões com cores por tipo, pesquisa e seis filtros combináveis. Página individual: identidade do jogo, regra em destaque, vídeo vertical com som e controlos nativos, proposta específica fora do ecrã, sugestões numeradas, jogos relacionados e informação de acompanhamento com hierarquia editorial. Cabeçalho, seletor de idiomas e rodapé redesenhados.

Mantidos os 174 vídeos, as rotas, canonical, hreflang, conteúdos de saúde, metadados e links para os artigos. Os artigos não foram alterados. A apresentação respeita redução de movimento, funciona sem JavaScript e adapta-se a ecrãs estreitos. Validação atual: 177 páginas e 6 525 ligações internas; testes reais em PT/EN/ES nas três larguras. Sem publicação.


## Publica??o ? 11-11-2026

Auditoria p?blica inicial: os tr?s cat?logos devolviam HTTP 404 e as 177 rotas n?o constavam do sitemap p?blico. Publica??o preparada num worktree isolado a partir de origin/main (e496f6c3), preservando todas as altera??es pendentes no checkout original. Inclu?dos jogos, recursos, hubs necess?rios ?s liga??es dos jogos e atalhos das tr?s homepages para os cat?logos. Sitemap preserva as 1010 entradas anteriores e acrescenta 183 (177 jogos/cat?logos, tr?s hubs e tr?s termos existentes).

Valida??o: 177 documentos e 6531 liga??es pelo verificador dos jogos; 181 documentos incluindo hubs/404 sem recursos ou liga??es internas inexistentes; sitemap com 1193 URLs ?nicas e ficheiros existentes; 174 v?deos H.264/AAC, 66,6 MB. Sintaxe games.js validada. Sem depend?ncias novas ou altera??es na app. Este site est?tico n?o tem scripts npm lint/test/build.
