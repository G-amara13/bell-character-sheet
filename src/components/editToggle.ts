export function mountEditToggle(onToggle: (editMode: boolean) => void, onReset: () => void): void {
  let editMode = false;

  const bar = document.createElement('div');
  bar.className = 'edit-bar';
  bar.innerHTML = `
    <button type="button" class="edit-btn" id="edit-toggle-btn">✏️ Modifica statistiche</button>
    <button type="button" class="edit-btn edit-btn-reset" id="edit-reset-btn" style="display:none;">↺ Ripristina valori di base</button>
    <span class="edit-hint" id="edit-hint" style="display:none;">Le modifiche si salvano da sole, solo su questo dispositivo/browser.</span>
  `;

  const schedaView = document.getElementById('view-scheda')!;
  schedaView.prepend(bar);

  const toggleBtn = document.getElementById('edit-toggle-btn')!;
  const resetBtn = document.getElementById('edit-reset-btn')!;
  const hint = document.getElementById('edit-hint')!;

  toggleBtn.addEventListener('click', () => {
    editMode = !editMode;
    toggleBtn.textContent = editMode ? '💾 Fine modifica' : '✏️ Modifica statistiche';
    resetBtn.style.display = editMode ? '' : 'none';
    hint.style.display = editMode ? '' : 'none';
    onToggle(editMode);
  });

  resetBtn.addEventListener('click', () => {
    const ok = confirm('Ripristinare le statistiche ai valori di base (rimuovendo le modifiche salvate su questo dispositivo)?');
    if (ok) onReset();
  });
}
