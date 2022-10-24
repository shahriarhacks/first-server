const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())

const Port = process.env.Port || 5000;

const phones = require('./Data/phones.json')
const allPhones=phones.products

app.get('/', (req, res) => {
    res.send("Server is running")
})

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id = req.params.id;
    const phone = allPhones.find(p => p?.id == id)
    if (!phone) {
        'Ki vai Products pai na kn'
    }
    else {
        res.send(phone)
    }
})

app.get('/catagories/:name', (req, res) => {
    const name = req.params.name;
    const category = allPhones.filter(p => p.category == name)
    res.send(category)
})

app.listen(Port, () => {
    console.log('Server is running',Port)
})