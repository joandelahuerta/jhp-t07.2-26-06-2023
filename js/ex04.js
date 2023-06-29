//4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
//realizará mediante un método al que le pasamos el número como parámetro. Para
//calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo,
//si introducimos un 5, realizará esta operación 5*4*3*2*1=120.

function calcularFactorial() {
    let numero = parseInt(prompt("Inserta un número: "));
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let factorial = 1;
    for (let i = numero; i >= 2; i--) {
      factorial *= i;
    }

    console.log("El factorial es: " + factorial);
}
calcularFactorial();