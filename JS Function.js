// Different ways to declare a function
function doctorize(firstname) {
  return `Dr.${firstname}`;
}
// Anon function
function (firstname){
    return `Dr.${firstname}`;
}
// Function Expression
const doctorize=function(firstname){
   return `Dr.${firstname}`;
}
//Arrow function
// Regular function
function inchToCm(inches){
    const cm=inches*2.54
    return cm
};
function makeAbaby(first,last){
    const baby= {
        name: `${first}${last}`,
        age:0,
    }
    return baby
}

//Arrow functions
const inchToCm=inches=>inches*2.54;
const add=(a,b=3)=>a+b;                                                                         
const makeABaby=(first,last)=>({name:`${first}${last}`,age:0}) //round brackets are used to return object implicitly, it wll not think its block scope.
//IIFE
//Immediately invoked function expression.

(function(age){
    return `I am cool and my age is ${age}`
})(27); // auto runs

