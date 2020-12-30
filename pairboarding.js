// You are given an array and a random number generator. Shuffle the array.

const shuffle = arr => {
    for(let i = 0; i < arr.length; i++) {
        const randIndex = Math.floor((Math.random() * arr.length));
        [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
    }
    return arr;
}

// Write a double-ended LinkedList class in JavaScript.

//     You should have a Link class
//         It should keep a reference to next and prev.
//     You should have a LinkedList class
//         It should have first and last methods to return the first/last links in the list, or undefined if the list is empty.
//         It should have push and pop methods.
//         You should write a remove method that takes in a value and removes the first link found with that value.

// Given a linked list of integers and an integer value, delete every node of the linkedlist containing that value. Use JavaScript.

class Link {
    constructor(val) {
        this.next = undefined;
        this.prev = undefined;
        this.val = val;
    }
}

class LinkedList {
    constructor() {
        this.head = undefined;
        this.tail = undefined;
    }

    first() {
        return this.head && this.head.val
    }

    last() {
        return this.tail && this.tail.val
    }

    push(val) {
        const link = new Link(val);
        if (!this.head) this.head = link;
        if (this.tail) this.tail.next = link;
        link.prev = this.tail;
        this.tail = link;
    }

    pop() {
        if (this.head === this.tail) this.head = undefined;
        const link = this.tail;
        if (link) this.tail = this.tail.prev;
        if (this.tail) this.tail.next = undefined;
        return link && link.val;
    }

    remove(val, link = this.head) {
        if (!link) return null;
        while (link.val !== val && (link = link.next)) {}
        if (link) {
            if (this.head === link) {
                this.head = link.next;
            } else {
                link.prev.next = link.next;
            }
            if (this.tail === link) {
                this.tail = link.prev;
            } else {
                link.next.prev = link.prev;
            }
            return link;
        }
        return null;
    }

    removeAll(val) {
        let link = this.head;
        while (link) {
            if (link.val === val) {
                if (this.head === link) {
                    this.head = link.next;
                } else {
                    link.prev.next = link.next;
                }
                if (this.tail === link) {
                    this.tail = link.prev;
                } else {
                    link.next.prev = link.prev;
                }
            }
            link = link.next;
        }
    }

    print() {
        let node = this.head;
        while(node) {console.log(node.val); node = node.next;}
    }
}

const filterLinkedList = (list, val) => {
    let link = list.remove(val);
    while(link && (link = list.remove(val, link.next)));
}

// const a = new LinkedList();
// a.push(1);
// a.push(2);
// a.push(1);
// a.push(4);
// a.push(1);
// a.push(6);
// a.push(1);
// console.log(a.removeAll(1))
// a.print();

// class Link {
//   constructor(value) {
//     this.next = null;
//     this.prev = null;
//     this.value = value;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = new Link();
//     this.tail = new Link();
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
//   }

//     push(val) {
//     const link = new Link(val);
//     let last = this.tail.prev;
//     last.next = link;
//     link.prev = last;
//     link.next = this.tail;
//     this.tail.prev = link;
//   }

//   pop() {
//     if (this.isEmpty()) return;
//     const last = this.last();
//     const newLast = last.prev;

//     newLast.next = this.tail;
//     this.tail.prev = newLast;
//     last.next = null;
//     last.prev = null;
//     return last;
//   }
// }