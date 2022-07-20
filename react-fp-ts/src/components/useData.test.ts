import { renderHook } from '@testing-library/react'
import useData from './useData'
import * as E from 'fp-ts/lib/Either'

test('useData returns an Either with an array', () => {
  const { result } = renderHook(() => useData())

  const data = result.current

  expect(data).toEqual([E.right([])])
})
