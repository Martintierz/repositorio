/*
Crea una función pares(numeros) que devuelva un nuevo array con los números pares.
El array original no debe modificarse.
*/

const num = [1, 2, 3, 4, 5, 6, 7, 8];
const resultado = num.filter(n => n % 2 === 0);

console.log(resultado);