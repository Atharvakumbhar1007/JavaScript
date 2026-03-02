setTimeout(function () {
    console.log("Hello All I am first time out");
}, 2000);
setTimeout(function () {
    console.log("Hello All I am Second time out");
}, 2000);

//SetTime is not hundlle by JS but handle by browser ->
// bez of  c++

console.log("Hello I am from Outside");

// Callback Hell
// Phle 1st chale complete then run 2nd

// we can create nested callbacks