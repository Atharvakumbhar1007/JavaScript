class Mammals {
    constructor(name, gur) {
        this.name = name;
        //this is parent contructor(parameters)
        this.gur = gur;
    }
    greet() {
        console.log(this.name + " is Happy.");
    }
}

class Dog extends Mammals {
    constructor(name, breed) {
        super(name, true); //call parent contructure
        this.breed = breed;
    }
    bite() {
        console.log(this.name + " not bitting ");
    }
}

//create Object
let dog = new Dog("Simba", "Labrador-cross");

dog.greet(); //call from mammals
dog.bite();  //call from Dog