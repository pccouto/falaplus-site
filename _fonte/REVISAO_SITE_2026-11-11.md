# Revisão global do site — 11-11-2026

Pedido do Paulo: potenciar o site com autonomia, dando continuidade às páginas dos jogos. A implementação mantém o site estático e independente da app, sem dependências novas. Não altera o Menu Necessidades ou código da app.

## Resultado

- Três hubs de descoberta: `/explorar/`, `/en/explore/` e `/es/explorar/`. Cada um liga para seis guias existentes e verificados no catálogo e seis grupos de jogos. Pesquisa com submissão GET para o índice de artigos, localizada em cada idioma.
- Homepages com texto inicial mais direto, dados atualizados para 58 jogos, atalhos por interesse, navegação direta para jogos/guias e melhor aproveitamento do primeiro ecrã. O destaque de artigo novo passa a ter ligação acionável no telemóvel.
- Navegação e rodapés dos artigos ligam para o catálogo e o hub. Os artigos do tema jogos incluem demonstrações selecionadas por assunto. O corpo científico e o desenho dos artigos foram preservados.
- Catálogo com filtros e pesquisa partilháveis em `?tipo=...&q=...`; a canonical mantém-se limpa. Ligações dos hubs abrem o grupo pretendido. A ausência de JavaScript mantém os 58 jogos visíveis.
- Páginas individuais com bloco de acompanhamento mais curto, limite clínico explícito e ligações para os guias, reduzindo repetição de texto entre os 174 jogos.
- Página 404 trilingue com caminhos úteis, `noindex,follow` e sem inclusão no sitemap.
- Canonical e alternates nas três políticas de privacidade; só metadados e recursos foram atualizados, sem alterar o texto jurídico. Títulos dos temas BR diferenciados dos PT. Termos de utilização existentes incluídos no sitemap.

## Desempenho

Conversão integral das fontes locais para WOFF2, com os TTF originais como alternativa. Todos os glifos, eixos variáveis e avanços horizontais foram comparados automaticamente e preservados.

| Fonte | Antes, TTF | WOFF2 |
| --- | ---: | ---: |
| Baloo 2 | 683 200 B | 180 272 B |
| Nunito | 276 932 B | 100 996 B |
| Total | 960 132 B | 281 268 B |

Redução de 70,7% (678 864 bytes) no conjunto. Confirmado no navegador que ambos os WOFF2 carregam e que não há transferência TTF adicional. Atualizados os preloads e as versões de cache nos geradores e páginas. Nenhum vídeo é descarregado antes de interação nos percursos testados.

## Ficheiros de implementação

- Homepages PT/EN/ES, variantes BR geradas e `README.md`.
- `_fonte/artigos/build.mjs`, `i18n.mjs`, novo `discovery-games.mjs` e páginas regeneradas de artigos/temas/índices. O código já existente, incluindo o trabalho pendente anterior, foi preservado.
- `_fonte/jogos/build.py`, `layout.py`, páginas de jogos/catálogos e `assets/js/games.js`.
- `scripts/build-discovery.mjs`, `scripts/prepare-web-fonts.py`.
- `assets/css/discovery.css`, `home.css`, `styles.css`, fontes WOFF2 e referências a fontes nos templates/páginas.
- Políticas de privacidade: apenas metadados e referências a CSS. Termos: apenas referência a CSS.
- Novos hubs, `404.html` e `sitemap.xml`.

## Verificações

- Auditoria estática de 1 208 páginas HTML: zero ligações internas partidas, zero erros de JSON-LD/metadados verificados, zero títulos duplicados e zero URLs duplicados no sitemap. Fora do sitemap ficam a página de verificação Google, três redirecionamentos de instalação e a página 404, intencionalmente.
- Verificação dos 177 documentos dos jogos: canonical, alternates, JSON-LD, títulos únicos, ligações e sitemap.
- 45 verificações de página/largura no Chromium: PT/EN/ES, 360/768/1366 px, home/hub/índice de artigos/artigo de jogos/catálogo. Sem overflow horizontal ou exceções JavaScript. Menu com Escape, pesquisa de artigos a partir do hub, estado de filtros após recarregar, ligação artigo→jogo, formulários sem submissão e fallback sem JavaScript.
- 26 visitas adicionais do verificador BR: metadados, alternates recíprocos, sitemap, ligações/âncoras, recursos, JSON-LD, pesquisa, menu e FAQ.
- 45 páginas de informação da app validadas pelo verificador existente.
- Geração completa dos artigos, jogos e hubs concluída. Sintaxe JavaScript verificada. Verificação de whitespace Git concluída, reconhecendo CRLF do Windows.
- Os 174 vídeos não foram alterados nesta revisão; a validação anterior de H.264 e áudio AAC mantém-se aplicável.

