const fs = require("fs");

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.write(data);
    res.end();
  });
};

module.exports = {
  renderHTML,
};
