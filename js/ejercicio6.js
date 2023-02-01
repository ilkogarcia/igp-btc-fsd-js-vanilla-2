// Ejercicio 5. Convertir un número de decimal a binario.

/* 
Crea una aplicación que nos cuente el número de cifras de un número
entero positivo (hay que controlarlo) pedido por prompt. Crea un método
que realice esta acción, pasando el número por parámetro devolverá el 
número de cifras.
*/

// Pedimos un  número al usuario que convertimos a entero y comprobamos que sea positivo.
let number = parseInt(prompt("Introduce un número entero positivo: "));

// Cuente el número de cifras de un número entero positivo
const countDigits = (num) => {
    let count = 0;
    while (num != 0) {
        num = Math.floor(num/10);
        document.write(`Step ${count++}: ${num} <br>`);
    }
    return count;
}

document.write('<br> El número ' + number + ' tiene ' + countDigits(number) + ' dígitos');
