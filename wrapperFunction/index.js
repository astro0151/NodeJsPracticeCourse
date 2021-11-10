let myName = "Gulbahar Ali";
console.log(myName);
// |
// |
// |
// |       //in reality the scenario behind the scene is;
// |      // the above code;
// |
// ^
(function (exports, require, module, __filename, __dirname) {
  // these are arguments passed through node
  let myName = "Gulbahar Ali";
  console.log(myName); /// wrapped code as function by node itself and now this function having
  // its scope private because of wrapping
})(); //this wrapped function is created by node
