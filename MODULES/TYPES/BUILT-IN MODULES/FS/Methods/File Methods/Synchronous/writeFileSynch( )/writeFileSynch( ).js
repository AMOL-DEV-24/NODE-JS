
const fs = require("fs");


//? Example 1 
// fs.writeFileSync("./demo.txt", "Hello World");
// console.log("File Is Created");

//? Example 2

try{
    fs.writeFileSync("./demo1.txt","Error Handling \nFile Creating Operation with Synchronously with New Line.");
    console.log("File is Written");
}
catch(err){
    console.log("Error : ",err);
    
}