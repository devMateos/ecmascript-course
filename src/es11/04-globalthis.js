// El motor de JavaScript, aquel que compila tu archivo y lo convierte en código que entiende el computador, al iniciar la compilación crea un objeto global que proporciona funciones y variables propias e integradas en el lenguaje o entorno. Dependiendo de la plataforma, este objeto tendrá un nombre diferente.
// Para estandarizar el objeto global se creó globalThis, un objeto compatible para cualquier plataforma
console.log(window);    // Navegador
console.log(global);    // node
console.log(self);     // webworker
console.log(globalThis);