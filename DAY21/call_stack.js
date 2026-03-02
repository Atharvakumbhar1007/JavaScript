function addition() {
    let result = sumOfTwo() + sumOfOne();

    console.log(result);
}

function sunOfOne() {
    return 1;
}
function sumOfOne() {
    return 1;
}
function sumOfTwo() {
    return sumOfOne() + sumOfTwo();
}
addition();