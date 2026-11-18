class Invitado{
    constructor(nombreInvitado, email){
        this.nombreInvitado = nombreInvitado;
        this.email = email;
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
    constructor(nombreEvento, ano, mes, dia, hora, minutos, lugar, invitados, alertas){
        this.nombreEvento = nombreEvento;
        this.fechaHora = new Date(ano, mes -1, dia, hora, minutos);
        this.lugar = lugar;
        this.invitados = [];
        this.alertas = [];
    }

    anadirInvitados(Invitado){
       this.invitados.push(Invitado);
    }

    anadirAlerta(Alertas){
        this.alertas.push(Alertas);
    }

    mostrarEvento(){
        
    }

}

 const invitado1 = new Invitado("Koke", "Koke@gmail.com");
 //const alerta1 = new Alertas(2026, 11, 22, 20, 30, "La fiesta a comenzado", );

let opcion;

do{
    opcion = prompt(
        "||---Menu Eventos---||"+ "\n" + "1-Añadir Evento" + "\n" + "2-Borrar Evento" + "\n" + "3-Modificar evento" + "\n" + "4-Desactivar las Alertas de un evento" + "\n" + "5-Borrar eventos pasados" + "\n" + "6-Salir mostrando la agenda sin guardar los cambios en el LocalStorage" + "\n" + "7-Salir guardando y mostrando la agenda" + "\n" + "Introduce el numero correspondiente a la opcion"
    );

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
