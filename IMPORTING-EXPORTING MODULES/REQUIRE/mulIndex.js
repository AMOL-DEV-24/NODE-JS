//! Destructuring the exported object to get the mul function and sayHello function
const {mul, sayHello} = require("../MODULE.EXPORTS/mul.js")

console.log("mul : ",mul(2, 2));
sayHello();