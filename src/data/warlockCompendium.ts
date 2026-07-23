// Compendio generale del Warlock in D&D 5e (regole 2014/PHB).
// Le descrizioni sono riassunti scritti in proprie parole, non testo
// copiato dai manuali ufficiali: usali come promemoria rapido, per i
// dettagli esatti fai sempre riferimento al Player's Handbook.

export interface CompendiumSpell {
  nome: string;
  scuola: string;
  effetto: string; // riassunto breve, non la descrizione ufficiale
}

export interface SpellLevelGroup {
  livello: number; // 0 = trucchetto
  etichetta: string;
  incantesimi: CompendiumSpell[];
}

export interface ClassFeatureByLevel {
  livello: number;
  tratti: string[];
}

export interface SlotRow {
  livelloWarlock: number;
  slotTotali: number;
  livelloSlot: number;
  cantripsConosciuti: number;
  incantesimiConosciuti: number;
}

export interface EldritchInvocation {
  nome: string;
  requisito: string;
  effetto: string;
}

export interface PactBoon {
  nome: string;
  effetto: string;
}

// ------------------------------------------------------------------
// Tabella slot incantesimo / trucchetti / incantesimi conosciuti
// (Pact Magic: tutti gli slot sono sempre dello stesso livello)
// ------------------------------------------------------------------
export const spellSlotTable: SlotRow[] = [
  { livelloWarlock: 1, slotTotali: 1, livelloSlot: 1, cantripsConosciuti: 2, incantesimiConosciuti: 2 },
  { livelloWarlock: 2, slotTotali: 2, livelloSlot: 1, cantripsConosciuti: 2, incantesimiConosciuti: 3 },
  { livelloWarlock: 3, slotTotali: 2, livelloSlot: 2, cantripsConosciuti: 2, incantesimiConosciuti: 4 },
  { livelloWarlock: 4, slotTotali: 2, livelloSlot: 2, cantripsConosciuti: 3, incantesimiConosciuti: 5 },
  { livelloWarlock: 5, slotTotali: 2, livelloSlot: 3, cantripsConosciuti: 3, incantesimiConosciuti: 6 },
  { livelloWarlock: 6, slotTotali: 2, livelloSlot: 3, cantripsConosciuti: 3, incantesimiConosciuti: 7 },
  { livelloWarlock: 7, slotTotali: 2, livelloSlot: 4, cantripsConosciuti: 3, incantesimiConosciuti: 8 },
  { livelloWarlock: 8, slotTotali: 2, livelloSlot: 4, cantripsConosciuti: 3, incantesimiConosciuti: 9 },
  { livelloWarlock: 9, slotTotali: 2, livelloSlot: 5, cantripsConosciuti: 3, incantesimiConosciuti: 10 },
  { livelloWarlock: 10, slotTotali: 2, livelloSlot: 5, cantripsConosciuti: 4, incantesimiConosciuti: 10 },
  { livelloWarlock: 11, slotTotali: 3, livelloSlot: 5, cantripsConosciuti: 4, incantesimiConosciuti: 11 },
  { livelloWarlock: 12, slotTotali: 3, livelloSlot: 5, cantripsConosciuti: 4, incantesimiConosciuti: 11 },
  { livelloWarlock: 13, slotTotali: 3, livelloSlot: 5, cantripsConosciuti: 4, incantesimiConosciuti: 12 },
  { livelloWarlock: 14, slotTotali: 3, livelloSlot: 5, cantripsConosciuti: 4, incantesimiConosciuti: 12 },
  { livelloWarlock: 15, slotTotali: 3, livelloSlot: 5, cantripsConosciuti: 4, incantesimiConosciuti: 13 },
  { livelloWarlock: 16, slotTotali: 3, livelloSlot: 5, cantripsConosciuti: 4, incantesimiConosciuti: 13 },
  { livelloWarlock: 17, slotTotali: 4, livelloSlot: 5, cantripsConosciuti: 4, incantesimiConosciuti: 14 },
  { livelloWarlock: 18, slotTotali: 4, livelloSlot: 5, cantripsConosciuti: 4, incantesimiConosciuti: 14 },
  { livelloWarlock: 19, slotTotali: 4, livelloSlot: 5, cantripsConosciuti: 4, incantesimiConosciuti: 15 },
  { livelloWarlock: 20, slotTotali: 4, livelloSlot: 5, cantripsConosciuti: 4, incantesimiConosciuti: 15 },
];

