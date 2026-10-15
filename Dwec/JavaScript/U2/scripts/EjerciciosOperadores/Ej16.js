/*
Dado el siguiente código, muestra por consola el resultado de 
cantidad || 10 y de cantidad ?? 10 para cada una de las variables. 
¿En qué casos dan resultados distintos? Si el valor 0 fuera una 
cantidad válida, ¿qué operador usarías? Razona la respuesta.
*/

let cantidad1;
let cantidad2 = null;
let cantidad3 = 0;
let cantidad4 = "";
let cantidad5 = 5;

console.log(cantidad1||10);//10
console.log(cantidad1??10);//10
console.log(cantidad2||10);//10
console.log(cantidad2??10);//No null Si 10
console.log(cantidad3||10);//10
console.log(cantidad3??10);//No null Si 0
console.log(cantidad4||10);//10
console.log(cantidad4??10);//No 0 Si nada
console.log(cantidad5||10);//5
console.log(cantidad5??10);//5