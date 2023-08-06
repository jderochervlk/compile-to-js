# react-fp-ts

This is an experiment to write a simple web application in different languages that compile to JavaScript.

The application is a one page app with styles from TailwindCSS that loads an array of random strings from [bacon ipsum](https://baconipsum.com/json-api/) and renders each of them as a paragraph.

Each variant of the application is unit tested.

All of the applications are hosted on Heroku with a Node.js server.

https://vlk-compile-to-js.herokuapp.com

## Plain JavaScript

https://vlk-compile-to-js.herokuapp.com/plain-js

No fancy libraries here! Just good ol' JS and HTML. For something as simple as this, it was a decent way to go about it.

This took me about 30 minutes and I had to refresh myself on the document functions to get and set the HTML. It's been a while.

Unit tests are written with Jest and I mocked out fetch and document manually.

For anyone who wants to get into web development I highly recommend doing something like this to learn how JS works without all the noise of build tools, package managers, and compiling. Just open up the index.html file in a browser and see what happens.

## React, TypeScript, and FP-TS

https://reactjs.org/

https://www.typescriptlang.org/

https://gcanti.github.io/fp-ts/

React and TypeScript have been standard to me for almost 5 years, and I know them well enough to know what I love and what I hate.

I love React, it's a wonderful library to break up front-end development into small functions and components. I like TypeScript because it provides a type system to JavaScript, and I hate it because the type system is [somewhat](https://github.com/codemix/ts-sql/blob/master/src/Parser.ts) [crazy](https://stackoverflow.com/a/69129328/13077612) at times, and it's way too easy to just bail out of it with `@ts-ignore`. I also dislike how the level of strictness and what files are checked are up to you. It's not really a language with types I can depend on, it's more of an enhanced JSDoc that let's VS code yell at me if I do something really stupid.

I used fp-ts to handle Task, and Either. I've worked with other libraries that provide this in the past like [monet.js](https://monet.github.io/monet.js/) or [Crocks](https://crocks.dev/docs/getting-started.html), but fp-ts seems to be winning the popularity contest of bringing Monads into JavaScript. The documentation is rough, and it really only works as a library if you have developers who already understand how to work with Task/Future, Either, Maybe/Option, etc... I wish the documentation was better and had examples of why and how you would use most of the library.

This is built with Parcel. This is my first usage of it, and I was impressed at how easy it was to get a dev server up and running and to build the site. I would use it again.

Tests are written in Jest and RTL.
