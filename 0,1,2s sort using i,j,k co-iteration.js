/* Here, we'll sort array of 1s 2s and 0s using i j and k co-iteration techinique which is more efficient and require only 'n' iterations */

let arr = [2,1,1,1,2,2,0,0,1,2,0,1];

let i=0, j=0, k=arr.length-1;

while(j <= k){
    if(arr[j] == 2){
        let temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        
        k--;
    }else if(arr[j] == 0){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        
        i++;
        j++;
    }else{
        j++;
    }
}

console.log(arr);