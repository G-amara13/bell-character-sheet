import type { Character } from '../data/types';
import { el, proficiencyBonus } from '../utils';
import { updateCombatOverride } from '../storage';

export function renderCombatPanel(c: Character, editMode: boolean, onEdit: () => void): HTMLElement {
  const section = el('section', 'depth-zone depth-shallow', '');
  section.id = 'zone-combat';
  section.appendChild(el('p', 'depth-label', '~10 tese'));
  section.appendChild(el('h2', 'zone-title', 'Combattimento'));

  const grid = el('div', 'combat-grid');

  const editableItems: [string, keyof Character['combattimento'], number | null][] = [
    ['Classe Armatura', 'classeArmatura', c.combattimento.classeArmatura],
    ['Punti Ferita', 'puntiFerita', c.combattimento.puntiFerita],
    ['PF Temporanei', 'puntiFeritaTemp', c.combattimento.puntiFeritaTemp],
    ['Iniziativa', 'iniziativa', c.combattimento.iniziativa],
  ];

  editableItems.forEach(([label, key, value]) => {
    const card = el('div', 'combat-card');
    card.appendChild(el('p', 'combat-label', label));
    if (editMode) {
      const input = document.createElement('input');
      input.type = 'number';
      input.className = 'combat-input';
      input.value = value !== null ? String(value) : '';
      input.placeholder = '—';
      input.addEventListener('input', () => {
        const val = input.value === '' ? null : Number(input.value);
        updateCombatOverride(key as any, val);
        onEdit();
      });
      card.appendChild(input);
    } else {
      card.appendChild(el('p', 'combat-value', value?.toString() ?? '—'));
    }
    grid.appendChild(card);
  });

  const readOnlyItems: [string, string][] = [
    ['Velocità', c.combattimento.velocita],
    ['Dado Vita', c.combattimento.dadoVita],
    ['Bonus Competenza', `+${proficiencyBonus(c.livello)}`],
  ];
  readOnlyItems.forEach(([label, value]) => {
    grid.appendChild(
      el('div', 'combat-card', `<p class="combat-label">${label}</p><p class="combat-value">${value}</p>`)
    );
  });

  section.appendChild(grid);

  const compWrap = el('div', 'competenze-wrap');
  const mkList = (title: string, items: string[]) => {
    const box = el('div', 'competenza-box');
    box.appendChild(el('h3', 'trait-title', title));
    const ul = el('ul', 'plain-list');
    items.forEach((i) => ul.appendChild(el('li', '', i)));
    box.appendChild(ul);
    return box;
  };
  compWrap.appendChild(mkList('Tiri Salvezza', c.competenzeTiriSalvezza));
  compWrap.appendChild(mkList('Armature', c.competenzeArmature));
  compWrap.appendChild(mkList('Armi', c.competenzeArmi));
  section.appendChild(compWrap);

  return section;
}
