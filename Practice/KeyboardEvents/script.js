
let textInput = document.getElementById("text-input");


let asciiValue = document.getElementById("asciiValue");

let eventType = document.getElementById("eventType");



// it activate when you press key
textInput.addEventListener("keydown",(event)=>{
  keyPressed.innerText = `Key Pressed : ${event.key}`;
  asciiValue.innerText = `ASCII value : ${event.keyCode}`;
  eventType.innerText = `Event Types : ${event.type}`;
});

// it activates when you release pressed  key
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


// it works when you enter input to the input field 
// textInput2.addEventListener("input", (event) => {
//   let InputLen = event.target.value;
//   Input.innerText = `Input : ${event.target.value}`;
//   keyPressed2.innerText = `Key Pressed : ${event.target.name}`;
//   inputType.innerText = `input type : ${event.inputType}`;
//   InputLength.innerText = `Event Types : ${InputLen.length}`;

// });


// it only called when you press enter or click outside input box
textInput2.addEventListener("change", (event) => {
  let InputLen = event.target.value;
  Input.innerText = `Input : ${event.target.value}`;
  keyPressed2.innerText = `Key Pressed : ${event.target.name}`;
  inputType.innerText = `input type : ${event.inputType}`;
  InputLength.innerText = `Event Types : ${InputLen.length}`;

});

