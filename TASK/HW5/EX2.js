let button2 = document.getElementById("add");
function addnumber(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = addNumber(num1, num2);

    document.getElementById("output").textContent = result;
})