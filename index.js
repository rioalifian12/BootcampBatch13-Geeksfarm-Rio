const express = require("express");
const app = express();
const port = 3000;

const render = require("./src/renderHTML");

app.get("/", (req, res) => {
  render.renderHTML("index.html", res);
});
app.get("/about", (req, res) => {
  render.renderHTML("about.html", res);
});
app.get("/contact", (req, res) => {
  render.renderHTML("contact.html", res);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404 Page not found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
