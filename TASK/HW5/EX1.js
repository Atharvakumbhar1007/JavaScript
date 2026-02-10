

button.addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let result = document.getElementById("result");

    if (username.length < 5) {
        result.textContent = "Too Short";
    } else {
        result.textContent = "Valid Username";
    }
});
