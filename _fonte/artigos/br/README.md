# Português brasileiro — primeira fase, 10-11-2026

Estado: implementação local; sem commit, push ou pedido de indexação nesta tarefa.

## Conteúdo e manutenção

- 13 páginas BR: `/br/`, `/br/app/`, `/br/artigos/`, oito artigos e dois índices de tema.
- Fontes editoriais independentes em `../conteudo/br/`; seleção em `catalogo.mjs` desta pasta, integrada no catálogo geral. Só os oito artigos revistos recebem `br.live`.
- O gerador comum mantém o desenho dos artigos. `pages.mjs` reutiliza os componentes da homepage existente para a entrada BR e a apresentação da app; não cria outro sistema visual.
- `/app/`, `/en/app/` e `/es/app/` continuam a ser redirecionamentos `noindex`. Não são alternates da nova apresentação `/br/app/`, que tem canonical próprio.
- `hreflang` recíproco PT/BR/EN/ES nas páginas equivalentes, com `x-default` PT. A página de apresentação da app tem apenas o alternate BR, pois ainda não existe equivalente indexável nas outras línguas.
- As páginas sem artigo BR não recebem um alternate para uma página inexistente. Links editoriais para artigos ainda não localizados aparecem como texto, conforme o comportamento do gerador existente.
- Botões Google Play usam `hl=pt_BR&gl=BR`. Preços em euros e promoção da homepage original são omitidos na versão BR.
- Referências portuguesas à DGS removidas desta versão. Não se atribuem regras do SNS ao SUS. Referências internacionais mantidas; fonte ASHA sobre marcos acrescentada. Não foi atribuída revisão clínica nominal.
- A expressão de pesquisa “troca de letras na fala” é explicada como produção de sons. Não se transplantou a tabela de aquisição de sons de outras línguas para o português brasileiro.
- As prioridades são hipóteses editoriais apoiadas em sugestões de pesquisa; não há volumes absolutos brasileiros medidos nem promessa de posicionamento.

## Gerar e verificar

```text
node _fonte/artigos/build.mjs --br-only
node scripts/validate-br.mjs
```

O modo seletivo gera BR e atualiza apenas as ligações de descoberta BR das páginas equivalentes já geradas. Preserva os restantes artigos, entradas do sitemap e alterações locais anteriores. O comando normal continua a gerar o conjunto completo, incluindo BR. Não editar manualmente as páginas geradas.

Validação: 26 navegações Playwright (13 URLs × 360/1366 px), sem dependências instaladas. Verifica canonical próprio, idioma, H1, ausência de noindex, alternates recíprocos, sitemap, links locais e âncoras, imagens, JSON-LD, menu, FAQ, pesquisa e cartões em português. Capturas e relatório em `App/fala-plus/tmp/br-preview/`.

Resultado final: 26 navegações aprovadas, incluindo o cabeçalho sem controlos cortados. Geração completa aprovada numa cópia temporária isolada (1014 páginas listadas pelo gerador), sem regenerar o restante trabalho no checkout principal. Segunda geração seletiva sem diferenças nos ficheiros (idempotência). `node --check` e `git diff --check` aprovados nos ficheiros de implementação relevantes.

Alterações partilhadas: `build.mjs`, `catalogo.mjs`, `i18n.mjs`, `main.js` (mensagens PT-BR), `artigos-interactions.js` (reconhecimento de ambas as variantes de português) e `home.css` (espaço para quatro idiomas no cabeçalho pequeno). Sem dependências novas. O site não tem package.json nem scripts npm de lint/test/build; usam-se o gerador, verificação de sintaxe e o validador acima.

## Publicação e medição

O checkout tinha 309 entradas no estado Git antes do trabalho. Rever o âmbito do commit sem incluir automaticamente o restante trabalho local. Depois de publicar, confirmar as 13 URLs públicas, submeter sitemap/pedir indexação no Search Console e registar a data efetiva. Contar 4–6 semanas a partir dessa data para comparar impressões, cliques e consultas filtradas por país Brasil e caminho `/br/`.

A segunda fase depende desses dados. Candidatos: atraso de fala aos 2 anos, compreende mas não fala, apps para atraso de fala e Comunicar gratuito. Conteúdos legais/institucionais exigem investigação própria do Brasil.

Fontes consultadas nesta revisão:

- https://developers.google.com/search/docs/specialty/international/localized-versions
- https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/
- https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/
- https://www.asha.org/practice-portal/clinical-topics/autism/
- https://www.asha.org/practice-portal/clinical-topics/fluency-disorders/
- https://www.asha.org/public/developmental-milestones/communication-milestones/
- https://www.unicef.org/documents/care-child-development
- https://www.cochrane.org/pt/evidence/CD015268_do-children-early-language-difficulties-keep-facing-problems-they-grow
