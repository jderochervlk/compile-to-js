import { render } from '@testing-library/react'
import Layout from './Layout'

test('Layout can render without children', () => {
  const { container } = render(<Layout />)
  expect(container).toMatchSnapshot()
})

test('Layout can render with children', () => {
  const { container, getByText } = render(
    <Layout>
      <p>Hello!</p>
    </Layout>
  )
  expect(container).toMatchSnapshot()
  expect(getByText('Hello!')).toBeTruthy()
})
