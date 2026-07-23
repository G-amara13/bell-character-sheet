export type ViewName = 'scheda' | 'compendio';

export function mountNav(onChange: (view: ViewName) => void): void {
  const nav = document.createElement('nav');
  nav.className = 'main-nav';
  nav.innerHTML = `
    <a href="#scheda" class="nav-link" data-view="scheda">Scheda</a>
    <a href="#compendio" class="nav-link" data-view="compendio">Compendio Warlock</a>
  `;
  document.body.appendChild(nav);

  const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('.nav-link'));

  function applyActive(view: ViewName) {
    links.forEach((link) => {
      link.classList.toggle('nav-link-active', link.dataset.view === view);
    });
  }

  function resolveView(): ViewName {
    const hash = window.location.hash.replace('#', '');
    return hash === 'compendio' ? 'compendio' : 'scheda';
  }

  window.addEventListener('hashchange', () => {
    const view = resolveView();
    applyActive(view);
    onChange(view);
    window.scrollTo({ top: 0 });
  });

  const initial = resolveView();
  applyActive(initial);
  onChange(initial);
}
