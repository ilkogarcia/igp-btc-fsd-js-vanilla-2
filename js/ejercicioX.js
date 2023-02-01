/* Ejercicio X. Pida un número por prompt, acto seguido irá restando ese número hasta llegar a 0 (usando un bucle),
cada uno de los números que devuelva la resta en el bucle, hay que decir por console.log si ese número es par.
*/

// Solución del ejercicio basico

// let number = parseInt(prompt("Introduce un número:"));
// while (number > 0) {
//     if (number%2 == 0) {
//         console.log(number + " es un número par");
//     }
//     number--;
// }

// Una solución en la que metemos todos los números en un array

// let parNumbers = [];
// let number = parseInt(prompt("Introduce un número:"));
// console.log("Estos son los números páres de 0 a " + number)
// while (number > 0) {
//     if (number%2 == 0) {
//         parNumbers.push(number);
//     }
//     number--;
// }
// console.table(parNumbers);

/* Identifica los números pares e impares hasta un valor dado
y suma los valores pares. Todos los resultados se muestran por consola. */

// let number = parseInt(prompt("Introduce un número:"));
// let totalParNumbers = 0;
// while (number > 0) {
//     number%2 != 0 ? (
//         console.log(number + " es un número impar")
//     ) : (
//         console.log(number + " es un número par"),
//         totalParNumbers += number
//     );
//     number--;
// }
// console.log ("La suma total de los números páres es: " + totalParNumbers)

/* 
Proposición de Ejercicio: 
pedir por prompt dos números, a continuación generar una función que divida
los números y ejecutarla.
*/

let num1 = parseInt(prompt("Dame un número:"));
let num2 = parseInt(prompt("Dame otro número:"));

const Dividir = (num1,num2) => {
    let res = num1/num2;
    return res;
}

const resultado = Dividir (num1,num2);
console.log(resultado);