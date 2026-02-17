let arr = [5, 15, 10, 11, 4, 5, 9, -6, -8, -10, -2, 7, 1, 15, 12,];

//FILTER -> Return Array in which conditions are true
let evenElements = arr.filter((element) => {
    return element % 2 == 0;
});

console.log(evenElements);

let newPositiveEven = arr.filter((element) => {
    return element > 0 && element % 2 == 0;
});

console.log(newPositiveEven);