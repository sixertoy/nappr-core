# Keys

Constantes de codes de touches clavier pour faciliter la gestion des événements clavier.

## Utilisation

```typescript
import { Keys } from '@nappr/nappr-core';

// Vérifier si la touche pressée est Enter
document.addEventListener('keydown', (event) => {
  if (event.keyCode === Keys.allCodes.ENTER) {
    console.log('Enter pressed');
  }
  
  if (event.keyCode === Keys.allCodes.ESCAPE) {
    console.log('Escape pressed');
  }
});
```

## allCodes

Objet contenant tous les codes de touches clavier.

```typescript
import { Keys } from '@nappr/nappr-core';

Keys.allCodes.ENTER; // 13
Keys.allCodes.ESCAPE; // 27
Keys.allCodes.SPACE; // 32
Keys.allCodes.ARROW_UP; // 38
Keys.allCodes.ARROW_DOWN; // 40
Keys.allCodes.KEY_A; // 65
Keys.allCodes.F1; // 112
```

**Codes disponibles:**

### Touches de contrôle
- `ENTER`, `ESCAPE`, `TAB`, `BACKSPACE`, `DELETE`
- `SHIFT`, `CTRL`, `ALT`
- `ARROW_UP`, `ARROW_DOWN`, `ARROW_LEFT`, `ARROW_RIGHT`
- `HOME`, `END`, `PAGE_UP`, `PAGE_DOWN`

### Fonctions
- `F1` à `F12`

### Lettres
- `KEY_A` à `KEY_Z` (65-90)

### Chiffres
- `KEY_0` à `KEY_9` (48-57)
- `NUMPAD_0` à `NUMPAD_9` (96-105)

### Symboles
- `SPACE`, `COMMA`, `PERIOD`, `SEMICOLON`
- `DASH`, `EQUALS`, `SINGLE_QUOTE`, `BACK_SLASH`, `FORWARD_SLASH`
- `OPEN_BRACKET`, `CLOSE_BRACKET`, `GRAVE_ACCENT`

### Opérations
- `ADD`, `SUBTRACT`, `MULTIPLY`, `DIVIDE`, `DECIMAL`

**Exemple:**
```typescript
import { Keys } from '@nappr/nappr-core';

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case Keys.allCodes.ENTER:
      handleSubmit();
      break;
    case Keys.allCodes.ESCAPE:
      handleCancel();
      break;
    case Keys.allCodes.ARROW_UP:
      navigateUp();
      break;
    case Keys.allCodes.ARROW_DOWN:
      navigateDown();
      break;
  }
});
```

## Collections de codes

Pour faciliter les vérifications, des collections sont également disponibles :

- `alphas`: Codes des lettres (A-Z)
- `controls`: Codes des touches de contrôle
- `numerics`: Codes des chiffres (0-9 et numpad)
- `operations`: Codes des opérations mathématiques
- `symbols`: Codes des symboles

```typescript
import { Keys } from '@nappr/nappr-core';

// Vérifier si c'est une lettre
if (Keys.alphas.includes(event.keyCode)) {
  console.log('Lettre pressée');
}

// Vérifier si c'est un chiffre
if (Keys.numerics.includes(event.keyCode)) {
  console.log('Chiffre pressé');
}
```
