# Strings

Fonctions utilitaires pour la manipulation de chaînes de caractères.

## slugify

Convertit une chaîne de caractères en slug (URL-friendly). Gère les accents, caractères spéciaux et peut ajouter un préfixe et suffixe.

```typescript
import { Strings } from '@nappr/nappr-core';

Strings.slugify('Hello World'); // "hello-world"
Strings.slugify('Bonjour le monde'); // "bonjour-le-monde"
Strings.slugify('Hello World', 'prefix'); // "prefix-hello-world"
Strings.slugify('Hello World', '', 'suffix'); // "hello-world-suffix"
Strings.slugify('Hello World', 'prefix', 'suffix'); // "prefix-hello-world-suffix"
```

**Signature:**
```typescript
slugify(text: string | unknown = '', pprefix = '', psuffix = ''): string
```

**Paramètres:**
- `text` (string | unknown): Le texte à convertir en slug
- `pprefix` (string): Préfixe optionnel à ajouter
- `psuffix` (string): Suffixe optionnel à ajouter

**Retourne:**
- Une chaîne slugifiée

**Exemple:**
```typescript
Strings.slugify('Café & Restaurant'); // "cafe-and-restaurant"
Strings.slugify('Article Title', 'blog', '2024'); // "blog-article-title-2024"
```

## isString

Type guard TypeScript qui vérifie si une valeur est une chaîne de caractères.

```typescript
import { Strings } from '@nappr/nappr-core';

Strings.isString('hello'); // true
Strings.isString(123); // false
Strings.isString(null); // false

// Utilisation avec TypeScript
function process(value: unknown) {
  if (Strings.isString(value)) {
    // TypeScript sait maintenant que value est string
    value.toUpperCase(); // OK
  }
}
```

**Signature:**
```typescript
isString(str: unknown): str is string
```

**Paramètres:**
- `str` (unknown): La valeur à vérifier

**Retourne:**
- `true` si la valeur est une chaîne de caractères

## isEmptyString

Vérifie si une chaîne est vide (après trim) ou si un tableau est vide.

```typescript
import { Strings } from '@nappr/nappr-core';

Strings.isEmptyString(''); // true
Strings.isEmptyString('   '); // true
Strings.isEmptyString('hello'); // false
Strings.isEmptyString([]); // true
```

**Signature:**
```typescript
isEmptyString(str: unknown): boolean
```

**Paramètres:**
- `str` (unknown): La valeur à vérifier

**Retourne:**
- `true` si la chaîne est vide (après trim) ou si c'est un tableau vide

## removeWhitespaces

Supprime tous les espaces et caractères non-breaking space d'une chaîne.

```typescript
import { Strings } from '@nappr/nappr-core';

Strings.removeWhitespaces('  hello   world  '); // "helloworld"
Strings.removeWhitespaces('hello&nbsp;world'); // "helloworld"
```

**Signature:**
```typescript
removeWhitespaces(val: string | unknown): string | unknown
```

**Paramètres:**
- `val` (string | unknown): La valeur à traiter

**Retourne:**
- La chaîne sans espaces ou la valeur originale si ce n'est pas une string

## ucfirst

Met en majuscule la première lettre d'une chaîne.

```typescript
import { Strings } from '@nappr/nappr-core';

Strings.ucfirst('hello'); // "Hello"
Strings.ucfirst('HELLO'); // "HELLO"
Strings.ucfirst('hello world'); // "Hello world"
```

**Signature:**
```typescript
ucfirst(str: string): string
```

**Paramètres:**
- `str` (string): La chaîne à modifier

**Retourne:**
- La chaîne avec la première lettre en majuscule

## capitalize

**@deprecated** - Utilisez `lodash.upperFirst` directement.

Alias de `ucfirst`. Met en majuscule la première lettre d'une chaîne.

```typescript
import { Strings } from '@nappr/nappr-core';

Strings.capitalize('hello'); // "Hello"
```

**Migration:**
```typescript
// Avant
import { Strings } from '@nappr/nappr-core';
const cap = Strings.capitalize('hello');

// Après (recommandé)
import { upperFirst } from 'lodash';
const cap = upperFirst('hello');
```

## toLowerCase

**@deprecated** - Utilisez `lodash.toLower` directement.

Convertit une chaîne en minuscules. Inclut une vérification de type.

```typescript
import { Strings } from '@nappr/nappr-core';

Strings.toLowerCase('HELLO'); // "hello"
Strings.toLowerCase('Hello World'); // "hello world"
```

**Migration:**
```typescript
// Avant
import { Strings } from '@nappr/nappr-core';
const lower = Strings.toLowerCase('HELLO');

// Après (recommandé)
import { toLower } from 'lodash';
const lower = toLower('HELLO');
```

## toUpperCase

**@deprecated** - Utilisez `lodash.toUpper` directement.

Convertit une chaîne en majuscules. Inclut une vérification de type.

```typescript
import { Strings } from '@nappr/nappr-core';

Strings.toUpperCase('hello'); // "HELLO"
Strings.toUpperCase('Hello World'); // "HELLO WORLD"
```

**Migration:**
```typescript
// Avant
import { Strings } from '@nappr/nappr-core';
const upper = Strings.toUpperCase('hello');

// Après (recommandé)
import { toUpper } from 'lodash';
const upper = toUpper('hello');
```
