import type { Character } from '../data/types';
import { el, modifier } from '../utils';
import { updateAbilityOverride } from '../storage';

const LABELS: Record<keyof Character['abilities'], string> = {
  forza: 'Forza',
  destrezza: 'Destrezza',
  costituzione: 'Costituzione',
  intelligenza: 'Intelligenza',
  saggezza: 'Saggezza',
  carisma: 'Carisma',
};

export function renderStatsPanel(c: Character, editMode: boolean, onEdit: () => void): HTMLElement {
  const section = el('section', 'depth-zone depth-shallow', '');
  section.id = 'zone-stats';
  section.appendChild(el('p', 'depth-label', '~5 tese'));
  section.appendChild(el('h2', 'zone-title', 'Caratteristiche'));

  const allNull = Object.values(c.abilities).every((v) => v === null);
  if (allNull && !editMode) {
    section.appendChild(
      el(
        'p',
        'placeholder-note',
        '🎲 Statistiche non ancora lanciate. Clicca "Modifica" per inserirle direttamente qui.'
      )
    );
  }

  const grid = el('div', 'abilities-grid');
  (Object.keys(LABELS) as Array<keyof Character['abilities']>).forEach((key) => {
    const score = c.abilities[key];
    const isSave = c.competenzeTiriSalvezza.some((s) =>
      LABELS[key].toLowerCase().startsWith(s.toLowerCase())
    );
    const card = el('div', `ability-card${isSave ? ' ability-save' : ''}`);
    card.appendChild(
      el(
        'p',
        'ability-label',
        `${LABELS[key]}${isSave ? ' <span class="save-dot" title="Competenza tiro salvezza">●</span>' : ''}`
      )
    );

    if (editMode) {
      const input = document.createElement('input');
      input.type = 'number';
      input.className = 'ability-input';
      input.dataset.abilityKey = key;
      input.value = score !== null ? String(score) : '';
      input.placeholder = '—';
      input.min = '1';
      input.max = '30';
      input.addEventListener('input', () => {
        const val = input.value === '' ? null : Number(input.value);
        updateAbilityOverride(key, val);
        onEdit();
      });
      card.appendChild(input);
    } else {
      card.appendChild(el('p', 'ability-score', score !== null ? String(score) : '—'));
    }

    card.appendChild(el('p', 'ability-mod', modifier(score)));
    grid.appendChild(card);
  });
  section.appendChild(grid);

  return section;
}
