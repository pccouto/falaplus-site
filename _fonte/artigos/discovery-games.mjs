import { readFileSync } from 'node:fs';
const games=JSON.parse(readFileSync(new URL('../jogos/games.json',import.meta.url),'utf8'));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
export const discoveryPaths=lang=>lang==='en'?{games:'/en/games/',hub:'/en/explore/',label:'Explore',gamesLabel:'Games'}:lang==='es'?{games:'/es/juegos/',hub:'/es/explorar/',label:'Explorar',gamesLabel:'Juegos'}:{games:'/jogos/',hub:'/explorar/',label:'Explorar',gamesLabel:'Jogos'};
export function gameDiscovery(lang,entry) {
 if(entry.theme!=='jogos')return '';
 const l=lang==='br'?'pt':lang;const p=discoveryPaths(lang);
 const labels={pt:['Veja os jogos em ação','Explore a mecânica dos jogos da Fala+. Escolha pelo interesse da criança; esta demonstração não é uma indicação terapêutica.','Ver todos os jogos'],en:['See the games in action','Explore how Talk+ games work. Choose around the child’s interests; these demonstrations are not treatment recommendations.','See all games'],es:['Mira los juegos en acción','Explora cómo funcionan los juegos de Habla+. Elige según los intereses del niño; estas demostraciones no son indicaciones terapéuticas.','Ver todos los juegos']}[l];
 let ids=['tangram','memory_match','choose_image'];
 if(/memoria|memory/.test(entry.id))ids=['memory_match','whats_missing','light_sequence'];
 else if(/palavras|silabas|letras|words|frases/.test(entry.id))ids=['repeat_with_me','sentence_builder','word_search'];
 else if(/logica/.test(entry.id))ids=['tangram','hanoi_tower','pipe_icons'];
 const links=ids.map(id=>{const g=games.find(g=>g.id===id);const d=g.locales[l];return `<a href="${p.games+d.slug}/"><img src="/assets/games/icons/${id}.webp" width="37" height="37" loading="lazy" alt="">${esc(d.name)}</a>`}).join('');
 return `<section class="article-games-discovery" aria-label="${labels[0]}"><h2>${labels[0]}</h2><p>${labels[1]}</p><div class="article-game-links">${links}</div><a href="${p.games}">${labels[2]} →</a></section>`;
}
