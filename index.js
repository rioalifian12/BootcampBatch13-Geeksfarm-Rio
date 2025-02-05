const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const validator = require("validator");
const fs = require("fs");

const rl = readline.createInterface({ input, output });

const dirPath = "./data";
const dataPath = "./data/contacts.json";

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// function untuk menanyakan pertanyaan kepada user dan mengembalikan jawabannya sebagai promise
const question = async (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// function untuk menyimpan contacts data kedalam file json
const saveData = async (data) => {
  const file = fs.readFileSync(dataPath, "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(data);
  fs.writeFileSync(dataPath, JSON.stringify(contacts));
};

// function untuk mengatur alur program
const main = async () => {
  const name = await question("What is your name? ");

  let phone;
  while (true) {
    phone = await question("What is your phone number? ");
    if (validator.isMobilePhone(phone, ["id-ID"])) {
      break;
    } else {
      console.log("Invalid phone number, please try again!");
    }
  }

  let email;
  while (true) {
    email = await question("What is your email? ");
    if (validator.isEmail(email)) {
      break;
    } else {
      console.log("Invalid email, please try again!");
    }
  }

  const data = { name, phone, email };
  saveData(data);
  rl.close();
};

main();
