import { rest } from 'msw'

export const handlers = [
  // Mocks out the responses for our API server
  rest.get('https://baconipsum.com/*', (req, res, ctx) => {
    console.log(req)
  }),
]
