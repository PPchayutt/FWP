const data = {
    th: {
        firstname: "ชื่อ:",
        lastname: "นามสกุล:",
        countryLabel: "ประเทศ:",
        btnText: "เปลี่ยนเป็นภาษาอังกฤษ",
        countries: ["เลือกประเทศ", "ไทย", "เวียดนาม", "ลาว", "มาเลเซีย", "สิงคโปร์", "ฟิลิปปินส์", "เมียนมาร์", "กัมพูชา", "บรูไน"]
    },
    en: {
        firstname: "First Name:",
        lastname: "Last Name:",
        countryLabel: "Country:",
        btnText: "Change to Thai",
        countries: ["Select a country", "Thailand", "Vietnam", "Laos", "Malaysia", "Singapore", "Philippines", "Myanmar", "Cambodia", "Brunei"]
    }
};

let currentLang = "en";

function toggleLanguage() {
    currentLang = (currentLang === "th") ? "en" : "th";
    const langObj = data[currentLang];

    document.getElementById("labelFirstname").innerText = langObj.firstname;
    document.getElementById("labelLastname").innerText = langObj.lastname;
    document.getElementById("labelCountry").innerText = langObj.countryLabel;
    document.getElementById("btnChangeLang").innerText = langObj.btnText;

    const select = document.getElementById("country");
    select.innerHTML = "";

    langObj.countries.forEach(countryName => {
        let option = document.createElement("option");
        let text = document.createTextNode(countryName);
        option.appendChild(text);
        select.appendChild(option);
    });
}
toggleLanguage();