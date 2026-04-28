//! Destructuring the module

const math = require("../MODULE.EXPORTS/exportMultipleAsObject1.js")

const {add, sub} = math;

console.log(add(2, 5));
console.log(sub(5, 2))