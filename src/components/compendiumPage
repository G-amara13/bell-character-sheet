import { el } from '../utils';
import {
  classFeatures,
  spellSlotTable,
  eldritchInvocations,
  pactBoons,
  spellsByLevel,
} from '../data/warlockCompendium';
import type { Character } from '../data/types';

export function renderCompendiumPage(c: Character): HTMLElement {
  const wrap = el('div', 'compendium-wrap');

  wrap.appendChild(
    el(
      'div',
      'compendium-intro',
      `
      <p class="eyebrow">Manuale del Patto</p>
      <h1 class="zone-title compendium-title">Compendio del Warlock</h1>
      <p class="prose">Tutto ciò che un Warlock può ottenere man mano che sale di livello: incantesimi, invocazioni occulte e tratti di classe (D&D 5e). Bell è attualmente al <strong>livello ${c.livello}</strong> — le sezioni sbloccate sono evidenziate.</p>
    `
    )
  );

  // --- Tabella progressione slot ---
  const slotsSection = el('section', 'compendium-section');
  slotsSection.appendChild(el('h2', 'trait-title compendium-h2', 'Slot Incantesimo per Livello (Pact Magic)'));
  slotsSection.appendChild(
    el('p', 'placeholder-note', 'A differenza di altri incantatori, il Warlock ha pochi slot ma sempre del livello più alto disponibile, e li recupera con un riposo breve.')
  );

  const table = el('div', 'slot-table');
  table.appendChild(
    el(
      'div',
      'slot-table-row slot-table-head',
      `<span>Liv.</span><span>Slot</span><span>Liv. Slot</span><span>Trucchetti</span><span>Incantesimi noti</span>`
    )
  );
  spellSlotTable.forEach((row) => {
    const unlocked = row.livelloWarlock <= c.livello;
    const rowEl = el(
      'div',
      `slot-table-row${unlocked ? ' row-unlocked' : ''}`,
      `<span>${row.livelloWarlock}</span><span>${row.slotTotali}</span><span>${row.livelloSlot}</span><span>${row.cantripsConosciuti}</span><span>${row.incantesimiConosciuti}</span>`
    );
    table.appendChild(rowEl);
  });
  slotsSection.appendChild(table);
  wrap.appendChild(slotsSection);

  // --- Tratti di classe per livello ---
  const featuresSection = el('section', 'compendium-section');
  featuresSection.appendChild(el('h2', 'trait-title compendium-h2', 'Tratti di Classe per Livello'));
  const featuresList = el('div', 'features-list');
  classFeatures.forEach((f) => {
    if (f.tratti.length === 0) return;
    const unlocked = f.livello <= c.livello;
    const row = el('div', `feature-row${unlocked ? ' row-unlocked' : ''}`);
    row.appendChild(el('span', 'feature-level', `Lv. ${f.livello}`));
    const list = el('ul', 'plain-list feature-ul');
    f.tratti.forEach((t) => list.appendChild(el('li', '', t)));
    row.appendChild(list);
    featuresList.appendChild(row);
  });
  featuresSection.appendChild(featuresList);
  wrap.appendChild(featuresSection);

  // --- Patto (Pact Boon) ---
  const boonSection = el('section', 'compendium-section');
  boonSection.appendChild(el('h2', 'trait-title compendium-h2', 'Patto — da scegliere al 3° livello'));
  const boonGrid = el('div', 'traits-grid');
  pactBoons.forEach((b) => {
    const card = el('div', 'trait-card');
    card.appendChild(el('h3', 'trait-title', b.nome));
    card.appendChild(el('p', 'prose', b.effetto));
    boonGrid.appendChild(card);
  });
  boonSection.appendChild(boonGrid);
  wrap.appendChild(boonSection);

  // --- Invocazioni Occulte ---
  const invocSection = el('section', 'compendium-section');
  invocSection.appendChild(el('h2', 'trait-title compendium-h2', 'Invocazioni Occulte (selezione)'));
  invocSection.appendChild(
    el('p', 'placeholder-note', 'Elenco parziale delle invocazioni più comuni — il manuale ne contiene molte altre. Si sbloccano dal 2° livello in poi.')
  );
  const invocList = el('div', 'invocation-list');
  eldritchInvocations.forEach((inv) => {
    invocList.appendChild(
      el(
        'div',
        'invocation-row',
        `<span class="invocation-name">${inv.nome}</span><span class="invocation-req">${inv.requisito}</span><span class="invocation-effect">${inv.effetto}</span>`
      )
    );
  });
  invocSection.appendChild(invocList);
  wrap.appendChild(invocSection);

  // --- Incantesimi per livello ---
  spellsByLevel.forEach((group) => {
    const section = el('section', 'compendium-section');
    section.appendChild(el('h2', 'trait-title compendium-h2', group.etichetta));
    const grid = el('div', 'spells-grid compendium-spells-grid');
    group.incantesimi.forEach((spell) => {
      grid.appendChild(
        el(
          'div',
          'spell-card',
          `
          <div class="spell-card-head">
            <span class="spell-name">${spell.nome}</span>
            <span class="spell-level">${spell.scuola}</span>
          </div>
          <p class="prose spell-desc">${spell.effetto}</p>
        `
        )
      );
    });
    section.appendChild(grid);
    wrap.appendChild(section);
  });

  return wrap;
}
