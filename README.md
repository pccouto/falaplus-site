# Fala Mais — falamais.pt

Site estático da Fala Mais (Fala+), disponível no Google Play desde 28-10-2026. Inclui apresentação da app, artigos, guias de descoberta e 58 páginas de jogos em Português, Inglês e Espanhol. Existe também uma área editorial em português brasileiro.

## Tecnologia e pré-visualização

HTML, CSS e JavaScript sem dependências de execução ou instalação npm. Para pré-visualizar a partir desta pasta:

```sh
python -m http.server 8768 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8768/`. O domínio de produção é `https://falamais.pt/`, servido por GitHub Pages a partir da raiz de `main`.

## Fontes e geração

- Homepages: `index.html`, `en/index.html`, `es/index.html`; apresentação em `home.css`, comportamento em `home.js` e `main.js`.
- Artigos: `_fonte/artigos/`; executar `node _fonte/artigos/build.mjs`. Nunca editar manualmente os artigos gerados.
- Jogos: `_fonte/jogos/`; executar `python _fonte/jogos/build.py` (Python 3.12). Dados, instruções, propostas específicas e apresentação partilhada nessa pasta.
- Descoberta: `node scripts/build-discovery.mjs` gera `/explorar/`, `/en/explore/`, `/es/explorar/` e a página 404.
- Os três geradores preservam as entradas do sitemap que pertencem às outras áreas.
- Os artigos sobre jogos podem ligar para demonstrações através de `_fonte/artigos/discovery-games.mjs`.

Ordem recomendada para regenerar o conjunto:

```sh
node _fonte/artigos/build.mjs
python _fonte/jogos/build.py
node scripts/build-discovery.mjs
```

## Recursos e desempenho

Os recursos da app foram copiados para `assets/`; o site não depende do repositório da app para ser servido ou gerado. Os vídeos dos jogos vêm das versões `fb-` dos reels, com áudio, e apenas carregam após interação. Fontes Baloo 2 e Nunito em WOFF2, mantendo os TTF como alternativa e as licenças SIL OFL. `scripts/prepare-web-fonts.py` é uma ferramenta opcional de preparação que usa fontTools e Brotli já instalados no ambiente de edição; não é uma dependência do site.

## Validação

`python _fonte/jogos/validate.py` verifica as páginas dos jogos, links, metadados e sitemap. Existem verificadores específicos em `scripts/`. O registo da revisão global de 11-11-2026 está em `_fonte/REVISAO_SITE_2026-11-11.md`.

Manter PT, EN e ES em paridade, verificar apresentação em telemóvel e computador e rever o estado Git antes de publicar. O conteúdo da app deve ser factual; os jogos não são diagnósticos nem tratamentos. Não incluir no commit outras alterações pendentes sem verificar o âmbito.


### Cabe?alho comum

`node scripts/unify-headers.mjs` aplica o mesmo cabe?alho ?s p?ginas p?blicas, com navega??o localizada e alternates da p?gina atual. ? executado pelos geradores de artigos, jogos e descoberta. Estilos e menu em `assets/css/site-header.css` e `assets/js/site-header.js`. Verifica??o real: `node scripts/validate-headers.mjs` (Playwright j? instalado na app; sem depend?ncia de produ??o).
