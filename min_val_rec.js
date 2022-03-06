/* Masthan Swamy */

function m(arr, i){
    if(i == arr.length-1){
        return arr[i];
    }

    return Math.min(arr[i], m(arr, i+1));
}

let arr = [3,1,5,4,2];
console.log(m(arr, 0));