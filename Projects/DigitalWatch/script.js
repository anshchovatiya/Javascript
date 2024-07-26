let clock = document.getElementById("Clock");
let date = document.getElementById("Date");

setInterval(() => {
    let currentDate = new Date();
    clock.innerText = currentDate.toLocaleTimeString();

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[currentDate.getDay()];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[currentDate.getMonth()];

    date.innerText = `${day} - ${currentDate.getDate()} ${month} - ${currentDate.getFullYear()}`

}, 1000)
