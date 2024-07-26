const out = document.querySelectorAll(".Out");
const outPut = document.getElementById("output");
const outPutSmall = document.getElementById("outputSmall");

document.getElementById("deleteAll").addEventListener("click", () => {
    outPut.innerText = "";
    outPutSmall.innerText = "";
})
document.getElementById("deleteLast").addEventListener("click", () => {
    let text = outPut.innerText;
    text = text.split("");
    text.pop();
    outPut.innerText = text.join("");
})

out.forEach((current) => {
    current.addEventListener("click", () => {
        outPut.innerHTML += current.innerText;
    })
})

let operation = "";
let symbol = document.querySelectorAll(".symbol");

symbol.forEach((current) => {
    current.addEventListener("click", () => {
        outPutSmall.innerText = outPut.innerHTML + current.innerText;
        outPut.innerText = "";
        operation = current.innerText;
    })
})


document.getElementById("isEqualTo").addEventListener("click", () => {
    let FirstValue = outPutSmall.innerText;
    let SecondValue = outPut.innerText;
    FirstValue = FirstValue.split("");
    FirstValue.pop();
    FirstValue = FirstValue.join("");

    if (typeof (+FirstValue) === "number" && typeof (+SecondValue) === "number") {
        FirstValue = +FirstValue;
        SecondValue = +SecondValue;
        let ans;
        switch (operation) {
            case "+":
                ans = FirstValue + SecondValue;
                break;
            case "-":
                ans = FirstValue - SecondValue;
                break;
            case "/":
                ans = FirstValue / SecondValue;
                break;
            case "*":
                ans = FirstValue * SecondValue;
                break;
            case "%":
                ans = (FirstValue * SecondValue) / 100;
        }
        outPut.innerText = ans;
        outPutSmall.innerText = "";
    }
    else {
        outPut.innerText = "NaN";
        outPutSmall.innerText = "";

    }
})

