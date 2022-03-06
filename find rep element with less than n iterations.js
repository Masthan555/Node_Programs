/* Here, We will find repetitive element in array with <= n iterations, Where elements in array should be from 1 to n (positive integers) */

let arr = [4,2,6,5,6,3];
/** Here Missing element is 3, and repetitive element is 1 */

function mod(i){
    if(i<0)
        i = i * -1;
    return i;
}

let rep = 0;
for(let i=0; i<arr.length; i++){
    if(arr[mod(arr[i])-1]<0){
        rep = mod(arr[i]);
        break;
    }else{
        arr[arr[i]-1] *= -1;
    }
}

console.log("Repetitive Element is: " + rep);