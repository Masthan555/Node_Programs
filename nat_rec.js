/* Masthan Swamy */

/*function m(arr, n){
    if(n==0){
        console.log(arr[n]);
        return arr[n];
    }
        
    m(arr, n-1);
    console.log(arr[n]);
}*/

function m(arr, i){
    if(i<0 || i>=arr.length){
        return;
    }

    console.log(arr[i]);
    m(arr, i+1);
}


let arr = [10,40,20];
// m(arr, arr.length-1);
m(arr, 0);