const request = require('supertest')
const app = require('./app')

test('get /', (done) => {
  request(app)
    .get('/')
    .then((res) => {
      expect(res.statusCode).toBe(200)
      expect(res.text).toEqual('Hello!')
      done()
    })
})

test('get /plain-js', (done) => {
  request(app)
    .get('/plain-js/')
    .then((res) => {
      expect(res.text).toContain(
        'A basic application written with just good old JavaScript.'
      )
      done()
    })
})

test('get /plain-js/index.js', (done) => {
  request(app)
    .get('/plain-js/index.js')
    .then((res) => {
      expect(res.statusCode).toBe(200)
      expect(res.text).toContain('Project is working as expected...')
      done()
    })
})

test('get /react-fp-ts/ returns html', (done) => {
  request(app)
    .get('/react-fp-ts/')
    .then((res) => {
      expect(res.statusCode).toBe(200)
      expect(res.text).toContain('!DOCTYPE')
      done()
    })
})

test('404', (done) => {
  request(app)
    .get('/not-a-page')
    .then((res) => {
      expect(res.statusCode).toBe(404)
      expect(res.text).toEqual("Sorry, can't find that!")
      done()
    })
})
