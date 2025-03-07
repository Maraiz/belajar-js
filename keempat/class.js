    class  Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        eat() {
            console.log(`${this.name} is eating`);
        }
        eats() {
            console.log(`umurku ${this.age}`);
        }
    }

    const Person1 = new Person ('Maulana', 25);
    const Person2 = new Person ('Lana', 30);

    console.log(Person1.name);

    Person1.eat();

    console.log(Person2.age);

    Person2.eats();
    