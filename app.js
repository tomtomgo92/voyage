(function(){
const C=window.VOYAGE_CONFIG, T=window.VOYAGE_CONTENT, IDS=["th","vn","id","ph"];
const MOIS=["J","F","M","A","M","J","J","A","S","O","N","D"];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const eur=n=>String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g," ")+" €";const eur10=n=>eur(Math.round(n/10)*10);
const $=s=>document.querySelector(s);
let voterId=localStorage.getItem("vv_id"); if(!voterId){voterId=(crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2));localStorage.setItem("vv_id",voterId);}
let myVote=localStorage.getItem("vv_vote")||null, myName=localStorage.getItem("vv_name")||"";
let results={};

function calc(id){const p=C.pays[id];const hotelTotal=p.hotels.reduce((s,h)=>s+h.nuit*h.nuits,0);const part=hotelTotal/C.voyageurs;const vol=Math.min(p.vols.moinsCher.prix,p.vols.airFrance.prix||1e9);const budget=p.budgetJour*C.nuits;return{hotelTotal,part,vol,budget,total:vol+part+p.transportsInterieurs.prix+budget+(p.formalites.prix||0)}}

function priceBlock(id){const p=C.pays[id],k=calc(id);const af=p.vols.airFrance;
return `<div class="price"><div class="big"><span>💶 Total estimé / pers.<br><span class="muted small">15 jours, vols compris</span></span><strong>~${eur10(k.total)}</strong></div>
<div class="rows">
<div class="row"><span>✈️ Vol A/R Paris (${esc(p.vols.moinsCher.compagnie)})</span><span>${eur(k.vol)}</span></div>
<div class="row"><span>🏨 Part d'hôtel (15 nuits ÷ ${C.voyageurs})</span><span>${eur(k.part)}</span></div>
<div class="row"><span>🚐 Transports intérieurs</span><span>${eur(p.transportsInterieurs.prix)}</span></div>
<div class="row"><span>🍜 Sur place (${p.budgetJour} €/jour : repas, sorties, excursions)</span><span>${eur(k.budget)}</span></div>
${p.formalites.prix?`<div class="row"><span>🛂 Formalités</span><span>${eur(p.formalites.prix)}</span></div>`:""}
</div>
<p class="af">Air France : ${af.prix?("<b>"+eur(af.prix)+"</b> · "+esc(af.detail)):"en cours de vérification"}<br>Moins cher : ${esc(p.vols.moinsCher.compagnie)} ${eur(p.vols.moinsCher.prix)} · ${esc(p.vols.moinsCher.detail)}</p>
</div>`}

function hotelTable(id){const p=C.pays[id],k=calc(id);
return `<table class="mini"><tr><th>Zone</th><th>Hôtel (3–4★)</th><th class="r">Nuit (chambre)</th><th class="r">Séjour</th></tr>
${p.hotels.map(h=>`<tr><td>${esc(h.zone)}<br><span class="muted">${h.nuits} nuit${h.nuits>1?"s":""}</span></td><td>${esc(h.hotel)}</td><td class="r">~${eur(h.nuit)}</td><td class="r">${eur(h.nuit*h.nuits)}</td></tr>`).join("")}
<tr><td colspan="3"><b>Total 15 nuits</b> (chambre triple ou familiale ; sinon 1 double + 1 simple, compter +30 à 50 %)</td><td class="r"><b>${eur(k.hotelTotal)}</b></td></tr>
<tr><td colspan="3"><b>Soit par personne</b></td><td class="r"><b>${eur(k.part)}</b></td></tr></table>
<p class="src">Prix moyens relevés le ${esc(C.prixReleves)} (all.accor.com, Booking, stayversus.com), indicatifs. Transports : ${esc(p.transportsInterieurs.detail)}. Formalités : ${esc(p.formalites.detail)}.</p>`}

function months(m,hi){return `<div class="months">${m.map((c,i)=>`<span class="${c}${(hi||[]).includes(i)?" mar":""}">${MOIS[i]}</span>`).join("")}</div>`}

function sec(title,inner,open,key){return `<details class="sec"${key?` data-k="${key}"`:""}${open?" open":""}><summary>${title}</summary><div class="in">${inner}</div></details>`}

