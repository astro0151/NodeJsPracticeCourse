// let fileSystem = require("fs");
// fileSystem.writeFileSync("myInfo.txt", "myName is GUlbahar ali");
// console.log("file created and data is added into myInfo.txt file");

//add more data into existing file
// let fs = require("fs");
//fs.appendFileSync("myInfo.txt", "I am a full stack developer");

// let buf_Data = fs.readFileSync("myInfo.txt");
// console.log(buf_Data); //output will be buffer data. to prevent it use file encoding

// let buf = fs.readFileSync("myInfo.txt");
// let org_data = buf.toString();
// console.log(org_data);

// task
// adding data into file bio.txt in task folder
let fs = require("fs");
// fs.writeFileSync("./task/bio.txt", "Hello this is Gulbahar ali");
// fs.appendFileSync("./task/bio.txt", "new data is I am web developer");
//reading data existing in bio.txt file without buffer data
// let data = fs.readFileSync("./task/bio.txt", "utf-8");
// console.log(data);

//renaming existion file
fs.renameSync("./task/bio.txt", "./task/myBio.txt");
