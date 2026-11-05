// Practical, source-led guides for common questions around appointments and therapy.
// Content is localised in PT/EN/ES and deliberately avoids universal clinical advice.
const live = true
const M = (pt, en, es) => ({ pt, en, es })
const SOURCES = {
  nice: '<a href="https://www.nice.org.uk/guidance/ng204/chapter/Recommendations" rel="noopener" target="_blank">NICE, Babies, children and young people’s experience of healthcare</a>',
  who: '<a href="https://www.who.int/news-room/fact-sheets/detail/rehabilitation" rel="noopener" target="_blank">WHO, Rehabilitation</a>',
  ashaEarly: '<a href="https://www.asha.org/practice-portal/professional-issues/early-intervention/" rel="noopener" target="_blank">ASHA, Early Intervention</a>',
  ashaDocs: '<a href="https://www.asha.org/practice-portal/professional-issues/documentation-in-health-care/" rel="noopener" target="_blank">ASHA, Documentation in Health Care</a>',
  ashaDelivery: '<a href="https://www.asha.org/practice/varied-service-delivery/" rel="noopener" target="_blank">ASHA, Varied Service Delivery</a>',
  ashaTele: '<a href="https://www.asha.org/practice-portal/professional-issues/telepractice/" rel="noopener" target="_blank">ASHA, Telepractice</a>',
  aota: '<a href="https://www.aota.org/practice/domain-and-process/intervention-new" rel="noopener" target="_blank">AOTA, Intervention</a>',
}

