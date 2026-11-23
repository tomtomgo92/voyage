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
return `<div class="price"><div class="big"><span>💶 Total estimé / pers.<br><span class="muted small">10 jours, vols compris</span></span><strong>~${eur10(k.total)}</strong></div>
<div class="rows">
<div class="row"><span>✈️ Vol A/R Paris (${esc(p.vols.moinsCher.compagnie)})</span><span>${eur(k.vol)}</span></div>
<div class="row"><span>🏨 Part d'hôtel (10 nuits ÷ ${C.voyageurs})</span><span>${eur(k.part)}</span></div>
<div class="row"><span>🚐 Transports intérieurs</span><span>${eur(p.transportsInterieurs.prix)}</span></div>
<div class="row"><span>🍜 Sur place (${p.budgetJour} €/jour : repas, sorties, excursions)</span><span>${eur(k.budget)}</span></div>
${p.formalites.prix?`<div class="row"><span>🛂 Formalités</span><span>${eur(p.formalites.prix)}</span></div>`:""}
</div>
<p class="af">Air France : ${af.prix?("<b>"+eur(af.prix)+"</b> · "+esc(af.detail)):"en cours de vérification"}<br>Moins cher : ${esc(p.vols.moinsCher.compagnie)} ${eur(p.vols.moinsCher.prix)} · ${esc(p.vols.moinsCher.detail)}</p>
</div>`}

function hotelTable(id){const p=C.pays[id],k=calc(id);
return `<table class="mini"><tr><th>Zone</th><th>Hôtel (3–4★)</th><th class="r">Nuit (chambre)</th><th class="r">Séjour</th></tr>
${p.hotels.map(h=>`<tr><td>${esc(h.zone)}<br><span class="muted">${h.nuits} nuit${h.nuits>1?"s":""}</span></td><td>${esc(h.hotel)}</td><td class="r">~${eur(h.nuit)}</td><td class="r">${eur(h.nuit*h.nuits)}</td></tr>`).join("")}
<tr><td colspan="3"><b>Total 10 nuits</b> (chambre triple ou familiale ; sinon 1 double + 1 simple, compter +30 à 50 %)</td><td class="r"><b>${eur(k.hotelTotal)}</b></td></tr>
<tr><td colspan="3"><b>Soit par personne</b></td><td class="r"><b>${eur(k.part)}</b></td></tr></table>
<p class="src">Prix moyens de mars relevés le ${esc(C.prixReleves)} (all.accor.com, Booking, stayversus.com), indicatifs. Transports : ${esc(p.transportsInterieurs.detail)}. Formalités : ${esc(p.formalites.detail)}.</p>`}

function months(m){return `<div class="months">${m.map((c,i)=>`<span class="${c}${i===2?" mar":""}">${MOIS[i]}</span>`).join("")}</div>`}

function sec(title,inner,open){return `<details class="sec"${open?" open":""}><summary>${title}</summary><div class="in">${inner}</div></details>`}

