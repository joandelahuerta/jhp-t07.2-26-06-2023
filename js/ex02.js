//2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
//por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre
//qué números queremos que los genere, podemos pedirlas al usuario antes de generar
//los números. Este método devolverá un número entero aleatorio. Muestra estos
//números por consola.

function generarAleatorios() {
    let minimo = parseInt(prompt("Introduce el valor mínimo:"));
    let maximo = parseInt(prompt("Introduce el valor máximo:"));
    let cantidad = parseInt(prompt("Introduce la cantidad de números:"));
    let numerosAleatorios = [];
    
    for (let i = 0; i < cantidad; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        numerosAleatorios.push(numeroAleatorio);
    }

    console.log("Números aleatorios:", numerosAleatorios);
}
generarAleatorios();