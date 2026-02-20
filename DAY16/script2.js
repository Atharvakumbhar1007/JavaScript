//ADD CLASS / REMOVE CLASS
//CLASSlist

let mainImage = document.querySelector("#mainImage");

console.log(mainImage.classList);

mainImage.classList.add("hidden");

console.log(mainImage.classList);

setTimeout(() => {
    if (mainImage.classList.contains("hidden")) {
        console.log("Removing hidden class");
        mainImage.classList.remove("hidden");
    } else {
        console.log("Class hidden not found");
    }
}, 2000);