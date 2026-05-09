//! {flag: ax }
//TODO : 👉 Safe append
//TODO : 👉 Error if file doesn't exist

const fs = require("fs")

fs.writeFile("./demo.txt", "Safe Append", { flag: "ax" }, (err) => {
  if (err) {
    console.log("Error:", err.message);
  }
  else {
    console.log("Appended");
  }
});

//? Error: EEXIST: file already exists, open 'D:\SOFTWARE COURSES\SOFTWARE DEVELOPMENT\MERN STACK DEVELOPER\BACK-END\RUNTIME - ENVIRONMENT\NODE JS\MODULES\TYPES\BUILT-IN MODULES\FS\Methods\File Methods\Asynchronous\writeFile( )\Flags\demo.txt'