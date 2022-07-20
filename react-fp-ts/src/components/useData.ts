import * as E from 'fp-ts/lib/Either'

import { useEffect, useState } from 'react'
import { requestData } from './requestData'

const useData = () => {
  const [data, setData] = useState<E.Either<Error, string[]>>(E.right([]))

  useEffect(() => {
    requestData('https://baconipsum.com/api/?type=meat-and-filler')().then(
      val => {
        console.log(val)
        setData(val)
      }
    )
  }, [])

  return [data]
}

export default useData
