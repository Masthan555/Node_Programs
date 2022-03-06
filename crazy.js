/* Masthan Swamy */

// Immediate Invocation
(function hello(){
    console.log("Thi sis immediate invocation of a Function !!!");
})();

// Function Currying
function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(sum(1)(2)(3));

// Closures => These are nothing but inner functions, which have access to parent function properties even after parent function get destroyed.
function outer(fname){
    return (lname)=>{
        console.log("Hello!   ",fname,lname);
    }
}
let inner = outer("Masthan"); // Outer function executed and gets destroyed here
inner("Soma"); // See output for better understanding