const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!');
        } else {
        }
    })
}

// Con ES9 se agrega finnally, que permite tener una función anónima que realice algo cuando termine la promesa
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));