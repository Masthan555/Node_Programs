/* Masthan Swamy */

function findMax(str){
    let max = 0;
    let i=-1, j=0;
    
    while(j<str.length && i<str.length){
        if(str[j] == '1'){
            max = Math.max(max, j-i);
            j++;
        }else{
            i=j;
            j++;
        }

        // console.log(i, j, max, str[i]);
    }

    return max;
}

let str = "111010011001";
console.log(findMax(str));