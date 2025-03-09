const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { body, validationResult } = require("express-validator");

const pool = require("./db");

const app = express();
const port = 3001;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/api/contact", async (req, res) => {
  try {
    const contact = await pool.query(`SELECT * FROM contact ORDER BY name`);
    res.status(200).json({ contact });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan!",
      error: error.message,
    });
  }
});

app.get("/api/contact/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const contact = await pool.query(`SELECT * FROM contact WHERE name = $1`, [
      name,
    ]);
    if (!contact) {
      res.status(404).json({
        message: "Contact not found!",
      });
    }
    res.status(200).json({
      contact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.post(
  "/api/contact",
  [
    body("name").custom(async (name) => {
      const contactDetail = await pool.query(
        `SELECT * FROM contact WHERE name = $1`,
        [name]
      );
      if (contactDetail.rows.length > 0) {
        throw new Error("Name already exists");
      }
    }),
    body("phone", "Phone number is not valid").isMobilePhone(["id-ID"]),
    body("email", "Email is not valid")
      .optional({ checkFalsy: true })
      .isEmail(),
  ],
  async (req, res) => {
    try {
      const results = validationResult(req);
      if (!results.isEmpty()) {
        return res.status(400).json({
          message: "Validation failed",
          errors: results.array(),
        });
      }
      const { name, phone, email } = req.body;
      const contact = await pool.query(
        `INSERT INTO contact (name, phone, email) VALUES ($1,$2,$3) RETURNING *`,
        [name, phone, email || ""]
      );
      res.status(201).json({
        message: "Create contact successfully!",
        contact: contact.rows,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }
);

app.put(
  "/api/contact/:name",
  [
    body("name").custom(async (value, { req }) => {
      const name = req.body.name;
      const oldName = req.params.name;
      const contactDetail = await pool.query(
        "SELECT * FROM contact WHERE name = $1",
        [name]
      );
      if (!contactDetail || value === oldName) {
        return true;
      }
      if (contactDetail.rows.length > 0) {
        throw new Error("Name already exists");
      }
    }),
    body("phone", "Phone number is not valid").isMobilePhone(["id-ID"]),
    body("email", "Email is not valid")
      .optional({ checkFalsy: true })
      .isEmail(),
  ],
  async (req, res) => {
    try {
      const results = validationResult(req);
      if (!results.isEmpty()) {
        return res.status(400).json({
          message: "Validation failed",
          errors: results.array(),
        });
      }
      const oldName = req.params.name;
      const { name, phone, email } = req.body;
      const contactExist = await pool.query(
        "SELECT * FROM contact WHERE name = $1",
        [oldName]
      );
      if (contactExist.rows.length === 0) {
        return res.status(404).json({ error: "Contact not found" });
      }
      await pool.query(
        "UPDATE contact SET name = $1, phone = $2, email = $3 WHERE name = $4",
        [name, phone, email || "", oldName]
      );
      res.json({ message: "Edit contact successfully" });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }
);

app.delete("/api/contact/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const deleted = await pool.query(`DELETE FROM contact WHERE name = $1`, [
      name,
    ]);
    if (!deleted) {
      res.status(404).json({
        message: "Contact not found!",
      });
    }
    res.status(200).json({
      message: "Delete contact successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
