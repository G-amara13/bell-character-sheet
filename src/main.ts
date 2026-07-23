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

type FocusSnapshot = {
  selector: string;
  selectionStart: number | null;
  selectionEnd: number | null;
};

function captureFocusSnapshot(): FocusSnapshot | null {
  const active = document.activeElement;
  if (!(active instanceof HTMLInputElement)) return null;

  const abilityKey = active.dataset.abilityKey;
  if (abilityKey) {
    return {
      selector: `input.ability-input[data-ability-key="${abilityKey}"]`,
      selectionStart: active.selectionStart,
      selectionEnd: active.selectionEnd,
    };
  }

  const combatKey = active.dataset.combatKey;
  if (combatKey) {
    return {
      selector: `input.combat-input[data-combat-key="${combatKey}"]`,
      selectionStart: active.selectionStart,
      selectionEnd: active.selectionEnd,
    };
  }

  return null;
}

function restoreFocusSnapshot(snapshot: FocusSnapshot | null): void {
  if (!snapshot) return;

  const input = document.querySelector<HTMLInputElement>(snapshot.selector);
  if (!input) return;

  input.focus({ preventScroll: true });
  if (snapshot.selectionStart !== null && snapshot.selectionEnd !== null) {
    input.setSelectionRange(snapshot.selectionStart, snapshot.selectionEnd);
  }
}

function renderScheda(): void {
  const scrollY = window.scrollY;
  const focusSnapshot = captureFocusSnapshot();

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

  window.scrollTo({ top: scrollY });
  restoreFocusSnapshot(focusSnapshot);
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
