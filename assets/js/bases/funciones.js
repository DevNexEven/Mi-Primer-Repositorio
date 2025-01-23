/* function saludar(Nombre){
    console.log(arguments);
    alert(`Hola ${Nombre}`);
} */

/* const saludar2 = function(Nombre){
    console.log(`Hola ${Nombre}`);
} */

/* saludar('Evenezer'); */
/* saludar2('Evenezer2'); */

/* saludar('Mario', 22, true, 'Culiacan'); */

/* const saludarFlecha = () => {
    console.log('Hola desde la flecha');
} */

/* const saludarFlecha = (Nombre) => {
    console.log(`Hola desde la flecha ${Nombre}`);
    if(!Nombre){
        return 'No hay nombre';
    }else{
        return `Mi nombre es ${Nombre}`;
    }
}

console.log(saludarFlecha('Saul'));

saludarFlecha('Evenezer'); */


const saludar = (Nombre, Apellido) => `Hola ${Nombre} ${Apellido}`;
console.log(saludar('Mario', 'evenezer'));


const GetAlearorio = () => Math.random();

console.log(GetAlearorio());