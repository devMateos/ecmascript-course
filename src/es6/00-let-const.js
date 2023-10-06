// Con ES6 aparecen let y const para sustituir a la palabra reservada var y resolver algunos problemas que ésta conllevaba como el scope, hoisting, variables globales, redeclaración y re-asignación de variables
// Al contrario que var, ninguna de las dos puede ser redeclarada, pero let permite reasignar su valor, mientras que const no.

var lastName = 'David';
lastName = 'Óscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);


const fruits = () => {
    if (true) {
        var fruit1 = 'Apple';   // Function Scope
        let fruit2 = 'Kiwi';    // Block Scope
        const fruit3 = 'Banana';    // Block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();