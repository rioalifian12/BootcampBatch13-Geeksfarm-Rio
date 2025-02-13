const express = require("express");
var expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// template engine ejs. File html diubah ekstensinya menjadi .ejs
app.set("view engine", "ejs");

app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("index", { nama: "Rio AS", title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/contact", (req, res) => {
  cont = [
    { name: "Rio", email: "rio@gmail.com" },
    { name: "Ali", email: "ali@gmail.com" },
    { name: "Fian", email: "fian@gmail.com" },
    { name: "Santoso", email: "santoso@gmail.com" },
  ];
  res.render("contact", { cont, title: "Contact Page" });
});

app.get("/product/:idProduct", (req, res) => {
  res.send(
    `Product Page with ID: ${req.params.idProduct} <br> Category ID: ${req.query.idCategory}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404 Page not found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
