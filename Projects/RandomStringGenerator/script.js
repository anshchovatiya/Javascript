
document.getElementById("StringContainer").addEventListener("click", (event) => {
    if (event.target.parentElement.classList.contains("delete")) {
        event.target.parentElement.parentElement.remove();
    }
})


const RandomStringGenerator = (length) => {

    let string = "";

    let words = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let len = words.length;

    for (let i = 1; i <= length; i++) {
        string += words[Math.trunc(Math.random() * len)];
    }

    return string;
}



document.getElementById("Generate").onclick = () => {
    let string = RandomStringGenerator(document.getElementById("length").value);

    let newElement = `<div class="flex items-center justify-between my-3"><p class="max-w-[80%] mr-5 break-words">${string}</p><div class="h-[20px] w-[20px] delete"><img src="./dustbin.svg" alt="delete"></div></div>`
    document.getElementById("StringContainer").innerHTML += newElement;
}


