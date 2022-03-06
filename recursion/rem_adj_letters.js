/* Masthan Swamy */

let remAdj = (str, i, j, res)=>{
    if(i>=j) return;

    if(res != ""){
        if(res[res.length-1] == str[i]){
            res = res.splice();
        }
    }else{
        res = res + str[i];
        remAdj(str, i+1, j+1, res);
    }
}