// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from 'react'

var text = {
  header: 'Compile to JS languages',
  intro:
    'This is a little experiment to test out languages that compile down to JS.',
  js: 'Plain JavaScript',
  purescript: 'PureScript with Halogen',
  'fp-ts': 'React, TypeScript, and fp-ts',
}

function App(props) {
  return React.createElement(
    'div',
    {
      className: 'flex h-screen',
    },
    React.createElement(
      'div',
      {
        className:
          'max-w-xl rounded overflow-hidden shadow-lg m-auto bg-slate-50 text-slate-800 p-8',
      },
      React.createElement(
        'h1',
        {
          className: 'text-2xl mb-7',
        },
        text.header
      ),
      React.createElement('p', undefined, text.intro),
      React.createElement('br', undefined),
      React.createElement(
        'ul',
        {
          className: 'list-disc list-inside',
        },
        React.createElement(
          'li',
          undefined,
          React.createElement(
            'a',
            {
              className: 'text-blue-600 hover:text-blue-800 hover:underline',
              href: '/react-fp-ts',
            },
            text['fp-ts']
          )
        ),
        React.createElement(
          'li',
          undefined,
          React.createElement(
            'a',
            {
              className: 'text-blue-600 hover:text-blue-800 hover:underline',
              href: '/purescript',
            },
            text.purescript
          )
        )
      )
    )
  )
}

var make = App

export { text, make }
/* react Not a pure module */
