import type { Character } from '../data/types';
import { el } from '../utils';

export function renderInventoryPanel(c: Character): HTMLElement {
  const section = el('section', 'depth-zone depth-mid', '');
  section.id = 'zone-inventory';
  section.appendChild(el('p', 'depth-label', '~25 tese'));
  section.appendChild(el('h2', 'zone-title', 'Equipaggiamento'));

  const coinsRow = el(
    'div',
    'coins-row',
    `
    <span class="coin coin-oro">${c.monete.oro} MO</span>
    <span class="coin coin-argento">${c.monete.argento} MA</span>
    <span class="coin coin-rame">${c.monete.rame} MR</span>
  `
  );
  section.appendChild(coinsRow);

  if (c.inventario.length === 0) {
    section.appendChild(el('p', 'placeholder-note', 'Nessun oggetto ancora registrato. Aggiungi il tuo equipaggiamento in src/data/character.ts (campo "inventario").'));
  } else {
    const list = el('div', 'inventory-list');
    c.inventario.forEach((item) => {
      list.appendChild(
        el(
          'div',
          'inventory-row',
          `<span class="inv-qty">${item.quantita}×</span><span class="inv-name">${item.nome}</span>${item.note ? `<span class="inv-note">${item.note}</span>` : ''}`
        )
      );
    });
    section.appendChild(list);
  }

  return section;
}