const CRED={};(window.VOYAGE_CREDITS||[]).forEach(c=>CRED[c.k]=c);
const GAL=id=>(window.VOYAGE_CREDITS||[]).filter(c=>c.k.slice(0,2)===id);
const ST=s=>s==="✅"?"ok":s==="❌"?"no":"warn";
const lnk=s=>`<a href="${s[1]}" target="_blank" rel="noopener">${esc(s[0])}</a>`;
function gallery(id){const g=GAL(id),t=T[id];
return `<div class="gal" data-gal="${id}"><div class="track" tabindex="0" aria-label="Photos ${esc(t.nom)}">${g.map((c,i)=>`<figure><img ${i?'loading="lazy" ':'fetchpriority="high" '}src="img/${c.k}.webp" alt="${esc(c.cap)}" width="1200" height="800"><figcaption>${esc(c.cap)}<a href="${c.url}" target="_blank" rel="noopener" class="cr">© ${esc((c.artist||"").slice(0,40))} · ${esc(c.lic)}</a></figcaption></figure>`).join("")}</div>
<div class="g-over"><span class="g-flag">${t.flag}</span><h2>${esc(t.nom)}</h2><p>${esc(t.slogan)}</p></div>
<div class="dots-g">${g.map((_,i)=>`<i class="${i?"":"on"}"></i>`).join("")}</div>
<button class="g-nav prev" aria-label="Photo précédente">‹</button><button class="g-nav next" aria-label="Photo suivante">›</button></div>`}
function dreamHotels(id){const H=T[id].hotels;if(!H||!H.etapes||!H.etapes.length)return"";
const card=(x,main)=>`<div class="dh${main?" main":""}"><div class="dh-top"><span class="brand">${esc(x.marque||"Accor")}</span>${x.note?`<span class="rate">★ ${x.note}</span>`:""}</div><b>${x.url?`<a href="${x.url}" target="_blank" rel="noopener">${esc(x.nom)} ↗</a>`:esc(x.nom)}</b>${x.total?`<div class="dh-p"><strong>${eur(x.total)}</strong> <span class="muted">pour 3${x.nuit?` · ${eur(x.nuit)}/nuit`:""}${x.taxes?` · + ${eur(x.taxes)} de taxes`:""}</span></div>`:""}<div class="dh-tags">${x.pdj?'<span>🥐 petit-déj inclus</span>':""}${x.info?`<span>${esc(x.info)}</span>`:""}</div></div>`;
return sec("✨ Hôtels de rêve Accor <span class='pill'>pour rêver</span>",`<p class="small muted">Pour rêver, hors budget (les totaux restent calculés sur les hôtels 3–4★). Tarifs membres ALL vus le 26/11/2026 sur all.accor.com, 3 adultes, séjour complet, hors taxes sauf mention, dates : ${esc(H.dates)}.</p>${H.etapes.map(e=>`<div class="dh-stop"><h4>📍 ${esc(e.zone)} <span class="muted">· ${esc(e.dates)}</span></h4>${card(e.choix,1)}${(e.alt||[]).length?`<div class="dh-alt">${e.alt.map(x=>card(x)).join("")}</div>`:""}</div>`).join("")}`,false,"dream")}
function etudeAF(id){const e=T[id].etudeAF;if(!e)return"";const mn=Math.min(...e.lignes.map(l=>l[2])),mx=Math.max(...e.lignes.map(l=>l[2]));
return sec("✈️ "+esc(e.titre),`<p class="small muted">${esc(e.intro)}</p><div class="af-bars">${e.lignes.map(l=>`<div class="afb${l[2]===mn?" best":""}"><span class="d">${esc(l[0])}${l[1]?`<em>${esc(l[1])}</em>`:""}</span><span class="t"><i style="width:${Math.round(35+65*(l[2]-mn)/(mx-mn||1))}%"></i></span><b>~${eur(l[2])}</b></div>`).join("")}</div><ul class="concl">${e.conclusion.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p class="small"><b>${esc(e.note)}</b></p><p class="src">Montants en dollars d'origine : ${e.lignes.map(l=>esc(l[0])+" "+esc(l[3])).join(" · ")}.</p>`)}
const PX={l:"g",m:"o",h:"r"},PXL={l:"bas",m:"moyen",h:"haut"},SEV={g:0,o:1,r:2},UNSEV=["g","o","r"];
function meteoRow(id){const t=T[id],c=t.cal;if(c.meteo)return c.meteo;return MOIS.map((_,i)=>UNSEV[Math.max(...c.meteoZones.map(z=>SEV[t.periodes[z].m[i]]))])}
function calGrid(id){const t=T[id],c=t.cal;if(!c)return"";const hi=t.datesMois||[];
const cell=(cls,i,txt,tt)=>`<span class="cc ${cls}${hi.includes(i)?" win":""}"${tt?` title="${esc(tt)}"`:""}>${txt||""}</span>`;
const row=(lab,cells)=>`<div class="cr"><span class="cl">${lab}</span>${cells}</div>`;
const evm=MOIS.map((_,i)=>c.ev.filter(e=>e.m===i));
const zones=c.meteo?[["☀️ Météo",c.meteo]]:t.periodes.map((z,k)=>["☀️ "+(c.courts&&c.courts[k]||z.zone),z.m]);
return `<div class="cal" role="table" aria-label="Calendrier 2027">
${row("<b>2027</b>",MOIS.map((m,i)=>`<span class="cc hd${hi.includes(i)?" win":""}">${m}</span>`).join(""))}
${row("💶 Prix",c.prix.map((p,i)=>cell(PX[p],i,"",PXL[p])).join(""))}
${zones.map(z=>row(esc(z[0]),z[1].map((v,i)=>cell(v,i)).join(""))).join("")}
${row("🎉 Fêtes",evm.map((l,i)=>cell("ev"+(l.some(e=>e.top)?" top":"")+(l.some(e=>e.bad)?" bad":""),i,l.length?l[0].e:"",l.map(e=>e.d+" : "+e.t).join(" · "))).join(""))}
</div><p class="legend">🟩 bas / idéal · 🟧 moyen / correct · 🟥 haut / à éviter · cadre = fenêtre conseillée · ⭐ fond doré = meilleur événement · bord rouge = à éviter</p>`}
function calMini(id){const t=T[id],c=t.cal;if(!c)return"";const hi=t.datesMois||[],mt=meteoRow(id);
const r=(lab,f)=>`<div class="mr"><span>${lab}</span>${MOIS.map((_,i)=>`<i class="${f(i)}${hi.includes(i)?" win":""}"></i>`).join("")}</div>`;
return `<div class="mini-cal">${r("💶",i=>PX[c.prix[i]])}${r("☀️",i=>mt[i])}${r("🎉",i=>{const l=c.ev.filter(e=>e.m===i);return l.length?"ev"+(l.some(e=>e.top)?" top":"")+(l.some(e=>e.bad)?" bad":""):"none"})}<div class="mr ml"><span></span>${MOIS.map(m=>`<b>${m}</b>`).join("")}</div></div>`}
function calBlock(id){const c=T[id].cal;if(!c)return"";return `${calGrid(id)}
<ul class="verd"><li>💶 <b>Le moins cher :</b> ${esc(c.verdicts.prix)}</li><li>☀️ <b>Meilleure météo :</b> ${esc(c.verdicts.meteo)}</li><li>🎉 <b>Meilleur événement :</b> ${esc(c.verdicts.event)}</li><li class="sw">🎯 <b>Le bon compromis :</b> ${esc(c.sweet)}</li></ul>
${c.alerte?`<p class="alerte">${esc(c.alerte)}</p>`:""}
<details class="sub"><summary>🗓️ Les événements 2027, date par date</summary><ul class="evl">${c.ev.map(e=>`<li class="${e.bad?"bad":""}${e.top?" top":""}"><span>${e.e}</span><b>${esc(e.d)}</b> ${esc(e.t)}</li>`).join("")}</ul>${c.lanternes?`<p class="small">${esc(c.lanternes)}</p>`:""}</details>
<p class="small muted">💶 ${esc(c.prixNotes)} ${esc(window.VOYAGE_VACANCES||"")}</p>
<p class="src">Prix décrits par saison (pas de chiffres inventés) ; dates des fêtes lunaires « prévues » tant qu'elles ne sont pas officielles. Sources (consultées le 26/11/2026) : ${c.sources.map(lnk).join(" · ")}</p>`}
function renderCountry(id){const t=T[id],p=t.pratique,g=t.geo,d=t.drone,k=calc(id),ix=IDS.indexOf(id);
const prev=IDS[(ix+3)%4],next=IDS[(ix+1)%4];
return `<article class="view country" id="v-${id}" data-view="${id}" style="--c:${t.color}">
${gallery(id)}
<div class="c-body">
<div class="facts">
<button class="fact big" data-open="prix"><span>💶 Total estimé / pers.</span><strong>~${eur10(k.total)}</strong><em>15 jours, vols compris</em></button>
<button class="fact wide" data-open="dates"><span>📆 Meilleures dates · prix, météo, fêtes</span><strong>${esc(t.dates?t.dates.fenetre:"")}</strong>${calMini(id)}</button>
<button class="fact wide geo-f" data-open="geo"><span>🛡️ Sécurité</span><strong>${g.note<=1?"🟩":"🟨"} ${g.note}/5</strong><em>${esc(g.titre)}</em></button>
</div>
<div class="chips-s">
<button class="st ${ST(d.statut)}" data-open="drone">🚁 Drone ${d.statut}</button>
<button class="st ${ST(t.vape.statut)}" data-open="vape">💨 Vapote ${t.vape.statut}</button>
<button class="st ${ST(t.move.statut)}" data-open="move">🚗 Se déplacer ${t.move.statut}</button>
</div>
<ul class="pitch">${t.pitch.slice(0,3).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
<p class="tagline">✨ ${esc(t.tagline)}</p>
<button class="vote" data-id="${id}"><span>${t.flag} Je vote ${esc(t.nom)}</span><span class="n" id="n-${id}">0</span></button>
<div class="voters" id="vt-${id}"></div>
<div class="acc">
${sec("💶 Prix détaillés & hôtels 3–4★",priceBlock(id)+hotelTable(id),false,"prix")}
${dreamHotels(id)}
${etudeAF(id)}
${sec("🗺️ Itinéraire 15 jours & top 5",`<ol class="route">${t.route.map(r=>`<li><b>${esc(r[0])}</b> · ${esc(r[1])}<br><span class="muted">${esc(r[2])}</span></li>`).join("")}</ol><h4>⭐ À ne pas rater</h4><ol>${t.top5.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>${t.pitch.length>3?`<ul class="pitch">${t.pitch.slice(3).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}`)}
${sec("🍽️ À goûter & 🌙 sortir",`<p><b>À goûter :</b> ${t.plats.map(esc).join(" · ")}</p><ul>${t.nuit.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`)}
${sec("🤿 Plongée & snorkeling",`<ul>${t.plongee.map(x=>`<li><b>${esc(x[0])}</b> : ${esc(x[1])}</li>`).join("")}</ul>`)}
${sec("📅 Meilleures périodes : prix, météo, fêtes",`${calBlock(id)}${t.dates?`<p class="win">📆 <b>Fenêtre conseillée : ${esc(t.dates.fenetre)}</b><br>${esc(t.dates.pourquoi)}<br><span class="muted">⛔ À éviter : ${esc(t.dates.eviter)}</span></p>`:""}${t.cal?`<ul class="zn">${t.periodes.map(z=>`<li><b>${esc(z.zone)} :</b> ${esc(z.note)}</li>`).join("")}</ul>`:t.periodes.map(z=>`<p style="margin:.6em 0 0"><b>${esc(z.zone)}</b></p>${months(z.m,t.datesMois)}<p class="small" style="margin:.2em 0 .6em">${esc(z.note)}</p>`).join("")+`<p class="legend">🟩 idéal · 🟧 correct · 🟥 à éviter · cadre noir = fenêtre conseillée</p>`}<p><b>${esc(t.verdictMars)}</b></p><p class="src">D'après les normales climatiques (saisons sèches et des pluies, saisons des typhons) ; variations d'une année à l'autre.</p>`,false,"dates")}
${sec("🛂 Entrée, santé, argent",`<div class="kv"><b>Formalités</b><span>${esc(p.formalites)}</span><b>Monnaie</b><span>${esc(p.monnaie)}</span><b>Décalage</b><span>${esc(p.decalage)}</span><b>Langue</b><span>${esc(p.langue)}</span><b>Prises</b><span>${esc(p.prises)}</span></div>
<p style="margin-top:.8em"><b>Coût de la vie</b> (ordres de grandeur 2026)</p><table class="mini">${p.couts.map(c=>`<tr><td>${esc(c[0])}</td><td class="r">${esc(c[1])}</td></tr>`).join("")}</table>
<p><b>Santé :</b> ${esc(p.sante)}</p><p><b>Sécurité au quotidien :</b> ${esc(p.securite)}</p>
<p class="src">Formalités : France Diplomatie (Entrée / séjour) et sites officiels, consultés le 23/11/2026. Taux de change indicatifs du 23/11/2026. Santé : voir un centre de vaccinations internationales avant le départ.</p>`)}
${sec("🌐 Géopolitique & sécurité",`<div class="geo-badge">${g.note<=1?"🟩":"🟨"} ${esc(g.titre)} · <span class="dots">${"●".repeat(g.note)}${"○".repeat(5-g.note)}</span> ${g.note}/5</div>
<p>${esc(g.texte)}</p><div class="two"><div><h4>⛔ Zones à éviter</h4><ul>${g.eviter.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div><h4>👍 Zones sans souci</h4><ul>${g.ok.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div></div>
<p class="src">Note sur 5 (1 = très calme, 5 = dangereux) pour notre itinéraire, d'après la carte de vigilance. Source : <a href="${g.url}" target="_blank" rel="noopener">${esc(g.source)}</a>.</p>`,false,"geo")}
${sec(`🚁 Drone ${d.statut}`,`<p><b>${esc(d.resume)}</b></p><ul class="nb">${d.puces.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p class="src"><b>Règles indicatives, à vérifier avant le départ.</b> Sources : ${d.sources.map(lnk).join(" · ")}</p>`,false,"drone")}
${sec(`🚗 Se déplacer ${t.move.statut}`,`<p><b>${esc(t.move.resume)}</b></p><ul class="nb">${t.move.puces.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p><b>${esc(t.move.conseil)}</b></p><p class="src">Fourchettes de prix typiques relevées en novembre 2026 (1 € ≈ 37 THB ≈ 28 300 VND ≈ 20 000 IDR ≈ 70 PHP ; 1 $ ≈ 0,91 €), indicatives. Permis international : à demander sur le site de l'ANTS avant le départ, toujours avec le permis français. Sources : ${t.move.sources.map(lnk).join(" · ")} · <a href="https://unece.org/sites/default/files/2022-08/ECE-TRANS-WP.1-2022-1-Rev.1f.pdf" target="_blank" rel="noopener">CEE-ONU, permis internationaux par pays</a></p>`,false,"move")}
${sec(`💨 Vapote ${t.vape.statut}`,`<p><b>${esc(t.vape.resume)}</b></p><ul class="nb">${t.vape.puces.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p><b>${esc(t.vape.conseil)}</b></p><p class="small">✈️ En avion (toutes compagnies) : vapoteuse et batteries en cabine uniquement, jamais en soute ; interdit de l'utiliser ou de la recharger à bord. ⚠️ Escale à Singapour : vape interdite même en transit (amende jusqu'à 10 000 SGD).</p><p class="src">Règles indicatives, à vérifier avant le départ. Sources : ${t.vape.sources.map(lnk).join(" · ")} · <a href="https://www.ecologie.gouv.fr/politiques-publiques/articles-reglementes-interdits-avion-helicoptere" target="_blank" rel="noopener">DGAC, objets réglementés en avion</a> · <a href="https://www.gov.sg/stopvaping-penalties/" target="_blank" rel="noopener">gov.sg, sanctions vape (22/10/2026)</a></p>`,false,"vape")}
</div>
<nav class="pn"><a href="#${prev}">‹ ${T[prev].flag} ${esc(T[prev].nom)}</a><a href="#comparatif">🧭</a><a href="#${next}">${T[next].flag} ${esc(T[next].nom)} ›</a></nav>
</div></article>`}
function renderCompare(){const rows=[
["Total / pers.",id=>"<b>~"+eur10(calc(id).total)+"</b>"],
["Vol le moins cher",id=>eur(calc(id).vol)+"<br><span class='muted'>"+esc(C.pays[id].vols.moinsCher.compagnie)+"</span>"],
["Air France",id=>C.pays[id].vols.airFrance.prix?eur(C.pays[id].vols.airFrance.prix):"en cours"],
["Hôtel / pers. (15 n.)",id=>eur(calc(id).part)],
["Transports + sur place",id=>eur(C.pays[id].transportsInterieurs.prix)+" + "+eur(calc(id).budget)+"<br><span class='muted'>"+C.pays[id].budgetJour+" €/jour</span>"],
["En mars",id=>esc(T[id].verdictMars)],
["Plages",id=>({jp:"⭐ (pas sur ce circuit)",th:"⭐⭐⭐⭐",vn:"⭐⭐⭐",id:"⭐⭐⭐⭐",ph:"⭐⭐⭐⭐⭐"})[id]],
["Plongée",id=>({jp:"⭐ (Okinawa, hors circuit)",th:"⭐⭐⭐⭐",vn:"⭐⭐",id:"⭐⭐⭐⭐",ph:"⭐⭐⭐⭐⭐"})[id]],
["Culture",id=>({jp:"⭐⭐⭐⭐⭐",th:"⭐⭐⭐⭐⭐",vn:"⭐⭐⭐⭐⭐",id:"⭐⭐⭐⭐",ph:"⭐⭐"})[id]],
["Food",id=>({jp:"⭐⭐⭐⭐⭐",th:"⭐⭐⭐⭐⭐",vn:"⭐⭐⭐⭐⭐",id:"⭐⭐⭐",ph:"⭐⭐⭐"})[id]],
["Fête",id=>({jp:"⭐⭐⭐⭐",th:"⭐⭐⭐⭐⭐",vn:"⭐⭐⭐",id:"⭐⭐⭐⭐",ph:"⭐⭐⭐"})[id]],
["Visa",id=>({jp:"Sans visa 90 j (JESTA prévue vers 2028)",th:"Sans visa 30 j + TDAC",vn:"Sans visa 45 j",id:"e-VOA ~24 € + taxe Bali",ph:"Sans visa 30 j + eTravel"})[id]],
["Décalage",id=>({jp:"+8 h",th:"+6 h",vn:"+6 h",id:"+6 à +7 h",ph:"+7 h"})[id]],
["Sécurité",id=>(T[id].geo.note<=1?"🟩 ":"🟨 ")+T[id].geo.note+"/5"],
["Se déplacer",id=>T[id].move.statut+" "+esc(T[id].move.resume)],
["Vapote",id=>T[id].vape.statut+" "+esc(T[id].vape.resume)],
["Drone < 250 g",id=>T[id].drone.statut+" "+esc(T[id].drone.resume)]];
const CI=T.jp&&C.pays.jp?[...IDS,"jp"]:IDS,cl=id=>id==="jp"?' class="ref"':"";
$("#compare").innerHTML=`<thead><tr><th></th>${CI.map(id=>`<th${cl(id)}>${T[id].flag} ${esc(T[id].nom)}${id==="jp"?"<br><span class='muted'>pour comparaison</span>":""}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr><th>${r[0]}</th>${CI.map(id=>`<td${cl(id)}>${r[1](id)}</td>`).join("")}</tr>`).join("")}</tbody>`;
if(CI.includes("jp")){const t=T.jp,ts=CI.filter(i=>i!=="jp").map(i=>T[i].flag+" ~"+eur10(calc(i).total)).join(" · ");$("#japon").innerHTML=`<h3>🇯🇵 Et le Japon ? (pour comparaison, hors vote)</h3><p>Circuit classique Tokyo (6 n.) → Kyoto (5 n.) → Osaka (4 n.), mêmes hypothèses que les 4 autres : <b>~${eur10(calc("jp").total)} / pers.</b>, contre ${ts}. En mars, on est juste avant le pic des sakura (fin mars – début avril), où les prix d'hôtel peuvent grimper de 50 à 100 %. Meilleures fenêtres : mi-novembre (érables, prix plus doux) ou le pic des sakura si le budget suit.</p>${priceBlock("jp")}${hotelTable("jp")}${T.jp.cal?`<h4>📅 Prix, météo, fêtes (pour comparaison)</h4>${calBlock("jp")}`:""}<ul style="list-style:none;padding:0"><li>🌸 <b>Mars :</b> ${esc(t.verdictMars)}</li><li>🛡️ <b>Sécurité ${t.geo.note}/5 :</b> ${esc(t.geo.resume)}</li><li>🚄 <b>Se déplacer ${t.move.statut} :</b> ${esc(t.move.resume)}</li><li>💨 <b>Vapote ${t.vape.statut} :</b> ${esc(t.vape.resume)}</li><li>🛸 <b>Drone < 250 g ${t.drone.statut} :</b> ${esc(t.drone.resume)}</li><li>🛂 <b>Entrée :</b> passeport valide pour toute la durée du séjour, 90 jours sans visa ; JESTA (autorisation électronique payante) prévue vers 2028, pas encore en service.</li><li>🕗 <b>Décalage :</b> +8 h en mars.</li></ul><p class="src">Sources : ${t.sources.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener">${esc(s[0])}</a>`).join(" · ")}</p>`}}

function renderNames(){$("#names").innerHTML=C.prenoms.map(n=>`<button class="chip${n===myName?" on":""}" data-n="${esc(n)}">${esc(n)}</button>`).join("");
document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{myName=b.dataset.n===myName?"":b.dataset.n;localStorage.setItem("vv_name",myName);renderNames();if(myVote)cast(myVote,true)})}

