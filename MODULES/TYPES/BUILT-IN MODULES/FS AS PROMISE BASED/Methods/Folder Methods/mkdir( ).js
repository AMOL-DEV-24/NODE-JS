//todo : Used to create a new folder. 
const fs = require("fs").promises;

async function mkdir() {
    try{
        await fs.mkdir("../assets/My Folder");
        console.log("Folder Created");
    }
    catch(error){
        console.log(error);
    }
}

mkdir();