import { ReactElement } from 'react'

type Props = {
  children?: ReactElement | ReactElement[]
}

const Layout = ({ children }: Props) => (
  <section className="flex h-screen">
    <div className="max-w-xl rounded overflow-hidden shadow-lg mx-auto mt-0 mb-auto sm:mt-10 md:mt-auto bg-slate-50 text-slate-800 p-8">
      {children}
    </div>
  </section>
)

export default Layout
