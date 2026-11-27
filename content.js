/* Contenu éditorial (textes, infos pratiques). Les prix sont dans config.js. */
const G="g",O="o",R="r"; // vert / orange / rouge
window.VOYAGE_CONTENT = {
 th:{ move:{"statut": "✅", "resume": "Très facile sans voiture : vols low-cost, train de nuit et Grab/Bolt.", "puces": ["✈️ Bangkok → Chiang Mai : vol de 1 h 10 (~27–67 € avec bagage à part) ou train de nuit n° 9 (départ 18 h 40, ~12 h 30) en couchette 2e classe climatisée ~770–1 040 THB (~21–28 €) : une nuit d'hôtel économisée.", "✈️ Chiang Mai → Krabi : vol direct de ~2 h (Thai AirAsia), ~100–155 € l'aller ; navette aéroport → Ao Nang 150 THB (~4 €).", "📱 Grab et Bolt marchent à Bangkok, Chiang Mai et Krabi (prix affiché à l'avance) ; à Bangkok, le BTS/MRT évite les bouchons ; longtails et bateaux pour Railay et les îles.", "🚗 Conduire soi-même : permis français + permis international (conventions 1949 et 1968 acceptées) ; conduite à gauche, trafic difficile, pas conseillé.", "🛵 Scooter : il faut la catégorie moto (permis A) sur le permis et le permis international, sinon l'assurance voyage ne couvre pas en cas d'accident ; casque obligatoire."], "conseil": "👉 Vols intérieurs (ou train de nuit pour l'aventure) + Grab/Bolt en ville + bateaux autour de Krabi.", "sources": [["mythailandguide.com, trajets et tarifs (14/11/2026)", "https://mythailandguide.com/travel/getting-around"], ["Traveldojo, transports Thaïlande 2026", "https://www.traveldojo.com/thailand/getting-around/"], ["Office du tourisme de Thaïlande, conduire en Thaïlande", "https://tourismethai.fr/actualites/conduire-en-thailande/"]]}, vape:{"statut": "❌", "resume": "Interdite : ni importation, ni détention, ni usage.", "puces": ["❌ Importer une vapoteuse, des pods ou du e-liquide est interdit, même pour un usage perso : jusqu'à 10 ans de prison et une amende de 5 fois la valeur, avec confiscation.", "❌ Détention : jusqu'à 5 ans de prison ou une amende de 4 fois la valeur ; plusieurs Français ont déjà été condamnés (France Diplomatie).", "⚠️ Contrôles réels : la police verbalise et arrête dans la rue et dans les zones touristiques (Phuket, Bangkok), y compris des touristes, avec détention possible avant jugement.", "❌ Vente interdite : les vapes vendues sous le manteau sont illégales, et acheter sur place expose aux mêmes risques."], "conseil": "👉 Laisser la vapoteuse et les recharges en France ; prévoir patchs ou gommes à la nicotine (autorisés).", "sources": [["France Diplomatie, Thaïlande – Entrée / séjour (07/10/2026)", "https://www.diplomatie.gouv.fr/fr/information-par-pays/thailande/conseils-aux-voyageurs-entree-sejour"], ["Gouvernement thaïlandais (PRD), répression des e-cigarettes (01/03/2025)", "https://thailand.prd.go.th/en/content/category/detail/id/48/iid/369318"]]}, num:"1", flag:"🇹🇭", nom:"Thaïlande", slogan:"Le pays du sourire", color:"#e0533d",
  hero:"img/th_hero.webp", photos:["img/th2.jpg","img/th3.jpg","img/th4.jpg"],
  pitch:[
   "🏝️ Des falaises de calcaire qui plongent dans une mer turquoise à Railay et Krabi, des longtails sur l'eau et des couchers de soleil à tomber sur la mer d'Andaman.",
   "🛕 Les temples dorés de Bangkok, les ruines millénaires d'Ayutthaya et les marchés de nuit de Chiang Mai.",
   "🍜 Pad thaï à chaque coin de rue, curry vert, khao soi et mangue au riz gluant.",
   "🍸 Rooftops vertigineux à Bangkok, bars de plage les pieds dans le sable."],
  tagline:"L'Asie facile, festive et gourmande.",
  route:[["Bangkok","4 nuits","temples, Chao Phraya, rooftops"],["Chiang Mai","4 nuits","vieille ville, Doi Suthep, marchés de nuit"],["Krabi / Ao Nang","7 nuits","Railay, îles Hong et Phi Phi, kayak"]],
  top5:["Wat Pho, Wat Arun et le Grand Palais à Bangkok","Les ruines d'Ayutthaya (excursion d'une journée)","Doi Suthep et les temples de Chiang Mai","Railay Beach et ses falaises","Island hopping aux îles Hong et Phi Phi"],
  plats:["Pad thaï","Tom yum goong","Khao soi (Chiang Mai)","Som tam (salade de papaye)","Mangue au riz gluant"],
  nuit:["Rooftops de Bangkok : Sky Bar (Lebua), Octave (Marriott Sukhumvit)","Thonglor et Ekkamai pour les bars branchés, Khao San pour l'ambiance routard","Chiang Mai : quartier Nimman et bars à live music","Ao Nang et Railay : bars de plage au coucher du soleil"],
  plongee:[["Îles Similan (Andaman)","parc ouvert mi-octobre → mi-mai, top en mars"],["Koh Phi Phi & Bida Nok","novembre → avril"],["Hin Daeng / Hin Muang (Koh Lanta)","novembre → avril, raies manta possibles"],["Koh Tao (golfe)","toute l'année, idéal mars → septembre, baptêmes pas chers"]],
  periodes:[
   {zone:"Bangkok & le nord", m:[G,G,O,O,R,R,R,R,R,R,G,G], note:"Mars : très chaud (35 °C) ; dans le nord, pic des fumées de brûlis : Chiang Mai a atteint 188 µg/m³ de PM2.5 fin mars 2026, parmi les pires airs du monde."},
   {zone:"Côte d'Andaman (Krabi, Phuket)", m:[G,G,G,G,R,R,R,R,R,R,O,G], note:"Mars : idéal, mer calme et soleil."},
   {zone:"Îles du golfe (Koh Samui, Tao)", m:[O,G,G,G,G,G,G,G,O,R,R,R], note:"Mars : excellent, saison sèche."}],
  verdictMars:"⚠️ Mars : parfait sur les plages (Andaman, golfe), mais Chiang Mai est au pic des fumées de brûlis. En mars, on zappe le nord.",
  datesMois:[0,10],
  dates:{fenetre:"8 → 22 novembre 2027", pourquoi:"Début de saison sèche : air pur à Chiang Mai (brûlis finis depuis des mois), mer d'Andaman calme, et Loy Krathong / Yi Peng mi-novembre, la fête des lanternes volantes. Alternative : fin janvier, sec partout et vols souvent moins chers.", eviter:"Mars pour le nord (pic de fumée à Chiang Mai) ; si mars malgré tout : Bangkok + plages seulement, sans Chiang Mai."},
  pratique:{
   formalites:"Passeport valable 6 mois après l'entrée. Sans visa jusqu'à 30 jours pour le tourisme (règle en vigueur depuis le 15/09/2026, 2 entrées sans visa par an). Carte d'arrivée numérique TDAC gratuite à remplir dans les 72 h avant l'arrivée sur tdac.immigration.go.th.",
   monnaie:"Baht (THB) — 1 € ≈ 37 THB",
   couts:[["Plat de rue (pad thaï)","60–80 THB · ~2 €"],["Bière (bar)","100–150 THB · ~3–4 €"],["Massage thaï 1 h","300–400 THB · ~9 €"],["Grab / taxi 20 min","150–250 THB · ~5 €"]],
   decalage:"+6 h par rapport à Paris l'hiver, +5 h l'été",
   sante:"Aucun vaccin obligatoire. Recommandés : mises à jour DTP, hépatites A et B, typhoïde ; encéphalite japonaise pour les longs séjours ruraux. Paludisme : risque très faible sur l'itinéraire (zones frontalières reculées). Dengue présente : répulsif. Eau du robinet non potable.",
   securite:"Arnaques classiques (tuk-tuk, « palais fermé », jet-ski). Drogue : peines très lourdes. Crime de lèse-majesté pris très au sérieux. Casque obligatoire en scooter.",
   langue:"Thaï ; anglais courant dans les zones touristiques",
   prises:"Types A, B, C et O, 230 V — les prises françaises (C) passent souvent, adaptateur conseillé"},
  geo:{ note:2, couleur:"jaune", titre:"Vigilance renforcée (zones touristiques)",
   texte:"Le pays est stable pour les touristes. Le Quai d'Orsay classe en rouge l'extrême sud (Narathiwat, Pattani, Yala, Songkhla), où agit une insurrection séparatiste, toute la frontière birmane (sauf Mae Sot) et une bande de 50 km le long de la frontière cambodgienne après les affrontements armés de 2025 (cessez-le-feu fin décembre 2025, frontière terrestre toujours fermée). Satun et Phatthalung sont en orange. Éviter les manifestations politiques à Bangkok.",
   eviter:["Narathiwat, Pattani, Yala, Songkhla (extrême sud)","Bande de 50 km le long de la frontière cambodgienne","Frontière birmane (sauf Mae Sot)"],
   ok:["Bangkok","Chiang Mai, Chiang Rai","Krabi, Phuket, Koh Lanta, Phi Phi","Îles du golfe (Samui, Phangan, Tao)"],
   source:"France Diplomatie, Thaïlande – Sécurité (mise à jour du 07/10/2026, consultée le 23/11/2026)", url:"https://www.diplomatie.gouv.fr/fr/information-par-pays/thailande/conseils-aux-voyageurs-securite"},
  drone:{ statut:"⚠️", resume:"Autorisé, mais paperasse lourde même pour un mini drone.",
   puces:["⚠️ Pour un drone de moins de 250 g : pas d'exemption. Enregistrement obligatoire auprès de la NBTC (fréquences) ET de la CAAT (drone avec caméra), plus assurance RC d'au moins 1 million de bahts.","⚠️ Demande d'autorisation de vol sur le UAS Portal de la CAAT avant chaque vol + notification au Anti-Drone Centre de la police.","❌ Interdit : abords des aéroports, palais royaux, sites militaires et gouvernementaux, districts frontaliers contrôlés (Cambodge).","⚠️ Parcs nationaux (dont beaucoup d'îles et de plages) : autorisation du DNP nécessaire ; temples : accord du site.","📏 Rester à vue, de jour, loin de la foule ; hauteur limitée par l'autorisation (règle générale 90 m)."],
   sources:[["TAT Newsroom, guide drone pour touristes (29/06/2026)","https://www.tatnews.org/2026/06/flying-a-drone-in-thailand-updated-guide-for-tourists/"],["thailand.go.th, guide officiel","https://www.thailand.go.th/issue-focus-detail/updated-guide-for-tourists-regarding-flying-a-drone-in-thailand"]]}
 },
 vn:{ move:{"statut": "✅", "resume": "Facile en avion + Grab ; ne pas conduire soi-même.", "puces": ["✈️ Hanoï → Da Nang : vol de 1 h 20 (~4 h 30 porte à porte), ~1,1–1,6 million de VND (~40–57 €) ; ou train de nuit SE3 (départ 19 h 20, 15 h, couchette 4 places ~1,35–1,47 million de VND, ~48–52 €), avec le col des Nuages au réveil.", "🚕 Aéroport de Da Nang → Hoi An : Grab 45–60 min, 250 000–400 000 VND (~9–14 € la voiture) ; chauffeur privé à partir de ~22 €.", "✈️ Da Nang → Hô Chi Minh-Ville : vol de 1 h 25–1 h 30, ~650 000–1,1 million de VND (~23–40 €), 14 à 16 vols par jour.", "📱 Grab, Xanh SM (taxis électriques) et Be partout dans les villes ; à Hoi An, vélo et marche dans la vieille ville.", "🚗 Conduire soi-même : seul le permis international modèle 1968 est reconnu, avec le permis français ; tolérance zéro alcool ; circulation chaotique : déconseillé, et scooter risqué (casques de location de mauvaise qualité)."], "conseil": "👉 Deux vols intérieurs (ou un train de nuit) + Grab ; excursions (Halong, Ninh Binh, Mékong) en tour ou chauffeur.", "sources": [["The Only Vietnam Guide, Hanoï → Da Nang (13/11/2026)", "https://www.theonlyvietnamguide.com/routes/hanoi-to-da-nang/"], ["Vietnam Airlines, Da Nang → HCMV", "https://www.vietnamairlines.com/vi-vn/v%C3%A9-m%C3%A1y-bay-t%E1%BB%AB-%C4%91%C3%A0-n%E1%BA%B5ng-%C4%91%E1%BA%BFn-tp-h%E1%BB%93-ch%C3%AD-minh"], ["Ambassade de France au Vietnam, permis et circulation (04/08/2026)", "https://vn.diplomatie.gouv.fr/fr/vivre-venir"]]}, vape:{"statut": "❌", "resume": "Interdite depuis 2025, sanctions en vigueur depuis mai 2026.", "puces": ["❌ La résolution 173/2024/QH15 interdit depuis 2025 la production, la vente, l'importation, le transport et l'usage des cigarettes électroniques et du tabac chauffé, sans exception pour les touristes.", "❌ Depuis le 15/05/2026 (décret 90/2026) : amende de 3 à 5 millions de VND (~105 à 175 €) pour l'usage, avec destruction obligatoire de l'appareil.", "❌ Depuis le 05/09/2026 (décret 292/2026), ces produits sont sur la liste des importations interdites : interdit dans les bagages, même pour soi.", "⚠️ Contrôles douaniers actifs dans les aéroports (saisies et poursuites à Da Nang en novembre 2026)."], "conseil": "👉 Ne rien emporter. Attention aussi à l'escale : le vol Air France passe par Singapour, où la vape est interdite même en transit.", "sources": [["Résolution 173/2024/QH15", "https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Nghi-quyet-173-2024-QH15-hoat-dong-chat-van-tai-ky-hop-thu-8-Quoc-hoi-khoa-XV-635522.aspx"], ["Ministère de la Justice, décret 90/2026 (15/05/2026)", "https://moj.gov.vn/portal/tin-tuc/infographic/tu-ngay-1552026-nguoi-su-dung-thuoc-la-ien-tu-bi-phat-en-5-trieu-ong-tfr16b9700.html"], ["Chinhphu.vn, douane de Da Nang (17/11/2026)", "https://tiengchuong.chinhphu.vn/da-nang-hai-quan-phat-hien-hang-nghin-san-pham-thuoc-la-dien-tu-trong-hanh-ly-nhap-canh-11326111721002419.htm"]]}, num:"2", flag:"🇻🇳", nom:"Vietnam", slogan:"Le grand frisson des paysages", color:"#d4a017",
  hero:"img/vn_hero.webp", photos:["img/vn2.jpg","img/vn3.jpg","img/vn4.jpg"],
  pitch:[
   "⛰️ La baie d'Halong et ses milliers de pitons rocheux au lever du soleil, en jonque.",
   "🏮 Hoi An, ses lanternes de soie et ses ruelles jaunes, puis l'énergie folle des scooters à Hô Chi Minh-Ville.",
   "🍲 La meilleure street food d'Asie : phở fumant, bánh mì croustillant, café glacé au lait concentré.",
   "🏖️ Des plages sauvages et des grottes géantes à explorer."],
  tagline:"Le voyage le plus dépaysant et le plus gourmand.",
  route:[["Hanoï","4 nuits","vieux quartier, excursion baie d'Halong ou Ninh Binh"],["Hoi An","6 nuits","vieille ville, plage d'An Bang, Mỹ Sơn, Da Nang"],["Hô Chi Minh-Ville","5 nuits","rooftops, delta du Mékong, tunnels de Cu Chi"]],
  top5:["Croisière dans la baie d'Halong / Lan Ha","Ninh Binh : Tam Coc et Tràng An en barque","Hoi An illuminée de lanternes","Le col des Nuages entre Hué et Da Nang","Le delta du Mékong et ses marchés flottants"],
  plats:["Phở bò","Bún chả (Hanoï)","Bánh mì","Cao lầu (Hoi An)","Gỏi cuốn (rouleaux de printemps)"],
  nuit:["Hanoï : Ta Hien « beer street » et bia hơi à 0,60 €","Hoi An : bars au bord de la rivière Thu Bồn","Saïgon : rue Bùi Viện, rooftops (Chill Skybar, Social Club)","Da Nang : bars de plage à My Khe"],
  plongee:[["Cù Lao Chàm (au large de Hoi An)","mars → septembre"],["Nha Trang","février → septembre"],["Phú Quốc","novembre → mai"],["Côn Đảo","mars → septembre, tortues"]],
  periodes:[
   {zone:"Nord (Hanoï, Halong)", m:[O,O,G,G,G,O,O,O,O,G,G,G], note:"Mars : doux (20–25 °C) mais souvent gris et brumeux sur la baie."},
   {zone:"Centre (Hoi An, Hué)", m:[O,G,G,G,G,G,G,G,R,R,R,O], note:"Mars : excellent, sec et agréable."},
   {zone:"Sud (Saïgon, Mékong)", m:[G,G,G,G,O,R,R,R,R,R,O,G], note:"Mars : sec et chaud (33 °C)."}],
  verdictMars:"✅ Mars est l'un des meilleurs mois pour faire tout le pays du nord au sud.",
  datesMois:[1,2],
  dates:{fenetre:"20 février → 6 mars 2027", pourquoi:"Juste après le Têt : les prix sont retombés, le temps est sec du nord au sud, et la fête des lanternes de Hoi An tombe vers le 20 février. Le 5 → 19 mars reste aussi une très bonne option.", eviter:"Le Têt : Nouvel An le samedi 6 février 2027, congés officiels du 4 au 10 février (transports saturés, beaucoup de commerces fermés) ; éviter du 30 janvier au 12 février."},
  pratique:{
   formalites:"Passeport valable 6 mois à l'entrée. Sans visa jusqu'à 45 jours (jours d'entrée et de sortie inclus), non prolongeable. Déclaration en ligne gratuite avant l'arrivée (prearrival.immigration.gov.vn) dans les 72 h, demandée à Hanoï et Saïgon.",
   monnaie:"Dông (VND) — 1 € ≈ 28 300 VND",
   couts:[["Bol de phở","50 000–70 000 VND · ~2 €"],["Bia hơi / bière","15 000–50 000 VND · 0,60–1,80 €"],["Massage 1 h","250 000–400 000 VND · ~9–14 €"],["Grab 20 min","80 000–150 000 VND · ~3–5 €"]],
   decalage:"+6 h par rapport à Paris l'hiver, +5 h l'été",
   sante:"Aucun vaccin obligatoire. Recommandés : DTP, hépatites A et B, typhoïde ; encéphalite japonaise selon séjour. Paludisme : pas de risque dans les villes et sur l'itinéraire classique (zones forestières reculées seulement). Dengue présente. Eau du robinet non potable.",
   securite:"Circulation dense : prudence en traversant et en scooter (permis international reconnu sous conditions). Vols à l'arraché à Saïgon : téléphone bien tenu. Taxis : privilégier Grab.",
   langue:"Vietnamien ; anglais dans le tourisme, un peu de français chez les anciens",
   prises:"Types A, C et F, 220 V — les prises françaises passent généralement"},
  geo:{ note:2, couleur:"jaune", titre:"Vigilance renforcée, aucune zone rouge",
   texte:"Pays politiquement très stable (parti unique), criminalité violente faible envers les touristes. Le Quai d'Orsay place tout le pays en vigilance renforcée, sans zone déconseillée. Les tensions en mer de Chine méridionale n'affectent pas les touristes. Risque naturel principal : typhons et inondations au centre de septembre à novembre (hors période en mars).",
   eviter:["Zones frontalières reculées (Chine, Laos, Cambodge) sans guide","Centre en saison des typhons (sept.–nov.)"],
   ok:["Hanoï, baie d'Halong, Ninh Binh","Hué, Hoi An, Da Nang","Hô Chi Minh-Ville, delta du Mékong","Phú Quốc, Nha Trang"],
   source:"France Diplomatie, Vietnam – Sécurité (consultée le 23/11/2026)", url:"https://www.diplomatie.gouv.fr/fr/information-par-pays/vietnam/conseils-aux-voyageurs-securite"},
  drone:{ statut:"❌", resume:"Légal sur le papier pour un mini drone, mais très compliqué pour un touriste.",
   puces:["⚠️ Pour un drone de moins de 250 g : pas de permis de vol si usage loisir, hors zones interdites et à vue (décret 288/2025), mais il faut prévenir les autorités militaires et la police locales.","❌ L'enregistrement (ou enregistrement temporaire) du drone reste exigé, et un étranger doit avoir un parrain vietnamien (organisme ou personne).","❌ Zones interdites ou restreintes : au-dessus de 120 m, foules, sites militaires et gouvernementaux, aéroports, bande de 25 km le long de la frontière chinoise.","⚠️ Drones au-dessus de 250 g : permis de pilotage + autorisation de vol du ministère de la Défense.","💡 En pratique : laisser le drone à la maison ou passer par une agence locale."],
   sources:[["Décret 288/2025/ND-CP (texte anglais)","https://thuvienphapluat.vn/van-ban/EN/Giao-thong-Van-tai/Decree-288-2025-ND-CP-management-of-unmanned-aerial-vehicles/687952/tieng-anh.aspx"],["Vietnam.vn, résumé gouvernemental","https://www.vietnam.vn/en/chinh-phu-siet-quan-ly-tau-bay-khong-nguoi-lai"]]}
 },
 id:{ move:{"statut": "✅", "resume": "Chauffeur privé à la journée : la solution reine à 3.", "puces": ["🚐 Chauffeur privé avec voiture, 8–10 h : ~600 000–900 000 IDR par voiture (~30–45 €, soit 10–15 € par personne), carburant et parkings souvent inclus ; Ubud → Sanur ~1 h, Legian → aéroport ~20–30 min.", "⛴️ Sanur → Nusa Penida : bateau rapide de 30–45 min, ~150 000–250 000 IDR (~7,5–12,5 €), une vingtaine de départs par jour (7 h 30–17 h) ; taxe d'île à payer à part ; sur Penida, chauffeur à la journée ~600 000 IDR.", "📱 Grab et Gojek fonctionnent dans le sud et à Ubud, mais les prises en charge sont parfois interdites (ports, certaines plages, centre d'Ubud) : marcher jusqu'à une rue principale.", "🚗 Conduire soi-même : permis français non reconnu, permis international obligatoire (Indonésie : convention de 1968) ; routes étroites et embouteillées, pas conseillé.", "🛵 Scooter : très répandu mais première cause d'accidents de touristes à Bali ; casque et permis moto obligatoires, sinon pas d'assurance."], "conseil": "👉 Chauffeur privé pour les journées d'excursion + Grab/Gojek pour les petits trajets + bateau rapide pour Penida.", "sources": [["SmartBali, se déplacer à Bali (octobre 2026)", "https://smartbali.com/en/guides/getting-around-bali"], ["Visit Penida, horaires Sanur → Penida (10/10/2026)", "https://visitpenida.com/transport/sanur-to-nusa-penida/"], ["Ambassade de France en Indonésie, permis de conduire", "https://id.diplomatie.gouv.fr/fr/identite/permis"]]}, vape:{"statut": "✅", "resume": "Légale et taxée, avec des quantités limitées à l'entrée.", "puces": ["✅ Vapoter est légal ; les produits sont taxés (droits d'accise) et vendus partout à Bali.", "🧳 Franchise douanière par adulte (18 ans et plus) : 30 ml de e-liquide pour système ouvert OU 12 ml pour pods (système fermé) ; l'excédent est détruit par la douane.", "⚠️ Interdite dans les lieux non-fumeurs (transports, santé, écoles, lieux de culte, lieux de travail) ; amendes locales, jusqu'à 50 millions d'IDR à Denpasar (plafond légal).", "ℹ️ Achat sur place réservé aux 21 ans et plus."], "conseil": "👉 OK en respectant la franchise ; attention à l'escale : les vols Air France / KLM passent par Singapour, où la vape est interdite même en transit (le vol Etihad via Abu Dhabi évite ce problème).", "sources": [["Douane indonésienne (Bea Cukai), bagages des passagers (08/07/2026)", "https://lampung.beacukai.go.id/mandatory/barang-penumpang.html"], ["VPZ, règles à Bali (10/08/2026)", "https://www.vpz.co.uk/blog/help-centre/bali-vaping-laws"]]}, num:"3", flag:"🇮🇩", nom:"Indonésie", slogan:"L'île des dieux et au-delà", color:"#2e9e6a",
  hero:"img/id_hero.webp", photos:["img/id2.jpg","img/id3.jpg","img/id4.jpg"],
  pitch:[
   "🌾 Les rizières en terrasses d'Ubud, les temples au bord de l'océan et les cérémonies pleines de fleurs et d'encens.",
   "🐠 Plongée avec les raies manta à Nusa Penida, tortues aux îles Gili.",
   "🌋 Lever de soleil au sommet d'un volcan, cascades cachées dans la jungle.",
   "🍹 Beach clubs chics à Canggu, yoga, massages et smoothie bowls."],
  tagline:"Le combo spirituel, nature et dolce vita.",
  route:[["Ubud","6 nuits","rizières, temples, mont Batur, cascades"],["Nusa Penida","3 nuits","Kelingking, Manta Point, Crystal Bay"],["Seminyak / Canggu","6 nuits","beach clubs, surf, Uluwatu et sa danse kecak"]],
  top5:["Les rizières de Tegallalang et Jatiluwih","Lever de soleil au mont Batur","Kelingking Beach à Nusa Penida","Snorkeling avec les mantas","Le temple d'Uluwatu au coucher du soleil"],
  plats:["Nasi goreng","Babi guling (cochon de lait balinais)","Saté","Gado-gado","Bebek betutu (canard)"],
  nuit:["Canggu : Finns Beach Club, La Brisa, The Lawn","Seminyak : Potato Head, Ku De Ta","Uluwatu : Single Fin au coucher du soleil","Gili Trawangan : soirées sur la plage"],
  plongee:[["Manta Point & Crystal Bay (Nusa Penida)","toute l'année ; poisson-lune juillet → octobre"],["Épave USAT Liberty (Tulamben)","toute l'année, idéal avril → novembre"],["Amed","toute l'année, snorkeling facile"],["Îles Gili","toute l'année, tortues"]],
  periodes:[
   {zone:"Bali & Lombok", m:[R,R,O,G,G,G,G,G,G,G,O,R], note:"Mars : fin de la saison des pluies, averses (souvent l'après-midi) et forte humidité ; en 2027, Nyepi le 8 mars : aéroport fermé 24 h."}],
  verdictMars:"🚨 Mars 2027 : le pire moment pour Bali. Nyepi le lundi 8 mars (île en silence total 24 h, aéroport fermé), Aïd el-Fitr les 10 et 11 mars, et fin de saison des pluies.",
  datesMois:[4,8],
  dates:{fenetre:"Mai 2027, ou septembre 2027", pourquoi:"Pleine saison sèche sans les prix de juillet et août : mer calme pour Nusa Penida et les raies manta, rizières vertes ; septembre garde en plus la saison du poisson-lune.", eviter:"Mars 2027 (Nyepi le 8 mars, aéroport fermé 24 h ; Aïd el-Fitr les 10 et 11 mars). Plus largement, de novembre à mars : saison des pluies."},
  pratique:{
   formalites:"Passeport valable plus de 6 mois à l'entrée, en très bon état. Visa à l'arrivée ou e-VOA (evisa.imigrasi.go.id) : 500 000 IDR (~24 €), 30 jours, prolongeable une fois. Carte d'arrivée All Indonesia gratuite dans les 72 h. Taxe touristique de Bali : 150 000 IDR (~7,5 €, site Love Bali).",
   monnaie:"Roupie (IDR) — 1 € ≈ 20 000 IDR",
   couts:[["Nasi goreng au warung","25 000–40 000 IDR · ~1,5–2 €"],["Grande Bintang (bar)","45 000–70 000 IDR · ~2,5–3,5 €"],["Massage balinais 1 h","100 000–200 000 IDR · ~5–10 €"],["Grab / Gojek 20 min","50 000–90 000 IDR · ~3–4,5 €"]],
   decalage:"+7 h par rapport à Paris l'hiver, +6 h l'été",
   sante:"Aucun vaccin obligatoire. Recommandés : DTP, hépatites A et B, typhoïde ; rage conseillée (chiens et singes à Bali). Paludisme : pas de risque à Bali, présent surtout dans l'est (Papouasie, petites îles de la Sonde). Dengue présente. Eau du robinet non potable.",
   securite:"Accidents de scooter fréquents à Bali : casque et permis international. Courants forts sur certaines plages. Drogue : peine de mort possible. Tenue correcte (sarong) dans les temples. Vérifier l'état des volcans (MAGMA Indonesia) avant toute rando.",
   langue:"Indonésien (et balinais) ; anglais très répandu à Bali",
   prises:"Types C et F, 230 V — les prises françaises passent"},
  geo:{ note:2, couleur:"jaune", titre:"Vigilance renforcée (Bali et Lombok)",
   texte:"Démocratie stable ; Bali est très sûre pour les touristes. Le Quai d'Orsay déconseille sauf raison impérative les provinces de Papouasie (violences armées). Risques naturels réels : séismes, tsunamis et volcans actifs (Merapi, Semeru, Anak Krakatau en niveau III au moment de la recherche) : respecter les zones d'exclusion. Piraterie maritime dans certaines mers éloignées.",
   eviter:["Provinces de Papouasie","Zones d'exclusion autour des volcans en alerte","Navigation de plaisance en mers de Célèbes, Banda, Java, détroit de Malacca"],
   ok:["Bali (Ubud, Seminyak, Canggu, Uluwatu)","Nusa Penida, Nusa Lembongan","Îles Gili et Lombok","Java (Yogyakarta, Borobudur)"],
   source:"France Diplomatie, Indonésie – Sécurité (consultée le 23/11/2026) ; MAGMA Indonesia pour les volcans", url:"https://www.diplomatie.gouv.fr/fr/information-par-pays/indonesie/conseils-aux-voyageurs-securite"},
  drone:{ statut:"⚠️", resume:"Possible, mais Bali est plus strict que le reste du pays.",
   puces:["✅ Pour un drone de moins de 250 g : au niveau national, l'enregistrement SIDOPI-GO ne concerne que les drones de plus de 250 g.","⚠️ À Bali, plusieurs sources signalent depuis 2025 un pré-enregistrement de tous les drones, même sous 250 g (non confirmé sur un portail officiel) : à vérifier avant le départ.","📏 Maximum 120 m, de jour, à vue, jamais au-dessus de la foule ; caméra interdite à moins de 500 m des zones interdites ou restreintes.","❌ Zone de sécurité de l'aéroport de Denpasar (couvre une grande partie du sud de Bali) : autorisation de la DGCA obligatoire.","⚠️ Temples et sites sacrés : accord du village (banjar) ; certains sites et parcs interdisent les drones."],
   sources:[["DGCA, portail SIDOPI-GO","https://imsis-djpu.dephub.go.id/SidopiGO/Web/"],["My Art My Rules, Indonésie (vérifié le 08/10/2026)","https://directory.myartmyrules.com/countries/indonesia/drones/"],["Terasor, Bali et Komodo (26/09/2026)","https://terasor.com/articles/drone-permits-bali-komodo"]]}
 },
 ph:{ move:{"statut": "⚠️", "resume": "Les plus beaux trajets (en bateau et en petit avion), mais la logistique la plus lourde.", "puces": ["✈️ Manille → El Nido : plus de vol direct depuis Manille (NAIA) depuis le 29/03/2026 ; vol Cebgo depuis Clark (80 km au nord) en 1 h 35, ~3 500–8 000 PHP (~50–115 €) ; navette gratuite NAIA T3 → Clark si l'on part de Clark dans les 24 h, sinon Grab ~1 500–3 500 PHP (~21–50 €). Option : dormir à Clark plutôt qu'à Manille.", "🛺 Aéroport de Lio → El Nido : tricycle ~300 PHP par véhicule (~4 €), 15–20 min.", "⛴️ El Nido → Coron : ferry rapide, 3 h 30 prévues mais compter ~5 h, ~1 830–3 100 PHP (~26–44 €) ; jours de départ limités selon la compagnie : réserver tôt. Ou vol Cebgo de 40 min, plus cher.", "✈️ Coron (aéroport de Busuanga, à 25–45 min de la ville, van partagé ~150–250 PHP) → Clark ; taxe environnementale de Coron 200 PHP en espèces, pas de distributeur à l'aéroport.", "🚗 Conduire soi-même : permis français + permis international (permis non rédigé en anglais), valable 90 jours ; inutile à El Nido et Coron, où tout se fait en tricycle et en bangka."], "conseil": "👉 Réserver le combo vol Clark → El Nido + ferry + vol Coron → Clark dès que les dates sont fixées ; prévoir une marge pour les retards et la météo.", "sources": [["Clever Tourists, Manille → El Nido (2026)", "https://clevertourists.com/resources/manila-to-el-nido-flight-van-guide"], ["El Nido Map, ferry El Nido → Coron (10/11/2026)", "https://elnidomap.com/en/guides/el-nido-to-coron-ferry/"], ["Isla Visit, aller à Coron (16/08/2026)", "https://islavisit.com/how-to-get-to-coron/"], ["Unrush Travel, conduire aux Philippines (12/11/2026)", "https://unrushtravel.com/fr/philippines/sur-le-terrain/conduire-aux-philippines-2026-permis-motos-regle-90-jours"]]}, vape:{"statut": "⚠️", "resume": "Légale pour les 18 ans et plus, mais très encadrée dans les lieux publics.", "puces": ["✅ Légale (Vaporized Nicotine and Non-Nicotine Products Regulation Act, RA 11900, pleinement en vigueur depuis le 06/06/2024) : achat et usage à partir de 18 ans.", "❌ Interdite dans tous les lieux publics fermés sauf espaces vape désignés, et totalement dans les transports, terminaux d'aéroport et de ferry, restaurants, hôpitaux, lieux de culte, ascenseurs et bâtiments publics.", "💸 Amendes : 5 000 PHP (~70 €), puis 10 000 et 20 000 PHP en cas de récidive.", "🧳 Aucune règle publiée n'interdit d'apporter sa vape perso (biens de moins de 10 000 PHP exonérés de taxes), mais le traitement en douane n'est pas confirmé officiellement : rester sur des quantités perso."], "conseil": "👉 OK, mais vapoter seulement dehors ou dans les zones prévues (attention sur les bateaux d'island hopping).", "sources": [["Republic Act 11900 (Lawphil)", "https://lawphil.net/statutes/repacts/ra2022/ra_11900_2022.html"], ["DTI, lois et sanctions", "https://www.dti.gov.ph/dti-osmv/dti-laws-issuances-compliance"], ["Bureau of Customs, voyageurs à l'arrivée", "https://customs.gov.ph/guidelines-on-arriving-travelers/"]]}, num:"4", flag:"🇵🇭", nom:"Philippines", slogan:"Le paradis des îles", color:"#2f7fd8",
  hero:"img/ph_hero.webp", photos:["img/ph2.jpg","img/ph3.jpg","img/ph4.jpg"],
  pitch:[
   "🏝️ El Nido et Coron à Palawan : lagons cristallins, plages de sable blanc et îles désertes rien que pour nous.",
   "🤿 Parmi les plus beaux spots de plongée et de snorkeling au monde : épaves, récifs, poissons de toutes les couleurs.",
   "🚤 Island hopping en bangka : une île par jour, une crique par heure.",
   "🎶 Une ambiance chaleureuse, du karaoké partout et des soirées sur la plage."],
  tagline:"Pour celles qui rêvent de cartes postales grandeur nature.",
  route:[["Manille","1 nuit","arrivée, Intramuros"],["El Nido","7 nuits","Tours A et C, Big Lagoon, Nacpan Beach"],["Coron","7 nuits","lac Kayangan, Twin Lagoon, épaves"]],
  top5:["Big Lagoon et Small Lagoon à El Nido","Le lac Kayangan à Coron","Les épaves japonaises de Coron","Nacpan Beach","Island hopping en bangka"],
  plats:["Adobo","Sinigang (soupe acidulée)","Lechon (cochon de lait)","Kinilaw (ceviche philippin)","Halo-halo (dessert glacé)"],
  nuit:["Manille : Poblacion (Makati) et BGC","El Nido : bars de Las Cabanas au coucher du soleil, ville animée le soir","Coron : petits bars et karaoké, ambiance détendue"],
  plongee:[["Épaves japonaises de Coron","toute l'année, idéal novembre → mai"],["Récifs de Bacuit Bay (El Nido)","novembre → mai"],["Tubbataha (croisière plongée)","mi-mars → mi-juin seulement"],["Moalboal, banc de sardines (Cebu)","toute l'année"]],
  periodes:[
   {zone:"Palawan (El Nido, Coron)", m:[G,G,G,G,G,O,R,R,R,R,O,G], note:"Mars : saison sèche, mer calme, la meilleure période."}],
  verdictMars:"✅ Mars : mois le plus sec à Palawan, mer d'huile ; mais éviter la semaine sainte (21 au 28 mars 2027), complète et hors de prix.",
  datesMois:[1,2],
  dates:{fenetre:"10 → 24 février 2027", pourquoi:"Saison sèche à Palawan, mer calme, avant la foule et les prix de mars. Le 24 février → 10 mars marche aussi très bien.", eviter:"La semaine sainte du 21 au 28 mars 2027 (Jeudi saint le 25, Vendredi saint le 26, Samedi saint le 27) : vols intérieurs et hôtels complets, prix au maximum."},
  pratique:{
   formalites:"Sans visa jusqu'à 30 jours pour le tourisme. Passeport valable au moins 6 mois après la fin du séjour, billet retour ou de sortie obligatoire. Enregistrement eTravel gratuit dans les 72 h avant l'arrivée (etravel.gov.ph) : QR code demandé à l'embarquement.",
   monnaie:"Peso (PHP) — 1 € ≈ 70 PHP",
   couts:[["Repas local","200–350 PHP · ~3–5 €"],["Bière San Miguel","70–150 PHP · ~1–2 €"],["Massage 1 h","500–800 PHP · ~7–11 €"],["Tricycle / Grab court trajet","50–300 PHP · ~1–4 €"]],
   decalage:"+7 h par rapport à Paris l'hiver, +6 h l'été",
   sante:"Aucun vaccin obligatoire. Recommandés : DTP, hépatites A et B, typhoïde ; rage selon activités. Paludisme : surtout dans le sud rural de Palawan, faible à El Nido et Coron (avis d'un centre de vaccination). Dengue présente. Eau du robinet non potable.",
   securite:"Vérifier l'état des bateaux et la météo pour l'island hopping. Petite délinquance à Manille. Drogue : sanctions très sévères. Garder du liquide sur les îles (peu de distributeurs).",
   langue:"Filipino et anglais (parlé partout, très pratique)",
   prises:"Types A, B et C, 220 V — adaptateur conseillé (prises plates type US fréquentes)"},
  geo:{ note:2, couleur:"jaune", titre:"Vigilance renforcée (Palawan nord, Manille)",
   texte:"Démocratie animée, tensions en mer de Chine méridionale avec la Chine (sans effet pour les touristes). Le Quai d'Orsay classe en rouge l'archipel de Sulu, Tawi-Tawi, Basilan et l'ouest et le centre de Mindanao (groupes armés, enlèvements), ainsi que la zone maritime entre le sud de Palawan et Sulu. Le nord de Palawan (El Nido, Coron) n'est pas concerné. Typhons de juillet à novembre ; volcans actifs (Taal, Kanlaon).",
   eviter:["Archipels de Sulu et Tawi-Tawi, Basilan","Ouest et centre de Mindanao (Zamboanga, Lanao, Maguindanao, Cotabato…)","Navigation au sud de Palawan vers Sulu"],
   ok:["Manille","El Nido, Coron (nord de Palawan)","Cebu, Bohol, Siargao","Boracay"],
   source:"France Diplomatie, Philippines – Sécurité (consultée le 23/11/2026)", url:"https://www.diplomatie.gouv.fr/fr/information-par-pays/philippines/conseils-aux-voyageurs-securite"},
  drone:{ statut:"✅", resume:"Le plus simple des quatre pour un mini drone de loisir.",
   puces:["✅ Pour un drone de moins de 250 g (et jusqu'à 7 kg) en loisir : ni enregistrement CAAP ni certificat de pilote exigés.","📏 Maximum 120 m (400 ft), à vue, de jour, à au moins 30 m des personnes ; vol de nuit, hors vue, au-dessus des zones habitées ou à moins de 10 km d'un aéroport = permis spécial.","❌ Interdit sans autorisation : aéroports, sites militaires et gouvernementaux, foules.","⚠️ Permis locaux possibles : aire protégée d'El Nido, sites gérés par les communautés Tagbanua à Coron (lac Kayangan…) : se renseigner sur place.","⚠️ Usage commercial (vidéos monétisées) : enregistrement obligatoire quel que soit le poids."],
   sources:[["CAAP, types d'opérations","https://www.caap.gov.ph/types-of-operations/"],["CAAP, enregistrement RPA","https://www.caap.gov.ph/rpa-registration-2/"],["CAAP, PCAR Part 11 (2026)","https://www.caap.gov.ph/wp-content/uploads/2026/01/PART-11-Aerial-Work-and-Operating-Limitations-for-Non-Type-Certificated-Aircraft.pdf"]]}
 }
};

