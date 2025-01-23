/* const fher = {
    nombre: 'Fernando',
    edad: 36,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 26,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = {
    nombre: 'Maria',
    edad: 19,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
} */

// fher.imprimir();

function Persona(nombre, apeido, edad) {
    this.nombre = nombre;
    this.apeido = apeido;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} ${apeido} - edad: ${this.edad}`);
    }
}

const mario = new Persona('Evenezer', 'Luna', 22);
const cristopher = new Persona('Cristopher', 'Rivas', 22);

mario.imprimir();
cristopher.imprimir();