const T = [
  {
    id: 'o-que-levar-consulta-desenvolvimento-infantil',
    slug: M('o-que-levar-consulta-desenvolvimento-infantil', 'what-to-bring-child-development-appointment', 'que-llevar-consulta-desarrollo-infantil'),
    title: M('O que levar para uma consulta de desenvolvimento infantil?', 'What should you bring to a child development appointment?', '¿Qué llevar a una consulta de desarrollo infantil?'),
    seo: M('O que levar à consulta de desenvolvimento?', 'What to bring to a development appointment', 'Qué llevar a una consulta de desarrollo'),
    teaser: M('Uma lista simples para organizar dúvidas e exemplos sem transformar a consulta num exame à família.', 'A simple way to organise questions and examples without turning the appointment into a test of the family.', 'Una forma sencilla de organizar preguntas y ejemplos sin convertir la consulta en un examen familiar.'),
    keywords: M(['consulta de desenvolvimento infantil', 'o que levar à consulta', 'preparar consulta pediatria'], ['child development appointment', 'what to bring to appointment', 'prepare paediatric appointment'], ['consulta desarrollo infantil', 'qué llevar a la consulta', 'preparar consulta pediátrica']),
    lead: M('Preparar uma <strong>consulta de desenvolvimento infantil</strong> não exige um dossier perfeito. Uma lista curta de dúvidas, exemplos do quotidiano e documentos relevantes costuma ser mais útil do que tentar registar tudo o que a criança faz.', 'Preparing for a <strong>child development appointment</strong> does not require a perfect file. A short list of questions, everyday examples and relevant documents is usually more useful than trying to record everything a child does.', 'Preparar una <strong>consulta de desarrollo infantil</strong> no exige un expediente perfecto. Una lista breve de preguntas, ejemplos cotidianos y documentos relevantes suele ser más útil que intentar registrar todo lo que hace el niño.'),
    sections: M([
      ['O que vale a pena reunir?', 'Leve o motivo da consulta escrito em duas ou três frases, informação sobre saúde, audição, medicação e desenvolvimento, e relatórios anteriores que sejam pertinentes. A escola ou outros profissionais podem fornecer exemplos, mas não é necessário recolher opiniões de toda a gente. Confirme antecipadamente se existe algum formulário específico.'],
      ['Que exemplos ajudam o profissional?', 'Escolha situações concretas: como a criança pede ajuda, compreende instruções, brinca, comunica dor ou reage a mudanças. Um vídeo curto pode ajudar quando algo não acontece na consulta, desde que respeite a privacidade e o serviço aceite recebê-lo. Descreva também o que corre bem e os apoios que já funcionam.'],
      ['Que perguntas levar?', 'Pergunte qual é o objetivo da consulta, o que será observado, que conclusões podem ou não ser tiradas e quais são os próximos passos. No fim, confirme quem fica responsável por cada ação e quando haverá revisão. Não conseguir responder a uma pergunta não é falhar: pode ficar registada para esclarecer depois.']
    ], [
      ['What is worth gathering?', 'Bring two or three sentences explaining the reason for the appointment, relevant health, hearing, medication and developmental information, and previous reports that matter. School or other professionals may offer examples, but you do not need an opinion from everyone. Ask beforehand whether a specific form is required.'],
      ['Which examples help?', 'Choose concrete situations: how the child asks for help, understands directions, plays, communicates pain or responds to change. A short video may help when something does not happen in the clinic, provided privacy is protected and the service accepts it. Include strengths and support that already works.'],
      ['Which questions should you take?', 'Ask about the purpose of the appointment, what will be observed, what can and cannot be concluded, and the next steps. At the end, clarify who is responsible for each action and when review will happen. Not knowing an answer is not a failure; it can be followed up later.']
    ], [
      ['¿Qué conviene reunir?', 'Lleva dos o tres frases con el motivo de la consulta, información pertinente sobre salud, audición, medicación y desarrollo, y los informes anteriores necesarios. La escuela u otros profesionales pueden aportar ejemplos, pero no hace falta recoger la opinión de todo el mundo. Pregunta antes si se requiere algún formulario.'],
      ['¿Qué ejemplos ayudan?', 'Elige situaciones concretas: cómo pide ayuda, comprende instrucciones, juega, comunica dolor o responde a cambios. Un vídeo breve puede ayudar si algo no ocurre en consulta, siempre que se proteja la privacidad y el servicio lo acepte. Incluye fortalezas y apoyos que ya funcionan.'],
      ['¿Qué preguntas conviene llevar?', 'Pregunta cuál es el objetivo, qué se observará, qué conclusiones pueden o no obtenerse y cuáles son los siguientes pasos. Al final, confirma quién se responsabiliza de cada acción y cuándo se revisará. No saber una respuesta no es fallar; puede aclararse después.']
    ]),
    faq: M([
      ['É obrigatório levar vídeos?', 'Não. São apenas uma possível fonte de contexto e devem ser partilhados só quando forem pertinentes e aceites pelo serviço.'],
      ['Devo levar todos os relatórios?', 'Leve os que ajudam a responder à pergunta atual. Pode começar por uma lista e perguntar quais são necessários.'],
      ['A criança deve ir à consulta?', 'Depende do tipo de consulta. Confirme com o serviço, sobretudo se existir uma primeira conversa apenas com adultos.'],
      ['Posso levar perguntas escritas?', 'Sim. Uma lista curta ajuda a recordar prioridades e a confirmar os próximos passos.']
    ], [
      ['Must I bring videos?', 'No. They are only one possible source of context and should be shared only when relevant and accepted by the service.'],
      ['Should I bring every report?', 'Bring those that help answer the current question. You can start with a list and ask which documents are needed.'],
      ['Should the child attend?', 'It depends on the appointment. Check with the service, particularly if the first discussion is for adults only.'],
      ['Can I bring written questions?', 'Yes. A short list helps you remember priorities and confirm next steps.']
    ], [
      ['¿Es obligatorio llevar vídeos?', 'No. Son solo una posible fuente de contexto y deben compartirse únicamente si son pertinentes y el servicio los acepta.'],
      ['¿Debo llevar todos los informes?', 'Lleva los que ayuden a responder la pregunta actual. Puedes empezar con una lista y preguntar cuáles hacen falta.'],
      ['¿El niño debe acudir?', 'Depende del tipo de consulta. Confírmalo con el servicio, sobre todo si la primera conversación es solo con adultos.'],
      ['¿Puedo llevar preguntas escritas?', 'Sí. Una lista breve ayuda a recordar prioridades y confirmar los siguientes pasos.']
    ]), sources: [SOURCES.nice, SOURCES.ashaDocs], related: ['primeira-consulta-terapia-da-fala', 'acompanhar-progressos-comunicacao-crianca']
  },
  {
    id: 'crianca-diferente-consulta-e-casa',
    slug: M('crianca-diferente-consulta-e-casa', 'child-behaves-differently-clinic-and-home', 'nino-diferente-consulta-y-casa'),
    title: M('A criança é diferente na consulta e em casa: a avaliação é válida?', 'The child is different in clinic and at home: is the assessment valid?', 'El niño es diferente en consulta y en casa: ¿es válida la evaluación?'),
    seo: M('Criança diferente na consulta e em casa', 'Different behaviour in clinic and at home', 'Conducta diferente en consulta y en casa'),
    teaser: M('O contexto influencia o desempenho; uma avaliação útil integra observação, história e exemplos de vários ambientes.', 'Context affects performance; useful assessment combines observation, history and examples across settings.', 'El contexto influye en el desempeño; una buena evaluación integra observación, historia y ejemplos de varios entornos.'),
    keywords: M(['criança diferente na consulta', 'avaliação desenvolvimento contexto', 'criança não fala na consulta'], ['child different at appointment', 'assessment across settings', 'child does not talk in clinic'], ['niño diferente en consulta', 'evaluación en varios contextos', 'niño no habla en consulta']),
    lead: M('Uma criança pode falar, brincar ou colaborar de forma diferente numa sala desconhecida. Isso não torna automaticamente a <strong>avaliação inválida</strong>, mas significa que o contexto e as condições de observação devem fazer parte da interpretação.', 'A child may talk, play or participate differently in an unfamiliar room. This does not automatically make an <strong>assessment invalid</strong>, but context and observation conditions must be part of interpretation.', 'Un niño puede hablar, jugar o participar de forma distinta en una sala desconocida. Esto no vuelve automáticamente <strong>inválida la evaluación</strong>, pero el contexto y las condiciones deben formar parte de la interpretación.'),
    sections: M([
      ['Porque é que o comportamento muda?', 'Familiaridade, ruído, pessoas novas, cansaço, dor, ansiedade, exigência de linguagem e tempo de resposta podem alterar o que se observa. Algumas crianças mostram mais competências em casa; outras beneficiam da estrutura da consulta. A diferença é informação clínica, não prova de que alguém está errado.'],
      ['Como se constrói uma imagem mais completa?', 'O profissional pode combinar observação, entrevista, tarefas formais, exemplos do quotidiano e informação da escola. Deve registar fatores que possam ter influenciado o desempenho e distinguir o que foi observado do que foi relatado. Uma única sessão raramente descreve todos os contextos da criança.'],
      ['O que fazer quando as versões parecem contraditórias?', 'Leve exemplos concretos, com situação, apoio disponível e resposta da criança. Pergunte se é preciso observar noutro momento ou ambiente. O objetivo não é provar qual versão é verdadeira, mas perceber quando a competência aparece, que barreiras existem e que apoio facilita a participação.']
    ], [
      ['Why can behaviour change?', 'Familiarity, noise, new people, tiredness, pain, anxiety, language demands and response time may change what is observed. Some children show more skills at home; others benefit from clinic structure. The difference is useful information, not proof that someone is wrong.'],
      ['How is a fuller picture built?', 'The clinician may combine observation, interview, formal tasks, everyday examples and school information. Factors affecting performance should be documented, and observed information distinguished from reported information. One session rarely represents every setting in a child’s life.'],
      ['What if accounts seem contradictory?', 'Bring concrete examples with the situation, available support and the child’s response. Ask whether observation at another time or place is needed. The aim is not to prove one account true, but to understand when skills appear, which barriers exist and what enables participation.']
    ], [
      ['¿Por qué puede cambiar la conducta?', 'La familiaridad, el ruido, personas nuevas, cansancio, dolor, ansiedad, exigencia lingüística y tiempo de respuesta pueden cambiar lo observado. Algunos niños muestran más habilidades en casa; otros se benefician de la estructura clínica. La diferencia aporta información, no demuestra que alguien esté equivocado.'],
      ['¿Cómo se obtiene una imagen más completa?', 'El profesional puede combinar observación, entrevista, tareas formales, ejemplos cotidianos e información escolar. Debe registrar factores que afecten al desempeño y distinguir lo observado de lo informado. Una sola sesión rara vez representa todos los entornos del niño.'],
      ['¿Qué hacer si las versiones parecen contradictorias?', 'Aporta ejemplos concretos con situación, apoyo disponible y respuesta del niño. Pregunta si hace falta observar en otro momento o lugar. No se trata de decidir qué versión es verdadera, sino de entender cuándo aparece la habilidad, qué barreras existen y qué apoyo facilita participar.']
    ]),
    faq: M([
      ['Se a criança não falou, o profissional pode avaliar?', 'Pode recolher informação relevante, mas deve explicar os limites e se é necessária nova observação.'],
      ['Um vídeo de casa substitui a consulta?', 'Não. Pode complementar a avaliação, não substituir todo o processo.'],
      ['A escola deve participar?', 'Quando pertinente e com as autorizações adequadas, exemplos da escola podem acrescentar outro contexto.'],
      ['É possível repetir uma tarefa?', 'O profissional decide se repetir ajuda e como isso afeta a interpretação do instrumento.']
    ], [
      ['Can assessment happen if the child did not speak?', 'Relevant information can still be gathered, but limitations and any need for further observation should be explained.'],
      ['Does a home video replace the appointment?', 'No. It may complement assessment but cannot replace the whole process.'],
      ['Should school contribute?', 'When relevant and appropriately authorised, school examples can add another setting.'],
      ['Can a task be repeated?', 'The clinician decides whether repetition helps and how it affects interpretation.']
    ], [
      ['¿Se puede evaluar si el niño no habló?', 'Aun puede recogerse información, pero deben explicarse los límites y si hace falta otra observación.'],
      ['¿Un vídeo de casa sustituye la consulta?', 'No. Puede complementar la evaluación, pero no sustituye todo el proceso.'],
      ['¿Debe participar la escuela?', 'Cuando sea pertinente y esté autorizado, los ejemplos escolares añaden otro contexto.'],
      ['¿Puede repetirse una tarea?', 'El profesional decide si ayuda y cómo afecta a la interpretación.']
    ]), sources: [SOURCES.ashaDocs, SOURCES.ashaEarly], related: ['acompanhar-progressos-comunicacao-crianca', 'relatorios-avaliacao-divergentes-segunda-opiniao']
  },
  {
    id: 'quantas-sessoes-terapia-crianca',
    slug: M('quantas-sessoes-terapia-crianca', 'how-many-therapy-sessions-child', 'cuantas-sesiones-terapia-nino'),
    title: M('Quantas sessões de terapia são necessárias para uma criança?', 'How many therapy sessions does a child need?', '¿Cuántas sesiones de terapia necesita un niño?'),
    seo: M('Quantas sessões de terapia são necessárias?', 'How many therapy sessions does a child need?', 'Cuántas sesiones de terapia necesita un niño'),
    teaser: M('Frequência e duração dependem do objetivo, método, resposta, contexto e possibilidades reais da criança e família.', 'Frequency and duration depend on goals, approach, response, setting and the child and family’s real circumstances.', 'La frecuencia y duración dependen del objetivo, enfoque, respuesta, contexto y posibilidades del niño y la familia.'),
    keywords: M(['quantas sessões de terapia', 'frequência terapia infantil', 'duração terapia criança'], ['how many therapy sessions', 'frequency of child therapy', 'therapy duration child'], ['cuántas sesiones de terapia', 'frecuencia terapia infantil', 'duración terapia niño']),
    lead: M('Não existe um número universal de <strong>sessões de terapia para uma criança</strong>. A chamada dose inclui frequência, duração e intensidade, e deve ser justificada pelo objetivo, abordagem, progresso e impacto do plano no quotidiano.', 'There is no universal number of <strong>therapy sessions for a child</strong>. Dosage includes frequency, duration and intensity, and should be justified by the goal, approach, progress and effect of the plan on daily life.', 'No existe un número universal de <strong>sesiones de terapia para un niño</strong>. La dosis incluye frecuencia, duración e intensidad, y debe justificarse por el objetivo, enfoque, progreso e impacto cotidiano.'),
    sections: M([
      ['O que determina a frequência?', 'O tipo de dificuldade, a evidência para a intervenção escolhida, a idade, o objetivo, a necessidade de prática, a saúde e a tolerância da criança podem influenciar o plano. Sessões diretas, orientação à família, grupos, consulta e prática em rotinas são modelos diferentes; contar apenas visitas não descreve toda a intervenção.'],
      ['Mais sessões significam melhor resultado?', 'Não necessariamente. A intensidade adequada varia e o excesso pode causar fadiga, reduzir tempo de brincar, escola e família ou tornar o plano inviável. Uma frequência menor também precisa de justificação e acompanhamento. A questão central é se o modelo oferece oportunidades suficientes para o objetivo acordado sem sobrecarregar.'],
      ['Quando se deve rever o plano?', 'A equipa deve combinar desde o início quando observar progresso, participação, bem-estar e barreiras. Se a criança muda, o objetivo é alcançado, não há progresso esperado ou a rotina se torna insustentável, frequência e modelo podem ser revistos. Peça que a decisão e o raciocínio fiquem claros.']
    ], [
      ['What determines frequency?', 'The difficulty, evidence for the chosen approach, age, goal, practice needs, health and the child’s tolerance may affect the plan. Direct sessions, family coaching, groups, consultation and routine-based practice are different models; counting visits alone does not describe the whole intervention.'],
      ['Do more sessions mean a better outcome?', 'Not necessarily. Suitable intensity varies, and too much may cause fatigue, reduce time for play, school and family, or make the plan unmanageable. Lower frequency also needs a rationale and monitoring. The key question is whether the model offers enough opportunity for the agreed goal without overload.'],
      ['When should the plan be reviewed?', 'The team should agree from the start when progress, participation, wellbeing and barriers will be reviewed. If the child changes, a goal is met, expected progress is absent or routines become unsustainable, frequency and delivery can be reconsidered. Ask for the reasoning to be clear.']
    ], [
      ['¿Qué determina la frecuencia?', 'La dificultad, evidencia del enfoque, edad, objetivo, necesidad de práctica, salud y tolerancia pueden influir. Sesiones directas, orientación familiar, grupos, consulta y práctica en rutinas son modelos distintos; contar visitas no describe toda la intervención.'],
      ['¿Más sesiones significan mejores resultados?', 'No necesariamente. La intensidad adecuada varía y un exceso puede causar cansancio, reducir tiempo de juego, escuela y familia o hacer inviable el plan. Una frecuencia menor también necesita justificación y seguimiento. Lo importante es ofrecer oportunidades suficientes sin sobrecargar.'],
      ['¿Cuándo se revisa el plan?', 'El equipo debe acordar cuándo revisar progreso, participación, bienestar y barreras. Si el niño cambia, se alcanza un objetivo, no aparece el progreso esperado o la rutina deja de ser sostenible, pueden revisarse frecuencia y modalidad. Pide que se explique el razonamiento.']
    ]),
    faq: M([
      ['Uma sessão por semana é suficiente?', 'Pode ser adequada ou não; depende do objetivo, do modelo e do acompanhamento do progresso.'],
      ['A terapia deve durar até à idade adulta?', 'Não se decide apenas pelo diagnóstico. O apoio é revisto segundo necessidades, objetivos e benefício.'],
      ['Fazer uma pausa faz perder tudo?', 'Não há uma resposta universal. Planeie a pausa e a revisão com a equipa.'],
      ['A escola conta como terapia?', 'Apoio escolar e terapia podem ter papéis diferentes; devem coordenar objetivos sem confundir serviços.']
    ], [
      ['Is one session a week enough?', 'It may or may not be; this depends on goals, delivery model and progress monitoring.'],
      ['Must therapy continue into adulthood?', 'A diagnosis alone does not decide this. Support is reviewed according to needs, goals and benefit.'],
      ['Will a break undo everything?', 'There is no universal answer. Plan the break and review with the team.'],
      ['Does school support count as therapy?', 'School support and therapy may have different roles; goals should be coordinated without confusing services.']
    ], [
      ['¿Una sesión semanal es suficiente?', 'Puede ser adecuada o no; depende del objetivo, modalidad y seguimiento del progreso.'],
      ['¿La terapia debe continuar hasta la adultez?', 'No se decide solo por el diagnóstico. El apoyo se revisa según necesidades, objetivos y beneficio.'],
      ['¿Una pausa hace perder lo conseguido?', 'No hay una respuesta universal. Planifica la pausa y la revisión con el equipo.'],
      ['¿El apoyo escolar cuenta como terapia?', 'El apoyo escolar y la terapia pueden tener funciones distintas; conviene coordinar objetivos sin confundir servicios.']
    ]), sources: [SOURCES.ashaDocs, SOURCES.ashaDelivery, SOURCES.who], related: ['como-escolher-terapias-acompanhamento-crianca', 'como-saber-terapia-esta-resultar']
  },
  {
    id: 'como-saber-terapia-esta-resultar',
    slug: M('como-saber-terapia-esta-resultar', 'how-to-know-child-therapy-is-working', 'como-saber-terapia-esta-funcionando'),
    title: M('Como saber se uma terapia está a resultar?', 'How can you tell whether a child’s therapy is working?', '¿Cómo saber si una terapia infantil está funcionando?'),
    seo: M('Como saber se uma terapia está a resultar?', 'How to know whether child therapy is working', 'Cómo saber si una terapia infantil funciona'),
    teaser: M('Objetivos observáveis, participação, bem-estar e revisão regular ajudam a avaliar benefício sem promessas.', 'Observable goals, participation, wellbeing and regular review help assess benefit without promises.', 'Objetivos observables, participación, bienestar y revisión regular ayudan a valorar el beneficio sin promesas.'),
    keywords: M(['como saber se terapia resulta', 'avaliar progresso terapia', 'objetivos terapia infantil'], ['how to know therapy is working', 'measure therapy progress', 'child therapy goals'], ['cómo saber si terapia funciona', 'medir progreso terapia', 'objetivos terapia infantil']),
    lead: M('Saber se uma <strong>terapia está a resultar</strong> exige mais do que contar respostas certas dentro da sessão. O plano deve ligar objetivos importantes a mudanças observáveis na participação, comunicação, autonomia ou bem-estar e definir quando serão revistos.', 'Knowing whether <strong>therapy is working</strong> takes more than counting correct responses in a session. The plan should connect meaningful goals with observable changes in participation, communication, independence or wellbeing and state when they will be reviewed.', 'Saber si una <strong>terapia está funcionando</strong> exige más que contar respuestas correctas en sesión. El plan debe relacionar objetivos importantes con cambios observables en participación, comunicación, autonomía o bienestar y definir cuándo revisarlos.'),
    sections: M([
      ['Como é um objetivo útil?', 'Um objetivo indica a situação, a participação pretendida, o apoio disponível e a forma de observar mudança. “Melhorar a comunicação” é amplo; “pedir uma pausa durante a rotina escolar usando fala, gesto ou CAA” é mais funcional. O objetivo deve fazer sentido para a criança e família.'],
      ['Que sinais devem ser acompanhados?', 'Combine dados quantitativos e exemplos: nível de ajuda, frequência, variedade de contextos, iniciativa, generalização e impacto no quotidiano. Inclua cansaço, sofrimento, recusa e carga familiar. Melhor desempenho numa tarefa pode ser relevante, mas não prova automaticamente que a competência aparece fora da terapia.'],
      ['E se o progresso não aparecer?', 'Pergunte se o objetivo continua adequado, se a estratégia foi aplicada como previsto, se existem barreiras e se é preciso mudar método, frequência ou contexto. Ausência de progresso não deve ser atribuída automaticamente à criança ou família. Pode justificar reavaliação, consulta entre profissionais ou outra opinião.']
    ], [
      ['What makes a useful goal?', 'A goal states the situation, intended participation, available support and how change will be observed. “Improve communication” is broad; “request a break during a school routine using speech, gesture or AAC” is more functional. It should matter to the child and family.'],
      ['Which signs should be monitored?', 'Combine numbers and examples: level of help, frequency, range of settings, initiation, generalisation and daily impact. Include tiredness, distress, refusal and family burden. Better task performance may matter, but does not automatically show that the skill appears outside therapy.'],
      ['What if progress is not appearing?', 'Ask whether the goal remains suitable, whether the approach was delivered as planned, which barriers exist, and whether method, frequency or setting should change. Lack of progress should not automatically be blamed on the child or family. It may support reassessment, professional consultation or another opinion.']
    ], [
      ['¿Cómo es un objetivo útil?', 'Un objetivo indica la situación, participación deseada, apoyo disponible y cómo observar el cambio. “Mejorar la comunicación” es amplio; “pedir una pausa en la rutina escolar mediante habla, gesto o CAA” es más funcional. Debe importar al niño y a la familia.'],
      ['¿Qué señales conviene seguir?', 'Combina cifras y ejemplos: nivel de ayuda, frecuencia, variedad de entornos, iniciativa, generalización e impacto cotidiano. Incluye cansancio, malestar, rechazo y carga familiar. Mejorar en una tarea puede ser relevante, pero no demuestra que la habilidad aparezca fuera de terapia.'],
      ['¿Y si no aparece progreso?', 'Pregunta si el objetivo sigue siendo adecuado, si el enfoque se aplicó como estaba previsto, qué barreras existen y si conviene cambiar método, frecuencia o contexto. No debe culparse automáticamente al niño o la familia. Puede ser necesaria una reevaluación, coordinación u otra opinión.']
    ]),
    faq: M([
      ['Quanto tempo demora a ver resultados?', 'Depende do objetivo e intervenção. O plano deve definir um momento razoável para rever dados e decisões.'],
      ['Obedecer mais significa melhorar?', 'Não necessariamente. Participação, comunicação e bem-estar são mais informativos do que simples conformidade.'],
      ['O progresso deve aparecer em casa?', 'A generalização é importante, mas pode precisar de apoios e tempo; deve ser observada, não presumida.'],
      ['Posso pedir os objetivos por escrito?', 'Sim. Objetivos e revisão devem ser compreensíveis para a família e, de forma acessível, para a criança.']
    ], [
      ['How long do results take?', 'It depends on the goal and intervention. The plan should set a reasonable point to review data and decisions.'],
      ['Does greater compliance mean improvement?', 'Not necessarily. Participation, communication and wellbeing are more informative than simple compliance.'],
      ['Should progress appear at home?', 'Generalisation matters but may need support and time; it should be observed rather than assumed.'],
      ['Can I ask for written goals?', 'Yes. Goals and review arrangements should be understandable to the family and accessible to the child.']
    ], [
      ['¿Cuánto tardan los resultados?', 'Depende del objetivo y la intervención. El plan debe fijar un momento razonable para revisar datos y decisiones.'],
      ['¿Obedecer más significa mejorar?', 'No necesariamente. Participación, comunicación y bienestar informan más que la simple obediencia.'],
      ['¿El progreso debe verse en casa?', 'La generalización importa, pero puede requerir apoyo y tiempo; debe observarse, no suponerse.'],
      ['¿Puedo pedir los objetivos por escrito?', 'Sí. Los objetivos y la revisión deben ser comprensibles para la familia y accesibles para el niño.']
    ]), sources: [SOURCES.ashaEarly, SOURCES.ashaDocs, SOURCES.aota], related: ['quantas-sessoes-terapia-crianca', 'objetivos-relatorio-plano-apoio']
  },
  {
    id: 'crianca-nao-quer-participar-terapia',
    slug: M('crianca-nao-quer-participar-terapia', 'child-does-not-want-to-attend-therapy', 'nino-no-quiere-participar-terapia'),
    title: M('A criança não quer participar na terapia: o que fazer?', 'The child does not want to take part in therapy: what can help?', 'El niño no quiere participar en terapia: ¿qué se puede hacer?'),
    seo: M('A criança não quer participar na terapia', 'Child does not want to take part in therapy', 'El niño no quiere participar en terapia'),
    teaser: M('A recusa é informação: segurança, vínculo, comunicação, exigência e ambiente devem ser compreendidos.', 'Refusal is information: safety, relationship, communication, demands and environment need to be understood.', 'El rechazo aporta información: hay que comprender seguridad, vínculo, comunicación, exigencia y entorno.'),
    keywords: M(['criança não quer ir à terapia', 'recusa terapia infantil', 'criança chora na terapia'], ['child refuses therapy', 'child cries at therapy', 'therapy participation child'], ['niño rechaza terapia', 'niño llora en terapia', 'participación terapia infantil']),
    lead: M('Quando a <strong>criança não quer participar na terapia</strong>, a prioridade é compreender a recusa, não vencê-la. Dor, medo, separação, sobrecarga sensorial, dificuldade em compreender o que vai acontecer ou exigências desajustadas podem contribuir.', 'When a <strong>child does not want to take part in therapy</strong>, the priority is to understand refusal, not defeat it. Pain, fear, separation, sensory overload, uncertainty or unsuitable demands may contribute.', 'Cuando el <strong>niño no quiere participar en terapia</strong>, la prioridad es comprender el rechazo, no vencerlo. Dolor, miedo, separación, sobrecarga sensorial, incertidumbre o exigencias inadecuadas pueden influir.'),
    sections: M([
      ['O que observar primeiro?', 'Registe quando começa a dificuldade, como a criança comunica desconforto, o que acontece antes e o que ajuda a recuperar. Exclua necessidades de saúde e segurança quando existirem sinais. “Não” pode ser dito por palavras, gestos, afastamento ou comportamento; todas estas formas merecem resposta.'],
      ['Como adaptar a participação?', 'O profissional pode antecipar a sequência, oferecer escolhas reais, reduzir exigência, ajustar ambiente, permitir pausas e construir relação através de interesses da criança. Uma entrada gradual ou a presença de uma pessoa de confiança pode ajudar. A adaptação não significa abandonar objetivos, mas criar acesso seguro.'],
      ['Quando rever ou parar?', 'Sofrimento intenso ou persistente, contenção, medo crescente e ausência de adaptação justificam conversa imediata. Pergunte que hipótese explica a recusa, que mudanças serão testadas e quando rever. Se a relação não recuperar ou a abordagem não for adequada, pode ser necessário pausar ou procurar outra opção.']
    ], [
      ['What should be observed first?', 'Note when distress starts, how the child communicates discomfort, what happens beforehand and what helps recovery. Address possible health and safety needs when signs exist. “No” may be expressed through words, gestures, moving away or behaviour; all deserve a response.'],
      ['How can participation be adapted?', 'The clinician may preview the sequence, offer genuine choices, reduce demand, adjust the environment, allow breaks and build rapport through interests. Gradual entry or a trusted person’s presence may help. Adaptation does not abandon goals; it creates safer access.'],
      ['When should you review or stop?', 'Intense or persistent distress, restraint, growing fear and lack of adaptation require immediate discussion. Ask what may explain refusal, which changes will be tried and when to review. If rapport does not recover or the approach is unsuitable, a pause or another option may be needed.']
    ], [
      ['¿Qué observar primero?', 'Anota cuándo empieza el malestar, cómo lo comunica, qué ocurre antes y qué ayuda a recuperarse. Atiende posibles necesidades de salud y seguridad si hay señales. El “no” puede expresarse con palabras, gestos, alejamiento o conducta; todas merecen respuesta.'],
      ['¿Cómo adaptar la participación?', 'El profesional puede anticipar la secuencia, ofrecer elecciones reales, reducir exigencia, ajustar el entorno, permitir pausas y crear vínculo desde los intereses. Una entrada gradual o la presencia de una persona de confianza puede ayudar. Adaptar no es abandonar objetivos, sino crear acceso seguro.'],
      ['¿Cuándo revisar o parar?', 'El malestar intenso o persistente, la contención, el miedo creciente y la falta de adaptación requieren conversación inmediata. Pregunta qué puede explicar el rechazo, qué cambios se probarán y cuándo revisar. Si no se recupera el vínculo o el enfoque no encaja, puede hacer falta una pausa u otra opción.']
    ]),
    faq: M([
      ['É normal chorar nas primeiras sessões?', 'Alguma incerteza pode acontecer, mas o sofrimento não deve ser ignorado nem tratado como requisito.'],
      ['A criança deve ser obrigada a entrar?', 'Forçar pode aumentar medo e não esclarece a causa. Segurança e adaptação devem orientar a resposta.'],
      ['Uma recompensa resolve a recusa?', 'Pode mudar momentaneamente o comportamento sem resolver dor, medo, sobrecarga ou falta de compreensão.'],
      ['Posso pedir uma sessão de adaptação?', 'Sim. Discuta uma entrada gradual e critérios claros para avaliar se está a ajudar.']
    ], [
      ['Is crying normal in early sessions?', 'Some uncertainty may occur, but distress should not be ignored or treated as a requirement.'],
      ['Should a child be forced to enter?', 'Force can increase fear and does not explain the cause. Safety and adaptation should guide the response.'],
      ['Will a reward solve refusal?', 'It may briefly change behaviour without addressing pain, fear, overload or uncertainty.'],
      ['Can I ask for an adjustment session?', 'Yes. Discuss gradual entry and clear criteria for judging whether it helps.']
    ], [
      ['¿Es normal llorar en las primeras sesiones?', 'Puede haber incertidumbre, pero el malestar no debe ignorarse ni considerarse un requisito.'],
      ['¿Hay que obligarle a entrar?', 'Forzar puede aumentar el miedo y no aclara la causa. La seguridad y adaptación deben orientar la respuesta.'],
      ['¿Un premio resuelve el rechazo?', 'Puede cambiar brevemente la conducta sin resolver dolor, miedo, sobrecarga o incertidumbre.'],
      ['¿Puedo pedir una sesión de adaptación?', 'Sí. Habla de una entrada gradual y criterios claros para valorar si ayuda.']
    ]), sources: [SOURCES.nice, SOURCES.who], related: ['como-escolher-terapias-acompanhamento-crianca', 'como-saber-terapia-esta-resultar']
  },
  {
    id: 'pais-assistir-sessoes-terapia',
    slug: M('pais-assistir-sessoes-terapia', 'should-parents-attend-child-therapy-sessions', 'padres-asistir-sesiones-terapia'),
    title: M('Os pais devem assistir às sessões de terapia?', 'Should parents attend their child’s therapy sessions?', '¿Los padres deben asistir a las sesiones de terapia?'),
    seo: M('Pais devem assistir às sessões de terapia?', 'Should parents attend child therapy sessions?', 'Deben asistir los padres a terapia infantil'),
    teaser: M('Presença, observação e orientação familiar podem combinar-se de formas diferentes conforme a criança e o objetivo.', 'Attendance, observation and family coaching can be combined differently according to the child and goal.', 'Presencia, observación y orientación familiar pueden combinarse de forma distinta según el niño y el objetivo.'),
    keywords: M(['pais assistir terapia', 'acompanhar sessão terapia infantil', 'orientação parental terapia'], ['parents attend therapy sessions', 'parent in child therapy', 'family coaching therapy'], ['padres asistir terapia', 'acompañar sesión terapia infantil', 'orientación familiar terapia']),
    lead: M('Não existe uma regra única sobre os <strong>pais assistirem às sessões de terapia</strong>. A decisão deve considerar idade, privacidade, objetivo, preferências da criança, modelo de intervenção e a forma como a família receberá informação e orientação.', 'There is no single rule about <strong>parents attending therapy sessions</strong>. Decisions should consider age, privacy, goals, the child’s preferences, the intervention model and how the family will receive information and coaching.', 'No existe una regla única sobre si los <strong>padres deben asistir a terapia</strong>. La decisión considera edad, privacidad, objetivo, preferencias del niño, modelo de intervención y cómo recibirá información y orientación la familia.'),
    sections: M([
      ['Quando a presença pode ajudar?', 'Em crianças pequenas e intervenções baseadas em rotinas, observar e praticar estratégias pode facilitar a aplicação no quotidiano. A presença também pode dar segurança ou apoiar comunicação. O adulto não deve transformar a sessão numa avaliação constante nem responder sempre pela criança.'],
      ['Quando pode fazer sentido algum tempo sem os pais?', 'Uma criança mais velha pode querer privacidade, e o profissional pode precisar de observar interação ou autonomia de outra forma. Isto deve ser explicado, adequado à idade e compatível com segurança e consentimento. “Os pais nunca entram” não substitui uma justificação clínica e organizacional clara.'],
      ['Como manter a família envolvida?', 'Podem combinar-se início ou fim em conjunto, observação ocasional, sessão de orientação, objetivos escritos e exemplos para as rotinas. A criança deve saber o que será partilhado, de forma adequada à idade. Pergunte como comunicar dúvidas entre revisões sem invadir o espaço terapêutico.']
    ], [
      ['When can attendance help?', 'With young children and routine-based interventions, observing and practising strategies may support use in daily life. Presence may also provide security or communication support. The adult should not turn the session into constant testing or answer for the child every time.'],
      ['When might some time without parents make sense?', 'An older child may want privacy, and the clinician may need to observe interaction or independence differently. This should be explained, age-appropriate and compatible with safety and consent. “Parents never come in” is not a substitute for a clear rationale.'],
      ['How can families stay involved?', 'Options include a shared beginning or ending, occasional observation, coaching sessions, written goals and routine examples. The child should know what will be shared in an age-appropriate way. Ask how questions can be raised between reviews without invading therapeutic space.']
    ], [
      ['¿Cuándo puede ayudar la presencia?', 'Con niños pequeños e intervenciones en rutinas, observar y practicar estrategias puede facilitar su uso cotidiano. La presencia también puede dar seguridad o apoyar la comunicación. El adulto no debe convertir la sesión en una evaluación constante ni responder siempre por el niño.'],
      ['¿Cuándo puede convenir un tiempo sin los padres?', 'Un niño mayor puede querer privacidad y el profesional puede necesitar observar interacción o autonomía de otra forma. Debe explicarse, ser adecuado a la edad y compatible con seguridad y consentimiento. “Los padres nunca entran” no sustituye una justificación clara.'],
      ['¿Cómo mantener implicada a la familia?', 'Puede combinarse inicio o final conjunto, observación ocasional, orientación, objetivos escritos y ejemplos para rutinas. El niño debe saber qué se compartirá de forma adecuada a su edad. Pregunta cómo plantear dudas entre revisiones sin invadir el espacio terapéutico.']
    ]),
    faq: M([
      ['Posso pedir para observar uma sessão?', 'Pode pedir e conversar sobre como a observação se enquadra no plano e na privacidade.'],
      ['Não assistir significa não participar?', 'Não. Orientação, revisão de objetivos e exemplos do quotidiano também são participação.'],
      ['A criança pode escolher?', 'Deve ser ouvida de forma adequada à idade e comunicação, dentro dos limites de segurança e cuidado.'],
      ['O profissional deve contar tudo?', 'A informação necessária ao cuidado deve ser partilhada, respeitando privacidade, idade e regras aplicáveis.']
    ], [
      ['Can I ask to observe a session?', 'You can ask and discuss how observation fits the plan and privacy needs.'],
      ['Does not attending mean not participating?', 'No. Coaching, goal reviews and everyday examples are also forms of participation.'],
      ['Can the child choose?', 'Their views should be heard in an age- and communication-appropriate way, within safety and care requirements.'],
      ['Must the clinician share everything?', 'Information needed for care should be shared while respecting privacy, age and applicable rules.']
    ], [
      ['¿Puedo pedir observar una sesión?', 'Puedes pedirlo y hablar de cómo encaja la observación en el plan y la privacidad.'],
      ['¿No asistir significa no participar?', 'No. La orientación, revisión de objetivos y ejemplos cotidianos también son participación.'],
      ['¿Puede elegir el niño?', 'Debe escucharse su opinión de forma adecuada a edad y comunicación, dentro de los límites de seguridad y cuidado.'],
      ['¿El profesional debe contarlo todo?', 'Debe compartir la información necesaria para el cuidado respetando privacidad, edad y normas aplicables.']
    ]), sources: [SOURCES.nice, SOURCES.ashaEarly], related: ['primeira-consulta-terapia-da-fala', 'formacao-cuidadores-desenvolvimento-infantil']
  },
  {
    id: 'perguntas-antes-comecar-terapia',
    slug: M('perguntas-antes-comecar-terapia', 'questions-before-starting-child-therapy', 'preguntas-antes-empezar-terapia-infantil'),
    title: M('Que perguntas fazer antes de começar uma terapia?', 'What should you ask before starting therapy for a child?', '¿Qué preguntar antes de empezar una terapia infantil?'),
    seo: M('Perguntas antes de começar uma terapia', 'Questions before starting child therapy', 'Preguntas antes de empezar terapia infantil'),
    teaser: M('Objetivos, formação, método, evidência, progresso, custos e coordenação devem ser explicados com clareza.', 'Goals, training, method, evidence, progress, costs and coordination should be explained clearly.', 'Objetivos, formación, método, evidencia, progreso, costes y coordinación deben explicarse con claridad.'),
    keywords: M(['perguntas antes de começar terapia', 'escolher terapeuta criança', 'primeira sessão terapia infantil'], ['questions before child therapy', 'choose child therapist', 'first therapy session child'], ['preguntas antes terapia infantil', 'elegir terapeuta infantil', 'primera sesión terapia niño']),
    lead: M('Antes de <strong>começar uma terapia</strong>, a família e a criança devem receber informação compreensível sobre o problema que se pretende abordar, as opções, benefícios esperados, limites, carga do plano e forma de rever decisões.', 'Before <strong>starting therapy</strong>, the family and child should receive understandable information about the issue being addressed, options, expected benefits, limits, burden and how decisions will be reviewed.', 'Antes de <strong>empezar una terapia</strong>, la familia y el niño deben recibir información comprensible sobre el problema, opciones, beneficios esperados, límites, carga y cómo se revisarán las decisiones.'),
    sections: M([
      ['O que perguntar sobre o profissional e o método?', 'Confirme habilitação, experiência relevante, quem supervisiona o trabalho e que abordagem será usada. Pergunte que evidência existe para aquele objetivo e perfil, que alternativas há e que riscos ou desconfortos são possíveis. Um nome conhecido não garante que seja adequado a todas as crianças.'],
      ['Como será construído o plano?', 'Peça objetivos funcionais, papel da criança e família, frequência proposta, duração inicial e critérios de revisão. Pergunte o que acontece numa sessão e como o método será adaptado à comunicação, cultura, língua, necessidades sensoriais e preferências da criança.'],
      ['Que aspetos práticos esclarecer?', 'Confirme custos, cancelamentos, relatórios, contactos, privacidade, articulação com escola e outros profissionais e o que fazer se surgir uma preocupação. Não é preciso decidir no momento: decisões complexas podem precisar de tempo e comparação entre opções.']
    ], [
      ['What should you ask about the clinician and approach?', 'Check qualifications, relevant experience, supervision and the intended approach. Ask what evidence applies to that goal and profile, what alternatives exist, and possible risks or discomfort. A well-known name does not make an approach suitable for every child.'],
      ['How will the plan be built?', 'Ask for functional goals, the child and family’s role, proposed frequency, initial duration and review criteria. Ask what happens in a session and how the approach will be adapted to communication, culture, language, sensory needs and preferences.'],
      ['Which practical points need clarification?', 'Clarify costs, cancellations, reports, contact, privacy, coordination with school and professionals, and what to do if concerns arise. You do not have to decide immediately; complex decisions may need time and comparison.']
    ], [
      ['¿Qué preguntar sobre el profesional y el enfoque?', 'Confirma titulación, experiencia relevante, supervisión y enfoque previsto. Pregunta qué evidencia se aplica al objetivo y perfil, qué alternativas existen y qué riesgos o molestias son posibles. Un nombre conocido no hace que el enfoque sea adecuado para todos.'],
      ['¿Cómo se construirá el plan?', 'Pide objetivos funcionales, papel del niño y la familia, frecuencia propuesta, duración inicial y criterios de revisión. Pregunta qué ocurre en sesión y cómo se adaptará a comunicación, cultura, lengua, necesidades sensoriales y preferencias.'],
      ['¿Qué aspectos prácticos hay que aclarar?', 'Confirma costes, cancelaciones, informes, contacto, privacidad, coordinación con escuela y profesionales y qué hacer si surge una preocupación. No hace falta decidir al momento; las decisiones complejas pueden requerir tiempo y comparación.']
    ]),
    faq: M([
      ['É errado perguntar pela evidência?', 'Não. O profissional deve conseguir explicar o que se sabe, o que é incerto e como avaliará benefício.'],
      ['Tenho de assinar logo?', 'Peça tempo para ler condições e esclarecer dúvidas antes de assumir compromissos.'],
      ['Uma terapia serve para vários objetivos?', 'Pode abordar mais de uma área, mas cada objetivo precisa de justificação e acompanhamento.'],
      ['Posso pedir outra opinião?', 'Sim. Outra opinião pode ajudar quando há incerteza ou decisões importantes.']
    ], [
      ['Is it wrong to ask about evidence?', 'No. The clinician should explain what is known, what is uncertain and how benefit will be reviewed.'],
      ['Must I sign immediately?', 'Ask for time to read terms and clarify questions before making commitments.'],
      ['Can one therapy address several goals?', 'It may address several areas, but every goal needs a rationale and monitoring.'],
      ['Can I seek another opinion?', 'Yes. Another opinion may help with uncertainty or important decisions.']
    ], [
      ['¿Está mal preguntar por la evidencia?', 'No. El profesional debe explicar qué se sabe, qué es incierto y cómo revisará el beneficio.'],
      ['¿Tengo que firmar de inmediato?', 'Pide tiempo para leer condiciones y aclarar dudas antes de comprometerte.'],
      ['¿Una terapia sirve para varios objetivos?', 'Puede abordar varias áreas, pero cada objetivo necesita justificación y seguimiento.'],
      ['¿Puedo pedir otra opinión?', 'Sí. Otra opinión puede ayudar ante incertidumbre o decisiones importantes.']
    ]), sources: [SOURCES.nice, SOURCES.who, SOURCES.aota], related: ['como-escolher-terapias-acompanhamento-crianca', 'como-saber-terapia-esta-resultar']
  },
  {
    id: 'quando-pausar-terminar-mudar-terapia',
    slug: M('quando-pausar-terminar-mudar-terapia', 'when-to-pause-stop-or-change-child-therapy', 'cuando-pausar-terminar-cambiar-terapia'),
    title: M('Quando pausar, terminar ou mudar de terapia?', 'When should child therapy be paused, stopped or changed?', '¿Cuándo pausar, terminar o cambiar de terapia?'),
    seo: M('Quando pausar, terminar ou mudar de terapia', 'When to pause, stop or change child therapy', 'Cuándo pausar, terminar o cambiar de terapia'),
    teaser: M('Objetivos alcançados, falta de benefício, sofrimento ou mudança de necessidades podem justificar uma revisão.', 'Goals met, lack of benefit, distress or changing needs may justify review.', 'Objetivos alcanzados, falta de beneficio, malestar o nuevas necesidades pueden justificar una revisión.'),
    keywords: M(['quando parar terapia', 'mudar de terapeuta criança', 'pausa terapia infantil'], ['when to stop child therapy', 'change child therapist', 'therapy break child'], ['cuándo dejar terapia infantil', 'cambiar terapeuta niño', 'pausa terapia infantil']),
    lead: M('<strong>Pausar, terminar ou mudar de terapia</strong> não significa necessariamente desistir. Pode ser uma decisão planeada quando os objetivos foram alcançados, as necessidades mudaram, o benefício não aparece, existe sofrimento ou o plano deixou de ser sustentável.', '<strong>Pausing, stopping or changing therapy</strong> does not necessarily mean giving up. It may be a planned decision when goals are met, needs change, benefit is absent, distress occurs or the plan is no longer sustainable.', '<strong>Pausar, terminar o cambiar de terapia</strong> no significa necesariamente rendirse. Puede ser una decisión planificada cuando se alcanzan objetivos, cambian necesidades, no hay beneficio, existe malestar o el plan deja de ser sostenible.'),
    sections: M([
      ['Que sinais pedem revisão?', 'Reveja o plano quando um objetivo foi atingido, permanece sem mudança apesar de aplicação adequada, deixou de ser prioritário ou cria carga desproporcionada. Medo persistente, dor, perda de participação e conflitos entre terapias também merecem atenção imediata.'],
      ['Como conversar com o profissional?', 'Peça uma revisão dos objetivos, dados, barreiras, alternativas e riscos de continuar ou parar. Pergunte se uma mudança de método, frequência, profissional ou contexto pode responder melhor. Uma boa transição inclui informação clara, sem culpar a criança ou família.'],
      ['Como planear uma pausa ou alta?', 'Registe o que ajudou, estratégias úteis, sinais para procurar nova avaliação e quem contactar. Quando apropriado, reduza gradualmente ou marque uma revisão futura. Se mudar de profissional, partilhe apenas a informação necessária e autorizada para dar continuidade ao cuidado.']
    ], [
      ['Which signs call for review?', 'Review when a goal is met, remains unchanged despite appropriate delivery, is no longer a priority or creates disproportionate burden. Persistent fear, pain, reduced participation and conflict between therapies also need prompt attention.'],
      ['How should you discuss this with the clinician?', 'Ask to review goals, data, barriers, alternatives and the risks of continuing or stopping. Consider whether method, frequency, clinician or setting could fit better. A good transition gives clear information without blaming the child or family.'],
      ['How can a break or discharge be planned?', 'Record what helped, useful strategies, signs that warrant reassessment and who to contact. When appropriate, taper support or arrange a future review. If changing professionals, share only necessary and authorised information for continuity.']
    ], [
      ['¿Qué señales requieren revisión?', 'Revisa cuando un objetivo se alcanza, sigue sin cambios pese a una aplicación adecuada, deja de ser prioritario o crea una carga desproporcionada. Miedo persistente, dolor, menor participación y conflictos entre terapias también requieren atención.'],
      ['¿Cómo hablar con el profesional?', 'Pide revisar objetivos, datos, barreras, alternativas y riesgos de continuar o parar. Valora si cambiar método, frecuencia, profesional o contexto encaja mejor. Una buena transición informa con claridad sin culpar al niño ni a la familia.'],
      ['¿Cómo planificar una pausa o alta?', 'Registra qué ayudó, estrategias útiles, señales para reevaluar y a quién contactar. Cuando proceda, reduce gradualmente o fija una revisión futura. Si cambias de profesional, comparte solo la información necesaria y autorizada para dar continuidad.']
    ]),
    faq: M([
      ['Posso terminar mesmo sem alta?', 'Pode pedir revisão e tomar uma decisão informada; situações urgentes de segurança exigem ação imediata.'],
      ['Mudar de terapeuta prejudica a criança?', 'Uma transição pode exigir adaptação, mas permanecer num plano inadequado também tem custos.'],
      ['É preciso justificar uma pausa?', 'É útil registar motivos, plano e critérios de revisão, sem transformar a família em responsável por provar a decisão.'],
      ['Quando voltar?', 'Combine sinais concretos ou uma data de revisão, conforme a necessidade.']
    ], [
      ['Can I stop without formal discharge?', 'You can request review and make an informed decision; urgent safety concerns require immediate action.'],
      ['Will changing clinicians harm the child?', 'A transition may require adjustment, but remaining in an unsuitable plan also has costs.'],
      ['Must a break be justified?', 'It helps to record reasons, plans and review criteria without making the family prove the decision.'],
      ['When should therapy restart?', 'Agree concrete signs or a review date according to need.']
    ], [
      ['¿Puedo terminar sin alta formal?', 'Puedes pedir revisión y tomar una decisión informada; los problemas urgentes de seguridad requieren acción inmediata.'],
      ['¿Cambiar de profesional perjudica al niño?', 'La transición puede requerir adaptación, pero permanecer en un plan inadecuado también tiene costes.'],
      ['¿Hay que justificar una pausa?', 'Conviene registrar motivos, plan y criterios de revisión sin obligar a la familia a demostrar su decisión.'],
      ['¿Cuándo volver?', 'Acordad señales concretas o una fecha de revisión según la necesidad.']
    ]), sources: [SOURCES.ashaEarly, SOURCES.nice, SOURCES.aota], related: ['como-saber-terapia-esta-resultar', 'relatorios-avaliacao-divergentes-segunda-opiniao']
  },
  {
    id: 'terapia-online-ou-presencial-criancas',
    slug: M('terapia-online-ou-presencial-criancas', 'online-or-in-person-therapy-for-children', 'terapia-online-o-presencial-ninos'),
    title: M('Terapia online ou presencial para crianças: como escolher?', 'Online or in-person therapy for children: how do you choose?', 'Terapia online o presencial para niños: ¿cómo elegir?'),
    seo: M('Terapia online ou presencial para crianças', 'Online or in-person therapy for children', 'Terapia online o presencial para niños'),
    teaser: M('A escolha depende do objetivo, acesso, tecnologia, privacidade, participação e competência profissional.', 'The choice depends on goals, access, technology, privacy, participation and professional competence.', 'La elección depende del objetivo, acceso, tecnología, privacidad, participación y competencia profesional.'),
    keywords: M(['terapia online crianças', 'terapia presencial infantil', 'teleterapia infantil'], ['online therapy children', 'in-person child therapy', 'paediatric teletherapy'], ['terapia online niños', 'terapia presencial infantil', 'teleterapia infantil']),
    lead: M('A escolha entre <strong>terapia online ou presencial para crianças</strong> deve ser feita caso a caso. A teleprática pode aumentar acesso e aproximar o trabalho das rotinas de casa, mas nem todos os objetivos, avaliações ou famílias beneficiam do mesmo formato.', 'The choice between <strong>online and in-person therapy for children</strong> should be made case by case. Telepractice may improve access and bring work into home routines, but not every goal, assessment or family benefits from the same format.', 'La elección entre <strong>terapia online o presencial para niños</strong> debe hacerse caso por caso. La telepráctica puede mejorar el acceso y acercar el trabajo a las rutinas, pero no todos los objetivos, evaluaciones o familias se benefician igual.'),
    sections: M([
      ['Quando o online pode ajudar?', 'Pode reduzir deslocações, permitir observar rotinas, facilitar a presença de familiares e dar acesso a profissionais distantes. Algumas intervenções usam orientação ao adulto mais do que trabalho direto com a criança. É preciso equipamento, ligação, espaço e um plano para falhas técnicas.'],
      ['Quando o presencial pode ser necessário?', 'Avaliações que exigem materiais padronizados, exame físico, observação direta específica, equipamento ou gestão de riscos podem precisar de presença. O profissional deve explicar limites de validade e segurança. Em alguns casos, um modelo híbrido combina avaliação presencial e seguimento remoto.'],
      ['Que critérios comparar?', 'Compare participação da criança, qualidade de áudio e imagem, privacidade, acessibilidade, apoio de um adulto, custo e carga familiar. Confirme habilitação para prestar serviço no local onde a criança está e procedimentos de emergência e proteção de dados aplicáveis.']
    ], [
      ['When can online delivery help?', 'It may reduce travel, allow observation of routines, include family members and provide access to distant clinicians. Some interventions focus more on coaching an adult than direct child work. Equipment, connection, a suitable space and a plan for technical failure are needed.'],
      ['When may in-person care be necessary?', 'Assessments requiring standardised materials, physical examination, specific direct observation, equipment or risk management may need in-person delivery. The clinician should explain validity and safety limits. A hybrid model may combine in-person assessment with remote follow-up.'],
      ['Which criteria should be compared?', 'Compare child participation, audio and video quality, privacy, accessibility, adult support, cost and family burden. Confirm that the clinician may practise where the child is located and check applicable emergency and data-protection procedures.']
    ], [
      ['¿Cuándo puede ayudar el formato online?', 'Puede reducir desplazamientos, observar rutinas, incluir familiares y dar acceso a profesionales lejanos. Algunas intervenciones se centran más en orientar al adulto que en trabajo directo. Se necesita equipo, conexión, espacio y un plan ante fallos técnicos.'],
      ['¿Cuándo puede hacer falta la atención presencial?', 'Evaluaciones con materiales estandarizados, examen físico, observación directa específica, equipo o gestión de riesgos pueden requerir presencia. El profesional debe explicar límites de validez y seguridad. Un modelo híbrido puede combinar evaluación presencial y seguimiento remoto.'],
      ['¿Qué criterios conviene comparar?', 'Compara participación, calidad de audio y vídeo, privacidad, accesibilidad, apoyo adulto, coste y carga familiar. Confirma que el profesional puede ejercer donde está el niño y revisa los procedimientos de emergencia y protección de datos aplicables.']
    ]),
    faq: M([
      ['A terapia online funciona?', 'Pode ser adequada para alguns objetivos e pessoas; a pergunta é se este formato é válido e útil neste caso.'],
      ['A criança tem de ficar sentada no ecrã?', 'Nem sempre. Alguns modelos usam atividades na rotina e orientação ao adulto.'],
      ['Uma avaliação online é válida?', 'Depende do instrumento e procedimento; alterações devem ser documentadas e explicadas.'],
      ['Posso combinar online e presencial?', 'Sim, quando o modelo híbrido responde melhor ao objetivo e é viável.']
    ], [
      ['Does online therapy work?', 'It may suit some goals and people; the question is whether it is valid and useful in this case.'],
      ['Must the child sit at the screen?', 'Not always. Some models use routine activities and adult coaching.'],
      ['Is an online assessment valid?', 'It depends on the tool and procedure; modifications should be documented and explained.'],
      ['Can online and in-person be combined?', 'Yes, when a hybrid model better fits the goal and is feasible.']
    ], [
      ['¿Funciona la terapia online?', 'Puede ser adecuada para algunos objetivos y personas; la pregunta es si resulta válida y útil en este caso.'],
      ['¿El niño debe sentarse ante la pantalla?', 'No siempre. Algunos modelos usan actividades cotidianas y orientación al adulto.'],
      ['¿Es válida una evaluación online?', 'Depende del instrumento y procedimiento; las modificaciones deben documentarse y explicarse.'],
      ['¿Se puede combinar online y presencial?', 'Sí, cuando un modelo híbrido responde mejor al objetivo y es viable.']
    ]), sources: [SOURCES.ashaTele, SOURCES.ashaDelivery, SOURCES.ashaDocs], related: ['quantas-sessoes-terapia-crianca', 'perguntas-antes-comecar-terapia']
  },
  {
    id: 'varios-terapeutas-coordenar-plano-crianca',
    slug: M('varios-terapeutas-coordenar-plano-crianca', 'multiple-therapists-coordinate-child-plan', 'varios-terapeutas-coordinar-plan-nino'),
    title: M('Vários terapeutas acompanham a criança: quem coordena o plano?', 'Several therapists support a child: who coordinates the plan?', 'Varios terapeutas atienden al niño: ¿quién coordina el plan?'),
    seo: M('Vários terapeutas: quem coordena o plano?', 'Several therapists: who coordinates the plan?', 'Varios terapeutas: quién coordina el plan'),
    teaser: M('Um plano partilhado reduz objetivos contraditórios, repetição, sobrecarga e mensagens confusas.', 'A shared plan reduces conflicting goals, repetition, overload and confusing messages.', 'Un plan compartido reduce objetivos contradictorios, repetición, sobrecarga y mensajes confusos.'),
    keywords: M(['vários terapeutas criança', 'coordenar terapias', 'equipa multidisciplinar infantil'], ['multiple therapists child', 'coordinate child therapies', 'multidisciplinary child team'], ['varios terapeutas niño', 'coordinar terapias', 'equipo multidisciplinar infantil']),
    lead: M('Quando <strong>vários terapeutas acompanham a criança</strong>, alguém deve ajudar a reunir prioridades, responsabilidades e revisões. Coordenação não significa que um profissional manda nos outros; significa que a criança e família não ficam responsáveis por conciliar planos incompatíveis.', 'When <strong>several therapists support a child</strong>, someone should help bring together priorities, responsibilities and reviews. Coordination does not mean one clinician controls the others; it means the child and family are not left to reconcile incompatible plans.', 'Cuando <strong>varios terapeutas atienden al niño</strong>, alguien debe ayudar a reunir prioridades, responsabilidades y revisiones. Coordinar no significa que un profesional mande sobre los demás, sino que la familia no quede sola conciliando planes incompatibles.'),
    sections: M([
      ['O que precisa de ser coordenado?', 'Partilhem os objetivos principais, quem trabalha cada um, estratégias consistentes, riscos, equipamentos, comunicação e calendário de revisão. Procurem duplicação e contradições: duas atividades parecidas podem complementar-se ou apenas aumentar carga. A escola pode ter objetivos próprios que também precisam de articulação.'],
      ['Quem pode assumir o ponto de contacto?', 'Pode ser um profissional de referência, médico, gestor de caso ou outro elemento acordado conforme o sistema e a família. O importante é haver um nome, um canal e limites claros. A criança e família continuam envolvidas nas decisões e autorizam a partilha de informação.'],
      ['Como fazer uma reunião útil?', 'Leve uma página com prioridades, objetivos atuais, o que está a funcionar, dúvidas e decisões necessárias. Termine com ações, responsáveis e data de revisão. Nem todos precisam de estar em todas as reuniões; uma síntese autorizada pode ser suficiente. Proteja tempo de brincar, escola, descanso e vida familiar.']
    ], [
      ['What needs coordination?', 'Share main goals, who addresses each one, consistent strategies, risks, equipment, communication and review dates. Look for duplication and conflict: two similar activities may complement each other or simply increase burden. School may have its own goals that also need coordination.'],
      ['Who can be the contact point?', 'This may be a lead clinician, doctor, case manager or another agreed person depending on the system and family. What matters is a named contact, channel and clear boundaries. The child and family remain involved in decisions and authorise information sharing.'],
      ['How can a meeting be useful?', 'Bring one page with priorities, current goals, what works, questions and decisions needed. Finish with actions, responsible people and a review date. Not everyone needs every meeting; an authorised summary may be enough. Protect time for play, school, rest and family life.']
    ], [
      ['¿Qué hay que coordinar?', 'Compartid objetivos principales, quién aborda cada uno, estrategias coherentes, riesgos, equipos, comunicación y fechas de revisión. Buscad duplicaciones y contradicciones: dos actividades similares pueden complementarse o aumentar la carga. La escuela puede tener objetivos propios que también requieren coordinación.'],
      ['¿Quién puede ser el contacto?', 'Puede ser un profesional de referencia, médico, gestor de caso u otra persona acordada según el sistema y la familia. Importa que exista un nombre, canal y límites claros. El niño y la familia siguen participando y autorizan el intercambio de información.'],
      ['¿Cómo hacer una reunión útil?', 'Lleva una página con prioridades, objetivos, qué funciona, dudas y decisiones necesarias. Termina con acciones, responsables y fecha de revisión. No todos deben asistir siempre; un resumen autorizado puede bastar. Protege tiempo de juego, escuela, descanso y vida familiar.']
    ]),
    faq: M([
      ['Todos os terapeutas têm de concordar?', 'Podem ter perspetivas diferentes, mas objetivos, riscos e responsabilidades devem ser claros e compatíveis.'],
      ['A família tem de transmitir tudo?', 'Não deveria suportar sozinha a coordenação. Combine canais autorizados entre serviços.'],
      ['Mais terapias significam mais progresso?', 'Não necessariamente. Benefício, carga e duplicação devem ser revistos.'],
      ['A criança deve participar na reunião?', 'A sua perspetiva deve ser incluída de forma adequada à idade e comunicação, mesmo que não esteja presente.']
    ], [
      ['Must every therapist agree?', 'They may have different perspectives, but goals, risks and responsibilities should be clear and compatible.'],
      ['Must the family relay everything?', 'They should not carry coordination alone. Agree authorised communication channels between services.'],
      ['Do more therapies mean more progress?', 'Not necessarily. Benefit, burden and duplication need review.'],
      ['Should the child attend the meeting?', 'Their perspective should be included in an age- and communication-appropriate way, even if they are not present.']
    ], [
      ['¿Todos los terapeutas deben estar de acuerdo?', 'Pueden tener perspectivas distintas, pero objetivos, riesgos y responsabilidades deben ser claros y compatibles.'],
      ['¿La familia debe transmitirlo todo?', 'No debería asumir sola la coordinación. Acordad canales autorizados entre servicios.'],
      ['¿Más terapias significan más progreso?', 'No necesariamente. Hay que revisar beneficio, carga y duplicación.'],
      ['¿El niño debe acudir a la reunión?', 'Su perspectiva debe incluirse de forma adecuada a edad y comunicación, aunque no esté presente.']
    ]), sources: [SOURCES.who, SOURCES.nice, SOURCES.ashaDelivery], related: ['como-escolher-terapias-acompanhamento-crianca', 'quantas-sessoes-terapia-crianca']
  }
]

