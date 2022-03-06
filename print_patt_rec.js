// Masthan Swamy

function f(str, j){

    if(j == str.length-1){
        // console.log(str);
        return;
    }

    for(let i=j; i<str.length; i++){
        swap(str, i, j);
        
        f(str, j+1);
        console.log(str, i, j);
        swap(str, i, j);
    }
}

function swap(str, m, n){
    let temp = str[m];
    str[m] = str[n];
    str[n] = temp;

    return str;
}

let str = ['a', 'b', 'c'];
f(str, 0);