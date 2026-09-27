# Fala+ — Site de apresentação

## Objetivo

Apresentar a app Fala+ e levar as pessoas a instalá-la no Google Play (Android).
Público: famílias, terapeutas da fala e educadores, em português de Portugal.

## Regra principal: separação total da app

- Este projeto é **independente** da app. A app vive em `Desktop\FalaPlus\App\fala-plus` e tem o seu próprio repositório privado.
- **Nunca** ler, alterar, compilar ou referenciar ficheiros da pasta da app a partir daqui.
- Imagens, vídeos e tipos de letra da app são **copiados** para `assets/` quando for preciso (pedido explícito do Paulo). O site nunca aponta para caminhos fora desta pasta.
- A política de privacidade continua no repositório `falaplus-legal` (endereços já registados na Play Console). O site apenas liga para lá.

## Tecnologia

- HTML + CSS + um pouco de JavaScript, **sem build e sem dependências**.
- Publicado com GitHub Pages a partir da branch `main` (raiz do repositório).
- `index.html` — página única; `styles.css` — estilos; `main.js` — ligação do Google Play (`PLAY_URL`, único sítio a alterar) e vídeos que tocam quando aparecem no ecrã.

## Conteúdo

- Só afirmar o que a app realmente faz. Números e funcionalidades (ex.: "mais de 40 jogos", "sem publicidade", planos) têm de ser confirmados com o Paulo sempre que a app mudar.
- Não publicar nomes, fotografias ou dados de crianças reais em capturas de ecrã.
- Mascotes animadas (Lottie) **não** entram no site até o Paulo confirmar que a licença permite uso promocional.
- Texto neutro: "criança", nunca "filho" (terapeutas também usam a app).

## Estilo

- Cores e tipos de letra da app (Baloo 2 para títulos, Nunito para texto; roxo `#6d4ce8` → `#a855f7`).
- Pensado primeiro para telemóvel; tem de funcionar bem a partir de 360 px de largura.
