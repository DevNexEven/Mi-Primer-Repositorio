/* 
 dias de la smeana abrimos a las 11
 pero los fines de semana abrimos a las 9

*/

// Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 0; // 0: domingo, 1: lunes, 2: martes...

const horaActual = 9;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy abrimos a las XX


/* if (dia === 0 || dia === 6) {
    console.log('Fin de semana');
    horaApertura = 11;
} else {
    console.log('Dia de semana');
    horaApertura = 8;
} */

dia === 0 || dia === 6 ? horaApertura = 11 : horaApertura = 9;

/* if(horaActual >= horaApertura) {
    mensaje = 'Esta abierto';
}else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
} */

horaActual >= horaApertura ? mensaje = 'Esta abierto' : mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({mensaje});

console.log(horaApertura);