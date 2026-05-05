
//? {flag: "a"} : used to add or append the data
const fs = require("fs");

fs.writeFile("./appendData.txt", "\n Appended the Data with help of flag", {flag: "a"},(err)=>{
    if(err){
        console.log("Error : ",err);
    }
    else{
        console.log("File Is Created");   
    }
})