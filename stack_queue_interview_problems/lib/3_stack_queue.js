// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val.value);

        if (!this.bottom) {
            this.bottom = node;
        }

        node.next = this.top;
        this.top = node;
        return ++this.length;
    }

    pop() {
        if (!this.top) return null;
        if (!--this.length) this.bottom = null;

        const node = this.top;

        this.top = node.next;

        return node;
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(val) {
        const node = new Node(val);
        if (!this.front) {
            this.front = node
        } else {
            this.back.next = node;
        }
        this.back = node;
        this.inStack.push(this.back);
        return this.size();
    }

    dequeue() {
        if (!this.front) return null;
        let node;
        if (!this.outStack.size()) {
            while(node = this.inStack.pop()) {
                this.outStack.push(node);
            }
        }
        node = this.outStack.pop();
        if (!this.outStack.size()) this.back = null;
        this.front = node.next;
        return node;
    }

    size() {
        return this.inStack.size() + this.outStack.size();
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
