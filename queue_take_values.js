/* Masthan Swamy */

class Queue{
    constructor(){
        this.data = [];
        this.front = 0;
    }
    isEmpty(){
        return(this.front == 0);
    }
    enque(val){
        this.data.push(val);
        this.front++;
    }
    deque(){
        this.front--;
    }
}