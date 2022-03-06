/* Masthan Swamy */

function merge_arr(arr1, arr2){
    let n1 = arr1.length;
    let n2 = arr2.length;
    let i1 = 0;
    let i2 = 0;
    let count = 0;
    let sorted_arr = [];
    while(count < (n1 + n2)){
        if(i1<n1 && i2<n2){
            if(arr1[i1] < arr2[i2]){
                sorted_arr.push(arr1[i1]);
                i1++;
                count++;
            }else{
                sorted_arr.push(arr2[i2]);
                i2++;
                count++;
            }
        }else if(!i1<n1){
            sorted_arr.push(arr2[i2]);
            i2++;
            count++;
        }else if(!i2<n2){
            sorted_arr.push(arr1[i1]);
            i1++;
            count++;
        }
    }

    return sorted_arr;
}

let arr1 = [2];
let arr2 = [1, 3, 5, 8];
console.log(merge_arr(arr1, arr2));