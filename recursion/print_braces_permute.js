/* Masthan Swamy */

function printBraces(open, close, str){
    if(open == 0 && close == 0){
        console.log("RESULT: ", str);
        return;
    }

    if(open > 0){
        // console.log("OPEN: ", open-1, close, str + "(");
        printBraces(open-1, close, str + "(");
    }
    if(open < close){
        // console.log("CLOSE: ", open, close-1, str + ")");
        printBraces(open, close-1, str + ")");
    }
}

let n = 5;
printBraces(n, n, "");