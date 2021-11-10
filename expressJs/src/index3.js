//this file belongs to template/index.hbs
// we using hbs without "views" directory in our root express folder

let express = require("express");
let app = express();
let path = require("path");
let port = 9000;
let templatePath = path.join(__dirname, "../template");
app.set("view engine", "hbs");
app.set("views", templatePath);
app.get("/", (req, res) => {
  res.render("index", {
    username: "Gulbahar Ali",
  });
});
app.listen(port, () => {
  console.log(`listening to the portno: ${port}`);
});
