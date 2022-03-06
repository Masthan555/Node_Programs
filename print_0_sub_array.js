/* Masthan Swamy */

function subArray(arr){
    let i=0, j=0;
    while(i<arr.length){
        let sum = 0;
        j = i;
        while(j<arr.length){
            sum += arr[j];
            j++;
            if(sum == 0){
                return({i, j: j-1});
            }
        }
        console.log(i, sum);
        i++;
    }
}

let arr = [8, 2, -7, 5, 3, -1];

console.log(subArray(arr));