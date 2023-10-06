// Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.
// Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.
// Para crear un generator se pone * después de la palabra reservada function
function* iterate(array) {
    for (let value of array) {
        yield value;    // La palabra clave **yield ** detiene la ejecución de la función generadora y el valor de la expresión que sigue a la palabra clave yield se devuelve
    }
}

const it = iterate(['Óscar', 'David', 'Ana', 'Ulises', 'Jennifer']);
// El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);