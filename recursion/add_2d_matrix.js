/* Masthan Swamy */

let arr1 = [[1, 2, 3],
            [4, 5, 6]];
let arr2 = [[1, 1, 1],
            [1, 1, 1]];

let m = arr1.length-1;
let n = arr1[0].length-1;
let arr3 = Array(m+1).fill(0);
for(let i=0; i<arr3.length; i++){
   arr3[i] = Array(n+1).fill(0);
}

function add(i, j){
    if( i > m && j > n){
        return;
    }
    if(i>m){
        return;
    }
    if(j>n){
        add(i+1, 0);
        return;
    }

    // console.log(i, j, m, n, arr3, "\n");
    arr3[i][j] = arr1[i][j] + arr2[i][j];
    add(i, j+1);

    return arr3;
}

console.log(add(0,0));