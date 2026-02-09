const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/bird', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/bird.html'));
});

app.get('/cat', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/cat.html'));
});

app.get('/dog', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/dog.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}, press Ctrl-C to terminate....`)
})