// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Primer challenge, prueba

/* Pregunta al usuario qué día de la semana es.
Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".
De lo contrario, muestra "¡Buena semana!".
*/

let diaSemana = prompt("¿Qué día se la semana es?");

if (diaSemana == "Sábado" || diaSemana == "Domingo") {

    alert("¡Buen fin de semana!");

} else {

    alert("¡Buena semana!");
}

//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
/*Crea un sistema de puntuación para un juego.
Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
En caso contrario, muestra "Intentalo nuevamente para ganar."*/


let puntuacion = 0;

while (puntuacion >= 0 && puntuacion < 200) {
        let numeroIngresado = prompt("Ingresa un número");
        if (numeroIngresado >0) {
        console.log(`El número ${numeroIngresado} es positivo, has ganado 100 puntos`);
        puntuacion += 100;
        } else {
    
        console.log("El número " + numeroIngresado + " es negativo, no has ganado puntos");
        puntuacion += 0;
        }
}

if (puntuacion >= 100) {

    console.log("¡Felicidades, has ganado!");
} else {

    console.log("Inténtalo nuevamente para ganar");
}

/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
utilizando un template string para incluir el valor del saldo.*/
let saldoCuenta = 50;
console.log("El saldo de su cuenta es: " + saldoCuenta);

/*Pide al usuario que ingrese su nombre mediante un prompt.
Luego, muestra una alerta de bienvenida usando ese nombre.
*/
let nombreUsuario = prompt("Ingresa tu nombre");
console.log(`¡Bienvenida/o! ${nombreUsuario}`);