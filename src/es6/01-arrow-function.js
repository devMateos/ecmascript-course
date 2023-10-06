// Las "arrow function" son funciones anónimas con una estructura particular

// Declaration Function
function square(num) {
    return num * num;
}

// Arrow function (permite ser declarada con var, let y const, aunque suele ser recomendable usar const)
const square = (num) => {
    return num * num;
}

// Esto tiene la ventaja de que permite reducir nuestro código a una forma más amigable:
const square = num => num * num;    // De esta forma, la función tiene el return implícito