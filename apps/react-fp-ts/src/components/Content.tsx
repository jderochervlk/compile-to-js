import useData from './useData'
import * as E from 'fp-ts/lib/Either'
import React, { ReactElement } from 'react'

const Content = () => {
  const [data] = useData()

  return E.fold<Error, string[], ReactElement>(
    e => <p>There was an error: {e.message}</p>,
    items => (
      <div>
        <p>All of the text below is fetched from a random text api.</p>
        <br />
        {items.map((i, idx) => (
          <React.Fragment key={`content-${idx}`}>
            <p>{i}</p>
            <br />
          </React.Fragment>
        ))}
      </div>
    )
  )(data)
}

export default Content
