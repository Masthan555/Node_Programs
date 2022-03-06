/* Masthan 00000 */

const demo1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Time Completed");
    }, 2000);
});

demo1.then((res)=>{
    console.log(res);
    return "First then complted";
}, (err)=>{
    console.log("Error occurred", err);
}).then((res1)=>{
    console.log("Second Then: ", res1);
});