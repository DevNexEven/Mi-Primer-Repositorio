/* const retornaTrue = () => console.log('True'); true;

const retornaFalse = () => console.log('False'); false;

console.warn('Not o negacion');
console.log(true); // true
console.log(false)
console.log(!true); // false
console.log(!false); // true

console.warn('And o conjuncion');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.warn('Or o disyuncion');
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.warn('Operadores de comparacion');
console.log(1 === 1); // true
console.log(1 === '1'); // false
console.log(1 !== 1); // false
console.log(1 !== '1'); // true
console.log(1 < 2); // true
console.log(1 > 2); // false
console.log(1 <= 1); // true
console.log(1 >= 2); // false */

console.warn('asignacion');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const soyVerdadero = true;

const a1 = true && 'Hola Mundo' && 150 && soyUndefined && soyNull && soyFalso && soyVerdadero;

const a2 = 'Hola' && 'Mundo' && soyFalso && 150;

const a3 = soyFalso || soyFalso || false || false || soyNull || soyUndefined ||  'Ya no soy falso';

console.log({a3});