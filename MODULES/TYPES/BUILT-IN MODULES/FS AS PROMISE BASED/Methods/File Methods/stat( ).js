//todo : Used to get file information like size, created date, modified date, etc.

const fs = require("fs").promises;

async function stat() {
    try{
        const info = await fs.stat("../assets/demo.txt");
        console.log("File Info : ",info);

        //* Better Readble Format 
        console.log("File Size : ",info.size);
        console.log("Created : ",info.birthtime);
    }
    catch(error){
        console.log("Error : ",error);
    }
}

stat();