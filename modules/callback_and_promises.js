/* Masthan Swamy */

function fun(cb, time){
    setTimeout(cb, time);
}

function gun(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        }, time);
    });
}

function dun(){
    console.log("Hello");
}

