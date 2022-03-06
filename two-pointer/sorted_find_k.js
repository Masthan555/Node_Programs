/* Masthan Swamy */

let arr = [1, 1, 4, 6, 7, 11];
let k = -4;
let i=0, j=1;

let flag = false;

if(k<0)
    k = k*-1;
while(j<arr.length){
    let diff = arr[j] - arr[i];
    if(diff == k){
        console.log("YES", arr[i], arr[j]);
        flag = true;
        break;
    }else if(diff<k){
        j++;
    }else if(diff>k){
        if(i+1 == j){
            i++;j++;
        }else{
            i++;
        }
    }
}
if(!flag)
    console.log("NO");