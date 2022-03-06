/* Masthan Swamy */

let mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

let cur = 0;
let row = mat.length;
let col = mat[0].length;
let res = [];
function down(){
    let op = [];
    if(cur < col){
        for(let j = 0; j<row; j++){
            op.push(mat[j][cur]);
        }
        res.push(op);
        // console.log("down", op);
        return ++cur;
    }else{
        return -1;
    }
}

function up(){
    let op = [];
    if(cur<col){
        for(let j=row-1; j>=0; j--){
            op.push(mat[j][cur]);
        }
        res.push(op);
        // console.log("up", op);
        return ++cur;
    }else{
        return -1;
    }
}

function printWave(){
    let flag = true;
    while(down() != -1 && up() != -1){
        // nothing
    }

    console.log(res);
}

console.log(printWave());