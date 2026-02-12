const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const conn = mysql.createConnection({
    host: "webdev.it.kmitl.ac.th",
    user: "s67070115",
    password: "ZNJ95XEF28B",
    database: "s67070115",
    multipleStatements: true
});

const csvPath = path.join(__dirname, 'albums.csv');
const csvData = fs.readFileSync(csvPath, 'utf-8');

const rows = csvData.trim().split('\n');
const dataRows = rows.slice(1);

const createDbAndTableQuery = `
    DROP TABLE IF EXISTS albums;
    CREATE TABLE albums (
        id INT AUTO_INCREMENT PRIMARY KEY,
        song VARCHAR(255),
        artist VARCHAR(255),
        album VARCHAR(255),
        year INT,
        genre VARCHAR(100),
        album_cover VARCHAR(500)
    );
`;

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server...');

    conn.query(createDbAndTableQuery, (err) => {
        if (err) throw err;
        console.log('Table created!');

        const insertQuery = 'INSERT INTO albums (song, artist, album, year, genre, album_cover) VALUES ?';

        const values = dataRows.map(row => {
            const cleanRow = row.trim();
            if (!cleanRow) return null;

            let columns = cleanRow.split(',');

            if (columns[columns.length - 1] === '' || columns[columns.length - 1] === '\r') {
                columns.pop();
            }

            let song, artist, album, year, genre, cover;

            if (columns.length > 6) {
                song = columns[0];
                artist = columns[1];
                // รวมชื่ออัลบั้มที่โดนตัด
                album = columns.slice(2, columns.length - 3).join(',');
                year = columns[columns.length - 3];
                genre = columns[columns.length - 2];
                cover = columns[columns.length - 1];
            } else {
                [song, artist, album, year, genre, cover] = columns;
            }

            return [
                song,
                artist,
                album,
                year,
                genre,
                cover ? cover.trim() : ''
            ];
        }).filter(row => row !== null);

        if (values.length > 0) {
            conn.query(insertQuery, [values], (err, result) => {
                if (err) {
                    console.error('Error inserting data:', err);
                } else {
                    console.log(`Successfully inserted ${result.affectedRows} albums!`);
                }
                conn.end();
            });
        } else {
            console.log('No data to insert.');
            conn.end();
        }
    });
});