# Maths

Fonctions utilitaires mathématiques.

## getPercentage

Calcule un pourcentage d'une valeur donnée.

```typescript
import { Maths } from '@nappr/nappr-core';

Maths.getPercentage(50, 200); // 100 (50% de 200)
Maths.getPercentage(25, 100); // 25 (25% de 100)
Maths.getPercentage('10', 50); // 5 (10% de 50, conversion automatique)
```

**Signature:**
```typescript
getPercentage(percent: number | string, value: number): number
```

**Paramètres:**
- `percent` (number | string): Le pourcentage à calculer (peut être un nombre ou une string)
- `value` (number): La valeur de base

**Retourne:**
- Le résultat du calcul du pourcentage

**Exemple:**
```typescript
// Calculer une remise
const price = 100;
const discount = Maths.getPercentage(20, price); // 20
const finalPrice = price - discount; // 80

// Calculer une taxe
const amount = 50;
const tax = Maths.getPercentage('15', amount); // 7.5
const total = amount + tax; // 57.5
```

## log2

Calcule le logarithme en base 2 d'un nombre.

```typescript
import { Maths } from '@nappr/nappr-core';

Maths.log2(8); // 3 (2^3 = 8)
Maths.log2(16); // 4 (2^4 = 16)
Maths.log2(1); // 0 (2^0 = 1)
Maths.log2(2); // 1 (2^1 = 2)
```

**Signature:**
```typescript
log2(n: number): number
```

**Paramètres:**
- `n` (number): Le nombre dont on veut calculer le logarithme en base 2

**Retourne:**
- Le logarithme en base 2

**Exemple:**
```typescript
// Calculer le nombre de bits nécessaires
const value = 64;
const bitsNeeded = Math.ceil(Maths.log2(value)); // 6 bits

// Vérifier si un nombre est une puissance de 2
function isPowerOfTwo(n: number): boolean {
  return Number.isInteger(Maths.log2(n));
}
```
