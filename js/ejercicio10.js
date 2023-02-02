// Ejercicio 10. Crear un array con números aleatórios primos.

/* 
Crea un array de números de un tamaño pasado por prompt, el array contendrá números
aleatorios primos entre los números deseados, por último, nos indicar cual es el mayor
de todos. Haz un método para comprobar que el número aleatorio es primo, puedes hacer
todos los métodos que necesites.
*/

// Método para generar un número aleatorio entre min y max, incluyendo ambos extremos.
const getRandomInt = (min, max) => {
    min = Math.ceil(min);           // Devuelve el entero mayor o igual más próximo a un número dado..
    max = Math.floor(max);          // Devuelve el máximo entero menor o igual a un número.
    return Math.floor(Math.random() * (max - min) + min);
}

// Método para determinar si un número es primo (Criba de Eratóstenes)
const isPrimeNumber = (number) => {
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

// Declaramos las variables y cpnstantes de nuestro entorno
const minNum = 0;
const maxNum = 100;
let listNumbers = [];
let i = 1;

// Pedimos al usuario que nos diga la longitud que quiere para el Array (Ej. 10)
let listLenght = parseInt(prompt("Indique la longitud deseada: ")); 

// Logica de la aplicación para solucionar el problema.
while (i <= listLenght) {
    number = getRandomInt(minNum,maxNum);   // Buscamos un número aleatório entre dos números.
    if (isPrimeNumber(number)) {            // Analizámos si el número es primo.
        listNumbers.push(number);           // Si es primo lo agregamos al final del arreglo;
        i++
    }
}
console.table(listNumbers);                 // Muestra por consola en una tabla el Array 