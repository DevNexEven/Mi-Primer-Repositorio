

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


const Mario = new Persona('Mario', 22, 'Hola amigos');
const cristopher = new Persona('Cristopher', 22, 'Hola mundo');
const maui = new Persona('Maui', 22, 'Hola a todos');
/* Mario.saludar();
Mario.imprimirDatos();
Mario.frase_favorita();
cristopher.saludar(); */

console.warn('Mario');
console.log(Mario);
console.warn('Cristopher');
console.log(cristopher);
console.warn('Maui');
console.log(maui);

Mario.setVivo = false;
cristopher.setVivo = false;
maui.setVivo = false;
Mario.setNombre = 'Mario Evenezer';
maui.setNombre = 'Maui Eloy';
Mario.setEdad = 23;
maui.setEdad = 24;
Mario.setFraseFavorita = 'Hola amigos, soy Mario';
Mario.setCurp = 'EVEN000000HDFRRR0';
Mario.setNemesis = 'Cristopher';
cristopher.setNemesis = 'Mario';


console.warn('Mario');
console.log(Mario);
console.warn('Cristopher');
console.log(cristopher);
console.warn('Maui');
console.log(maui);

Mario.getFraseFavorita;

console.log(Mario.getFraseFavorita);

// console.log('Conteo stático', Persona._conteo);

console.log(Persona.staticConteo);

Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);