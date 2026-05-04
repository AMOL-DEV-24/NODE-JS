//! path.resolve()
//todo : The Root is considered a Disk 

const path = require("node:path")

console.log("resolve-Type 1: ",path.resolve('folder1', 'folder2', 'path.js'));
console.log("resolve-Type 2: ",path.resolve('/folder1', 'folder2', 'path.js'));
console.log("resolve-Type 3: ",path.resolve('folder1', '//folder2', 'path.js'));
console.log("resolve-Type 4: ",path.resolve('folder1', '//folder2', '../path.js'));
console.log("resolve-Type 5: ",path.resolve(__dirname, "../../data.json"));

