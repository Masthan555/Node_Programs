/* Masthan Swamy */

function countSum(arr, x){
    if(x == 0) return 0;
    if(x < 0) {
        return Number.MAX_SAFE_INTEGER;
    }
    let min = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<arr.length; i++){
        min = Math.min(min, countSum(arr, x-arr[i]));
    }

    return 1 + min;
}

let arr = [1, 5, 15, 25, 30, 35];
let x = 0;

console.log(countSum(arr, x));