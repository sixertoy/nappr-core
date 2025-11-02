# Core

Fonctions de base et utilitaires de base de la bibliothèque.

## Colors

Utilitaires pour colorer le texte dans les terminaux (ANSI colors).

```typescript
import { Core } from '@nappr/nappr-core';

Core.Colors.red('Error message'); // Texte rouge
Core.Colors.green('Success!'); // Texte vert
Core.Colors.blue('Info'); // Texte bleu
Core.Colors.yellow('Warning'); // Texte jaune
Core.Colors.bold('Bold text'); // Texte en gras
```

**Fonctions disponibles:**
- `blue(msg: string): string`
- `cyan(msg: string): string`
- `gray(msg: string): string` / `grey(msg: string): string` (alias)
- `green(msg: string): string`
- `magenta(msg: string): string`
- `red(msg: string): string`
- `white(msg: string): string`
- `yellow(msg: string): string`
- `bold(msg: string): string`

**Exemple:**
```typescript
console.log(Core.Colors.green('✓ Succès'));
console.log(Core.Colors.red('✗ Erreur'));
console.log(Core.Colors.yellow('⚠ Attention'));
```

**Note:** Ces fonctions sont principalement utiles pour les applications Node.js/CLI. Elles utilisent des codes ANSI pour la coloration du terminal.

## noopnoop

Fonction vide qui ne fait rien. Utile comme valeur par défaut pour les callbacks.

```typescript
import { Core } from '@nappr/nappr-core';

const callback = Core.noopnoop;
callback(); // Ne fait rien

// Utilisation comme valeur par défaut
function doSomething(onComplete = Core.noopnoop) {
  // ...
  onComplete();
}
```

**Signature:**
```typescript
noopnoop(): void
```

**Retourne:**
- `undefined`

**Exemple:**
```typescript
// Éviter les erreurs si le callback n'est pas fourni
function processData(callback = Core.noopnoop) {
  const data = fetchData();
  callback(); // Sûr même si callback n'est pas fourni
}
```

## noop

**@deprecated** - Utilisez `lodash.noop` directement.

Fonction identité qui retourne l'argument passé. Note: `lodash.noop` retourne `undefined`, pas l'argument.

```typescript
import { Core } from '@nappr/nappr-core';

Core.noop(42); // 42
Core.noop('hello'); // "hello"
```

**Migration:**
```typescript
// Avant
import { Core } from '@nappr/nappr-core';
const result = Core.noop(value);

// Après (note: comportement différent)
import { noop } from 'lodash';
const result = noop(); // Retourne undefined, pas l'argument
```
