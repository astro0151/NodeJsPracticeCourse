let http = require("http");
let fs = require("fs");
let server = http.createServer((req, res) => {
  let data = fs.readFileSync(`${__dirname}/userApi/userapi.json`, "utf-8");
  console.log(__dirname);
  console.log(__filename);
  let objData = JSON.parse(data);
  if (req.url == "/") {
    res.end(data);
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objData[0].name);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h2>error.......Page Not Found</h2>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("server is listening");
});
