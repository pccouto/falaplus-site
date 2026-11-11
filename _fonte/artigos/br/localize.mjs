// Shared Brazilian interface vocabulary. Article bodies are independently reviewed sources.
const pairs = [
 ['médico de família ou o pediatra','pediatra'], ['Médico de família ou pediatra','Pediatra'], ['médico de família ou pediatra','pediatra'],
 ['terapeutas da fala','fonoaudiólogos'], ['Terapeuta da fala','Fonoaudiólogo'], ['terapeuta da fala','fonoaudiólogo'], ['terapia da fala','fonoaudiologia'],
 ['quadros de comunicação','pranchas de comunicação'], ['Quadro de comunicação','Prancha de comunicação'], ['quadro de comunicação','prancha de comunicação'],
 ['a Fala+','o Fala+'], ['A Fala+','O Fala+'], ['da Fala+','do Fala+'], ['Da Fala+','Do Fala+'], ['na Fala+','no Fala+'], ['Na Fala+','No Fala+'], ['à Fala+','ao Fala+'],
 ['A app','O aplicativo'], ['a app','o aplicativo'], ['da app','do aplicativo'], ['na app','no aplicativo'], ['uma app','um aplicativo'], ['Uma app','Um aplicativo'], ['as apps','os aplicativos'],
 ['aplicações','aplicativos'], ['aplicação','aplicativo'], ['telemóveis','celulares'], ['telemóvel','celular'], ['ecrãs','telas'], ['ecrã','tela'],
 ['equipa','equipe'], ['Equipa','Equipe'], ['bebés','bebês'], ['bebé','bebê'], ['gaguez','gagueira'], ['Gaguez','Gagueira'],
 ['Contactos','Contatos'], ['Contacto','Contato'], ['contacto','contato'], ['connosco','conosco'],
 ['partilhar','compartilhar'], ['Partilhe','Compartilhe'], ['partilha','compartilhamento'], ['quotidiano','dia a dia'], ['registos','registros'], ['registo','registro'],
 ['competências','habilidades'], ['competência','habilidade'], ['perturbações','transtornos'], ['perturbação','transtorno'], ['Perturbação','Transtorno'], ['recetiva','receptiva'],
 ['investigação','pesquisa'], ['investigações','pesquisas'], ['está a fazer','está fazendo'], ['está a aprender','está aprendendo'], ['está a comunicar','está comunicando'], ['estar a comunicar','estar comunicando'],
 ['estar a responder','estar respondendo'], ['está a pedir','está pedindo'], ['está a ver','está vendo'], ['está a brincar','está brincando'],
 ['expressar-se','se expressar'], ['sentir-se','se sentir'], ['tornar-se','se tornar'], ['pode fazê-lo','pode fazer isso'],
 ['ao seu ritmo','no seu ritmo'], ['ao ritmo','no ritmo'], ['papá','papai'], ['mamã','mamãe'],
 ['pequeno-almoço','café da manhã'], ['casa de banho','banheiro'], ['puzzles','quebra-cabeças'], ['puzzle','quebra-cabeça'],
 ['infantário','escola de educação infantil'], ['rastreio','triagem'], ['rastreios','triagens'],
 ['fotografias','fotos'], ['Saltar para','Pular para'], ['a carregar','carregando'], ['A carregar','Carregando'], ['Ligações','Links'],
 ['numa nova janela','em uma nova janela'], ['num novo separador','em uma nova aba'], ['numa','em uma'], ['num','em um'], ['noutros','em outros'],
 ['facto','fato'], ['publicidade','anúncios'], ['através do','pelo'],
 ['atraso na fala','atraso de fala'], ['Atraso na fala','Atraso de fala'], ['para além','além'], ['até aos','até os'],
 ['a Fala Mais','o Fala Mais'], ['A Fala Mais','O Fala Mais'], ['uma aplicativo','um aplicativo'], ['Uma aplicativo','Um aplicativo'], ['as aplicativos','os aplicativos'],
 ['a compartilhamento','o compartilhamento'], ['uma transtorno','um transtorno'], ['frigorífico','geladeira'], ['comboios','trens'], ['eletrónicos','eletrônicos'],
 ['autónoma','autônoma'], ['autónomo','autônomo'], ['controlos','controles'], ['controlo','controle'], ['utilizadores','usuários'],
 ['pôr em prática','colocar em prática'], ['Ao ritmo','No ritmo'], ['ritmo dela','ritmo da criança'],
 ['a comunicar','a se comunicar'], ['está a acontecer','está acontecendo'], ['Queres','Quer'], ['partilhadas','compartilhadas'], ['partilhada','compartilhada'],
 ['partilhados','compartilhados'], ['Partilhar','Compartilhar'], ['Terapeutas da fala','Fonoaudiólogos'], ['Bebé','Bebê'],
 ['um prancha','uma prancha'], ['Um prancha','Uma prancha'], ['uma só app','um só aplicativo'], ['Uma só app','Um só aplicativo'],
 ['está a correr','está correndo'], ['Tens fome','Está com fome'], ['à vez','em turnos'], ['cozinha a fingir','cozinha de brincadeira'],
 ['Cozinha a fingir','Cozinha de brincadeira'], ['ao nível','o nível'], ['Subscrição','Assinatura'], ['subscrição','assinatura']
];
const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export function localizeText(text) {
  return text.split(/(https?:\/\/[^\s"<>]+|\[\[[^|]+\||<[^>]*>)/g).map((part, i) => {
    if (i % 2) return part;
    for (const [from,to] of pairs) part = part.replace(new RegExp('(?<![\\p{L}])'+escape(from)+'(?![\\p{L}])','gu'),to);
    return part;
  }).join('');
}
export function localizeValue(value) {
  if (typeof value === 'string') return localizeText(value);
  if (Array.isArray(value)) return value.map(localizeValue);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k,v]) => [k, ['id','slug','related','sources','date','updated'].includes(k) ? v : localizeValue(v)]));
  return value;
}

