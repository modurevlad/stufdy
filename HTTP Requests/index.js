import express from "express";

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("<h1>Homepage<h1/>");
});

app.get("/about", function (req, res) {
  res.send("<h1>About<h1/>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Contact<h1/>");
});

app.listen(port, () => {
  console.log(`Merge pe portul ${port}`);
});
