// Editorial series, 2026-10-27. Activities are practical suggestions, not tested interventions.
// Each language is authored here; thin content modules expose the existing article schema.
const topics = [
  { type: 'spatial', pt: {
    slug: 'blocos-de-construcao-aprendizagem', title: 'Blocos de construção e aprendizagem',
    lead: 'Torres, pontes e caminhos: ideias para explorar equilíbrio, espaço e palavras com blocos de construção.',
    intro: 'Uma torre que cai oferece uma pergunta interessante: o que podemos mudar? Os blocos de construção permitem experimentar soluções visíveis, sem exigir uma única construção correta. O adulto pode acompanhar a descoberta sem construir tudo pela criança.',
    learning: 'Ao comparar bases, rodar peças e deixar uma passagem, a criança encontra problemas de posição e dimensão. Palavras como «por baixo», «ao lado» e «mais largo» ganham um referente concreto. A orientação da NAEYC sobre blocos descreve este tipo de interação; não demonstra que um conjunto comercial aumente a inteligência.',
    steps: ['Disponha poucos blocos grandes num chão estável. Deixe a criança escolher entre empilhar, alinhar ou transportar.', 'Proponha uma ponte para um carrinho. Experimente passar o carro e comente: «Está a tocar no teto.» Espere pela ideia da criança.', 'Se a ponte cair, compare duas bases. Convide a mudar uma peça de cada vez, sem exigir que copie o modelo do adulto.'],
    adapt: 'Para começar, bastam duas peças fáceis de agarrar. Para aumentar o desafio, proponha uma passagem mais larga ou uma construção em conjunto. Uma base antiderrapante pode ajudar quem tem dificuldade em estabilizar as peças; indicar onde colocar um bloco também é participar.',
    safety: 'Escolha peças adequadas à idade, sem lascas nem partes pequenas destacáveis. Evite construções pesadas acima da criança e peças com ímanes acessíveis.',
    faq: [['É preciso comprar blocos de uma marca específica?', 'Não. O interesse está nas possibilidades de combinar e experimentar. Tamanho, estabilidade, acessibilidade e segurança contam mais do que a marca.'], ['E se a criança só quiser deitar a torre abaixo?', 'Pode ser a parte mais divertida. Combine um sinal para derrubar e volte a construir se ambos quiserem; não transforme a torre acabada numa obrigação.']],
    bridge: 'Escolher uma peça, pedir ajuda ou anunciar que terminou são oportunidades de comunicação durante a construção.'
  }, en: {
    slug: 'building-blocks-and-learning', title: 'Building blocks and learning',
    lead: 'Towers, bridges and roads: ways to explore balance, space and words through building blocks.',
    intro: 'A falling tower raises an interesting question: what could we change? Building blocks make it possible to try visible solutions without one correct finished model. An adult can join the exploration while leaving the construction to the child.',
    learning: 'Comparing bases, turning blocks and leaving a gap create practical problems involving position and size. Words such as “under”, “beside” and “wider” have something concrete to refer to. NAEYC guidance describes these interactions; it does not establish that a commercial construction set increases intelligence.',
    steps: ['Offer a few large blocks on a stable floor. Let the child stack, line up or carry them.', 'Suggest a bridge for a toy car. Try driving underneath and comment: “It touches the roof.” Wait for the child’s idea.', 'If the bridge falls, compare two bases. Invite a change to one block at a time without requiring a copy of an adult model.'],
    adapt: 'Two easy-to-grip blocks may be enough to begin. A wider crossing or a shared construction adds a challenge. A non-slip base can help with stability; showing a partner where to put a block is also participation.',
    safety: 'Choose age-appropriate pieces without splinters or detachable small parts. Avoid heavy constructions above the child and accessible magnets.',
    faq: [['Do children need a particular brand of blocks?', 'No. Look at opportunities to combine and experiment. Size, stability, accessibility and safety matter more than the brand.'], ['What if a toddler only knocks towers down?', 'That may be the enjoyable part. Agree on a signal for knocking down, then rebuild if both people want to. A finished tower is not compulsory.']],
    bridge: 'Choosing a block, asking for help or saying that play is finished creates opportunities to communicate during construction.'
  }, es: {
    slug: 'bloques-de-construccion-y-aprendizaje', title: 'Bloques de construcción y aprendizaje',
    lead: 'Torres, puentes y caminos: ideas para explorar equilibrio, espacio y palabras con bloques de construcción.',
    intro: 'Una torre que cae plantea una pregunta interesante: ¿qué podemos cambiar? Los bloques de construcción permiten probar soluciones visibles sin exigir un único modelo correcto. El adulto puede acompañar la exploración dejando que el niño dirija la construcción.',
    learning: 'Comparar bases, girar piezas y dejar un paso plantea problemas de posición y tamaño. Palabras como «debajo», «al lado» y «más ancho» tienen una referencia concreta. Las orientaciones de NAEYC describen estas interacciones; no prueban que un conjunto comercial aumente la inteligencia.',
    steps: ['Ofrezca pocos bloques grandes sobre un suelo estable. Deje elegir entre apilar, alinear o transportar.', 'Proponga un puente para un coche. Pruebe a pasarlo y comente: «Toca el techo». Espere la idea del niño.', 'Si cae el puente, compare dos bases. Invite a cambiar una pieza cada vez sin exigir una copia del modelo adulto.'],
    adapt: 'Para empezar pueden bastar dos piezas fáciles de agarrar. Un paso más ancho o una construcción compartida añade dificultad. Una base antideslizante puede facilitar la estabilidad; indicar dónde colocar una pieza también es participar.',
    safety: 'Elija piezas adecuadas a la edad, sin astillas ni partes pequeñas desmontables. Evite construcciones pesadas encima del niño e imanes accesibles.',
    faq: [['¿Hace falta comprar bloques de una marca concreta?', 'No. Importan las posibilidades de combinar y experimentar. El tamaño, la estabilidad, la accesibilidad y la seguridad cuentan más que la marca.'], ['¿Y si el niño solo quiere derribar la torre?', 'Puede ser la parte divertida. Acuerden una señal para derribar y vuelvan a construir si ambos quieren; terminar una torre no es obligatorio.']],
    bridge: 'Elegir una pieza, pedir ayuda o indicar que ha terminado crea oportunidades de comunicación durante la construcción.'
  } },
  { type: 'puzzle', pt: {
    slug: 'puzzles-para-criancas-aprendizagem', title: 'Puzzles para crianças: escolher e acompanhar',
    lead: 'Como escolher puzzles para crianças, ajustar o desafio e ajudar sem resolver todas as peças.',
    intro: 'Os puzzles para crianças convidam a olhar para uma parte e imaginar onde pertence. O desafio pode ser agradável quando existe margem para tentar, pedir ajuda e parar. O número de peças, sozinho, não diz se um puzzle é adequado.',
    learning: 'Levine e colegas observaram uma associação entre brincar com puzzles e desempenho posterior numa tarefa espacial. O estudo foi observacional: não prova que os puzzles causaram a diferença. Em casa, podemos falar com segurança de oportunidades para comparar contornos, rodar peças e procurar relações entre partes.',
    steps: ['Escolha uma imagem familiar e poucas peças grandes. Veja primeiro a imagem completa, se a criança quiser.', 'Coloque duas peças possíveis perto do espaço. Comente o contorno ou a cor em vez de perguntar continuamente «onde é?».', 'Ofereça uma pista pequena: aproximar a peça, indicar o canto ou rodá-la parcialmente. Deixe a criança decidir se quer experimentar.'],
    adapt: 'Puzzles com pegas podem facilitar a preensão. Um fundo simples e bom contraste reduzem a informação visual. Para aumentar o desafio, retire uma pista de cada vez; não aumente simultaneamente peças, ruído e pressão de tempo.',
    safety: 'Verifique pegas e peças soltas. Respeite a idade indicada e a tendência para levar objetos à boca. Não use peças partidas ou com arestas.',
    faq: [['Quantas peças deve ter um puzzle aos 2 ou 3 anos?', 'Não existe um número universal. Observe a facilidade de agarrar, o reconhecimento da imagem, a experiência e o interesse, respeitando sempre a segurança indicada pelo fabricante.'], ['Devo corrigir cada peça colocada no sítio errado?', 'Dê tempo para a criança verificar. Pode mostrar como comparar o contorno ou oferecer ajuda, sem conduzir a mão à força.']],
    bridge: 'Pedir uma pista, escolher uma imagem ou recusar continuar são mensagens úteis durante um puzzle.'
  }, en: {
    slug: 'puzzles-for-toddlers-and-preschoolers', title: 'Puzzles for toddlers and preschoolers',
    lead: 'Choose suitable puzzles, adjust the challenge and offer help without solving every piece.',
    intro: 'Puzzles for toddlers and preschoolers invite children to look at a part and consider where it belongs. The challenge can be enjoyable when there is room to try, ask for help and stop. Piece count alone does not determine suitability.',
    learning: 'Levine and colleagues found an association between early puzzle play and later performance on a spatial task. This observational study does not show that puzzles caused the difference. Practical opportunities include comparing outlines, rotating pieces and exploring relationships between parts.',
    steps: ['Choose a familiar picture with a few large pieces. Look at the completed picture first if the child wants to.', 'Place two possible pieces near a gap. Comment on an outline or colour rather than repeatedly asking “where does it go?”.', 'Offer a small clue: move a piece nearer, indicate a corner or partly rotate it. Let the child decide whether to try.'],
    adapt: 'Knob puzzles may make grasping easier. A simple background and clear contrast reduce visual clutter. Increase difficulty by removing one clue at a time, rather than adding pieces, noise and time pressure together.',
    safety: 'Check knobs and loose pieces. Follow age guidance and consider whether the child mouths objects. Avoid damaged pieces or sharp edges.',
    faq: [['How many puzzle pieces are suitable for a 2-year-old?', 'There is no universal number. Consider grasp, picture recognition, experience and interest, while always respecting manufacturer safety guidance.'], ['Should adults correct every misplaced piece?', 'Allow time to check. Show how to compare the outline or offer help without forcing the child’s hand.']],
    bridge: 'Asking for a clue, choosing a picture or refusing to continue are useful messages during puzzle play.'
  }, es: {
    slug: 'puzles-para-ninos-de-2-a-3-anos', title: 'Puzles para niños: elegir y acompañar',
    lead: 'Cómo elegir puzles, ajustar la dificultad y ayudar sin resolver todas las piezas por el niño.',
    intro: 'Los puzles para niños invitan a observar una parte e imaginar dónde encaja. El reto puede resultar agradable cuando hay espacio para probar, pedir ayuda y parar. El número de piezas no determina por sí solo si un puzle es adecuado.',
    learning: 'Levine y sus colegas observaron una asociación entre jugar con puzles y el rendimiento posterior en una tarea espacial. El estudio fue observacional: no demuestra que los puzles causaran la diferencia. Sí podemos ofrecer oportunidades para comparar contornos, girar piezas y explorar relaciones entre partes.',
    steps: ['Elija una imagen familiar con pocas piezas grandes. Miren la imagen completa si el niño quiere.', 'Acerque dos posibles piezas al hueco. Comente el contorno o el color sin preguntar continuamente «¿dónde va?».', 'Ofrezca una pista pequeña: acerque la pieza, señale una esquina o gírela un poco. Deje decidir si quiere probar.'],
    adapt: 'Las piezas con agarres pueden facilitar la manipulación. Un fondo sencillo y buen contraste reducen la información visual. Para aumentar el reto, retire una pista cada vez; evite añadir a la vez piezas, ruido y presión de tiempo.',
    safety: 'Revise agarres y piezas sueltas. Respete la edad indicada y tenga en cuenta si el niño se lleva objetos a la boca. Retire piezas rotas o con bordes cortantes.',
    faq: [['¿Cuántas piezas son adecuadas entre los 2 y 3 años?', 'No hay un número universal. Considere el agarre, el reconocimiento de la imagen, la experiencia y el interés, respetando las indicaciones de seguridad.'], ['¿Debo corregir todas las piezas mal colocadas?', 'Dé tiempo para comprobar. Puede mostrar cómo comparar el contorno u ofrecer ayuda sin dirigir la mano por la fuerza.']],
    bridge: 'Pedir una pista, elegir una imagen o rechazar continuar son mensajes útiles durante el puzle.'
  } },
  { type: 'practical', pt: {
    slug: 'brincar-com-plasticina', title: 'Brincar com plasticina: explorar e criar',
    lead: 'Ideias com plasticina para apertar, transformar e conversar, respeitando preferências sensoriais e segurança.',
    intro: 'Brincar com plasticina permite fazer e desfazer sem precisar de um produto final bonito. Uma bola pode virar uma estrada ou apenas continuar a ser uma bola. O interesse está na exploração que a criança escolhe.',
    learning: 'Apertar, estender e separar são ações que permitem experimentar força e forma. «Comprido», «achatado» e «metade» podem acompanhar o que acontece nas mãos. Estas são oportunidades da atividade, não prova de que a plasticina melhora a escrita ou trata dificuldades motoras.',
    steps: ['Ofereça uma pequena quantidade e uma base lavável. Mostre uma ação simples, como apertar, e espere.', 'Faça duas formas diferentes e descreva a mudança: «Esta ficou comprida.» Aceite que a criança prefira esmagar tudo.', 'Se surgir interesse, inventem comida para um boneco ou marcas com um utensílio grande e sem pontas. A história é opcional.'],
    adapt: 'Não obrigue a tocar numa textura desagradável. Um rolo largo ou um utensílio pode permitir participar sem contacto direto; desenhar a forma desejada é outra opção. Use massa mais macia quando o esforço de apertar dificulta a brincadeira.',
    safety: 'Use produto indicado para a idade e siga o rótulo. Plasticina não é alimento; considere alergénios e supervisione. Se a criança costuma ingerir materiais, escolha outra atividade. Não acrescente contas, ímanes ou peças pequenas.',
    faq: [['A plasticina prepara para escrever?', 'Permite experimentar movimentos das mãos, mas não garante aprendizagem da escrita. Escrever envolve várias competências e exige oportunidades próprias.'], ['E se a criança não gostar de tocar?', 'Respeite a recusa. Ofereça um utensílio ou outra brincadeira, sem transformar o contacto com a textura num teste.']],
    bridge: 'Escolher a cor, pedir mais material ou dizer que uma textura incomoda são motivos reais para comunicar.'
  }, en: {
    slug: 'playdough-play-ideas', title: 'Playdough play ideas for children',
    lead: 'Squash, reshape and talk together: playdough ideas that respect sensory preferences and safety.',
    intro: 'Playdough play lets children make and remake without producing a beautiful finished object. A ball can become a road or simply remain a ball. The child’s chosen exploration gives the activity its direction.',
    learning: 'Squeezing, rolling and dividing offer ways to explore force and shape. “Long”, “flat” and “half” can describe what happens in the child’s hands. These are opportunities within the activity, not evidence that playdough improves handwriting or treats motor difficulties.',
    steps: ['Offer a small amount on a washable surface. Demonstrate one action, such as squeezing, then wait.', 'Make two different shapes and describe the change: “This one is long.” Accept that the child may prefer squashing everything.', 'If interest emerges, make pretend food for a doll or marks with a large blunt tool. A story is optional.'],
    adapt: 'Do not insist on touching an unpleasant texture. A broad roller or tool allows participation without direct contact; drawing a desired shape is another option. Softer dough may help when squeezing takes too much effort.',
    safety: 'Use an age-appropriate product and follow its label. Playdough is not food; consider allergens and supervise. Choose another activity if the child tends to swallow materials. Do not add beads, magnets or small objects.',
    faq: [['Does playdough prepare children for handwriting?', 'It offers hand movement practice but does not guarantee writing skills. Writing involves several abilities and needs its own opportunities.'], ['What if a child dislikes touching playdough?', 'Respect the refusal. Offer a tool or different play without turning texture contact into a test.']],
    bridge: 'Choosing a colour, asking for more material or expressing discomfort creates real reasons to communicate.'
  }, es: {
    slug: 'jugar-con-plastilina', title: 'Jugar con plastilina: explorar y crear',
    lead: 'Ideas para apretar, transformar y conversar con plastilina, respetando preferencias sensoriales y seguridad.',
    intro: 'Jugar con plastilina permite hacer y deshacer sin necesitar un resultado bonito. Una bola puede convertirse en carretera o seguir siendo una bola. La exploración elegida por el niño orienta la actividad.',
    learning: 'Apretar, estirar y separar permite experimentar fuerza y forma. «Largo», «plano» y «mitad» pueden acompañar lo que ocurre entre las manos. Son oportunidades de la actividad, no pruebas de que la plastilina mejore la escritura o trate dificultades motoras.',
    steps: ['Ofrezca poca cantidad sobre una base lavable. Muestre una acción sencilla, como apretar, y espere.', 'Haga dos formas distintas y describa el cambio: «Esta quedó larga». Acepte que el niño prefiera aplastarlo todo.', 'Si surge interés, inventen comida para un muñeco o hagan marcas con un utensilio grande sin punta. La historia es opcional.'],
    adapt: 'No obligue a tocar una textura desagradable. Un rodillo ancho permite participar sin contacto directo; dibujar la forma deseada es otra opción. Una masa más blanda puede ayudar cuando apretar exige demasiado esfuerzo.',
    safety: 'Use un producto adecuado a la edad y siga la etiqueta. La plastilina no es comida; considere alérgenos y supervise. Si el niño suele ingerir materiales, elija otra actividad. No añada cuentas, imanes ni piezas pequeñas.',
    faq: [['¿La plastilina prepara para escribir?', 'Permite experimentar movimientos de las manos, pero no garantiza aprender a escribir. La escritura implica varias habilidades y necesita oportunidades propias.'], ['¿Y si no le gusta tocarla?', 'Respete el rechazo. Ofrezca un utensilio u otro juego sin convertir el contacto con la textura en una prueba.']],
    bridge: 'Elegir un color, pedir más material o expresar que una textura molesta son motivos reales para comunicarse.'
  } },
  { type: 'symbolic', pt: {
    slug: 'brincar-com-bonecos', title: 'Brincar com bonecos: histórias e cuidados',
    lead: 'Como usar bonecos para inventar rotinas e histórias, sem exigir fala nem uma forma certa de brincar.',
    intro: 'Brincar com bonecos pode começar por deitar um urso numa cama ou levá-lo a passear. Não é preciso inventar uma história longa. A criança pode representar uma rotina com gestos, objetos e pequenas ações.',
    learning: 'Um boneco permite representar alguém que come, descansa ou precisa de companhia. Isso abre espaço para sequências e perspetivas diferentes. A investigação sobre jogo simbólico e linguagem não prova que cuidar de bonecos ensine empatia nem que produza ganhos de fala por si só.',
    steps: ['Disponha um boneco e dois objetos seguros, como uma manta curta e um prato de brincar. Observe o que a criança faz.', 'Entre na rotina escolhida: se o boneco dormir, baixe a voz e comente «está a descansar», sem interromper para fazer perguntas.', 'Ofereça uma mudança pequena, como escolher onde o boneco vai a seguir. Aceite uma escolha por olhar, gesto, imagem ou palavra.'],
    adapt: 'Use personagens de interesse da criança, sem limitar bonecos por género. Quem prefere ações repetidas pode repetir a mesma rotina. Para ampliar, juntem duas ações ou outro participante, apenas se houver interesse.',
    safety: 'Verifique olhos, acessórios e enchimento; retire bonecos danificados. Use acessórios grandes e evite cordões ou peças que possam ser engolidas.',
    faq: [['Brincar com bonecos é só para meninas?', 'Não. Personagens e rotinas podem interessar a qualquer criança; a escolha não deve depender do género.'], ['É preciso dar voz ao boneco?', 'Não. Embalar, apontar, deslocar ou mostrar uma imagem também pode fazer parte da história. Não exija fala para continuar.']],
    bridge: 'Dar uma mensagem à personagem, escolher uma rotina ou recusar uma proposta pode ser feito com imagens.'
  }, en: {
    slug: 'doll-play-stories-and-care', title: 'Doll play: stories and everyday care',
    lead: 'Use dolls to explore routines and stories without requiring speech or one correct way to play.',
    intro: 'Doll play may begin with putting a bear to bed or taking it for a walk. A long story is unnecessary. Children can represent a routine through gestures, objects and small actions.',
    learning: 'A doll can represent someone eating, resting or wanting company. This creates space for sequences and different perspectives. Research on symbolic play and language does not show that caring for dolls teaches empathy or produces speech gains by itself.',
    steps: ['Offer a doll and two safe objects, such as a short blanket and a toy plate. Watch what the child does.', 'Join the chosen routine: if the doll sleeps, lower your voice and comment “having a rest” without interrupting with questions.', 'Offer a small change, such as choosing where the doll goes next. Accept a choice through gaze, gesture, picture or words.'],
    adapt: 'Choose characters the child enjoys without gender restrictions. Repeated routines can remain repeated. Add a second action or another participant only when this interests the child.',
    safety: 'Check eyes, accessories and stuffing, and remove damaged dolls. Use large accessories and avoid cords or objects that could be swallowed.',
    faq: [['Is doll play only for girls?', 'No. Characters and routines can interest any child. Gender should not determine the choice.'], ['Must children give the doll a voice?', 'No. Rocking, pointing, moving or showing a picture can be part of the story. Speech is not a requirement to continue.']],
    bridge: 'Giving a character a message, choosing a routine or declining a suggestion can be supported with pictures.'
  }, es: {
    slug: 'jugar-con-munecos', title: 'Jugar con muñecos: historias y cuidados',
    lead: 'Ideas con muñecos para explorar rutinas e historias sin exigir habla ni una única forma de jugar.',
    intro: 'Jugar con muñecos puede empezar por acostar a un oso o llevarlo a pasear. No hace falta una historia larga. El niño puede representar una rutina mediante gestos, objetos y pequeñas acciones.',
    learning: 'Un muñeco puede representar a alguien que come, descansa o quiere compañía. Esto permite explorar secuencias y perspectivas diferentes. La investigación sobre juego simbólico y lenguaje no demuestra que cuidar muñecos enseñe empatía o produzca avances en el habla por sí solo.',
    steps: ['Ofrezca un muñeco y dos objetos seguros, como una manta corta y un plato de juguete. Observe qué hace el niño.', 'Entre en la rutina elegida: si el muñeco duerme, baje la voz y comente «está descansando», sin interrumpir con preguntas.', 'Proponga un pequeño cambio, como elegir adónde irá después. Acepte elecciones mediante mirada, gesto, imagen o palabra.'],
    adapt: 'Use personajes de interés para el niño, sin limitar la elección por género. Puede repetir la misma rutina si lo prefiere. Añada una segunda acción u otro participante solo cuando haya interés.',
    safety: 'Revise ojos, accesorios y relleno; retire muñecos dañados. Use accesorios grandes y evite cordones y piezas que se puedan tragar.',
    faq: [['¿Jugar con muñecos es solo para niñas?', 'No. Las historias y rutinas pueden interesar a cualquier niño; el género no debe determinar la elección.'], ['¿Hay que poner voz al muñeco?', 'No. Acunar, señalar, mover o mostrar una imagen también puede formar parte de la historia. No exija hablar para continuar.']],
    bridge: 'Dar un mensaje al personaje, elegir una rutina o rechazar una propuesta puede hacerse con imágenes.'
  } },
  { type: 'symbolic', pt: {
    slug: 'fantoches-para-contar-historias', title: 'Fantoches para contar histórias',
    lead: 'Pequenas histórias com fantoches, escolhas e turnos, com espaço para comunicar sem falar.',
    intro: 'Os fantoches para contar histórias podem transformar uma situação simples numa conversa entre personagens. Um fantoche procura a casa e outro conhece o caminho. A criança pode participar como narradora, personagem ou observadora.',
    learning: 'Escolher o que acontece primeiro e responder a uma personagem são oportunidades para organizar uma narrativa. Não devemos confundir este convite com uma intervenção comprovada para timidez, ansiedade ou dificuldades de linguagem. O fantoche é um recurso, não uma forma de obrigar a falar.',
    steps: ['Comece com duas personagens e um problema concreto: uma perdeu a cama. Represente apenas o início.', 'Ofereça dois finais possíveis, com objetos ou imagens. Espere pela escolha antes de continuar.', 'Troquem de papel se a criança quiser. Repita a história preferida, deixando espaço para alterar uma ação.'],
    adapt: 'Uma personagem pousada na mesa evita a exigência de manter a mão levantada. Dê tempo para responder por CAA e não faça a personagem repetir insistentemente a pergunta. Para crianças sensíveis, dispense vozes altas e movimentos repentinos.',
    safety: 'Prefira fantoches íntegros, sem olhos destacáveis, arames expostos ou acessórios pequenos. Um adulto deve preparar qualquer recorte ou montagem.',
    faq: [['O fantoche ajuda uma criança que não quer falar?', 'Pode ser um convite agradável, mas não há garantia. Aceite silêncio e outras formas de participação; não use a personagem para pressionar.'], ['É preciso inventar uma história diferente de cada vez?', 'Não. Repetir uma história permite antecipar o que acontece e escolher pequenas mudanças.']],
    bridge: 'Escolher o destino de uma personagem ou construir uma mensagem para ela pode incluir cartões com imagem e voz.'
  }, en: {
    slug: 'puppet-storytelling-for-children', title: 'Puppet storytelling for children',
    lead: 'Short puppet stories with choices, turns and room to communicate without speaking.',
    intro: 'Puppet storytelling can turn a simple situation into an exchange between characters. One puppet is looking for home and another knows the way. A child can join as narrator, character or observer.',
    learning: 'Choosing what happens first and responding to a character offer opportunities to organise a narrative. This invitation should not be presented as a proven intervention for shyness, anxiety or language difficulties. A puppet is a resource, not a way to demand speech.',
    steps: ['Start with two characters and a concrete problem: one has lost its bed. Act out only the beginning.', 'Offer two possible endings using objects or pictures. Wait for a choice before continuing.', 'Swap roles if the child wants to. Repeat a favourite story while leaving room to change an action.'],
    adapt: 'A tabletop character avoids having to hold an arm up. Allow time for AAC responses and do not make the puppet repeat its question insistently. Avoid loud voices and sudden movements when these are uncomfortable.',
    safety: 'Choose intact puppets without detachable eyes, exposed wire or small accessories. An adult should prepare any cutting or assembly.',
    faq: [['Will a puppet help a child who does not want to speak?', 'It can be an enjoyable invitation, but there is no guarantee. Accept silence and other participation; do not use the character to pressure the child.'], ['Does every puppet story need to be new?', 'No. Repetition makes events familiar and allows children to choose small changes.']],
    bridge: 'Choosing a character’s destination or building its message can involve picture and voice cards.'
  }, es: {
    slug: 'titeres-para-contar-cuentos', title: 'Títeres para contar cuentos',
    lead: 'Historias breves con títeres, elecciones y turnos, dejando espacio para comunicarse sin hablar.',
    intro: 'Los títeres para contar cuentos convierten una situación sencilla en un intercambio entre personajes. Uno busca su casa y otro conoce el camino. El niño puede participar como narrador, personaje u observador.',
    learning: 'Elegir qué ocurre primero y responder a un personaje ofrece oportunidades para organizar una narración. No debe presentarse como una intervención demostrada para la timidez, la ansiedad o las dificultades del lenguaje. El títere es un recurso, no una forma de exigir habla.',
    steps: ['Empiece con dos personajes y un problema concreto: uno ha perdido su cama. Represente solo el inicio.', 'Ofrezca dos finales posibles mediante objetos o imágenes. Espere una elección antes de continuar.', 'Intercambien papeles si el niño quiere. Repitan la historia preferida dejando espacio para cambiar una acción.'],
    adapt: 'Un personaje apoyado en la mesa evita mantener el brazo elevado. Dé tiempo para responder mediante CAA y no repita insistentemente la pregunta del títere. Evite voces altas y movimientos bruscos si resultan incómodos.',
    safety: 'Elija títeres intactos, sin ojos desmontables, alambres expuestos ni accesorios pequeños. Un adulto debe preparar recortes y montajes.',
    faq: [['¿Un títere ayuda a un niño que no quiere hablar?', 'Puede ser una invitación agradable, pero no hay garantía. Acepte silencio y otras formas de participar; no lo use para presionar.'], ['¿Hace falta inventar un cuento nuevo cada vez?', 'No. Repetir permite anticipar los acontecimientos y elegir pequeños cambios.']],
    bridge: 'Elegir el destino de un personaje o construir su mensaje puede incluir tarjetas con imagen y voz.'
  } },
  { type: 'spatial', pt: {
    slug: 'brincar-com-carrinhos-e-rampas', title: 'Brincar com carrinhos e rampas',
    lead: 'Percursos, rampas e garagens para fazer previsões, experimentar mudanças e conversar durante a brincadeira.',
    intro: 'Brincar com carrinhos e rampas não precisa de uma pista cara. Um percurso curto permite explorar o que acontece quando o carro parte de outro ponto ou encontra uma superfície diferente. A surpresa pode orientar a próxima tentativa.',
    learning: 'Comparar duas tentativas é uma oportunidade de investigação: antecipar, observar e voltar a experimentar. Para perceber uma mudança, convém variar uma condição de cada vez. Esta proposta não é um programa de ensino de física validado nem uma prova da capacidade científica da criança.',
    steps: ['Faça uma rampa baixa e estável com cartão rígido apoiado de forma segura. Solte um carrinho sem o empurrar.', 'Marque onde parou com uma tira de papel. Repita a partir de outro ponto e conversem sobre perto e longe.', 'Acrescente uma garagem ou um destino escolhido pela criança. Se preferir alinhar carros, entre nessa brincadeira antes de sugerir mudanças.'],
    adapt: 'Carros grandes e uma rampa larga podem facilitar o acesso. A criança pode escolher o ponto de partida e outra pessoa soltar o carro. Reduza o percurso quando acompanhar o movimento exige demasiado esforço visual.',
    safety: 'Verifique rodas e eixos. Use rampas baixas longe de escadas e passagens; não coloque a criança em cima de estruturas improvisadas.',
    faq: [['É preciso explicar gravidade e velocidade?', 'Não. Comece por descrições concretas: «foi mais longe», «parou aqui». Acrescente explicações quando existir interesse, sem transformar cada tentativa numa aula.'], ['Alinhar carrinhos também conta como brincar?', 'Sim. Pode haver interesse em ordem, espaço ou repetição. Esse comportamento isolado não permite concluir um diagnóstico.']],
    bridge: 'Escolher um veículo, indicar um destino ou pedir para repetir pode ser apoiado por imagens.'
  }, en: {
    slug: 'toy-cars-and-ramp-play', title: 'Toy cars and ramp play',
    lead: 'Explore routes, ramps and garages through predictions, small changes and shared conversation.',
    intro: 'Toy cars and ramp play do not require an expensive track. A short route allows children to explore a different starting point or surface. A surprising result can guide the next attempt.',
    learning: 'Comparing attempts offers an opportunity to investigate: anticipate, observe and try again. Changing one condition at a time helps make the comparison clearer. This proposal is neither a validated physics programme nor a test of a child’s scientific ability.',
    steps: ['Make a low, stable ramp from stiff cardboard with secure support. Release a car without pushing it.', 'Mark where it stops with a paper strip. Repeat from another starting point and talk about near and far.', 'Add a garage or destination chosen by the child. If lining cars up is preferred, join that play before suggesting changes.'],
    adapt: 'Large cars and a wide ramp can improve access. The child can choose the starting point while a partner releases the car. Shorten the route if tracking movement takes too much visual effort.',
    safety: 'Check wheels and axles. Keep low ramps away from stairs and walkways. Children should not climb onto improvised structures.',
    faq: [['Do adults need to explain gravity and speed?', 'No. Begin with concrete comments: “went further”, “stopped here”. Add explanations when there is interest without making every attempt a lesson.'], ['Does lining up cars count as play?', 'Yes. Order, space or repetition may be interesting. This behaviour alone cannot establish a diagnosis.']],
    bridge: 'Choosing a vehicle, indicating a destination or asking to repeat can be supported with pictures.'
  }, es: {
    slug: 'jugar-con-coches-y-rampas', title: 'Jugar con coches y rampas',
    lead: 'Recorridos, rampas y garajes para anticipar, probar cambios y conversar mientras se juega.',
    intro: 'Jugar con coches y rampas no necesita una pista cara. Un recorrido corto permite explorar qué ocurre al cambiar el punto de salida o la superficie. Una sorpresa puede orientar el siguiente intento.',
    learning: 'Comparar intentos ofrece una oportunidad para investigar: anticipar, observar y volver a probar. Cambiar una condición cada vez facilita la comparación. La propuesta no es un programa validado de enseñanza de física ni una prueba de la capacidad científica del niño.',
    steps: ['Prepare una rampa baja y estable con cartón rígido y apoyo seguro. Suelte un coche sin empujarlo.', 'Marque dónde se detiene con una tira de papel. Repita desde otro punto y hablen de cerca y lejos.', 'Añada un garaje o destino elegido por el niño. Si prefiere alinear coches, participe antes de proponer cambios.'],
    adapt: 'Los coches grandes y una rampa ancha pueden facilitar el acceso. El niño puede elegir la salida y otra persona soltar el coche. Acorte el recorrido si seguir el movimiento exige demasiado esfuerzo visual.',
    safety: 'Revise ruedas y ejes. Mantenga las rampas bajas lejos de escaleras y zonas de paso. No permita subir a estructuras improvisadas.',
    faq: [['¿Hace falta explicar gravedad y velocidad?', 'No. Empiece con comentarios concretos: «llegó más lejos», «paró aquí». Añada explicaciones si hay interés, sin convertir cada intento en una clase.'], ['¿Alinear coches también es jugar?', 'Sí. Puede interesar el orden, el espacio o la repetición. Esa conducta aislada no permite establecer un diagnóstico.']],
    bridge: 'Elegir un vehículo, indicar un destino o pedir repetir puede apoyarse con imágenes.'
  } },
  { type: 'symbolic', pt: {
    slug: 'cozinha-de-brincar-aprendizagem', title: 'Cozinha de brincar: rotinas e descobertas',
    lead: 'Preparar refeições imaginárias para explorar ações, sequências e escolhas com materiais simples.',
    intro: 'Uma cozinha de brincar pode ser apenas uma mesa com uma panela de brinquedo e uma colher. Mexer, servir e lavar dão sentido a pequenas histórias. A criança pode escolher ser cozinheira, cliente ou inventar outro papel.',
    learning: 'Representar uma refeição oferece contexto para palavras de ação e sequências: primeiro preparar, depois servir. Não é necessário que a rotina seja realista. Brincar com alimentos de imitação não demonstra que a criança passará a aceitar esses alimentos numa refeição real.',
    steps: ['Escolha dois ou três utensílios seguros. Convide a preparar uma comida imaginária escolhida pela criança.', 'Descreva uma ação que está a acontecer: «Estás a mexer.» Acrescente uma ideia, sem pedir que repita a frase.', 'Prepare lugares para duas personagens e deixem que escolham o que querem. A recusa de um prato também pode entrar na história.'],
    adapt: 'Uma mesa acessível pode substituir uma cozinha alta. Use utensílios leves e estáveis. Para simplificar, explore uma ação; para ampliar, invente uma receita com dois passos e permita alterar a ordem.',
    safety: 'Separe claramente o espaço de brincar de fogões e utensílios quentes ou cortantes. Escolha alimentos de imitação grandes, sem partes pequenas.',
    faq: [['A cozinha de brincar ajuda na seletividade alimentar?', 'Não deve ser apresentada como tratamento nem usada para pressionar a provar alimentos. A aceitação alimentar envolve fatores que exigem atenção individual.'], ['É preciso comprar uma cozinha completa?', 'Não. Poucos utensílios seguros numa superfície acessível chegam para muitas histórias.']],
    bridge: 'Escolher o que uma personagem quer ou anunciar uma ação pode envolver cartões de alimentos e rotinas.'
  }, en: {
    slug: 'play-kitchen-learning-ideas', title: 'Play kitchen learning ideas',
    lead: 'Make imaginary meals to explore actions, sequences and choices with simple materials.',
    intro: 'A play kitchen can be a table with a toy pan and spoon. Stirring, serving and washing give small stories a purpose. A child may choose to be a cook, customer or an entirely different character.',
    learning: 'Acting out a meal creates a context for action words and sequences: prepare first, serve next. The routine need not be realistic. Playing with pretend food does not demonstrate that a child will accept those foods at an actual meal.',
    steps: ['Choose two or three safe utensils. Invite the child to choose an imaginary meal to prepare.', 'Describe an action as it happens: “You’re stirring.” Add an idea without asking the child to repeat the sentence.', 'Set places for two characters and let them choose what they want. Refusing a dish can also be part of the story.'],
    adapt: 'An accessible table can replace a tall kitchen unit. Choose light, stable utensils. Begin with one action, or add a two-step recipe while allowing changes to the sequence.',
    safety: 'Keep the play area clearly separate from hot hobs and sharp or hot utensils. Choose large pretend foods without small parts.',
    faq: [['Can play kitchens treat picky eating?', 'They should not be presented as treatment or used to pressure food tasting. Food acceptance involves factors needing individual attention.'], ['Is a complete play kitchen necessary?', 'No. A few safe utensils on an accessible surface support many stories.']],
    bridge: 'Choosing what a character wants or announcing an action can involve food and routine picture cards.'
  }, es: {
    slug: 'cocina-de-juguete-y-aprendizaje', title: 'Cocina de juguete y aprendizaje',
    lead: 'Comidas imaginarias para explorar acciones, secuencias y elecciones con materiales sencillos.',
    intro: 'Una cocina de juguete puede ser una mesa con una olla de juguete y una cuchara. Remover, servir y lavar dan sentido a pequeñas historias. El niño puede elegir ser cocinero, cliente u otro personaje.',
    learning: 'Representar una comida da contexto a palabras de acción y secuencias: primero preparar, después servir. La rutina no necesita ser realista. Jugar con alimentos de imitación no demuestra que el niño vaya a aceptarlos en una comida real.',
    steps: ['Elija dos o tres utensilios seguros. Invite a preparar una comida imaginaria elegida por el niño.', 'Describa una acción que está ocurriendo: «Estás removiendo». Añada una idea sin pedir que repita la frase.', 'Prepare lugares para dos personajes y permita que elijan qué quieren. Rechazar un plato también puede formar parte de la historia.'],
    adapt: 'Una mesa accesible puede sustituir una cocina alta. Use utensilios ligeros y estables. Para simplificar, explore una acción; para ampliar, invente una receta de dos pasos permitiendo cambiar el orden.',
    safety: 'Separe el espacio de juego de cocinas reales y utensilios calientes o cortantes. Elija alimentos de imitación grandes, sin piezas pequeñas.',
    faq: [['¿La cocina de juguete ayuda con la selectividad alimentaria?', 'No debe presentarse como tratamiento ni utilizarse para presionar a probar comida. La aceptación alimentaria incluye factores que requieren atención individual.'], ['¿Hace falta comprar una cocina completa?', 'No. Pocos utensilios seguros en una superficie accesible permiten muchas historias.']],
    bridge: 'Elegir qué quiere un personaje o anunciar una acción puede incluir tarjetas de alimentos y rutinas.'
  } },
  { type: 'practical', pt: {
    slug: 'brincadeiras-com-bolas', title: 'Brincadeiras com bolas para participar',
    lead: 'Rolar, passar e acertar em alvos: brincadeiras com bolas que se adaptam ao movimento e ao ritmo da criança.',
    intro: 'As brincadeiras com bolas podem acontecer sentadas, de pé ou com um parceiro a ajudar. A bola não tem de ser apanhada no ar para a atividade ter interesse. Rolar entre duas pessoas já cria um acontecimento partilhado.',
    learning: 'Acompanhar a trajetória e ajustar um movimento são exigências possíveis desta brincadeira. Combinar para onde enviar a bola cria oportunidades de escolha e turnos. A prática de uma tarefa não garante melhorias gerais de coordenação, atenção ou comportamento.',
    steps: ['Sentem-se perto num espaço livre e rolem uma bola grande e macia. Espere um sinal de disponibilidade antes de enviar.', 'Façam um alvo largo com uma caixa aberta. A criança escolhe a distância ou indica onde quer a caixa.', 'Experimentem passar a bola por um caminho marcado no chão. Mantenham o objetivo cooperativo: descobrir como fazê-la chegar.'],
    adapt: 'Aproxime o alvo e use uma bola lenta. Uma pequena rampa pode permitir lançar por libertação em vez de empurrar. Combine sinais visuais ou sonoros conforme o acesso da criança, sem ruídos intensos inesperados.',
    safety: 'Use bolas adequadas à idade, grandes demais para entrar na boca. Retire obstáculos e afaste a atividade de escadas, trânsito e objetos frágeis.',
    faq: [['A criança precisa de saber andar?', 'Não. É possível rolar uma bola sentada ou participar escolhendo um alvo, com apoio ajustado à postura e ao conforto.'], ['Como jogar sem competição?', 'Tentem levar a bola a um destino comum, escolham percursos em conjunto e dispensem pontuações e eliminações.']],
    bridge: 'Escolher para quem vai a bola ou comunicar «mais» e «parar» dá uma função concreta aos apoios de comunicação.'
  }, en: {
    slug: 'ball-play-activities-for-children', title: 'Ball play activities for children',
    lead: 'Roll, pass and aim: adaptable ball play for different movements, preferences and paces.',
    intro: 'Ball play activities can happen sitting, standing or with a partner’s support. Catching a ball in the air is not a requirement for enjoyable play. Rolling between two people already creates a shared event.',
    learning: 'Following a trajectory and adjusting movement are possible demands of this activity. Agreeing where a ball goes creates choices and turns. Practising one task does not guarantee general improvements in coordination, attention or behaviour.',
    steps: ['Sit close together in a clear space and roll a large soft ball. Wait for a sign of readiness before sending it.', 'Make a wide target from an open box. Let the child choose the distance or indicate where the box belongs.', 'Try rolling along a path marked on the floor. Keep the aim cooperative: discover how to get the ball there.'],
    adapt: 'Bring the target closer and use a slow-moving ball. A small ramp can allow a release instead of a push. Agree visual or sound cues according to access needs without unexpected loud noises.',
    safety: 'Use age-appropriate balls too large to fit in the mouth. Clear obstacles and keep away from stairs, traffic and fragile objects.',
    faq: [['Does a child need to walk to join ball games?', 'No. Children can roll while seated or choose a target, with support suited to their posture and comfort.'], ['How can ball play be non-competitive?', 'Work towards a shared destination, choose routes together and leave out scores and elimination.']],
    bridge: 'Choosing who receives the ball or communicating “more” and “stop” gives communication supports a practical purpose.'
  }, es: {
    slug: 'juegos-con-pelotas-para-ninos', title: 'Juegos con pelotas para participar',
    lead: 'Rodar, pasar y apuntar: juegos con pelotas adaptables al movimiento y al ritmo de cada niño.',
    intro: 'Los juegos con pelotas pueden hacerse sentados, de pie o con ayuda de otra persona. Atrapar la pelota en el aire no es un requisito para disfrutar. Rodarla entre dos personas ya crea un acontecimiento compartido.',
    learning: 'Seguir una trayectoria y ajustar el movimiento son posibles exigencias de esta actividad. Decidir adónde enviar la pelota ofrece elecciones y turnos. Practicar una tarea no garantiza mejoras generales de coordinación, atención o conducta.',
    steps: ['Siéntense cerca en un espacio despejado y rueden una pelota grande y blanda. Espere una señal de disponibilidad antes de enviarla.', 'Prepare una diana amplia con una caja abierta. El niño elige la distancia o indica dónde colocarla.', 'Prueben a seguir un camino marcado en el suelo. Mantengan una meta cooperativa: descubrir cómo llevar la pelota hasta allí.'],
    adapt: 'Acerque el objetivo y use una pelota lenta. Una pequeña rampa permite lanzar soltando en vez de empujando. Acuerde señales visuales o sonoras según las necesidades de acceso, evitando ruidos fuertes inesperados.',
    safety: 'Use pelotas adecuadas a la edad, demasiado grandes para entrar en la boca. Retire obstáculos y aléjese de escaleras, tráfico y objetos frágiles.',
    faq: [['¿Hace falta saber caminar?', 'No. Se puede rodar sentado o participar eligiendo un objetivo, con apoyo adecuado a la postura y la comodidad.'], ['¿Cómo jugar sin competir?', 'Intenten alcanzar un destino común, elijan recorridos juntos y prescindan de puntuaciones y eliminaciones.']],
    bridge: 'Elegir quién recibe la pelota o comunicar «más» y «parar» da una función práctica a los apoyos de comunicación.'
  } },
  { type: 'guided', pt: {
    slug: 'jogos-de-classificacao-para-criancas', title: 'Jogos de classificação para crianças',
    lead: 'Agrupar por cor, forma ou utilização: maneiras simples de descobrir que o mesmo objeto cabe em grupos diferentes.',
    intro: 'Os jogos de classificação para crianças começam com uma pergunta: o que pode ficar junto? Separar meias, organizar blocos ou arrumar animais de brincar permite inventar critérios. A regra da criança pode ser diferente da imaginada pelo adulto.',
    learning: 'Comparar atributos torna visíveis semelhanças e diferenças. Uma peça vermelha e redonda pode pertencer ao grupo das vermelhas ou ao das redondas. Mudar o critério oferece um desafio específico; não demonstra, por si só, uma melhoria geral da flexibilidade mental.',
    steps: ['Escolha poucos objetos grandes com uma diferença clara. Separe dois exemplos e convide a continuar, se houver interesse.', 'Pergunte ou mostre «porquê juntos?». Aceite uma explicação por gesto ou demonstração, incluindo critérios inesperados.', 'Noutra ronda, proponha uma regra diferente. Mantenha os mesmos objetos para tornar a mudança visível.'],
    adapt: 'Comece com dois grupos e um único atributo. Use formas ou texturas identificáveis quando a cor não é acessível, respeitando a tolerância tátil. A criança pode indicar o grupo enquanto um parceiro move os objetos.',
    safety: 'Evite botões, moedas, feijões secos e outras peças pequenas com crianças que possam levá-las à boca. Prefira objetos grandes, íntegros e apropriados à idade.',
    faq: [['Classificar por cor é obrigatório antes de contar?', 'Não é uma etapa obrigatória universal. São experiências diferentes que podem aparecer em paralelo, conforme as oportunidades e o interesse.'], ['E se a criança inventar outra regra?', 'Peça que mostre a ideia. Agrupar por personagem preferida ou por uso também pode ter sentido; esclareça apenas quando a atividade tiver uma regra combinada.']],
    bridge: 'Explicar uma escolha, pedir um objeto ou mostrar uma preferência pode incluir imagens, gestos e voz.'
  }, en: {
    slug: 'sorting-games-for-preschoolers', title: 'Sorting games for preschoolers',
    lead: 'Group by colour, shape or use and discover that the same object can belong to different groups.',
    intro: 'Sorting games for preschoolers begin with a question: what could go together? Pairing socks, arranging blocks or grouping toy animals allows children to invent criteria. Their rule may differ from the adult’s intended one.',
    learning: 'Comparing features makes similarities and differences visible. A red round object can belong with red things or round things. Changing the rule creates a specific challenge; it does not by itself demonstrate a general improvement in mental flexibility.',
    steps: ['Choose a few large objects with one clear difference. Sort two examples and invite the child to continue if interested.', 'Ask or demonstrate “why together?”. Accept gestures or demonstrations as explanations, including unexpected rules.', 'In another round, suggest a different rule. Keep the same objects so that the change is visible.'],
    adapt: 'Begin with two groups and one feature. Use identifiable shapes or textures when colour is not accessible, respecting tactile preferences. A child can indicate the group while a partner moves the objects.',
    safety: 'Avoid buttons, coins, dried beans and other small items when children may put them in their mouths. Choose large, intact, age-appropriate objects.',
    faq: [['Must children sort colours before learning to count?', 'There is no universal requirement. These are different experiences that can develop alongside each other through interest and opportunity.'], ['What if the child invents a different sorting rule?', 'Invite them to show their idea. Grouping by favourite character or use can make sense; clarify only when a particular rule has been agreed.']],
    bridge: 'Explaining a choice, requesting an object or showing a preference can involve pictures, gestures and voice.'
  }, es: {
    slug: 'juegos-de-clasificacion-para-ninos', title: 'Juegos de clasificación para niños',
    lead: 'Agrupar por color, forma o uso y descubrir que un objeto puede pertenecer a distintos grupos.',
    intro: 'Los juegos de clasificación para niños empiezan con una pregunta: ¿qué puede ir junto? Separar calcetines, ordenar bloques o agrupar animales permite inventar criterios. La regla del niño puede ser distinta de la imaginada por el adulto.',
    learning: 'Comparar atributos hace visibles semejanzas y diferencias. Una pieza roja y redonda puede pertenecer al grupo rojo o al redondo. Cambiar el criterio plantea un reto concreto; no demuestra por sí solo una mejora general de la flexibilidad mental.',
    steps: ['Elija pocos objetos grandes con una diferencia clara. Separe dos ejemplos e invite a continuar si hay interés.', 'Pregunte o muestre «¿por qué juntos?». Acepte explicaciones mediante gestos o demostraciones, incluidos criterios inesperados.', 'En otra ronda, proponga una regla distinta. Mantenga los mismos objetos para hacer visible el cambio.'],
    adapt: 'Empiece con dos grupos y un atributo. Use formas o texturas identificables cuando el color no sea accesible, respetando preferencias táctiles. El niño puede indicar el grupo y otra persona mover los objetos.',
    safety: 'Evite botones, monedas, legumbres secas y otras piezas pequeñas si el niño puede llevárselas a la boca. Prefiera objetos grandes, intactos y adecuados a la edad.',
    faq: [['¿Es obligatorio clasificar colores antes de contar?', 'No hay un requisito universal. Son experiencias distintas que pueden aparecer en paralelo según el interés y las oportunidades.'], ['¿Y si inventa otra regla?', 'Invite a mostrar su idea. Agrupar por personaje favorito o por uso también puede tener sentido; aclare solo cuando haya una regla acordada.']],
    bridge: 'Explicar una elección, pedir un objeto o mostrar una preferencia puede incluir imágenes, gestos y voz.'
  } },
  { type: 'number', pt: {
    slug: 'jogos-de-tabuleiro-pre-escolar', title: 'Jogos de tabuleiro no pré-escolar',
    lead: 'Regras curtas, percursos e cooperação: como adaptar jogos de tabuleiro para que todos possam participar.',
    intro: 'Os jogos de tabuleiro no pré-escolar podem ser muito simples: um percurso, uma peça e uma regra partilhada. O objetivo é perceber como jogar em conjunto, não manter uma criança sentada até acabar uma partida longa.',
    learning: 'Ramani e Siegler estudaram um jogo numérico linear com crianças em idade pré-escolar de famílias com baixos rendimentos e encontraram ganhos em tarefas numéricas específicas. O resultado não se aplica automaticamente a qualquer tabuleiro, idade ou competência social. O conteúdo e a forma de jogar importam.',
    steps: ['Escolha um percurso curto. Demonstre uma jogada completa antes de apresentar novas regras.', 'Experimentem mover uma peça comum. Cada pessoa escolhe ou indica a sua jogada, com ajuda quando necessária.', 'Num percurso numerado, ligue cada movimento a uma casa e ao número correspondente. Faça pausas para esclarecer sem transformar o jogo num teste.'],
    adapt: 'Use peças grandes, contraste e uma regra visível em imagens. Reduza o tempo entre turnos. Uma versão cooperativa pode diminuir a pressão de ganhar; permitir parar evita que terminar a partida seja uma condição de sucesso.',
    safety: 'Verifique dados, peões e fichas pequenas. Se houver risco de ingestão, use componentes grandes adequados à idade ou cartões grandes para indicar o movimento.',
    faq: [['Com que idade se pode começar?', 'Depende da regra, dos materiais e do apoio disponível. Não basta a idade na caixa: respeite a segurança e experimente uma versão curta e acessível.'], ['É preciso aprender a perder durante a partida?', 'Não é necessário provocar frustração. Pode acolher o desagrado, fazer uma pausa e combinar formas de continuar, sem humilhação nem obrigação.']],
    bridge: 'Anunciar uma escolha, pedir esclarecimento ou indicar uma pausa são mensagens que devem continuar acessíveis durante a partida.'
  }, en: {
    slug: 'board-games-for-preschoolers', title: 'Board games for preschoolers',
    lead: 'Short rules, tracks and cooperation: adapt board games so everyone has a way to participate.',
    intro: 'Board games for preschoolers can be simple: a track, a counter and one shared rule. The aim is to understand playing together, not to keep a child seated until a long match finishes.',
    learning: 'Ramani and Siegler studied a linear number board game with preschool children from low-income families and found gains in specific numerical tasks. This does not automatically apply to every board game, age or social skill. Game content and how it is played matter.',
    steps: ['Choose a short track. Demonstrate a complete turn before introducing extra rules.', 'Try moving one shared counter. Each person chooses or indicates a move, with help when needed.', 'On a numbered track, connect each movement to one space and its number. Pause to explain without making play a test.'],
    adapt: 'Use large counters, contrast and a visible picture rule. Shorten waiting between turns. A cooperative version can reduce pressure to win; permission to stop means finishing is not a condition of success.',
    safety: 'Check small dice, counters and tokens. Where swallowing is a risk, use large age-appropriate components or large movement cards.',
    faq: [['At what age can children start board games?', 'It depends on the rule, materials and available support. Box age alone is insufficient: respect safety guidance and try a short, accessible version.'], ['Must children learn to lose during a game?', 'There is no need to provoke distress. Acknowledge disappointment, pause and agree how to continue without humiliation or compulsion.']],
    bridge: 'Announcing a choice, asking for clarification or indicating a break should remain accessible throughout a game.'
  }, es: {
    slug: 'juegos-de-mesa-en-preescolar', title: 'Juegos de mesa en preescolar',
    lead: 'Reglas breves, recorridos y cooperación: adapte juegos de mesa para que todos puedan participar.',
    intro: 'Los juegos de mesa en preescolar pueden ser sencillos: un recorrido, una ficha y una regla compartida. El objetivo es comprender cómo jugar juntos, no mantener al niño sentado hasta terminar una partida larga.',
    learning: 'Ramani y Siegler estudiaron un juego numérico lineal con niños de preescolar de familias con bajos ingresos y encontraron mejoras en tareas numéricas concretas. El resultado no se aplica automáticamente a cualquier juego, edad o habilidad social. Importan el contenido y la forma de jugar.',
    steps: ['Elija un recorrido corto. Muestre una jugada completa antes de añadir reglas.', 'Prueben a mover una ficha común. Cada persona elige o indica su jugada, con ayuda cuando la necesite.', 'En un recorrido numerado, relacione cada movimiento con una casilla y su número. Haga pausas para explicar sin convertir el juego en una prueba.'],
    adapt: 'Use fichas grandes, contraste y una regla visible mediante imágenes. Reduzca la espera entre turnos. Una versión cooperativa puede disminuir la presión por ganar; permitir parar evita que terminar sea una condición de éxito.',
    safety: 'Revise dados y fichas pequeñas. Si existe riesgo de ingestión, use componentes grandes adecuados a la edad o tarjetas grandes para indicar el movimiento.',
    faq: [['¿A qué edad se puede empezar?', 'Depende de la regla, los materiales y el apoyo. La edad de la caja no basta: respete la seguridad y pruebe una versión breve y accesible.'], ['¿Es necesario aprender a perder durante la partida?', 'No hace falta provocar frustración. Acoja el malestar, haga una pausa y acuerden cómo continuar sin humillación ni obligación.']],
    bridge: 'Anunciar una elección, pedir una explicación o indicar una pausa debe seguir siendo accesible durante la partida.'
  } },
  { type: 'guided', pt: {
    slug: 'caca-ao-tesouro-para-criancas', title: 'Caça ao tesouro para crianças',
    lead: 'Pistas visuais e percursos acessíveis para procurar, comparar e resolver pequenos problemas em conjunto.',
    intro: 'Uma caça ao tesouro para crianças pode acontecer numa única divisão. O tesouro pode ser uma personagem de brincar e as pistas podem ser fotografias. Não é preciso saber ler, correr ou competir para participar.',
    learning: 'Relacionar uma fotografia com um local oferece uma tarefa concreta de correspondência. Seguir pistas pode envolver palavras de posição e pequenas decisões. Estas exigências dependem do desenho do jogo; não tornam uma caça ao tesouro num treino comprovado de memória ou atenção.',
    steps: ['Escolha dois locais seguros e acessíveis. Tire fotografias que mostrem claramente onde procurar.', 'Entregue uma pista de cada vez. Explore a imagem com a criança e ofereça ajuda se o enquadramento não for reconhecível.', 'Quando encontrarem o objeto, deixem que a criança escolha onde o esconder para o adulto procurar. Trocar papéis faz parte da diversão.'],
    adapt: 'Para jogar sentado, esconda objetos sobre uma mesa dentro do alcance. Use objetos de referência ou descrições sonoras quando a fotografia não é acessível. Evite cronómetros e compare a dificuldade das pistas, não a rapidez das crianças.',
    safety: 'Não esconda objetos junto de tomadas, produtos de limpeza, água, alturas ou portas que possam fechar. Mantenha supervisão e um percurso conhecido.',
    faq: [['Como fazer uma caça ao tesouro sem saber ler?', 'Use fotografias, desenhos simples ou objetos que representem o destino. Apresente uma pista de cada vez e confirme que o formato é compreensível.'], ['Quantas pistas devo preparar?', 'Comece com duas e observe o interesse. Um percurso curto completo pode ser mais agradável do que muitas pistas com ajuda constante.']],
    bridge: 'Pedir ajuda, escolher um local ou anunciar que encontrou o objeto pode ser apoiado por comunicação com imagens.'
  }, en: {
    slug: 'treasure-hunt-for-young-children', title: 'Treasure hunts for young children',
    lead: 'Visual clues and accessible routes for searching, comparing and solving small problems together.',
    intro: 'Treasure hunts for young children can take place in one room. The treasure may be a toy character and the clues may be photographs. Reading, running and competing are not requirements for joining in.',
    learning: 'Matching a photograph to a location creates a concrete correspondence task. Following clues can involve position words and small decisions. These demands depend on the game design; they do not make a treasure hunt a proven memory or attention intervention.',
    steps: ['Choose two safe, accessible locations. Take clear photographs showing where to look.', 'Give one clue at a time. Explore the picture together and offer help when the view is hard to recognise.', 'After finding the object, let the child choose where to hide it for the adult. Swapping roles can be part of the fun.'],
    adapt: 'For seated play, hide objects within reach on a table. Use reference objects or spoken descriptions when photographs are not accessible. Avoid timers and compare clue difficulty rather than children’s speed.',
    safety: 'Do not hide objects near sockets, cleaning products, water, high places or doors that may close. Supervise and use a familiar route.',
    faq: [['How can children follow clues before they can read?', 'Use photographs, simple drawings or objects representing a destination. Present one clue at a time and check that the format makes sense.'], ['How many clues should a toddler treasure hunt have?', 'Start with two and observe interest. Completing a short route may be more enjoyable than many clues requiring constant help.']],
    bridge: 'Asking for help, choosing a location or announcing a discovery can be supported through picture communication.'
  }, es: {
    slug: 'busqueda-del-tesoro-para-ninos', title: 'Búsqueda del tesoro para niños',
    lead: 'Pistas visuales y recorridos accesibles para buscar, comparar y resolver pequeños problemas juntos.',
    intro: 'Una búsqueda del tesoro para niños puede hacerse en una sola habitación. El tesoro puede ser un personaje de juguete y las pistas, fotografías. No hace falta leer, correr ni competir para participar.',
    learning: 'Relacionar una fotografía con un lugar ofrece una tarea concreta de correspondencia. Seguir pistas puede incluir palabras de posición y pequeñas decisiones. Estas exigencias dependen del diseño del juego; no lo convierten en un entrenamiento demostrado de memoria o atención.',
    steps: ['Elija dos lugares seguros y accesibles. Tome fotografías que muestren claramente dónde buscar.', 'Entregue una pista cada vez. Explore la imagen junto al niño y ayude si el encuadre es difícil de reconocer.', 'Al encontrar el objeto, deje que el niño elija dónde esconderlo para el adulto. Intercambiar papeles también es divertido.'],
    adapt: 'Para jugar sentado, esconda objetos al alcance sobre una mesa. Use objetos de referencia o descripciones sonoras cuando las fotografías no sean accesibles. Evite cronómetros y compare la dificultad de las pistas, no la rapidez de los niños.',
    safety: 'No esconda objetos junto a enchufes, productos de limpieza, agua, alturas o puertas que puedan cerrarse. Supervise y use un recorrido conocido.',
    faq: [['¿Cómo buscar el tesoro sin saber leer?', 'Use fotografías, dibujos sencillos u objetos que representen el destino. Ofrezca una pista cada vez y compruebe que el formato se entiende.'], ['¿Cuántas pistas hay que preparar?', 'Empiece con dos y observe el interés. Un recorrido corto completo puede resultar más agradable que muchas pistas con ayuda constante.']],
    bridge: 'Pedir ayuda, elegir un lugar o anunciar un hallazgo puede apoyarse mediante comunicación con imágenes.'
  } },
  { type: 'symbolic', pt: {
    slug: 'brincar-com-caixas-de-cartao', title: 'Brincar com caixas de cartão',
    lead: 'Casas, garagens e cenários: transformar caixas de cartão em brincadeiras abertas, simples e acessíveis.',
    intro: 'Brincar com caixas de cartão permite decidir o que um objeto vai representar. Uma caixa aberta pode ser garagem, loja ou casa de um boneco. O adulto prepara condições seguras; a criança não precisa de copiar um projeto.',
    learning: 'Um material sem função única pode convidar a imaginar usos e experimentar dimensões. Perguntar se um boneco cabe numa porta relaciona a história com um problema concreto. A liberdade de uso não prova que caixas sejam superiores a todos os brinquedos nem que aumentem a criatividade de forma mensurável.',
    steps: ['Ofereça uma caixa limpa e aberta com um boneco ou carrinho. Espere para perceber que utilização interessa.', 'Se surgir uma ideia de casa ou garagem, o adulto pode preparar uma abertura. Testem com a personagem antes de acrescentar detalhes.', 'Convidem outra pessoa a visitar o cenário. Deixem que o lugar mude de função quando a criança quiser.'],
    adapt: 'Uma caixa pequena sobre a mesa permite construir sem entrar nela. Uma abertura ampla facilita colocar objetos. Quem não manipula o material pode escolher o cenário, indicar posições ou dirigir a história.',
    safety: 'Retire agrafos, cordões e plástico. O adulto faz os cortes e verifica as arestas. Não feche a criança dentro de caixas nem permita subir a estruturas improvisadas; mantenha as passagens livres.',
    faq: [['É preciso decorar a caixa?', 'Não. Decorar é uma opção, não uma etapa obrigatória. A caixa pode mudar de significado sem qualquer alteração visual.'], ['Materiais reutilizados são sempre seguros?', 'Não. Limpeza, resistência, tamanho e ausência de elementos perigosos têm de ser verificados antes de brincar.']],
    bridge: 'Escolher o que a caixa representa ou dar instruções a uma personagem pode incluir mensagens construídas com cartões.'
  }, en: {
    slug: 'cardboard-box-play-ideas', title: 'Cardboard box play ideas',
    lead: 'Houses, garages and story settings: turn cardboard boxes into open-ended, accessible play.',
    intro: 'Cardboard box play lets children decide what an object represents. An open box may become a garage, shop or doll’s house. Adults prepare safe conditions; children do not have to copy a project.',
    learning: 'A material without one fixed use can invite imagined purposes and experiments with size. Checking whether a doll fits through a doorway links a story to a concrete problem. Open-ended use does not establish that boxes outperform every toy or measurably increase creativity.',
    steps: ['Offer a clean open box with a doll or toy car. Wait to see which use interests the child.', 'If a house or garage idea emerges, an adult can make an opening. Test it with the character before adding details.', 'Invite another person to visit the setting. Allow its purpose to change whenever the child chooses.'],
    adapt: 'A small tabletop box allows construction without climbing inside. A wide opening makes placing objects easier. A child who does not manipulate materials can choose the setting, indicate positions or direct the story.',
    safety: 'Remove staples, cords and plastic. Adults should cut and check edges. Never close a child inside a box or allow climbing on improvised structures; keep pathways clear.',
    faq: [['Does the box need decorating?', 'No. Decorating is optional. A box can change meaning without any visual alteration.'], ['Are reused materials always safe?', 'No. Check cleanliness, strength, size and the absence of hazards before play.']],
    bridge: 'Choosing what a box represents or giving a character instructions can involve messages built with picture cards.'
  }, es: {
    slug: 'jugar-con-cajas-de-carton', title: 'Jugar con cajas de cartón',
    lead: 'Casas, garajes y escenarios: transformar cajas en propuestas de juego abiertas y accesibles.',
    intro: 'Jugar con cajas de cartón permite decidir qué representa un objeto. Una caja abierta puede ser un garaje, una tienda o una casa de muñecos. El adulto prepara condiciones seguras; el niño no tiene que copiar un proyecto.',
    learning: 'Un material sin una única función invita a imaginar usos y experimentar con tamaños. Comprobar si un muñeco cabe por una puerta relaciona la historia con un problema concreto. Esto no prueba que las cajas sean superiores a todos los juguetes ni que aumenten la creatividad de forma medible.',
    steps: ['Ofrezca una caja limpia y abierta con un muñeco o coche. Espere para descubrir qué uso interesa.', 'Si surge una casa o un garaje, el adulto puede preparar una abertura. Pruébenla con el personaje antes de añadir detalles.', 'Invite a otra persona a visitar el escenario. Permita que cambie de función cuando el niño quiera.'],
    adapt: 'Una caja pequeña sobre una mesa permite construir sin entrar dentro. Una abertura amplia facilita colocar objetos. Quien no manipule materiales puede elegir el escenario, indicar posiciones o dirigir la historia.',
    safety: 'Retire grapas, cordones y plástico. El adulto realiza cortes y revisa bordes. Nunca cierre al niño dentro de una caja ni permita subir a estructuras improvisadas; mantenga libres las zonas de paso.',
    faq: [['¿Hace falta decorar la caja?', 'No. Decorar es opcional. Una caja puede cambiar de significado sin ninguna modificación visual.'], ['¿Los materiales reutilizados siempre son seguros?', 'No. Hay que revisar limpieza, resistencia, tamaño y ausencia de elementos peligrosos antes de jugar.']],
    bridge: 'Elegir qué representa la caja o dar instrucciones a un personaje puede incluir mensajes construidos con tarjetas.'
  } },
  { type: 'practical', pt: {
    slug: 'desenho-livre-na-infancia', title: 'Desenho livre na infância',
    lead: 'Riscos, cores e histórias: acompanhar o desenho sem modelos obrigatórios nem interpretações psicológicas.',
    intro: 'O desenho livre na infância pode começar com marcas que não representam nada. O papel oferece um lugar para experimentar gestos, cores e ideias. A criança não tem de explicar o desenho nem preencher os espaços como o adulto espera.',
    learning: 'Escolher uma ferramenta, variar um traço e decidir onde colocar uma marca são ações concretas da atividade. Algumas crianças atribuem histórias aos desenhos; outras preferem explorar o movimento. Um desenho isolado não permite diagnosticar emoções, inteligência ou problemas familiares.',
    steps: ['Disponha uma folha grande e poucas ferramentas adequadas à idade. Deixe escolher sem apresentar um modelo para copiar.', 'Comente algo observável: «Fizeste uma linha comprida.» Evite adivinhar que uma forma é uma casa ou perguntar repetidamente o que significa.', 'Se a criança quiser contar, escreva a sua legenda à parte. Pode guardar o desenho, alterá-lo ou escolher não o mostrar.'],
    adapt: 'Fixe o papel para não deslizar e ofereça ferramentas fáceis de agarrar. Desenhar numa superfície inclinada pode ser uma opção de conforto, conforme a criança. Para quem não desenha diretamente, escolher cores e orientar um parceiro mantém a autoria das decisões.',
    safety: 'Use materiais próprios para crianças, respeite o rótulo e supervisione. Retire tampas pequenas e ferramentas partidas; não use tintas ou marcadores de utilização industrial.',
    faq: [['Devo ensinar a desenhar dentro das linhas?', 'Essa pode ser outra atividade, se houver interesse. No desenho livre, a exploração não depende de contornos nem de um resultado semelhante ao modelo.'], ['Um desenho escuro significa tristeza?', 'Não se pode concluir isso a partir de uma cor ou desenho. Converse sem interpretar à força e procure apoio se existirem preocupações mais amplas e persistentes.']],
    bridge: 'Escolher uma cor ou contar algo sobre o desenho pode ser feito por palavras, gestos ou cartões de comunicação.'
  }, en: {
    slug: 'free-drawing-in-early-childhood', title: 'Free drawing in early childhood',
    lead: 'Marks, colours and stories: support drawing without compulsory models or psychological interpretations.',
    intro: 'Free drawing in early childhood may begin with marks that represent nothing. Paper offers space to explore movements, colours and ideas. Children do not have to explain their drawings or fill spaces as adults expect.',
    learning: 'Choosing a tool, varying a line and deciding where to make a mark are concrete actions within drawing. Some children give their pictures stories; others enjoy the movement itself. An isolated drawing cannot diagnose emotions, intelligence or family problems.',
    steps: ['Offer a large sheet and a few age-appropriate tools. Allow choices without supplying a model to copy.', 'Comment on something visible: “That is a long line.” Avoid guessing that a shape is a house or repeatedly asking what it means.', 'If the child wants to tell a story, write their caption separately. They may keep, change or choose not to show the picture.'],
    adapt: 'Secure paper so it does not slide and offer easy-to-grip tools. An inclined surface may be a comfortable option depending on the child. Choosing colours and directing a partner preserves decision-making when drawing directly is difficult.',
    safety: 'Use materials intended for children, follow labels and supervise. Remove small caps and broken tools; avoid industrial paints or markers.',
    faq: [['Should children learn to colour inside lines?', 'That can be a different activity if it interests them. Free drawing does not depend on outlines or copying a model.'], ['Does a dark drawing mean a child is sad?', 'A colour or single drawing cannot establish that. Talk without imposing interpretations and seek support for wider, persistent concerns.']],
    bridge: 'Choosing a colour or sharing something about a drawing can happen through words, gestures or communication cards.'
  }, es: {
    slug: 'dibujo-libre-en-la-infancia', title: 'Dibujo libre en la infancia',
    lead: 'Trazos, colores e historias: acompañar sin modelos obligatorios ni interpretaciones psicológicas.',
    intro: 'El dibujo libre en la infancia puede comenzar con marcas que no representan nada. El papel ofrece espacio para experimentar movimientos, colores e ideas. El niño no tiene que explicar el dibujo ni rellenar espacios como espera el adulto.',
    learning: 'Elegir una herramienta, variar un trazo y decidir dónde colocar una marca son acciones concretas. Algunos niños atribuyen historias a sus dibujos; otros prefieren explorar el movimiento. Un dibujo aislado no permite diagnosticar emociones, inteligencia o problemas familiares.',
    steps: ['Ofrezca una hoja grande y pocas herramientas adecuadas a la edad. Deje elegir sin presentar un modelo que copiar.', 'Comente algo observable: «Has hecho una línea larga». Evite adivinar que una forma es una casa o preguntar continuamente qué significa.', 'Si el niño quiere contar una historia, escriba su texto aparte. Puede guardar, cambiar o decidir no mostrar el dibujo.'],
    adapt: 'Fije el papel para que no resbale y ofrezca herramientas fáciles de agarrar. Una superficie inclinada puede ser cómoda según el niño. Elegir colores y dirigir a otra persona mantiene la autoría de las decisiones cuando dibujar directamente resulta difícil.',
    safety: 'Use materiales infantiles, siga la etiqueta y supervise. Retire tapas pequeñas y herramientas rotas; no utilice pinturas ni rotuladores industriales.',
    faq: [['¿Debo enseñar a colorear dentro de las líneas?', 'Puede ser otra actividad si interesa. El dibujo libre no depende de contornos ni de copiar un modelo.'], ['¿Un dibujo oscuro significa tristeza?', 'No puede concluirse por un color o dibujo aislado. Converse sin imponer interpretaciones y busque apoyo ante preocupaciones más amplias y persistentes.']],
    bridge: 'Elegir un color o contar algo sobre el dibujo puede hacerse mediante palabras, gestos o tarjetas de comunicación.'
  } },
  { type: 'practical', pt: {
    slug: 'brincadeiras-de-ritmo-para-criancas', title: 'Brincadeiras de ritmo para crianças',
    lead: 'Palmas, pausas e instrumentos simples para inventar padrões e partilhar escolhas sem exigir precisão.',
    intro: 'As brincadeiras de ritmo para crianças podem começar com duas pancadas suaves na mesa e uma pausa. A criança pode responder, inventar outro som ou apenas escutar. Não é preciso acompanhar uma música inteira nem acertar no tempo.',
    learning: 'Alternar som e silêncio torna um padrão audível. Repetir ou alterar esse padrão oferece uma tarefa de escuta e ação. Não se deve concluir que estas brincadeiras melhoram automaticamente a leitura, a fala ou a inteligência; brincar com sons também não é musicoterapia.',
    steps: ['Escolha uma superfície ou instrumento seguro com som suave. Explore primeiro o volume confortável.', 'Faça um padrão curto e espere. Se a criança responder de outra maneira, imite a proposta dela em vez de corrigir.', 'Deixe a criança escolher quando começar e parar. Podem acompanhar uma canção conhecida ou manter apenas os sons inventados.'],
    adapt: 'Mostre sinais visuais de começo e pausa. Uma pessoa pode apontar para cartões de sons enquanto outra toca. Para quem se incomoda com som, ofereça movimentos silenciosos ou outra atividade; não exija tolerar ruído para participar.',
    safety: 'Evite volumes altos e instrumentos junto dos ouvidos. Verifique peças e baquetas; não improvise chocalhos com recipientes que possam abrir e libertar grãos ou contas.',
    faq: [['É preciso comprar instrumentos musicais?', 'Não. Palmas suaves ou uma superfície segura podem chegar. O adulto deve verificar o volume e os materiais usados.'], ['Estas brincadeiras são musicoterapia?', 'Não. Musicoterapia envolve um profissional, objetivos e uma intervenção própria. Uma brincadeira musical em casa não deve ser apresentada como tratamento.']],
    bridge: 'Escolher continuar ou parar é especialmente importante numa atividade sonora; cartões de comunicação podem apoiar essa escolha.'
  }, en: {
    slug: 'rhythm-games-for-young-children', title: 'Rhythm games for young children',
    lead: 'Claps, pauses and simple instruments: invent patterns and share choices without demanding precision.',
    intro: 'Rhythm games for young children can start with two gentle taps and a pause. A child may respond, invent another sound or simply listen. Keeping time with an entire song is unnecessary.',
    learning: 'Alternating sound and silence makes a pattern audible. Repeating or changing it offers a specific listening and action task. These games should not be said to automatically improve reading, speech or intelligence; playing with sound is also different from music therapy.',
    steps: ['Choose a safe surface or instrument with a soft sound. First explore a comfortable volume.', 'Make a short pattern and wait. If the child responds differently, copy their idea rather than correcting it.', 'Let the child choose when to start and stop. Follow a familiar song or keep using invented sounds.'],
    adapt: 'Show visual start and pause cues. One person can point to sound cards while another plays. Offer silent movements or different play if sound is uncomfortable; tolerating noise is not a condition of participation.',
    safety: 'Avoid high volume and instruments near ears. Check parts and beaters; do not make shakers from containers that could open and release grains or beads.',
    faq: [['Are musical instruments necessary?', 'No. Gentle clapping or a safe surface may be enough. Adults should check sound levels and materials.'], ['Are rhythm games music therapy?', 'No. Music therapy involves a professional, specific goals and an intervention. Musical play at home should not be presented as treatment.']],
    bridge: 'Choosing to continue or stop is especially important in sound play; communication cards can support that choice.'
  }, es: {
    slug: 'juegos-de-ritmo-para-ninos', title: 'Juegos de ritmo para niños',
    lead: 'Palmas, pausas e instrumentos sencillos para inventar patrones y compartir elecciones sin exigir precisión.',
    intro: 'Los juegos de ritmo para niños pueden empezar con dos golpes suaves y una pausa. El niño puede responder, inventar otro sonido o simplemente escuchar. No hace falta seguir una canción entera ni acertar el tempo.',
    learning: 'Alternar sonido y silencio hace audible un patrón. Repetirlo o cambiarlo ofrece una tarea concreta de escucha y acción. No debe afirmarse que estos juegos mejoran automáticamente la lectura, el habla o la inteligencia; jugar con sonidos tampoco es musicoterapia.',
    steps: ['Elija una superficie o instrumento seguro con sonido suave. Explore primero un volumen cómodo.', 'Haga un patrón breve y espere. Si el niño responde de otra forma, imite su propuesta en vez de corregir.', 'Deje que elija cuándo empezar y parar. Pueden acompañar una canción conocida o mantener los sonidos inventados.'],
    adapt: 'Muestre señales visuales de inicio y pausa. Una persona puede señalar tarjetas de sonidos mientras otra toca. Si el sonido molesta, ofrezca movimientos silenciosos u otro juego; tolerar ruido no es una condición para participar.',
    safety: 'Evite volúmenes altos e instrumentos cerca de los oídos. Revise piezas y baquetas; no improvise sonajeros con recipientes que puedan abrirse y liberar granos o cuentas.',
    faq: [['¿Hace falta comprar instrumentos musicales?', 'No. Palmas suaves o una superficie segura pueden bastar. El adulto debe revisar el volumen y los materiales.'], ['¿Estos juegos son musicoterapia?', 'No. La musicoterapia implica un profesional, objetivos y una intervención propia. Un juego musical en casa no debe presentarse como tratamiento.']],
    bridge: 'Elegir continuar o parar es especialmente importante con sonidos; las tarjetas de comunicación pueden apoyar esa elección.'
  } },
  { type: 'guided', pt: {
    slug: 'brincar-as-lojas-e-contar', title: 'Brincar às lojas e descobrir quantidades',
    lead: 'Uma loja imaginária para fazer pedidos, comparar quantidades e contar objetos com sentido.',
    intro: 'Brincar às lojas pode dar uma razão concreta para contar: precisamos de uma maçã para cada personagem. O pedido tem sentido dentro da história. Números escritos e dinheiro de brincar podem esperar até serem interessantes e acessíveis.',
    learning: 'Distribuir um objeto por pessoa permite explorar correspondência um a um. Contar tocando em cada objeto ajuda a tornar a contagem visível. A investigação sobre brincar guiado apoia alguns resultados matemáticos, mas não valida esta loja doméstica como método garantido de aprendizagem.',
    steps: ['Prepare uma banca com poucos objetos grandes e seguros. A criança escolhe vender, comprar ou organizar os produtos.', 'Faça um pedido pequeno, como dois objetos. Conte em conjunto se a criança quiser e confirme a quantidade colocando cada objeto num lugar.', 'Inventem um problema: há três personagens e só dois pratos. Experimentem soluções, incluindo mudar a história em vez de procurar uma única resposta.'],
    adapt: 'Comece por «um para cada» sem algarismos. Use listas com imagens e deixe apontar o pedido. Para ampliar, compare dois conjuntos pequenos ou troque papéis; não acrescente preços e trocos antes de fazerem sentido.',
    safety: 'Use objetos de imitação grandes ou cartões grandes. Evite moedas verdadeiras e fichas pequenas quando houver risco de ingestão; não use embalagens de medicamentos ou produtos de limpeza.',
    faq: [['É preciso reconhecer números para brincar às lojas?', 'Não. Pode começar por pedidos com objetos, imagens e quantidades pequenas, sem preços escritos.'], ['Devo corrigir quando a criança conta duas vezes o mesmo objeto?', 'Pode modelar devagar, deslocando cada objeto já contado. Evite transformar o erro numa interrupção longa ou retirar o papel escolhido pela criança.']],
    bridge: 'Fazer um pedido e escolher produtos são usos concretos para cartões com imagem e voz, sem exigir fala oral.'
  }, en: {
    slug: 'pretend-shop-counting-play', title: 'Pretend shop play and early counting',
    lead: 'An imaginary shop for making requests, comparing amounts and counting objects for a purpose.',
    intro: 'Pretend shop play creates a concrete reason to count: each character needs an apple. A request has meaning within the story. Written numbers and pretend money can wait until they are interesting and accessible.',
    learning: 'Giving one object to each person explores one-to-one correspondence. Touching each object while counting makes the process visible. Guided-play research supports some mathematical outcomes but does not validate this home shop as a guaranteed teaching method.',
    steps: ['Set up a stall with a few large, safe objects. Let the child choose to sell, buy or arrange products.', 'Make a small request, such as two objects. Count together if wanted, checking the amount by putting each object in its own place.', 'Invent a problem: three characters have only two plates. Explore solutions, including changing the story instead of seeking one correct answer.'],
    adapt: 'Begin with “one each” without numerals. Use picture lists and allow pointing to order. Extend by comparing two small groups or swapping roles; avoid adding prices and change before these make sense.',
    safety: 'Use large pretend objects or cards. Avoid real coins and small tokens where swallowing is a risk; do not use medicine or cleaning-product packaging.',
    faq: [['Must children recognise numbers to play shops?', 'No. Start with requests using objects, pictures and small quantities without written prices.'], ['Should adults correct counting the same object twice?', 'Model slowly by moving each counted object. Avoid long interruptions or taking away the child’s chosen role.']],
    bridge: 'Ordering and choosing products gives picture and voice cards a practical purpose without requiring spoken words.'
  }, es: {
    slug: 'jugar-a-las-tiendas-y-contar', title: 'Jugar a las tiendas y descubrir cantidades',
    lead: 'Una tienda imaginaria para hacer pedidos, comparar cantidades y contar objetos con sentido.',
    intro: 'Jugar a las tiendas da una razón concreta para contar: cada personaje necesita una manzana. El pedido tiene sentido dentro de la historia. Los números escritos y el dinero de juguete pueden esperar hasta resultar interesantes y accesibles.',
    learning: 'Repartir un objeto por persona permite explorar la correspondencia uno a uno. Tocar cada objeto al contar hace visible el proceso. La investigación sobre juego guiado apoya algunos resultados matemáticos, pero no valida esta tienda casera como método garantizado de aprendizaje.',
    steps: ['Prepare un puesto con pocos objetos grandes y seguros. El niño elige vender, comprar u organizar productos.', 'Haga un pedido pequeño, como dos objetos. Cuenten juntos si quiere y comprueben la cantidad colocando cada objeto en un lugar.', 'Inventen un problema: hay tres personajes y dos platos. Prueben soluciones, incluso cambiar la historia en lugar de buscar una única respuesta.'],
    adapt: 'Empiece con «uno para cada uno» sin cifras. Use listas con imágenes y permita señalar el pedido. Para ampliar, compare dos grupos pequeños o intercambien papeles; no añada precios y cambio antes de que tengan sentido.',
    safety: 'Use objetos de imitación o tarjetas grandes. Evite monedas reales y fichas pequeñas si existe riesgo de ingestión; no use envases de medicamentos o productos de limpieza.',
    faq: [['¿Hace falta reconocer números para jugar a las tiendas?', 'No. Puede empezar con pedidos mediante objetos, imágenes y pequeñas cantidades sin precios escritos.'], ['¿Debo corregir si cuenta dos veces un objeto?', 'Puede mostrarlo despacio, moviendo cada objeto ya contado. Evite interrupciones largas o retirar el papel elegido por el niño.']],
    bridge: 'Hacer pedidos y elegir productos da una función concreta a las tarjetas con imagen y voz sin exigir habla oral.'
  } }
]

