let car = new Object();

car.name="Innova";
car.no_of_seats=7;
car.engine="ivtech";


console.log("Car Name is " + car.name);
console.log("No of seats in car is " + car.no_of_seats);
console.log("Engine type of car is " + car.engine);


document.getElementById("car_name").innerHTML = "car name is " + car.name;
document.getElementById("car_seats").innerHTML = "no of seats in car is " + car.no_of_seats;
document.getElementById("car_engine").innerHTML = "engine type of car is " + car.engine;


// constructor function
// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// let p = new Person("Sachin", 22, "Panvel");
// console.log("Person Name is " + p.name);
// console.log("Person Age is " +p.age);
// console.log("Person City is " + p.city);

// document.getElementById("p_name").innerHTML = "person name is " + p.name;


// ES6 class
// object creation using  class
// class Person{
//     constructor(name, age, city){
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }   

//     age_category(){
//         if(this.age < 18){
//             console.log(this.name + " is an adult");
//         } else {
//             console.log(this.name + " adult");
//         }
// }
// }

// let p1 = new Person("anas", 23, "Mumbai");
// p1.age_category();

// prototype based object creation
// Object.create()
let Person ={
    greet (){
        console.log("hello everyone");
    }

};

let student = Object.create(Person);
student.name = "sachin";
student.greet();


// factory function
// function createPerson(name, age, city){
//     return {
//         name: name,
//         age: age,
//         city: city
        
//     };
// }

// let p2 = createPerson("sachin", 21, "panvel");
// console.log("person name is " + p2.name);