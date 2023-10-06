// La desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de objetos en distintas variables


// Arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

// Una forma para acceder a otros elementos de un array que no sean los primeros es utilizando comas para saltar los lugares:
let fruits2 = ['Apple', 'Banana', 'Orange'];
let [, , fruit] = fruits2;
console.log(fruit);


// Object destructuring
let user = { username: 'Antonio', age: 28 };
let { username, age } = user;
console.log(username, age);

// Esto nos permite conseguir en una sola línea el mismo resultado que haciendo lo siguiente:
/* 
var username = user.username;
var age = user.age;
*/


// Spread operator
let person = { name: 'Óscar', age: 34 };
let country = 'MX';
// Empleando 3 puntos de la siguiente forma podemos hacer la desestructuración de un elemento e incluirlo dentro de un objeto
let data = { id: 1, ...person, country };
console.log(data);


// Rest
// Se puede agrupar el residuo de elementos mediante la sintaxis de 3 puntos seguido de una variable que tendrá los elementos en un array de la siguiente forma:
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);


// Estos son ejemplos curiosos de esto que acabamos de ver:
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)