// Japon : référence pour le comparatif (hors vote)
window.VOYAGE_CONTENT.jp={
"flag": "🇯🇵",
"nom": "Japon",
"color": "#bc002d",
"verdictMars": "Frais (6–16 °C à Tokyo et Kyoto), sec et lumineux ; pruniers en fleurs, sakura juste après (1res fleurs le 19/03 à Tokyo et le 23/03 à Kyoto en 2026).",
"geo": {
"note": 1,
"titre": "Vigilance normale sur presque tout le pays",
"resume": "Pays très sûr ; risques naturels (séismes, typhons de juin à novembre), ours dans les zones rurales et de montagne (Hokkaido, Tohoku) ; petites zones encore fermées autour de la centrale de Fukushima Daiichi."
},
"move": {
"statut": "✅",
"resume": "Le plus simple des 5 : Shinkansen ponctuels et métro, aucun besoin de conduire.",
"puces": []
},
"vape": {
"statut": "⚠️",
"resume": "Matériel autorisé, mais e-liquide nicotiné introuvable sur place : import personnel limité à 1 mois (120 ml ou 60 pods), vapoteuse 1 + 1 de réserve ; interdit en intérieur sauf espaces fumeurs.",
"puces": []
},
"drone": {
"statut": "⚠️",
"resume": "Dès 100 g : enregistrement MLIT (DIPS 2.0) + Remote ID obligatoires ; autorisation pour les zones urbaines denses (quasi tout Tokyo, Kyoto, Osaka) et les aéroports ; Drone Act (palais, sites sensibles).",
"puces": []
},
"sources": [
[
"Air France, Paris → Tokyo, tarifs par mois (24/11/2026)",
"https://wwws.airfrance.fr/fr-fr/vols-de-paris-a-tokyo"
],
[
"holipak.com / Aviasales, Paris → Tokyo en mars 2027 (23/11/2026)",
"https://holipak.com/en/flights/paris-tokyo/march-2027/"
],
[
"stayversus.com, ibis Styles Tokyo Ginza et Kyoto Station, prix par mois",
"https://stayversus.com/en/hotel/ibis-styles-tokyo-ginza-tokyo/prices/"
],
[
"JR Group, tarifs Nozomi (10/2026)",
"https://jr-group.jp/nozomi-ryokin/"
],
[
"japanplain.com, JR Pass 2026 (vérifié le 31/10/2026)",
"https://japanplain.com/japan-rail-pass-worth-it-2026/"
],
[
"Japan Echo, budget quotidien 2026",
"https://japanecho.com/guides/daily-budget/"
],
[
"Agence météo du Japon (JMA), floraison 2026",
"https://www.data.jma.go.jp/sakura/data/sakura_kaika.html"
],
[
"France Diplomatie, Japon",
"https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/japon/"
],
[
"VisasNews, JESTA attendue pour 2028",
"https://visasnews.com/japon-le-parlement-devoile-de-nouveaux-details-sur-la-future-autorisation-de-voyage-electronique-jesta-attendue-pour-2028/"
],
[
"MHLW, cigarettes électroniques, import personnel (Q63)",
"https://www.mhlw.go.jp/web/t_doc?dataId=00tc1462&dataType=1&pageNo=2"
],
[
"MLIT, règles drones / DIPS 2.0",
"https://www.mlit.go.jp/en/koku/uas.html"
],
[
"Police nationale (NPA), Drone Act modifié le 14/07/2026",
"https://www.npa.go.jp/english/uas/uas.html"
],
[
"BCE, 1 € = 174 ¥ (23/11/2026)",
"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-jpy.en.html"
]
]
};

