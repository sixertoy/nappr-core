# Guide de Démarrage

## Installation

```bash
yarn add @nappr/nappr-core
```

## Premiers pas

### Import par défaut

```typescript
import napprCore from '@nappr/nappr-core';

// Arrays
const unique = napprCore.Arrays.uniq([1, 2, 2, 3]);
// [1, 2, 3]

// Strings
const slug = napprCore.Strings.slugify('Hello World');
// "hello-world"

// Utils
const isEmpty = napprCore.Utils.isEmpty([]);
// true
```

### Import par module

```typescript
import { Arrays, Strings, Utils } from '@nappr/nappr-core';

const unique = Arrays.uniq([1, 1, 2, 3]);
const slug = Strings.slugify('Bonjour le monde');
const isEmpty = Utils.isEmpty({});
```

### Import direct de fonction

```typescript
import { Arrays } from '@nappr/nappr-core';

const { uniq, fill, move } = Arrays;

const unique = uniq([1, 2, 2, 3]);
const filled = fill(5);
const moved = move([1, 2, 3, 4], 0, 2);
```

## Exemples courants

### Manipulation de tableaux

```typescript
import { Arrays } from '@nappr/nappr-core';

// Créer un tableau rempli
const numbers = Arrays.fill(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Déplacer un élément
const arr = [1, 2, 3, 4];
const moved = Arrays.move(arr, 0, 2); // [2, 3, 1, 4]

// Tableau unique
const unique = Arrays.uniq([1, 2, 2, 3, 3, 3]); // [1, 2, 3]
```

### Manipulation de strings

```typescript
import { Strings } from '@nappr/nappr-core';

// Slugify
const slug = Strings.slugify('Hello World!'); // "hello-world"

// Capitalize
const cap = Strings.capitalize('hello'); // "Hello"

// Supprimer les espaces
const clean = Strings.removeWhitespaces('  hello   world  '); // "helloworld"
```

### Utilitaires

```typescript
import { Utils } from '@nappr/nappr-core';

// Debounce
const debounced = Utils.debounce(() => {
  console.log('Debounced!');
}, 300);

// Sleep
await Utils.sleep(1000); // Attend 1 seconde

// Vérifier si vide
Utils.isEmpty([]); // true
Utils.isEmpty({}); // true
Utils.isEmpty(''); // true
```

## TypeScript

La bibliothèque est entièrement typée :

```typescript
import { Arrays } from '@nappr/nappr-core';

// Type inference automatique
const numbers: number[] = Arrays.fill(5);
const unique: number[] = Arrays.uniq([1, 2, 2, 3]);
```

## Prochaines étapes

- Consultez la [documentation de l'API](api/arrays.md) pour voir toutes les fonctions disponibles
- Découvrez les [fonctions deprecated](deprecated.md) et leurs alternatives
