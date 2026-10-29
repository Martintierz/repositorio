/*
Define una función a la que le pasaremos un número y el tipo de redondeo a realizar. La función devolverá el resultado del 
redondeo y además mostrará el valor del redondeo en el documento junto a un mensaje indicando el tipo de redondeo.
*/

let numero = prompt("introduce un numero con decimales");

console.log(Math.round(numero));

if(numero < Math.round(numero)){
    console.log("Ha redondeado para arriba");
}else{
    console.log("Ha redondeado para abajo");
}