let text = {
  "header": "Compile to JS languages",
  "intro": "This is a little experiment to test out languages that compile down to JS.",
  "js": "Plain JavaScript",
  "purescript": "PureScript with Halogen",
  "fp-ts": "React, TypeScript, and fp-ts",
}

@react.component
let make = () => {
  <div className="flex h-screen">
    <div
      className="max-w-xl rounded overflow-hidden shadow-lg mx-auto mt-0 mb-auto sm:mt-10 md:mt-auto bg-slate-50 text-slate-800 p-8">
      <h1 className="text-2xl mb-7"> {text["header"]->React.string} </h1>
      <p> {text["intro"]->React.string} </p>
      <br />
      <div className="list-inside text-l flex flex-col">
        <a
          href="/react-fp-ts"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          {text["fp-ts"]->React.string}
        </a>
        <a
          href="/purescript"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          {text["purescript"]->React.string}
        </a>
      </div>
    </div>
  </div>
}
