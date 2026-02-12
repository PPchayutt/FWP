// database.js
const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: "webdev.it.kmitl.ac.th",
    user: "s67070115",
    password: "ZNJ95XEF28B",
    database: "s67070115"
});

// open the MySQL connection
conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = conn;c