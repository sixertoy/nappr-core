# Colors

Fonctions utilitaires pour la manipulation de couleurs.

## hexToRGB

Convertit une couleur hexadécimale en valeurs RGB.

```typescript
import { Colors } from '@nappr/nappr-core';

Colors.hexToRGB('#FF5733'); // [255, 87, 51]
Colors.hexToRGB('#00FF00'); // [0, 255, 0]
Colors.hexToRGB('#000000'); // [0, 0, 0]
```

**Signature:**
```typescript
hexToRGB(hex: string): [number, number, number]
```

**Paramètres:**
- `hex` (string): La couleur hexadécimale (format `#RRGGBB`)

**Retourne:**
- Un tuple `[red, green, blue]` avec des valeurs de 0 à 255

**Exemple:**
```typescript
const [r, g, b] = Colors.hexToRGB('#FF5733');
console.log(`R: ${r}, G: ${g}, B: ${b}`); // R: 255, G: 87, B: 51
```

## hexToLuma

Calcule la luminosité relative (luma) d'une couleur hexadécimale. Utile pour déterminer si un texte clair ou foncé doit être utilisé sur une couleur de fond.

```typescript
import { Colors } from '@nappr/nappr-core';

Colors.hexToLuma('#FFFFFF'); // 1.0 (blanc, très clair)
Colors.hexToLuma('#000000'); // 0.0 (noir, très foncé)
Colors.hexToLuma('#FF5733'); // ~0.5 (moyen)
```

**Signature:**
```typescript
hexToLuma(hexstr: string): number
```

**Paramètres:**
- `hexstr` (string): La couleur hexadécimale

**Retourne:**
- Un nombre entre 0 (noir) et 1 (blanc) représentant la luminosité

**Exemple:**
```typescript
const luma = Colors.hexToLuma('#FF5733');
const textColor = luma > 0.5 ? '#000000' : '#FFFFFF';
// Si la couleur est claire, utilise du texte noir, sinon du texte blanc
```

## rgb

Convertit une couleur hexadécimale en chaîne CSS RGB.

```typescript
import { Colors } from '@nappr/nappr-core';

Colors.rgb('#FF5733'); // "rgb(255, 87, 51)"
Colors.rgb('#00FF00'); // "rgb(0, 255, 0)"
```

**Signature:**
```typescript
rgb(hex: string): string
```

**Paramètres:**
- `hex` (string): La couleur hexadécimale

**Retourne:**
- Une chaîne CSS `rgb(r, g, b)`

**Exemple:**
```typescript
const rgbColor = Colors.rgb('#FF5733');
element.style.backgroundColor = rgbColor; // "rgb(255, 87, 51)"
```

## rgba

Convertit une couleur hexadécimale en chaîne CSS RGBA avec un canal alpha.

```typescript
import { Colors } from '@nappr/nappr-core';

Colors.rgba('#FF5733', 0.5); // "rgba(255, 87, 51, 0.5)"
Colors.rgba('#00FF00', 1); // "rgba(0, 255, 0, 1)"
Colors.rgba('#000000', 0.8); // "rgba(0, 0, 0, 0.8)"
```

**Signature:**
```typescript
rgba(hex: string, alpha: number): string
```

**Paramètres:**
- `hex` (string): La couleur hexadécimale
- `alpha` (number): La valeur d'opacité (0 à 1)

**Retourne:**
- Une chaîne CSS `rgba(r, g, b, alpha)`

**Exemple:**
```typescript
const transparentRed = Colors.rgba('#FF0000', 0.5);
element.style.backgroundColor = transparentRed; // "rgba(255, 0, 0, 0.5)"
```
