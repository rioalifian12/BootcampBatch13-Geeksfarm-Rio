const yargs = require("yargs");

const createDir = require("./src/createDir");
const saveData = require("./src/saveData");

const main = async () => {
  createDir.create();

  yargs.command({
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
      const contact = {
        name: argv.name,
        phone: argv.phone,
        email: argv.email,
      };
      console.log(contact);

      saveData.saveData(contact);
    },
  });

  yargs.parse();
};

main();
