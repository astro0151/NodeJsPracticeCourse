let chalk = require("chalk");
// let backBlue = chalk.blue.underline.bgGreen(
//   "The text color of output is blue........"
// );
// let backRed = chalk.red.underline.inverse(
//   "The text of color of ouput is red now "
// );
// // console.log(backBlue);
// console.log(backRed);
let validator = require("validator");
let emailTrue = validator.isEmail("gulbaharali@gmail.com");
let emailWorng = validator.isEmail("ali.com");
console.log(
  emailTrue ? chalk.green.inverse(emailTrue) : chalk.red.inverse(emailTrue)
);
console.log(
  emailWorng ? chalk.green.inverse(emailWorng) : chalk.red.inverse(emailWorng)
);
