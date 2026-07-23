import type { Character } from './types';

// ============================================================
//  SCHEDA DI BELLAMY "BELL"
//  Modifica i valori qui sotto per aggiornare il personaggio.
//  Le statistiche (abilities/combattimento) sono a "null" o 0
//  finché non lanci i dadi: sostituisci semplicemente i numeri.
// ============================================================

export const character: Character = {
  nome: 'Bellamy',
  soprannome: 'Bell',
  razza: 'Tritone',
  classe: 'Warlock',
  livello: 1,
  patrono: 'L\'Abissale (Fathomless) — identità sconosciuta',
  background: 'Esploratore / Pirata (ispirato al Marinaio)',
  allineamento: 'Caotico Neutrale',

  descrizione: [
    'Bellamy, conosciuto semplicemente come "Bell", è un tritone cresciuto tra le correnti marine e le rotte inesplorate degli oceani.',
    'Fin da giovane ha sviluppato una forte curiosità verso ciò che si nasconde oltre le mappe conosciute: isole dimenticate, rovine sommerse e antichi misteri custoditi nelle profondità marine.',
    'Non è mai stato interessato alle regole della terraferma o alle gerarchie dei regni. Per Bell il mare rappresenta la vera libertà: nessun confine, nessun padrone, solo vento, onde e possibilità infinite.',
    'Nel corso delle sue avventure ha navigato insieme a marinai, esploratori e pirati, imparando a sopravvivere in mare aperto, leggere le correnti e riconoscere i pericoli nascosti dietro ogni orizzonte.',
  ],

  personalita:
    'Bell è curioso, indipendente e poco incline a seguire ordini. Non ama le autorità e diffida di chi cerca di imporre regole senza averne guadagnato il rispetto. Non è malvagio e non cerca il caos per semplice divertimento: segue il proprio istinto e il proprio codice personale. Per lui una promessa vale più di una legge scritta.',

  ideali: 'Libertà sopra ogni cosa. Il mare non appartiene a nessuno e nessuno dovrebbe essere completamente padrone del destino di un\'altra persona.',

  legami: [
    'Il mistero del suo Patrono e la ricerca della sua vera identità.',
    'Le mappe incomplete e i luoghi sconosciuti che ancora vuole esplorare.',
    'Gli eventuali compagni di viaggio che considera parte del proprio equipaggio.',
  ],

  difetti: [
    'È troppo curioso e spesso si mette nei guai cercando risposte.',
    'Ha difficoltà ad accettare ordini o autorità.',
    'A volte sottovaluta i pericoli perché pensa sempre di poter trovare una via d\'uscita.',
  ],

  bonusCaratteristiche: ['+1 Forza', '+1 Costituzione', '+1 Carisma'],

  capacitaRazziali: [
    'Può respirare sia aria che acqua.',
    'Velocità di nuoto: 9 metri.',
    'Resistenza ai danni da freddo.',
    'Capacità legata all\'acqua: Creare o Distruggere Acqua.',
  ],

  competenzeTiriSalvezza: ['Saggezza', 'Carisma'],
  competenzeArmature: ['Armature leggere'],
  competenzeArmi: ['Armi semplici'],

  abilitaPatrono: {
    nome: 'Tentacolo degli Abissi',
    descrizione:
      'Bell può evocare un tentacolo spettrale legato al potere del suo Patrono, L\'Abissale.',
    dettagli: ['Colpisce i nemici', 'Infligge danni da freddo', 'Rallenta gli avversari'],
  },

  // --- Da compilare dopo il tiro dei dadi ---
  abilities: {
    forza: null,
    destrezza: null,
    costituzione: null,
    intelligenza: null,
    saggezza: null,
    carisma: null,
  },

  combattimento: {
    classeArmatura: null,
    puntiFerita: null,
    puntiFeritaTemp: null,
    iniziativa: null,
    velocita: '9 m (camminando), 9 m (nuoto)',
    dadoVita: '1d8',
  },

  // Elenco base di abilità 5e: segna competente:true su quelle di Bell
  // quando definirai il background definitivo.
  skills: [
    { nome: 'Acrobazia', caratteristica: 'destrezza', competente: false },
    { nome: 'Addestrare Animali', caratteristica: 'saggezza', competente: false },
    { nome: 'Arcano', caratteristica: 'intelligenza', competente: false },
    { nome: 'Atletica', caratteristica: 'forza', competente: false },
    { nome: 'Furtività', caratteristica: 'destrezza', competente: false },
    { nome: 'Indagare', caratteristica: 'intelligenza', competente: false },
    { nome: 'Inganno', caratteristica: 'carisma', competente: true },
    { nome: 'Intimidire', caratteristica: 'carisma', competente: false },
    { nome: 'Intrattenere', caratteristica: 'carisma', competente: false },
    { nome: 'Intuizione', caratteristica: 'saggezza', competente: false },
    { nome: 'Medicina', caratteristica: 'saggezza', competente: false },
    { nome: 'Natura', caratteristica: 'intelligenza', competente: false },
    { nome: 'Percezione', caratteristica: 'saggezza', competente: true },
    { nome: 'Persuasione', caratteristica: 'carisma', competente: false },
    { nome: 'Religione', caratteristica: 'intelligenza', competente: false },
    { nome: 'Rapidità di Mano', caratteristica: 'destrezza', competente: false },
    { nome: 'Sopravvivenza', caratteristica: 'saggezza', competente: false },
    { nome: 'Storia', caratteristica: 'intelligenza', competente: false },
  ],

  trucchetti: [
    {
      nome: 'Deflagrazione Occulta',
      livello: 0,
      descrizione: 'Il principale attacco magico del Warlock: un raggio di energia crepitante.',
    },
    {
      nome: 'Illusione Minore',
      livello: 0,
      descrizione: 'Utile per inganni, distrazioni e situazioni da esploratore/pirata.',
    },
  ],

  incantesimiConosciuti: [
    {
      nome: 'Maledizione (Hex)',
      livello: 1,
      descrizione: 'Bell marchia un nemico aumentando i danni inflitti contro di lui.',
      preparato: true,
    },
    {
      nome: 'Armatura di Agathys',
      livello: 1,
      descrizione: 'Una protezione magica che ricopre Bell di energia gelida.',
      preparato: true,
    },
  ],

  spellSlots: [{ livello: 1, totali: 1, usati: 0 }],

  inventario: [],
  monete: { oro: 0, argento: 0, rame: 0 },

  storicoLivelli: [
    {
      livello: 1,
      note:
        'Creazione del personaggio. Patto con L\'Abissale stretto durante l\'esplorazione di una rovina sommersa mai segnata sulle mappe.',
    },
  ],

  elementiDaDefinire: [
    'Statistiche iniziali (da determinare con i tiri dei dadi).',
    'Aspetto fisico di Bell.',
    'Nome e identità reale del Patrono.',
    'Eventuale nave o equipaggio del passato.',
    'Simbolo del Patto con l\'Abisso.',
  ],
};
