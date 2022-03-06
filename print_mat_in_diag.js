/* Masthan Swamy */

let arr = [ [1,2,3,4,5],
            [6,67,8,9,10]
            [11,12,13,14,15]  ];

let r = arr.length;
let c = arr[0].length;

for(let i=0; i<r; i++){

    for(let j=0; j<i; j++){
        console.log(arr[i][j]); 
    }

}