function renderCountry(id){const t=T[id],p=t.pratique,g=t.geo,d=t.drone;
return `<article class="country" id="c-${id}">
<div class="c-hero" style="background-image:url(${t.hero})"><span class="badge">${t.num}️⃣ ${t.flag}</span><div class="title"><h2>${esc(t.nom)}</h2><p>${esc(t.slogan)}</p></div></div>
<div class="c-body">
<ul class="pitch">${t.pitch.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
<p class="tagline">✨ ${esc(t.tagline)}</p>
<div class="strip">${t.photos.map(s=>`<img loading="lazy" src="${s}" alt="${esc(t.nom)}">`).join("")}</div>
<button class="vote" data-id="${id}" style="background:${t.color}"><span>${t.flag} Je vote ${esc(t.nom)}</span><span class="n" id="n-${id}">0</span></button>
<div class="voters" id="v-${id}"></div>
${priceBlock(id)}
${sec("🗺️ Itinéraire 10 jours",`<ol class="route">${t.route.map(r=>`<li><b>${esc(r[0])}</b> · ${esc(r[1])}<br><span class="muted">${esc(r[2])}</span></li>`).join("")}</ol>`)}
${sec("⭐ Top 5 à ne pas rater",`<ol>${t.top5.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`)}
${sec("🍽️ Plats signature & 🌙 vie nocturne",`<p><b>À goûter :</b> ${t.plats.map(esc).join(" · ")}</p><ul>${t.nuit.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`)}
${sec("🤿 Plongée & snorkeling",`<ul>${t.plongee.map(x=>`<li><b>${esc(x[0])}</b> : ${esc(x[1])}</li>`).join("")}</ul>`)}
${sec("📅 Meilleures périodes",`${t.periodes.map(z=>`<p style="margin:.6em 0 0"><b>${esc(z.zone)}</b></p>${months(z.m)}<p class="small" style="margin:.2em 0 .6em">${esc(z.note)}</p>`).join("")}<p class="legend">🟩 idéal · 🟧 correct · 🟥 à éviter · cadre noir = mars</p><p><b>${esc(t.verdictMars)}</b></p><p class="src">D'après les normales climatiques (saisons sèches et des pluies, saisons des typhons) ; variations d'une année à l'autre.</p>`)}
${sec("🏨 Hôtels & détail des prix",hotelTable(id))}
${sec("🛂 Infos pratiques",`<div class="kv"><b>Formalités</b><span>${esc(p.formalites)}</span><b>Monnaie</b><span>${esc(p.monnaie)}</span><b>Décalage</b><span>${esc(p.decalage)}</span><b>Langue</b><span>${esc(p.langue)}</span><b>Prises</b><span>${esc(p.prises)}</span></div>
<p style="margin-top:.8em"><b>Coût de la vie</b> (ordres de grandeur 2026)</p><table class="mini">${p.couts.map(c=>`<tr><td>${esc(c[0])}</td><td class="r">${esc(c[1])}</td></tr>`).join("")}</table>
<p><b>Santé :</b> ${esc(p.sante)}</p><p><b>Sécurité au quotidien :</b> ${esc(p.securite)}</p>
<p class="src">Formalités : France Diplomatie (Entrée / séjour) et sites officiels, consultés le 23/11/2026. Taux de change indicatifs du 23/11/2026. Santé : voir un centre de vaccinations internationales avant le départ.</p>`)}
${sec("🌐 Contexte géopolitique & sécurité",`<div class="geo-badge">🟨 ${esc(g.titre)} · <span class="dots">${"●".repeat(g.note)}${"○".repeat(5-g.note)}</span> ${g.note}/5</div>
<p>${esc(g.texte)}</p><div class="two"><div><h4>⛔ Zones à éviter</h4><ul>${g.eviter.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div><h4>👍 Zones sans souci</h4><ul>${g.ok.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div></div>
<p class="src">Note sur 5 (1 = très calme, 5 = dangereux) pour notre itinéraire, d'après la carte de vigilance. Source : <a href="${g.url}" target="_blank" rel="noopener">${esc(g.source)}</a>.</p>`)}
${sec(`🚁 Drone ${d.statut}`,`<p><b>${esc(d.resume)}</b></p><ul style="list-style:none;padding:0">${d.puces.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p class="src"><b>Règles indicatives, à vérifier avant le départ.</b> Sources : ${d.sources.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener">${esc(s[0])}</a>`).join(" · ")}</p>`)}
${sec(`🚗 Se déplacer ${t.move.statut}`,`<p><b>${esc(t.move.resume)}</b></p><ul style="list-style:none;padding:0">${t.move.puces.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p><b>${esc(t.move.conseil)}</b></p><p class="src">Fourchettes de prix typiques relevées en novembre 2026 (1 € ≈ 37 THB ≈ 28 300 VND ≈ 20 000 IDR ≈ 70 PHP ; 1 $ ≈ 0,91 €), indicatives. Permis international : à demander sur le site de l'ANTS avant le départ, toujours avec le permis français. Sources : ${t.move.sources.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener">${esc(s[0])}</a>`).join(" · ")} · <a href="https://unece.org/sites/default/files/2022-08/ECE-TRANS-WP.1-2022-1-Rev.1f.pdf" target="_blank" rel="noopener">CEE-ONU, permis internationaux par pays</a></p>`)}
${sec(`💨 Vapote ${t.vape.statut}`,`<p><b>${esc(t.vape.resume)}</b></p><ul style="list-style:none;padding:0">${t.vape.puces.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p><b>${esc(t.vape.conseil)}</b></p><p class="small">✈️ En avion (toutes compagnies) : vapoteuse et batteries en cabine uniquement, jamais en soute ; interdit de l'utiliser ou de la recharger à bord. ⚠️ Escale à Singapour : vape interdite même en transit (amende jusqu'à 10 000 SGD).</p><p class="src">Règles indicatives, à vérifier avant le départ. Sources : ${t.vape.sources.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener">${esc(s[0])}</a>`).join(" · ")} · <a href="https://www.ecologie.gouv.fr/politiques-publiques/articles-reglementes-interdits-avion-helicoptere" target="_blank" rel="noopener">DGAC, objets réglementés en avion</a> · <a href="https://www.gov.sg/stopvaping-penalties/" target="_blank" rel="noopener">gov.sg, sanctions vape (22/10/2026)</a></p>`)}
</div></article>`}

function renderCompare(){const rows=[
["Total / pers.",id=>"<b>~"+eur10(calc(id).total)+"</b>"],
["Vol le moins cher",id=>eur(calc(id).vol)+"<br><span class='muted'>"+esc(C.pays[id].vols.moinsCher.compagnie)+"</span>"],
["Air France",id=>C.pays[id].vols.airFrance.prix?eur(C.pays[id].vols.airFrance.prix):"en cours"],
["Hôtel / pers. (10 n.)",id=>eur(calc(id).part)],
["Mars",id=>esc(T[id].verdictMars)],
["Plages",id=>({th:"⭐⭐⭐⭐",vn:"⭐⭐⭐",id:"⭐⭐⭐⭐",ph:"⭐⭐⭐⭐⭐"})[id]],
["Plongée",id=>({th:"⭐⭐⭐⭐",vn:"⭐⭐",id:"⭐⭐⭐⭐",ph:"⭐⭐⭐⭐⭐"})[id]],
["Culture",id=>({th:"⭐⭐⭐⭐⭐",vn:"⭐⭐⭐⭐⭐",id:"⭐⭐⭐⭐",ph:"⭐⭐"})[id]],
["Food",id=>({th:"⭐⭐⭐⭐⭐",vn:"⭐⭐⭐⭐⭐",id:"⭐⭐⭐",ph:"⭐⭐⭐"})[id]],
["Fête",id=>({th:"⭐⭐⭐⭐⭐",vn:"⭐⭐⭐",id:"⭐⭐⭐⭐",ph:"⭐⭐⭐"})[id]],
["Visa",id=>({th:"Sans visa 30 j + TDAC",vn:"Sans visa 45 j",id:"e-VOA ~24 € + taxe Bali",ph:"Sans visa 30 j + eTravel"})[id]],
["Décalage",id=>({th:"+6 h",vn:"+6 h",id:"+7 h",ph:"+7 h"})[id]],
["Sécurité",id=>"🟨 "+T[id].geo.note+"/5"],
["Se déplacer",id=>T[id].move.statut+" "+esc(T[id].move.resume)],
["Vapote",id=>T[id].vape.statut+" "+esc(T[id].vape.resume)],
["Drone < 250 g",id=>T[id].drone.statut+" "+esc(T[id].drone.resume)]];
$("#compare").innerHTML=`<thead><tr><th></th>${IDS.map(id=>`<th>${T[id].flag} ${esc(T[id].nom)}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr><th>${r[0]}</th>${IDS.map(id=>`<td>${r[1](id)}</td>`).join("")}</tr>`).join("")}</tbody>`}

function renderNames(){$("#names").innerHTML=C.prenoms.map(n=>`<button class="chip${n===myName?" on":""}" data-n="${esc(n)}">${esc(n)}</button>`).join("");
document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{myName=b.dataset.n===myName?"":b.dataset.n;localStorage.setItem("vv_name",myName);renderNames();if(myVote)cast(myVote,true)})}

function toast(t){const e=$("#toast");e.textContent=t;e.classList.add("show");clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove("show"),2600)}

async function rpc(fn,body){const r=await fetch(`${C.supabaseUrl}/rest/v1/rpc/${fn}`,{method:"POST",headers:{apikey:C.supabaseKey,"Content-Type":"application/json"},body:JSON.stringify(body||{})});if(!r.ok)throw new Error(await r.text());const t=await r.text();return t?JSON.parse(t):null}

async function load(){try{const rows=await rpc("vote_results");results={};(rows||[]).forEach(r=>results[r.country]=r);paint()}catch(e){$("#totalVotes").textContent="Résultats momentanément indisponibles."}}

function paint(){const total=IDS.reduce((s,id)=>s+(results[id]?.votes||0),0);const max=Math.max(0,...IDS.map(id=>results[id]?.votes||0));
IDS.forEach(id=>{const n=results[id]?.votes||0;$("#n-"+id).textContent=n;const names=results[id]?.names||[];$("#v-"+id).textContent=n?("🙋 "+(names.length?names.join(", "):"")+(n>names.length?(names.length?" + ":"")+(n-names.length)+" anonyme"+(n-names.length>1?"s":""):"")):"";
document.querySelector(`.vote[data-id=${id}]`).classList.toggle("voted",myVote===id);
const a=document.querySelector(`.tabs a[href="#c-${id}"] .cnt`);if(a)a.textContent=n});
$("#totalVotes").textContent=total?`${total} vote${total>1?"s":""} au total${max&&IDS.filter(id=>(results[id]?.votes||0)===max).length===1?"":" · égalité en tête !"}`:"Pas encore de vote : à vous de jouer !";
const sorted=[...IDS].sort((a,b)=>(results[b]?.votes||0)-(results[a]?.votes||0));
$("#bars").innerHTML=sorted.map(id=>{const n=results[id]?.votes||0,pct=total?Math.round(n*100/total):0,lead=max>0&&n===max;return `<div class="bar${lead?" lead":""}"><div class="lab"><span>${T[id].flag} ${esc(T[id].nom)}</span><span>${n} · ${pct} %</span></div><div class="track"><div class="fill" style="width:${pct}%;background:${T[id].color}"></div></div>${(results[id]?.names||[]).length?`<p class="who">${results[id].names.map(esc).join(", ")}</p>`:""}</div>`}).join("")}

async function cast(id,silent){try{await rpc("cast_vote",{p_voter_id:voterId,p_country:id,p_name:myName||null});myVote=id;localStorage.setItem("vv_vote",id);if(!silent)toast(`Vote enregistré : ${T[id].flag} ${T[id].nom} ${myName?"(merci "+myName+" !)":""}`);await load()}catch(e){toast("Oups, le vote n'est pas passé. Réessayez.")}}

$("#tabs").innerHTML=IDS.map(id=>`<a href="#c-${id}">${T[id].flag} ${esc(T[id].nom)}<span class="cnt">0</span></a>`).join("")+`<a href="#comparatif">🧭 Comparatif</a><a href="#resultats">📊 Résultats</a>`;
$("#countries").innerHTML=IDS.map(renderCountry).join("");
document.querySelectorAll(".vote").forEach(b=>b.onclick=()=>cast(b.dataset.id));
$("#prixDate").textContent=C.prixReleves;
$("#credits").innerHTML=(window.VOYAGE_CREDITS||[]).map(c=>`<li><a href="${c.url}" target="_blank" rel="noopener">${esc(c.title.replace("File:",""))}</a> — ${esc(c.artist)} (${esc(c.lic)})</li>`).join("");
renderCompare();renderNames();load();setInterval(load,5000);
document.addEventListener("visibilitychange",()=>{if(!document.hidden)load()});
})();
