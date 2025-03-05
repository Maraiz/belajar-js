const map = new Map();
map.set("baju", '50000');
map.set("topi", '70000');
map.set("jaket", '80000');

map.delete("baju");
console.log(map);


const maps = new Map ([
    ['Nasi Goreng', 150000],
    ['Mie Ayam', 130000],
    ['Es Buah', 100000],
    ['Es Teh', 4000],
    ['Es Jeruk', 4000],
])

maps.delete("Es Teh");
console.log(maps);