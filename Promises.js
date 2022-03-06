/* Masthan Swamy */

// In promises we can do any asynchronous operation, Once it is executed, it will call related success and error callbacks

let myProm = new Promise((resolve, reject)=>{

    let x = 10;

    if(x>1){
        resolve("Natural Number");
    }else{
        reject("Negative Number");
    }
});

function res(res){
    return res;
}

myProm.then((result)=>{
    return res(result).then((res)=>{
        console.log(res);
    });
},(error)=>{
    console.log(error);
})