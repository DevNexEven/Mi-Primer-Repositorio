/* const persona = {
    Nombres: 'Mario Evenezer',
    Apellidos: 'Luna Vargas',
    Fecha_Nacimiento: '23-10-2002',
    Edad: 22,
    Vivo: 'True',
    Padres: ['Mario', 'Consuelo'],
    Lugar_Nacimiento: {
        Ciudad: 'Culiacan',
        Estado: 'Sinaloa',
        Pais: 'Mexico'
    }
}; */

/* console.log(persona);

delete persona.Edad;

console.log('Padre', persona.Padres[0])
console.log('Madre', persona.Padres[1])

console.log(persona);

console.log('Nombres:', persona.Nombres);
console.log('Apellidos:', persona.Apellidos);
console.log('Fecha de nacimiento:', persona.Fecha_Nacimiento);
console.log('Vivo:', persona.Vivo);


persona.Padres[0] = 'Mario Antonio';
persona.Padres[1] = 'Maria Conzuelo';

console.log(persona);


const entriesPares = Object.entries(persona);
console.log(entriesPares); */

const personaje = {
    Nombre: 'Michael',
    Dinero: '30000',
    Ubicacion: 'Los santos',
    Vida: 100,
    posicion: {
        x: 175,
        y: -25
    }
}

Object.freeze(personaje);
personaje.vivo = true;
personaje.Ubicacion = 'Casa';

personaje.posicion.x = 18;

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const values = Object.values(personaje);

console.log(propiedades, values);