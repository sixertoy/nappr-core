# Functional Programming

Fonctions de programmation fonctionnelle pour composer et chaîner des transformations.

## compose

Compose des fonctions de droite à gauche. La première fonction prend la valeur initiale, et chaque fonction suivante reçoit le résultat de la fonction précédente.

```typescript
import { FP } from '@nappr/nappr-core';

const add1 = (x: number) => x + 1;
const multiply2 = (x: number) => x * 2;
const subtract3 = (x: number) => x - 3;

// compose(f, g, h)(x) équivaut à f(g(h(x)))
const composed = FP.compose(subtract3, multiply2, add1);
composed(3); // ((3 + 1) * 2) - 3 = 5
```

**Signature:**
```typescript
compose<T = unknown>(...fns: Func[]): Func<T, T>
```

**Paramètres:**
- `...fns` (Func[]): Les fonctions à composer

**Retourne:**
- Une fonction composée qui exécute les fonctions de droite à gauche

**Exemple:**
```typescript
const add1 = (x: number) => x + 1;
const multiply2 = (x: number) => x * 2;
const composed = FP.compose(multiply2, add1);

composed(3); // (3 + 1) * 2 = 8
```

**Note:** Sans fonctions, `compose` retourne une fonction identité.

## pipe

Compose des fonctions de gauche à droite. Contrairement à `compose`, `pipe` exécute les fonctions dans l'ordre fourni.

```typescript
import { FP } from '@nappr/nappr-core';

const add1 = (x: number) => x + 1;
const multiply2 = (x: number) => x * 2;
const subtract3 = (x: number) => x - 3;

// pipe(f, g, h)(x) équivaut à h(g(f(x)))
const piped = FP.pipe(add1, multiply2, subtract3);
piped(3); // ((3 + 1) * 2) - 3 = 5
```

**Signature:**
```typescript
pipe<T = unknown>(...fns: Func[]): Func<T, T>
```

**Paramètres:**
- `...fns` (Func[]): Les fonctions à chaîner

**Retourne:**
- Une fonction qui exécute les fonctions de gauche à droite

**Exemple:**
```typescript
const double = (x: number) => x * 2;
const add10 = (x: number) => x + 10;
const piped = FP.pipe(double, add10);

piped(5); // (5 * 2) + 10 = 20
```

**Différence avec compose:**

```typescript
const f = (x: number) => x + 1;
const g = (x: number) => x * 2;

// compose: g(f(x)) - exécute f puis g
FP.compose(g, f)(3); // (3 + 1) * 2 = 8

// pipe: f(g(x)) - exécute g puis f
FP.pipe(f, g)(3); // (3 * 2) + 1 = 7
```

**Exemple pratique:**
```typescript
const trim = (s: string) => s.trim();
const toLower = (s: string) => s.toLowerCase();
const slugify = (s: string) => s.replace(/\s+/g, '-');

const processText = FP.pipe(trim, toLower, slugify);
processText('  Hello World  '); // "hello-world"
```
