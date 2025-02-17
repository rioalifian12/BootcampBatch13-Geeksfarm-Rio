const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const fs = require("fs");

const app = express();
const port = 3000;

const contact = require("./src/contactController");
const cont = contact.getData();

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
  const test = contact.getData();
  res.render("contact", { cont: test, title: "Contact Page" });
});

app.get("/contact/detail/:idContact", (req, res) => {
  const id = req.params.idContact;
  const contactDetail = cont.find((value) => value.name === id);
  res.render("contactDetail", { contactDetail, title: "Contact Detail Page" });
});

app.get("/contact/add", (req, res) => {
  res.render("addContact", { cont, title: "Add Contact Page" });
});

app.post("/create", (req, res) => {
  const data = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };

  cont.push(data);
  fs.writeFileSync("./data/contacts.json", JSON.stringify(cont));

  res.redirect("contact");
});

app.get("/contact/edit/:idContact", (req, res) => {
  const id = req.params.idContact;
  const contactDetail = cont.find((value) => value.name === id);
  res.render("editContact", { contactDetail, title: "Edit Contact Page" });
});

app.post("/edit", (req, res) => {
  const data = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };

  const id = req.body.edit;
  const contactDetail = cont.find((value) => value.name === id);
  console.log(contactDetail);

  contactDetail.name = data.name;
  contactDetail.phone = data.phone;
  contactDetail.email = data.email;

  fs.writeFileSync("./data/contacts.json", JSON.stringify(cont));
  res.redirect("contact");
});

app.post("/delete", (req, res) => {
  const id = req.body.delete;
  const filterObj = cont.filter((value) => value.name !== id);
  fs.writeFileSync("./data/contacts.json", JSON.stringify(filterObj));
  res.redirect("contact");
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404 Page not found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