const refs = {
  toys: 'Healey, A. & Mendelsohn, A. (2019). Selecting Appropriate Toys for Young Children in the Digital Era. <em>Pediatrics</em>, 143(1), e20183348. <a href="https://doi.org/10.1542/peds.2018-3348" target="_blank" rel="noopener">DOI</a>.',
  responsive: 'UNICEF & WHO. <em>Care for Child Development</em>. <a href="https://www.unicef.org/documents/care-child-development" target="_blank" rel="noopener">UNICEF</a>.',
  guided: 'Skene, K. et al. (2022). Can guidance during play enhance children’s learning and development in educational contexts? A systematic review and meta-analysis. <em>Child Development</em>, 93(4), 1162–1180. <a href="https://doi.org/10.1111/cdev.13730" target="_blank" rel="noopener">DOI</a>.',
  symbolic: 'Quinn, S., Donnelly, S. & Kidd, E. (2018). The relationship between symbolic play and language acquisition: A meta-analytic review. <em>Developmental Review</em>, 49, 121–135. <a href="https://doi.org/10.1016/j.dr.2018.05.005" target="_blank" rel="noopener">DOI</a>.',
  limits: 'Lillard, A. S. et al. (2013). The impact of pretend play on children’s development: A review of the evidence. <em>Psychological Bulletin</em>, 139(1), 1–34. <a href="https://pubmed.ncbi.nlm.nih.gov/22905949/" target="_blank" rel="noopener">PubMed</a>.',
  puzzle: 'Levine, S. C. et al. (2012). Early puzzle play: a predictor of preschoolers’ spatial transformation skill. <em>Developmental Psychology</em>, 48(2), 530–542. <a href="https://pubmed.ncbi.nlm.nih.gov/22040312/" target="_blank" rel="noopener">PubMed</a>.',
  number: 'Ramani, G. B. & Siegler, R. S. (2008). Promoting broad and stable improvements in low-income children’s numerical knowledge through playing number board games. <em>Child Development</em>, 79(2), 375–394. <a href="https://pubmed.ncbi.nlm.nih.gov/18366429/" target="_blank" rel="noopener">PubMed</a>.',
  spatial: 'NAEYC (2020). Rocking and Rolling. Building New Skills: Block Construction in Toddler Settings. <a href="https://www.naeyc.org/resources/pubs/yc/mar2020/rocking-and-rolling-building-new-skills-block-construction-toddler" target="_blank" rel="noopener">NAEYC</a>.'
}

