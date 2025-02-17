const fs = require("fs");
const validator = require("validator");

const path = require("./createDir");

const getData = () => {
  const file = fs.readFileSync(path.dataPath, "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

// function untuk menyimpan contacts data kedalam file json
const saveData = (data) => {
  const contacts = getData();
  // const contactDetail = contacts.find((value) => value.name === data.name);
  // const valPhone = validator.isMobilePhone(data.phone, ["id-ID"]);
  // const valEmail = validator.isEmail(data.email);

  // if (contactDetail && !valPhone && !valEmail) {
  //   return console.log(
  //     "Name already exists, invalid phone number and invalid email, please try again!"
  //   );
  // }
  // if (contactDetail && !valPhone) {
  //   return console.log(
  //     "Name already exists and invalid phone number, please try again!"
  //   );
  // }
  // if (contactDetail && !valEmail) {
  //   return console.log(
  //     "Name already exists and invalid email, please try again!"
  //   );
  // }
  // if (!valPhone && !valEmail) {
  //   return console.log(
  //     "Invalid phone exists and invalid email, please try again!"
  //   );
  // }
  // if (contactDetail) {
  //   return console.log("Name already exists, please try again!");
  // }
  // if (!valPhone) {
  //   return console.log("Invalid phone number, please try again!");
  // }
  // if (data.email !== "") {
  //   if (!valEmail) {
  //     return console.log("Invalid email, please try again!");
  //   }
  // }

  contacts.push(data);
  fs.writeFileSync(path.dataPath, JSON.stringify(contacts));
  console.log("Data berhasil di tambah!");
};

// function untuk membaca contacts data didalam file json
const readData = () => {
  const contacts = getData();

  // if (contacts.length < 1) {
  //   return console.log("Data kosong!");
  // }
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
const updateData = (id, data) => {
  const contacts = getData();
  const contactDetail = contacts.find((value) => value.name === id);

  // if (!contactDetail) {
  //   return console.log("Data tidak ada!");
  // }

  // const valName = contactDetail.name === data.newName;
  // const valPhone = validator.isMobilePhone(data.newPhone, ["id-ID"]);
  // const valEmail = validator.isEmail(data.newEmail);

  // if (valName && !valPhone && !valEmail) {
  //   return console.log(
  //     "Name already exists, invalid phone number and invalid email, please try again!"
  //   );
  // }
  // if (valName && !valPhone) {
  //   return console.log(
  //     "Name already exists and invalid phone number, please try again!"
  //   );
  // }
  // if (valName && !valEmail) {
  //   return console.log(
  //     "Name already exists and invalid email, please try again!"
  //   );
  // }
  // if (!valPhone && !valEmail) {
  //   return console.log(
  //     "Invalid phone exists and invalid email, please try again!"
  //   );
  // }
  // if (valName) {
  //   return console.log("Name already exists, please try again!");
  // }
  // if (!valPhone) {
  //   return console.log("Invalid phone number, please try again!");
  // }
  // if (data.email !== "") {
  //   if (!valEmail) {
  //     return console.log("Invalid email, please try again!");
  //   }
  // }

  contactDetail.name = data.name;
  contactDetail.phone = data.phone;
  contactDetail.email = data.email;

  // if (contacts.length < 1) {
  //   return console.log("Data kosong!");
  // }

  fs.writeFileSync(path.dataPath, JSON.stringify(contacts));
  console.log("Data berhasil di update!");
};

// function untuk mengahapus contacts data didalam file json
const deleteData = (id) => {
  const contacts = getData();
  // const contactDetail = contacts.find((value) => value.name === id);
  // if (!contactDetail) {
  //   return console.log("Data tidak ada!");
  // }
  const filterObj = contacts.filter((value) => value.name !== id);

  fs.writeFileSync(path.dataPath, JSON.stringify(filterObj));

  // if (contacts.length < 1) {
  //   return console.log("Data kosong!");
  // }

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
