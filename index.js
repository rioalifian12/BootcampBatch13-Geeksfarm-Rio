const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const { body, validationResult } = require("express-validator");

const dataContact = require("./src/contactController");
const pool = require("./db");

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

app.get("/contact", async (req, res) => {
  try {
    const cont = await pool.query(`SELECT * FROM contact ORDER BY name ASC`);
    res.render("contact", { cont: cont.rows, title: "Contact Page" });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/contact/detail/:idContact", async (req, res) => {
  try {
    const id = req.params.idContact;
    const cont = await pool.query(`SELECT * FROM contact WHERE name = '${id}'`);
    res.render("contactDetail", {
      cont: cont.rows[0],
      title: "Contact Detail Page",
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/contact/add", async (req, res) => {
  try {
    res.render("addContact", {
      errors: {},
      title: "Add Contact Page",
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.post(
  "/create",
  [
    body("name").custom(async (value) => {
      const cont = await pool.query(`SELECT * FROM contact ORDER BY name ASC`);
      const contactDetail = await pool.query(
        `SELECT * FROM contact WHERE name = '${value}'`
      );

      if (!contactDetail) {
        return true;
      }

      if (cont.name === contactDetail) {
        throw new Error("Name already exist");
      }
    }),
    body("phone", "Phone number is not valid").isMobilePhone(["id-ID"]),
    body("email", "Email is not valid").isEmail(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render("addContact", { errors: errors.array() });
      }
      const data = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
      };
      await pool.query(
        `INSERT INTO contact VALUES ('${data.name}','${data.phone}','${data.email}') RETURNING *`
      );
      res.redirect("contact");
    } catch (error) {
      console.log(error.message);
    }
  }
);

app.get("/contact/edit/:idContact", async (req, res) => {
  try {
    const id = req.params.idContact;
    const cont = await pool.query(`SELECT * FROM contact WHERE name = '${id}'`);
    res.render("editContact", {
      cont: cont.rows[0],
      errors: {},
      title: "Edit Contact Page",
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.post(
  "/edit",
  [
    body("name", "Name already exist").custom(async (value, { req }) => {
      const name = req.body.name;
      const oldName = req.body.oldName;
      const contactDetail = await pool.query(
        `SELECT * FROM contact WHERE name = '${name}'`
      );
      if (!contactDetail) {
        return true;
      }
      if (value === oldName) {
        return true;
      }
      console.log(contactDetail.rows[0]);
      console.log(name);

      if (contactDetail.rows.length > 0) {
        throw new Error("Name already exist");
      }
    }),
    body("phone", "Phone number is not valid").isMobilePhone(["id-ID"]),
    body("email", "Email is not valid").isEmail(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      const id = req.body.edit;
      const cont = await pool.query(
        `SELECT * FROM contact WHERE name = '${id}'`
      );

      if (!errors.isEmpty()) {
        return res.render("editContact", {
          cont: cont.rows[0],
          errors: errors.array(),
        });
      }
      const data = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
      };
      await pool.query(
        `UPDATE contact SET name = '${data.name}', phone = '${data.phone}', email = '${data.email}' WHERE name = '${id}'`
      );
      res.redirect("contact");
    } catch (error) {
      console.log(error.message);
    }
  }
);

app.post("/delete", async (req, res) => {
  const id = req.body.delete;
  await pool.query(`DELETE FROM contact WHERE name = '${id}'`);
  res.redirect("contact");
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404 Page not found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
