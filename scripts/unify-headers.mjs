import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const locales={pt:{home:'/',brand:'Fala',nav:'Navegação principal',labels:['A app','Jogos','Explorar','Planos','Dúvidas','Artigos'],anchors:['a-app','planos','perguntas'],games:'/jogos/',explore:'/explorar/',articles:'/artigos/',contact:'Contacto',contactId:'contacto'},br:{home:'/br/',brand:'Fala',nav:'Navegação principal',labels:['O app','Jogos','Explorar','Planos','Dúvidas','Artigos'],anchors:['a-app','planos','perguntas'],games:'/jogos/',explore:'/explorar/',articles:'/br/artigos/',contact:'Contato',contactId:'contacto'},en:{home:'/en/',brand:'Talk',nav:'Main navigation',labels:['The app','Games','Explore','Plans','Questions','Articles'],anchors:['the-app','plans','questions'],games:'/en/games/',explore:'/en/explore/',articles:'/en/articles/',contact:'Contact',contactId:'contact'},es:{home:'/es/',brand:'Habla',nav:'Navegación principal',labels:['La app','Juegos','Explorar','Planes','Preguntas','Artículos'],anchors:['la-app','planes','preguntas'],games:'/es/juegos/',explore:'/es/explorar/',articles:'/es/articulos/',contact:'Contacto',contactId:'contacto'}};
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;');
const routes=[...fs.readFileSync(path.join(root,'sitemap.xml'),'utf8').matchAll(/<loc>https:\/\/falamais\.pt([^<]*)<\/loc>/g)].map(m=>m[1]);
let count=0;
for(const route of routes){
 const file=path.join(root,route,route.endsWith('/')?'index.html':''); if(!fs.existsSync(file))continue;
 let html=fs.readFileSync(file,'utf8');if(!/<body\b/.test(html))continue;
 const lang=route.startsWith('/br/')?'br':route.startsWith('/en/')||/-en\.html$/.test(route)?'en':route.startsWith('/es/')||/-es\.html$/.test(route)?'es':'pt';const L=locales[lang];
 const old=html.match(/<header\b[^>]*>[\s\S]*?<\/header>/)?.[0]||'';
 const alternatives={};for(const m of html.matchAll(/<link\b[^>]*rel="alternate"[^>]*>/g)){const hl=m[0].match(/hreflang="([^"]+)"/)?.[1],href=m[0].match(/href="([^"]+)"/)?.[1];if(hl&&href)alternatives[hl]=href.replace('https://falamais.pt','');}
 const languages=[['pt','pt-PT','PT'],['br','pt-BR','BR'],['en','en','EN'],['es','es','ES']].map(([key,hl,label])=>`<a href="${esc(alternatives[hl]||locales[key].home)}" lang="${hl}" hreflang="${hl}"${key===lang?' aria-current="page"':''}>${label}</a>`).join('');
 const appHome=lang==='br'?'/br/app/':L.home; const urls=[appHome+'#'+L.anchors[0],L.games,L.explore,appHome+'#'+L.anchors[1],appHome+'#'+L.anchors[2],L.articles];
 const header=`<header class="fp-header" id="topo"><div class="fp-row"><a class="fp-brand" href="${L.home}" aria-label="${L.brand}+">${L.brand}<img src="/assets/img/fala-plus-logo.png" alt="+" width="48" height="48"></a><button class="fp-toggle" type="button" aria-controls="fp-nav" aria-expanded="false">☰ <span>Menu</span></button><nav class="fp-nav" id="fp-nav" aria-label="${L.nav}">${L.labels.map((label,i)=>`<a href="${urls[i]}">${label}</a>`).join('')}<a class="fp-contact" href="${L.home}#${L.contactId}">${L.contact}</a></nav><nav class="fp-languages" aria-label="${lang==='en'?'Language':lang==='es'?'Idioma':'Idioma'}">${languages}</nav><a class="fp-store" href="https://play.google.com/store/apps/details?id=pt.falaplus.app${lang==='br'?'&amp;hl=pt_BR&amp;gl=BR':''}" target="_blank" rel="noopener noreferrer" aria-label="Google Play"><img src="/assets/img/google-play-badge.png" alt="Google Play" width="132" height="51"></a></div></header>`;
 html=old?html.replace(old,header):html.replace(/(<body\b[^>]*>)/,'$1'+header);
 html=html.replace(/<link[^>]*href="\/assets\/css\/site-header.css[^>]*>/g,'').replace(/<script[^>]*src="\/assets\/js\/site-header.js[^>]*><\/script>/g,'');
 html=html.replace('</head>','<link rel="stylesheet" href="/assets/css/site-header.css?v=20261111"><script src="/assets/js/site-header.js?v=20261111" defer></script></head>');fs.writeFileSync(file,html.split('\n').map(line=>line.trimEnd()).join('\n'));count++;
}
console.log(`Uniform headers: ${count} pages`);
