# Dez artigos com oportunidades de pesquisa — 09-11-2026

Estado: lote de publicação autorizado por Paulo em 09-11-2026, com dez artigos em PT/EN/ES (30 páginas). A confirmação dos endereços públicos é registada no guia editorial após o deployment. Pedido: dez temas propostos e aceites por Paulo com «siga».

## Seleção e limites dos dados

Search Console consultado em 09-11-2026, janela «3 meses», com dados apresentados de 05-10 a 07-11: 53 cliques, cerca de 1,88 mil impressões e 296 consultas visíveis. Exemplos: «juegos para aprender a leer» (15 impressões), «aprender a leer juegos» (13), «juegos de atencion para niños» (8), «visual memory games for kids» (7). Impressões do site não são volumes de procura global. Sugestões Google recolhidas com `hl=pt-PT&gl=pt`: leitura aos 6 anos, sílabas para formar palavras/1.º ano, letras para crianças, motricidade fina/atividades, atenção sustentada, compreensão leitora/atividades, disgrafia/disortografia e criança que não responde ao nome. Sugestões não fornecem volumes nem constituem um ranking. Memória auditiva é uma extensão editorial do tema memória, sem sinal específico de autocomplete nessa formulação.

## Conteúdos e rotas

| Tema | PT | EN | ES |
|---|---|---|---|
| Leitura aos 6 anos | /artigos/jogos-aprender-ler-6-anos/ | /en/articles/learning-to-read-games-age-6/ | /es/articulos/juegos-aprender-leer-6-anos/ |
| Sílabas | /artigos/jogos-silabas-formar-palavras/ | /en/articles/syllable-games-building-words/ | /es/articulos/juegos-silabas-formar-palabras/ |
| Letras e sons | /artigos/jogos-letras-sons-criancas/ | /en/articles/letter-sound-games-for-children/ | /es/articulos/juegos-letras-sonidos-ninos/ |
| Motricidade fina | /artigos/coordenacao-motora-fina-atividades/ | /en/articles/fine-motor-activities-for-children/ | /es/articulos/motricidad-fina-actividades-ninos/ |
| Atenção sustentada | /artigos/jogos-atencao-sustentada-criancas/ | /en/articles/sustained-attention-games-children/ | /es/articulos/juegos-atencion-sostenida-ninos/ |
| Memória visual | /artigos/memoria-visual-criancas-jogos/ | /en/articles/visual-memory-games-children/ | /es/articulos/memoria-visual-juegos-ninos/ |
| Compreensão leitora | /artigos/compreensao-leitora-le-mas-nao-compreende/ | /en/articles/reads-words-but-does-not-understand/ | /es/articulos/comprension-lectora-lee-no-comprende/ |
| Disgrafia/disortografia | /artigos/disgrafia-disortografia-diferencas/ | /en/articles/dysgraphia-spelling-difficulties-differences/ | /es/articulos/disgrafia-disortografia-diferencias/ |
| Resposta ao nome | /artigos/crianca-nao-responde-nome/ | /en/articles/child-not-responding-to-name/ | /es/articulos/nino-no-responde-nombre/ |
| Memória auditiva | /artigos/memoria-auditiva-criancas-jogos/ | /en/articles/auditory-memory-games-children/ | /es/articulos/memoria-auditiva-juegos-ninos/ |

## Decisões editoriais e técnicas

- Dados centrais em `procura-2026-11-data.mjs`; trinta módulos pequenos importam os textos. O construtor existente gera as páginas; não foram editadas páginas geradas à mão nem estilos.
- Catálogo integrado com `DEMAND_CATALOG`. Índices, temas, recomendações, destaques da homepage, sitemap e lista de URLs atualizados pelo construtor.
- Cada artigo contém enquadramento, três propostas, adaptações, procura de apoio, limites, quatro FAQ, fontes e relação com a app.
- Exemplos práticos são sugestões pedagógicas, não protocolos validados. Sem promessas de transferência da memória/atenção ou de eficácia clínica da app.
- Leitura: articulação com ensino escolar, sem adivinhação pela imagem. Exemplos ingleses próprios; não foram traduzidas mecanicamente divisões silábicas portuguesas.
- Escrita: terminologia variável entre profissionais e países; sem transformar disortografia numa categoria diagnóstica universal inglesa.
- Resposta ao nome: audição e desenvolvimento contextualizados; um sinal não confirma/exclui autismo. Sem testes domésticos assustadores, contacto visual forçado ou condicionamento de necessidades.
- Funções da app confirmadas em `src/i18n/pt.json`, `src/data/activities.js` e `src/reports/gameMeta.js`: cartões de comunicação com imagem/voz, jogo de pares, imagem em falta e ordenação de histórias. Sem alterações ao Menu Necessidades.
- Alterações locais anteriores mantidas. Cópia dos HTML anteriores à geração em `App/fala-plus/tmp/search-demand-november-before-build.json`. As alterações adicionais em artigos anteriores são recomendações geradas «Continuar a ler», não alterações ao corpo editorial.

## Fontes

URLs de referência em `SOURCES`, no módulo editorial. Consultados IES/WWC (competências fundamentais e materiais para famílias), ASHA (leitura/escrita), NHS de Bath (motricidade), Somerset (perceção visual), Norfolk/Devon (atenção/escuta), Humber (memória auditiva), HSE (audição), CDC (sinais de autismo). A página Reading Rockets foi localizada com excerto indexado; a leitura direta devolveu 403. A orientação de sílabas está cruzada com IES. Não foram inventados estudos, resultados quantitativos nem revisão profissional nominal.

## Verificação

- `node scripts/build-demand-november-articles.mjs` — 30 módulos.
- `node _fonte/artigos/build.mjs` — geração concluída.
- `node scripts/validate-demand-november-articles.mjs` — 30 páginas: catálogo, metadados, H1, hreflang, canonical, JSON-LD, FAQ, limites, ligação à app, ligações/âncoras locais, índices e sitemap.
- Validações existentes `validate-practical-app-articles.mjs`, `validate-search-demand-series.mjs`, `validate-report-series.mjs` — passaram (30 + 75 + 75 páginas).
- `node --check` nos novos módulos principais e `git -c core.safecrlf=false diff --check` — passaram.
- Browser: `scripts/preview-demand-november-articles.mjs`, usando o Playwright já instalado na app — passaram 60 navegações (30 páginas × 360/1366 px), sem erros JavaScript, HTTP local, imagens iniciais partidas, deslocamento horizontal ou falhas de abertura das FAQ. Resultados e seis capturas em `App/fala-plus/tmp/demand-november-preview/`; `results.json` contém zero erros. Inspecionadas visualmente as capturas de leitura em 360 px, resposta ao nome em 360 px e disgrafia em 1366 px. O ícone final diferido aparece em branco na captura longa, comportamento conhecido do layout; não é uma falha dos artigos.
- O site é estático e não tem `package.json`; `npm run lint/test/build` não se aplica. Não foram instaladas dependências.

## Pendências

Publicação autorizada e preparada sobre `origin/main` atualizado (`c0baebe1`), preservando as séries já publicadas. Não inclui outros rascunhos locais. Datas do sitemap dos URLs existentes preservadas. As alterações geradas em corpos de artigos anteriores foram excluídas deste commit. Pedido de indexação não efetuado. Revisão clínica externa não atribuída. As fontes fundamentam princípios e não validam estes exemplos como intervenção. Nenhuma mudança na app Android; não se aplica instalação de APK.
