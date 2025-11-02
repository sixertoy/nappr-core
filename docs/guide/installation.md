# Installation

## Prérequis

- Node.js >= 18.0.0
- npm ou yarn

## Installation avec npm

```bash
npm install @nappr/nappr-core
```

## Installation avec yarn

```bash
yarn add @nappr/nappr-core
```

## Installation avec pnpm

```bash
pnpm add @nappr/nappr-core
```

## TypeScript

Les types TypeScript sont inclus dans le package. Aucune installation supplémentaire n'est nécessaire.

```typescript
import { Arrays } from '@nappr/nappr-core';
// Types automatiquement disponibles
```

## Vérification de l'installation

```typescript
import napprCore from '@nappr/nappr-core';

console.log(napprCore.Arrays.fill(5));
// Devrait afficher: [0, 1, 2, 3, 4]
```

## Formats supportés

La bibliothèque supporte les formats suivants :

- **ES Modules** : `import napprCore from '@nappr/nappr-core'`
- **CommonJS** : `const napprCore = require('@nappr/nappr-core')`

## Dependencies

La bibliothèque utilise `lodash` comme dépendance pour certaines fonctions deprecated.
