// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from 'react'

var text = {
  header: 'Compile to JS languages',
  intro:
    'This is a little experiment to test out languages that compile down to JS.',
  js: 'Plain JavaScript',
  purescript: 'PureScript with Halogen',
  'fp-ts': 'React, TypeScript, and fp-ts',
  'plain-js': 'Plain JavaScript with no libraries',
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
          'max-w-xl rounded overflow-hidden shadow-lg mx-auto mt-0 mb-auto sm:mt-10 md:mt-auto bg-slate-50 text-slate-800 p-8',
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
        'div',
        {
          className: 'list-inside text-l flex flex-col',
        },
        React.createElement(
          'a',
          {
            className:
              'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
            href: '/react-fp-ts',
          },
          text['fp-ts']
        ),
        React.createElement(
          'a',
          {
            className:
              'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
            href: '/purescript',
          },
          text.purescript
        ),
        React.createElement(
          'a',
          {
            className:
              'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
            href: '/plain-js',
          },
          text['plain-js']
        )
      )
    )
  )
}

var make = App

export { text, make }
/* react Not a pure module */
