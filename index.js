const yargs = require("yargs");

const createDir = require("./src/createDir");
const contacts = require("./src/contactController");

const main = async () => {
  createDir.create();

  yargs
    .command({
      command: "add",
      describe: "add new contact",
      builder: {
        name: {
          describe: "contact name",
          demandOption: true,
          type: "string",
        },
        phone: {
          describe: "contact phone",
          demandOption: true,
          type: "string",
        },
        email: {
          describe: "contact email",
          demandOption: false,
          type: "string",
        },
      },
      handler(argv) {
        const dataContact = {
          name: argv.name,
          phone: argv.phone,
          email: argv.email || "",
        };

        // const data = validation.getInput(dataContact.name);
        // console.log(data);

        contacts.saveData(dataContact);
      },
    })
    .command({
      command: "list",
      describe: "list contact",
      handler(argv) {
        contacts.readData();
      },
    })
    .command({
      command: "detail",
      describe: "detail contact",
      builder: {
        name: {
          describe: "contact name",
          demandOption: true,
          type: "string",
        },
      },
      handler(argv) {
        contacts.readDetailData(argv.name);
      },
    })
    .command({
      command: "update",
      describe: "update contact",
      builder: {
        name: {
          describe: "contact name",
          demandOption: true,
          type: "string",
        },
        newName: {
          describe: "contact new name",
          demandOption: false,
          type: "string",
        },
        newPhone: {
          describe: "contact new phone",
          demandOption: false,
          type: "string",
        },
        newEmail: {
          describe: "contact new email",
          demandOption: false,
          type: "string",
        },
      },
      handler(argv) {
        contacts.updateData(
          argv.name,
          argv.newName,
          argv.newPhone,
          argv.newEmail
        );
      },
    })
    .command({
      command: "delete",
      describe: "delete selection contact",
      builder: {
        name: {
          describe: "contact name",
          demandOption: true,
          type: "string",
        },
      },
      handler(argv) {
        contacts.deleteData(argv.name);
      },
    });

  yargs.parse();
};

main();
