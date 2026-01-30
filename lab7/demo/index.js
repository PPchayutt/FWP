const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'));

// app.get('/', function (req, res) {
//     let html = `<h1>Welcome to the FWP</h1>
//     <ul>
//     <li><a href="/">Home</a></li>
//     <li><a href="/hello">Hello</a></li>
//     </ul>
//     `;

//     res.send(html);
// });

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/form.html'));
});

app.get('/submitform', (req, res) => {
    const { fname, lname } = req.query;
    res.send(`First name: ${fname}, Last name: ${lname}`);
});

app.get('/hello', function (req, res) {
    res.send("Hello World!, via GET");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}, press Ctrl-C to terminate....`)
})