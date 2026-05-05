//! {flag : "w"}
//TODO : 👉 If file exists → data replaced
//TODO : 👉 If not → file created 
const fs = require("fs");

fs.writeFile("./demo.txt", "New Data", { flag: "w" }, (err) => {
  if (err){
    console.log(err);
  }
  else {
    console.log("File Written");
  }
});