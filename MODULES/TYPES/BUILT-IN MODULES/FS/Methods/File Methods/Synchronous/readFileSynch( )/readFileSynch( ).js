//! Importing the Module

const fs = require("node:fs");

console.log("======= START =========");

//? Not Readble 
const fileContent1 = fs.readFileSync("../../assets/file.txt");
console.log("fileContent1 : ",fileContent1);

//? UTF8 : Human Readble format 
const fileContent2 = fs.readFileSync("../../assets/file.txt", "utf-8");
console.log("fileContent2: ",fileContent2);

console.log("======= START =========");
