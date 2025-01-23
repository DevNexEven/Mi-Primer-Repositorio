

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    static porObjeto(persona) {
        return new Persona(persona.nombre, persona.apellido, persona.edad);
    }

    mostrarInfo() {
        return `${this.nombre} ${this.apellido} tiene ${this.edad} años`;
    }
}

const persona1 = new Persona('Juan', 'Perez', 30);

const nombre2 = 'Pepito',
    apellido2 = 'Norris',
    edad2 = 30;

const persona2 = new Persona(nombre2, apellido2, edad2);

const fernanda = {
    nombre: 'Fernanda',
    apellido: 'Miranda',
    edad: 25
}

const persona3 = Persona.porObjeto(fernanda);



console.log(persona1.mostrarInfo());

console.log(persona2.mostrarInfo());

console.log(persona3.mostrarInfo());
