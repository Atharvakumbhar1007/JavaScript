const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowerCase");
const symbolCheck = document.querySelector("#symbols");
const numbersCheck = document.querySelector("#numbers");

const lengthDisplay = document.querySelector("#lengthValue");

const inputSlider = document.querySelector("[dataLengthSlider]");

let passowrdLength = 10;
let checkboxCheckedCount = 0;

function handleSlider() {

    inputSlider.value = passowrdLength;
}
console.log(allCheckBox);