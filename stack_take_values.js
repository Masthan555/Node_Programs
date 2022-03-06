/* Masthan Swamy */

process.stdin.resume(); // Begin reading from stdin so the process does not exit.
process.stdin.setEncoding('utf-8'); // this will set allowed character set to be utf-8 

class Stack{
    constructor(){
      this.data = [];
      this.top = 0;
      this.length = 0;
    }
    push(val){
      this.data[this.top] = val;
      this.top++;
    }
    isEmpty(){
      return(this.top == 0)
    }
    pop(){
      if(!this.isEmpty()){
        this.top--;
        return this.data.pop();
      }else{
        return "Stack is empty";
      }
    }
    peek(){
      if(this.isEmpty()) return "Stack is empty";
      return this.data[this.top-1];
    }
  }
  
  console.log("Which operation do you want to do? \n a.Push \n b.Pop \n c.Peek ");
  let stack = new Stack();
  process.stdin.on('data', (inp)=>{
    //   console.log(inp, "input");
      inp = inp.split("\r")[0];
      if(inp == 'a'){
        console.log("Please enter value: ");
      }else if(inp == 'b'){
        console.log(stack.pop());
      }else if(inp == 'c'){
        console.log(stack.peek());
      }else{
        stack.push(inp);
        console.log(inp, " pushed into stack");
      }
  });