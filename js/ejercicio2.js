// Ejercicios JavaScript Vanilla (II) : Ejercicio 2.

let randomNumbers = parseInt(prompt("¿Cuantos números aleatorios quiere generar?"));
let minValue = parseFloat(prompt("Número inicial del rango... "));
let maxValue = parseFloat(prompt("Número final del rango... "));

/* Javascript and other programming languages implement randomness using “pseudo-random” number generation. Javascript random numbers start from a hidden internal value called a “seed.” The seed is a starting point for a hidden sequence of numbers that are uniformly distributed throughout their possible range. */

// Genera un número aleatorio entre min y max, incluyendo ambos extremos.
function GetRandomInt(min, max) {
    min = Math.ceil(min);   // Devuelve el entero mayor o igual más próximo a un número dado..
    max = Math.floor(max);  // Devuelve el máximo entero menor o igual a un número.

    return Math.floor(Math.random() * (max - min) + min);
}

for (i = 1; i <= randomNumbers; i++) {
    console.log(GetRandomInt(minValue,maxValue));
}
