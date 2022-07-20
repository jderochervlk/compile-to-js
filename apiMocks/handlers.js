import { rest } from 'msw'

export const handlers = [
  // Mocks out the responses for our API server
  rest.get('https://baconipsum.com/*', (req, res, ctx) => {
    return res(ctx.json({ body: ['one', 'two', 'three'] }))
  }),

  rest.get('https://error.com', (req, res, ctx) => {
    return res(ctx.status(500), ctx.text('There was an error'))
  }),
]
