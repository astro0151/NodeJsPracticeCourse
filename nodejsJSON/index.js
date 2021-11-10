let fs = require("fs");
let bioData = {
  name: "Gulbahar Ali",
  contact: 63095061644,
  skills: "MERN stack",
  designation: "Full stack developer",
  address: "NOIDA,UP",
};

let jsonData = JSON.stringify(bioData); // converting object into json file
// console.log(jsonData);

/// json data addded to another file jsonFile.json
// fs.writeFile("jsonFile.json", jsonData, (err) => {
//   //adding data into another file which is going to be covert from object to json then file extension should be .json....
//   console.log("json format data added into another file successfully.");
// });

let objData = JSON.parse(jsonData); // convertion json into object back
// console.log(objData);
// fs.readFile("jsonFile.json", "utf-8", (err, data) => {
//   if (err) return;
//   console.log(err);
//   console.log(data);
// });
