
let textInput = document.getElementById("text-input");


let asciiValue = document.getElementById("asciiValue");

let eventType = document.getElementById("eventType");




textInput.addEventListener("keydown",(event)=>{
  keyPressed.innerText = `Key Pressed : ${event.key}`;
  asciiValue.innerText = `ASCII value : ${event.keyCode}`;
  eventType.innerText = `Event Types : ${event.type}`;
});

// textInput.addEventListener("keyup",(event)=>{
//   keyPressed.innerText = `Key Pressed : ${event.key}`;
//   asciiValue.innerText = `ASCII value : ${event.keyCode}`;
//   eventType.innerText = `Event Types : ${event.type}`;
// });


let textInput2 = document.getElementById("text-input2");
let keyPressed2 = document.getElementById("keyPressed2");
let inputType = document.getElementById("asciiValue2");
let Input = document.getElementById("Input");
let InputLength = document.getElementById("inputLength");
let eventType2 = document.getElementById("eventType2");

let length =0;

textInput2.addEventListener("input", (event) => {
  Input.innerText = `Input : ${event.target.value}`;
  length++;
  keyPressed2.innerText = `Key Pressed : ${event.target.name}`;
  inputType.innerText = `input type : ${event.target.type}`;
  InputLength.innerText = `Event Types : ${length}`;

});
// textInput2.addEventListener("hashchange", (event) => {
//   Input.innerText = `Input : ${event.target.value}`;
//   length--;
//   keyPressed2.innerText = `Key Pressed : ${event.target.name}`;
//   inputType.innerText = `input type : ${event.target.type}`;
//   InputLength.innerText = `Event Types : ${length}`;

// });
