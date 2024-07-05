


setInterval(()=>{
    let date = new Date();
    document.getElementById("hour").innerText = ` ${date.getHours()}:`
    document.getElementById("minuts").innerText = ` ${date.getMinutes()}: `
    document.getElementById("Seconds").innerText = ` ${date.getSeconds()}`
},1000);