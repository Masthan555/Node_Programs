/* Masthan Swamy */

// ToH : There are 3 tables. S, D and H. S initially has n coins arranged in the decreasing order of diameter. Bottom coin has highest diameter and top has smallest. Move all the coins from S to D using H , with following conditions in mind : 1. Only one coin can be moved at a time 2. Only smaller coin can be kept over the bigger one and not vice-versa. How many moves will be needed to move n coins from S to D 

function m(src, des, hel, n){
    if(n == 1){
        return 1;
    }

    return (m(src, hel, des, n-1) + 1 + m(src, des, hel, n-1));
}

let n = 3;
let src = [];
for(let i=0; i<n; i++){
    src[i] = i+1;    
}

console.log(m(src, [], [], n));