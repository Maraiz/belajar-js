function Person (name, age) {
    this.name = name;
    this.age = age;
}



Person.prototype.eat = function() {
    console.log(`${this.name} is eating`);
  }


const Person1 = new Person('Maulana', 21);
console.log(Person1.name);
console.log(Person1.age);
Person1.eat();