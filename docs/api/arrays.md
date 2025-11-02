# Arrays

Fonctions utilitaires pour la manipulation de tableaux.

## fill

Crée un tableau rempli avec `n` valeurs de 0 à n-1.

```typescript
import { Arrays } from '@nappr/nappr-core';

Arrays.fill(5); // [0, 1, 2, 3, 4]
Arrays.fill(0); // []
Arrays.fill(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

**Signature:**
```typescript
fill(n: number): number[]
```

**Paramètres:**
- `n` (number): Le nombre d'éléments à créer

**Retourne:**
- Un tableau de nombres de 0 à n-1

## move

Déplace un élément d'un tableau d'un index à un autre.

```typescript
import { Arrays } from '@nappr/nappr-core';

const arr = [1, 2, 3, 4];
Arrays.move(arr, 0, 2); // [2, 3, 1, 4] - déplace l'élément à l'index 0 vers l'index 2
Arrays.move(arr, 2, 0); // [3, 1, 2, 4] - déplace l'élément à l'index 2 vers l'index 0
```

**Signature:**
```typescript
move<T>(arr: T[], from: number, to: number): T[]
```

**Paramètres:**
- `arr` (T[]): Le tableau source
- `from` (number): Index de l'élément à déplacer
- `to` (number): Index de destination

**Retourne:**
- Un nouveau tableau avec l'élément déplacé

**Exemple:**
```typescript
const items = ['a', 'b', 'c', 'd'];
const reordered = Arrays.move(items, 1, 3); // ['a', 'c', 'd', 'b']
```

## nodesToArray

Convertit une NodeList ou un tableau de Nodes en tableau JavaScript standard.

```typescript
import { Arrays } from '@nappr/nappr-core';

const nodeList = document.querySelectorAll('.item');
const array = Arrays.nodesToArray(nodeList); // Array<Node>

// Fonctionne aussi avec des tableaux
const nodes = [node1, node2];
const result = Arrays.nodesToArray(nodes); // Array<Node>
```

**Signature:**
```typescript
nodesToArray<T extends Node>(elts: NodeListOf<T> | T[]): T[]
```

**Paramètres:**
- `elts` (NodeListOf<T> | T[]): Une NodeList ou un tableau de Nodes

**Retourne:**
- Un tableau de Nodes

**Exemple:**
```typescript
const buttons = document.querySelectorAll('button');
const buttonsArray = Arrays.nodesToArray(buttons);
buttonsArray.forEach(button => {
  // Traiter chaque bouton
});
```

## uniq

**@deprecated** - Utilisez `lodash.uniq` directement.

Crée un nouveau tableau sans doublons en conservant uniquement la première occurrence de chaque élément.

```typescript
import { Arrays } from '@nappr/nappr-core';

Arrays.uniq([1, 2, 2, 3, 3, 3]); // [1, 2, 3]
Arrays.uniq(['a', 'b', 'a', 'c']); // ['a', 'b', 'c']
```

**Signature:**
```typescript
uniq<T>(entries: T[]): T[]
```

**Paramètres:**
- `entries` (T[]): Le tableau source

**Retourne:**
- Un nouveau tableau sans doublons

**Migration:**
```typescript
// Avant
import { Arrays } from '@nappr/nappr-core';
const unique = Arrays.uniq([1, 2, 2, 3]);

// Après (recommandé)
import { uniq } from 'lodash';
const unique = uniq([1, 2, 2, 3]);
```
