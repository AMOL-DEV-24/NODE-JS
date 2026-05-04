
const path = require("node:path")

//* 1.Displaying the extension of the File 
console.log("path.extname: ",path.extname(__filename));

//* 2.Displaying the extension of the Directory 
console.log("path.extname: ",path.extname(__dirname));