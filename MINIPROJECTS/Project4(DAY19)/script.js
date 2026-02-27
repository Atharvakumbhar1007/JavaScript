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

//Lower Case
function generateLowerCase() {
    let randomDecimalNumber = getRandomInteger(97, 122);//Values taken from ASCII Table
    return String.fromCharCode(randomDecimalNumber);
}
//Upper Case
function generateUpperCase() {
    let randomDecimalNumber = getRandomInteger(65, 91);//Values taken from ASCII Table
    return String.fromCharCode(randomDecimalNumber);
}
//Special Charaters
function generatesSymbol() {
    let randomDecimalNumber = getRandomInteger(0, symbols.length);//Values taken from ASCII Table
    return symbols.charAt(randomDecimalNumber);
}
//Setting Default Value Of password length to 10
let passwordLength = 10;

//Intial value in html is 1 thats why changing to 10 by calling function
handleSlider(); //Call

//Function which will handle password length and slider movement
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.textContent = passwordLength;
}

let checkboxCheckedCount = 0;
//Checkbox Count
function handleCheckboxChange() {
    checkboxCheckedCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) {
            checkboxCheckedCount++;
        }

        //if length = 1 and checkbox selected are 4 
        if (passwordLength < checkboxCheckedCount) {
            passwordLength = checkboxCheckedCount;
            handleSlider();
        }
        if (passwordLength > checkboxCheckedCount) {
            passwordLength = checkboxCheckedCount;
            handleSlider();
        }
    });
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
});

//Add Event Listner -> input on slider
inputSlider.addEventListener("input", (event) => {
    console.log(event);
    passwordLength = event.target.value;
    handleSlider();
});