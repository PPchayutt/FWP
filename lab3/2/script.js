const numPaths = [
    "img/0.png",
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png"
];

function randomNumber() {
    let numberDisplay = document.getElementById("numberDisplay");
    let result = "";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * numPaths.length);
        result += `<img class="num" src="${numPaths[randomIndex]}">`;
    }

    numberDisplay.innerHTML = result;
}

randomNumber();