// Hôtels de rêve Accor (pour rêver, hors budget) : all.accor.com, tarifs membres vus le 26/11/2026, 3 adultes, hors taxes sauf mention
window.VOYAGE_CONTENT.th.hotels={"dates": "10 → 21 novembre 2027", "etapes": [{"zone": "Bangkok", "dates": "10 → 13 nov.", "choix": {"nom": "Sofitel Bangkok Sukhumvit", "marque": "Sofitel", "url": "https://all.accor.com/booking/en/accor/hotel/5213", "note": 4.7, "total": 734, "nuit": 245, "taxes": 130}, "alt": [{"nom": "VIE Hotel Bangkok", "marque": "MGallery", "url": "https://all.accor.com/booking/en/accor/hotel/6469", "note": 4.8, "total": 678}, {"nom": "Fairmont Bangkok Sukhumvit", "marque": "Fairmont", "url": "https://all.accor.com/booking/en/accor/hotel/C1G0", "total": 681, "pdj": true}]}, {"zone": "Chiang Mai", "dates": "13 → 16 nov.", "choix": {"nom": "Veranda High Resort Chiang Mai", "marque": "MGallery", "url": "https://all.accor.com/booking/en/accor/hotel/8154", "note": 4.7, "total": 1872, "nuit": 624, "taxes": 332, "info": "le seul avec une vraie chambre triple"}, "alt": []}, {"zone": "Phuket (à la place de Krabi)", "dates": "16 → 21 nov.", "choix": {"nom": "Pullman Phuket Arcadia Naithon Beach", "marque": "Pullman", "url": "https://all.accor.com/booking/en/accor/hotel/7488", "note": 4.7, "total": 1028, "nuit": 206, "taxes": 193}, "alt": [{"nom": "Pullman Phuket Panwa Beach Resort", "marque": "Pullman", "url": "https://all.accor.com/booking/en/accor/hotel/A2E5", "total": 1183}, {"nom": "Avista Grande Phuket Karon", "marque": "MGallery", "url": "https://all.accor.com/booking/en/accor/hotel/A224", "total": 1125}]}]};
window.VOYAGE_CONTENT.vn.hotels={"dates": "20 février → 3 mars 2027", "etapes": [{"zone": "Hanoï", "dates": "20 → 23 fév.", "choix": {"nom": "Sofitel Legend Metropole Hanoi", "marque": "Sofitel Legend", "url": "https://all.accor.com/booking/en/accor/hotel/1555", "note": 4.9, "total": 1836, "nuit": 612, "taxes": 285, "info": "−19 % affiché"}, "alt": [{"nom": "Fairmont Hanoi", "marque": "Fairmont", "url": "https://all.accor.com/booking/en/accor/hotel/B9U0", "total": 1675}, {"nom": "Mövenpick Hotel Hanoi Centre", "marque": "Mövenpick", "url": "https://all.accor.com/booking/en/accor/hotel/B4G6", "total": 507}]}, {"zone": "Da Nang (pas d'Accor à Hội An)", "dates": "23 → 27 fév.", "choix": {"nom": "Pullman Danang Beach Resort", "marque": "Pullman", "url": "https://all.accor.com/booking/en/accor/hotel/8838", "note": 4.8, "total": 750, "nuit": 188, "taxes": 117, "info": "à ~35 min de Hội An"}, "alt": []}, {"zone": "Hô Chi Minh-Ville", "dates": "27 fév. → 3 mars", "choix": {"nom": "Sofitel Saigon Plaza", "marque": "Sofitel", "url": "https://all.accor.com/booking/en/accor/hotel/2077", "note": 4.7, "total": 3567, "nuit": 892, "taxes": 553, "pdj": true, "info": "−25 % affiché"}, "alt": []}]};
window.VOYAGE_CONTENT.id.hotels={"dates": "mai 2027", "etapes": [{"zone": "Ubud", "dates": "11 → 14 mai", "choix": {"nom": "Novotel Bali Ubud", "marque": "Novotel", "note": 4.4, "total": 460, "pdj": true, "info": "seul Accor à Ubud, pas de triple : 2 chambres (~231 € chacune)"}, "alt": []}, {"zone": "Seminyak", "dates": "14 → 21 mai", "choix": {"nom": "The Grand Seminyak Lifestyle Boutique Resort", "marque": "Accor", "url": "https://all.accor.com/booking/en/accor/hotel/C4D5", "note": 4.5, "total": 1338, "nuit": 191, "pdj": true}, "alt": [{"nom": "Peppers Seminyak", "marque": "Peppers", "url": "https://all.accor.com/booking/en/accor/hotel/B3U5", "note": 4.7, "total": 1936}, {"nom": "Mercure Bali Legian", "marque": "Mercure", "url": "https://all.accor.com/booking/en/accor/hotel/8450", "total": 377}]}]};
window.VOYAGE_CONTENT.ph.hotels={"dates": "12 → 23 février 2027", "etapes": [{"zone": "Manille (Makati)", "dates": "12 → 14 fév.", "choix": {"nom": "Raffles Makati", "marque": "Raffles", "url": "https://all.accor.com/booking/en/accor/hotel/A5E3", "note": 4.8, "total": 723, "nuit": 362, "taxes": 164, "pdj": true}, "alt": [{"nom": "Fairmont Makati", "marque": "Fairmont", "url": "https://all.accor.com/booking/en/accor/hotel/A5G3", "total": 325}, {"nom": "The Admiral Hotel Manila", "marque": "MGallery", "url": "https://all.accor.com/booking/en/accor/hotel/9338", "total": 275}]}, {"zone": "Palawan (El Nido, Coron) : aucun Accor", "dates": "14 → 23 fév.", "choix": {"nom": "Mövenpick Resort & Spa Boracay (plage alternative)", "marque": "Mövenpick", "url": "https://all.accor.com/booking/en/accor/hotel/B4P1", "note": 4.4, "total": 2600, "pdj": true, "info": "~1 314 € par chambre, 2 chambres nécessaires"}, "alt": [{"nom": "ibis Styles Boracay", "marque": "ibis Styles", "total": 764, "info": "chambre triple"}]}]};
window.VOYAGE_CONTENT.th.etudeAF={titre:"Quand réserver ? Vols Air France Paris ↔ Bangkok",
intro:"Aller-retour Air France sans escale, 1 adulte, classe éco, prix trouvés le 26/11/2026 (convertis à ~0,88 €/$). Échantillon de 11 couples de dates, pas un calendrier complet : les tarifs bougent.",
lignes:[["8 → 18 déc.","mar → ven",750,"853 $"],["9 → 19 mars","mar → ven",755,"858 $"],["2 → 12 mars","mar → ven",840,"957 $"],["20 → 30 janv.","mer → sam",990,"1 122 $"],["6 → 16 mars","sam → mar",1025,"1 165 $"],["12 → 22 déc.","sam → mar",1070,"1 220 $"],["17 → 27 fév.","mer → sam",1105,"1 256 $"],["12 → 22 janv.","mar → ven",1130,"1 285 $"],["2 → 12 fév. et 25 fév. → 7 mars","",1145,"1 299–1 301 $"],["6 → 16 fév.","sam → mar",1235,"1 403 $"]],
conclusion:["Partir un mardi et rentrer un vendredi est presque toujours le moins cher ; un départ le samedi coûte 200 à 300 € de plus.","Début décembre et mi-mars sont les moins chers ; janvier et février restent au-dessus de 1 000 €.","Le 9 → 19 mars coûte environ 270 € de moins que le 6 → 16 mars.","Les tarifs les plus bas sont en Light : bagage cabine seul, pas de bagage en soute, non remboursable, modification à 300 €."],
note:"Info sur les prix des vols Air France uniquement : la fenêtre conseillée pour la Thaïlande reste du 10 au 21 novembre 2027."};

