const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const dataContact = require("./src/contactController");
const { body, validationResult } = require("express-validator");

const app = express();
const port = 3000;

// template engine ejs. File html diubah ekstensinya menjadi .ejs
app.set("view engine", "ejs");

app.use(express.json());
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
  res.render("addContact", {
    cont,
    errors: {},
    title: "Add Contact Page",
  });
});

app.post(
  "/create",
  [
    body("name").custom((value, { req }) => {
      const name = req.body.name;
      const contacts = dataContact.getData();
      const contactDetail = contacts.find((value) => value.name === name);
      if (!contactDetail) {
        return true;
      }

      if (contactDetail.name === name) {
        throw new Error("Name already exist");
      }
    }),
    body("phone", "Phone number is not valid").isMobilePhone(["id-ID"]),
    body("email", "Email is not valid").isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("addContact", { errors: errors.array() });
    }
    const data = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    };
    dataContact.saveData(data);
    res.redirect("contact");
  }
);

app.get("/contact/edit/:idContact", (req, res) => {
  const id = req.params.idContact;
  const cont = dataContact.readDetailData(id);
  res.render("editContact", { cont, errors: {}, title: "Edit Contact Page" });
});

app.post(
  "/edit",
  [
    body("name", "Name already exist").custom((value, { req }) => {
      const name = req.body.name;
      const oldName = req.body.oldName;
      const contacts = dataContact.getData();
      const contactDetail = contacts.find((value) => value.name === name);
      if (!contactDetail) {
        return true;
      }
      if (value === oldName) {
        return true;
      }

      if (contactDetail.name === name) {
        throw new Error("Name already exist");
      }
    }),
    body("phone", "Phone number is not valid").isMobilePhone(["id-ID"]),
    body("email", "Email is not valid").isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    const id = req.body.edit;
    const cont = dataContact.readDetailData(id);
    if (!errors.isEmpty()) {
      return res.render("editContact", { cont, errors: errors.array() });
    }
    const data = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    };

    dataContact.updateData(id, data);
    res.redirect("contact");
  }
);

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
