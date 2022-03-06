/* Masthan Swamy */

let arr = [1, 2, -5, 6, 1, 1];
let k = 4;
let i=0, j=arr.length-1;

arr.sort();
let count = 0;
while(i<j){
    if((arr[i]+arr[j]) == k){
        count++;
    }
    
}