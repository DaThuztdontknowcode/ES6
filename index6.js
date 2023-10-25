// Lớp Person
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

// Lớp Programmer kế thừa từ lớp Person
class Programmer extends Person {
    constructor(name, programmingLanguage) {
        super(name);
        this._programmingLanguage = programmingLanguage;
    }

    get programmingLanguage() {
        return this._programmingLanguage;
    }

    set programmingLanguage(newLanguage) {
        this._programmingLanguage = newLanguage;
    }

    writeCode() {
        console.log(`${this.name} is writing code in ${this.programmingLanguage}.`);
    }
}

// Khai báo đối tượng thuộc lớp Person
const person = new Person("John");
console.log(person.name); // In ra "John"
person.walk(); // In ra "John is walking."

// Khai báo đối tượng thuộc lớp Programmer
const programmer = new Programmer("Alice", "JavaScript");
console.log(programmer.name); // In ra "Alice"
console.log(programmer.programmingLanguage); // In ra "JavaScript"
programmer.walk(); // In ra "Alice is walking."
programmer.writeCode(); // In ra "Alice is writing code in JavaScript."
