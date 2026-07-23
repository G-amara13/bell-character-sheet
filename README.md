# Scheda di Bellamy "Bell" — Warlock Tritone

Character sheet interattiva per D&D 5e, costruita con TypeScript + Vite, ospitata gratis su GitHub Pages.

## Come aggiornare i dati del personaggio

Tutto il personaggio vive in **`src/data/character.ts`**. Per aggiornare qualsiasi cosa:

- **Statistiche** (dopo il tiro dei dadi): riempi i valori in `abilities` (es. `forza: 16`)
- **CA, PF, iniziativa**: riempi `combattimento`
- **Nuovo incantesimo**: aggiungi un oggetto a `trucchetti` o `incantesimiConosciuti`
- **Nuova skill competente**: cambia `competente: true` nella riga corrispondente in `skills`
- **Sali di livello**: aumenta `livello` e aggiungi una riga a `storicoLivelli`
- **Nuovo oggetto in inventario**: aggiungi una riga a `inventario`

Dopo aver modificato il file, fai commit e push: il sito si aggiorna da solo (vedi sotto).

## Sviluppo locale

```bash
npm install
npm run dev
```

## Build di produzione

```bash
npm run build
npm run preview
```
