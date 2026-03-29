const path = require("path");
const express = require("express");

const app = express();
const publicDir = path.join(__dirname, "../public");

app.use(express.static(publicDir));

app.listen(3000, () => {
  console.log("UI running on http://localhost:3000");
});
