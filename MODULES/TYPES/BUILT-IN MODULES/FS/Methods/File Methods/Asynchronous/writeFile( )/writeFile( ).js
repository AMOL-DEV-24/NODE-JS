
const fs = require("fs");


fs.writeFile("./demo.txt","This is Demo File\nWith the Escape Character",(err)=>{

        if(err){
            console.log("Error : ",err);
        }
        else{
            console.log("File Is Written");
        }
})