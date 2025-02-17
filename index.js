const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const fs = require("fs");
const dataContact = require("./src/contactController");
const path = require("./src/createDir");

const app = express();
const port = 3000;

// template engine ejs. File html diubah ekstensinya menjadi .ejs
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { nama: "Rio AS", title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/contact", (req, res) => {
  const cont = dataContact.readData();
  res.render("contact", { cont, title: "Contact Page" });
});

app.get("/contact/detail/:idContact", (req, res) => {
  const id = req.params.idContact;
  const cont = dataContact.readDetailData(id);
  res.render("contactDetail", { cont, title: "Contact Detail Page" });
});

app.get("/contact/add", (req, res) => {
  const cont = dataContact.readData();
  res.render("addContact", { cont, title: "Add Contact Page" });
});

app.post("/create", (req, res) => {
  const data = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };
  dataContact.saveData(data);
  res.redirect("contact");
});

app.get("/contact/edit/:idContact", (req, res) => {
  const id = req.params.idContact;
  const cont = dataContact.readDetailData(id);
  res.render("editContact", { cont, title: "Edit Contact Page" });
});

app.post("/edit", (req, res) => {
  const data = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };

  const id = req.body.edit;
  dataContact.updateData(id, data);
  res.redirect("contact");
});

app.post("/delete", (req, res) => {
  const id = req.body.delete;
  dataContact.deleteData(id);
  res.redirect("contact");
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404 Page not found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
