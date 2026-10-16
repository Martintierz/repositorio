/*
Ordena el array [10, 9, 1, 100, 25] con el método de ordenación de Array sin argumentos. 
Explica por qué el resultado no es el esperado y corrígelo para que se ordene de menor a mayor. 
Después ordénalo de mayor a menor.
*/

const num = [10, 9, 1, 100, 25];

console.log(num.sort(function(a,b){return a-b}));
console.log(num.sort(function(a,b){return b-a}));