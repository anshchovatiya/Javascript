let input = document.getElementById("input");
let type = document.getElementById("type");
let submit = document.getElementById("sub");

function celsiusToFahrenheit(value) {
    ans = ((value * 9 / 5) + 32).toFixed(2) + "&deg; F";
    return ans;
}
function FahrenheitToCelsius(value) {
    return ((value - 32) * 5 / 9).toFixed(2) + "&deg; C";
}
function factorial(value) {
    if (value == 1) {
        return 1;
    }
    else {
        return value * factorial(value - 1);
    }
}

submit.addEventListener("click", (event) => {
    event.preventDefault();
    let val = input.value;
    val = +val;
    if (!isNaN(val)) {
        let ans = 0;
        switch (type.value) {
            case "Celsius-to-Fahrenheit":
                ans = celsiusToFahrenheit(val);
                break;
            case "Fahrenheit-to-Celsius":
                ans = FahrenheitToCelsius(val);
                break;
            case "Factorial":
                ans = factorial(val);
                break;
            case "meter-to-centimeter":
                ans = (val * 100).toFixed(2) + " " + "&#13213;";
                break;
            case "centimeter-to-meter":
                ans = (val / 100).toFixed(2) + " " + "M";
                break;
            case "foot-to-inch":
                ans = (val * 12).toFixed(3) + " " + "inch";
                break;
            case "inch-to-foot":
                ans = (val / 12).toFixed(3) + " " + "foot";
                break;

        }
        document.getElementById("results").innerHTML = ans;
    }
    else {
        alert("INVALID INPUT");
    }
    input.value = "";
});



