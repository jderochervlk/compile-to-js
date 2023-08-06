import { parseJson, requestData, safeGet, verifyResponse } from './requestData'
import * as E from 'fp-ts/lib/Either'

test('safeGet returns a right when the request works', done => {
  safeGet('https://baconipsum.com')().then(res => {
    expect(res._tag).toEqual('Right')
    done()
  })
})

test('safeGet returns a left when the request does not work (no server response)', done => {
  // @ts-expect-error
  safeGet(undefined)().then(res => {
    expect(res._tag).toEqual('Left')
    done()
  })
})

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

test('parse json returns a Right if we have good data', done => {
  fetch('https://baconipsum.com').then(res => {
    parseJson(res)().then(json => {
      expect(json).toEqual(E.right(['one', 'two', 'three']))
      done()
    })
  })
})

test('parse json returns a Left if we have bad data', done => {
  fetch('https://error.com').then(res => {
    parseJson(res)().then(json => {
      expect(json).toEqual(E.left(expect.any(Error)))
      done()
    })
  })
})

test('requestData has returns a Right of the value we want on success', done => {
  requestData('https://baconipsum.com')().then(res => {
    expect(res).toEqual(E.right(['one', 'two', 'three']))
    done()
  })
})

test('requestData has returns a Right of the value we want on success', done => {
  requestData('https://error.com')().then(res => {
    expect(res).toEqual(E.left(expect.any(Error)))
    done()
  })
})