const brand = { pt: 'Fala+', en: 'Talk+', es: 'Habla+' }
const date = '2026-11-05'
const disclaimer = M(
  'Conteúdo informativo. Não substitui avaliação individual, aconselhamento clínico nem as regras do serviço que acompanha a criança.',
  'Informational content. It does not replace individual assessment, clinical advice or the rules of the service supporting the child.',
  'Contenido informativo. No sustituye una evaluación individual, orientación clínica ni las normas del servicio que atiende al niño.'
)
const bridge = {
  title: M('Da consulta à Fala+', 'From the appointment to Talk+', 'De la consulta a Habla+'),
  intro: M('Quando for pertinente, alguns registos da app podem ajudar o adulto a recordar exemplos para conversar com a equipa.', 'When relevant, some app records may help an adult remember examples to discuss with the team.', 'Cuando sea pertinente, algunos registros de la app pueden ayudar al adulto a recordar ejemplos para conversar con el equipo.'),
  items: M([
    ['Levar exemplos concretos sem os tratar como uma avaliação.', 'O Relatório semanal reúne utilização dentro da Fala+, palavras exploradas e espaço para notas; não avalia o desenvolvimento.'],
    ['Apoiar a criança a expressar mensagens relevantes.', 'O Comunicar permite combinar cartões de imagem e voz; pode ser usado se já fizer parte das opções de comunicação da criança.']
  ], [
    ['Bring concrete examples without treating them as assessment.', 'The weekly report summarises activity inside Talk+, explored words and notes; it does not assess development.'],
    ['Support the child to express relevant messages.', 'Communicate combines picture-and-voice cards and may be used when it is already among the child’s communication options.']
  ], [
    ['Aportar ejemplos sin tratarlos como una evaluación.', 'El informe semanal resume la actividad en Habla+, palabras exploradas y notas; no evalúa el desarrollo.'],
    ['Apoyar al niño para expresar mensajes relevantes.', 'Comunicar combina tarjetas de imagen y voz y puede usarse si ya forma parte de sus opciones de comunicación.']
  ]),
  outro: M('A Fala+ não é uma terapia, não recomenda frequência de sessões e não substitui registos ou avaliação profissional.', 'Talk+ is not therapy, does not recommend session frequency and does not replace professional records or assessment.', 'Habla+ no es una terapia, no recomienda frecuencia de sesiones ni sustituye registros o evaluación profesional.')
}

