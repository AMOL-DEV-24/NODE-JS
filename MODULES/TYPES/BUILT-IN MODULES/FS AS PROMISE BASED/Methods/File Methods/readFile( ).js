//todo : Used to read file content. 
const fs = require("fs").promises;

async function readFile() {
    try{
        const data = await fs.readFile("../assets/demo.txt", "utf-8");
        console.log("File Data : ",data)
    }
    catch(err){
        console.log(err);
    }
}

readFile();