let currentBalance = 0;

function addItem() {
    const desc = document.getElementById("inputDesc").value;
    const amount = parseFloat(document.getElementById("inputAmount").value);
    const type = document.getElementById("inputType").value;
    const date = document.getElementById("inputDate").value;

    if (desc === "" || isNaN(amount) || date === "") {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return;
    }

    addToTable(date, desc, amount, type);

    document.getElementById("inputDesc").value = "";
    document.getElementById("inputAmount").value = "";
}

function addToTable(date, desc, amount, type) {
    const tableBody = document.getElementById("tableBody");
    const balanceElement = document.getElementById("totalBalance");

    if (type === "income") {
        currentBalance += amount;
    } else {
        currentBalance -= amount;
    }
    balanceElement.innerText = currentBalance;
    const tr = document.createElement("tr");

    const tdDate = document.createElement("td")
    tdDate.innerText = date;
    const tdDesc = document.createElement("td")
    tdDesc.innerText = desc;
    const tdIncome = document.createElement("td")
    const tdExpense = document.createElement("td")

    if (type === "income") {
        tdIncome.innerText = amount;
        tdExpense.innerText = "0";
    } else {
        tdIncome.innerText = "0";
        tdExpense.innerText = amount;
    }

    tr.appendChild(tdDate);
    tr.appendChild(tdDesc);
    tr.appendChild(tdIncome);
    tr.appendChild(tdExpense);

    tableBody.appendChild(tr);
}