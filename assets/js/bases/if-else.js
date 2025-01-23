

let a = 11;

/* if (a > 10) {
    console.log('a is greater than 10');
} else {    
    console.log('a is less than 10');
} */

// a>10 ? console.log('a is greater than 10') : console.log('a is less than 10'); 

// console.log('End of the program');

const hour = new Date().getHours();
const minutes = new Date().getMinutes();
const hoy = new Date();

/* console.log({hour});
console.log({minutes}); */

let dia = hoy.getDate();
// console.log({dia});
let diaSemana = hoy.getDay();
let mes = hoy.getMonth();
// console.log({mes});

switch (mes){
    case 0:
        mes = 'Enero';
        // console.log('Enero');
        break;
    case 1:
        mes = 'Febrero';
        // console.log('Febrero');
        break;
    case 2:
        mes = 'Marzo';
        // console.log('Marzo');
        break;
    case 3:
        mes = 'Abril';
        // console.log('Abril');
        break;
    case 4:
        mes = 'Mayo';
        // console.log('Mayo');
        break;
    case 5:
        mes = 'Junio';
        // console.log('Junio');
        break;
    case 6:
        mes = 'Julio';
        // console.log('Julio');
        break;
    case 7:
        mes = 'Agosto';
        // console.log('Agosto');
        break;
    case 8:
        mes = 'Septiembre';
        // console.log('Septiembre');
        break;
    case 9:
        mes = 'Octubre';
        // console.log('Octubre');
        break;
    case 10:
        mes = 'Noviembre';
        // console.log('Noviembre');
        break;
    case 11:
        mes = 'Diciembre';
        // console.log('Diciembre');
        break;
    default:
        // console.log('No es un mes del año');
        break;
}


switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo';
        // console.log('Domingo');
        break;
    case 1:
        diaSemana = 'Lunes';
        // console.log('Lunes');
        break;
    case 2:
        diaSemana = 'Martes';
        // console.log('Martes');
        break;
    case 3:
        diaSemana = 'Miercoles';
        // console.log('Miercoles');
        break;
    case 4:
        diaSemana = 'Jueves';
        // console.log('Jueves');
        break;
    case 5:
        diaSemana = 'Viernes';
        // console.log('Viernes');
        break;
    case 6:
        diaSemana = 'Sabado';
        // console.log('Sabado');
        break;
    default:
        console.log('No es un dia de la semana');
        break;
}

/* console.log(`Buenos dias evenezer hoy es: ${diaSemana} ${dia} de ${mes} y son las ${hour}:${minutes}`); */

alert(`Buenos dias evenezer hoy es: ${diaSemana} ${dia} de ${mes} y son las ${hour}:${minutes}`);


diaPrueba = 32;

diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
};

console.log('Hoy es: ', diasLetras[diaPrueba] || 'No es un dia de la semana');