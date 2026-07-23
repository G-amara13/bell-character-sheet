import type { Character, Spell } from '../data/types';
import { el } from '../utils';

function spellCard(spell: Spell): HTMLElement {
  const livelloLabel = spell.livello === 0 ? 'Trucchetto' : `Livello ${spell.livello}`;
  return el(
    'div',
    'spell-card',
    `
    <div class="spell-card-head">
      <span class="spell-name">${spell.nome}</span>
      <span class="spell-level">${livelloLabel}</span>
    </div>
    <p class="prose spell-desc">${spell.descrizione}</p>
  `
  );
}

export function renderSpellsPanel(c: Character): HTMLElement {
  const section = el('section', 'depth-zone depth-deep', '');
  section.id = 'zone-spells';
  section.appendChild(el('p', 'depth-label depth-label-glow', '~40 tese'));
  section.appendChild(el('h2', 'zone-title zone-title-glow', 'Incantesimi'));

  if (c.spellSlots.length > 0) {
    const slotsRow = el('div', 'slots-row');
    c.spellSlots.forEach((slot) => {
      const dots = Array.from({ length: slot.totali })
        .map((_, i) => `<span class="slot-dot${i < slot.usati ? ' slot-used' : ''}"></span>`)
        .join('');
      slotsRow.appendChild(
        el('div', 'slot-group', `<span class="slot-label">Slot lv.${slot.livello}</span><div class="slot-dots">${dots}</div>`)
      );
    });
    section.appendChild(slotsRow);
  }

  section.appendChild(el('h3', 'trait-title', 'Trucchetti'));
  const cantripsGrid = el('div', 'spells-grid');
  c.trucchetti.forEach((s) => cantripsGrid.appendChild(spellCard(s)));
  section.appendChild(cantripsGrid);

  section.appendChild(el('h3', 'trait-title', 'Incantesimi conosciuti'));
  const knownGrid = el('div', 'spells-grid');
  c.incantesimiConosciuti.forEach((s) => knownGrid.appendChild(spellCard(s)));
  section.appendChild(knownGrid);

  return section;
}
