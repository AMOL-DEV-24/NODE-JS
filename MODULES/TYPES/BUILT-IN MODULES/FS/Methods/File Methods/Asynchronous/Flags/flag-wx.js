//! {flag: "wx"} 
//TODO 👉 Prevent overwrite
//TODO 👉 Throws error if file exists

const fs = require("fs")

fs.writeFile("./demo.txt", "Hello", { flag: "wx" }, (err) => {
  if (err) {
    console.log("Error:", err.message);
  }
  else {
    console.log("File Created");
  }
});

//? Error: EEXIST: file already exists, open 'D:\SOFTWARE COURSES\SOFTWARE DEVELOPMENT\MERN STACK DEVELOPER\BACK-END\RUNTIME - ENVIRONMENT\NODE JS\MODULES\TYPES\BUILT-IN MODULES\FS\Methods\File Methods\Asynchronous\writeFile( )\Flags\demo.txt'