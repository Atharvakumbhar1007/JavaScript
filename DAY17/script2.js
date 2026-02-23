// Adding Element or Removing Element
/*
1. create -> document.createElement("<tag>");
2. -> add this element to html body or to specific divs
    ADD  
    a. appendChild(element)
    b. append(element) -> Mostyle we will use this -> We can add a String as well as html element
    c. prepend(element) -> Add at the start
    d. insertAdjacent(where_position, element)
    REMOVE
    a. removeChild(element);
    element.remove()
*/

let para = document.createElement("p");
para.innerText = "Hii I am learning JS and I am New";
para.classList.toggle("generated_para");

let body = document.querySelector("body");
//Add to the end of a body
body.appendChild(para);

console.log(body);

/*one element have one parent ->thats why 
it changed from body tp box*/

let box = document.querySelector(".box");

box.append(para);

let span = document.createElement("span");

span.innerText = "Hello New Text Added";

para.appendChild(span);

//para.append("Hello New Text Added");

let button = document.createElement("button");
button.innerText = "Click Here";
para.append(button);
para.append("do not click");
para.prepend(button);

let newButton = document.createElement("button");
newButton.innerText = "Newly Create button";

let paragraph = document.querySelector("p");

console.log(paragraph);
console.log(paragraph.outerHTML);
console.log(paragraph.innerHTML);

//paragraph.insertAdjacentElement("beforebegin", newButton);
//paragraph.insertAdjacentElement("afterbegin", newButton);
//paragraph.insertAdjacentElement("afterend", newButton);
paragraph.insertAdjacentElement("beforeend", newButton);

console.log(paragraph.outerHTML);
para.removeChild(newButton);
para.remove();

body.remove();