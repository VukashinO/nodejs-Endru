const express = require('express');
const path = require('path');
const app = express();

const forcast = require('../utils/forecast');

app.use(express.static(path.join(__dirname, '../public/')));
app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/help', (req, res) => {
    res.send('Help page');
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'));
})

app.get('/weather', (req, res) => {
    const { adress } = req.query;
    if (!adress) {
        return res.send({
            err: 'There is no adress provided!'
        })
    }
    return res.send({
        adress
    })
})

app.get('/products', (req, res) => {
    res.send({
        products: []
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000!');
});