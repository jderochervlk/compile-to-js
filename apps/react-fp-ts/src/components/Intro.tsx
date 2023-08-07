const Intro = () => (
  <>
    <h1 className="text-4xl">React and fp-ts</h1>
    <p className="mt-2">
      A basic application written with React, TypeScript, and{' '}
      <a
        href="https://gcanti.github.io/fp-ts/"
        className="text-blue-500 hover:text-blue-800 hover:underline"
      >
        fp-ts
      </a>
      .
    </p>
    <p>
      TypeScript with fp-ts is my standard way of writing TypeScript and I can't
      imagine not having Option and Either. I can avoid using null and
      undefined, and being able to pipe data is very nice. fp-ts feels like an
      extension and a standard library for TypeScript and I will never again
      write TypeScript without it.
    </p>
    <br />
  </>
)

export default Intro
