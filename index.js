const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

rl.question("What is your name? ", (name) => {
  rl.question("What is your phone number? ", (phone) => {
    rl.question("What is your email? ", (email) => {
      console.log(`Your name is: ${name}`);
      console.log(`Your phone number is: ${phone}`);
      console.log(`Your email is: ${email}`);
      rl.close();
    });
  });
});
