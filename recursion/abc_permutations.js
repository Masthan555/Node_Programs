/* Masthan Swamy */

function swap(str, i, j){
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
}

function permutations(str, i){
    if(i == str.length-1){
        console.log(str);
        return;
    }

    let arr = Array(26).fill(false);
    for(let j=i; j<str.length; j++){
        let start = str[j];
        if(arr[start.charCodeAt(0) - 97] == false){
            arr[start.charCodeAt(0) - 97] = true;
        
            swap(str, i, j);
            permutations(str, i+1);
            swap(str, i, j);
        }
    }
}

let str = ['a', 'b', 'a'];
permutations(str, 0);