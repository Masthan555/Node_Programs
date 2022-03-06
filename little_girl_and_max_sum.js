process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString1 = "";
let inputString = "";
let currentLine = 0;

process.stdin.on('data', function (userInput) {
    inputString1 = inputString1 + userInput;
});

process.stdin.on('end', function (x) {
    inputString1.trim();
    inputString = inputString1.split("\n");
    // for(let i = 0; i< inputString1.length ; i++ ) {
    //     inputString += inputString1[i].trim() + ' ';
    // }
    // inputString.trim();
    // inputString = inputString.split(" ");
    main();
});

function readline() {
    let result = inputString[currentLine++];
    return result.trim();
}

function processArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(Number(arr[i]));
    }

    return res;
}

function main() {
    let nq = readline();
    let n = Number(nq.split(" ")[0]);
    let q = Number(nq.split(" ")[0]);

    let vals = processArray(readline().split(" "));

    // Let first mark array with repeating frequency of elements in given queries
    // for n init fqArray with zeros
    let fqArray = [];
    for(let i=0; i<n; i++)
        fqArray.push(0);
  
    for(let i=0; i<q; i++){
        let qs = readline();
        let q1 = Number(qs.split(" ")[0]);
        let q2 = Number(qs.split(" ")[1]);

        console.log(q1, q2);
        fqArray[q1-1]++;
        if(q2<n)
          fqArray[q2]--; 
    }
    // Now make prefix sum to get element freq in the array
    for(let i=1; i<fqArray.length; i++){
        fqArray[i] += fqArray[i-1];
    }
    
    // Now Sort given array and fqArray, So that we can easily assign highest repeated frequency to hoghest number to get maximum sum
    for(let i=0; i<n; i++){
        
    }



}