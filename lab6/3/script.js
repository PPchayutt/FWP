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