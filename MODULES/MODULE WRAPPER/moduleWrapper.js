
(function (message){
    const superHero = "BATMAN";
    console.log(message, superHero);
})("Hello");

(function (message){
    const superHero = "SUPERMAN";
    console.log(message ,superHero);
})("Hey");

//! Internally it heeping like that 
(function (exports, require, module, __filename, __dirname){
    const superHero = "BATMAN";
    console.log(superHero);
    console.log(__filename); // undefined 
    console.log(__dirname); // undefined
    
})();

//You need to pass the Inputs 
(function (exports, require, module, __filename, __dirname){
    const superHero = "BATMAN";
    console.log(superHero);
    console.log("__filename : ",__filename);
    console.log("__dirname : ",__dirname);
    
})(exports, require, module, __filename, __dirname);