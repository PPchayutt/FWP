const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'webdev.it.kmitl.ac.th',
    user: 's67070115',
    password: 'ZNJ95XEF28B',
    database: 's67070115'
});

connection.connect((err) => {
    if (err) {
        console.error('❌ Error connecting: ' + err.stack);
        return;
    }
    console.log('✅ Connected to Database!');

    const createTableSQL = `
        CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL,
            password VARCHAR(50) NOT NULL,
            email VARCHAR(100),
            firstname VARCHAR(100),
            lastname VARCHAR(100),
            age INT,
            address TEXT,
            phone VARCHAR(20)
        )
    `;

    connection.query(createTableSQL, (err) => {
        if (err) throw err;
        console.log("✅ Table 'Users' created successfully!");

        const insertSQL = `
            INSERT INTO Users (username, password, email, firstname, lastname, age, address, phone) 
            SELECT 'admin', '1234', 'admin@gmail.com', 'Admin', 'Nimda', 25, 'Bangkok', '0812345678'
            WHERE NOT EXISTS (SELECT * FROM Users WHERE username = 'admin')
        `;

        connection.query(insertSQL, (err) => {
            if (err) throw err;
            console.log("✅ Sample data inserted.");

            connection.end();
            process.exit();
        });
    });
});