

document.getElementById("submit").addEventListener("click", () => {
    let currentItems = document.getElementById("todo-current-item");
    let outputContainer = document.getElementById("todo-items");
    let newElementconainer = document.createElement("div");
    newElementconainer.innerHTML = `<div class="todoContainer"><p class="todoContent">${currentItems.value}</p><button class="todoButton" id="Delete">Delete</button></div>`;
    outputContainer.append(newElementconainer);

  
});