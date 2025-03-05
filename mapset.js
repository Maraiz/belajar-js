const map = new Map();
map.set('Jaket', 1500000);
map.set('Baju', 1800000);
map.set('Celana', 1700000);
map.set('Spetau', 2000000);
console.log(map);

const angka = new Map();
angka.set(1, 'nomor satu');
angka.set(2, 'nomor2');
console.log(angka);
console.log(angka.get(1));
console.log(angka.has(2));
console.log(angka.has('nomor 3'));

const maps = new Map();
maps.set('name', 'aras');
console.log(maps.get('name')); 
console.log(map.has('name'));  // Output: true
console.log(map.has('aras'));  // Output: false