//! readFile
//todo : It Asynchronous method  
const fs = require("fs");

//! Uses Callback Function

console.log("======= START =========");


fs.readFile("../../assets/file.txt", "utf-8" ,(error, data) =>{

    if(error){
        console.log("error : ",error); 
    }
    else{
        console.log("fileContent : ",data);   
    }
})

console.log("======= END =========");
