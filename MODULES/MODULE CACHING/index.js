//! Importing the Module
const superHero = require("./superHero")

console.log("superHero : ",superHero.getName());
superHero.setName("Superman")
console.log("superHero :",superHero.getName());

// Checking Cache
console.log(require.cache);



