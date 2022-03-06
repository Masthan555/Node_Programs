/* Masthan Swamy */

let arr = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];

let m = n = 9;

function isSafe(num, x, y){
    // check whether n exists in row
    for(let i=0; i<m; i++){
        if(arr[x][i] == num)
            return false;
    }
    // check whether n exists in column
    for(let i=0; i<n; i++){
        if(arr[i][y] == num)
            return false;
    }

    // check in major square
    let row = 0, col = 0;
    if(x>2 && x<6)  row = 3;
    else if(x>5)    row = 6;
    if(y>2 && y<6)  col = 3;
    else if(y>5)    col = 6;

    for(let i=row; i<(row+3); i++){
        for(let j=col; j<(col+3); j++){
            if(arr[i][j] == num)
                return false;
        }
    }

    return true;
}

// console.log(isSafe(8, 1, 6));

function display(){
    let str = "";
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            str += arr[i][j] + " ";
        }
        str += "\n";
    }
    console.log(str);
}

let count = 0;
function sudoku(x, y){
    if(x >= m){
        display();
        return true;
    }

    if(y>=n){
        return sudoku(x+1, 0);
    }

    if(arr[x][y] == "."){
        // console.log(x, y, arr[x]);
        console.log(x, y);
        for(let i=1; i<=9; i++){
            if(isSafe(i, x, y)){
                arr[x][y] = ""+i;
                if(sudoku(x, y+1)){
                    return true;
                }
            }
        }
        arr[x][y] = ".";
        return false;
    }else{
        return sudoku(x, y+1);
    }
}

sudoku(0, 0);