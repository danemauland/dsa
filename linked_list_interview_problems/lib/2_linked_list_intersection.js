// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.
//
// ---------- 
// Example 1:
// ----------
// 
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1,list2) should return D 
// as the node of intersection.
// 
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ---------- 
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1, list2) should return null 
// as there is no point of intersection.
// 
//    A → B → C → D
//
//    X → Y → Z
// 
// -----------
// Let's code!
// -----------
// function linkedListIntersection(list1, list2) {
//   // TODO: Implement the hasCycle function!
//   const [smallList, longList] = (list1.length < list2.length) ? 
//     [list1, list2] : [list2, list1];
//   const nodesSeen = new Set();
//   let node = smallList.head;
//   while(node) {
//     nodesSeen.add(node);
//     node = node.next;
//   }
//   node = longList.head;
//   while(node) {
//     if (nodesSeen.has(node)) return node;
//     node = node.next;
//   }
//   return null;
// }

function linkedListIntersection(list1, list2) {
  // TODO: Implement the hasCycle function!
  let diff = getLength(list1) - getLength(list2);
  const [shortList, longList] = (diff < 0) ? (diff *= -1) && [list1, list2] : [list2, list1];
  
  let shortNode = shortList.head;
  let longNode = longList.head;

  console.log(shortList.length);
  console.log(longList.length);

  for(let i = 0; i < diff; i++) {
    longNode = longNode.next;
  }
  
  while(longNode && shortNode) {
    if (longNode === shortNode) return longNode;
    [longNode, shortNode] = [longNode.next, shortNode.next]
  }
  return null;
}

const getLength = list => {
  length = 0;
  let node = list.head;
  while (node) {
    length++;
    node = node.next;
  }
  return length;
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
