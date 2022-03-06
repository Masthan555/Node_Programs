/* Masthan Swamy */

let maxSub = (arr, k)=>{
    let sub_max = -1;
    let res = [];
    let j=0;
    for(let i=0; i<arr.length && (i+k-1)<arr.length;i++){
        j = i+k-1;
        if(sub_max != -1){
            sub_max = Math.max(sub_max, arr[j]);
            res.push(sub_max);
        }else{
            for(j = i; j<(i+k); j++){
                sub_max = Math.max(sub_max, arr[j]);
            }
            res.push(sub_max);
        }
        console.log(i);
    }

    return res;
}

let arr = [1, 2, 3, 1, 4];
console.log(maxSub(arr, 3));