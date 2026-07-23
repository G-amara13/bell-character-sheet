import type { Character, AbilityScores, CombatStats } from './data/types';

const STORAGE_KEY = 'bell-character-overrides-v1';

export interface Overrides {
  abilities?: Partial<AbilityScores>;
  combattimento?: Partial<Pick<CombatStats, 'classeArmatura' | 'puntiFerita' | 'puntiFeritaTemp' | 'iniziativa'>>;
}

export function loadOverrides(): Overrides {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveOverrides(overrides: Overrides): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  } catch (e) {
    console.error('Impossibile salvare in localStorage:', e);
  }
}

export function clearOverrides(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function updateAbilityOverride(key: keyof AbilityScores, value: number | null): void {
  const current = loadOverrides();
  const abilities = { ...current.abilities, [key]: value };
  saveOverrides({ ...current, abilities });
}

export function updateCombatOverride(
  key: keyof NonNullable<Overrides['combattimento']>,
  value: number | null
): void {
  const current = loadOverrides();
  const combattimento = { ...current.combattimento, [key]: value };
  saveOverrides({ ...current, combattimento });
}

export function applyOverrides(base: Character): Character {
  const overrides = loadOverrides();
  return {
    ...base,
    abilities: { ...base.abilities, ...(overrides.abilities || {}) },
    combattimento: { ...base.combattimento, ...(overrides.combattimento || {}) },
  };
}
