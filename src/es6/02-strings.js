// Los "template strings" consisten en crear cadenas de caracteres que puedan contener variables sin utilizar la concatenación. Esto mejora la legibilidad y la mantenibilidad del código

// De esta forma se haría antes de ES6:
let hello = 'Hello';
let world = 'World';
let phrase = hello + ' ' + world + '!';
console.log(phrase);

// De esta forma se haría con template strings:
let phrase2 = `${hello} ${world}!`;
console.log(phrase2);


// Otra de las ventajas que se han agregado en ES6 son las multilíneas,que consisten en crear mensajes que contengan varias líneas separadas entre sí, utilizando las plantillas literales
// De esta forma se haría antes de ES6:
let lorem = 'esto es un string \n' + 'esto es otra línea';
console.log(lorem);

let lorem2 = `Esta es una frase épica
    y esta es la continuación de esa frase épica
`;
console.log(lorem2);