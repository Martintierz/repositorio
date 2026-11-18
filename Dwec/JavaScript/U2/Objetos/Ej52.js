/* 
Escribe una función mostrarFicha(objeto) que reciba cualquier objeto y 
muestre cada propiedad en una línea con el formato clave: valor.
Debe funcionar con objetos que tengan cualquier número de propiedades. ¿Qué ocurre con los métodos?
*/

const juego = {
    titulo: "CyberPunk2077",
    plataforma: "Multiplataforma",
    AñoLanzamiento: "2020",
    precio: 24
}

function mostrarFicha(juego){
    return juego;
}

console.log(mostrarFicha());