const ui = {
  pt: {
    brand: 'Fala+', science: 'O que diz a investigação?', practice: 'Como experimentar em casa ou na sala?', adapt: 'Como adaptar sem pressionar?', safety: 'Que cuidados ter com os materiais?',
    question: 'que oportunidades de aprendizagem existem?', limits: 'O que podemos e não podemos concluir?',
    evidence: {
      guided: 'A revisão de Skene e colegas encontrou vantagens do brincar guiado em alguns resultados, incluindo matemática inicial e conhecimento de formas, mas não em todos os domínios estudados. Os contextos e as formas de orientar variaram. Os passos abaixo são propostas práticas inspiradas neste princípio, não atividades testadas individualmente nessa revisão.',
      symbolic: 'A meta-análise de Quinn e colegas encontrou uma associação entre jogo simbólico e linguagem. Associação não prova causa. A revisão crítica de Lillard e colegas alerta para os limites das afirmações causais sobre o faz-de-conta. Nenhuma destas fontes demonstra a eficácia deste brinquedo específico para uma criança concreta.',
      practical: 'O relatório da American Academy of Pediatrics sobre escolha de brinquedos destaca a interação e a adequação à criança. É uma orientação clínica baseada numa síntese de literatura, não um ensaio desta atividade. Aqui descrevemos possibilidades de exploração; não atribuímos ao material um efeito terapêutico ou ganhos garantidos.',
      spatial: 'A investigação sobre brincar guiado aponta para benefícios em alguns resultados específicos, não uma superioridade universal. As orientações sobre construção oferecem exemplos de linguagem e exploração espacial. Aplicar essas ideias a uma brincadeira concreta é uma proposta pedagógica, não a demonstração de que ela produz o mesmo resultado.',
      puzzle: 'O estudo de Levine e colegas acompanhou brincadeiras e uma tarefa espacial posterior. Mesmo considerando algumas diferenças familiares, outros fatores podem explicar a associação. É importante distinguir o que a criança pratica ao montar uma imagem de uma promessa de melhoria geral da aprendizagem.',
      number: 'No estudo de Ramani e Siegler, o jogo numérico foi comparado com um jogo semelhante baseado em cores. Os resultados dizem respeito ao conhecimento numérico medido naquela amostra. Não justificam dizer que todos os jogos de tabuleiro melhoram a matemática, nem atribuir efeitos a competências que não foram avaliadas.'
    },
    responsive: 'O programa Care for Child Development, da UNICEF e OMS, orienta o adulto a observar e responder aos sinais da criança. Na prática, faça uma proposta, dê tempo e ajuste o apoio. Comentar o que está a acontecer pode deixar mais espaço para a iniciativa do que pedir respostas sucessivas.',
    yes: ['A atividade oferece ocasiões para experimentar, escolher e comunicar.', 'As propostas podem ser ajustadas à participação e ao interesse da criança.'],
    no: ['Um brinquedo, uma pontuação ou uma brincadeira isolada não avaliam o desenvolvimento.', 'Não há garantia de ganhos de fala, inteligência ou rendimento escolar por usar este material.'],
    bridgeTitle: 'Manter a comunicação disponível',
    bridgeIntro: 'Na Fala+ (Fala Mais), o Comunicar permite combinar cartões com imagem e voz para construir mensagens, se esse formato for útil à criança.',
    bridgeApp: 'O adulto pode disponibilizar o Comunicar como uma opção para expressar escolhas e mensagens. Gestos, olhar e fala continuam a ser aceites; não se exige usar a app para receber o material.',
    bridgeOutro: 'A app é opcional e não substitui a experiência com objetos reais nem o sistema de comunicação já usado pela criança. Se houver jogo digital, recomenda-se a companhia de um adulto disponível, sem a tornar condição de acesso.',
    faq: [['Como adaptar para uma criança autista?', 'Parta dos interesses, das preferências sensoriais e da forma de comunicar daquela criança. Simplifique materiais, mostre o que vai acontecer e aceite repetição, observação ou pausa. Não existe uma adaptação única para todas as crianças autistas.'], ['Quanto tempo deve durar a brincadeira?', 'Não há uma duração universal para esta proposta. Observe envolvimento, conforto e cansaço; pode terminar após poucas tentativas e voltar noutro dia. A brincadeira não é uma dose terapêutica.']],
    note: 'Conteúdo informativo e propostas educativas, não substituem avaliação ou orientação individual. O desempenho numa brincadeira ou a pontuação num jogo não são uma avaliação do desenvolvimento. Perante preocupações persistentes, procure um profissional de saúde ou educação adequado.',
    keywords: ['aprendizagem pelo brincar', 'brincadeiras inclusivas', 'atividades pré-escolar', 'brinquedos educativos', 'comunicação durante a brincadeira']
  },
  en: {
    brand: 'Talk+', science: 'What does research tell us?', practice: 'How can we try this at home or in class?', adapt: 'How can play be adapted without pressure?', safety: 'What material safety checks matter?',
    question: 'what can children explore?', limits: 'What can and cannot be concluded?',
    evidence: {
      guided: 'Skene and colleagues’ review found advantages for guided play in some outcomes, including early mathematics and shape knowledge, but not across every domain. Contexts and approaches to guidance varied. The steps below are practical suggestions inspired by that principle, not activities individually tested in the review.',
      symbolic: 'Quinn and colleagues’ meta-analysis found an association between symbolic play and language. Association does not prove causation. Lillard and colleagues’ critical review highlights limits to causal claims about pretend play. Neither source establishes the effectiveness of this particular toy for an individual child.',
      practical: 'The American Academy of Pediatrics report on toy selection emphasises interaction and suitability for the child. It is clinical guidance drawing on literature, not a trial of this activity. We describe opportunities for exploration without assigning the material a therapeutic effect or guaranteed gains.',
      spatial: 'Guided-play research points to benefits for some specific outcomes, not universal superiority. Construction guidance gives examples of spatial language and exploration. Applying those ideas to an individual activity is an educational suggestion, not proof that it produces the same result.',
      puzzle: 'Levine and colleagues observed play and a later spatial task. Even after accounting for some family differences, other factors may explain the association. What a child practises while completing a picture should be distinguished from promises of general learning improvement.',
      number: 'Ramani and Siegler compared a number game with a similar colour-based game. Findings concern numerical knowledge measured in that sample. They do not justify saying that every board game improves mathematics or assigning effects to abilities that were not assessed.'
    },
    responsive: 'UNICEF and WHO’s Care for Child Development approach guides adults to observe and respond to children’s signals. In practice, offer an idea, allow time and adjust support. Commenting on what is happening can leave more room for initiative than asking for repeated answers.',
    yes: ['The activity creates opportunities to experiment, choose and communicate.', 'Suggestions can be adjusted to the child’s participation and interests.'],
    no: ['A toy, score or isolated play activity cannot assess development.', 'Using this material does not guarantee gains in speech, intelligence or school performance.'],
    bridgeTitle: 'Keep communication available',
    bridgeIntro: 'In Talk+ (Talk Plus), Communicate allows picture and voice cards to be combined into messages when that format is useful for the child.',
    bridgeApp: 'Adults can make Communicate available as an option for choices and messages. Gestures, gaze and speech remain welcome; using the app is not a requirement for receiving materials.',
    bridgeOutro: 'The app is optional. It does not replace real-object experiences or the child’s existing communication system. For digital play, an available adult’s company is recommended without making it a condition of access.',
    faq: [['How can this be adapted for an autistic child?', 'Start with the individual child’s interests, sensory preferences and communication. Simplify materials, show what will happen and accept repetition, observation or a break. There is no single adaptation for all autistic children.'], ['How long should the activity last?', 'There is no universal duration for this suggestion. Observe engagement, comfort and tiredness; stopping after a few attempts and returning another day is fine. Play is not a therapeutic dose.']],
    note: 'Informational content and educational suggestions do not replace individual assessment or guidance. Performance in play or a game score is not a developmental assessment. Seek an appropriate health or education professional for persistent concerns.',
    keywords: ['learning through play', 'inclusive play activities', 'preschool activities', 'educational toys', 'communication during play']
  },
  es: {
    brand: 'Habla+', science: '¿Qué dice la investigación?', practice: '¿Cómo probarlo en casa o en el aula?', adapt: '¿Cómo adaptar sin presionar?', safety: '¿Qué cuidados requieren los materiales?',
    question: '¿Qué oportunidades ofrece', limits: '¿Qué podemos y no podemos concluir?',
    evidence: {
      guided: 'La revisión de Skene y sus colegas encontró ventajas del juego guiado en algunos resultados, como matemáticas iniciales y conocimiento de formas, pero no en todos los ámbitos. Los contextos y las formas de orientar variaron. Los pasos siguientes son propuestas prácticas inspiradas en ese principio, no actividades evaluadas individualmente en la revisión.',
      symbolic: 'El metaanálisis de Quinn y sus colegas encontró una asociación entre juego simbólico y lenguaje. Asociación no demuestra causalidad. La revisión crítica de Lillard y sus colegas señala límites en las afirmaciones causales sobre el juego simbólico. Ninguna fuente demuestra la eficacia de este juguete concreto para un niño particular.',
      practical: 'El informe de la American Academy of Pediatrics sobre elección de juguetes destaca la interacción y la adecuación al niño. Es una orientación clínica basada en literatura, no un ensayo de esta actividad. Describimos oportunidades de exploración sin atribuir al material efectos terapéuticos ni mejoras garantizadas.',
      spatial: 'La investigación sobre juego guiado indica beneficios en algunos resultados concretos, no una superioridad universal. Las orientaciones sobre construcción aportan ejemplos de lenguaje y exploración espacial. Aplicarlas a una actividad concreta es una propuesta educativa, no una demostración de que produzca el mismo resultado.',
      puzzle: 'Levine y sus colegas observaron el juego y una tarea espacial posterior. Incluso considerando algunas diferencias familiares, otros factores pueden explicar la asociación. Hay que distinguir lo que se practica al completar una imagen de las promesas de mejora general del aprendizaje.',
      number: 'Ramani y Siegler compararon un juego numérico con otro similar basado en colores. Los resultados corresponden al conocimiento numérico medido en aquella muestra. No justifican afirmar que todos los juegos de mesa mejoran las matemáticas ni atribuir efectos a habilidades no evaluadas.'
    },
    responsive: 'Care for Child Development, de UNICEF y OMS, orienta al adulto a observar y responder a las señales del niño. En la práctica, proponga una idea, dé tiempo y ajuste el apoyo. Comentar lo que ocurre puede dejar más espacio para la iniciativa que pedir respuestas continuamente.',
    yes: ['La actividad ofrece ocasiones para experimentar, elegir y comunicarse.', 'Las propuestas se pueden ajustar a la participación y al interés del niño.'],
    no: ['Un juguete, una puntuación o un juego aislado no evalúan el desarrollo.', 'Usar este material no garantiza mejoras del habla, la inteligencia o el rendimiento escolar.'],
    bridgeTitle: 'Mantener disponible la comunicación',
    bridgeIntro: 'En Habla+ (Habla Más), Comunicar permite combinar tarjetas con imagen y voz para construir mensajes, si ese formato es útil para el niño.',
    bridgeApp: 'El adulto puede ofrecer Comunicar como una opción para expresar elecciones y mensajes. También se aceptan gestos, mirada y habla; usar la app no es un requisito para recibir el material.',
    bridgeOutro: 'La app es opcional y no sustituye la experiencia con objetos reales ni el sistema de comunicación habitual. En el juego digital se recomienda la compañía de un adulto disponible, sin convertirla en una condición de acceso.',
    faq: [['¿Cómo adaptarlo para un niño autista?', 'Parta de sus intereses, preferencias sensoriales y forma de comunicarse. Simplifique materiales, muestre qué ocurrirá y acepte repetición, observación o pausa. No hay una adaptación única para todos los niños autistas.'], ['¿Cuánto debe durar el juego?', 'No hay una duración universal. Observe interés, comodidad y cansancio; pueden terminar tras pocos intentos y volver otro día. El juego no es una dosis terapéutica.']],
    note: 'Contenido informativo y propuestas educativas que no sustituyen una evaluación u orientación individual. El desempeño al jugar o la puntuación de un juego no son una evaluación del desarrollo. Ante preocupaciones persistentes, consulte a un profesional de salud o educación adecuado.',
    keywords: ['aprendizaje mediante el juego', 'juegos inclusivos', 'actividades de preescolar', 'juguetes educativos', 'comunicación durante el juego']
  }
}

