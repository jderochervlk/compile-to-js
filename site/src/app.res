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
      className="max-w-xl rounded overflow-hidden shadow-lg m-auto bg-slate-50 text-slate-800 p-8">
      <h1 className="text-2xl mb-7"> {text["header"]->React.string} </h1>
      <p> {text["intro"]->React.string} </p>
      <br />
      <ul className="list-disc list-inside">
        <li>
          <a href="/react-fp-ts" className="text-blue-600 hover:text-blue-800 hover:underline">
            {text["fp-ts"]->React.string}
          </a>
        </li>
        <li>
          <a href="/purescript" className="text-blue-600 hover:text-blue-800 hover:underline">
            {text["purescript"]->React.string}
          </a>
        </li>
      </ul>
    </div>
  </div>
}
