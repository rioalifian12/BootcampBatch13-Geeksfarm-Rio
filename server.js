const http = require("http");
const fs = require("fs");

const port = 3000;

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

http
  .createServer((req, res) => {
    const url = req.url;
    console.log(url);

    res.writeHead(200, { "content-type": "text/html" });
    if (url === "/about") {
      renderHTML("about.html", res);
    } else if (url === "/contact") {
      renderHTML("contact.html", res);
    } else {
      renderHTML("index.html", res);
    }
  })
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
