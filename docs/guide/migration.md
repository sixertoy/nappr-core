# Guide de Migration

## Version 0.2.38

### Fonctions Deprecated

Plusieurs fonctions ont été marquées comme deprecated et utilisent maintenant lodash en interne. Ces fonctions restent disponibles pour la compatibilité ascendante mais il est recommandé d'utiliser lodash directement.

#### Changements principaux

1. **Fonctions déplacées vers lodash** :
   - `Arrays.uniq` → `lodash.uniq`
   - `Objects.merge` → `lodash.assign` ou `lodash.merge`
   - `Objects.isEmptyObject` → `lodash.isEmpty`
   - `Utils.debounce` → `lodash.debounce`
   - `Utils.isEmpty` → `lodash.isEmpty`
   - `Strings.capitalize` → `lodash.upperFirst`
   - `Strings.toLowerCase` → `lodash.toLower`
   - `Strings.toUpperCase` → `lodash.toUpper`
   - `Core.noop` → `lodash.noop`

2. **Compatibilité** : Toutes ces fonctions restent disponibles mais sont wrappées autour de lodash.

### Migration progressive

#### Avant

```typescript
import { Arrays, Utils } from '@nappr/nappr-core';

const unique = Arrays.uniq([1, 2, 2, 3]);
const debounced = Utils.debounce(() => {}, 300);
```

#### Après (Recommandé)

```typescript
import { uniq, debounce } from 'lodash';

const unique = uniq([1, 2, 2, 3]);
const debounced = debounce(() => {}, 300);
```

#### Ou (Toujours compatible)

```typescript
import { Arrays, Utils } from '@nappr/nappr-core';

// Fonctionne toujours mais affichera des warnings deprecated
const unique = Arrays.uniq([1, 2, 2, 3]);
const debounced = Utils.debounce(() => {}, 300);
```

### Installation de lodash

Si vous souhaitez migrer vers lodash directement :

```bash
yarn add lodash
yarn add -D @types/lodash
```

### Voir aussi

Consultez la [liste complète des fonctions deprecated](../deprecated.md) pour plus de détails.
