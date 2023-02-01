// Ejercicio 9. Crear un array, mostrarlo por consola y sumar sus elementos.

/* 
Crea un array de números donde le indicamos por prompt el tamaño del array, 
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por 
consola el valor de cada posición y la suma de todos los valores. Tareas a 
realizar: Haz un método para rellenar el array(que tenga como parámetros los
números entre los que tenga que generar) y otro para mostrar el contenido y
la suma del array.
*/

// Genera un número aleatorio entre min y max, incluyendo ambos extremos.
const getRandomInt = (min, max) => {
    min = Math.ceil(min);           // Devuelve el entero mayor o igual más próximo a un número dado..
    max = Math.floor(max);          // Devuelve el máximo entero menor o igual a un número.
    return Math.floor(Math.random() * (max - min) + min);
}

// Rellena el array con valores que pedimos al usuario.
const fillArray = (lenght, min, max) => {
    let arrayNumbers = [];
    for (i = 0; i < lenght; i++) {
        arrayNumbers.push(getRandomInt(min,max));
    }
    return arrayNumbers;
}

// Muestra el array por consola y la suma de sus elementos.
const showArray = (numbers) => {
    console.table(numbers);                         // Muestra el array en la consola.
    let total = 0;
    for (let i = 0 ; i < numbers.length; i++) {     // Calcula la sumatoria de sus elementos.
        total += numbers[i];
    }
    console.log("La suma total de elementos es: " + total);
    return;
}

// Pedimos al usuario que nos diga la longitud que quiere para el Array (Ej. 10)
let listLenght = parseInt(prompt("Indique el número total de posiciones: ")); 

// Llamamos a la funcion que nos completará el arreglo con valores aleatorios entre 0 y 9.
const numberList = fillArray (listLenght, 0, 9);

// Mostramos el arreglo por consola.
showArray(numberList);