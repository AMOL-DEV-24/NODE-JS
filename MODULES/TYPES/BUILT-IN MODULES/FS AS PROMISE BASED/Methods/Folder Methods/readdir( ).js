//todo : Used to read all files and folders inside a directory. 
const fs = require("fs").promises;

async function readdir() {
    
    try{
        const files = await fs.readdir("../assets");
        console.log("Files : ", files);
        
    }
    catch(error){
        console.log("error : ",error);
    }
}

readdir();