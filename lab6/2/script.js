function showStudentScores(students) {
    const container = document.getElementById('card-container');
    container.innerHTML = '';
    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'card';

        let imgSrc = '';
        if (student.gender === 'Male') {
            imgSrc = 'img/img_male.png';
        } else {
            imgSrc = 'img/img_female.png';
        }

        card.innerHTML = `
            <img src="${imgSrc}" alt="Profile" class="profile-img">
            <h3>${student.name}</h3>
            
            <div class="score-box">
                <div class="score-item">
                    <span>Physics</span>
                    <span class="score-val">${student.physics}</span>
                </div>
                <div class="score-item">
                    <span>Maths</span>
                    <span class="score-val">${student.maths}</span>
                </div>
                <div class="score-item">
                    <span>English</span>
                    <span class="score-val">${student.english}</span>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

fetch("student-score.json")
    .then(response => response.json())
    .then(data => showStudentScores(data))
    .catch(error => console.log('error', error));