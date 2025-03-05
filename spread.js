const obj1 = {name: 'Maulana', umur: 21};
const obj2 = { asal: "Banyuwangi", prodi: "Teknologi Rekayasa Perangkat Lunak"};
const obj = { ...obj1, ...obj2 };

console.log(obj);
