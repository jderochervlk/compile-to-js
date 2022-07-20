import { render } from '@testing-library/react'
import Intro from './Intro'

test('Intro contains the expected text', () => {
  const { container, getByText } = render(<Intro />)
  expect(container).toMatchSnapshot()
  expect(getByText('React and fp-ts')).toBeTruthy()
  expect(
    getByText('A basic application written with React, TypeScript, and fp-ts.')
  ).toBeTruthy()
})
