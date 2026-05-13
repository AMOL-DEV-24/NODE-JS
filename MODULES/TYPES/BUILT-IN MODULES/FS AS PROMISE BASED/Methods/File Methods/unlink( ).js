//todo : Used to delete a file. 
const fs = require("fs").promises;

async function deleteFile() {
    
    try{
        await fs.unlink("../assets/demo1.txt");
        console.log("File Deleted");
    }
    catch(error){
        console.log("error : ",error);
    }
}

deleteFile();