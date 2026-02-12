const mysql = require('mysql2');

// ตั้งค่าการเชื่อมต่อ
const conn = mysql.createConnection({
    host: "webdev.it.kmitl.ac.th",
    user: "s67070115",
    password: "ZNJ95XEF28B",
    database: "s67070115"
});

// เชื่อมต่อ
conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

// ส่งออกตัวแปร conn ไปให้ไฟล์อื่นใช้
module.exports = conn;