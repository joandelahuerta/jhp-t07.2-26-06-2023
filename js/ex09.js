//9. Crea un array de números donde le indicamos por prompt el tamaño del array,
//rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
//valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método
//para rellenar el array(que tenga como parámetros los números entre los que tenga que
//generar) y otro para mostrar el contenido y la suma del array.

function rellenarArray(tamaño) {
    let array = [];

    for (let i = 0; i < tamaño; i++) {
        let numero = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        array.push(numero);
    }
    return array;
}

function mostrarArray(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        console.log("Índice: " + i + " | Valor: " + array[i]);
        suma += array[i];
    }
    console.log("Suma total: " + suma);
}

let tamaño = parseInt(prompt("Introduce el tamaño del array: "));
let numeros = rellenarArray(tamaño);
mostrarArray(numeros);