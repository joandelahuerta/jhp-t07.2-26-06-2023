//10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números
//aleatorios primos entre los números deseados, por último, nos indica cuál es el mayor
//de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
//hacer todos los métodos que necesites.

function generarArray() {
    let array = [];
    let contador = 0;
    let tamaño = parseInt(prompt("Introduce el tamaño del array: "));
    let minimo = parseInt(prompt("Introduce el número mínimo: "));
    let maximo = parseInt(prompt("Introduce el número máximo: "));

    while (contador < tamaño) {
        let numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

        if (esPrimo(numero)) {
            array.push(numero);
            contador++;
        }
    }
    return array;
}
function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
function obtenerMayorNumero(array) {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}

let numerosPrimos = generarArray();
let mayorNumero = obtenerMayorNumero(numerosPrimos);

console.log("Números primos:", numerosPrimos);
console.log("El numero mayor es:", mayorNumero);