const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Initial page')
});

app.get('/about', (req, res) => {
    res.send('Node Js + Express server + Docker')
});

app.get('/services', (req, res) => {
    res.send('Page do not exist')
});

app.listen(port, () => {
    console.log(`Server is running in ${port} port`)
});