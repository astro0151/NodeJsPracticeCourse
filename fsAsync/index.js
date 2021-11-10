let fs = require("fs");
fs.writeFile("read.txt", "data adding to file", (err, data) => {
  //we must add callback function in
  //asynchronous method to tell that what to do when task is completed
  console.log(err);
  console.log(data);
  console.log("data added successfully into read.txt file");
});
