//! Importing Modules
    const inc1 = require("./counter");
    const inc2 = require("./counter");

    inc1();
    inc2();
//! Checking Cache
    console.log("cache : ",require.cache);

//! Deleting the cache 
delete require.cache[require.resolve('./counter.js')];
    