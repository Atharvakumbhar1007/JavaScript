//Function -> REST PARAMS More than one arguments(...)

function demo(num, ...args) {
    console.log(num);
    console.log(args);
    console.log(typeof args);
}

demo(50, 2, 3, 4, 5, 8);