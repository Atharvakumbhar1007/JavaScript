document.querySelector("#btnAdd").onclick = add;

function add() {
    //when taking data from input - we use value (input, textarea, select)
    var num1 = parseFloat(document.querySelector("#inpNum1").value);
    var num2 = parseFloat(document.querySelector("#inpNum2").value);

    if (isNaN(num1) || isNaN(num2)) {
        return;
    }

    var ans = num1 + num2;
    document.querySelector("#tagAns").innerText = "Ans is " + ans;
}