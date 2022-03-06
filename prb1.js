/* Masthan Swamy */

process.stdin.resume();
process.stdin.setEncoding('utf8');

var inpString = "";
process.stdin.on('data',(inp)=>{
    inpString += inp;
});

var n;
var arr = [];
process.stdin.on('end',()=>{
    n = Number(inpString.split("\n")[0]);
    arr = inpString.split("\n")[1].split(" ");

    processArray();
    processOutput();
});

function processArray(){
    for(let i=0; i<n; i++){
        arr[i] = (Number(arr[i]));
    }
}

function getDigSum(num){
  let sum = 0;
  while(num!=0){
    sum += num%10;
    num = parseInt(num/10);
  }
  
  return sum;
}

function processOutput(){
  
    let i=0;
    let j=1;
    let cntrs = [];
    
    let cntr = 1;
    while(j<n){
        if(getDigSum(arr[i]) == getDigSum(arr[j])){
          // console.log(i, j, "1", cntrs);
          j++;
        }else{
          cntrs.push(j-i);
          // console.log(i, j, "2", cntrs);
          i=j;
          j++;
        }
        
        if(j==n){
          cntrs.push(j-i);
        }
    }
    
    let max = cntrs[0];
    for(let i=1; i<cntrs.length; i++){
      if(max<cntrs[i])
        max = cntrs[i];
    }
    
    console.log(max);
}