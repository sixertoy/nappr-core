# Environment

Fonctions de détection de l'environnement d'exécution.

## isDevelopment

Détecte si l'application s'exécute en mode développement.

```typescript
import { Env } from '@nappr/nappr-core';

// Si NODE_ENV est 'development', 'local', '', ou non défini
Env.isDevelopment(); // true

// Si NODE_ENV est 'production'
Env.isDevelopment(); // false
```

**Signature:**
```typescript
isDevelopment(): boolean
```

**Retourne:**
- `true` si l'environnement est en développement, `false` sinon

**Exemple:**
```typescript
if (Env.isDevelopment()) {
  console.log('Mode développement - logs détaillés activés');
  enableDebugMode();
}
```

**Environnements détectés comme développement:**
- `NODE_ENV === 'development'`
- `NODE_ENV === 'local'`
- `NODE_ENV === ''`
- `NODE_ENV` non défini

## isProduction

Détecte si l'application s'exécute en mode production.

```typescript
import { Env } from '@nappr/nappr-core';

// Si NODE_ENV est 'production'
Env.isProduction(); // true

// Sinon
Env.isProduction(); // false (par défaut true en cas d'erreur)
```

**Signature:**
```typescript
isProduction(): boolean
```

**Retourne:**
- `true` si l'environnement est en production, `false` sinon (retourne `true` par défaut en cas d'erreur)

**Exemple:**
```typescript
if (Env.isProduction()) {
  // Désactiver les fonctionnalités de debug
  disableDebugFeatures();
  // Activer les optimisations
  enableProductionOptimizations();
}
```

## isLocal

Détecte si l'application s'exécute en mode local.

```typescript
import { Env } from '@nappr/nappr-core';

// Si NODE_ENV est 'local'
Env.isLocal(); // true

// Sinon
Env.isLocal(); // false
```

**Signature:**
```typescript
isLocal(): boolean
```

**Retourne:**
- `true` si `NODE_ENV === 'local'`, `false` sinon

**Exemple:**
```typescript
if (Env.isLocal()) {
  // Configuration locale
  apiUrl = 'http://localhost:3000';
} else {
  // Configuration distante
  apiUrl = 'https://api.example.com';
}
```

## Utilisation combinée

```typescript
import { Env } from '@nappr/nappr-core';

if (Env.isDevelopment()) {
  // Mode développement
  console.log('Dev mode');
} else if (Env.isLocal()) {
  // Mode local
  console.log('Local mode');
} else if (Env.isProduction()) {
  // Mode production
  console.log('Production mode');
}
```
