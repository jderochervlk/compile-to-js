const express = require('express')
const path = require('path')

const morgan = require('morgan')

morgan('dev')

const app = express()

app.get('/', (_, res) => res.send('Hello!'))

app.use(
  '/plain-js/',
  express.static(path.join(__dirname, '../apps/plain-js/public/'))
)

app.use(
  '/react-fp-ts/',
  express.static(path.join(__dirname, '../apps/react-fp-ts/dist/'))
)

app.use(
  '/purescript/',
  express.static(path.join(__dirname, '../apps/purescript/dist/'))
)

app.use((_, res) => {
  res.status(404).send("Sorry, can't find that!")
})

module.exports = app
