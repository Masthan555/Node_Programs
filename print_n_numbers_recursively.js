function num(n){
    if(n == 1){
        console.log(n);
        return n;
    } 

    console.log(n);
    num(n-1)
    
}

num(5);