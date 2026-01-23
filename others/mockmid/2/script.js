let allUsers = [];

// 1. Fetch ข้อมูลมาใส่ Dropdown
fetch('user.json')
    .then(res => res.json())
    .then(users => {
        allUsers = users; // เก็บข้อมูลไว้ใช้ทีหลัง
        const select = document.getElementById('userSelect');
        users.forEach(user => {
            const option = document.createElement('option');
            option.value = user.id;
            option.text = user.name;
            select.appendChild(option);
        });
    });

// 2. ฟังก์ชันปุ่ม Show Info
function showUserInfo() {
    const selectedId = document.getElementById('userSelect').value;
    const user = allUsers.find(u => u.id == selectedId);
    document.getElementById('emailInput').value = user.email;

    if (user) {
        document.getElementById('nameInput').value = user.name;
        document.getElementById('positionInput').value = user.position;
        // Email ใน JSON ไม่มี ให้เว้นว่างไว้กรอกเอง
        document.getElementById('emailInput').value = "";
    } else {
        alert("Please select a user first!");
    }
}

// 3. ฟังก์ชัน Submit & Validation
function validateForm() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;

    // กฎข้อที่ 1: ชื่อห้ามมีตัวเลข
    // /\d/ คือ Regular Expression หาตัวเลข 0-9
    if (/\d/.test(name)) {
        alert("Error: Name must not contain numbers!");
        return false; // หยุดการส่งฟอร์ม
    }

    // กฎข้อที่ 2: Email ต้องมี @ และยาวเกิน 5 ตัว
    if (!email.includes('@') || email.length <= 5) {
        alert("Error: Invalid Email format!");
        return false;
    }

    alert("Submit Success! ✅");
    return true;
}