// Calendrier 2027 : prix × météo × événements (Grok Bot, recherches du 26/11/2026)
// prix : "l" basse saison · "m" intermédiaire · "h" haute saison / pic ; ev : index du mois (0 = janvier)
window.VOYAGE_CONTENT.th.cal={
 prix:["h","h","m","m","l","l","m","m","l","l","m","h"],
 prixNotes:"Haute saison de novembre à mars, pic à Noël – Nouvel An et au Nouvel An chinois ; basse saison de mai à octobre (pluies). Vols Air France Paris ↔ Bangkok (notre étude du 26/11/2026, 11 couples de dates) : début décembre (~750 €) et mi-mars (~755 €) les moins chers, janvier et février au-dessus de 1 000 €. Novembre n'était pas dans l'échantillon.",
 meteoZones:[0,1], courts:["Bangkok / Nord","Andaman","Golfe"],
 ev:[{m:1,d:"6 fév.",t:"Nouvel An chinois (Yaowarat, Bangkok)",e:"🧧"},{m:3,d:"13 → 15 avr.",t:"Songkran, la bataille d'eau géante du Nouvel An thaï",e:"💦"},{m:10,d:"13 → 14 nov. (prévu)",t:"Yi Peng et Loy Krathong à Chiang Mai, lanternes et krathongs sur la rivière Ping",e:"🏮",top:1}],
 verdicts:{prix:"Mai – juin et septembre – octobre (basse saison, mais pluies) ; côté Air France, début décembre et mi-mars.",meteo:"Décembre à février : sec partout sur l'itinéraire (mars – avril : fumées au nord, chaleur).",event:"Yi Peng / Loy Krathong, 13 – 14 novembre 2027 ; Songkran, 13 – 15 avril."},
 sweet:"10 → 21 novembre 2027 : saison sèche qui commence, prix encore avant le pic de Noël, et Yi Peng en plein milieu.",
 alerte:"À noter : côté Andaman (Krabi), début novembre peut encore être un peu pluvieux (mois « correct » sur la frise) ; décembre à février est plus sûr pour la mer, mais plus cher.",
 sources:[["TAT Newsroom, saison fraîche nov. – fév.","https://www.tatnews.org/2020/11/thailands-comfortable-cooler-months-of-november-february-are-a-fantastic-time-to-travel/"],["Travel + Leisure Asia, saisons et prix","https://www.travelandleisureasia.com/sea/destinations/southeast-asia/the-best-time-to-visit-thailand-for-great-weather-low-prices-and-fun-festivals/"],["yipengfestival.org, Yi Peng 2027 (29/10/2026)","https://yipengfestival.org/yi-peng-2027/"],["Thailand What's On, Loy Krathong 2027","https://thailandwhatson.com/events/yi-peng-loy-krathong-chiang-mai-2027/"]]};
