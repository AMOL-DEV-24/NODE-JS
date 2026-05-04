//! path.join() 
//todo : It Joins the Multiple seperator wdepends on the OS 
//? 1.windows : /
//? 2.Linux / macOS : \   
const path = require("node:path");

console.log("join-Type 1: ",path.join('folder1', 'folder2', 'path.js'));
console.log("join-Type 2: ",path.join('/folder1', 'folder2', 'path.js'));
console.log("join-Type 3: ",path.join('folder1', '//folder2', 'path.js'));
console.log("join-Type 4: ",path.join('folder1', '//folder2', '../path.js'));
console.log("join-Type 5: ",path.join(__dirname, "./data.json"));

