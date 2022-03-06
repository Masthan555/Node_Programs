/* Masthan Swamy */
// Links for Recursion problems : https://pastebin.com/gSESMHKv
function m(x, y, count){
    if(x<0 || y<0 || x>=n || y>=n){
        return false;
    }
    if(chess[x][y] == true){
        return false;
    }
    if(count == n*n){
        return true;
    }

    chess[x][y] = true;

    let res = false;
    res = res || m(x-2, y+1, count+1);
    res = res || m(x-2, y-1, count+1);

    res = res || m(x-1, y+2, count+1);
    res = res || m(x+1, y+2, count+1);

    res = res || m(x+2, y+1, count+1);
    res = res || m(x+2, y-1, count+1);

    res = res || m(x-1, y-2, count+1);
    res = res || m(x+1, y-2, count+1);

    chess[x][y] = false;

    return res;
}

let n= 5;
var found = false;
var chess = [];
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        for(let k=0; k<n; k++){
            chess.push(Array(n).fill(false));
        }

        found = m(i, j, 1);
        if(found == true){
            console.log("Found Path", i, j);
        }
    }
}

// if(found == true){
//     console.log("Found Path");
// }