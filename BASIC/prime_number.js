let number = 112;

let checker = true;



for (let i = 2; i < number; i++) {
    if (number % i === 0 || number === 0 || number === 1) {
        checker = false;
        break;
    }
}

if (checker && number > 1) {
    console.log(number, "is prime number");
}
else {
    console.log(number, "is not prime number");
}