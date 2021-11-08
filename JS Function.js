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
//Arrow functions
const inchToCm=inches=>inches*2.54;




const add=(a,b=3)=>a+b;