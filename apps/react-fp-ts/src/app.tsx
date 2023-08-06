import ReactDom from 'react-dom'
import Content from './components/Content'
import Intro from './components/Intro'
import Layout from './components/Layout'

const App = () => (
  <Layout>
    <Intro />
    <Content />
  </Layout>
)

ReactDom.render(<App />, document.getElementById('root'))
