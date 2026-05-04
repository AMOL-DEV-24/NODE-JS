//! 1.path 
//todo : It is used fo the specify the path safely 

const path = require("node:path");

//! 1. __filename 
//todo : Displaying the full File Path  
console.log("__filename: ",__filename);

//! 2. __dirname 
//todo : Displaying the Full path of Directory 
console.log("__dirname: ",__dirname);

//! 3.path.extname() 
//todo : Displaying the extension of the File 
console.log("path.extname: ",path.extname(__filename));
//todo : Displaying the extension of the Directory 
console.log("path.extname: ",path.extname(__dirname));

//! 4.path.basename() 
//*todo : Displaying the Only the Current Filename.
console.log("path.basename(__filename): ",path.basename(__filename)); 
//todo : Displaying the Only the Current Directory Name
console.log("path.basename(__dirname): ",path.basename(__dirname));

//! 5.path.parse() 
//todo : Parsing the Path of file like object
console.log("path.parse(__filename): ",path.parse(__filename));

//! 6.path.format() 
//todo : It is exact opposite of the parse method 
console.log("path.format(path.parse(__filename)): ",path.format(path.parse(__filename)));

//! 7.path.isAbsolute() 
//todo : Checking the Absolute Path of the File
console.log("path.isAbsolute(__filename): ",path.isAbsolute(__filename));
//todo : "./ is Realative Path"  
console.log("path.isAbsolute(__filename): ",path.isAbsolute("./path.js"));

//! 8.path.join() 
//todo : It Joins the Multiple seperator wdepends on the OS 
//? 1.windows : /
//? 2.Linux / macOS : \   
console.log("join-Type 1: ",path.join('folder1', 'folder2', 'path.js'));
console.log("join-Type 2: ",path.join('/folder1', 'folder2', 'path.js'));
console.log("join-Type 3: ",path.join('folder1', '//folder2', 'path.js'));
console.log("join-Type 4: ",path.join('folder1', '//folder2', '../path.js'));
console.log("join-Type 5: ",path.join(__dirname, "./data.json"));

//! 9.path.resolve()
//todo : The Root is considered a Disk 
console.log("resolve-Type 1: ",path.resolve('folder1', 'folder2', 'path.js'));
console.log("resolve-Type 2: ",path.resolve('/folder1', 'folder2', 'path.js'));
console.log("resolve-Type 3: ",path.resolve('folder1', '//folder2', 'path.js'));
console.log("resolve-Type 4: ",path.resolve('folder1', '//folder2', '../path.js'));
console.log("resolve-Type 5: ",path.resolve(__dirname, "./data.json"));


