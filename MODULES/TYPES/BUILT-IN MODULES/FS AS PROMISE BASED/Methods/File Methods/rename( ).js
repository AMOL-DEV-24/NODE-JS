//todo : Used to rename a file or folder. 
const fs = require("fs").promises;

async function renameFile() {
    
    try{
        await fs.rename("../assets/demo2.txt", "../assets/newDemo.txt");
        console.log("File Renamed Succefully");
    }
    catch(error){
        console.log(error);
    }
}

renameFile();