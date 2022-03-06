/* Masthan Swamy */

/* Normal Way of filtering array
function filter(arr, filterFunction){
    let newArr = [];

    for(let i=0; i<arr.length; i++){
        if(!filterFunction(arr[i])){
            newArr[newArr.length] = arr[i];
        }
    }

    return newArr;
}

let arr = [0, 1, 2, 3, 'four'];
arr = filter(arr, i => i==undefined || i==null || typeof(i)==typeof('') );
console.log(arr);

arr = [0, '0', '1', '2'];
arr = filter(arr, i => i==null || i== undefined || typeof(i)==typeof(0));
console.log(arr);

*/

// IoC Way of filter function
function filter(arr, {
    filterNull = true,
    filterUndefined = true,
    filterZero = false,
    filterEmptyString = false,
} = {}){

    let newArr = [];
    for(let i=0; i<arr.length; i++){
        const ele = arr[i];

        if(
            (filterNull && ele === null) ||
            (filterUndefined && ele === undefined) ||
            (filterZero && ele === 0) ||
            (filterEmptyString && ele === '')){
                continue;
        }else{
            newArr[newArr.length] = arr[i];
        }
    }

    return newArr;
}

let arr = [0, 1, 2, undefined, 3, null, '', 'one'];

console.log(filter(arr));
console.log(filter(arr, {filterZero : true}));
console.log(filter(arr, {filterZero : true, filterEmptyString:true}));