

class Rectangulo {
    area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.calcularArea();
    }

    calcularArea() {
        this.area = this.base * this.altura;
    }
}


const Rectangulo1 = new Rectangulo(10, 15);
console.log(Rectangulo1);
Rectangulo1.area = 100;
console.log(Rectangulo1);

const Rectangulo2 = new Rectangulo(10, 10);
console.log(Rectangulo2);