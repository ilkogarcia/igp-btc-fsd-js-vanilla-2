// Ejercicio 11. Trabajando con 2 arrays.

/* 
Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos
estará rellenado con números aleatorios y el otro apuntará al array anterior,
reasigna los valores del segundo array con valores aleatorios. Después, crea
un método que tenga como parámetros, los dos arrays y devuelva uno nuevo con
la multiplicación de la posición 0 del array1 con el del array2 y así
sucesivamente. Por último, muestra el contenido de cada array.
*/

// Método para generar un número aleatorio entre min y max, incluyendo ambos extremos.
const getRandomInt = (min, max) => {
    min = Math.ceil(min);           // Devuelve el entero mayor o igual más próximo a un número dado..
    max = Math.floor(max);          // Devuelve el máximo entero menor o igual a un número.
    return Math.floor(Math.random() * (max - min) + min);
}

// Método que devuelve array de longitud según parámetro de entrada y contiene múmeros aleatorios.
const fillNumberArray = (lenght, min, max) => {
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

// Método que recibe dos Arrays y devuelva uno nuevo con la multiplicación
const multArrays = (arr1, arr2) => {
    return arr1.map((i, index) => i * arr2[index]);
}

// Declaramos las variables y cpnstantes de nuestro entorno.
const minNum = 0;
const maxNum = 100;
let numberList1, numberList2 = [];

// Pedimos al usuario que nos diga la longitud que quiere para los Arrays (Ej. 10).
let listLenght = parseInt(prompt("Indique la longitud deseada: ")); 

// Creamos la primera colección de números aleatórios.
numberList1 = fillNumberArray(listLenght, minNum, maxNum);
console.table(numberList1);

// Creamos la segunda colección tomando de forma aleatoria un elemento de la primera lista.
for (let i = 0 ; i < numberList1.length; i++) {
    numberList2.push(numberList1[getRandomInt(1, numberList1.length)]); 
}
console.table(numberList2);

// Llamámos a la función para crear un nuevo array con la multiplicacion de los valores. 
console.table(multArrays(numberList1, numberList2));
