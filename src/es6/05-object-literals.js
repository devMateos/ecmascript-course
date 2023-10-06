// Object literals
// Normalmente la forma de crear objetos a partir de variables era de la siguiente forma:
function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

// Sin embargo, en ES6 se introduce la posibilidad de crearlo sin tener que repetir el nombre de las variables, de la siguiente forma:
uID = "D84260";
function newUser(user, age, country) {
    return {
        user,
        age,
        country,
        id: uID
    }
}
// Si tenemos alguna variable que no se encuentre entre los parámetros de la función y no tenga el mismo nombre, lo podemos añadir haciendo referencia a la variable (como con el id)
console.log(newUser('tony', 34, 'MX'));