/* ============================================================
   CONFIG DU SITE DE VOTE — modifiez ici, puis redéployez.
   Tous les prix sont en euros, par personne sauf mention contraire.
   Le total est recalculé automatiquement :
     total = vol le moins cher + part hôtel (10 nuits / 3) + transports intérieurs
             + budget quotidien x 10 + formalités payantes
   ============================================================ */
window.VOYAGE_CONFIG = {
  supabaseUrl: "https://rnvcqzkpujzelipsjnyq.supabase.co",
  supabaseKey: "sb_publishable_RYGbcaIPSz09GQNDrClkKA_Skperauc", // clé publique (anon), sans danger
  prixReleves: "23/11/2026",
  voyageurs: 3,
  nuits: 10,
  dates: "6 → 16 mars 2027",
  prenoms: ["Charlotte", "Mylène", "Thomas"],

  pays: {
    th: {
      vols: {
        airFrance: { prix: 865, detail: "Air France via Amsterdam à l'aller, direct au retour (direct A/R : ~980 €)" },
        moinsCher: { compagnie: "Austrian + ITA", prix: 585, detail: "1 escale" }
      },
      hotels: [
        { zone: "Bangkok", nuits: 3, hotel: "Mercure Bangkok Siam (Accor)", nuit: 110 },
        { zone: "Chiang Mai", nuits: 3, hotel: "ibis Styles Chiang Mai (Accor)", nuit: 55 },
        { zone: "Krabi / Ao Nang", nuits: 4, hotel: "ibis Styles Krabi Ao Nang (Accor)", nuit: 70 }
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
        { zone: "Hanoï", nuits: 3, hotel: "Mercure Hanoi La Gare (Accor)", nuit: 100 },
        { zone: "Hoi An", nuits: 4, hotel: "hôtel boutique 3–4★ près de la vieille ville (pas d'Accor en ville)", nuit: 55 },
        { zone: "Hô Chi Minh-Ville", nuits: 3, hotel: "Novotel Saigon Centre (Accor)", nuit: 150 }
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
        { zone: "Ubud", nuits: 4, hotel: "hôtel 4★ avec piscine au cœur d'Ubud (le Novotel Bali Ubud est un 5★ excentré à Payangan)", nuit: 65 },
        { zone: "Nusa Penida", nuits: 2, hotel: "bungalows 3★ côté Crystal Bay / Toyapakeh", nuit: 55 },
        { zone: "Seminyak / Canggu", nuits: 4, hotel: "Mercure Bali Legian ou ibis Styles Bali Legian (Accor)", nuit: 65 }
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
        { zone: "El Nido", nuits: 5, hotel: "resort 3–4★ à Corong-Corong / Las Cabanas", nuit: 90 },
        { zone: "Coron", nuits: 4, hotel: "The Ridge Coron ou équivalent 3–4★", nuit: 85 }
      ],
      transportsInterieurs: { prix: 230, detail: "transfert Manille → Clark, vol Clark → El Nido (~85 €), ferry El Nido → Coron (~40 €), vol Coron → Clark (~80 €), tricycles et vans" },
      budgetJour: 55,
      formalites: { prix: 0, detail: "aucune (30 jours sans visa)" }
    }
  }
};
