import type { Character } from '../data/types';
import { el } from '../utils';

export function renderPatronPanel(c: Character): HTMLElement {
  const section = el('section', 'depth-zone depth-abyss', '');
  section.id = 'zone-patron';
  section.appendChild(el('p', 'depth-label depth-label-glow', '~100+ tese · buio totale'));
  section.appendChild(el('h2', 'zone-title zone-title-glow', 'Il Patto con l\'Abisso'));

  section.appendChild(
    el(
      'p',
      'prose patron-quote',
      '"Ho trovato il potere che cercavo... oppure sono stato trovato da qualcosa che mi stava aspettando?"'
    )
  );

  const grid = el('div', 'traits-grid');

  const patronCard = el('div', 'trait-card trait-card-glow');
  patronCard.appendChild(el('h3', 'trait-title', c.patrono));
  patronCard.appendChild(
    el(
      'p',
      'prose',
      'Un\'entità capace di osservare attraverso il tempo, nascosta nelle profondità dell\'oceano. Bell non conosce il vero nome del suo Patrono.'
    )
  );
  grid.appendChild(patronCard);

  const abilityCard = el('div', 'trait-card trait-card-glow');
  abilityCard.appendChild(el('h3', 'trait-title', c.abilitaPatrono.nome));
  abilityCard.appendChild(el('p', 'prose', c.abilitaPatrono.descrizione));
  const detList = el('ul', 'plain-list');
  c.abilitaPatrono.dettagli.forEach((d) => detList.appendChild(el('li', '', d)));
  abilityCard.appendChild(detList);
  grid.appendChild(abilityCard);

  section.appendChild(grid);

  const unresolved = el('div', 'unresolved-box');
  unresolved.appendChild(el('h3', 'trait-title', 'Elementi ancora da definire'));
  const ul = el('ul', 'plain-list');
  c.elementiDaDefinire.forEach((e) => ul.appendChild(el('li', '', e)));
  unresolved.appendChild(ul);
  section.appendChild(unresolved);

  return section;
}
