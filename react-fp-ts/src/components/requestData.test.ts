import { parseJson, verifyResponse } from './requestData'
import 'node-fetch'
import * as E from 'fp-ts/lib/Either'

test('verifyResponse handles an error', done => {
  verifyResponse(
    new Response(undefined, { status: 400, statusText: 'oh no' })
  )().then(res => {
    expect(res).toEqual(E.left(Error('oh no')))
    done()
  })
})

test('verifyResponse handles sucess', done => {
  verifyResponse(new Response())().then(res => {
    expect(res).toEqual(E.right(new Response()))
    done()
  })
})

test('parse json', done => {
  fetch('https://baconipsum.com').then(res => {
    console.log(res.json())
    res
      .json()
      .then(x => {
        console.log(x)
        return done()
      })
      .catch(console.error)
    // console.log(res)
    // parseJson(res)()
    //     .then(r => {
    //         console.log(r)
    //         done()
    //     })
  })
})
