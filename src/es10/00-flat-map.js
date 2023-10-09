// El aplanamiento de arrays consiste en transformar un array de arrays a una sola dimensión
// flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];
console.log(array.flat(3));

// flatmap es una combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]));