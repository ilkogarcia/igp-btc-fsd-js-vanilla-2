// Ejercicio 12. Seguimos jugando con arrays.

/* 
Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un
dígito que nosotros le indiquemos por prompt (debes controlar que se introduce
un número correcto), estos deben guardarse en un nuevo array. Por ejemplo,
en un array de 10 posiciones le indicamos mostrar los números acabados en 5,
podría salir 155, 25, etc.</p>  
*/

// Método para generar un número aleatorio entre min y max, incluyendo ambos extremos.
const getRandomInt = (min, max) => {
    min = Math.ceil(min);           // Devuelve el entero mayor o igual más próximo a un número dado..
    max = Math.floor(max);          // Devuelve el máximo entero menor o igual a un número.
    return Math.floor(Math.random() * (max - min) + min);
}

// Método que devuelve array de longitud según parámetro de entrada y contiene múmeros aleatorios.
const fillArray = (lenght, min, max) => {
    let num;
    let i = 0;
    let listNumber = [];
    while (i <= lenght) {
        num = getRandomInt(min, max);   // Buscamos un número aleatório entre dos números.
        listNumber.push(num);           // Si es primo lo agregamos al final del arreglo;
        i++
    }
    return listNumber;
}

// Declaramos las variables y cpnstantes de nuestro entorno.
const minNum = 1;
const maxNum = 300;
let arrNum1 = [];

// Pedimos al usuario que indique la longitud del primer arrays (Ej. 10).
let arrLenght = parseInt(prompt("Indique la longitud deseada: ")); 

// Creamos la primera colección de números aleatórios.
arrNum1 = fillArray(arrLenght, minNum, maxNum);
document.write(arrNum1, '<br>');
console.table(arrNum1);

// Pedimos al usuario que indique un número entre 0 y 9.
let endNum = parseInt(prompt("Elige un número del 0 al 9: "));
const arrNum2 = arrNum1.filter(e => e%10 == endNum);
document.write(arrNum2, '<br>');
console.table(arrNum2);
