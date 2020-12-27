// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const node = new Node(val);
        if (this.length) {
            this.tail.next = node;
        } else {
            this.head = node;
        }
        this.tail = node;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        let tail = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let node = this.head;
            while(node.next !== this.tail) {
                node = node.next;
            }
            node.next = null;
            this.tail = node;
        }
        this.length--;
        return tail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const node = new Node(val);
        if (this.length) {
            node.next = this.head;
        } else {
            this.tail = node;
        }
        this.head = node;
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;
        let head = this.head;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.length--;
        return head;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;
        while(node) {
            if (node.value === target) return true;
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let node = this.head;
        while (index) {
            node = node.next;
            index--;
        }
        return node;
    }

    // TODO: Implement the set method here
    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.value = val;
        }
        return !!node;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false; // should be just >?
        if (!index) return !!this.addToHead(val);
        // if (index.length === this.length) return !!this.addToTail(val); // should be commented in?

        let nodeBefore = this.get(index - 1);
        let node = new Node(val);
        node.next = nodeBefore.next;
        nodeBefore.next = node;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        let nodeBefore = this.get(index - 1);
        let node = nodeBefore.next;
        nodeBefore.next = node.next;
        this.length--;
        return node;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
