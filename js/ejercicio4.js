// Ejercicio 4. Calcular el factorial de un número.

/* Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo realizara mediante un método al que le pasamos el número como parámetro. Para calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120. */

// Función para calcular el factorial 
function CalcFactorial (number) {
    let factorial = 1;      // Para almacenar el fatorial del número pasado por parámetro. 
    while (number > 1) {    // El cálculo termina con la multiplicación por 1 pero esto no modificará el resultado.
        factorial *= number;
        number--;
    }
    return factorial;
}
    
let number = parseInt(prompt("Introduce un número cualquiera: "));
console.log ("El factorial de " + number + " es " + CalcFactorial(number));

