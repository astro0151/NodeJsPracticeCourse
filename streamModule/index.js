let fs = require("fs");
let http = require("http");
let server = http.createServer();
server.on("request", (req, res) => {
  fs.readFile(`${__dirname}/input.txt`, "utf-8", (err, data) => {
    if (err) return console.log(err);
    res.end(data);
  });
});
server.listen(8000, "127.0.0.1", () => {
  console.log("server is listening port");
});
