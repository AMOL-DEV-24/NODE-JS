//todo : Used to add new content into an existing file. 
const fs = require("fs").promises;

async function appendFile() {
    try{
        await fs.appendFile("../assets/demo.txt", "\n New Data Added");
        console.log("Data Appended");
    }
    catch(err){
        console.log(err);
        
    }
}

appendFile();