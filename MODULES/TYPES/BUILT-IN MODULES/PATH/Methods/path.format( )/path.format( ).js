//! path.format() 
//todo : It is exact opposite of the parse method 

const path = require("path")
console.log("path.format(path.parse(__filename)): ",path.format(path.parse(__filename)));