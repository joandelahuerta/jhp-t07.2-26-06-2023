//8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
//por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar
//valores y otro para mostrar

function llenarArray() {
    let array = [];

    for (let i = 0; i < 10; i++) {
        let valor = parseInt(prompt("Inserta el numero para el índice: " + i));
        array.push(valor);
        console.log("Índice: " + i + " | Valor: " + array[i]);
    }
    console.log("Array entero: ", array);
}

llenarArray();