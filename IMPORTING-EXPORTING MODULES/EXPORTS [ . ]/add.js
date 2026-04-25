exports.sayHello = () =>{
    console.log("Hello From Add.js");
}

exports.add = (a, b) =>{
    return a + b;
}

//! ALTERNATIVE WAY TO EXPORT MODULES
//* Here you exports the functions as an object, which can be imported in other files using require() function
//* exports is short for module.exports, and both can be used to export functions, objects, or values from a module. 
//* However, when you assign a new object to exports, it will not work as expected because exports is just a reference to module.exports.
//* Therefore,it is recommended to use module.exports when exporting multiple functions or objects to avoid confusion and ensure that the correct object is exported.  
// exports ={
//     sayHello,
//     add
// }