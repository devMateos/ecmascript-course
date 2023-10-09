// En alguna situación necesitarás manejar varias promesas y obtener sus resultados. ¿Cómo? Utilizando los métodos Promise.all y Promise.allSettled. Ambos reciben como argumento un array de promesas
// Promise.all() solo se resolverá si todas las promesas fueron resueltas, mientras que Promise.allSettled() devolverá un array con el estado y el valor de cada promesa, haya sido resuelta o rechazada
const promise1 = new Promise((resolve, reject) => reject('Reject'));
const promise2 = new Promise((resolve, reject) => resolve('Resolve'));
const promise3 = new Promise((resolve, reject) => resolve('Resolve 2'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
