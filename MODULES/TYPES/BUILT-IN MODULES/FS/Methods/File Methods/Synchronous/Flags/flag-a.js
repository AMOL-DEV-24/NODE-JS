
const fs = require('fs')

fs.writeFileSync('./demo.txt', '\nNew Line', { flag: 'a' });
console.log("Appended");