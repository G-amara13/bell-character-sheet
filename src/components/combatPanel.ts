import type { Character } from '../data/types';
import { el, proficiencyBonus } from '../utils';

export function renderCombatPanel(c: Character): HTMLElement {
  const section = el('section', 'depth-zone depth-shallow', '');
  section.id = 'zone-combat';
  section.appendChild(el('p', 'depth-label', '~10 tese'));
  section.appendChild(el('h2', 'zone-title', 'Combattimento'));

  const grid = el('div', 'combat-grid');
  const items: [string, string][] = [
    ['Classe Armatura', c.combattimento.classeArmatura?.toString() ?? '—'],
    ['Punti Ferita', c.combattimento.puntiFerita?.toString() ?? '—'],
    ['PF Temporanei', c.combattimento.puntiFeritaTemp?.toString() ?? '—'],
    ['Iniziativa', c.combattimento.iniziativa?.toString() ?? '—'],
    ['Velocità', c.combattimento.velocita],
    ['Dado Vita', c.combattimento.dadoVita],
    ['Bonus Competenza', `+${proficiencyBonus(c.livello)}`],
  ];
  items.forEach(([label, value]) => {
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
