// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.bottom) (this.bottom = node);
        node.next = this.top;
        this.top = node;
        return ++this.length;
    }

    pop() {
        if (!this.top) return null;
        const oldTop = this.top;
        this.top = this.top.next;
        if (!this.top) this.bottom = null;
        this.length--;
        return oldTop.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
