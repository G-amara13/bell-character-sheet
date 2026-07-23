import type { Character } from '../data/types';
import { el, modifier } from '../utils';

const LABELS: Record<keyof Character['abilities'], string> = {
  forza: 'Forza',
  destrezza: 'Destrezza',
  costituzione: 'Costituzione',
  intelligenza: 'Intelligenza',
  saggezza: 'Saggezza',
  carisma: 'Carisma',
};

export function renderStatsPanel(c: Character): HTMLElement {
  const section = el('section', 'depth-zone depth-shallow', '');
  section.id = 'zone-stats';
  section.appendChild(el('p', 'depth-label', '~5 tese'));
  section.appendChild(el('h2', 'zone-title', 'Caratteristiche'));

  const allNull = Object.values(c.abilities).every((v) => v === null);
  if (allNull) {
    section.appendChild(
      el(
        'p',
        'placeholder-note',
        '🎲 Statistiche non ancora lanciate. Aggiorna src/data/character.ts con i risultati dei dadi.'
      )
    );
  }

  const grid = el('div', 'abilities-grid');
  (Object.keys(LABELS) as Array<keyof Character['abilities']>).forEach((key) => {
    const score = c.abilities[key];
    const isSave = c.competenzeTiriSalvezza.some((s) =>
      LABELS[key].toLowerCase().startsWith(s.toLowerCase())
    );
    const card = el(
      'div',
      `ability-card${isSave ? ' ability-save' : ''}`,
      `
      <p class="ability-label">${LABELS[key]}${isSave ? ' <span class="save-dot" title="Competenza tiro salvezza">●</span>' : ''}</p>
      <p class="ability-score">${score ?? '—'}</p>
      <p class="ability-mod">${modifier(score)}</p>
    `
    );
    grid.appendChild(card);
  });
  section.appendChild(grid);

  return section;
}
