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

function inversion_pairs(arr, start, end){
    if(start>end){
        return;
    }
    let mid = parseInt( ( end - start ) / 2);
    inversion_pairs(arr, );
}