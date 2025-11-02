# Fonctions Deprecated

Certaines fonctions de `@nappr/nappr-core` ont été marquées comme deprecated et utilisent maintenant lodash en interne. Ces fonctions restent disponibles pour la compatibilité ascendante, mais il est fortement recommandé d'utiliser lodash directement dans le nouveau code.

## Liste des fonctions deprecated

### Arrays

#### `Arrays.uniq`

**Remplacement:** `lodash.uniq`

```typescript
// Avant
import { Arrays } from '@nappr/nappr-core';
const unique = Arrays.uniq([1, 2, 2, 3]);

// Après (recommandé)
import { uniq } from 'lodash';
const unique = uniq([1, 2, 2, 3]);
```

### Objects

#### `Objects.isEmptyObject`

**Remplacement:** `lodash.isEmpty`

```typescript
// Avant
import { Objects } from '@nappr/nappr-core';
const isEmpty = Objects.isEmptyObject({});

// Après (recommandé)
import { isEmpty } from 'lodash';
const isEmpty = isEmpty({});
```

#### `Objects.merge`

**Remplacement:** `lodash.assign` (merge peu profond) ou `lodash.merge` (merge profond)

```typescript
// Avant (merge peu profond)
import { Objects } from '@nappr/nappr-core';
const merged = Objects.merge({ a: 1 }, { b: 2 });

// Après - merge peu profond
import { assign } from 'lodash';
const merged = assign({ a: 1 }, { b: 2 });

// Après - merge profond
import { merge } from 'lodash';
const merged = merge({ a: 1 }, { b: 2 });
```

### Utils

#### `Utils.debounce`

**Remplacement:** `lodash.debounce`

```typescript
// Avant
import { Utils } from '@nappr/nappr-core';
const debounced = Utils.debounce(() => {}, 300);

// Après (recommandé)
import { debounce } from 'lodash';
const debounced = debounce(() => {}, 300);

// Avec options lodash
const debounced = debounce(() => {}, 300, {
  leading: true,
  trailing: false,
  maxWait: 1000
});
```

#### `Utils.isEmpty`

**Remplacement:** `lodash.isEmpty`

```typescript
// Avant
import { Utils } from '@nappr/nappr-core';
const empty = Utils.isEmpty([]);

// Après (recommandé)
import { isEmpty } from 'lodash';
const empty = isEmpty([]);
```

### Strings

#### `Strings.capitalize`

**Remplacement:** `lodash.upperFirst`

```typescript
// Avant
import { Strings } from '@nappr/nappr-core';
const cap = Strings.capitalize('hello');

// Après (recommandé)
import { upperFirst } from 'lodash';
const cap = upperFirst('hello');
```

#### `Strings.toLowerCase`

**Remplacement:** `lodash.toLower`

```typescript
// Avant
import { Strings } from '@nappr/nappr-core';
const lower = Strings.toLowerCase('HELLO');

// Après (recommandé)
import { toLower } from 'lodash';
const lower = toLower('HELLO');
```

#### `Strings.toUpperCase`

**Remplacement:** `lodash.toUpper`

```typescript
// Avant
import { Strings } from '@nappr/nappr-core';
const upper = Strings.toUpperCase('hello');

// Après (recommandé)
import { toUpper } from 'lodash';
const upper = toUpper('hello');
```

### Core

#### `Core.noop`

**Remplacement:** `lodash.noop`

**⚠️ Attention:** Il y a une différence de comportement importante !

```typescript
// Avant - retourne l'argument
import { Core } from '@nappr/nappr-core';
const result = Core.noop(42); // 42

// Après - retourne undefined
import { noop } from 'lodash';
const result = noop(); // undefined (ne prend pas d'arguments)
```

**Note:** Si vous dépendez du comportement de `Core.noop` qui retourne l'argument, vous devrez créer votre propre wrapper :

```typescript
const noop = <T>(v: T): T => v;
```

## Pourquoi ces changements ?

1. **Maintenance:** Lodash est une bibliothèque largement maintenue et testée
2. **Performance:** Lodash est optimisé pour les performances
3. **Fonctionnalités:** Lodash offre souvent plus d'options et de flexibilité
4. **Standardisation:** Utiliser lodash réduit la quantité de code à maintenir

## Installation de lodash

Si vous migrez vers lodash :

```bash
yarn add lodash
yarn add -D @types/lodash
```

## Import modulaire

Pour réduire la taille du bundle, vous pouvez importer uniquement les fonctions nécessaires :

```typescript
// Au lieu de
import _ from 'lodash';

// Utilisez
import uniq from 'lodash/uniq';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
```

## Timeline

Ces fonctions sont marquées comme deprecated depuis la version 0.2.38. Elles continueront d'être disponibles pour la compatibilité ascendante mais pourront être supprimées dans une future version majeure.
