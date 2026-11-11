# Série prática: conhecer e experimentar a app

Estado: 10 artigos em PT/EN/ES (30 páginas), gerados e verificados localmente. Sem commit, push ou pedido de indexação neste trabalho.

Pedido: valorizar a Fala+ e reforçar a presença nas pesquisas, com informação útil e verificável sobre a aplicação.

## Temas e intenção de pesquisa

1. App educativa Android sem publicidade — escolha de uma app e distinção entre ausência de anúncios e acesso gratuito.
2. Comunicar gratuito na Fala+ — primeiros passos com imagens e voz, sem pressionar a fala.
3. Como escolher jogos na Fala+ — decisão pela mecânica, interesse e acesso, com exemplos reais.
4. Fala+ para crianças que ainda não sabem ler — configuração e participação através de imagem e voz.
5. Percurso Guiado da Fala+ — preparação por tema e nível, com distinção da Caminhada.
6. Palavras do dia a dia na Fala+ — seleção de vocabulário e ligação às rotinas.
7. Brincar fora do ecrã depois da Fala+ — cinco propostas opcionais com materiais disponíveis.
8. Relatório semanal da Fala+ — leitura contextual dos registos e partilha do PDF.
9. Fala+ em Português, Inglês e Espanhol — escolha do idioma pela situação.
10. Primeira semana com a Fala+ — descoberta das preferências, sem metas de utilização.

As expressões escolhidas são hipóteses editoriais de intenção de pesquisa, não palavras-chave com volumes medidos. Não foi alegada procura quantificada, superioridade sobre concorrentes, eficácia clínica ou garantia de posicionamento. Os 15 artigos institucionais existentes foram considerados; esta série responde sobretudo a perguntas práticas de utilização.

## Fontes e decisões

- Funcionalidades e acesso: código e textos atuais da app (`src/i18n/pt.json`, `src/screens/ActivitiesScreen.jsx`, `src/screens/AdultAreaScreen.jsx`), página inicial e ficha oficial na Google Play, consultados em 06-11-2026.
- Mais de 50 jogos, 25 temas, mais de 1000 palavras; Comunicar gratuito e sem limites; Caminhada gratuita até ao nível 5; escolha direta no Modo Jogos, Percurso Guiado e Relatório Técnico Semanal como Premium. Não especificado o limite diário de Brincar porque há uma divergência entre o texto local e a ficha da loja.
- Sem afirmação geral de funcionamento sem internet, sem preços fixos ou promessas de disponibilidade para iOS.
- [ASHA — AAC](https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/): enquadramento geral de comunicação com imagens. A página pública devolveu 403 na ferramenta de pesquisa; foi confirmada a alternativa oficial do Practice Portal.
- [NAEYC — Technology and Interactive Media](https://www.naeyc.org/resources/topics/technology-and-media/resources): uso intencional de recursos digitais. Não apresentada como validação da app.
- [Google Search Essentials](https://developers.google.com/search/docs/essentials) e [conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): clareza temática, conteúdo para o leitor e ligações rastreáveis. Não garantem rastreio, indexação ou posicionamento.
- Mantidos layout, CSS e gerador existentes. Reutilizados Article, BreadcrumbList, FAQPage, canonical, hreflang, índices, tema Conhecer a Fala+ e sitemap. FAQPage não é apresentada como garantia de resultados enriquecidos.
- Marca localizada: Fala+, Talk+ e Habla+. Conteúdo e perguntas adaptados nos três idiomas.
- Preservadas as datas de modificação das entradas antigas do sitemap; acrescentadas apenas as 30 URLs novas.
- Nenhum ficheiro funcional da app ou Menu Necessidades alterado. Não se aplica build nem instalação de APK.

## Ficheiros e regeneração

- Fonte editorial: `_fonte/artigos/app-pratica-data.mjs`.
- Integração: `_fonte/artigos/catalogo.mjs`.
- Fontes geradas: 10 módulos novos por idioma em `_fonte/artigos/conteudo/`.
- Páginas: 10 diretórios novos por idioma em `artigos/`, `en/articles/` e `es/articulos/`.
- Atualizados os índices, categoria, ligações de continuidade pertinentes, destaque de artigo nas três homepages, `_fonte/artigos/urls.txt` e `sitemap.xml`.
- Geração: `node scripts/build-practical-app-articles.mjs` e `node _fonte/artigos/build.mjs`.
- Validação: `node scripts/validate-practical-app-articles.mjs`.

## Verificação

- 30 páginas: títulos e descrições, H1 único, palavra-chave na abertura, canonical, alternates PT/EN/ES, índice, sitemap, JSON-LD, ligações e recursos locais, FAQ e limites editoriais: passou.
- Regressão: `validate-app-info.mjs` (45 páginas), `validate-report-series.mjs` (75) e `validate-search-demand-series.mjs` (75): passou.
- Playwright já instalado na app: 30 páginas × 360/1366 px, 60 navegações HTTP 200, sem erros JavaScript, imagens partidas ou deslocamento horizontal. Recursos externos de analytics bloqueados durante a auditoria. Capturas PT a 360/1366 px; captura de telemóvel inspecionada.
- Artefactos no repositório da app: `artifacts/site-app-pratica-20261106/validation.json` e `android-sem-publicidade-{360,1366}.png`.
- Não há `package.json` no repositório do site, pelo que não se aplicam `npm run lint/test/build`; foram usados o gerador e as validações próprias.

## Pendente

Publicação dos ficheiros locais e verificação das URLs públicas. Depois da publicação, pedido de indexação e acompanhamento de impressões/cliques no Search Console, se houver acesso. Não foram recolhidas métricas de pesquisa nem atribuída revisão clínica nominal.
