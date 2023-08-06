import { render } from '@testing-library/react'
import Content from './Content'
import useData from './useData'
import * as E from 'fp-ts/lib/Either'

jest.mock('./useData')

test('Content shows content when there is data', () => {
  jest.mocked(useData).mockImplementation(() => [E.right(['there is a value'])])
  const { getByText } = render(<Content />)
  expect(getByText('there is a value')).toBeTruthy()
})

test('Content shows an error when there is an error', () => {
  jest.mocked(useData).mockImplementation(() => [E.left(Error('oh no'))])
  const { getByText } = render(<Content />)
  expect(getByText('There was an error: oh no')).toBeTruthy()
})
