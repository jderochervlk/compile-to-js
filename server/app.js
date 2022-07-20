const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => 
    res.send('Hello!'))

app.get('/plain-js', (req, res) => 
    res.sendFile(path.join(__dirname, '../plain-js/public/index.html')))

app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!")
})


module.exports = app