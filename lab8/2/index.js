const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const conn = mysql.createConnection({
    host: 'webdev.it.kmitl.ac.th',
    user: 's67070115',
    password: 'ZNJ95XEF28B',
    database: 's67070115'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('✅ Connect DB Success!');
});

app.get('/', (req, res) => {
    res.render('register');
});

app.post('/save', (req, res) => {
    const { username, password, email, firstname, lastname, age, address, phone } = req.body;
    const sql = "INSERT INTO Users (username, password, email, firstname, lastname, age, address, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    conn.query(sql, [username, password, email, firstname, lastname, age, address, phone], (err, result) => {
        if (err) throw err;
        res.redirect('/login');
    });
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM Users";
    conn.query(sql, (err, result) => {
        if (err) throw err;
        res.render('users', { users: result });
    });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login-check', (req, res) => {
    const { identity, password } = req.body;

    const sql = "SELECT * FROM Users WHERE username = ? OR email = ?";
    conn.query(sql, [identity, identity], (err, result) => {
        if (err) throw err;

        if (result.length === 0) {
            return res.send("<script>alert('❌ ไม่พบบัญชีผู้ใช้'); window.location.href='/login';</script>");
        }

        const user = result[0];

        if (user.password !== password) {
            return res.send("<script>alert('❌ รหัสผ่านไม่ถูกต้อง'); window.location.href='/login';</script>");
        }

        res.render('profile', { user: user });
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});