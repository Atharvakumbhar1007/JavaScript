// FUNCTION WITH PARAMETERS
function addition(a, b) { //(a,b) => a,b are PARAMETERS
    sum = a + b;
    console.log(`Addititon of ${a}, ${b} = ${sum}`);
}
function addition(a = 0, b = 0, c) {
    sum = a + b + c;
    console.log(`Addition of ${a}, ${b}, ${c} = ${sum}`);
}
addition(4, 9);//(4,9) => 4,9 are ARGUMENTS
addition();
addition(6, 5, 4);