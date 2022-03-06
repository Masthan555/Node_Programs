function rotate(arr, start, end){

    while(start<=end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr;
}

let arr = [1,2,3,4,5];
let k = 1;
let n = arr.length-1;

arr = rotate(arr, 0, n);

console.log("Reverse: " + arr);
arr = rotate(arr, 0, k-1);
arr = rotate(arr, k, n);

console.log(arr);