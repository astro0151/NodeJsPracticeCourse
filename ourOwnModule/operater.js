let add = (a, b) => {
  return a + b;
}; /// this function has its scope private
// module.exports = add; // now add functionn has public scope

// suppose we have multiple functions to export then
let sub = (a, b) => {
  return a - b;
};
let multi = (a, b) => {
  return a * b;
};
let div = (a, b) => {
  return a / b;
};

// // first way, quite recommended
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.multi = multi;
// module.exports.div = div;

// the most recommended way to export our own module;
module.exports = { add, sub, multi, div }; // same like javascript object destructuring
