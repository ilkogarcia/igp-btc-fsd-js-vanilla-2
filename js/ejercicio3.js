// Ejercicios JavaScript Vanilla (II) : Ejercicio 3.

/*
La solución es una implementación de mi interpretación del procedimiento denominado Criba de Eratóstenes.
El método consiste en ir buscando si el número analizado es múltiplo de algún número y por tanto es
compuestos y podemos descartarlo como primo. Si el número nos queda sin descartar entonces serán declarado
como número primo. La criba para cuando el cuadrado del número a investigar es mayor que el propio número.
*/

// Implementación del método Criba de Eratóstenes 
function IsPrimeNumber(number) {
    let i = 2;                  // Comenzamos siempre por 2 dado que todos los números son divisibles por 1.
    let isPrime = true;         // Asumimos la hipótesis que se trata de un número primo.
    while (i**2 < number) {     // En el ciclo intentamos refutar la hipotesis.
        if (number%i == 0) {
            isPrime = false;
        }
        i++;
    }
    return isPrime;
}
    
let number = parseInt(prompt("Introduce un número cualquiera: "));

if (IsPrimeNumber(number)) {
    console.log("Es un número primo");
} else {
    console.log("No es un número primo");
}
