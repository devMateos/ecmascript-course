const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!');
        } else {
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    // Con ES9 se agrega finnlly, que permite tener una función anónima que realice algo cuando termine la promesa
    .finally(() => console.log('Finally'));