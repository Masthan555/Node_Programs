/* Here we are going to sort an array containing only 1s and 0s using count method taking 2n iterations */

let arr = [1,1,1,0,0,0,1,0,1,1,0,0];

let c0=0;

for(let i=0; i<arr.length; i++){
    if(arr[i] == 0){
        c0++;
    }
}

for(let i=0; i<arr.length; i++){
    if(c0 != 0){
        arr[i] = 0;
        c0--;
    }else{
        arr[i] = 1;
    }
}

console.log(arr);