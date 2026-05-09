//! {flag: "a"} 
//TODO : 👉 Adds data at end
//TODO : 👉 File created if not exists
const fs = require("fs");

fs.writeFile("./append.txt", "\nNew Line Added", { flag: "a" }, (err) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log("Data Appended");
  }
});