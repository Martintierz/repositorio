/*
Declara 6 variables a las que asignaremos los siguientes valores. 1357, 135.7, 135e7, 0b1010, 0o1357 y 0x1A57. Una vez creadas muestra por consola los valores almacenados y el tipo de dato que nos indica el operador typeof.
Pide al usuario un  número utilizando el método prompt(), guarda ese dato en una variable. OJO guardarlo de manera que sea un tipo  Number no un String. Compruébalo mostrando por consola el tipo de dato guardado  con el operador typeof.
Pide al usuario dos números con prompt() sin convertirlos. Muestra por consola el resultado de sumarlos con el operador +. A continuación, convierte ambos valores a Number y vuelve a sumarlos, mostrando ahora el resultado correcto.
Pide al usuario que te indique su nombre, apellidos ,  edad y un número del 1 al 10. Almacena cada dato en una variable diferente.  A continuación muestra la siguiente información.
Por consola una frase que incluya su nombre , apellidos y la edad.
En el documento html incluye con formato h3 la misma información.
En un alert muestra la siguiente información “Dentro de número años tendras x años”. Ayuda: usa los backticks para crear un template literal que te permita hacer este ejercicio
Pide al usuario su nombre, una afición y si le gusta programar usando confirm(). Muestra en un párrafo del documento un texto que combine los tres datos usando un único template literal.
Pide al usuario un string, Muestra en el documento la posición que ocupa la primera “a”
Pide al usuario un string con espacios de más al principio o al final. Muestra por consola: el string sin esos espacios, el mismo string en mayúsculas y los 3 primeros caracteres.
Pide al usuario tres strings, debes sustituir en el primer string la primera ocurrencia del segundo string por el contenido del tercer string. ejemplo
string 1 “Hola caracola”
string 2 “cara”
string 3 “era”
resultado a mostrar con un alert “Hola eracola”.
Amplía el ejercicio anterior a todas las ocurrencias.
Pide dos strings al usuario. Debes mostrar el número de veces que el segundo string está incluido en el primero.
*/

let num1 = 1357;
let num2 = 135.7;
let num3 = 135e7;
let num4 = 0b1010;
let num5 = 0o1357;
let num6 = 0x1A57;

let numeros = [num1, num2, num3, num4, num5, num6];

console.log(numeros);

