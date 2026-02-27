const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const symbolsCheck = document.querySelector("#symbols");
const numbersCheck = document.querySelector("#numbers");

const lengthDisplay = document.querySelector("#lengthValue");

const inputSlider = document.querySelector("[dataLengthSlider]");

const generateBtn = document.querySelector("#generateBtn");

const passwordDisplay = document.querySelector("#passwordText");

const passwordStrengthIndicator = document.querySelector(".strength-bar");

const symbols = "!@#$%^&*()_+-*/{}[]:><?";
//Utility Functions

function getRandomInteger(min, max) {
    //min = 1, max = 9 ->(0.6 * (9 - 1)) + 1
    //floor(4.8)+1 => 4+1 =5
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRandomInteger(0, 10);
}

//Lower Case
function generateLowerCase() {
    let randomDecimalNumber = getRandomInteger(97, 123);//Values taken from ASCII Table
    return String.fromCharCode(randomDecimalNumber);
}
//Upper Case
function generateUpperCase() {
    let randomDecimalNumber = getRandomInteger(65, 91);//Values taken from ASCII Table
    return String.fromCharCode(randomDecimalNumber);
}
//Special Charaters
function generateSymbol() {
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

//Shuffle Password
function shufflePassword(passwordArray) {
    for (let i = passwordArray.length - 1; i > 0; i--) {

        //Generate random index -> swap
        let j = Math.floor(Math.random() * (i + 1));

        //swap
        let temp = passwordArray[i];
        passwordArray[i] = passwordArray[j];
        passwordArray[j] = temp;
    }
    let stringPassword = "";
    passwordArray.forEach((singleChar) => {
        stringPassword = stringPassword + singleChar;
    });
    return stringPassword;
}

function setIndicatorColor(color) {
    passwordStrengthIndicator.style.background = color;

    passwordStrengthIndicator.style.boxShadow = "0px 0px 10px 1px";
}

function calculateStrenth() {
    let isUpper = false;
    let isLower = false;
    let isSymbol = false;
    let isNumber = false;

    if (upperCaseCheck.checked) {
        isUpper = true;
    }
    if (lowerCaseCheck.checked) {
        isLower = true;
    }
    if (symbolsCheck.checked) {
        isSymbol = true;
    }
    if (numbersCheck.checked) {
        isNumber = true;
    }
    if (isLower && isUpper && (isSymbol || isNumber) && passwordLength >= 8) {
        setIndicatorColor("green");
    } else if ((isLower || isUpper) &&
        (isSymbol || isNumber) &&
        passwordLength > 6) {
        setIndicatorColor("yellow");
    } else {
        setIndicatorColor("red");
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
});

//Add Event Listner -> on input on slider
inputSlider.addEventListener("input", (event) => {
    // console.log(event);
    passwordLength = event.target.value;
    handleSlider();
});

let password;
generateBtn.addEventListener("click", () => {

    // check if no checkbox is selected then do not perform anything
    if (checkboxCheckedCount <= 0) {
        console.log("Nothing happen");
        return;
    }
    // Special Case when all checkbox selected bit length of slider is lesss than chekbox selected
    if (passwordLength < checkboxCheckedCount) {
        passwordLength = checkboxCheckedCount;
        handleSlider();
    }

    //remove old password
    let password = "";
    let functionArray = [];



    console.log("Array of Functions = ", functionArray);

    //Make sure all occurance of functions Array should be addaed in password
    for (let fn of functionArray) {
        password = password + fn();
    }

    console.log("Array running all checkbox function = ", password);
    console.log(passwordLength);
    console.log(functionArray.length);
    for (let i = 0; i < passwordLength - functionArray.length; i++) {
        let randomIndex = getRandomInteger(0, functionArray.length);
        password = password + functionArray[randomIndex]();
    }
    //console.log("After completing entire length of slider password = ", password);

    //Shuffle
    password = shufflePassword(Array.from(password));
    console.log("After shuffle password = ", password);

    passwordDisplay.textContent = password;
    calculateStrenth();
});

