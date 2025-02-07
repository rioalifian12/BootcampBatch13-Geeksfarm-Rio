const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

// function untuk menanyakan pertanyaan kepada user dan mengembalikan jawabannya sebagai promise
const question = async (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

module.exports = {
  question,
  rl,
};
