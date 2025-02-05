const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const validator = require("validator");

const rl = readline.createInterface({ input, output });

rl.question("What is your name? ", (name) => {
  rl.question("What is your phone number? ", (phone) => {
    rl.question("What is your email? ", (email) => {
      console.log(`Your name is: ${name}`);

      validator.isMobilePhone(phone, ["id-ID"])
        ? console.log(`Your phone number is: ${phone}`)
        : console.log("Harus phone number dan tidak kurang dari 12");

      validator.isEmail(email)
        ? console.log(`Your email is: ${email}`)
        : console.log("Format email salah!");

      rl.close();
    });
  });
});
