// Tipi condivisi da tutti i componenti del character sheet.
// Modifica qui SOLO se vuoi aggiungere nuovi campi/strutture.

export interface AbilityScores {
  forza: number | null;
  destrezza: number | null;
  costituzione: number | null;
  intelligenza: number | null;
  saggezza: number | null;
  carisma: number | null;
}

export interface CombatStats {
  classeArmatura: number | null;
  puntiFerita: number | null;
  puntiFeritaTemp: number | null;
  iniziativa: number | null;
  velocita: string; // es. "9 m (nuoto), 9 m (camminando)"
  dadoVita: string;
}

export interface Skill {
  nome: string;
  caratteristica: keyof AbilityScores;
  competente: boolean;
}

export interface Spell {
  nome: string;
  livello: number; // 0 = trucchetto
  descrizione: string;
  preparato?: boolean;
}

export interface SpellSlot {
  livello: number;
  totali: number;
  usati: number;
}

export interface InventoryItem {
  nome: string;
  quantita: number;
  note?: string;
}

export interface LevelUpEntry {
  livello: number;
  note: string;
  dataConseguita?: string;
}

export interface Character {
  nome: string;
  soprannome: string;
  razza: string;
  classe: string;
  livello: number;
  patrono: string;
  background: string;
  allineamento: string;

  descrizione: string[];
  personalita: string;
  ideali: string;
  legami: string[];
  difetti: string[];

  bonusCaratteristiche: string[];
  capacitaRazziali: string[];

  competenzeTiriSalvezza: string[];
  competenzeArmature: string[];
  competenzeArmi: string[];

  abilitaPatrono: {
    nome: string;
    descrizione: string;
    dettagli: string[];
  };

  abilities: AbilityScores;
  combattimento: CombatStats;

  skills: Skill[];
  trucchetti: Spell[];
  incantesimiConosciuti: Spell[];
  spellSlots: SpellSlot[];

  inventario: InventoryItem[];
  monete: { oro: number; argento: number; rame: number };

  storicoLivelli: LevelUpEntry[];

  elementiDaDefinire: string[];
}
