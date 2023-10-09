// Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda y manipulación de cadenas de caracteres increíblemente potente y están presentes en todos los lenguajes de programación.
// En JavaScript se crea este patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda.
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2023-10-07');
console.table(matchers);