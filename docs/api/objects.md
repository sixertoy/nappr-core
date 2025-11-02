# Objects

Fonctions utilitaires pour la manipulation d'objets.

## getProtoName

Récupère le nom du constructeur (prototype) d'une instance d'objet.

```typescript
import { Objects } from '@nappr/nappr-core';

class MyClass {}
const instance = new MyClass();

Objects.getProtoName(instance); // "MyClass"
Objects.getProtoName({}); // ""
Objects.getProtoName(null); // ""
```

**Signature:**
```typescript
getProtoName(instance: unknown): string
```

**Paramètres:**
- `instance` (unknown): L'instance d'objet à examiner

**Retourne:**
- Le nom du constructeur ou une chaîne vide si introuvable

**Exemple:**
```typescript
class User {}
const user = new User();
const className = Objects.getProtoName(user); // "User"
```

## mirrorKeys

Crée un objet en miroir à partir d'un tableau ou d'un objet, où chaque clé correspond à sa propre valeur. Peut optionnellement appliquer des parsers de transformation.

```typescript
import { Objects } from '@nappr/nappr-core';

// Avec un tableau
Objects.mirrorKeys(['a', 'b', 'c']); 
// { a: 'a', b: 'b', c: 'c' }

// Avec un objet
Objects.mirrorKeys({ key1: 'value1', key2: 'value2' });
// { key1: 'key1', key2: 'key2' }

// Avec des parsers
const toUpper = (str: string) => str.toUpperCase();
Objects.mirrorKeys(['hello', 'world'], [toUpper]);
// { hello: 'HELLO', world: 'WORLD' }
```

**Signature:**
```typescript
mirrorKeys(keys: unknown, parsers: Parser[] = []): unknown
```

**Paramètres:**
- `keys` (unknown): Un tableau de strings ou un objet
- `parsers` (Parser[]): Un tableau optionnel de fonctions de transformation

**Retourne:**
- Un objet où chaque clé correspond à sa valeur (potentiellement transformée)

**Exemple avec parsers:**
```typescript
const parsers = [
  (str: string) => str.toLowerCase(),
  (str: string) => str.replace(' ', '_')
];

Objects.mirrorKeys(['Hello World', 'Foo Bar'], parsers);
// { 'Hello World': 'hello_world', 'Foo Bar': 'foo_bar' }
```

## isEmptyObject

**@deprecated** - Utilisez `lodash.isEmpty` directement.

Vérifie si un objet est vide (ne contient aucune propriété).

```typescript
import { Objects } from '@nappr/nappr-core';

Objects.isEmptyObject({}); // true
Objects.isEmptyObject({ a: 1 }); // false
Objects.isEmptyObject(null); // false
```

**Signature:**
```typescript
isEmptyObject(obj: unknown): boolean
```

**Migration:**
```typescript
// Avant
import { Objects } from '@nappr/nappr-core';
const isEmpty = Objects.isEmptyObject({});

// Après (recommandé)
import { isEmpty } from 'lodash';
const isEmpty = isEmpty({});
```

## merge

**@deprecated** - Utilisez `lodash.assign` ou `lodash.merge` directement.

Fusionne deux objets. Note: Cette fonction fait un merge peu profond (shallow merge). Pour un merge profond, utilisez `lodash.merge`.

```typescript
import { Objects } from '@nappr/nappr-core';

Objects.merge({ a: 1, b: 2 }, { b: 3, c: 4 });
// { a: 1, b: 3, c: 4 }
```

**Signature:**
```typescript
merge<T extends Record<string, unknown>>(obj1: T, obj2: Partial<T>): T
```

**Paramètres:**
- `obj1` (T): L'objet de base
- `obj2` (Partial<T>): L'objet à fusionner

**Retourne:**
- Un nouvel objet résultant de la fusion

**Migration:**
```typescript
// Avant (merge peu profond)
import { Objects } from '@nappr/nappr-core';
const merged = Objects.merge({ a: 1 }, { b: 2 });

// Après (merge peu profond)
import { assign } from 'lodash';
const merged = assign({ a: 1 }, { b: 2 });

// Ou (merge profond)
import { merge } from 'lodash';
const merged = merge({ a: 1 }, { b: 2 });
```
