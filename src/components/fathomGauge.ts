// Il "goniometro di profondità": una riga verticale con un indicatore che
// scende mentre l'utente scorre la pagina, rinforzando il tema del tuffo
// negli abissi verso il Patrono.

const ZONES = [
  { id: 'zone-surface', label: 'Superficie' },
  { id: 'zone-stats', label: 'Bassi fondali' },
  { id: 'zone-combat', label: 'Bassi fondali' },
  { id: 'zone-inventory', label: 'Acque medie' },
  { id: 'zone-levellog', label: 'Acque medie' },
  { id: 'zone-skills', label: 'Acque medie' },
  { id: 'zone-spells', label: 'Acque profonde' },
  { id: 'zone-patron', label: 'Abisso' },
];

export function mountFathomGauge(): void {
  const gauge = document.createElement('div');
  gauge.className = 'fathom-gauge';
  gauge.innerHTML = `
    <div class="fathom-track">
      <div class="fathom-fill" id="fathom-fill"></div>
      <div class="fathom-marker" id="fathom-marker"></div>
    </div>
    <span class="fathom-current" id="fathom-current">Superficie</span>
  `;
  document.body.appendChild(gauge);

  const fill = document.getElementById('fathom-fill')!;
  const marker = document.getElementById('fathom-marker')!;
  const currentLabel = document.getElementById('fathom-current')!;

  function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

    fill.style.height = `${progress * 100}%`;
    marker.style.top = `${progress * 100}%`;

    let currentZoneLabel = ZONES[0].label;
    for (const zone of ZONES) {
      const node = document.getElementById(zone.id);
      if (node) {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.6) {
          currentZoneLabel = zone.label;
        }
      }
    }
    currentLabel.textContent = currentZoneLabel;
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}
