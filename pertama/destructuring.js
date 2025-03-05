// user = {
//     id: 23,
//     name: 'lana',
//     umur: 21,
//     asal: "Banyuangi",
// }
// // const{id, name} = user;
// // console.log(id, name);

// const id = user.id;
// const name = user.name;

// console.log(id, name);

user = {
    id: 23,
    name: 'lana',
    umur: 21,
    asal: "Banyuangi",
}
 delete user.age;
 console.log(user);

 delete user['age'];
console.log(user); // Output: { name: 'Dicoding', lastName: 'Indonesia' }