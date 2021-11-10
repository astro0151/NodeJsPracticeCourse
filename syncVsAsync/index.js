// let fs = require("fs");
// //fs.writeFileSync("read.txt", "Name:Gulbahar Ali");
// fs.appendFileSync("read.txt", " Mobile:8807030166 and 6395061644");
// fs.appendFileSync("read.txt", " Address: Noida,Utter Pradesh (203207)");

// the synchronous way
// let dataSync = fs.readFileSync("read.txt", "utf-8");
// console.log(dataSync);
// console.log("checking synchronous way how it works");

// // the asynchronous way
// fs.readFile("read.txt", "utf-8", (err, data) => {
//   console.log(err);
//   console.log(data);
// });
// console.log("checking asynchronousely way");

// // import way to use node module
// //let fs = require("fs");

// import { readFile } from "fs";
// readFile("read.txt", "utf-8", (err, data) => {
//   console.log(err);
//   console.log(data);
// });
