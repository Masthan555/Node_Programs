/* Masthan Swamy */

let j = 0;
let end;
function palindrome(str, i){
    if(i == end){
        return true;
    }

    let res = palindrome(str, ++i);

    if(str[j] == str[i] && res == true){
        j++;
        return true;
    }else{
        j++;
        return false;
    }
}

let str = "MOFMOM";
end = str.length-1;
console.log(palindrome(str, 0));