/*
Define una función a la que le pasaremos dos enteros (limite inferior y límite superior) y 
la función nos devolverá una entero aleatorio en el rango [limiteInferior,limiteSuperior). 
Además mostrará en el documento un mensaje indicando el número aleatorio y el rango en el que se encuentra.
*/

let num1 = parseInt(prompt("Introduce un numero entero"));
let num2 = parseInt(prompt("Introduce otro numer entero"));

let max = Math.max(num1, num2);
let min = Math.min(num1, num2);

console.log(Math.floor(Math.random()*(max-min+1)+min));