const fs = require("fs");

const path = require("./createDir");

// function untuk menyimpan contacts data kedalam file json
const saveData = (data) => {
  const file = fs.readFileSync(path.dataPath, "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(data);
  fs.writeFileSync(path.dataPath, JSON.stringify(contacts));
};

const readData = () => {
  const file = fs.readFileSync(path.dataPath, "utf-8");
  const contacts = JSON.parse(file);
  if (contacts.length < 1) {
    return console.log("Data kosong!");
  }
  console.log(contacts);
};

const readDetailData = (name) => {
  const file = fs.readFileSync(path.dataPath, "utf-8");
  const contacts = JSON.parse(file);
  const contactDetail = contacts.find((value) => value.name === name);
  if (!contactDetail) {
    console.log("Data tidak ada!");
  }

  if (contacts.length < 1) {
    return console.log("Data kosong!");
  }

  console.log(contactDetail);
};

const updateData = (name) => {
  const file = fs.readFileSync(path.dataPath, "utf-8");
  const contacts = JSON.parse(file);
  const contactDetail = contacts.find((value) => value.name === name);
  if (!contactDetail) {
    console.log("Data tidak ada!");
  }
  contactDetail.name = name;

  if (contacts.length < 1) {
    return console.log("Data kosong!");
  }

  fs.writeFileSync(path.dataPath, JSON.stringify(filterObj));
  console.log("Data berhasil di update!");
};

const deleteData = (name) => {
  const file = fs.readFileSync(path.dataPath, "utf-8");
  const contacts = JSON.parse(file);
  const contactDetail = contacts.find((value) => value.name === name);
  if (!contactDetail) {
    return console.log("Data tidak ada!");
  }
  const filterObj = contacts.filter((value) => value.name !== name);

  fs.writeFileSync(path.dataPath, JSON.stringify(filterObj));

  if (contacts.length < 1) {
    return console.log("Data kosong!");
  }

  console.log("Data berhasil di hapus!");
};

module.exports = {
  saveData,
  readData,
  readDetailData,
  updateData,
  deleteData,
};
