const fs = require("fs");
const validator = require("validator");

const path = require("./createDir");
const { get } = require("http");

const getData = () => {
  const file = fs.readFileSync(path.dataPath, "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

// function untuk menyimpan contacts data kedalam file json
const saveData = (data) => {
  const contacts = getData();
  const contactDetail = contacts.find((value) => value.name === data.name);
  const valPhone = validator.isMobilePhone(data.phone, ["id-ID"]);
  const valEmail = validator.isEmail(data.email);

  if (contactDetail && !valPhone && !valEmail) {
    return console.log(
      "Name already exists, invalid phone number and invalid email, please try again!"
    );
  }
  if (contactDetail && !valPhone) {
    return console.log(
      "Name already exists and invalid phone number, please try again!"
    );
  }
  if (contactDetail && !valEmail) {
    return console.log(
      "Name already exists and invalid email, please try again!"
    );
  }
  if (!valPhone && !valEmail) {
    return console.log(
      "Invalid phone exists and invalid email, please try again!"
    );
  }
  if (contactDetail) {
    return console.log("Name already exists, please try again!");
  }
  if (!valPhone) {
    return console.log("Invalid phone number, please try again!");
  }
  if (data.email !== "") {
    if (!valEmail) {
      return console.log("Invalid email, please try again!");
    }
  }

  contacts.push(data);
  fs.writeFileSync(path.dataPath, JSON.stringify(contacts));
  console.log("Data berhasil di tambah!");
};

// function untuk membaca contacts data didalam file json
const readData = () => {
  const contacts = getData();

  if (contacts.length < 1) {
    return console.log("Data kosong!");
  }
  return contacts;
};
// function untuk membaca detail contacts data didalam file json

const readDetailData = (id) => {
  const contacts = getData();
  const contactDetail = contacts.find((value) => value.name === id);
  if (!contactDetail) {
    return console.log("Data tidak ada!");
  }

  if (contacts.length < 1) {
    return console.log("Data kosong!");
  }

  return contactDetail;
};

// function untuk mengubah contacts data kedalam file json
const updateData = (name, newName, newPhone, newEmail) => {
  const contacts = getData();
  const contactDetail = contacts.find((value) => value.name === name);

  if (!contactDetail) {
    return console.log("Data tidak ada!");
  }

  const data = { newName, newPhone, newEmail };

  const valName = contactDetail.name === data.newName;
  const valPhone = validator.isMobilePhone(data.newPhone, ["id-ID"]);
  const valEmail = validator.isEmail(data.newEmail);

  if (valName && !valPhone && !valEmail) {
    return console.log(
      "Name already exists, invalid phone number and invalid email, please try again!"
    );
  }
  if (valName && !valPhone) {
    return console.log(
      "Name already exists and invalid phone number, please try again!"
    );
  }
  if (valName && !valEmail) {
    return console.log(
      "Name already exists and invalid email, please try again!"
    );
  }
  if (!valPhone && !valEmail) {
    return console.log(
      "Invalid phone exists and invalid email, please try again!"
    );
  }
  if (valName) {
    return console.log("Name already exists, please try again!");
  }
  if (!valPhone) {
    return console.log("Invalid phone number, please try again!");
  }
  if (data.email !== "") {
    if (!valEmail) {
      return console.log("Invalid email, please try again!");
    }
  }

  data.newName !== undefined
    ? (contactDetail.name = data.newName)
    : (contactDetail.name = contactDetail.name);
  data.newPhone !== undefined
    ? (contactDetail.phone = data.newPhone)
    : (contactDetail.phone = contactDetail.phone);
  data.newEmail !== undefined
    ? (contactDetail.email = data.newEmail)
    : (contactDetail.email = contactDetail.email);

  if (contacts.length < 1) {
    return console.log("Data kosong!");
  }

  fs.writeFileSync(path.dataPath, JSON.stringify(contacts));
  console.log("Data berhasil di update!");
};

// function untuk mengahapus contacts data didalam file json
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
  getData,
};