window.VOYAGE_CONTENT.vn.cal={
 prix:["m","h","m","m","l","l","h","h","l","l","l","h"],
 prixNotes:"Pic des prix autour du Têt (hôtels +20 à +50 %, plus sur les plages) et en juillet – août (vacances des Vietnamiens, Da Nang très demandé) ; meilleur rapport qualité-prix en mai – juin, septembre et fin octobre – novembre. Noël – Nouvel An chargé côté vols.",
 meteoZones:[0,1,2], courts:["Nord","Centre","Sud"],
 ev:[{m:0,d:"21 janv.",t:"Nuit des lanternes de Hội An (14e jour lunaire), chaque mois",e:"🏮"},{m:1,d:"4 → 10 fév.",t:"Têt (Nouvel An le 6 février) : congés, transports saturés, commerces fermés",e:"🧧",bad:1},{m:1,d:"19 → 21 fév.",t:"Nguyên Tiêu : la plus belle nuit des lanternes de Hội An le 19 février",e:"🏮",top:1},{m:2,d:"21 mars",t:"Nuit des lanternes de Hội An",e:"🏮"},{m:3,d:"16 avr. · 30 avr. → 1er mai",t:"Fête des rois Hùng, puis Réunification : foule vietnamienne en vacances",e:"🇻🇳"},{m:8,d:"2 sept. · 14 → 15 sept.",t:"Fête nationale, puis fête de la Mi-automne (Hội An le 14)",e:"🥮"}],
 lanternes:"Nuits des lanternes de Hội An 2027 : 21 janv., 19 fév., 21 mars, 20 avr., 19 mai, 18 juin, 17 juil., 15 août, 14 sept., 13 oct., 11 nov., 11 déc.",
 verdicts:{prix:"Mai – juin, septembre et fin octobre – novembre (mais pluies au centre en automne).",meteo:"Mars – avril : seuls mois au vert du nord au sud.",event:"Nguyên Tiêu à Hội An (19 février), ou la Mi-automne (14 – 15 septembre)."},
 sweet:"20 février → 3 mars 2027 : après le Têt, prix redescendus, sec au centre et au sud.",
 alerte:"À noter : la grande nuit des lanternes de Hội An tombe le 19 février, la veille du début de la fenêtre : arriver un jour plus tôt (ou viser la nuit du 21 mars). Le nord peut rester gris et frais fin février.",
 sources:[["Gouvernement vietnamien, jours fériés 2027 (12/10/2026)","https://en.baochinhphu.vn/viet-nam-announces-2027-public-holiday-schedule-111261012155048477.htm"],["danang.plus, nuits des lanternes 2026 – 2027","https://en.danang.plus/hoi-an-lantern-festival/"],["Day Trips Vietnam, prix des hôtels par mois 2026","https://daytripsvietnam.com/guides/cheapest-time-to-visit-vietnam-monthly-price-calendar-2026/"],["Vietnam Tourism, meilleure période","https://vietnamtourism.gov.vn/en/printer/19726?type=1"]]};
