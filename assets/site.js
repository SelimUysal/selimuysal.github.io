import { DATA } from './data.js?v=engineering-refresh-20261103';

const root = document.querySelector('#app');
const page = document.body.dataset.page || 'home';
const pref = (key, fallback) => { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } };
const save = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
const state = {
  lang: pref('selim-language', 'en') === 'tr' ? 'tr' : 'en',
  theme: pref('selim-theme', 'dark') === 'light' ? 'light' : 'dark',
  query: '',
  filter: 'all',
  menu: false
};
const en = {
  work:'Work', research:'Research', writing:'Writing', experience:'Experience', about:'About', contact:'Contact',
  heroKicker:'SOFTWARE ENGINEER', heroTitle:'Engineering useful software.', heroAccent:'Exploring reliable intelligent systems.',
  heroLead:'I build web applications and browser tools, and work across software engineering, automation and applied AI. My current research interests include LLM-based agents, tool-use reliability and evaluation under practical constraints.',
  selected:'Selected engineering work', viewAll:'View project directory', live:'Live application', source:'Source code', store:'Chrome Web Store', report:'Technical report', case:'Case study',
  researchTitle:'Research direction', researchLead:'Reliable AI systems, grounded in software engineering.',
  researchBody:'I am interested in how model-driven systems can use tools safely and predictably, how their behaviour should be evaluated, and how reliability changes under limited compute, data and context. These are research directions in development—not claims of completed peer-reviewed research.',
  focus:'Current focus', articlesTitle:'Writing & analysis', articlesLead:'Independent, source-led essays on engineering and technology policy.',
  experienceTitle:'Engineering experience', aboutTitle:'Education & credentials', degree:'B.Sc. in Software Engineering',
  recognition:'Recognition', certificates:'Selected certificates', contactTitle:'Let’s talk engineering.',
  contactLead:'For professional, research or collaboration conversations, connect through LinkedIn. Explore implementation details and source code on GitHub.',
  projectsTitle:'Project directory', projectsLead:'A curated index of software products, applied engineering work and academic technical reports.',
  search:'Search projects, technologies or topics…', all:'All', software:'Software', researchFilter:'Research', internship:'Industry',
  results:'projects', noResults:'No matching work. Try another term.', caseTitle:'Engineering case studies',
  caseLead:'Selected technical work, responsibilities, implementation context and evidence.',
  back:'Back to portfolio', open:'Open', tr:'TR', en:'EN', menu:'Toggle navigation', theme:'Change theme'
};
const tr = {
  work:'Çalışmalar', research:'Araştırma', writing:'Yazılar', experience:'Deneyim', about:'Hakkımda', contact:'İletişim',
  heroKicker:'YAZILIM MÜHENDİSİ', heroTitle:'İşe yarayan yazılımlar geliştiriyorum.', heroAccent:'Güvenilir akıllı sistemleri araştırıyorum.',
  heroLead:'Web uygulamaları ve tarayıcı araçları geliştiriyor; yazılım mühendisliği, otomasyon ve uygulamalı yapay zekâ alanlarında çalışıyorum. Güncel araştırma ilgim LLM tabanlı ajanlar, araç kullanımının güvenilirliği ve pratik kısıtlar altında değerlendirme üzerine.',
  selected:'Seçilmiş mühendislik çalışmaları', viewAll:'Proje dizinini gör', live:'Canlı uygulama', source:'Kaynak kod', store:'Chrome Web Store', report:'Teknik rapor', case:'Vaka incelemesi',
  researchTitle:'Araştırma yönelimi', researchLead:'Yazılım mühendisliği temelli güvenilir yapay zekâ sistemleri.',
  researchBody:'Model tabanlı sistemlerin araçları güvenli ve öngörülebilir biçimde nasıl kullanabileceği, davranışlarının nasıl değerlendirilmesi gerektiği ve sınırlı işlem gücü, veri ve bağlam altında güvenilirliğin nasıl değiştiğiyle ilgileniyorum. Bunlar geliştirmekte olduğum araştırma yönelimleridir; tamamlanmış hakemli çalışmalar değildir.',
  focus:'Güncel odak alanları', articlesTitle:'Yazılar ve analizler', articlesLead:'Mühendislik ve teknoloji politikası üzerine bağımsız, kaynaklı incelemeler.',
  experienceTitle:'Mühendislik deneyimi', aboutTitle:'Eğitim ve belgeler', degree:'Yazılım Mühendisliği Lisans',
  recognition:'Başarı', certificates:'Seçilmiş sertifikalar', contactTitle:'Mühendislik üzerine konuşalım.',
  contactLead:'Mesleki, akademik veya iş birliği odaklı görüşmeler için LinkedIn üzerinden ulaşabilir; GitHub üzerinden uygulamaları ve kaynak kodlarını inceleyebilirsiniz.',
  projectsTitle:'Proje dizini', projectsLead:'Yazılım ürünleri, uygulamalı mühendislik çalışmaları ve akademik teknik raporlardan oluşan seçilmiş dizin.',
  search:'Proje, teknoloji veya konu ara…', all:'Tümü', software:'Yazılım', researchFilter:'Araştırma', internship:'Sektör',
  results:'çalışma', noResults:'Eşleşen çalışma bulunamadı. Başka bir kelime deneyin.', caseTitle:'Mühendislik vaka incelemeleri',
  caseLead:'Seçilmiş teknik çalışmalar, sorumluluklar, uygulama bağlamı ve kanıtlar.',
  back:'Portföye dön', open:'Aç', tr:'TR', en:'EN', menu:'Menüyü aç/kapat', theme:'Temayı değiştir'
};
const t = key => (state.lang === 'tr' ? tr : en)[key] ?? key;
const loc = value => typeof value === 'string' ? value : value?.[state.lang] ?? value?.en ?? '';
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const a = (url, label, cls='') => '<a class="'+cls+'" href="'+esc(url)+'">'+esc(label)+'</a>';
const tagList = items => (items || []).map(x => '<span class="tag">'+esc(x)+'</span>').join('');
const projectLink = link => {
  const labels = {live:t('live'),source:t('source'),store:t('store'),report:t('report'),case:t('case')};
  return a(link.url, (labels[link.kind] || link.kind)+' ↗', 'text-link');
};
function header() {
  const links = [['work','#work'],['research','#research'],['writing','#writing'],['experience','#experience'],['about','#about']];
  return '<a class="skip" href="#main">'+(state.lang==='tr'?'İçeriğe geç':'Skip to content')+'</a><header class="site-header"><div class="shell header-inner"><a class="identity" href="./index.html"><img src="./assets/selim-monogram.webp" alt="" width="42" height="42"><span><strong>Selim Uysal</strong><small>Software Engineer</small></span></a><nav class="desktop-nav" aria-label="Primary">'+links.map(([key,url])=>a(page==='home'?url:'./index.html'+url,t(key))).join('')+a('./projects.html',t('work'))+'</nav><div class="header-actions"><button data-lang aria-label="Language">'+(state.lang==='tr'?'EN':'TR')+'</button><button data-theme aria-label="'+t('theme')+'">'+(state.theme==='dark'?'☀':'☾')+'</button><a class="contact-cta" href="'+(page==='home'?'#contact':'./index.html#contact')+'">'+t('contact')+'</a><button class="menu-toggle" data-menu aria-expanded="'+state.menu+'" aria-label="'+t('menu')+'">☰</button></div></div><nav class="mobile-nav '+(state.menu?'is-open':'')+'">'+links.map(([key,url])=>a(page==='home'?url:'./index.html'+url,t(key))).join('')+a('./projects.html',t('work'))+a(page==='home'?'#contact':'./index.html#contact',t('contact'))+'</nav></header>';
}
function footer() {
  return '<footer class="site-footer shell"><span>© 2026 Selim Uysal · Software Engineer</span><span>'+a(DATA.profile.linkedin,'LinkedIn ↗')+' · '+a(DATA.profile.github,'GitHub ↗')+' · '+a('./privacy.html',state.lang==='tr'?'Gizlilik':'Privacy')+' · '+a('./index.html?analytics=preferences',state.lang==='tr'?'Analiz tercihleri':'Analytics preferences')+'</span></footer>';
}
function heading(kicker,title,description='') {
  return '<div class="section-heading"><span class="kicker">'+esc(kicker)+'</span><h2>'+esc(title)+'</h2>'+(description?'<p>'+esc(description)+'</p>':'')+'</div>';
}
function card(project, index) {
  return '<article class="project-card '+(project.featured?'is-featured':'')+'">'+(project.cover?'<a class="project-cover" href="'+esc(project.links[0]?.url || '#')+'"><img src="'+esc(project.cover)+'" alt="'+esc(loc(project.coverAlt))+'" loading="lazy"></a>':'')+'<div class="project-content"><div class="card-meta"><span>'+String(index+1).padStart(2,'0')+' / '+esc(project.year)+'</span><span>'+esc(loc(project.type))+'</span></div><h3>'+esc(loc(project.name))+'</h3><p>'+esc(loc(project.description))+'</p><div class="tags">'+tagList(project.stack)+'</div><div class="project-links">'+project.links.map(projectLink).join('')+'</div></div></article>';
}
function home() {
  const selected = DATA.selectedProjects.map(id=>DATA.projects.find(p=>p.id===id)).filter(Boolean);
  return header()+'<main id="main"><section class="hero shell"><div class="hero-copy"><span class="eyebrow">'+t('heroKicker')+'</span><h1>'+t('heroTitle')+' <em>'+t('heroAccent')+'</em></h1><p>'+t('heroLead')+'</p><div class="hero-actions">'+a('#work',state.lang==='tr'?'Çalışmaları incele ↗':'Explore selected work ↗','button button-primary')+a('./projects.html',state.lang==='tr'?'Tüm projeler':'Project directory','button button-secondary')+'</div><div class="hero-meta"><span>Atılım University · 2025</span><span>Türkiye</span><span>Software · Applied AI</span></div></div><div class="hero-photo"><img src="./assets/profil_fotografi_web.webp" alt="Selim Uysal" fetchpriority="high"></div></section>'+
  '<section class="section shell" id="work">'+heading('01 / WORK',t('selected'),state.lang==='tr'?'Ürün geliştirme, tarayıcı araçları ve gerçek mühendislik çıktıları.':'Products, browser tooling and engineering work with tangible outputs.')+'<div class="project-grid">'+selected.map(card).join('')+'</div><div class="section-foot">'+a('./projects.html',t('viewAll')+' ↗','text-link')+'</div></section>'+
  '<section class="section shell" id="research">'+heading('02 / RESEARCH',t('researchTitle'),t('researchLead'))+'<div class="research-panel"><div><p>'+esc(loc(DATA.researchStatement))+'</p><span class="research-note">'+(state.lang==='tr'?'Araştırma ilgisi · devam eden yönelim':'Research interests · directions in development')+'</span></div><div class="focus-list"><span class="kicker">'+t('focus')+'</span>'+DATA.researchFocus.map(x=>'<span>'+esc(loc(x))+'</span>').join('')+'</div></div></section>'+
  '<section class="section shell" id="writing">'+heading('03 / WRITING',t('articlesTitle'),t('articlesLead'))+'<div class="article-grid">'+DATA.articles.map((article,i)=>'<article class="article-card"><span class="kicker">ESSAY / 0'+(i+1)+' · '+esc(loc(article.category))+'</span><h3>'+esc(loc(article.title))+'</h3><p>'+esc(loc(article.description))+'</p>'+a(article.url,state.lang==='tr'?'Yazıyı oku ↗':'Read essay ↗','text-link')+'</article>').join('')+'</div></section>'+
  '<section class="section shell" id="experience">'+heading('04 / EXPERIENCE',t('experienceTitle'))+'<div class="experience-list">'+DATA.experiences.map(x=>'<article class="experience-item"><div class="experience-date">'+esc(x.date)+'</div><div><span class="role">'+esc(loc(x.kind))+'</span><h3>'+esc(x.name)+'</h3><p>'+esc(loc(x.description))+'</p><div class="tags">'+tagList(x.stack)+'</div></div></article>').join('')+'</div></section>'+
  '<section class="section shell" id="about">'+heading('05 / BACKGROUND',t('aboutTitle'))+'<div class="about-grid"><article class="about-card"><span class="kicker">EDUCATION</span><h3>'+esc(loc(DATA.education.degree))+'</h3><p>'+esc(DATA.education.university)+' · '+esc(loc(DATA.education.location))+' · '+esc(DATA.education.year)+'</p><div class="rule"></div><span class="kicker">'+t('recognition')+'</span><p>'+esc(loc(DATA.education.recognition))+'</p></article><div class="certificate-list">'+DATA.certificates.map(c=>'<article class="certificate"><span class="kicker">'+esc(c.issuer)+'</span><h3>'+esc(loc(c.title))+'</h3><p>'+esc(c.date)+'</p><div>'+a(c.pdf,state.lang==='tr'?'Belgeyi aç ↗':'View certificate ↗','text-link')+(c.verify?' · '+a(c.verify,state.lang==='tr'?'Doğrula ↗':'Verify ↗','text-link'):'')+'</div></article>').join('')+'</div></div></section>'+
  '<section class="section shell" id="contact"><div class="contact-panel"><div><span class="kicker">06 / CONTACT</span><h2>'+t('contactTitle')+'</h2><p>'+t('contactLead')+'</p></div><div class="contact-actions">'+a(DATA.profile.linkedin,'LinkedIn ↗','button button-primary')+a(DATA.profile.github,'GitHub ↗','button button-secondary')+'</div></div></section></main>'+footer();
}
const norm = s => String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i').toLowerCase();
function directory() {
  const cards = DATA.projects.map(card).join('');
  return header()+'<main id="main" class="shell directory"><section class="page-intro"><span class="eyebrow">ENGINEERING PORTFOLIO</span><h1>'+t('projectsTitle')+'</h1><p>'+t('projectsLead')+'</p></section><section class="search-panel"><input id="project-search" type="search" placeholder="'+t('search')+'" aria-label="'+t('search')+'"><div class="filter-row">'+[['all',t('all')],['software',t('software')],['research',t('researchFilter')],['internship',t('internship')]].map(([id,label])=>'<button data-filter="'+id+'" aria-pressed="'+(state.filter===id)+'">'+label+'</button>').join('')+'</div><p class="result-count" id="result-count"></p></section><div class="project-grid directory-grid" id="directory-grid">'+cards+'</div><p id="empty-state" hidden>'+t('noResults')+'</p></main>'+footer();
}
function caseStudies() {
 const items = [
  {id:'hayat',title:'Hayat Rehberi',type:'PRODUCT ENGINEERING',summary:state.lang==='tr'?'Çok modüllü bir web uygulamasında kullanıcı akışları, yerel veri, hesap eşitleme ve istemci tarafı mimariyi bir araya getirmek.':'Combining user workflows, local data, account synchronisation and client-side architecture in a multi-module web application.',body:state.lang==='tr'?'Uygulama; Kur’an okuma, ezber, namaz araçları ve kişisel ilerlemeyi tek arayüzde birleştirir. Geliştirici belgeleri React 19, TypeScript, Vite ve Tailwind CSS v4 kullanımını; Firebase Authentication ve Firestore ile isteğe bağlı hesap eşitlemesini açıklar. GitHub Pages statik yayın hedefidir; Express sunucusuna bağlı özellikler ayrıca barındırılmadıkça bu statik ortamda çalışmaz.':'The application brings Quran reading, memorisation, prayer tools and personal progress into one interface. Its developer documentation identifies React 19, TypeScript, Vite and Tailwind CSS v4, with optional account synchronisation through Firebase Authentication and Firestore. GitHub Pages is the static deployment target; Express-dependent features require separate server hosting.',stack:['React 19','TypeScript','Vite','Firebase','GitHub Pages'],links:[{kind:'live',url:'https://selimuysal.github.io/hayat-rehberi/'},{kind:'source',url:'https://github.com/SelimUysal/hayat-rehberi'}]},
  {id:'video',title:'Video Speed',type:'BROWSER ENGINEERING',summary:state.lang==='tr'?'Siteye özel tercihleri ve dinamik video algılamayı tarayıcı uzantısı içinde güvenilir biçimde yönetmek.':'Managing per-site preferences and dynamic video discovery inside a browser extension.',body:state.lang==='tr'?'Uzantı, hız ve kontrol paneli konumunu site bazında Chrome local storage içinde saklar. Aynı sitenin sekmeleri tercihi paylaşır. Klavye ve fare kontrolleri, çoklu oynatıcı sayfalarında görünür/aktif video önceliği ve erişilebilen açık Shadow DOM oynatıcılarının keşfi README’de belgelenmiştir. DRM veya kısıtlı oynatıcılar hız değişimini reddedebilir.':'The extension stores playback speed and controller position per website in Chrome local storage. Tabs on the same site share preferences. Keyboard and mouse controls, prioritisation of visible/active players on multi-player pages, and discovery of accessible open Shadow DOM players are documented in the repository. DRM or restricted players may reject playback-rate changes.',stack:['JavaScript','Manifest V3','Chrome Storage','HTML5 Media'],links:[{kind:'store',url:'https://chromewebstore.google.com/detail/video-speed/cmjafmcaccbhfgcjnfldaahebnbbppje'},{kind:'source',url:'https://github.com/SelimUysal/video-speed'}]},
  {id:'quran',title:'Quran Memorization & Arabic Analysis',type:'APPLICATION ARCHITECTURE',summary:state.lang==='tr'?'Ses, metin seçimi, uygulama durumu ve harici AI analizini modüler bir istemci uygulamasında ayırmak.':'Separating audio, text selection, application state and optional external AI analysis in a modular client application.',body:state.lang==='tr'?'Depo yapısı ses, veri, DOM yardımcıları, servisler ve arayüz kodlarını ayrı ES modüllerinde düzenler. İsteğe bağlı Gemini analizi Arapça kelime grupları, kök ve dilbilgisi açıklamaları sunmayı hedefler; üretilen dil açıklamaları doğrulanmalıdır.':'The repository separates audio, data, DOM utilities, services and UI code into ES modules. Optional Gemini analysis provides Arabic word-group, root and grammatical explanations; generated linguistic explanations should be verified.',stack:['JavaScript','ES Modules','Audio APIs','Gemini API'],links:[{kind:'live',url:'https://selimuysal.github.io/kuran-ezber/'},{kind:'source',url:'https://github.com/SelimUysal/kuran-ezber'}]},
  {id:'rims',title:'AYESAŞ · RIMS',type:'FULL-STACK INTERNSHIP',summary:state.lang==='tr'?'Kurumsal cihaz ve bileşen yönetimi için web tabanlı sistem üzerinde staj katkısı.':'Internship contribution to a web-based device and component management system.',body:state.lang==='tr'?'Kamuya açık proje özeti React arayüzü, Spring Boot REST API’leri, PostgreSQL ve PDF/HTML/JSON dışa aktarma işlevlerini doğrular. Bu sayfa yalnızca kamuya açık kapsamı anlatır; şirket kaynak kodu, mimari ayrıntı veya gizli veri paylaşmaz.':'The public project summary confirms a React interface, Spring Boot REST APIs, PostgreSQL and PDF/HTML/JSON export functionality. This page describes only public-facing scope and does not disclose company source code, internal architecture or confidential data.',stack:['React','Spring Boot','PostgreSQL','REST APIs'],links:[]},
  {id:'teknofest',title:'TEKNOFEST · AI in Transportation',type:'COMPUTER VISION RESEARCH PROJECT',summary:state.lang==='tr'?'Havadan görüntülerde nesne tespiti ve görsel konumlama üzerine takım araştırması.':'Team investigation into aerial object detection and visual positioning.',body:state.lang==='tr'?'SEE AI ekibinin çalışması insan, araç ve iniş alanı tespiti; YOLOv8/YOLOv9 ve SAHI yaklaşımları ile aşağı bakan kameralardan görsel konumlama konularını ele aldı. 11/198 sonucu yalnızca ön tasarım raporu değerlendirmesine aittir; final yarışma sıralaması değildir.':'The SEE AI team investigated people, vehicle and landing-zone detection, YOLOv8/YOLOv9 and SAHI approaches, and visual positioning from downward-facing cameras. The 11/198 result refers only to the preliminary design report evaluation, not the final competition ranking.',stack:['YOLOv8','YOLOv9','SAHI','Computer Vision'],links:[{kind:'report',url:'./assets/reports/teknofest-ai-transportation.pdf'}]}
 ];
 return header()+'<main id="main" class="shell directory"><section class="page-intro"><span class="eyebrow">ENGINEERING / RESEARCH</span><h1>'+t('caseTitle')+'</h1><p>'+t('caseLead')+'</p></section><div class="case-list">'+items.map(x=>'<article class="case-study" id="'+x.id+'"><div class="case-main"><span class="kicker">'+x.type+'</span><h2>'+x.title+'</h2><h3>'+esc(x.summary)+'</h3><p>'+esc(x.body)+'</p><div class="tags">'+tagList(x.stack)+'</div><div class="project-links">'+x.links.map(projectLink).join('')+'</div></div></article>').join('')+'</div></main>'+footer();
}
function drawDirectory() {
 const query=norm(state.query);
 const filtered=DATA.projects.filter(p=>(state.filter==='all'||p.category===state.filter)&&(!query||norm([loc(p.name),p.name.en,p.name.tr,loc(p.description),p.stack.join(' ')].join(' ')).includes(query)));
 const grid=document.querySelector('#directory-grid');
 if(!grid)return;
 grid.innerHTML=filtered.map(card).join('');
 document.querySelector('#result-count').textContent=filtered.length+' '+t('results');
 document.querySelector('#empty-state').hidden=filtered.length!==0;
}
function render() {
 document.documentElement.lang=state.lang;
 document.documentElement.dataset.theme=state.theme;
 document.title='Selim Uysal | Software Engineer';
 root.innerHTML=page==='projects'?directory():page==='case-studies'?caseStudies():home();
 if(page==='projects') {
  drawDirectory();
  document.querySelector('#project-search').addEventListener('input',e=>{state.query=e.target.value;drawDirectory()});
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{state.filter=btn.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));drawDirectory()}));
 }
 document.querySelector('[data-lang]')?.addEventListener('click',()=>{state.lang=state.lang==='tr'?'en':'tr';save('selim-language',state.lang);render()});
 document.querySelector('[data-theme]')?.addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark';save('selim-theme',state.theme);render()});
 document.querySelector('[data-menu]')?.addEventListener('click',()=>{state.menu=!state.menu;render()});
 document.querySelectorAll('.mobile-nav a').forEach(link=>link.addEventListener('click',()=>{state.menu=false;document.querySelector('.mobile-nav')?.classList.remove('is-open')}));
}
render();