// ------------------------------------------------------------------
// Tratti di classe (generali) per livello. I tratti del Patrono
// specifico (L'Abissale/Fathomless) sono segnati a parte.
// ------------------------------------------------------------------
export const classFeatures: ClassFeatureByLevel[] = [
  { livello: 1, tratti: ['Otherworldly Patron (scelta del Patrono)', 'Pact Magic (slot incantesimo)'] },
  { livello: 2, tratti: ['Eldritch Invocations (impari le prime invocazioni occulte)'] },
  { livello: 3, tratti: ['Pact Boon (Lama, Catena, Tomo o Talismano)'] },
  { livello: 4, tratti: ['Aumento del Punteggio di Caratteristica (ASI)'] },
  { livello: 5, tratti: [] },
  { livello: 6, tratti: ['Tratto del Patrono (per Fathomless: Guardian Coil)'] },
  { livello: 7, tratti: [] },
  { livello: 8, tratti: ['Aumento del Punteggio di Caratteristica (ASI)'] },
  { livello: 9, tratti: [] },
  { livello: 10, tratti: ['Tratto del Patrono (per Fathomless: Grasping Tentacles)'] },
  { livello: 11, tratti: ['Mystic Arcanum (un incantesimo di 6° livello, 1 volta/giorno gratis)'] },
  { livello: 12, tratti: ['Aumento del Punteggio di Caratteristica (ASI)'] },
  { livello: 13, tratti: ['Mystic Arcanum (un incantesimo di 7° livello)'] },
  { livello: 14, tratti: ['Tratto del Patrono (per Fathomless: Fathomless Plunge)'] },
  { livello: 15, tratti: ['Mystic Arcanum (un incantesimo di 8° livello)'] },
  { livello: 16, tratti: ['Aumento del Punteggio di Caratteristica (ASI)'] },
  { livello: 17, tratti: ['Mystic Arcanum (un incantesimo di 9° livello)'] },
  { livello: 18, tratti: [] },
  { livello: 19, tratti: ['Aumento del Punteggio di Caratteristica (ASI)'] },
  { livello: 20, tratti: ['Eldritch Master (recupera tutti gli slot spendendo 1 minuto)'] },
];

// ------------------------------------------------------------------
// Invocazioni Occulte più comuni (elenco parziale, ce ne sono molte
// altre nel manuale — queste sono tra le più usate/utili per un
// Warlock da mischia/controllo come Bell)
// ------------------------------------------------------------------
export const eldritchInvocations: EldritchInvocation[] = [
  { nome: 'Agonizing Blast', requisito: 'Conosci Deflagrazione Occulta', effetto: 'Aggiungi il modificatore di Carisma al danno di Deflagrazione Occulta.' },
  { nome: "Devil's Sight", requisito: '—', effetto: 'Vedi normalmente nell\'oscurità, sia magica che naturale, fino a 36 metri.' },
  { nome: 'Mask of Many Faces', requisito: '—', effetto: 'Puoi lanciare Illusione di Travestimento a volontà, senza spendere slot.' },
  { nome: 'Eldritch Sight', requisito: '—', effetto: 'Puoi lanciare Individuazione del Magico a volontà, senza spendere slot.' },
  { nome: 'Beast Speech', requisito: '—', effetto: 'Puoi lanciare Parlare con gli Animali a volontà, senza spendere slot.' },
  { nome: 'Gaze of Two Minds', requisito: '—', effetto: 'Tocchi una creatura consenziente per vedere e sentire attraverso i suoi sensi per un round.' },
  { nome: 'Repelling Blast', requisito: 'Conosci Deflagrazione Occulta', effetto: 'Ogni raggio colpito può spingere il bersaglio fino a 3 metri.' },
  { nome: 'Armor of Shadows', requisito: '—', effetto: 'Puoi lanciare Mago Scudo su te stesso a volontà, senza componenti materiali.' },
  { nome: 'Fiendish Vigor', requisito: '—', effetto: 'Puoi lanciare Falso Vigore su te stesso a volontà, come rituale.' },
  { nome: 'Thirsting Blade', requisito: 'Pact of the Blade, liv. 5+', effetto: 'Puoi attaccare due volte invece di una quando usi l\'azione Attacco con l\'arma del patto.' },
  { nome: 'Voice of the Chain Master', requisito: 'Pact of the Chain', effetto: 'Puoi comunicare telepaticamente con il tuo famiglio a qualsiasi distanza e vedere/sentire attraverso i suoi sensi.' },
  { nome: 'Book of Ancient Secrets', requisito: 'Pact of the Tome', effetto: 'Puoi trascrivere rituali nel tuo Grimorio e lanciarli come rituali.' },
  { nome: 'One with Shadows', requisito: 'Liv. 5+', effetto: 'Al buio puoi diventare invisibile finché non ti muovi o agisci.' },
  { nome: 'Ascendant Step', requisito: 'Liv. 9+', effetto: 'Puoi lanciare Levitazione su te stesso a volontà, senza componenti materiali.' },
  { nome: 'Whispers of the Grave', requisito: 'Liv. 9+', effetto: 'Puoi lanciare Parlare con i Morti a volontà, senza spendere slot.' },
];

