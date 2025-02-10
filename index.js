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
          email: argv.email,
        };
        console.log(dataContact);

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
      command: "update <name>",
      describe: "update contact",
      builder: {
        name: {
          describe: "contact name",
          demandOption: true,
          type: "string",
        },
      },
      handler(argv) {
        contacts.updateData(argv.name);
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
