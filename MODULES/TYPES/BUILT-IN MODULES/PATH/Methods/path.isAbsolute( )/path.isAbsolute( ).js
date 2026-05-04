//! path.isAbsolute() 

const path = require("node:path")
// const path = require("path")

//todo : Checking the Absolute Path of the File
console.log("path.isAbsolute(__filename): ",path.isAbsolute(__filename));
//todo : "./ is Realative Path"  
console.log("path.isAbsolute(__filename): ",path.isAbsolute("./path.js"));