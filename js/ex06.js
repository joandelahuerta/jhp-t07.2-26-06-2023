//6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
//(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
//pasando el número por parámetro devolverá el número de cifras.

function contarCifras() {
    let numero = parseInt(prompt("Introduce un número entero positivo: "));

    if (Number.isInteger(numero) && numero >= 0) {
        if (numero === 0) {
        return 1;
        }

        let contador = 0;
        while (numero !== 0) {
            contador++;
            numero = Math.floor(numero / 10);
        }

        console.log("El número tiene " + contador + " cifras.");

    } else {
        console.log("El número no es positivo.");
    }
}
contarCifras();