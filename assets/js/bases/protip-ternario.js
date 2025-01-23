/* const elMayor =  (x,y) => { return x > y ? x : y; }    // Ternario

const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares'; // Ternario

console.log(tieneMembresia(true)); // 2 Dólares

console.log(elMayor(50, 10)); // 10 


const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // (() => 'Nick Fury')()
    elMayor(10, 15)
];

console.log(amigosArr); // [ 'Peter', 'Tony', 'Dr. Strange', 'Loki' ] */



const nota = 85;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';

console.log({nota, grado}); // { nota: 85, grado: 'B+' }