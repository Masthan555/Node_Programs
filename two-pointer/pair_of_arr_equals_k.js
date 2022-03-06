/* Masthan Swamy */

let arr = [1, 2, -5, 6, 1, 1];
let k = 4;
let i=0, j=1;

let flag = false;
while(i<arr.length){
    if((k - arr[i]-arr[j]) == 0){
        console.log("YES");
        flag = true;
        break;
    }
    if(j>=arr.length-1){
        i++;
        j=i+1;
    }else{
        j++;
    }
}

if(!flag){
    console.log("NO");
}