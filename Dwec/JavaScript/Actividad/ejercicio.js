/*
El ejercicio consiste en la gestión de una agenda de eventos. Los eventos se almacenarán en un array que formará parte del objeto agenda. 
El programa se organiza en tres partes: las clases que representan los datos, el objeto agenda, que contiene los eventos y los métodos para gestionarlos, 
y el programa principal, que muestra el menú y es el único que se comunica con el usuario.
*/

//Objeto Evento cambiar como hacerlo
const Evento ={
    nombre: prompt("Introduce el nombre del evento"),
    dia: prompt("Introduce el día"),
    mes: prompt("Introduce el mes"),
    ano: prompt("Introduce el año"),
    hora: prompt("Introduce la hora"),
    minutos: prompt("Introduce los minutos"),
    nombreLugar: prompt("Introduce el nombre del Lugar donde se celebra"),
    invitado: Number(prompt("Introduce los numeros de Invitados")),
    alertas: prompt("Introduce el numero de aletas que quieres que tenfa el evento")
}

//metodo añadir Invitado
 function anadirInvitado(){
    let nuevoInvitado = Number(prompt("Introduce los nuevos invitados"));
    let sumarInvitado = (Evento.invitado + nuevoInvitado);
    console.log(sumarInvitado + " se han añadido " + nuevoInvitado + " invitados al evento");
}

console.log(anadirInvitado());


//Objeto Invitado
/*const Invitado={
    nombreInvitado: prompt("Introduce el nombre del Invitado"),
    emailInvitado: prompt("Inrodcuce el email del Invitado")
}
*/
