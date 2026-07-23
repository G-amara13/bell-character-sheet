import type { Character } from '../data/types';
import { el } from '../utils';
import portraitUrl from '../assets/bell-portrait.jpg';

export function renderHeader(c: Character): HTMLElement {
  const section = el('section', 'depth-zone depth-surface', '');
  section.id = 'zone-surface';

  const headerCard = el('div', 'header-card');
  headerCard.appendChild(
    el(
      'div',
      'header-card-text',
      `
      <p class="eyebrow">Diario di bordo</p>
      <h1 class="char-name">${c.nome} <span class="char-nickname">"${c.soprannome}"</span></h1>
      <p class="char-subtitle">${c.razza} · ${c.classe} di livello ${c.livello} · ${c.allineamento}</p>
      <div class="header-tags">
        <span class="tag">${c.background}</span>
        <span class="tag tag-mystery">${c.patrono}</span>
      </div>
    `
    )
  );
  headerCard.appendChild(
    el('div', 'header-portrait-wrap', `<img class="header-portrait" src="${portraitUrl}" alt="Ritratto di ${c.nome} '${c.soprannome}'" />`)
  );
  section.appendChild(headerCard);

  const descBlock = el('div', 'prose-card');
  descBlock.appendChild(el('h2', 'zone-title', 'Chi è Bell'));
  c.descrizione.forEach((p) => descBlock.appendChild(el('p', 'prose', p)));
  section.appendChild(descBlock);

  const traits = el('div', 'traits-grid');

  const persoCard = el('div', 'trait-card');
  persoCard.appendChild(el('h3', 'trait-title', 'Personalità'));
  persoCard.appendChild(el('p', 'prose', c.personalita));
  traits.appendChild(persoCard);

  const idealCard = el('div', 'trait-card');
  idealCard.appendChild(el('h3', 'trait-title', 'Ideali'));
  idealCard.appendChild(el('p', 'prose', c.ideali));
  traits.appendChild(idealCard);

  const legamiCard = el('div', 'trait-card');
  legamiCard.appendChild(el('h3', 'trait-title', 'Legami'));
  const legamiList = el('ul', 'plain-list');
  c.legami.forEach((l) => legamiList.appendChild(el('li', '', l)));
  legamiCard.appendChild(legamiList);
  traits.appendChild(legamiCard);

  const difettiCard = el('div', 'trait-card');
  difettiCard.appendChild(el('h3', 'trait-title', 'Difetti'));
  const difettiList = el('ul', 'plain-list');
  c.difetti.forEach((d) => difettiList.appendChild(el('li', '', d)));
  difettiCard.appendChild(difettiList);
  traits.appendChild(difettiCard);

  section.appendChild(traits);

  return section;
}

