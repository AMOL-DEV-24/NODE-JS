
const subModule = require("../MODULE.EXPORTS/sub")

console.log("sub :",subModule(5, 3));
//* Here we are directly exporting a function in sub.js,
//* so when we require it, we get the function itself. Therefore, we can call subModule(5, 3) to execute the function and get the result of 5 - 3, which is 2.