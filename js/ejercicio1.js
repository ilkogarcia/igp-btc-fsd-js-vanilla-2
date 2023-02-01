// Ejercicios JavaScript Vanilla (II) : Ejercicio 1.

// Pedimos al usuario que seleccion una figura geométrica para calcular su área.
let opcionMenu = prompt ("Cualcular el área de: (1) Círculo (2) Triángulo (3) Cuadrado");

switch (opcionMenu) {

    case "1":
        // Calcula el área de un círculo usando la fórmula area = (radio^2)*PI
        const NUMERO_PI = 3.14159265359;
        console.log("De acuerdo, vamos a calcular el área de un círculo...")
        let radioCirculo = parseFloat(prompt("¿Radio del circulo?: "));
        let areaCirculo = (radioCirculo**2) * NUMERO_PI;
        console.log("El área del círculo es: " + areaCirculo);
        break;

    case "2":
        // Calcula el área de un triángulo usando la fórmula area = (base * altura) / 2
        console.log("De acuerdo, vamos a calcular el área de un triangulo...")
        let baseTriangulo = parseFloat(prompt("¿Base del triangulo?: "));
        let alturaTriangulo = parseFloat(prompt("¿Altura del triangulo?: "));
        let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
        console.log("El área del triangulo es: " + areaTriangulo);
        break;

    case "3":
        // Calcula el área de un cuadrado usando la formula area = lado * lado
        console.log("De acuerdo, vamos a calcular el área de un cuadrado...")
        let ladoCuadrado = parseFloat(prompt("¿Lado del cuadrado?: "));
        let areaCuadrado = (ladoCuadrado ** 2);
        console.log("El área del cuadrado es: " + areaCuadrado);
        break;
        
    default:
        console.log ("Elija una opción de menu valida...");
        break;
}





