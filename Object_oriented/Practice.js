class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    species() {
        console.log(this.name + " is Indian Animal");
        console.log(this.age + " years old");

    }
}
class Mammals extends animal {
    constructor(name, age, gur) {
        // this.name = name;
        super(name, age);
        //this is parent contructor(parameters)
        this.gur = gur;
    }
    greet() {
        console.log(this.gur + " are Happy.");
    }
}


class Dog extends Mammals {
    constructor(name, age, gur, breed) {
        super(name, age, gur, true); //call parent contructure
        this.breed = breed;
    }
    bite() {
        console.log(this.breed + " is not bitting ");
    }
}


//create Object
let dog = new Dog("Simba", 8, "dogs", "Labrador-cross");

dog.greet(); //call from mammals
dog.bite();  //call from Dog
dog.species(); //call from Animals