//7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
//EJERCICIOS JS - Funciones
//otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
//parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
//devolverá ningún valor, mostrará un mensaje indicando el cambio.
//El cambio de divisas es:
//• 0.86 libras es un 1 €
//• 1.28611 $ es un 1 €
//• 129.852 yenes es un 1 €

function convertirMoneda() {

    let dinero = parseFloat(prompt("Introduce la cantidad de euros: "));
    let moneda = prompt("Introduce la moneda a la que deseas convertir (libras, dólares, yenes): ");
    let cambio = 0;

    if (moneda === "libras") {
        cambio = dinero * 0.86;
        console.log("El cambio a libras es de: " + cambio);
    } else if (moneda === "dolares") {
        cambio = dinero * 1.28611;
        console.log("El cambio a dólares es de: " + cambio);
    } else if (moneda === "yenes") {
        cambio = dinero * 129.852;
        console.log("El cambio a yenes es de: " + cambio);
    } else {
        console.log("Prueba con otro tipo de moneda.");
    }
}
convertirMoneda();