window.VOYAGE_CONTENT.id.cal={
 prix:["m","l","l","l","m","m","h","h","m","m","l","h"],
 prixNotes:"Prix au maximum en juillet – août et de fin décembre à début janvier (hôtels +30 à +50 %) ; les moins chers de fin janvier à avril et en novembre (saison des pluies, remises de 25 à 40 %) ; mai – juin et septembre – octobre sont l'intersaison : presque sec et 20 à 30 % sous le pic.",
 meteoZones:[0], courts:["Bali / Lombok"],
 ev:[{m:0,d:"13 → 23 janv.",t:"Galungan puis Kuningan : penjors dans toutes les rues, cérémonies dans les villages",e:"🎋"},{m:1,d:"8 fév. → 9 mars",t:"Ramadan (surtout à Lombok et Java ; Bali est hindoue)",e:"🌙"},{m:2,d:"7 → 8 mars",t:"Ogoh-ogoh le 7, puis Nyepi le 8 : île à l'arrêt 24 h, aéroport fermé",e:"🤫",bad:1},{m:2,d:"10 → 11 mars",t:"Aïd el-Fitr : départs massifs en Indonésie",e:"🌙"},{m:7,d:"11 → 21 août · 17 août",t:"Second Galungan – Kuningan, et fête de l'Indépendance",e:"🎋",top:1}],
 verdicts:{prix:"Février – avril et novembre (en pleine saison des pluies) ; meilleur compromis en mai – juin et septembre – octobre.",meteo:"Juin à septembre : le plus sec (saison sèche d'avril à octobre).",event:"Galungan – Kuningan, du 11 au 21 août (ou 13 – 23 janvier, sous la pluie) ; Nyepi le 8 mars, unique mais tout est fermé."},
 sweet:"Mai 2027 ou septembre 2027 : saison sèche, intersaison pour les prix.",
 sources:[["Gouvernement indonésien, jours fériés 2027 (15/09/2026)","https://setkab.go.id/en/govt-annnounces-2027-national-holidays-and-collective-leave-days/"],["Wikipedia, Galungan (dates 2027)","https://en.wikipedia.org/wiki/Galungan"],["detik.com, Ramadan 2027 (26/11/2026)","https://www.detik.com/kalimantan/berita/d-8770824/kapan-ramadan-2027-ini-perkiraan-awal-puasa-dan-jadwal-lebaran-1448-h"],["inbalihotels.com, quand réserver","https://inbalihotels.com/when-to-book"]]};
