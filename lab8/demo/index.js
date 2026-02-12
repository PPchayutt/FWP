const express = require('express');
const path = require('path');
const app = express();

// เรียกใช้ database.js
const conn = require('./database');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route: แสดงข้อมูล
app.get('/showdata', (req, res) => {
    const sql = "SELECT * FROM instructor";
    conn.query(sql, (err, result) => {
        if (err) throw err;
        res.render('show', { data: result });
    });
});

// Route: เปิดฟอร์ม
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/form.html"));
});

// Route: รับค่าจากฟอร์ม
app.get('/formget', (req, res) => {
    const { id, name, deptname, salary } = req.query;
    const sql = "INSERT INTO instructor (ID, name, dept_name, salary) VALUES (?, ?, ?, ?)";

    conn.query(sql, [id, name, deptname, salary], (err, result) => {
        if (err) throw err;
        res.redirect('/showdata');
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});