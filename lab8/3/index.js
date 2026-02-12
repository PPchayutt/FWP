const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: 'webdev.it.kmitl.ac.th',
    user: 's67070115',
    password: 'ZNJ95XEF28B',
    database: 's67070115'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to Database!');
});

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM albums';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('albums', { albums: results });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});