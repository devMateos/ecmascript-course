// Set es una nueva estructura de datos para almacenar elementos únicos. Es parecido al array, pero una de las diferencias con el array es que impide agregar elementos repetidos
const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);