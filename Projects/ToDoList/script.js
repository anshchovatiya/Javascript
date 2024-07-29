let inputField = document.getElementById("InputField");
let date = document.getElementById("date");
let description = document.getElementById("description");
let tittle = document.getElementById("tittle");
let notesSection = document.getElementById("notes");

let NoteArray = [];
let string = localStorage.getItem("NoteArray");
NoteArray = JSON.parse(string);



NoteArray.forEach((current) => {
    let div = document.createElement("div");
    div.innerHTML = `<p class="text-xl font-bold max-w-[calc(100%-75px)] px-1 text-ellipsis overflow-x-hidden">${current.tittle}</p>
        <p class=" pb-4 text-sm w-fit px-1">${current.date}</p>
        <pre class="font-[Poppins] px-1 text-wrap text-ellipsis overflow-x-hidden max-w-full">${current.description}</pre>
        <div class="absolute top-5 md:top-9 right-8 cursor-pointer text-2xl" contenteditable="false">
          <i class="fa-solid fa-pen-to-square  mr-4 editable"></i>
          <i class="fa-solid fa-trash hover:text-white noteDelete"></i>
        </div>`;
    div.classList = "box p-4 md:p-8 bg-blue-500 rounded-lg md:aspect-[2/1.7] relative overflow-x-hidden";
    notesSection.insertBefore(div, inputField);
});




function Note(tittle, date, description) {
    this.tittle = tittle;
    this.date = date;
    this.description = description;
}


function getIndexByKeyValue(arr, key) {
    let index = arr.findIndex((current) => { return current.tittle === key })
    return index;
}



// this is handling note delete button and edit button 
notesSection.addEventListener("click", (event) => {


    if (event.target.classList.contains("noteDelete")) {
        event.target.parentElement.parentElement.remove();
        let value = event.target.parentElement.parentElement.firstChild.innerText;
        let ind = getIndexByKeyValue(NoteArray, value);
        NoteArray.splice(ind, 1);
        localStorage.setItem("NoteArray", JSON.stringify(NoteArray));


    }
    if (event.target.classList.contains("editable")) {
        if (event.target.parentElement.parentElement.getAttribute("contenteditable") == "true") {
            event.target.parentElement.parentElement.setAttribute("contenteditable", "false");
            event.target.style.color = "black";
        }
        else {
            event.target.parentElement.parentElement.setAttribute("contenteditable", "true");
            event.target.style.color = "white";
        }
    }
});


// this is event listener for adding new note
document.getElementById("addNote").addEventListener("click", () => {
    if (inputField.classList.contains("hidden")) {
        inputField.classList.remove("hidden");
    }
});

// this is to clear all the input fields
document.getElementById("inputDelete").addEventListener("click", () => {
    inputField.classList.add("hidden");
    date.value = "";
    description.value = "";
    tittle.value = "";
});

// this event listener for creating new note and adding it to the page
document.getElementById("inputDone").addEventListener("click", () => {
    let tittleText = tittle.value;
    let dateText = date.value;
    dateText = dateText.split("-");
    dateText = dateText.reverse();
    dateText = dateText.join("/");
    let descriptionText = description.value;
    descriptionText = descriptionText.trim();
    let div = document.createElement("div");
    div.innerHTML = `<p class="text-xl font-bold max-w-[calc(100%-75px)] px-1 text-ellipsis overflow-x-hidden">${tittleText}</p>
        <p class=" pb-4 text-sm w-fit px-1">${dateText}</p>
        <pre class="font-[Poppins] px-1 text-wrap text-ellipsis overflow-x-hidden max-w-full">${descriptionText}</pre>
        <div class="absolute top-5 md:top-9 right-8 cursor-pointer text-2xl" contenteditable="false">
          <i class="fa-solid fa-pen-to-square  mr-4 editable"></i>
          <i class="fa-solid fa-trash hover:text-white noteDelete"></i>
        </div>`;
    div.classList = "box p-4 md:p-8 bg-blue-500 rounded-lg md:aspect-[2/1.7] relative overflow-x-hidden";
    notesSection.insertBefore(div, inputField);
    date.value = "";
    description.value = "";
    tittle.value = "";
    inputField.classList.add("hidden");

    let newNode = new Note(tittleText, dateText, descriptionText);
    NoteArray.push(newNode);
    localStorage.setItem("NoteArray", JSON.stringify(NoteArray));


});


