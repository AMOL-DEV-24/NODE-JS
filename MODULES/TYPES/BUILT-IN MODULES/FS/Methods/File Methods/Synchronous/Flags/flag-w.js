const fs = require('fs');

fs.writeFileSync('./demo.txt', 'Hello World', { flag: 'w' });
console.log("File Written");