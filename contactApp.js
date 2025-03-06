const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

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
    const name = req.params.name;
    const contact = await pool.query(
      `SELECT * FROM contact WHERE name = '${name}'`
    );
    res.status(200).json({
      contact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan!",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
