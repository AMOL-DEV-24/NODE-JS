//todo : Used to create a file or overwrite existing content. 
const fs = require("fs").promises;

async function writeFile() {
    try{
        await fs.writeFile("../assets/demo.txt", "Hello Nodejs");
        console.log("File Written");
    }
    catch(err){
        console.log(err.message);
        
    }
}
writeFile();