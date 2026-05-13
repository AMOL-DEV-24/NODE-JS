//todo : Used to copy one file into another file.

const fs = require("fs").promises;

async function copyFile() {
    try{
        await fs.copyFile("../assets/demo.txt", "../assets/copy.txt");
        console.log("🚀 ~ copyFile ~ data:", data)
        console.log("File Copied"); 
    }
    catch(err){
        console.log("error : ",err);
    }
}
copyFile();