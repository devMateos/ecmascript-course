// Cuando intentas acceder a propiedades de un objeto que no existen, JavaScript te retornará undefined. Al acceder a una propiedad más profunda de un objeto, que previamente fue evaluada como undefined, el programa se detendrá y mostrará un error de tipo
// El encadenamiento opcional u optional chaining (?.) detiene la evaluación del objeto cuando el valor es undefined o null antes del (?.), retornando undefined sin detener el programa por un error.
const users = {
    tony: {
        country: 'ES'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users?.developer?.country);

// El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista. Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría “ocultarlo” por un undefined, provocando que el debugging sea más complicado.