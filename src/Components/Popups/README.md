# Popup System

Dieses Verzeichnis enthält das modulare Popup-System für die Edelweiss Website.

## Struktur

```
Popups/
├── BasePopup.svelte          # Generische Basis-Popup-Komponente
├── PopupManager.svelte       # Zentrale Verwaltung aller Popups
├── PfoetchenpflegePopup.svelte  # Spezifisches Popup für Pfötchenpflege-Produkt
└── README.md                 # Diese Datei
```

## Verwendung

### Neues Popup hinzufügen

1. **Erstelle eine neue Popup-Komponente** (z.B. `NeuesProduktPopup.svelte`):

```svelte
<script>
    import { onMount } from 'svelte';
    import BasePopup from './BasePopup.svelte';
    
    const STORAGE_KEY = 'edelweiss_neues_produkt_popup_shown';
    let showPopup = false;
    
    onMount(() => {
        const popupShown = localStorage.getItem(STORAGE_KEY);
        if (!popupShown) {
            setTimeout(() => showPopup = true, 1000);
        }
    });
    
    function closePopup() {
        showPopup = false;
        localStorage.setItem(STORAGE_KEY, 'true');
    }
</script>

<BasePopup show={showPopup} onClose={closePopup}>
    <!-- Dein individueller Popup-Inhalt hier -->
</BasePopup>
```

2. **Füge es zum PopupManager hinzu**:

```svelte
// In PopupManager.svelte
import NeuesProduktPopup from './NeuesProduktPopup.svelte';

<NeuesProduktPopup />
```

## Features

- ✅ **LocalStorage**: Popup wird nur einmal pro Browser angezeigt
- ✅ **Escape-Taste**: Schließt das Popup
- ✅ **Backdrop-Click**: Klick außerhalb schließt das Popup
- ✅ **Accessibility**: ARIA-Labels und Keyboard-Navigation
- ✅ **Responsive**: Mobile-optimiert
- ✅ **Animationen**: Fade-in und Slide-up Effekte

## BasePopup Props

- `show` (boolean): Zeigt das Popup an oder verbirgt es
- `onClose` (function): Callback-Funktion beim Schließen

## LocalStorage Keys

Jedes Popup sollte einen eindeutigen Storage-Key verwenden:
- `edelweiss_pfotenbalsam_popup_shown` - Pfötchenpflege-Popup
- Weitere Keys hier dokumentieren...

