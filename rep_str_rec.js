/* Masthan Swamy */

var str = "abpicppic";
function m(i){

    if(i==str.length){
        return;
    }

    let temp = str[i] + str[i+1];
    // console.log(temp);
    if(temp == "pi")
        str = str.substring(0,i) + 3.14 + str.substring(i+2);
    m(i+1);
}
m(0);

console.log(str);