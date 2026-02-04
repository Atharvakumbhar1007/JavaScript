// Array in JS
let marks = [1, 2, 3, 4, 5, 6];

console.log("marks are:- " + marks);
console.log("marks at 0 index:- " + marks[0]);

// length of array
console.log("length of array:- " + marks.length);

// update value in array
marks[2] = 7;
console.log("updated marks are:- " + marks);

// for loop
for (let i = 0; i < 3; i++) {
    console.log("marks at index " + i + " is: " + marks[i]);
}

// for-in loop
for (let num in marks) {
    console.log("marks at index " + num + " is: " + marks[num]);
}

// array methods
marks.push(7);
console.log(marks);

marks.pop();
console.log(marks);

marks.unshift(50);
console.log(marks);

marks.shift();
console.log(marks);

// includes method
console.log(marks.includes(90));

// function to find sum of array
function sumarray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumarray(marks));

let addmarks = marks.map(n => n+2)
console.log(addmarks)  

let mulmarks = marks.map(n => n*n)
console.log(addmarks) 

let even = marks.filter(n => n % 2 ===0)
console.log(even)

let odd = marks.filter(n => n % 2 != 0)
console.log(odd) 