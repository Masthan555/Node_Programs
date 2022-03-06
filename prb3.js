/* Masthan Swamy */

process.stdin.resume();
process.stdin.setEncoding('utf8');

var inpString = "";
process.stdin.on('data', (inp) => {
    inpString += inp;
});

var n;
var arr = [];
process.stdin.on('end', () => {
    n = Number(inpString.split("\n")[0]);
    arr = inpString.split("\n")[1].split(" ");

    processArray();
    processOutput();
});

function processArray() {
    for (let i = 0; i < n; i++) {
        arr[i] = (Number(arr[i]));
    }
}

function getDigSum(num) {
    let sum = 0;
    while (num != 0) {
        sum += num % 10;
        num = parseInt(num / 10);
    }
    return sum;
}

function swap(i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function processOutput() {
    let vals = [];

    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            if(getDigSum(arr[i]) < getDigSum(arr[j])){
                swap(arr[i], arr[j]);
            }   
        }
    }

    console.log(arr);

}