function createTable() {
    let num = document.getElementById("numInput").value;
    let area = document.getElementById("tableArea");

    if (num == "") {
        alert("กรุณากรอกตัวเลข");
        return;
    }

    if (num < 1 || num > 12) {
        alert("กรุณากรอกเลข 1-12 เท่านั้น");
        return;
    }


    area.innerHTML = "";
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.innerText = "เลขคูณ";
    let th2 = document.createElement("th");
    th2.innerText = "ผลลัพธ์";
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    table.appendChild(headerRow);

    for (let i = 1; i <= 12; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = num + " x " + i;
        let td2 = document.createElement("td");
        td2.innerText = num * i;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }

    area.appendChild(table);
}