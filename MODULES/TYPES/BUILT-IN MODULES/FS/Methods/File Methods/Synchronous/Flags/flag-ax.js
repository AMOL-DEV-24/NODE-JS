
const fs = require("fs")
try {
  fs.writeFileSync('./demo.txt', 'Data', { flag: 'ax' });
  console.log("Appended");
} catch (err) {
  console.log("Error:", err.code);
}