const express = require("express");
const path = require("path");

const morgan = require("morgan");

morgan("dev");

const app = express();

app.get("/", (req, res) => res.send("Hello!"));

app.use(
  "/plain-js/",
  express.static(path.join(__dirname, "../plain-js/public/"))
);

app.use(
  "/react-fp-ts/",
  express.static(path.join(__dirname, "../react-fp-ts/dist/"))
);

app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

module.exports = app;
