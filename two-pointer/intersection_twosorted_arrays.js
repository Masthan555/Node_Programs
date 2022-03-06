/* Masthan Swamy */

let arr1 = [2, 5, 6];
let arr2 = [4, 5, 6, 8, 10];

let i=0, j=0;
while(i<arr1.length && j<arr2.length){
    if(arr1[i] == arr2[j]){
        process.stdout.write(arr1[i] + " ");
        i++;
        j++;
    }else if(arr1[i] < arr2[j]){
        i++;
    }else if(arr1[i] > arr2[j]){
        j++;
    }
}