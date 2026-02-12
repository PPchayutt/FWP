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
    console.log('Connect DB Success!');
});

app.get('/', (req, res) => {
    res.render('register');
});

app.post('/save', (req, res) => {
    const { username, password, email, firstname, lastname, age, address, phone } = req.body;

    const sql = "INSERT INTO Users (username, password, email, firstname, lastname, age, address, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    conn.query(sql, [username, password, email, firstname, lastname, age, address, phone], (err, result) => {
        if (err) throw err;
        res.redirect('/users');
    });
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM Users";
    conn.query(sql, (err, result) => {
        if (err) throw err;
        res.render('users', { users: result });
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});