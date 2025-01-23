const heroes = ['Batman, Superman, Wonder, Flash'];


// For tradicional
console.warn('For tradicional');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}



// For in
console.warn('For in');

for (let i in heroes) {
    console.log(heroes[i]);
}

// For of
console.warn('For of');

for (let heroe of heroes) {
    console.log(heroe);
}