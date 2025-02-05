const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const validator = require("validator");
const fs = require("fs");
const { addAbortSignal } = require("stream");
const { log } = require("console");

const rl = readline.createInterface({ input, output });

rl.question("What is your name? ", (name) => {
  rl.question("What is your phone number? ", (phone) => {
    rl.question("What is your email? ", (email) => {
      const data = { name, phone, email };

      console.log(`Your name is: ${name}`);

      const valPhone = validator.isMobilePhone(phone, ["id-ID"]);
      const valEmail = validator.isEmail(email);

      valPhone
        ? console.log(`Your phone number is: ${phone}`)
        : console.log("Harus phone number dan tidak kurang dari 12");

      valEmail
        ? console.log(`Your email is: ${email}`)
        : console.log("Format email salah!");

      if (fs.existsSync("data/contacts.json")) {
        const file = fs.readFileSync("data/contacts.json", "utf-8");
        const contacts = JSON.parse(file);
        !valPhone || !valEmail
          ? console.log("data yang dimasukkan salah ulangi lagi !")
          : contacts.push(data);
        fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
      } else {
        fs.mkdir("./data", { recursive: true }, (err) => {
          if (err) throw err;
          fs.writeFileSync("data/contacts.json", "[]");
        });
      }

      rl.close();
    });
  });
});
