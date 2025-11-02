# @nappr/nappr-core

> Nappr JS Core Library - A collection of utility functions for JavaScript/TypeScript

## Vue d'ensemble

`@nappr/nappr-core` est une bibliothèque de fonctions utilitaires TypeScript/JavaScript organisées par catégories fonctionnelles.

## Installation

```bash
yarn add @nappr/nappr-core
# ou
npm install @nappr/nappr-core
```

## Usage rapide

```typescript
import napprCore from '@nappr/nappr-core';

// Utilisation par module
const uniqueArray = napprCore.Arrays.uniq([1, 2, 2, 3]);
const slug = napprCore.Strings.slugify('Hello World');
const isEmpty = napprCore.Utils.isEmpty([]);

// Ou import direct
import { Arrays, Strings, Utils } from '@nappr/nappr-core';

const unique = Arrays.uniq([1, 1, 2, 3]);
```

## Modules disponibles

- **[Arrays](api/arrays.md)** - Fonctions utilitaires pour les tableaux
- **[Objects](api/objects.md)** - Fonctions utilitaires pour les objets
- **[Strings](api/strings.md)** - Fonctions utilitaires pour les chaînes de caractères
- **[Utils](api/utils.md)** - Fonctions utilitaires générales
- **[FP](api/fp.md)** - Programmation fonctionnelle (compose, pipe)
- **[Maths](api/maths.md)** - Fonctions mathématiques
- **[Colors](api/colors.md)** - Manipulation de couleurs
- **[Env](api/env.md)** - Détection d'environnement
- **[Core](api/core.md)** - Fonctions de base
- **[Keys](api/keys.md)** - Constantes de codes clavier

## Démarrage rapide

Consultez le [guide de démarrage](guide/getting-started.md) pour plus d'informations.

## Migration

Si vous migrez depuis une version précédente, consultez le [guide de migration](guide/migration.md).

## Fonctions Deprecated

Certaines fonctions ont été dépréciées et utilisent maintenant lodash en interne. Voir [la liste complète](deprecated.md).

## License

ISC

## Repository

[https://github.com/sixertoy/nappr-core](https://github.com/sixertoy/nappr-core)