As capturas e os relatórios de execução estão em `fala-plus/tmp/site-boost/` e `fala-plus/tmp/br-preview/`. Sem instalação de dependências, sem submissões reais do formulário e sem operações na app.

## Fontes de orientação SEO

- Google Search Central: https://developers.google.com/search/docs/appearance/video
- Google Search Central, políticas de spam: https://developers.google.com/search/docs/essentials/spam-policies

Preferiram-se ligações úteis, conteúdo próprio de cada jogo e informação clara. Não se inventaram avaliações, datas de publicação de vídeos, revisões clínicas ou resultados terapêuticos. Não existe promessa de posição no Google ou de elegibilidade para resultados enriquecidos de vídeo.

## Estado e limites

Implementação local concluída e validada. Sem commit, push ou publicação nesta revisão. O repositório já continha muitas alterações anteriores; não foram descartadas nem publicadas inadvertidamente. Uma publicação deve verificar o conjunto que pretende entregar, incluindo as fontes e os recursos de que os geradores dependem.

O comportamento de mensagens enviadas pelo serviço externo de contacto e o ranking/indexação reais não foram testados. O teste de formulário confirmou a validação local sem transmitir mensagens. A página 404 foi verificada localmente; o estatuto HTTP 404 em caminhos inexistentes depende do GitHub Pages após publicação.

## Ajuste pedido: área do vídeo

Removidos o cartão lilás, círculo decorativo, contorno exterior e espaçamento desse contentor. O vídeo apresenta-se diretamente sobre o fundo da página, com título e indicação de som discretos. Retirada também a moldura artificial de telemóvel. Estilo partilhado por PT/EN/ES, incluindo ecrãs estreitos.


## Publica??o integral e cabe?alhos comuns ? 11-11-2026

Pedido do Paulo: publicar todo o trabalho pendente e uniformizar os cabe?alhos. Integra??o num worktree a partir da vers?o p?blica, preservando as s?ries de consultas/terapias e ensino/brincar que n?o constavam do cat?logo local. Mantidos os novos suplementos, conte?dos pr?ticos, ?rea BR, jogos, descoberta, fontes e restantes altera??es pendentes.

Novo cabe?alho comum aplicado por scripts/unify-headers.mjs ?s 1263 p?ginas do sitemap. CSS e JavaScript pr?prios em assets/css/site-header.css e assets/js/site-header.js, sem interferir com a apresenta??o dos artigos. Os tr?s geradores reaplicam o cabe?alho. Navega??o localizada, log?tipo oficial, idiomas com alternates equivalentes, Google Play, menu m?vel, Escape com reposi??o do foco e navega??o dispon?vel sem JavaScript. Removido ficheiro cache Python do Git e adicionadas exclus?es.

Verifica??es: 1263 URLs ?nicas e existentes; preservadas todas as 1010 URLs p?blicas anteriores; 63830 refer?ncias internas sem destinos inexistentes; JSON-LD v?lido; 177 documentos dos jogos e 8301 liga??es; 174 v?deos H.264/AAC validados (66,6 MB). Validadores das s?ries de procura, app pr?tica, informa??o da app, relat?rios, pesquisas e consultas/terapias conclu?dos. Validador BR: 26 visitas reais sem erros, com links/?ncoras, idiomas rec?procos, pesquisa, menu e FAQ. Sem depend?ncias novas nem altera??es na app.

Cabeçalho: 51 visitas reais em PT/BR/EN/ES a 360, 768 e 1366 px, com menu móvel, Escape/foco e ausência de overflow horizontal ou erros JavaScript.

## Disponibilidade Android e instala??o ? 11-11-2026

Bola de disponibilidade verde, sem pulsa??o; avisos verdes com contraste adequado em fundos claros e escuros. Bot?es Android uniformizados em verde nas homepages, artigos, jogos e hubs; m?nimo de 48 px de altura e foco vis?vel. Selo oficial Google Play preservado com enquadramento verde suave. CSS partilhado em assets/css/install-actions.css, aplicado pelo normalizador ?s 1263 p?ginas em PT/BR/EN/ES e preservado pelos tr?s geradores. Liga??es mantidas para a p?gina oficial da app; a instala??o requer confirma??o no Google Play.

Valida??o: 51 visitas reais no Chromium, menu m?vel/Escape/foco sem erros ou overflow; 177 p?ginas de jogos com 8478 liga??es verificadas; 30 p?ginas de app pr?tica validadas. Sem depend?ncias novas e sem altera??es na app Android.
