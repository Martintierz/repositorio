/*
El ejercicio consiste en la gestión de una agenda de eventos. Los eventos se almacenarán en un array que formará parte del objeto agenda. 
El programa se organiza en tres partes: las clases que representan los datos, el objeto agenda, que contiene los eventos y los métodos para gestionarlos, 
y el programa principal, que muestra el menú y es el único que se comunica con el usuario.
*/
//Objetos
class Invitado{
    constructor(nombreInvitado, email){
        this.nombreInvitado = nombreInvitado;
        this.email = email;
    }

    comprobadorEmail(){
        let emailComprobar = String(this.email);

        if(emailComprobar.includes("@")){
            console.log("Formato del email es correcto");
        }else{
            alert("El formato del Email es Incorrecto");
        }
    }

}

class Alertas{
    constructor(ano, mes, dia, hora, minutos, textoAlerta, timerID, activa){
        this.fechaHora = new Date(ano, mes -1, dia, hora, minutos);
        this. textoAlerta = textoAlerta;
        this.timerID = timerID;
        this.activa = true;
    }
}

class Evento{
    constructor(nombreEvento, ano, mes, dia, hora, minutos, lugar, invitados = [], alertas = []){
        this.nombreEvento = nombreEvento;
        this.fechaHora = new Date(ano, mes -1, dia, hora, minutos);
        this.lugar = lugar;
        this.invitados = [...invitados];
        this.alertas = [...alertas];
    }

    anadirInvitados(){
        let nombreI = prompt("Introduce el nombre del invitado");
        let emailI = String(prompt("Introduce el email del invitado"));

        const nuevo = new Invitado(nombreI,emailI);
        this.invitados.push(nuevo);
    }

    anadirAlerta(Alertas){
        let anoA = prompt("Introduce año alerta");
        let mesA = prompt("Introduce mes alerta");
        let diaA = prompt("Introduce el dia de la alerta");
        let horaA = prompt("Introduce la hora de la alerta");
        let minutosA = prompt("Introduce los minutos de la alerta");
        let timerIDA = promt("Introduce el id de la Alerta");
        let activaA = true;

        const nueva = new Alertas(anoA, mesA, diaA, horaA, minutosA, timerIDA, activaA);
        this.alertas.push(nueva);
    }

}

class alerta {
    constructor(eventos = []){
        this.eventos = [...eventos];

    }

    anadirEvento(){
        let nombreEvento = prompt();
        let ano = prompt();
        let mes = prompt();
        let dia = prompt();
        let hora = prompt();
        let minutos = prompt();
        let lugar = prompt();

        anadirInvitados();
        anadirAlerta();

        const eventoNuevo = new Evento();
    }
}

function main(){
    //Menu
    let opcion;

    do{
        opcion = prompt("||---Menu Eventos---||"+ "\n" + "1-Añadir Evento" + "\n" + "2-Borrar Evento" + "\n" + "3-Modificar evento" + "\n" + "4-Desactivar las Alertas de un evento" + "\n" + "5-Borrar eventos pasados" + "\n" + "6-Salir mostrando la agenda sin guardar los cambios en el LocalStorage" + "\n" + "7-Salir guardando y mostrando la agenda" + "\n" + "Introduce el numero correspondiente a la opcion");

        switch(opcion){
            case "1":{
                
                break;
            }
            case "2":{
                break;
            }
            case "":{
                break;
            }
            case "":{
                break;        
            }
            case "":{
            
            }
            case "":{
                break;   
            }
            case "":{
                break;
            }
            default:{
                alert("Opcion no valida");
                break;
            }
        }
    }while(opcion !==7);
}

console.log(main());


