// El método inclues determina si un array o string incluye un determinado elemento devolviendo un booleano
let numbers = [1, 3, 4, 6, 7, 8];
console.log(numbers.includes(4));
console.log(numbers.includes(5));

// El segundo parámetro indica el índice inicial desde donde comparar hasta el último elemento
const list = ['Óscar', 'David', 'Ana'];
console.log(list.includes('Óscar', 1));

/* En objetos también hay formas de saber si existe una propiedad:
    1. La palabra reservada in
    2. El método de objetos hasOwnProperty
    3. El método Object.hasOwn, que recibe el objeto y la propiedad a evaluar.
 */