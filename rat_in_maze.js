/* Masthan Swamy */

let arr = [ [0,0,1,0,0,1,0], 
            [1,0,1,1,0,0,0], 
            [0,0,0,0,1,0,1], 
            [1,0,1,0,0,0,0], 
            [1,0,1,1,0,1,0], 
            [1,0,0,0,0,1,0],
            [1,1,1,1,0,0,0]]; 
let n = 7;
let vis = [];
for(let i=0; i<n; i++){
    vis.push(Array(n).fill(false));
}

function m(x, y){
    if(x<0 || y<0 || x>=n || y>=n){
        return 0;
    }
    if(arr[x][y] == 1){
        return 0;
    }
    if(vis[x][y] == true){
        return 0;
    }
    // Destination
    if(x == n-1 && y == n-1){
        return 1;
    }

    vis[x][y] = true;

    let up = m(x-1, y);
    let right = m(x, y+1);
    let down = m(x+1, y);
    let left = m(x, y-1);

    vis[x][y] = false;

    return up + right + down + left;
}

console.log(m(0,0));