class Persona {

    static _conteo = 0;

    static get staticConteo() { return Persona._conteo + ' instanciass'; }

    static mensaje() { console.log(this.nombre); console.log('Hola a todos, soy un método estático'); }

    nombre = '';
    edad = 0;
    fraseFavorita = '';
    vivo = true;
    nemesis = '';
    _curp = 'MAGJ000000HDFRRR0';

    constructor(nombre, edad, fraseFavorita) {
        this.nombre = nombre;
        this.edad = edad;
        this.fraseFavorita = fraseFavorita;

        Persona._conteo++;
    }

    set setVivo(vivo) { this.vivo = vivo; }

    set setNemesis(nemesis) { this.nemesis = nemesis.toUpperCase(); }

    set setNombre(nombre) { this.nombre = nombre; }

    set setEdad(edad) { this.edad = edad; }

    set setFraseFavorita(fraseFavorita) { this.fraseFavorita = fraseFavorita; }

    set setCurp(curp) { this._curp = curp; }

    get getCurp() { return this._curp; }

    get getVivo() { return this.vivo; }

    get getNemesis() { return this.nemesis; }

    get getNombre() { return this.nombre; }
    
    get getEdad() { return this.edad; }

    get getFraseFavorita() { return `La frase favorita de ${this.nombre} es ${this.fraseFavorita}` }

    
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }

    frase_favorita() {
        console.log(`Mi frase favorita  es: ${this.fraseFavorita}`);
    }

    imprimirDatos() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor(nombre, edad, fraseFavorita, clan) {
        super(nombre, edad, fraseFavorita);
        this.clan = clan;
    }

    saludar() {
        console.log(`Soy ${this.nombre} y pertenezco al clan ${this.clan}`);
    }
}


const spiderman = new Heroe('Peter Parker', 22, 'Soy Spiderman', 'Los Vengadores');


console.log(spiderman);

spiderman.saludar();
// const spiderman = new Persona('Peter Parker', 22, 'Soy Spiderman');