/* Masthan Swamy */

function platformJumps(arr, c, k, n, cost){
    if(c >= n){
        return cost;
    }

    // console.log(arr[c], c, cost);
    let min = Number.MAX_SAFE_INTEGER;
    for(let i=1; i<=k && (c+i)<=n; i++){
        // console.log(arr[c], c, c+i, cost+Math.abs(arr[c]-arr[c+i]), min);
        min = Math.min(min, platformJumps(arr, c+i, k, n, cost + Math.abs(arr[c]-arr[c+i])));
    }

    return min;
}

let k = 4;//1;//3;
let arr = [4, 1, 2, 7, 8, 1, 2, 7, 8, 6];//[40, 10, 20, 70, 80, 10, 20, 70, 80, 60];//[1, 2, 1];//[1, 3, 4, 5, 2];
let n = arr.length-1;

console.log(platformJumps(arr, 0, k, n, 0));