// Generadores asíncronos
// Los generadores asíncronos son semejantes a los generadores que ya conoces, pero combinando sintáxis de promesas.
async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

// Con ES9 también se añade for await. Es un ciclo repetitivo que se maneja asíncronamente. Siempre debe estar en una función con async
async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Óscar', 'David', 'Ana']);
console.log('After');