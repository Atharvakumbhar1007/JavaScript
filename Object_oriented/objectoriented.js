// ES6 Classes
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello" + this.name);
    }
}
let p5 = new person("Alice", 22);
p5.greet();

//INHERITANCE


//PARENT CLASS
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

//CHILD CLASS
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        console.log(this.name + "is studying");
    }
}

//CREATED OBJECT
let s1 = new student("Rahul", 20, "A");
s1.greet();
s1.study();