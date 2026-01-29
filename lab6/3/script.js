let allQuestions = [];

fetch("questionAnswerData.json")
    .then(response => response.json())
    .then(data => {
        allQuestions = data;
        displayQuiz(data);
    })
    .catch(error => console.log("error", error));

function displayQuiz(questions) {
    const container = document.getElementById("quiz-container");
    let html = "";
    questions.forEach((item, index) => {
        let answersHtml = "";
        for (let key in item.answers) {
            if (key !== "correct") {
                answersHtml += `
                    <label class="answer-option">
                        <input type="radio" name="question${index}" value="${key}">
                        ${key.toUpperCase()}. ${item.answers[key]}
                    </label>
                `;
            }
        }
        html += `
            <div class="question-box">
                <div class="question-text">${index + 1}. ${item.question}</div>
                ${answersHtml}
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkAnswers() {
    let score = 0;
    const resultBox = document.getElementById("result");
    allQuestions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        const allOptions = document.getElementsByName(`question${index}`);
        allOptions.forEach(opt => opt.parentElement.style.color = "black");
        if (selected) {
            if (selected.value === item.answers.correct) {
                score++;
                selected.parentElement.style.color = "lightgreen";
                selected.parentElement.style.fontWeight = "bold";
            } else {
                selected.parentElement.style.color = "red";
            }
        }
    });
    resultBox.innerHTML = `You got ${score} out of ${allQuestions.length} points!`;
    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth" });
}