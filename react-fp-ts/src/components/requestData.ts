import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
import { flow, pipe } from 'fp-ts/lib/function'

type ApiJson = {
  body: string[]
}

export const safeGet = (url: string): TE.TaskEither<Error, Response> =>
  TE.tryCatch(
    () => fetch(url),
    reason => Error(String(reason))
  )

export const verifyResponse = flow(
  (res: Response): E.Either<Error, Response> =>
    res.ok ? E.right(res) : E.left(Error(res.statusText)),
  TE.fromEither
)

export const parseJson = (res: Response): TE.TaskEither<Error, ApiJson> =>
  TE.tryCatch(
    () => res.json(),
    reason => Error(String(reason))
  )

export const requestData = (url: string): TE.TaskEither<Error, string[]> =>
  pipe(
    safeGet(url),
    TE.chain(verifyResponse),
    TE.chain(parseJson),
    TE.map(res => res.body)
  )
