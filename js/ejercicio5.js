// Ejercicio 5. Convertir un número de decimal a binario.

/* 
Crea una aplicación que nos convierta un número en base decimal a binario. 
Esto lo realizará un método al que le pasaremos el número como parámetro, 
devolverá un String con el numero convertido a binario. Para convertir un 
número decimal a binario, debemos dividir entre 2 el número y el resultado 
de esa división se divide entre 2 de nuevo hasta que no se pueda dividir más, 
el resto que obtengamos de cada división formara el número binario, de abajo 
a arriba.
*/

// Pedimos un  número al usuario
let number = parseInt(prompt("Introduce un número decimal: "));

// Divide por 2 el parámetro de entrada y nos quedamos con el resto que concatenamos a la expresión binaria
const ConvertDecimalToBinary = (num) => {
    let bin = '';
    let step = 1;
    while (num != 0) {
        let rest = num%2;
        bin = rest + bin;
        console.log(`Step ${step++}: ${num}/2, Resto = ${rest}, Cociente = ${num = parseInt(num/2)}`);
    }
    return bin;
}

console.log ('Binario: ' + ConvertDecimalToBinary(number));