window.VOYAGE_CONTENT.ph.cal={
 prix:["m","m","h","h","m","l","l","l","l","l","m","h"],
 prixNotes:"Haute saison de décembre à mai (chambres +10 à +80 %), pics à Noël – Nouvel An et pendant la semaine sainte (jusqu'à 2 à 3 fois le prix normal à El Nido) ; basse saison de juin à octobre (−30 à −50 %, septembre le moins cher) mais mer agitée et typhons.",
 meteoZones:[0], courts:["Palawan"],
 ev:[{m:0,d:"15 → 17 janv.",t:"Sinulog à Cebu (grande parade le 17) et Ati-Atihan à Kalibo : hors Palawan",e:"🥁"},{m:1,d:"6 fév.",t:"Nouvel An chinois (Binondo, Manille)",e:"🧧"},{m:2,d:"21 → 28 mars",t:"Semaine sainte (Pâques le 28) : tout est complet et hors de prix",e:"✝️",bad:1},{m:7,d:"6 → 22 août",t:"Kadayawan à Davao (Mindanao, hors itinéraire)",e:"🌺"},{m:9,d:"1 → 17 oct.",t:"MassKara à Bacolod (temps fort le 17)",e:"🎭"},{m:11,d:"16 → 24 déc.",t:"Simbang Gabi et Noël, la plus longue saison de Noël du monde",e:"🎄"}],
 verdicts:{prix:"Juin – octobre (septembre le moins cher), mais saison des typhons à Palawan.",meteo:"Janvier – mai : saison sèche, mer calme de février à avril.",event:"Sinulog / Ati-Atihan le 17 janvier (hors Palawan) ; à fuir : la semaine sainte, 21 – 28 mars."},
 sweet:"12 → 23 février 2027 : sec et mer calme, avant les prix de mars et la semaine sainte.",
 sources:[["Sinulog Foundation, programme 2027","https://www.sinulogfoundationinc.com/festival/2027/"],["Philippines What's On, grands événements 2027","https://philippineswhatson.com/key-events/"],["El Nido Hotels Ranking, prix par mois","https://www.elnidohotelsranking.com/el-nido-hotel-rates-by-month/"]]};
