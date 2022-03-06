/* Masthan Swamy */

function fact(n){
    if(n==1) return 1;

    return n*fact(n-1);
}

function pascal(n, r){
    if(n == 0 && r ==0){
        return 1;
    }
    if(n<0 || r<0){
        return 0;
    }

    return( pascal(n-1, r-1) + pascal(n-1, r) );
}

console.log(pascal(3,3));