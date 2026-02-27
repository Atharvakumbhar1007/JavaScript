const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowerCase");
const symbolsCheck = document.querySelector("#symbols");
const numbersCheck = document.querySelector("#numbers");

const lengthDisplay = document.querySelector("#lengthValue");

const inputSlider = document.querySelector("[dataLengthSlider]");

const symbols = "!@#$%^&*()_+-*/{}[]:><?";
//Utility Functions

function getRandomInteger(min, max) {
    //min = 1, max = 9 ->(0.6 * (9 - 1)) + 1
    //floor(4.8)+1 => 4+1 =5
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumber() {
    return getRandomInteger(0, 9);
}

//Lowercase


//Setting Default Value Of password length to 10
let passwordLength = 10;
let checkboxCheckedCount = 0;

//Intial value in html is 1 thats why changing to 10 by calling function
handleSlider(); //Call

//Function which will handle password length and slider movement
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.textContent = passwordLength;
}

//Add Event Listner -> input on slider
inputSlider.addEventListener("input", (event) => {
    console.log(event);
    passwordLength = event.target.value;
    handleSlider();
});