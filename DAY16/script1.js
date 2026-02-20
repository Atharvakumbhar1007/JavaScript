let image = document.querySelector('#mainImage');
//MANIPULATING STYLE WITH JS

console.dir(image);

image.style.borderBottom = "4px dotted red";

image.style.borderBottom = "20px";

console.log(image.style);

let h2 = document.querySelector("h2");
console.log(h2.innerHTML);
console.backgroundColor = "Yellow";
h2.style.color = "red";
h2.style.textDecoration = "underline";

console.log(h2.style);

let allLists = document.querySelectorAll("li");
console.log(allLists);

for (let list of allLists) {
    allLists.style.textDecoration = "none";
    list.style.color = "green";
}

let allListLinks = document.querySelectorAll(".list-item a");

for (let list of allListsLinks) {
    allLists.style.textDecoration = "none";
    list.style.color = "green";
}