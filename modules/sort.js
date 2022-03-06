let linearFunction = function linearFunction(arr, n){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == n)
            return i;
    }
    return NaN;
}

module.exports = {linearFunction};