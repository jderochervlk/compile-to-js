const express = require('express')
const path = require('path')
const morgan = require('morgan')

morgan('tiny')

const app = express()

const port = 8080

app.get('/', (req, res) => 
    res.send('Hello!'))

app.get('/plain-js', (req, res) => 
    res.sendFile(path.join(__dirname, '../plain-js/public/index.html')))

app.listen(port, () => {
    console.log(`compile-to-js listening on ${port}`)
})