const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");

const app = express();
const port = 3000;
const cont = require("./data/contacts.json");

// template engine ejs. File html diubah ekstensinya menjadi .ejs
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { nama: "Rio AS", title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { cont, title: "Contact Page" });
});

app.get("/contact/:idContact", (req, res) => {
  const id = req.params.idContact;
  const contactDetail = cont.find((value) => value.name === id);
  res.render("contactDetail", { contactDetail, title: "Contact Detail Page" });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404 Page not found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
