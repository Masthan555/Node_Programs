/* Masthan Swamy */

var arr = [ [1,2,3,4,5], 
            [6,7,8,9,10], 
            [11,12,13,14,15] ];

let m = arr.length;
let n = arr[0].length;
var r1 = 0;
var r2 = m;
var c1 = 0;
var c2 = n;

let cnt = 0;
while(cnt != m*n){
    let i, j;
    
    i = r1;
    for(j=0; j<c2; j++){
        console.log(arr[i][j], "1");
        cnt++;
    }
    r1++;

    j = c2-1;
    for(i=r1; i<r2; i++){
        console.log(arr[i][j], "2");
        cnt++;
    }
    c2--;

    // console.log(start, end);
    i = r2-1;
    for(j=c2-1; j>r1; j--){
        console.log(arr[i][j], "3");
        cnt++;
    }
    
    j = r1-1;
    for(i = r2-1; i>r1; i--){
        console.log(arr[i][j], "4");
        cnt++;
    }
}
