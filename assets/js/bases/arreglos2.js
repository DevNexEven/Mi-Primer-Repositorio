let juegos = ['GTAV', 'FIFA25', 'FORTNITE'];

console.log('Largo:', juegos.length);

let primerJuego = juegos[0];

let ultimoJuego = juegos[juegos.length-1];


console.log(primerJuego);
console.log(ultimoJuego);

juegos.push('GTA VICE CITY');

juegos.unshift('GRAN TURISMO');

/* juegos.forEach((Juego, Indice, Posicion) => {
    console.log({Juego, Indice, Posicion});
})
 */
/* let juegoBorrado = juegos.pop();

console.log('Juego borrado: ', juegoBorrado)

juegos.forEach((Juego, Indice, Posicion) => {
    console.log({Juego, Indice, Posicion});
}) */

console.log(juegos);

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let Busqueda = juegos.indexOf('GTA VICE CITY');
console.log(Busqueda);
