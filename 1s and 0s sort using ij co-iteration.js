/* Here, we'll sort array of 1s and 0s using i and j co-iteration techinique which is more efficient and require only 'n' iterations */

let arr = [1,1,1,0,0,0,1,0,1,1,0,0];

let i=0, j=arr.length-1;

while(i<=j){
    if(arr[i] == 1){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        j--;
    }else{
        i++;
    }
}

console.log(arr);