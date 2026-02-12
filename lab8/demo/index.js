const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

// ตั้งค่า EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// เชื่อมต่อฐานข้อมูล
const conn = mysql.createConnection({
    host: 'webdev.it.kmitl.ac.th',
    user: 's67070115',
    password: 'ZNJ95XEF28B',
    database: 'instructor'
});

// เช็คการเชื่อมต่อ
conn.connect((err) => {
    if (err) throw err;
    console.log('Connect DB Success!');
});

// --- ส่วนที่ 3 (ใน PDF): แสดงข้อมูล ---
app.get('/showdata', (req, res) => {
    const sql = "SELECT * FROM instructor";
    conn.query(sql, (err, result) => {
        if (err) throw err;
        // ส่งข้อมูลไปที่ไฟล์ show.ejs
        res.render('show', { data: result });
    });
});

// --- ส่วนที่ 4 (ใน PDF): ฟอร์มบันทึกข้อมูล ---

// 4b. path เพื่อเข้าถึงฟอร์ม
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/form.html"));
});

// 4d. path รับค่าจากฟอร์ม (GET method)
app.get('/formget', (req, res) => {
    // รับค่าจาก query string
    const id = req.query.id;
    const name = req.query.name;
    const deptname = req.query.deptname;
    const salary = req.query.salary;

    // คำสั่ง SQL เพิ่มข้อมูล
    const sql = "INSERT INTO instructor (ID, name, dept_name, salary) VALUES (?, ?, ?, ?)";

    conn.query(sql, [id, name, deptname, salary], (err, result) => {
        if (err) throw err;
        // บันทึกเสร็จแล้ว กลับไปหน้าแสดงผล
        res.redirect('/showdata');
    });
});

// รัน Server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});