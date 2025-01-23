

/* class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
} */



class Singleton {
    static instance;
    nombre = '';

    constructor(nombre = '') {

        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('SpiderMan');
const instancia3 = new Singleton('Hulk');


console.log('El nombre de la instancia 1 es: ', instancia1.nombre);
console.log('El nombre de la instancia 2 es: ', instancia2.nombre);
console.log('El nombre de la instancia 3 es: ', instancia3.nombre);

// true