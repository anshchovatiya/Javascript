let bug = document.getElementById("TotalBudget");
let TotalBudget = 100;
let Expenses = 30;
let Balance = 70;


document.getElementById("BudgetSubmit").addEventListener("click", (event) => {
    event.preventDefault();
    let TotBudget = document.getElementById("TotalBudget").value;
    TotBudget = +TotBudget;
    if (Number.isInteger(TotBudget)) {
        TotalBudget = TotBudget;
        document.getElementById("BudgetShow").innerText = TotalBudget;
        document.getElementById("ExpensesShow").innerText = "0";
        document.getElementById("ExpenseHistory").innerHTML = "";
        Balance = TotalBudget;
        document.getElementById("BalanceShow").innerText = Balance;
        Expenses = 0;
    }
    else {
        alert("INVALID INPUT");
    }
    document.getElementById("TotalBudget").value = "";

})

document.getElementById("ExpenseSubmit").addEventListener("click", (event) => {
    event.preventDefault();
    let description = document.getElementById("Description").value;
    let expense = document.getElementById("Expense").value;
    if(expense != "" && description != ""){
        expense = +expense;
        if (Number.isInteger(expense)) {
            let div = document.createElement("div");
            div.classList = "bg-[#111] w-full grid grid-cols-[10%_70%_20%] sm:grid-cols-[60%_25%_15%] text-white py-1 px-2 rounded-[4px]";
            div.innerHTML = `<p>${description}</p>
                            <p>&#x20B9;${expense}</p>
                            <div class="cursor-pointer flex flex-nowrap items-center max-sm:my-2  sm:justify-end mr-3">
                                <i class="fa-solid fa-pen-to-square  mr-4 editable"></i>
                                <i class="fa-solid fa-trash hover:text-blue-600 noteDelete"></i>
                            </div>`
            document.getElementById("ExpenseHistory").appendChild(div);
            Balance -= expense;
            Expenses += expense;
            document.getElementById("ExpensesShow").innerText = Expenses;
            document.getElementById("BalanceShow").innerText = Balance;
        }
        else {
            alert("INVALID INPUT");
        }
        document.getElementById("Description").value = "";
        document.getElementById("Expense").value = "";
    }
    else{
        alert("Enter the valid value")
    }
});

let valueHolder;
document.getElementById("ExpenseHistory").addEventListener("click", (event) => {
    if (event.target.classList.contains("noteDelete")) {
        let exp = event.target.parentElement.previousElementSibling.innerText;
        exp = exp.split("");
        exp.shift();
        exp = exp.join("");
        exp = +exp
        Expenses -= exp;
        Balance += exp;
        document.getElementById("ExpensesShow").innerText = Expenses;
        document.getElementById("BalanceShow").innerText = Balance;
        event.target.parentElement.parentElement.remove();
    }
    if (event.target.classList.contains("editable")) {
        if (event.target.parentElement.parentElement.getAttribute("contenteditable") === "true") {
            event.target.parentElement.parentElement.setAttribute("contenteditable", "false");
            event.target.style.color = "white";

            let exp = event.target.parentElement.previousElementSibling.innerText;
            exp = exp.split("");
            exp.shift();
            exp = exp.join("");
            exp = +exp;

            if(Number.isInteger(exp)){

                Expenses -= valueHolder;
                Balance += valueHolder;
    
                Expenses += exp;
                Balance -= exp;
                document.getElementById("ExpensesShow").innerText = Expenses;
                document.getElementById("BalanceShow").innerText = Balance;
            }
            else{
                event.target.parentElement.previousElementSibling.innerHTML = `&#x20B9;${valueHolder}`
                alert("INVALID INPUT");
            }

        }
        else {
            event.target.parentElement.parentElement.setAttribute("contenteditable", "true");
            event.target.style.color = "royalblue";


            valueHolder = event.target.parentElement.previousElementSibling.innerText;
            valueHolder = valueHolder.split("");
            valueHolder.shift();
            valueHolder = valueHolder.join("");
            valueHolder = +valueHolder;
        }
    }

});