import useData from './useData'

const Content = () => {
  const data = useData()
  return <>{JSON.stringify(data)}</>
}

export default Content
