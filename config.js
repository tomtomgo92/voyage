/* ============================================================
   CONFIG DU SITE DE VOTE — modifiez ici, puis redéployez.
   Tous les prix sont en euros, par personne sauf mention contraire.
   Le total est recalculé automatiquement :
     total = vol le moins cher + part hôtel (15 nuits / 3) + transports intérieurs
             + budget quotidien x 15 + formalités payantes
   ============================================================ */
window.VOYAGE_CONFIG = {
  supabaseUrl: "https://rnvcqzkpujzelipsjnyq.supabase.co",
  supabaseKey: "sb_publishable_RYGbcaIPSz09GQNDrClkKA_Skperauc", // clé publique (anon), sans danger
  prixReleves: "23/11/2026",
  voyageurs: 3,
  nuits: 15,
  dates: "à choisir — fenêtre conseillée indiquée pour chaque pays",
  prenoms: ["Charlotte", "Mylène", "Thomas"],

  pays: {
    th: {
      vols: {
        airFrance: { prix: 865, detail: "Air France via Amsterdam à l'aller, direct au retour (direct A/R : ~980 €)" },
        moinsCher: { compagnie: "Austrian + ITA", prix: 585, detail: "1 escale" }
      },
      hotels: [
        { zone: "Bangkok", nuits: 4, hotel: "Mercure Bangkok Siam (Accor)", nuit: 110 },
        { zone: "Chiang Mai", nuits: 4, hotel: "ibis Styles Chiang Mai (Accor)", nuit: 55 },
        { zone: "Krabi / Ao Nang", nuits: 7, hotel: "ibis Styles Krabi Ao Nang (Accor)", nuit: 70 }
      ],
      transportsInterieurs: { prix: 150, detail: "vols Bangkok → Chiang Mai (~45 €) et Chiang Mai → Krabi (~105 €)" },
      budgetJour: 45,
      formalites: { prix: 0, detail: "aucune (exemption de visa)" }
    },
    vn: {
      vols: {
        airFrance: { prix: 542, detail: "Promo Standard, 1 bagage 23 kg, Air France + Singapore Airlines via Singapour (direct aller dès ~795 €)" },
        moinsCher: { compagnie: "Air France", prix: 542, detail: "c'est Air France le moins cher ! (Malaysia Airlines ~805 €, Emirates ~875 €)" }
      },
      hotels: [
        { zone: "Hanoï", nuits: 4, hotel: "Mercure Hanoi La Gare (Accor)", nuit: 100 },
        { zone: "Hoi An", nuits: 6, hotel: "hôtel boutique 3–4★ près de la vieille ville (pas d'Accor en ville)", nuit: 55 },
        { zone: "Hô Chi Minh-Ville", nuits: 5, hotel: "Novotel Saigon Centre (Accor)", nuit: 150 }
      ],
      transportsInterieurs: { prix: 100, detail: "vols Hanoï → Da Nang (~50 €) et Da Nang → Hô Chi Minh-Ville (~30 €) + transferts Grab" },
      budgetJour: 35,
      formalites: { prix: 0, detail: "aucune (exemption 45 jours)" }
    },
    id: {
      vols: {
        airFrance: { prix: 990, detail: "Air France + KLM via Singapour" },
        moinsCher: { compagnie: "Etihad", prix: 755, detail: "via Abu Dhabi" }
      },
      hotels: [
        { zone: "Ubud", nuits: 6, hotel: "hôtel 4★ avec piscine au cœur d'Ubud (le Novotel Bali Ubud est un 5★ excentré à Payangan)", nuit: 65 },
        { zone: "Nusa Penida", nuits: 3, hotel: "bungalows 3★ côté Crystal Bay / Toyapakeh", nuit: 55 },
        { zone: "Seminyak / Canggu", nuits: 6, hotel: "Mercure Bali Legian ou ibis Styles Bali Legian (Accor)", nuit: 65 }
      ],
      transportsInterieurs: { prix: 50, detail: "bateaux rapides Sanur ⇄ Nusa Penida + chauffeurs" },
      budgetJour: 45,
      formalites: { prix: 32, detail: "e-VOA 500 000 IDR (~24 €) + taxe touristique de Bali 150 000 IDR (~7,5 €)" }
    },
    ph: {
      vols: {
        airFrance: { prix: 620, detail: "Air France / KLM, tarif Light, KLM + Malaysia, 2 escales (618–623 €)" },
        moinsCher: { compagnie: "Air France / KLM", prix: 620, detail: "c'est Air France / KLM le moins cher ! (Saudia ~660 €, Austrian + SWISS ~705 €)" }
      },
      hotels: [
        { zone: "Manille (1 nuit)", nuits: 1, hotel: "Novotel Manila Araneta City (Accor)", nuit: 80 },
        { zone: "El Nido", nuits: 7, hotel: "resort 3–4★ à Corong-Corong / Las Cabanas", nuit: 90 },
        { zone: "Coron", nuits: 7, hotel: "The Ridge Coron ou équivalent 3–4★", nuit: 85 }
      ],
      transportsInterieurs: { prix: 230, detail: "transfert Manille → Clark, vol Clark → El Nido (~85 €), ferry El Nido → Coron (~40 €), vol Coron → Clark (~80 €), tricycles et vans" },
      budgetJour: 55,
      formalites: { prix: 0, detail: "aucune (30 jours sans visa)" }
    },

    la: {
      vols: {
        airFrance: { prix: 1133, detail: "Air France / Thai Airways via Bangkok, puis vol régional Bangkok → Vientiane (dès 1 133 € relevés)" },
        moinsCher: { compagnie: "China Southern", prix: 756, detail: "1 escale à Canton (relevé Kayak, fenêtre février-mars) ; Vietnam Airlines via Hanoï dès ~770 €" }
      },
      hotels: [
        { zone: "Vientiane", nuits: 4, hotel: "ibis Vientiane Nam Phu (Accor)", nuit: 50 },
        { zone: "Vang Vieng", nuits: 4, hotel: "Amari Vang Vieng (4★ au bord de la Nam Song)", nuit: 80 },
        { zone: "Luang Prabang", nuits: 7, hotel: "3 Nagas Hotel, MGallery (Accor), vieille ville", nuit: 90 }
      ],
      transportsInterieurs: { prix: 60, detail: "train LCR Vientiane → Vang Vieng (~10 €) et Vang Vieng → Luang Prabang (~12 €) en 2e classe, navettes de gare, tuk-tuks et excursion aux chutes de Kuang Si" },
      budgetJour: 35,
      formalites: { prix: 43, detail: "eVisa 50 $ (~43 €) ou visa à l'arrivée 40 $ en espèces ; formulaire LDIF gratuit" }
    },
    kh: {
      vols: {
        airFrance: { prix: null, detail: "Air France / KLM via Bangkok puis vol régional ; aucun tarif fiable relevé pour les fenêtres 2027" },
        moinsCher: { compagnie: "Etihad", prix: 586, detail: "1 escale à Abu Dhabi (dès 586 € relevés hors pointe ; en février, compter plutôt 700-950 €)" }
      },
      hotels: [
        { zone: "Phnom Penh", nuits: 4, hotel: "Novotel Phnom Penh BKK 1 (Accor)", nuit: 80 },
        { zone: "Siem Reap", nuits: 7, hotel: "hôtel 4★ près de la rivière et de Pub Street (Sofitel Angkor et Raffles Grand Hôtel pour la version rêve)", nuit: 55 },
        { zone: "Kampot / Kep", nuits: 4, hotel: "hôtel 4★ au bord de la rivière à Kampot", nuit: 55 }
      ],
      transportsInterieurs: { prix: 85, detail: "bus Phnom Penh → Siem Reap (~16 €), long bus Siem Reap → Kampot via Phnom Penh (~20 €), tuk-tuks et PassApp sur place" },
      budgetJour: 40,
      formalites: { prix: 26, detail: "eVisa touristique 30 $ (~26 €) ou visa à l'arrivée 30 $ ; formulaire e-Arrival gratuit" }
    },
    // Japon : colonne de référence « pour comparaison » (hors vote)
    jp: {
      vols: {
        airFrance: { prix: 1219, detail: "direct CDG → Haneda/Narita, tarif « dès » affiché pour mars 2027 sur airfrance.fr (relevé le 24/11/2026 ; mars = l'un des mois les plus chers)" },
        moinsCher: { compagnie: "Air China", prix: 800, detail: "1 escale (Pékin), ~798 € repéré pour début mars 2027 (Aviasales via holipak.com, 23/11/2026) ; China Eastern ~810 €, Korean Air ~876 €" }
      },
      hotels: [
        { zone: "Tokyo (Ginza)", nuits: 6, hotel: "ibis Styles Tokyo Ginza (Accor) : 1 double ~120 € + 1 simple ~80 € (chambres japonaises petites, triples rares)", nuit: 200 },
        { zone: "Kyoto (gare)", nuits: 5, hotel: "Mercure Kyoto Station (Accor), chambre Superior Triple", nuit: 170 },
        { zone: "Osaka (Namba)", nuits: 4, hotel: "The OneFive Osaka Namba Dotonbori (ex-ibis Styles) ou équivalent 3★, 2 chambres", nuit: 130 }
      ],
      transportsInterieurs: { prix: 235, detail: "Shinkansen Nozomi Tokyo → Kyoto 14 170 ¥ + Shin-Osaka → Tokyo 14 720 ¥, Kyoto ↔ Osaka ~600 ¥, aéroport ↔ centre ~3 000 ¥, métro/bus (carte IC) ~8 000 ¥ : ~40 500 ¥ ≈ 235 € (billets à l'unité ; le JR Pass 7 jours à 50 000 ¥, Nozomi non inclus, ne vaut pas le coup ici)" },
      budgetJour: 75,
      formalites: { prix: 0, detail: "aucune (90 jours sans visa ; JESTA prévue vers 2028)" }
    }
  }
};
