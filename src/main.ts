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

const app = document.getElementById('app')!;

const sections = [
  renderHeader(character),
  renderStatsPanel(character),
  renderCombatPanel(character),
  renderInventoryPanel(character),
  renderLevelLogPanel(character),
  renderSkillsPanel(character),
  renderSpellsPanel(character),
  renderPatronPanel(character),
];

sections.forEach((s) => app.appendChild(s));

mountFathomGauge();
