import express from 'express'
import path from 'path'

const app = express()
const port = 80

app.use('/plain-js',
    express.static(path.join(__dirname, 'plain-js/public')))