// console.log(add(5, 5));
// //output:  ─$ node index.js
// /home/astrophile/nodeJs_Practice/ourOwnModule/index.js:1
// console.log(add(5, 5));
//         ^

// ReferenceError: add is not defined
//     at Object.<anonymous> (/home/astrophile/nodeJs_Practice/ourOwnModule/index.js:1:9)

//becaue we are calling the function that is not defeined in root file
// so to get correct output we need to import the operator module by exporting that there;

// let recivedModule = require("./operater"); // first way to import/require module,quite recommended

// console.log(recivedModule);
// console.log(recivedModule.add(10, 5));
// console.log(recivedModule.sub(10, 5));
// console.log(recivedModule.multi(10, 5));
// console.log(recivedModule.div(10, 5));

// the recommended way
let { add, sub, multi, div } = require("./operater");
console.log(add(10, 5));
console.log(sub(10, 5));
console.log(multi(10, 5));
console.log(div(10, 5));
