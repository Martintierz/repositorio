/*
Crea una función sumar(numeros) que devuelva la suma de todos los elementos de 
un array numérico. Con un array vacío debe devolver 0.
*/

const numeros = [1,2,3,4];
const sumaNumeros = numeros.map(n=> n+n);

console.log(sumaNumeros);

const numeros2 = [5];
const sumaNumeros2 = numeros2.map(n=> n+n);

console.log(sumaNumeros2);