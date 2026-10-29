/*
Define una función a la que le pasaremos un ángulo y la función trigonométrica a aplicar y nos devolverá el resultado de aplicar la función trigonométrica 
y mostrará en el documento la operación aplicada con el resultado.
*/

let angulo = parseInt(prompt("Introduce un angulo"));
let eleccion = prompt("Elige si quieres calcular el seno el coseno o la tangente");

function calcularAngulo(){

    let texto1 = "coseno";
    let texto2 = "seno";

    if(eleccion.toLocaleLowerCase = texto1){
        let anguloRadianes = angulo *(Math.PI/180);
        let resultadoCoseno = Math.cos(anguloRadianes);

        console.log(resultadoCoseno);
    }else if(eleccion.toLocaleLowerCase = texto2){
        let resultadoSeno = Math.sin(anguloRadianes);

        console.log(resultadoSeno);
    }else{
        let resultadoTangente = Math.tan(anguloRadianes);

        console.log(resultadoTangente);
    }
}