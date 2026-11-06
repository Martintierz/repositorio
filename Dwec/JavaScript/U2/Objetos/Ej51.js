/*
Crea un objeto literal  “juego” con estas propiedades: título, plataforma, 
año de lanzamiento, precio y si está completado o no.
Muestra por consola una frase con todos sus datos, por ejemplo: “Hollow Knight (PC, 2017) – 14.99 €”.
Cambia el precio del juego.
Añade una propiedad nueva, nota, con un valor del 1 al 10.
Elimina la propiedad año y comprueba por consola que ya no existe.
Añade al objeto anterior dos métodos:
descripcion(): devuelve la frase del primer apartado, construida a partir de las propiedades del propio objeto.
marcarCompletado(): pone el juego como completado.
*/

const juego = {
    titulo: "CyberPunk2077",
    plataforma: "Multiplataforma",
    AñoLanzamiento: "2020",
    precio: 24,
    completado:"si",

    tituloPrecio: function(){
        return "El juego es " + this.titulo + " y su precio es " + this.precio + "€";
    },

    getPlataforma: function(){
        return "El juego es " + this.plataforma;
    }
};

console.log("El juego es " + juego.titulo +  " es " + juego.plataforma + " salio en el año " + juego.AñoLanzamiento + " su precio es " + juego.precio + "€");

juego.precio = parseInt(prompt("Introduce el nuevo precio del juego"));
console.log("El nuevo precio es " + juego.precio);

juego.nota = parseInt(prompt("Introduce la nota del juego"));
console.log("La nota de " + juego.titulo + " es: " + juego.nota);

delete juego.AñoLanzamiento;
console.log("El juego es " + juego.titulo +  " es " + juego.plataforma + " salio en el año " + juego.AñoLanzamiento + " su precio es " + juego.precio + "€");

console.log(juego.tituloPrecio());
console.log(juego.getPlataforma());
