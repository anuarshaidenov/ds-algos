class Stack {
  constructor() {
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value);
    return this;
  }

  pop() {
    this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();

console.log(myStack.peek());
