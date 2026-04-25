//! MULTIPLE EXPORTS USING AN OBJECT
const sayHello = () =>{
    console.log("Hello From Mul.js");
}

const mul = (a, b) =>{
    return a * b;
}

module.exports ={
    sayHello,
    mul
}

