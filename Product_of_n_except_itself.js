/* Masthan Swamy */

function get_product(arr){
    let totalProduct = arr[0];
    let zeroCount = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i] != 0){
            console.log(totalProduct, arr[i]);
            totalProduct = totalProduct * arr[i];
        }
        else
            zeroCount++;
    }

    // console.log(totalProduct);
    let res = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!=0 && zeroCount>=1)
            res.push(0);
        else if(arr[i] == 0){
            if(zeroCount>1)
                res.push(0);
            else
                res.push(totalProduct);
        }
           
        else
            res.push(parseInt(totalProduct/arr[i]));
    }

    return res;
}

// let arr = [1, 2, 3, 4];
let arr = [-1, 1, 0, -3, 3];

console.log(get_product(arr));