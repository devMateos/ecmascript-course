// El método replaceAll funciona como el método replace, con la diferencia de que éste último solo reemplaza el primer elemento que encuentra
const string = 'Esta es una frase de ejemplo que estoy escribiendo para este ejercicio. Dicha frase no debe tomarse en serio';

const replacedString = string.replace('frase', 'oración');
console.log(replacedString);
const replacedString2 = string.replaceAll('frase', 'oración');
console.log(replacedString2);