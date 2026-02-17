// every -> true / false -> if all conditions are true

let arr1 = [10, 18, 2, 4, 6, 12];

// Check if all elements are even or not?

console.log(
    "All Elements of \n",
    arr1,
    "\nis even ? ",
    arr1.every((element) => {
        return element % 2 == 0;
    })
);

arr2 = [5, -3, 10, 18, 2, 4, 6, 12];

console.log(
    "All Elements of \n",
    arr2,
    "\nis even ? ",
    arr2.every((element) => {
        return element % 2 == 0;
    })
); 