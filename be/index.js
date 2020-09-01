const express = require("express");
const path = require("path");
const app = express();

const port = 9000;

app.use(express.static(path.join(__dirname, "build")));

(function counter() {
  let counter = 0;

  app.get("/counter", (_req, res) => {
    counter = counter + 1;
    res.send(`Counter: ${counter}`);
  });
})();

app.use("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);
console.log(`listening on port ${port}`);
