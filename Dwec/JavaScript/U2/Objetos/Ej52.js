/* 
Escribe una función mostrarFicha(objeto) que reciba cualquier objeto y 
muestre cada propiedad en una línea con el formato clave: valor.
Debe funcionar con objetos que tengan cualquier número de propiedades. ¿Qué ocurre con los métodos?
*/

const nombreObjeto=prompt("introduce el nombre del objeto")={
        
}

function mostrarFicha(){
    const nombreObjeto=prompt("introduce el nombre del objeto")={
        propiedad1: prompt("Introduce la primera propiedad"),
        propiedad2: prompt("Introduce la segunda propiedad"),
        propiedad3: prompt("introduce la tercera propiedad"),
        
        valor: function(){
            return this.propiedad1 + " " + this.propiedad2 + " " + this.propiedad3; 
        }

    }

}

console.log();