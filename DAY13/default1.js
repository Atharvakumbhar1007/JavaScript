//Filter with default values

function power(num, power = 1) {
    console.log("Value of Power = ", power);
    console.log("Value of Number = ", num);
    console.log(num ** power);
}
power(5, 3);
power(5);