/* Masthan Swamy */

function convertMatrix(arr, row, col){
    let res = [];
    let op = [];
    for(let i=0; i<row; i++){
        res.push(Array(col));
    }
    let idx = 0;
    for(let j=0; j<row; j++){
        for(let i=0; i<col; i++){
            res[j][i] = arr[idx];
            idx++;
        }
    }
    return res; 
}  
let mat = [1, 2, 3, 4];
console.log(convertMatrix(mat, 2, 3));