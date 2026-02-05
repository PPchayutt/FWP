const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/food1', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/food1.html'));
});

app.get('/food2', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/food2.html'));
});

app.get('/food3', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/food3.html'));
});

app.get('/food4', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/food4.html'));
});

app.get('/food5', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/food5.html'));
});

app.get('/food6', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/food6.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}, press Ctrl-C to terminate....`)
})