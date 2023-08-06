let text = {
  "header": "Compile to JS languages",
  "intro": "This is a little experiment to test out languages that compile down to JS.",
  "js": "Plain JavaScript",
}

@react.component
let make = () => {
  <div className="flex h-screen">
    <div
      className="max-w-xl rounded overflow-hidden shadow-lg m-auto bg-slate-50 text-slate-800 p-4">
      <h1 className="text-2xl mb-7"> {text["header"]->React.string} </h1>
      <p className="mb-3"> {text["intro"]->React.string} </p>
      <a href="./public/purescript/index.html"> {text["js"]->React.string} </a>
    </div>
  </div>
}
