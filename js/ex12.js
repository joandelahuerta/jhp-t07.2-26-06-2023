//12. Crea un array de números de un tamaño pasado por prompt, el array contendránúmeros
//aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
//nosotros le indiquemos por prompt (debes controlar que se introduce un número
//correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10
//posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.

function mostrarNumerosTerminadosEn() {
    let tamaño = parseInt(prompt("Introduce el tamaño para el array: "));
    let digito = parseInt(prompt("Con que numero quieres que acabe: "));
    let numeros = [];
    let terminadoEn = [];

    for (let i = 0; i < tamaño; i++) {
        let numero = Math.floor(Math.random() * 300) + 1;
        numeros.push(numero);
    }

    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        let ultimoDigito = numero % 10;
        if (ultimoDigito === digito) {
            terminadoEn.push(numero);
        }
    }
    console.log("Números que acaban en " + digito + ":", terminadoEn);
}
mostrarNumerosTerminadosEn();