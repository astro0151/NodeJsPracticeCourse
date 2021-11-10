let express = require("express");
let app = express();
let port = 9000;
let hbs = require("hbs");
let path = require("path");
let staticPath = path.join(__dirname, "../public");
let templatePath = path.join(__dirname, "../template/views");
let partialPath = path.join(__dirname, "../template/partials");
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("*", (req, res) => {
  res.render("404");
});
app.listen(port, () => {
  console.log("listening port");
});
