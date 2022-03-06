/* Masthan Swamy */

function rangeIterator(begin = 0, end = Infinity, step = 1){
    let nextIndex = begin;
    let iterationCount = 0;

    const iterator = {
        next: ()=>{
            let res;
            if(nextIndex<end){
                res = {value: nextIndex, done:false};
                nextIndex += step;
                iterationCount++;
                
                return res;
            }

            return {value: iterationCount, done: true};
        }
    }

    return iterator;
}

let iterator = rangeIterator(1, 20, 3);
let res = iterator.next();
while(!res.done){
    console.log(res.value);
    res = iterator.next();
}