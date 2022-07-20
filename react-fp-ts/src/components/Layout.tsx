import { ReactElement } from 'react'

type Props = {
  children?: ReactElement | ReactElement[]
}

const Layout = ({ children }: Props) => (
  <section className="container mx-auto p-4 bg-white h-screen">
    {children}
  </section>
)

export default Layout
