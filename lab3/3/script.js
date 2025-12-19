const students = [
    "Adolf",
    "Joseph",
    "Henry",
    "Robert",
    "William",
    "Michael",
    "Douglas",
    "Andrew"
];

let studentScores = [];

function getRandomScore(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function () {
    const tableBody = document.getElementById('tableBody');
    students.forEach((name, index) => {
        let score = getRandomScore(40, 100);
        studentScores.push({ id: index + 1, name: name, score: score, grade: "" });
        let row = `
            <tr id="row-${index}">
                <td>${index + 1}</td>
                <td>${name}</td>
                <td>${score}</td>
                <td class="grade-cell"></td> </tr>
        `;
        tableBody.innerHTML += row;
    });
};

function calculateGrades() {
    const gradeCells = document.querySelectorAll('.grade-cell');
    studentScores.forEach((student, index) => {
        let grade = "";
        let score = student.score;
        if (score >= 80) {
            grade = "A";
        } else if (score >= 70) {
            grade = "B";
        } else if (score >= 60) {
            grade = "C";
        } else if (score >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }
        gradeCells[index].innerText = grade;
    });
}