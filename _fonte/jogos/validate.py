"""Validate generated game pages and optional media: python _fonte/jogos/validate.py [--media FFPROBE]"""
import json, sys, subprocess, concurrent.futures
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
import xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[2]
FALLBACK=Path(r'C:\Users\pc\Desktop\FALA + GERAL\10 - Site\falaplus-site')
data=json.loads(Path(__file__).with_name('games.json').read_text(encoding='utf-8'))
urls=json.loads(Path(__file__).with_name('urls.json').read_text(encoding='utf-8'))
assert len(urls)==177 and len(set(urls))==177
assert len(data)==58
class Page(HTMLParser):
    def __init__(self): super().__init__();self.tags=[]
    def handle_starttag(self,tag,attrs):self.tags.append((tag,dict(attrs)))
def present(path): return (ROOT/path).exists() or (FALLBACK/path).exists()
titles=set();links=0
for url in urls:
    text=(ROOT/url.lstrip('/')/'index.html').read_text(encoding='utf-8');p=Page();p.feed(text)
    canonical=[a['href'] for t,a in p.tags if t=='link' and a.get('rel')=='canonical']
    assert canonical==['https://falamais.pt'+url],url
    assert len([a for t,a in p.tags if t=='h1'])==1,url
    assert len([a for t,a in p.tags if t=='link' and a.get('hreflang')])==4,url
    assert 'noindex' not in text
    for t,a in p.tags:
        if t=='video': assert 'controls' in a and 'autoplay' not in a and 'muted' not in a and a['preload']=='none',url
        for attr in ['href','src','poster']:
            dest=a.get(attr,'')
            if not dest.startswith('/') or dest.startswith('//'):continue
            path=unquote(urlparse(dest).path).lstrip('/')
            if path.endswith('/') or not path:path+='index.html'
            assert present(path),(url,dest)
            links+=1
    import re
    title=re.search('<title>(.*?)</title>',text)[1];assert title not in titles,title;titles.add(title)
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>',text,re.S):json.loads(block)
    if '<video' in text:
        match=[g for g in data if any('/'+d['slug']+'/' in url for d in g['locales'].values())]
        assert match,url
assert all(len([u for u in urls if u.startswith(base)])==59 for base in ['/jogos/','/en/games/','/es/juegos/'])
sitemap=ET.parse(ROOT/'sitemap.xml');locations=[e.text for e in sitemap.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert all(locations.count('https://falamais.pt'+u)==1 for u in urls)
print(f'PASS: 177 pages, unique titles, canonicals, language alternates, JSON-LD, {links} internal links and sitemap.',flush=True)
if '--media' in sys.argv:
    probe=sys.argv[sys.argv.index('--media')+1]
    def check(g):
        total=0
        for lang in ['pt','en','es']:
            path=ROOT/f'assets/games/{lang}/{g["id"]}.mp4'
            info=json.loads(subprocess.check_output([probe,'-v','error','-show_streams','-show_format','-of','json',str(path)]))
            video=next(s for s in info['streams'] if s['codec_type']=='video');audio=next(s for s in info['streams'] if s['codec_type']=='audio')
            assert video['codec_name']=='h264' and video['width']==360 and video['height']==640
            assert audio['codec_name']=='aac' and float(info['format']['duration'])>10
            assert path.stat().st_size<3_000_000,path
            total+=path.stat().st_size
        return total
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool: total=sum(pool.map(check,data))
    print(f'PASS: all 174 videos have H.264 picture and AAC sound; total {total/1e6:.1f} MB.',flush=True)
