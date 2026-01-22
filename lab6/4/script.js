function showData(employees) {
    const tableBody = document.getElementById("employee-tbody");
    tableBody.innerHTML = "";

    employees.forEach(emp => {
        const row = document.createElement("tr");
        const fullName = `${emp.FirstName} ${emp.LastName}`;
        const genderShort = emp.Gender.charAt(0);

        row.innerHTML = `
            <td>${emp.id}</td>
            <td>${fullName}</td>
            <td>${genderShort}</td>
            <td>${emp.Position}</td>
            <td>${emp.Address}</td>
        `;

        tableBody.appendChild(row);
    });
}
fetch("employees.json")
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => console.log("error", error));