export const TOY_CATALOG = topics.map(topic => ({
  id: topic.pt.slug, theme: 'brincar',
  ...Object.fromEntries(['pt', 'en', 'es'].map(lang => [lang, {
    live: true, slug: topic[lang].slug, title: topic[lang].title, teaser: topic[lang].lead
  }]))
}))

export function toyArticle(id, lang) {
  const topic = topics.find(t => t.pt.slug === id)
  if (!topic || !ui[lang]) throw new Error(`Unknown toy article: ${id}/${lang}`)
  const a = topic[lang], l = ui[lang]
  const sourceKeys = ['toys', 'responsive']
  if (topic.type === 'symbolic') sourceKeys.push('symbolic', 'limits')
  else if (topic.type !== 'practical') sourceKeys.push(topic.type)
  if (topic.type === 'spatial') sourceKeys.push('guided')
  const primaryWords = a.title.split(':')[0].split(' ')
  while (primaryWords.length > 2 && !a.intro.toLowerCase().includes(primaryWords.join(' ').toLowerCase())) primaryWords.pop()
  const primary = primaryWords.join(' ')
  const primaryAt = a.intro.toLowerCase().indexOf(primary.toLowerCase())
  if (primaryAt < 0) throw new Error(`Primary keyword missing from intro: ${id}/${lang}`)
  const intro = a.intro.slice(0, primaryAt) + '<strong>' + a.intro.slice(primaryAt, primaryAt + primary.length) + '</strong>' + a.intro.slice(primaryAt + primary.length)
  let description = a.lead.toLowerCase().includes(primary.toLowerCase()) ? a.lead : `${primary}: ${a.lead}`
  if (description.length > 155) description = description.slice(0, 152).replace(/\s+\S*$/, '') + '…'
  return {
    id, slug: a.slug, theme: 'brincar', short: a.title, date: '2026-10-27',
    titleTag: `${a.title} · ${l.brand}`, description,
    keywords: [primary.toLowerCase(), ...l.keywords],
    h1: `<span class="word-highlight">${a.title.split(':')[0]}</span>${a.title.includes(':') ? ' — ' + a.title.split(':').slice(1).join(':').trim() : ''}`,
    lead: a.lead,
    blocks: [
      { intro },
      { h2: l.science, id: 'investigacao' },
      { p: l.evidence[topic.type] },
      { p: l.responsive },
      { h2: `${a.title.split(':')[0]}: ${l.question}`, id: 'oportunidades' },
      { p: a.learning },
      { h2: l.practice, id: 'experimentar' },
      { ol: a.steps },
      { h2: l.adapt, id: 'adaptar' },
      { p: a.adapt },
      { h2: l.safety, id: 'materiais' },
      { p: a.safety },
      { h2: l.limits, id: 'limites' },
      { evidence: { yes: l.yes, no: l.no } },
      { bridge: { title: l.bridgeTitle, intro: l.bridgeIntro, items: [[a.bridge, l.bridgeApp]], outro: l.bridgeOutro } }
    ],
    faq: [...a.faq, ...l.faq], note: l.note,
    sources: sourceKeys.map(key => refs[key]),
    related: [topics[(topics.indexOf(topic) + 1) % topics.length].pt.slug, 'importancia-do-brincar', 'brincar-ao-faz-de-conta']
  }
}
