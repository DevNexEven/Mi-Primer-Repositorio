/* function crearPersona(Nombre, Apellido){
    return{
        nombre: Nombre,
        apellido: Apellido
    }
} */

/* const crearPersona = (Nombre, Apellido) => ({Nombre, Apellido});

const persona = crearPersona('Mario', 'Evenezer');

console.log(persona); */

/* function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = function( ...args ) {
    // console.log(args);
    return args;
};

const [Nombres, Apellidos, Edad, Empresa, Puesto] = imprimeArgumentos2('Mario evenezer', 'luna vargas', 22, 'Nexgen systems', 'practicante');

console.log(`Hola mi nombre es ${Nombres} ${Apellidos} tengo ${Edad} y actualmente trabajo en ${Empresa} como ${Puesto}`); */


const Hacker = {
    nombre: 'Elliot Alderson',
    codeName: 'Mr. Robot',
    edad: 30,
    vivo: true,
    vestimenta: ['Capucha negra', 'Jeans', 'Ten  shoes'],
}

/* const imprimePropiedades = ( Hacker) => {
    console.log('nombre:', Hacker.nombre);
    console.log('codeName:', Hacker.codeName);
    console.log('edad:', Hacker.edad);
    console.log('vivo: ',Hacker.vivo);
    console.log('vestimenta: ',Hacker.vestimenta);
} */

    const imprimePropiedades = ({nombre, codeName, edad, vivo, vestimenta, trabajo = 'No trabaja'}) => {
        console.log({nombre});
        console.log({codeName});
        console.log({edad});
        console.log({vivo});
        console.log({vestimenta});
        console.log({trabajo});
    }
imprimePropiedades(Hacker);