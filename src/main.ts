import './style.css';
import { character } from './data/character';
import { renderHeader } from './components/header';
import { renderStatsPanel } from './components/statsPanel';
import { renderCombatPanel } from './components/combatPanel';
import { renderSkillsPanel } from './components/skillsPanel';
import { renderSpellsPanel } from './components/spellsPanel';
import { renderPatronPanel } from './components/patronPanel';
import { renderInventoryPanel } from './components/inventoryPanel';
import { renderLevelLogPanel } from './components/levelLogPanel';
import { mountFathomGauge } from './components/fathomGauge';
import { mountNav } from './components/nav';
import { renderCompendiumPage } from './components/compendiumPage';

const app = document.getElementById('app')!;

// --- Vista "Scheda" ---
const schedaView = document.createElement('div');
schedaView.id = 'view-scheda';
[
  renderHeader(character),
  renderStatsPanel(character),
  renderCombatPanel(character),
  renderInventoryPanel(character),
  renderLevelLogPanel(character),
  renderSkillsPanel(character),
  renderSpellsPanel(character),
  renderPatronPanel(character),
].forEach((s) => schedaView.appendChild(s));

// --- Vista "Compendio" ---
const compendioView = document.createElement('div');
compendioView.id = 'view-compendio';
compendioView.appendChild(renderCompendiumPage(character));

app.appendChild(schedaView);
app.appendChild(compendioView);

mountFathomGauge();

mountNav((view: string) => {
  schedaView.style.display = view === 'scheda' ? '' : 'none';
  compendioView.style.display = view === 'compendio' ? '' : 'none';
  const gauge = document.querySelector<HTMLElement>('.fathom-gauge');
  if (gauge) gauge.style.display = view === 'scheda' ? '' : 'none';
});
