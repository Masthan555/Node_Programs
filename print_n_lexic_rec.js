function f(start, n){
    if(start>n){
        return;
    }
    
    // console.log("10*",start);
    console.log(start);
    if(start == 0){
        for(let i=1; i<=9; i++){
            // console.log("10*",start,"+",i, 10*start+i);
            f(10*start+i,n);
        }
    }else{
        for(let i=0; i<=9; i++){
            // console.log("10*",start,"+",i, 10*start+i);
            f(10*start+i,n);
        }
    }
}

f(0,13);