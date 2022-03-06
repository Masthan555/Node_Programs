/* Masthan Swamy */

function grid(arr, x, y){
    let m = arr.length;
    let n = arr[0].length;

    if(x<0 || y<0 || x>=m || y>=n){
        return 0;
    }
    if(arr[x][y] == 1){
        return 0;
    }
    if(visited[x][y] == true){
        return 0;
    }
    if(x == m-1 && y == n-1){
        return 1;
    }

    visited[x][y] = true;
    // Now traverse in all directions from each cell
    let sum = 0;
    sum += grid(arr, x, y-1); // left
    sum += grid(arr, x+1, y); // down
    sum += grid(arr, x, y+1); // right
    sum += grid(arr, x-1, y); // up

    visited[x][y] = false;

    return sum;
}

let arr = [[0,0,0], [0,0,0], [0,0,0]];
let visited = [];
for(let i=0; i<arr.length; i++){
    visited.push(Array(arr[0].length).fill(false));
}

console.log(grid(arr, 0, 0));

/**
 0 0 0
 0 1 0
 0 0 0
 */