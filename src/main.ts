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
import { mountEditToggle } from './components/editToggle';
import { applyOverrides, clearOverrides } from './storage';

const app = document.getElementById('app')!;

// --- Vista "Scheda" ---
const schedaView = document.createElement('div');
schedaView.id = 'view-scheda';

const schedaContent = document.createElement('div');
schedaContent.id = 'scheda-content';
schedaView.appendChild(schedaContent);

let editMode = false;

function renderScheda(): void {
  const effectiveCharacter = applyOverrides(character);
  schedaContent.innerHTML = '';
  [
    renderHeader(effectiveCharacter),
    renderStatsPanel(effectiveCharacter, editMode, renderScheda),
    renderCombatPanel(effectiveCharacter, editMode, renderScheda),
    renderInventoryPanel(effectiveCharacter),
    renderLevelLogPanel(effectiveCharacter),
    renderSkillsPanel(effectiveCharacter),
    renderSpellsPanel(effectiveCharacter),
    renderPatronPanel(effectiveCharacter),
  ].forEach((s) => schedaContent.appendChild(s));
}

renderScheda();

// --- Vista "Compendio" ---
const compendioView = document.createElement('div');
compendioView.id = 'view-compendio';
compendioView.appendChild(renderCompendiumPage(applyOverrides(character)));

app.appendChild(schedaView);
app.appendChild(compendioView);

mountFathomGauge();

mountEditToggle(
  (newEditMode) => {
    editMode = newEditMode;
    renderScheda();
  },
  () => {
    clearOverrides();
    renderScheda();
  }
);

mountNav((view:string) => {
  schedaView.style.display = view === 'scheda' ? '' : 'none';
  compendioView.style.display = view === 'compendio' ? '' : 'none';
  const gauge = document.querySelector<HTMLElement>('.fathom-gauge');
  if (gauge) gauge.style.display = view === 'scheda' ? '' : 'none';
});

