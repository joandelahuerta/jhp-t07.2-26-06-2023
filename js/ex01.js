//1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
//Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá
//los valores necesarios para calcular el área. Para ello has de crear un método por cada
//figura para calcular cada área, este devolverá un número real. Muestra el resultado por
//consola.
//Aquí te mostramos que necesita cada figura:
//• Circulo: (radio^2)*PI
//• Triangulo: (base * altura) / 2
//• Cuadrado: lado * lado

function calculoArea() {
    let figura = prompt("Elige una figura: 1=Círculo 2=Triángulo 3=Cuadrado:");
    if (figura === "1") {
        let radio = parseFloat(prompt("Inserta el radio del circulo: "));
        let area = Math.PI * Math.pow(radio, 2);
        console.log("El área del círculo es: " + area);
    } else if (figura === "2") {
        let altura = parseFloat(prompt("Inserta la altura del triángulo: "));
        let base = parseFloat(prompt("Inserta la base del triángulo: "));
        let area = (base * altura) / 2;
        console.log("El área del triángulo es: " + area);
    } else if (figura === "3") {
        let lado = parseFloat(prompt("Inserta un lado del cuadrado: "));
        let area = Math.pow(lado, 2);
        console.log("El área del cuadrado es: " + area);
    }
}
calculoArea();