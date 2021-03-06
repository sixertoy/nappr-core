# Strings

#### getFirstLine

> Retourne la première ligne d'un texte/fichier

```javascript
getFirstLine('this is a foo string !');
// => false
```

#### isEmptyString

> Vérifie si la value est une chaine de caractère vide `string`, alias de la function utils/isEmpty

```javascript
isEmptyString('this is a foo string !');
// => false
```

#### isString

> Vérifie si la value est de type `string`

```javascript
isString('this is a foo string !');
// => true
```

#### removeWhitespaces

> Supprime les espaces en début et en fin de chaine

```javascript
removeWhitespaces('this is a foo string !');
// => true
```

#### slugify

> Supprime tous les characteres non alphanumeriques d'une chaine de caractère en les remplacants par des `-`

```javascript
slugify('# This is a FOO String !');
// => this-is-a-foo-string
```

#### toLowerCase

> Transforme une chaîne de caractère en bas de case

```javascript
toLowerCase('this is a foo string !');
// => this is a foo string !
```

#### toUpperCase

> Transforme une chaîne de caractère en haut de case

```javascript
toUpperCase('this is a foo string !');
// => THIS IS A FOO STRING !
```

#### ucFirst

>

```javascript
ucFirst('this is a foo string !');
// => This is a foo string !
```
