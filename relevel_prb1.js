/* Masthan Swamy */

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
    let vals = readline();
    vals = processArray(vals);

    let maths = vals[0];
    let physics = vals[1];
    let chemistry = vals[2];
    let total = maths + physics + chemistry;

    if((maths >= 65 && physics >= 55 && chemistry >= 50 ) && (total >= 195 || (maths + physics) >= 140)){
        console.log("Eligible");
    }else{
        console.log("Not eligible");
    }
}