window.VOYAGE_CONTENT.jp.cal={
 prix:["m","l","h","h","m","l","m","h","m","m","h","m"],
 meteo:["o","o","g","g","g","r","o","r","o","g","g","o"],
 prixNotes:"Pics : fin mars – début avril (sakura), Golden Week (29 avril – 5 mai), Obon (13 – 16 août) et feuillages d'automne à Kyoto (novembre). Vols Paris – Tokyo : mars parmi les mois les plus chers selon Kayak.",
 ev:[{m:2,d:"~25 mars → 8 avr.",t:"Sakura à Tokyo puis Kyoto (moyennes ; prévision 2027 pas encore publiée)",e:"🌸",top:1},{m:3,d:"29 avr. → 5 mai",t:"Golden Week : trains et hôtels pris d'assaut",e:"🎌",bad:1},{m:6,d:"juillet (défilés 17 et 24)",t:"Gion Matsuri à Kyoto",e:"🏮"},{m:7,d:"13 → 16 août",t:"Obon : départs massifs",e:"🏮"},{m:10,d:"mi-nov. → début déc.",t:"Feuillages d'automne (kōyō) à Kyoto",e:"🍁"}],
 verdicts:{prix:"Février et juin (mais froid ou saison des pluies).",meteo:"Fin mars – mai et octobre – novembre.",event:"Sakura fin mars – début avril ; kōyō en novembre."},
 sweet:"Pour comparaison : fin mars – début avril pour les sakura (le plus cher), ou mi-mai et octobre pour le rapport qualité-prix.",
 sources:[["japan-guide.com, Golden Week","https://www.japan-guide.com/e/e2282.html"],["Living in Japan Guide, sakura 2027","https://livinginjapanguide.com/travel/cherry-blossom"],["KAYAK, Air France Paris – Tokyo par mois","https://www.kayak.fr/vols/Air-France-Paris-PAR/Tokyo-TYO.b.AF.ksp"]]};
window.VOYAGE_VACANCES="Vacances scolaires françaises 2026 – 2027 (prix des vols en hausse) : Noël du 19 déc. au 4 janv. ; hiver du 6 fév. au 8 mars selon la zone ; printemps du 3 avr. au 3 mai selon la zone ; été à partir de début juillet (service-public.gouv.fr).";
