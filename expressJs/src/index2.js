// In this file we are working with hbs means this is our root file now
let express = require("express");
let port = 9000;
let app = express();

// set view enging --> it is mandatory to work with hbs.
app.set("view engine", "hbs");

//now giving root to template engine;
app.get("/", (req, res) => {
  res.render("index", {
    username: "ali0151",
  });
});
app.listen(port, () => {
  console.log(`listening to the portno: ${port}`);
});
