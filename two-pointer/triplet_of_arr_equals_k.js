/* Masthan Swamy */

let arr = [-5, 1, -6, 2, 2, 4, 4]; // -6 -5 1 2 2 4 4
let n = 7;
let i=0, j=1, k=arr.length-1;

let count = 0;
arr.sort();
while(j<k && i<k){
    if((arr[i] + arr[j] + arr[k]) == n){
        count++;
        j++;k--;
    }
    else if((arr[i] + arr[j] + arr[k]) < n){
        if(j==k-1){
            i++;
        }else{
            j++;
        }
    }
    else if((arr[i] + arr[j] + arr[k]) < n){
        k--;
    }
    console.log(arr[i], arr[j], arr[k]);
}

console.log(count);