// El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para asignarle un valor
const anotherNumber = null;
const validate = anotherNumber ?? 5; // Si el valor de anotherNumber es null le asignará el valor 5.
console.log(validate);