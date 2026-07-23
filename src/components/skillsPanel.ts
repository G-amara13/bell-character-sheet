import type { Character } from '../data/types';
import { el, modifier, modifierValue, proficiencyBonus } from '../utils';

export function renderSkillsPanel(c: Character): HTMLElement {
  const section = el('section', 'depth-zone depth-mid', '');
  section.id = 'zone-skills';
  section.appendChild(el('p', 'depth-label', '~20 tese'));
  section.appendChild(el('h2', 'zone-title', 'Abilità'));

  const list = el('div', 'skills-list');
  c.skills.forEach((skill) => {
    const abilityScore = c.abilities[skill.caratteristica];
    const pb = skill.competente ? proficiencyBonus(c.livello) : 0;
    const total = abilityScore === null ? null : modifierValue(abilityScore) + pb;
    const totalStr = total === null ? '—' : total >= 0 ? `+${total}` : `${total}`;

    list.appendChild(
      el(
        'div',
        `skill-row${skill.competente ? ' skill-competente' : ''}`,
        `
        <span class="skill-dot">${skill.competente ? '●' : '○'}</span>
        <span class="skill-name">${skill.nome}</span>
        <span class="skill-ability">${skill.caratteristica.slice(0, 3).toUpperCase()}</span>
        <span class="skill-total">${totalStr}</span>
      `
      )
    );
  });
  section.appendChild(list);
  section.appendChild(
    el('p', 'placeholder-note', `I valori mostrano — finché le caratteristiche non sono impostate. Il modificatore base è ${modifier(null)} di default.`)
  );

  return section;
}
