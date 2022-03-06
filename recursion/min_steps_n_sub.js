/* Masthan Swamy */

let count = 0;
function minSteps(n){
    if(n<=9) return 1;

    let arr = ("" + n).split("");
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let i=0; i<arr.length; i++){
        // console.log(n, arr, arr[i]);
        if(arr[i] != 0)
            min = Math.min(min, minSteps(n - arr[i]));
    }

    return 1 + min;
}

let n = 15;
console.log(minSteps(n));