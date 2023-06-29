//5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
//realizará un método al que le pasaremos el número como parámetro, devolverá un
//String con el número convertido a binario. Para convertir un número decimal a binario,
//debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de
//nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división
//formará el número binario, de abajo a arriba.


function decimalBinario() {
    let numero = parseInt(prompt("Introduce un número decimal: "));

    if (numero === 0) {
        console.log("0 en binario es 0 :|");
    }

    let binario = "";
    while (numero > 0) {
        let resto = numero % 2;
        binario = resto + binario;
        numero = Math.floor(numero / 2);
    }
    console.log("El numero binario es: " + binario);
}
decimalBinario();