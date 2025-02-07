const fs = require("fs");

const dirPath = "./data";
const dataPath = "./data/contacts.json";

const create = async () => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, "[]", "utf-8");
  }
};

module.exports = {
  create,
  dirPath,
  dataPath,
};
