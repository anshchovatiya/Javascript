let ToDoArray = [];


function loadLocalData(){
    let tempArray = JSON.parse(localStorage.getItem("Array"));
    ToDoArray = tempArray;
    ToDoArray.forEach((current) => {
        let outputContainer = document.getElementById("todo-items");
        let newElementconainer = document.createElement("div");
        newElementconainer.innerHTML = `<div class="todoContainer"><p class="todoContent">${current}</p><button class="todoButton" id="Delete">Delete</button></div>`;
        outputContainer.append(newElementconainer);
    });
}

if(localStorage.getItem("Array")){
    loadLocalData();
}

document.getElementById("submit").addEventListener("click", () => {
  

    let currentItems = document.getElementById("todo-current-item");
    if(currentItems.value ==""){
        return;
    };
    let Item = currentItems.value.trim();
    ToDoArray.push(Item);
    let outputContainer = document.getElementById("todo-items");
    let newElementconainer = document.createElement("div");
    newElementconainer.innerHTML = `<div class="todoContainer"><p class="todoContent">${Item}</p><button class="todoButton" id="Delete">Delete</button></div>`;
    outputContainer.append(newElementconainer);
    currentItems.value = "";

     tempArray = JSON.stringify(ToDoArray);

    localStorage.setItem("Array",tempArray);
  
});