// ------------------------------------------------------------------
// Patto (scelto al 3° livello)
// ------------------------------------------------------------------
export const pactBoons: PactBoon[] = [
  { nome: 'Patto della Lama (Pact of the Blade)', effetto: 'Evochi un\'arma da mischia magica nella tua mano; puoi anche legare a te un\'arma magica trovata.' },
  { nome: 'Patto della Catena (Pact of the Chain)', effetto: 'Impari Trova Famiglio e puoi evocare un famiglio con forme speciali (imp, pseudodrago, folletto o mefit).' },
  { nome: 'Patto del Tomo (Pact of the Tome)', effetto: 'Ricevi un Grimorio con 3 trucchetti extra da qualsiasi lista incantesimi.' },
  { nome: 'Patto del Talismano (Pact of the Talisman)', effetto: 'Un amuleto che, se fallisci una prova di caratteristica, aggiunge 1d4 e può rivelarti la propria natura.' },
];

// ------------------------------------------------------------------
// Incantesimi disponibili al Warlock, divisi per livello.
// Elenco basato sulla lista incantesimi Warlock del Player's Handbook.
// ------------------------------------------------------------------
export const spellsByLevel: SpellLevelGroup[] = [
  {
    livello: 0,
    etichetta: 'Trucchetti',
    incantesimi: [
      { nome: 'Deflagrazione Occulta', scuola: 'Ammaliamento', effetto: 'Raggio di energia crepitante, 1 dado (più dadi ai livelli alti) da lontano.' },
      { nome: 'Tocco Gelido', scuola: 'Necromanzia', effetto: 'Mano spettrale che infligge danno necrotico e impedisce di curare il bersaglio.' },
      { nome: 'Amici', scuola: 'Ammaliamento', effetto: 'Vantaggio temporaneo alle prove di Carisma su una creatura, che poi diventa ostile.' },
      { nome: 'Mano Magica', scuola: 'Trasmutazione', effetto: 'Una mano spettrale che manipola oggetti leggeri a distanza.' },
      { nome: 'Illusione Minore', scuola: 'Illusione', effetto: 'Crea un suono o un\'immagine statica illusoria.' },
      { nome: 'Spruzzo Velenoso', scuola: 'Necromanzia', effetto: 'Getto di gas tossico che infligge danno da veleno ravvicinato.' },
      { nome: 'Prestidigitazione', scuola: 'Trasmutazione', effetto: 'Piccoli trucchi magici: luce, pulizia, sapori, effetti scenici minori.' },
      { nome: 'Vero Colpo', scuola: 'Divinazione', effetto: 'Ottieni vantaggio sul prossimo attacco contro il bersaglio osservato.' },
    ],
  },
  {
    livello: 1,
    etichetta: 'Livello 1',
    incantesimi: [
      { nome: 'Armatura di Agathys', scuola: 'Abiurazione', effetto: 'PF temporanei e danno da freddo di ritorno a chi ti colpisce in mischia.' },
      { nome: 'Braccia di Hadar', scuola: 'Invocazione', effetto: 'Tentacoli oscuri che danneggiano e impediscono le reazioni ai nemici vicini.' },
      { nome: 'Ammaliare Persone', scuola: 'Ammaliamento', effetto: 'Un umanoide ti considera un amico fidato se fallisce il tiro salvezza.' },
      { nome: 'Comprensione dei Linguaggi', scuola: 'Divinazione', effetto: 'Comprendi qualsiasi lingua parlata o scritta per la durata.' },
      { nome: 'Ritirata Precipitosa', scuola: 'Trasmutazione', effetto: 'Aumenta la tua velocità di 9 metri per la durata.' },
      { nome: 'Rimprovero Infernale', scuola: 'Invocazione', effetto: 'Reazione: danno da fuoco a chi ti ha appena colpito.' },
      { nome: 'Maledizione (Hex)', scuola: 'Ammaliamento', effetto: 'Maledici un bersaglio: danno necrotico extra e svantaggio su una caratteristica a scelta.' },
      { nome: 'Script Illusorio', scuola: 'Illusione', effetto: 'Scrivi un messaggio leggibile solo da chi scegli tu.' },
      { nome: 'Protezione dal Male e dal Bene', scuola: 'Abiurazione', effetto: 'Protezione contro certi tipi di creature (aberrazioni, non morti, demoni...).' },
      { nome: 'Servitore Invisibile', scuola: 'Invocazione', effetto: 'Forza spettrale che esegue semplici compiti al posto tuo.' },
      { nome: 'Morso della Strega (Witch Bolt)', scuola: 'Invocazione', effetto: 'Un fulmine continuo che infligge danno ogni turno finché mantieni la concentrazione.' },
    ],
  },
  {
    livello: 2,
    etichetta: 'Livello 2',
    incantesimi: [
      { nome: 'Nube di Pugnali', scuola: 'Invocazione', effetto: 'Un\'area piena di lame fluttuanti che feriscono chi ci passa attraverso.' },
      { nome: 'Corona della Follia', scuola: 'Ammaliamento', effetto: 'Costringi un nemico ad attaccare la creatura più vicina a lui.' },
      { nome: 'Oscurità', scuola: 'Invocazione', effetto: 'Crea un\'area di buio magico, impenetrabile anche a scurovisione normale.' },
      { nome: 'Ammaliare Folla (Enthrall)', scuola: 'Ammaliamento', effetto: 'Cattura l\'attenzione di un gruppo di ascoltatori, distraendoli.' },
      { nome: 'Tenere Persona', scuola: 'Ammaliamento', effetto: 'Paralizza un umanoide che fallisce il tiro salvezza sulla Saggezza.' },
      { nome: 'Invisibilità', scuola: 'Illusione', effetto: 'Rendi invisibile te o un\'altra creatura toccata.' },
      { nome: 'Immagine Speculare', scuola: 'Illusione', effetto: 'Crea illusioni di te stesso che confondono gli attacchi nemici.' },
      { nome: 'Passo Velato (Misty Step)', scuola: 'Convocazione', effetto: 'Teletrasporto bonus di 9 metri avvolto in nebbia argentata.' },
      { nome: 'Raggio Debilitante', scuola: 'Necromanzia', effetto: 'Dimezza il danno inflitto dal bersaglio colpito, per la durata.' },
      { nome: 'Frantumare (Shatter)', scuola: 'Invocazione', effetto: 'Esplosione sonora che danneggia tutte le creature in un\'area.' },
      { nome: 'Arrampicata su Ragnatele', scuola: 'Trasmutazione', effetto: 'Cammini sulle pareti e sui soffitti come un ragno.' },
      { nome: 'Suggestione', scuola: 'Ammaliamento', effetto: 'Convinci una creatura a seguire un corso d\'azione ragionevole descritto da te.' },
    ],
  },
  {
    livello: 3,
    etichetta: 'Livello 3',
    incantesimi: [
      { nome: 'Contro-incantesimo', scuola: 'Abiurazione', effetto: 'Reazione: interrompi l\'incantesimo che un\'altra creatura sta lanciando.' },
      { nome: 'Dissolvi Magie', scuola: 'Abiurazione', effetto: 'Termina un incantesimo attivo su una creatura, oggetto o effetto magico.' },
      { nome: 'Paura', scuola: 'Illusione', effetto: 'Le creature in un cono ti vedono come una minaccia terrificante e fuggono.' },
      { nome: 'Volare', scuola: 'Trasmutazione', effetto: 'Concedi al bersaglio una velocità di volo per la durata.' },
      { nome: 'Forma Gassosa', scuola: 'Trasmutazione', effetto: 'Ti trasformi in nebbia, immune a molti danni e capace di infiltrarti ovunque.' },
      { nome: 'Fame di Hadar', scuola: 'Convocazione', effetto: 'Un vuoto oscuro che danneggia e acceca chi vi resta dentro ogni turno.' },
      { nome: 'Scena Ipnotica', scuola: 'Illusione', effetto: 'Un\'illusione affascinante che incanta tutte le creature in un\'area.' },
      { nome: 'Cerchio Magico', scuola: 'Abiurazione', effetto: 'Crea una barriera contro un tipo specifico di creature (non morti, folletti, demoni...).' },
      { nome: 'Immagine Maggiore', scuola: 'Illusione', effetto: 'Illusione complessa con suono, odore e movimento, molto convincente.' },
      { nome: 'Rimuovi Maledizione', scuola: 'Abiurazione', effetto: 'Termina tutte le maledizioni che affliggono la creatura o l\'oggetto toccato.' },
      { nome: 'Lingue (Tongues)', scuola: 'Divinazione', effetto: 'Il bersaglio comprende e parla qualsiasi lingua per la durata.' },
      { nome: 'Tocco Vampirico', scuola: 'Necromanzia', effetto: 'Danno necrotico in mischia; recuperi metà del danno inflitto come PF.' },
    ],
  },
  {
    livello: 4,
    etichetta: 'Livello 4',
    incantesimi: [
      { nome: 'Bando (Banishment)', scuola: 'Abiurazione', effetto: 'Manda una creatura in un\'altra dimensione, rimuovendola dal combattimento.' },
      { nome: 'Piaga (Blight)', scuola: 'Necromanzia', effetto: 'Prosciuga l\'umidità vitale da una creatura, infliggendo ingente danno necrotico.' },
      { nome: 'Porta Dimensionale', scuola: 'Convocazione', effetto: 'Teletrasporto istantaneo fino a 150 metri, puoi portare un compagno.' },
      { nome: 'Terreno Illusorio', scuola: 'Illusione', effetto: 'Trasforma l\'aspetto di un\'ampia area di terreno con un\'illusione persistente.' },
    ],
  },
  {
    livello: 5,
    etichetta: 'Livello 5',
    incantesimi: [
      { nome: 'Contatta Altro Piano', scuola: 'Divinazione', effetto: 'Poni domande a un\'entità extraplanare, rischiando la sanità mentale.' },
      { nome: 'Sogno (Dream)', scuola: 'Illusione', effetto: 'Invii un messaggio o un incubo nei sogni di una creatura lontana.' },
      { nome: 'Tenere Mostro', scuola: 'Ammaliamento', effetto: 'Come Tenere Persona, ma funziona su qualsiasi tipo di creatura.' },
      { nome: 'Scrutare (Scrying)', scuola: 'Divinazione', effetto: 'Vedi e senti una creatura o luogo lontano tramite un sensore invisibile.' },
    ],
  },
  {
    livello: 6,
    etichetta: 'Livello 6 (Mystic Arcanum, dal 11° livello)',
    incantesimi: [
      { nome: 'Portale Arcano', scuola: 'Convocazione', effetto: 'Crea due portali collegati per il teletrasporto istantaneo di gruppo.' },
      { nome: 'Cerchio della Morte', scuola: 'Necromanzia', effetto: 'Danno necrotico massiccio su più creature in un\'ampia area.' },
      { nome: 'Convocare Folletti', scuola: 'Convocazione', effetto: 'Evoca uno spirito feytico alleato con varie forme possibili.' },
      { nome: 'Creare Non Morto', scuola: 'Necromanzia', effetto: 'Anima cadaveri come ghoul o simili al tuo servizio.' },
      { nome: 'Sguardo Maligno (Eyebite)', scuola: 'Necromanzia', effetto: 'Ogni turno puoi addormentare, spaventare o indebolire un bersaglio con lo sguardo.' },
      { nome: 'Carne in Pietra', scuola: 'Trasmutazione', effetto: 'Trasforma una creatura in pietra se fallisce ripetuti tiri salvezza.' },
      { nome: 'Suggestione di Massa', scuola: 'Ammaliamento', effetto: 'Come Suggestione, ma su fino a dodici creature contemporaneamente.' },
      { nome: 'Vista Vera (True Seeing)', scuola: 'Divinazione', effetto: 'Vedi attraverso illusioni e nell\'oscurità magica per la durata.' },
    ],
  },
  {
    livello: 7,
    etichetta: 'Livello 7 (Mystic Arcanum, dal 13° livello)',
    incantesimi: [
      { nome: 'Eterità (Etherealness)', scuola: 'Trasmutazione', effetto: 'Entri nel Piano Etereo, attraversando muri e osservando il piano materiale.' },
      { nome: 'Dito della Morte', scuola: 'Necromanzia', effetto: 'Un raggio di energia negativa capace di uccidere sul colpo bersagli deboli.' },
      { nome: 'Prigione di Forza (Forcecage)', scuola: 'Invocazione', effetto: 'Una gabbia di forza invisibile e quasi indistruttibile intrappola i bersagli.' },
      { nome: 'Spostamento Planare', scuola: 'Convocazione', effetto: 'Trasporta te stesso (e alleati) in un altro piano di esistenza.' },
    ],
  },
  {
    livello: 8,
    etichetta: 'Livello 8 (Mystic Arcanum, dal 15° livello)',
    incantesimi: [
      { nome: 'Semipiano (Demiplane)', scuola: 'Evocazione', effetto: 'Crei una stanza extradimensionale vuota accessibile da una porta oscura.' },
      { nome: 'Dominare Mostro', scuola: 'Ammaliamento', effetto: 'Prendi il controllo mentale totale di qualsiasi creatura.' },
      { nome: 'Ottunder la Mente (Feeblemind)', scuola: 'Ammaliamento', effetto: 'Distrugge Intelligenza e Carisma del bersaglio se fallisce il tiro salvezza.' },
      { nome: 'Facondia (Glibness)', scuola: 'Trasmutazione', effetto: 'I tuoi tiri di Carisma non possono scendere sotto un certo valore; utile per mentire e bluffare.' },
      { nome: 'Parola del Potere: Stordire', scuola: 'Ammaliamento', effetto: 'Storda istantaneamente un bersaglio, senza tiro salvezza, se sotto una certa soglia di PF.' },
    ],
  },
  {
    livello: 9,
    etichetta: 'Livello 9 (Mystic Arcanum, dal 17° livello)',
    incantesimi: [
      { nome: 'Proiezione Astrale', scuola: 'Necromanzia', effetto: 'Proietti te e alleati sul Piano Astrale, lasciando i corpi in trance protetta.' },
      { nome: 'Prescienza (Foresight)', scuola: 'Divinazione', effetto: 'Il bersaglio ottiene vantaggio su quasi tutti i tiri e non può essere colto di sorpresa.' },
      { nome: 'Imprigionamento', scuola: 'Abiurazione', effetto: 'Sigilli una creatura in una prigione magica permanente, di vari tipi.' },
      { nome: 'Parola del Potere: Morte', scuola: 'Ammaliamento', effetto: 'Uccidi istantaneamente un bersaglio sotto una certa soglia di PF, senza tiro salvezza.' },
      { nome: 'Vera Metamorfosi', scuola: 'Trasmutazione', effetto: 'Trasforma permanentemente una creatura (o te stesso) in qualsiasi altra creatura o oggetto.' },
    ],
  },
];
