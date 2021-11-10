let http = require("http");
let server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("welcome to home page......");
  } else if (req.url == "/about") {
    res.end("Now you are in about us page..........");
  } else if (req.url == "/contact") {
    res.end("Now you  are in contact us page");
  } else if (req.url == "/service") {
    res.end("this is  our services page");
  } else {
    res.writeHead(404, "Not found", { "content-type": "text/html" });
    res.end("<h3>eror 404,<br> Ooops!Page NOt Found... </h3>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening port :8000");
});
