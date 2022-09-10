// Latihan Inheritance dan Encapsulation
// Prajudi William Chrisdeardo
// Willi Sianturi
// Minggu, 4 September 2022
// Full Stack JavaScript Web Developer Tingkat Menengah

/* Bikin class Person dengan attribut dasar:
1. name
2. age

Bikin subclass Programmer dan Student dan berikan attribut tambahan:
1. skills di class Programmer
2. scores di class Student

Manfaatkan konsep Inheritance dan Encapsulation.
*/

class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    set setName(name){
        this._name = name;
    }
    set setAge(age){
        this._age = age;
    }
}

class Programmer extends Person{
    constructor(name, age, skills){
        super(name, age);
        this._skills = skills;
    }
    get skills(){
        return this._skills;
    }
    set setSkills(skills){
        this._skills = skills;
    }
}

class Student extends Person{
    constructor(name, age, scores){
        super(name, age);
        this._scores = scores;
    }
    get scores(){
        return this._scores;
    }
    set setScores(scores){
        this._scores = scores;
    }
}

let person = new Person("Willi",29);
let programmer = new Programmer("Darwis",28,["js"]);
let student = new Student("Nike",19,[87]);
// console.log(person);
console.log(programmer.name);
console.log(student.age);