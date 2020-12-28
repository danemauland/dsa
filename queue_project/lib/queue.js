// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
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
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val) {
        const node = new Node(val);
        if (this.front) {
            this.back.next = node;
        } else {
            this.front = node;
        }
        this.back = node;
        return ++this.length;
    }

    dequeue() {
        if (!this.front) return null;
        const val = this.front.value;
        this.front = this.front.next;
        if (!this.front) this.back = null;
        this.length--;
        return val;
    }

    size() {
        return this.length;
    }

}

exports.Node = Node;
exports.Queue = Queue;