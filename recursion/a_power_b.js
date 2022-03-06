/* Masthan Swamy */

// This below fn() will take O(n) where n=b iteration 
function power1(a, b){
    if(b == 0) return 1;
    return a * power1(a, b-1);
}

// This below fn() will take O(logn) where n=b iteration
function power2(a, b){
    if(b === 0) return 1;
    
    if(b%2 == 0){
        let x = power2(a, parseInt(b/2));
        return(x*x);
    }else{
        let x = power2(a, parseInt(b/2));
        return(a * x * x);
    }
}

let a = 5, b = 3;

// console.log(power1(a, b));
console.log(power2(a, b));