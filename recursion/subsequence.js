/* Masthan Swamy */

function subsequences(str, op){
    if(str == ""){
        console.log(op);
        return;
    }

    let start = str[0];
    str = str.substring(1);
    
    subsequences(str, op+start);
    subsequences(str, op);
}

let str = "abcde";
subsequences(str,"");