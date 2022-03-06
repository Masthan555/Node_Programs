/* Masthan Swamy */

function getNumbers(i, j, n, arr){
    if((i+j) >= n){
        arr.push(i, j);
        return;
    }

    arr.push(i, j);
    getNumbers(i + j, j + (i+j), n, arr );
}
let combs = new Set();

function getCombinationCount(n, k, arr, str){
    if(n == 0 && k==0){
        combs.add(str.split("").sort().join(""));
        return;
    }
    if(k==0){
        return;
    }

    // console.log(n, k, arr, str);
    for(let i=0; i<arr.length; i++){
        getCombinationCount(n-arr[i], k-1, arr, str + arr[i]);
    }
}

function chefmath(){
    let n = 13, k = 3;
    let arr = [];
    getNumbers(1, 2, n, arr);

    getCombinationCount(n, k, arr, "");
    console.log(combs.size);
}

process.stdin.resume(); // Begin reading from stdin so the process does not exit.
process.stdin.setEncoding('utf-8'); // this will set allowed character set to be utf-8 
 
let inputString = ""; // this will store the complete input in stdin and we will later process the input
let currentLine = 0; // this will maintain the current line of input that we are considering
 
process.stdin.on('data', function (userInput) { // it will be executed when user gives an input
    inputString = inputString + userInput; // 
});
 
process.stdin.on('end', function() { // ctrl + d -> as soon as stdin stops taking input , the end event hits
    inputString.trim(); // remove the leading spaces
    inputString = inputString.split("\n"); // return an array of strings where each index stores each line of input
    processOutput(); // main logic
});
 
function readline() { // read a new line input from the array
    let result = inputString[currentLine];
    currentLine = currentLine + 1;
    return result;
}
 
function processArray(arr) { // '1 2 3 4'
    let temp = arr.split(" "); // ['1', '2', '3', '4']
    let result = []; // new result array
    for(let i = 0; i < temp.length; i++) {
        result.push(Number(temp[i])); // [] -> [1] -> [1,2] -> [1,2,3] -> [1,2,3,4]
     }
    return result; //[1,2,3,4]
}
 
function processOutput() {
    // to be modified based on question
    let t = Number(readline()); // 1
    while(t > 0) {
        let vals = readline();
        let n = Number(vals.split(" ")[0]);
        let k = Number(vals.split(" ")[1]);
        
        let arr = [];
        getNumbers(1, 2, n, arr);
        getCombinationCount(n, k, arr, "");
        console.log(combs.size);
        combs.clear();

        t = t - 1;
    }
}