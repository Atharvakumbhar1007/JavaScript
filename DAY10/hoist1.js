// HOISTING

//function call
sayHello();

//function definition -> sunction declaration
function sayHello() {
    console.log("Hello from function");

    function demo() {
        console.log("I am Demo inside say Hello");
    }
}