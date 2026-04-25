
const MyModule = require("../EXPORTS [ . ]/add.js");

console.log("add : ",MyModule.add(5, 5 ));
//* Here it returns the undefined because the sayHello function does not return anything
//* it only logs a message to the console. Therefore, when you call MyModule.sayHello(), it executes the function and logs "Hello From Add.js" to the console, 
//* but since there is no return statement in the sayHello function, it returns undefined by default.
console.log("sayHello : ",MyModule.sayHello());