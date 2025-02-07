const validator = require("validator");

const question = require("./src/question");
const saveData = require("./src/saveData");
const createDir = require("./src/createDir");

// function untuk mengatur alur program
const main = async () => {
  createDir.create();
  const name = await question.question("What is your name? ");

  let phone;
  while (true) {
    phone = await question.question("What is your phone number? ");

    if (validator.isMobilePhone(phone, ["id-ID"])) {
      break;
    } else {
      console.log("Invalid phone number, please try again!");
    }
  }

  let email;
  while (true) {
    email = await question.question("What is your email? ");
    if (validator.isEmail(email)) {
      break;
    } else {
      console.log("Invalid email, please try again!");
    }
  }

  console.log("-------------------------------------------");
  console.log(`Your name is ${name}`);
  console.log(`Your phone number is ${phone}`);
  console.log(`Your email is ${email}`);

  const data = { name, phone, email };
  saveData.saveData(data);
  question.rl.close();
};

main();
