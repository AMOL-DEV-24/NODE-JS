
const fs = require("fs")

try {
  fs.writeFileSync('./demo.txt', 'Hello', { flag: 'wx' });
  console.log("Created");
} catch (err) {
  console.log("Error:", err.code);
}