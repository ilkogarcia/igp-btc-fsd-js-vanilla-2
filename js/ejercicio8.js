// Ejercicio 8. Crear un array y mostrarlo por consola.

/* 
Crea un array de 10 posiciones de números con valores pedidos por prompt.
Muestra por consola el índice y el valor al que corresponde. Haz dos métodos,
uno para rellenar valores y otro para mostrar
*/

// Rellena el array con valores que pedimos al usuario.
const fillArray = (arrayLenght) => {
    let arrayNumber = [];
    for (i = 0; i < arrayLenght; i++) {
        arrayNumber.push(prompt("Introduzca valor para posición " + i + " del arreglo:"));
    }
    return arrayNumber;
}

// Muestra el array por consola.
const showArray = (arrayNumber) => {
    console.table(arrayNumber);
}


// Pedimos al usuario que nos diga la longitud que quiere para el Array (Ej. 10)
let lenghtArray = parseInt(prompt("Indique el número total de posiciones: ")); 

// Llamamos a la funcion que nos completará el arreglo.
const arrayNumber = fillArray (lenghtArray);

// Mostramos el arreglo por consola.
showArray(arrayNumber);