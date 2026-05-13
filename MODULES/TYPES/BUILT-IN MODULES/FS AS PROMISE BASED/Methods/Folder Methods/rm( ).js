//todo : Used to remove a file or folder.

const fs = require("fs").promises;

async function rm() {
    try{
        await fs.rm("../assets/My Folder", {recursive: true});
        console.log("Folder REmoved");
    }
    catch(err){
        console.log("error : ",err);
    }
}

rm();