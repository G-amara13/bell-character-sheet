import type { Character } from '../data/types';
import { el } from '../utils';

export function renderLevelLogPanel(c: Character): HTMLElement {
  const section = el('section', 'depth-zone depth-mid', '');
  section.id = 'zone-levellog';
  section.appendChild(el('p', 'depth-label', '~30 tese'));
  section.appendChild(el('h2', 'zone-title', 'Registro di Bordo (Livelli)'));
  section.appendChild(
    el('p', 'placeholder-note', 'Ogni volta che sali di livello, aggiungi una voce a "storicoLivelli" in character.ts.')
  );

  const log = el('div', 'level-log');
  [...c.storicoLivelli]
    .sort((a, b) => b.livello - a.livello)
    .forEach((entry) => {
      log.appendChild(
        el(
          'div',
          'level-entry',
          `
        <span class="level-badge">Lv. ${entry.livello}</span>
        <div class="level-entry-body">
          <p class="prose">${entry.note}</p>
          ${entry.dataConseguita ? `<p class="level-date">${entry.dataConseguita}</p>` : ''}
        </div>
      `
        )
      );
    });
  section.appendChild(log);

  return section;
}
