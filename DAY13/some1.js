// TRUE / FALSE -> If any 1 condition satisfies TRUE

let arr = [12, 18, 16, 14, 15, 12, 13, 10, 5, 6, 8];

//check if any element in array is divisible by 3 both and 5

console.log(
    "All Elements is divisible by 3 and 5 both of \n",
    arr,
    "\nis ? ",
    arr.some((element) => {
        return element % 3 == 0 && element % 5 == 0;
    })
);