function toast(t){const e=$("#toast");e.textContent=t;e.classList.add("show");clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove("show"),2600)}

async function rpc(fn,body){const r=await fetch(`${C.supabaseUrl}/rest/v1/rpc/${fn}`,{method:"POST",headers:{apikey:C.supabaseKey,"Content-Type":"application/json"},body:JSON.stringify(body||{})});if(!r.ok)throw new Error(await r.text());const t=await r.text();return t?JSON.parse(t):null}

async function load(){try{const rows=await rpc("vote_results");results={};(rows||[]).forEach(r=>results[r.country]=r);paint()}catch(e){$("#totalVotes").textContent="Résultats momentanément indisponibles."}}

function paint(){const total=IDS.reduce((s,id)=>s+(results[id]?.votes||0),0);const max=Math.max(0,...IDS.map(id=>results[id]?.votes||0));
IDS.forEach(id=>{const n=results[id]?.votes||0;$("#n-"+id).textContent=n;const names=results[id]?.names||[];$("#vt-"+id).textContent=n?("🙋 "+(names.length?names.join(", "):"")+(n>names.length?(names.length?" + ":"")+(n-names.length)+" anonyme"+(n-names.length>1?"s":""):"")):"";
document.querySelector(`.vote[data-id=${id}]`).classList.toggle("voted",myVote===id);
document.querySelectorAll(`[data-cnt="${id}"]`).forEach(e=>e.textContent=n)});
$("#totalVotes").textContent=total?`${total} vote${total>1?"s":""} au total${max&&IDS.filter(id=>(results[id]?.votes||0)===max).length===1?"":" · égalité en tête !"}`:"Pas encore de vote : à vous de jouer !";
const sorted=[...IDS].sort((a,b)=>(results[b]?.votes||0)-(results[a]?.votes||0));
$("#bars").innerHTML=sorted.map(id=>{const n=results[id]?.votes||0,pct=total?Math.round(n*100/total):0,lead=max>0&&n===max;return `<div class="bar${lead?" lead":""}"><div class="lab"><span>${T[id].flag} ${esc(T[id].nom)}</span><span>${n} · ${pct} %</span></div><div class="track"><div class="fill" style="width:${pct}%;background:${T[id].color}"></div></div>${(results[id]?.names||[]).length?`<p class="who">${results[id].names.map(esc).join(", ")}</p>`:""}</div>`}).join("")}

