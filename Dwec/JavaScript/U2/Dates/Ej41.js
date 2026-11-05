/*
Define una función que muestre la fecha actual en diferentes formatos
6/10/2021
Wed Oct 06 2021.
Wed, 06 Oct 2021 15:54:47 GMT
*/
const d = new Date();
let fecha = d.toLocaleDateString();
let fecha2 = d.toDateString();
let fecha3 = d.toTimeString();

console.log(fecha);
console.log(fecha2);
console.log(fecha2, fecha3);