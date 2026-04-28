//! Exporting Multiple Function Using As Object Pattern

//? Scenario 1 
const add = (a, b) =>{
    return  a + b;
}

const sub = (a, b) =>{
    return a -b;
}

module.exports ={
    add,
    sub
}



