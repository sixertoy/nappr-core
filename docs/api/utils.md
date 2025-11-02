# Utils

Fonctions utilitaires générales.

## sleep

Crée une promesse qui se résout après un délai spécifié en millisecondes.

```typescript
import { Utils } from '@nappr/nappr-core';

// Dans une fonction async
async function delayedAction() {
  console.log('Avant');
  await Utils.sleep(1000); // Attend 1 seconde
  console.log('Après');
}

// Avec then
Utils.sleep(2000).then(() => {
  console.log('2 secondes écoulées');
});
```

**Signature:**
```typescript
sleep(ms: number): Promise<void>
```

**Paramètres:**
- `ms` (number): Le délai en millisecondes

**Retourne:**
- Une promesse qui se résout après le délai

**Exemple:**
```typescript
// Polling avec sleep
async function pollData() {
  while (true) {
    const data = await fetchData();
    if (data.ready) break;
    await Utils.sleep(1000); // Attendre 1 seconde avant le prochain essai
  }
}
```

## toggleBooleans

Bascule une valeur booléenne si `shouldToggle` est vrai, en utilisant une opération XOR.

```typescript
import { Utils } from '@nappr/nappr-core';

Utils.toggleBooleans(true, false); // true (pas de toggle)
Utils.toggleBooleans(true, true); // false (toggle)
Utils.toggleBooleans(false, true); // true (toggle)
Utils.toggleBooleans(false, false); // false (pas de toggle)
```

**Signature:**
```typescript
toggleBooleans(boolVal: boolean, shouldToggle = false): boolean
```

**Paramètres:**
- `boolVal` (boolean): La valeur booléenne initiale
- `shouldToggle` (boolean): Si vrai, bascule la valeur

**Retourne:**
- La valeur booléenne (toggled si nécessaire)

**Exemple:**
```typescript
const isActive = true;
const toggle = true;
const result = Utils.toggleBooleans(isActive, toggle); // false
```

## uniqKeyId

Génère un identifiant unique en concaténant plusieurs valeurs avec un séparateur par défaut `::`.

```typescript
import { Utils } from '@nappr/nappr-core';

Utils.uniqKeyId('user', '123', 'profile'); 
// "::user::123::profile"

Utils.uniqKeyId('component', ['button', 'primary']); 
// "::component::button::primary"

Utils.uniqKeyId('prefix', ['nested', 'value'], 'suffix');
// "::prefix::nested::value::suffix"
```

**Signature:**
```typescript
uniqKeyId(...args: (string | string[])[]): string | undefined
```

**Paramètres:**
- `...args` (string | string[]): Arguments à concaténer (peuvent être des strings ou des tableaux)

**Retourne:**
- Un identifiant unique string ou `undefined` si aucun argument n'est fourni

**Exemple:**
```typescript
const key = Utils.uniqKeyId('module', 'action', 'type');
// Utilisé pour créer des clés uniques pour les sélecteurs, cache, etc.
```

## debounce

**@deprecated** - Utilisez `lodash.debounce` directement.

Crée une fonction debounced qui retarde l'exécution jusqu'à ce qu'après que `wait` millisecondes se soient écoulées depuis le dernier appel.

```typescript
import { Utils } from '@nappr/nappr-core';

const debouncedSearch = Utils.debounce((query: string) => {
  console.log('Recherche:', query);
}, 300);

debouncedSearch('hello');
debouncedSearch('hello world');
debouncedSearch('hello world!'); // Seule cette invocation sera exécutée
```

**Signature:**
```typescript
debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait = 250,
  immediate = false
): DebouncedFunction<T>
```

**Paramètres:**
- `func` (T): La fonction à debounce
- `wait` (number): Le délai en millisecondes (défaut: 250)
- `immediate` (boolean): Si vrai, exécute immédiatement puis ignore les appels suivants

**Retourne:**
- Une fonction debounced

**Migration:**
```typescript
// Avant
import { Utils } from '@nappr/nappr-core';
const debounced = Utils.debounce(() => {}, 300);

// Après (recommandé)
import { debounce } from 'lodash';
const debounced = debounce(() => {}, 300);
```

## isEmpty

**@deprecated** - Utilisez `lodash.isEmpty` directement.

Vérifie si une valeur est vide (string vide, tableau vide).

```typescript
import { Utils } from '@nappr/nappr-core';

Utils.isEmpty(''); // true
Utils.isEmpty('   '); // true
Utils.isEmpty([]); // true
Utils.isEmpty('hello'); // false
Utils.isEmpty([1, 2]); // false
```

**Signature:**
```typescript
isEmpty(val: unknown): boolean
```

**Paramètres:**
- `val` (unknown): La valeur à vérifier

**Retourne:**
- `true` si la valeur est vide

**Migration:**
```typescript
// Avant
import { Utils } from '@nappr/nappr-core';
const empty = Utils.isEmpty('');

// Après (recommandé)
import { isEmpty } from 'lodash';
const empty = isEmpty('');
```