async function cast(id,silent){try{await rpc("cast_vote",{p_voter_id:voterId,p_country:id,p_name:myName||null});myVote=id;localStorage.setItem("vv_vote",id);if(!silent)toast(`Vote enregistré : ${T[id].flag} ${T[id].nom} ${myName?"(merci "+myName+" !)":""}`);await load()}catch(e){toast("Oups, le vote n'est pas passé. Réessayez.")}}

$("#tabs").innerHTML=IDS.map(id=>`<a href="#${id}" data-v="${id}" style="--c:${T[id].color}">${T[id].flag}<span class="tn"> ${esc(T[id].nom)}</span><span class="cnt" data-cnt="${id}">0</span></a>`).join("")+`<a href="#comparatif" data-v="comparatif">🧭<span class="tn"> Comparer</span></a><a href="#resultats" data-v="resultats">📊<span class="tn"> Résultats</span></a>`;
$("#score").innerHTML=IDS.map(id=>`<a href="#${id}" style="--c:${T[id].color}">${T[id].flag} <b data-cnt="${id}">0</b></a>`).join("");
$("#countries").innerHTML=IDS.map(renderCountry).join("");
document.querySelectorAll(".vote").forEach(b=>b.onclick=()=>cast(b.dataset.id));
$("#prixDate").textContent=C.prixReleves;
$("#credits").innerHTML=(window.VOYAGE_CREDITS||[]).map(c=>`<li>${esc(c.cap||"")} : <a href="${c.url}" target="_blank" rel="noopener">${esc(c.title.replace("File:",""))}</a> — ${esc(c.artist)} (${esc(c.lic)})</li>`).join("");
// galeries
document.querySelectorAll(".gal").forEach(g=>{const tr=g.querySelector(".track"),dots=[...g.querySelectorAll(".dots-g i")];
const cur=()=>Math.round(tr.scrollLeft/tr.clientWidth);
tr.addEventListener("scroll",()=>{const c=cur();dots.forEach((d,i)=>d.classList.toggle("on",i===c))},{passive:true});
g.querySelector(".prev").onclick=()=>tr.scrollTo({left:(cur()-1)*tr.clientWidth,behavior:"smooth"});
g.querySelector(".next").onclick=()=>tr.scrollTo({left:((cur()+1)%dots.length)*tr.clientWidth,behavior:"smooth"})});
// accordéons : un seul ouvert à la fois par pays
document.querySelectorAll(".acc").forEach(acc=>acc.querySelectorAll(":scope>details").forEach(d=>d.addEventListener("toggle",()=>{if(d.open){acc.querySelectorAll(":scope>details[open]").forEach(o=>{if(o!==d)o.open=false});setTimeout(()=>{const r=d.getBoundingClientRect();if(r.top<60||r.top>innerHeight*.6)scrollTo({top:scrollY+r.top-64,behavior:"smooth"})},60)}})));
document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>{const d=b.closest(".country").querySelector(`details[data-k="${b.dataset.open}"]`);if(d){d.open=true}});
// vues
const VIEWS=[...IDS,"comparatif","resultats"];
function show(v,push){if(!VIEWS.includes(v))v=IDS[0];document.querySelectorAll(".view").forEach(e=>e.classList.toggle("on",e.dataset.view===v));
document.querySelectorAll("#tabs a").forEach(a=>a.classList.toggle("on",a.dataset.v===v));
const at=document.querySelector(`#tabs a[data-v="${v}"]`);if(at)at.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"});
document.body.style.setProperty("--cur",T[v]?T[v].color:"#1d2430");
const top=$("#tabs").offsetTop;if(push!==false&&scrollY>top)scrollTo({top,behavior:"auto"})}
const fromHash=()=>{let h=location.hash.slice(1).replace(/^c-/,"");return h||IDS[0]};
addEventListener("hashchange",()=>show(fromHash()));show(fromHash(),false);
// swipe entre pays (hors galerie et tableau)
let sx=0,sy=0,ok=false;$("#countries").addEventListener("touchstart",e=>{ok=!e.target.closest(".gal,.table-wrap");sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
$("#countries").addEventListener("touchend",e=>{if(!ok)return;const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>80&&Math.abs(dx)>2*Math.abs(dy)){const cur=fromHash().replace(/^c-/,""),i=IDS.indexOf(cur);if(i<0)return;location.hash=IDS[(i+(dx<0?1:3))%4]}},{passive:true});
renderCompare();renderNames();load();setInterval(load,5000);
document.addEventListener("visibilitychange",()=>{if(!document.hidden)load()});
})();
