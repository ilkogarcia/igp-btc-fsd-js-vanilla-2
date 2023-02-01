// Ejercicio 7. Conversor de monedas.

/* 
Crea una aplicación que nos convierta una cantidad de euros introducida por
prompt a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como 
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio. 
El cambio de divisas es: 0.86 libras es un 1, 1.28611 $ es un 1 €, 129.852 yenes es un 1 €
*/

// Pedimos al usuario la cantidad en Euros y la convertimos a un número decimal.
let amountEuros = parseFloat(prompt("Cantidad en € que desea convertir: "));

// Escribimos en la página la cantidad de euros entrada por el usuario.
document.write (amountEuros + '€ <br>');

// Preguntamos al usuario en que moneda convertir dicha cantidad de Euros.
let opcion = prompt("A que moneda desea realizar la conversión: (Y)enes, (L)ibras o (D)olares");

// Función para convertir a dólares según cambio: 1.28611 $ es un 1.00€
const convertDolares = (amount) => {
    let res = amount * 1.28611;
    return res.toFixed(2);
}

// Función para convertir a libras según cambio: 0.86 libras es un 1.00€
const convertLibras = (amount) => {
    let res = amount * 0.86;
    return res.toFixed(2);
}

// Función para convertir a yenes según cambio: 129.852 yenes es un 1.00€
const convertYenes = (amount) => {
    let res = amount * 129.852;
    return res.toFixed(2);
}

switch (opcion.toUpperCase()) {

    case 'Y':
        document.write(convertYenes(amountEuros) + '¥');
        break;

    case 'L':
        document.write(convertLibras(amountEuros) + '£');
        break;

    case 'D':
        document.write(convertDolares(amountEuros) + '$');
        break;
    
    default:
        console.log('Seleccione una opción de menu válida')
        break;
}