//ADD CLASS / REMOVE CLASS
//CLASSlist

let mainImage = document.querySelector("#mainImage");

console.log(mainImage.classList);

mainImage.classList.add("hidden");//hidden

console.log(mainImage.classList);

setTimeout(() => {
    if (mainImage.classList.contains("hidden")) {
        console.log("Removing hidden class");
        mainImage.classList.remove("hidden"); //remove
    } else {
        console.log("Class hidden not found");
    }
}, 2000);

setTimeout(() => {
    console.log("Toggle between hidden");
    mainImage.classList.toggle("hidden"); //hide
    console.log(mainImage.classList);
}, 2500);

setTimeout(() => {
    console.log("Toggle between hidden");
    mainImage.classList.toggle("hidden");//toggle
    console.log(mainImage.classList);
}, 5000);