// call express module
const express = require("express");
// call express library
const app = express();
// call database
const pool = require("./db");

app.use(express.json()); //req.body
const port = 3000;

// call server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// insert data to database
app.get("/addsync", async (req, res) => {
  try {
    const name = "Rio";
    const phone = "082210023129";
    const email = "rioalifian12@gmail.com";
    const newCont = await pool.query(
      `INSERT INTO contact values ('${name}','${phone}','${email}') RETURNING *`
    );
    res.json(newCont);
  } catch (err) {
    console.log(err.message);
  }
});
