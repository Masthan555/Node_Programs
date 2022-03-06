/* Masthan Swamy */

function binaryString(n, i, str){
    if(i == n){
        console.log(str);
        return;
    }
    if(i>n) return;

    if(str[str.length-1] == "0"){
        binaryString(n, i+1, str + "0");
        binaryString(n, i+1, str + "1");
    }else if(str[str.length-1] == "1"){
        binaryString(n, i+1, str + "0");
        // binaryString(n, i+2, str + "01");
    }
}

let n = 4;
let i = 1;
binaryString(n, i, "0");
binaryString(n, i, "1");