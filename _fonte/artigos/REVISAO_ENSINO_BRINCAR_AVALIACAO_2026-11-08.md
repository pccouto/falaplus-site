# Ensino, brinquedos, brincadeiras e avaliação — 08-11-2026

10 temas novos, cada um em Português, Inglês e Espanhol: 30 páginas. Mantidos o layout, os estilos e os componentes editoriais existentes.

## Temas

1. Ensinar por pequenos passos e retirar a ajuda.
2. Generalizar aprendizagens para a vida diária.
3. Verificar a compreensão sem exigir fala.
4. Brinquedos acessíveis: escolher pela participação.
5. Brinquedos de causa e efeito sem sobrecarga.
6. Histórias com objetos: brincar sem exigir fala.
7. Jogos cooperativos sem deixar ninguém de fora.
8. Avaliação dinâmica: observar como a criança aprende.
9. Observar a brincadeira para compreender a participação.
10. Avaliar a comunicação em crianças multilingues.

## Decisões editoriais

- Pesquisados os temas existentes antes de escolher aprofundamentos concretos.
- Fontes primárias institucionais consultadas em 08-11-2026: ASHA, NAEYC, Education Endowment Foundation, American Academy of Pediatrics, CDC e UCSF Benioff Children’s Hospitals. URLs guardados nas fontes editoriais e apresentados nas páginas.
- Distintas orientações profissionais e exemplos pedagógicos originais. Não foram inventados estudos, resultados quantitativos, instrumentos ou limiares diagnósticos.
- As sugestões não são protocolos validados de tratamento ou avaliação. Não foi atribuída revisão nominal por profissional clínico.
- Mantidas diferenças entre apoio de acesso e pista temporária, observação e diagnóstico, acerto no jogo e transferência para o quotidiano.
- Considerados comunicação multimodal, CAA, diferenças sensoriais e motoras, interesses, recusa e pausas. Não é exigida fala nem contacto ocular como condição de participação.
- Sem afirmações de eficácia clínica da app. Um bloco por página liga ideias a funcionalidades reais, com nomes localizados: Fala+/Talk+/Habla+, Comunicar/Communicate, Dica/Hint/Pista e Voz Mágica/Magic Voice.
- Não foram apresentados direitos ou procedimentos jurídicos. As fontes internacionais são usadas para orientação científica e educativa; a distinção conceptual do CDC não universaliza os calendários de saúde dos Estados Unidos.

## Fontes e ficheiros

- `ensino-brincar-avaliacao-data.mjs`, `ensino-brincar-atividades.mjs`, `ensino-brincar-avaliacoes.mjs`: conteúdo multilingue e referências.
- `catalogo-ensino-brincar-avaliacao.mjs`, importado pelo catálogo principal.
- 30 fontes em `conteudo/pt`, `conteudo/en`, `conteudo/es` e respetivas páginas geradas.
- `scripts/build-child-learning-articles.mjs`: gera a série pelo gerador editorial existente.
- Atualizados índices gerais, navegação dos temas, destaque inicial nos três idiomas, `_fonte/artigos/urls.txt` e `sitemap.xml`.

## Validação

30 páginas verificadas: H1 único, canonical exato, hreflang e seletor dos três idiomas, Article/BreadcrumbList/FAQPage válidos, quatro FAQ por artigo, metadados, ligações internas e recursos locais. Seis palavras-chave por versão; descrições com menos de 155 caracteres e títulos SEO até 65 caracteres.

60 navegações Chromium: 360 × 800 e 1366 × 900, sem erros JavaScript nem deslocamento lateral, com um bloco de ligação à app por página. Seis verificações de pesquisa, nos três idiomas e nas duas larguras. Capturas representativas inspecionadas.

Sitemap: exatamente 30 URLs novas; entradas e datas anteriores preservadas. Removidas do conjunto de publicação diferenças incidentais que o gerador criou em 828 ficheiros anteriores.

Publicação preparada numa worktree limpa de `origin/main` (`3f7bddea`), preservando a cópia original do site e os seus trabalhos locais. Validação e relatório detalhado na app: `tmp/validate-child-learning-articles.mjs` e `tmp/child-learning-validation.json`.

Não foram instaladas dependências. Lint/test/build da app e APK não se aplicam: apenas conteúdo do site foi alterado. Indexação no Search Console não solicitada; atualizar o sitemap não garante indexação imediata.
