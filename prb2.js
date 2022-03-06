/* Masthan Swamy */

process.stdin.resume();
process.stdin.setEncoding('utf8');

var inpString = "";
var inpVals = [];
process.stdin.on('data',(inp)=>{
    inpString += inp;
});

process.stdin.on('end',()=>{
    inpString = inpString.trim();
    inpVals = inpString.split("\n");

    processOutput();
});

let cindx = 0;
function readLine(){
    let res = inpVals[cindx];
    cindx++;
    return res;
    
}

function getFreqArr(str){
  let arr = Array(26).fill(0);
  
  for(let i=0; i<str.length; i++){
    arr[str[i].charCodeAt(0)-97]++; 
  }
  
  return arr;
}

function processOutput(){
    let t = Number(readLine());
    for(let i=0; i<t; i++){
        let n = Number(readLine());
        let fr1 = getFreqArr(readLine());
        let fr2 = getFreqArr(readLine());
        
        let flag = true;
        for(let j=0; j<26; j++){
          if(fr1[j] != fr2[j]){
            flag = false;
            break;
          }
        }
        
        if(flag)
          console.log("Best Friends");
        else
          console.log("Not Friends");
    }
}