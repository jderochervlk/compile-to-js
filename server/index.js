const app = require('./app')
const morgan = require('morgan')

morgan('tiny')

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`compile-to-js listening on ${port}`)
})