let EventEmitter = require("events"); // class created thats why first letter is capital
let event = new EventEmitter(); //  object created
// event.on("sayMyName", () => {
//   console.log("Gulbahar Ali"); // event to be fire
// });
// event.emit("sayMyName"); //fireing events

// event.on("sayMyName", () => {
//   console.log("Gulbahar Ali"); // event to be fire
// });
// event.on("sayMyName", () => {
//   console.log("Gulbahar Ali"); // event to be fire
// });
// event.on("sayMyName", () => {
//   console.log("Gulbahar Ali"); // event to be fire
// });
// event.on("sayMyName", () => {
//   console.log("Gulbahar Ali"); // event to be fire
// });

// event.emit("sayMyName");

event.on("checkPage", (statusCode, msg) => {
  console.log(`status Code is: ${statusCode} and Page is ${msg}`);
});
event.emit("checkPage", 200, "OK....yeah!");
