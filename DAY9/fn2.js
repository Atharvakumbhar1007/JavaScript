// FUNCTION WITH PARAMETERS
function addition(a, b) { //(a,b) => a,b are PARAMETERS
    sum = a + b;
    console.log(`Addititon of ${a}, ${b} = ${sum}`);
}
function addition(C, a = 0, b = 0,) {
    sum = a + b + c;
    console.log(`Addition of ${a}, ${b}, ${c} = ${sum}`);
}
addition(4, 9);//(4,9) => 4,9 are ARGUMENTS
addition();
addition(6, 5, 4);