/* Masthan Swamy */

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputVal = "";
process.stdin.on('data', (input)=>{
    inputVal += input;
});

process.stdin.on('end', function(){
    inputVal = inputVal.trim();
    inputVal = inputVal.split(" ");
    inputVal = convArray(inputVal);
    start();
});

let curIdx = 0;
function nextEle(){
    let temp = inputVal[curIdx];
    curIdx++;
    return temp;
}
function nextArray(n){
    let res = [];
    let j=0;
    
    for(i=curIdx; i<(n+curIdx); i++, j++){
        res[j] = inputVal[i];
    }
    curIdx = i;
    return res;
}

function convArray(vals){
    for(let i=0; i<vals.length; i++){
        vals[i] = Number(vals[i]);
    }
    return vals;
}

function processArray(arr){
    let res = [];
    for(let i=0; i<arr.length; i++){
        res[i] = Number(arr[i]);
    }

    return res;
}

function findMissing(n, arr){
    for(let i=0; i<n; i++){
        let temp = arr[i]<0?arr[i]*-1:arr[i];
        if(temp<n && arr[temp]>0)
          arr[temp] = arr[temp] * -1;
        
        // console.log(temp, arr[temp], arr);
    }
    // console.log(arr);
    let op=0;
    for(let i=1; i<n; i++){
        if(arr[i]>=0){
            op = i;
            break;
        }
    }

    return op;
}

function start(){
    let t = Number(nextEle());
    let res = "";
    for(let i=0; i<t; i++){
        let n = Number(nextEle());
        let arr = nextArray(n);

        res = res + findMissing(n, arr) + " "; 
    }
    res = res.trim();
    console.log(res);
}