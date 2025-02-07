const fs = require("fs");

const path = require("./createDir");

// function untuk menyimpan contacts data kedalam file json
const saveData = async (data) => {
  const file = fs.readFileSync(path.dataPath, "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(data);
  fs.writeFileSync(path.dataPath, JSON.stringify(contacts));
};

module.exports = {
  saveData,
};
