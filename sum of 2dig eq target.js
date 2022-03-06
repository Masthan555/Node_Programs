let arr = [1,2,8,14,16,22,35];
let target = 30;

let i=0, j=arr.length-1;

// No of possible sum of pairs that can equal to target
let count = 0;
while(i<=j){
    if(arr[i] + arr[j] == target){
        count++;
        i++;
        j--;
    }else if(arr[i] + arr[j] < target){
        i++;
    }else if(arr[i] + arr[j] > target){
        j--;
    }
}

console.log(count);