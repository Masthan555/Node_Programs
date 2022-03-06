/* Masthan Swamy */

// It is the Range iterator, But implemented internally by JS for us.
// generators will have function"*"
// In Generator yield is used, to pause execution of func
// and when next() is called, it will resume execution
function* rangeIterator(begin = 0, end = Infinity, step = 1){
    let iteratorCount = 0;

    for(let i = begin; i < end; i += step){
        iteratorCount++;
        yield i; // It will pause execution here, until next() called on it.
    }

    return iteratorCount;
}

let iterator = rangeIterator(0, 50, 5);

let res = iterator.next();

while(!res.done){
    console.log(res.value);
    res = iterator.next();
}