export const CONSULTATION_THERAPY_ARTICLES = T.map(x => x.id)
export const CONSULTATION_THERAPY_CATALOG = T.map(x => ({
  id: x.id, theme: 'terapias', kind: M('Dúvidas práticas', 'Practical questions', 'Dudas prácticas'),
  ...Object.fromEntries(['pt', 'en', 'es'].map(lang => [lang, { live, slug: x.slug[lang], title: x.title[lang], teaser: x.teaser[lang] }]))
}))

export function getConsultationTherapyArticle(id, lang) {
  const x = T.find(item => item.id === id)
  if (!x || !['pt', 'en', 'es'].includes(lang)) throw new Error(`Unknown consultation/therapy article: ${id}/${lang}`)
  return {
    id, slug: x.slug[lang], short: x.title[lang], date,
    titleTag: `${x.seo[lang]} · ${brand[lang]}`,
    description: x.teaser[lang], keywords: x.keywords[lang],
    h1: `<span class="word-highlight">${x.title[lang]}</span>`, lead: x.lead[lang],
    blocks: [
      { intro: x.lead[lang] },
      ...x.sections[lang].flatMap((section, index) => [{ h2: section[0], id: `secao-${index + 1}`, toc: section[0] }, { p: section[1] }]),
      { bridge: { title: bridge.title[lang], intro: bridge.intro[lang], items: bridge.items[lang], outro: bridge.outro[lang] } },
      { summary: M(
        ['As decisões devem partir dos objetivos, participação e bem-estar da criança.', 'O plano precisa de revisão, responsabilidades claras e espaço para perguntas.'],
        ['Decisions should start with the child’s goals, participation and wellbeing.', 'The plan needs review, clear responsibilities and room for questions.'],
        ['Las decisiones deben partir de los objetivos, participación y bienestar del niño.', 'El plan necesita revisión, responsabilidades claras y espacio para preguntas.']
      )[lang] },
      { note: disclaimer[lang] }
    ],
    faq: x.faq[lang], sources: x.sources, related: x.related
  }
}
