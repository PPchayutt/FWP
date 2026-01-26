function createCards(students) {
    const container = document.getElementById("card-container");
    container.innerHTML = "";
    students.forEach((student, index) => {
        const card = document.createElement("div");
        card.className = "card";
        let imgSrc = "";
        if (student.gender === "Male") {
            imgSrc = "img/img_male.png";
        } else {
            imgSrc = "img/img_female.png";
        }
        card.innerHTML = `
            <img src="${imgSrc}" alt="Profile" class="profile-img">
            <div class="student-name">${index + 1}. ${student.name}</div>
            
            <div class="score-list">
                <div>Physics : <span>${student.physics}</span></div>
                <div>Mathmatics : <span>${student.maths}</span></div>
                <div>English : <span>${student.english}</span></div>
            </div>
        `;
        container.appendChild(card);
    });
}

fetch("student-score.json")
    .then(response => response.json())
    .then(data => createCards(data))
    .catch(error => console.log("Error:", error));