// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


// function buildTree(preorder, inorder) {
//     let preorderPointer = 0;
//     let inorderPointer = 0;
//     const root = new TreeNode(preorder[0]);
//     const leftStack = [root];
//     const rightStack = [];

//     while(leftStack.length) {
//         const node = leftStack.pop();
//         if (node.value !== inorder[inorderPointer]) {
//             leftStack.push(node);
//             const newNode = new TreeNode([preorder[++preorderPointer]]);
//             node.left = newNode;
//             leftStack.push(newNode);
//         } else {
//             if (rightStack.length) {
//                 const oldNode = rightStack.pop();
//                 while (oldNode !== node.left && (oldNode = rightStack.pop())) {}
//                 oldNode.right = node;
//                 rightStack.push(oldNode);
//             }
//             rightStack.push(node);
//             inorderPointer++;
//         }
//     }
// }

// function buildTree(preorder, inorder) {
//     let preorderPointer = 0;
//     let inorderPointer = 0;
//     const root = new TreeNode(preorder[0]);
//     const leftStack = [root];
//     const rightStack = [];

//     while(preorderPointer < preorder.length) {
//         if (leftStack.length) {
//             if (preorder[preorderPointer] === inorder[inorderPointer]) {
//                 const node = leftStack.pop();
//                 // while (node && node.val !== preorder[preorderPointer]) {
//                 //     node = leftStack.pop();
//                 // }

//                 rightStack.pop();
//                 rightStack.push(node);
//             }
//         } else {
//             leftStack.push(new TreeNode(preorder[preorderPointer]))
//         }
//     }
// }

function buildTree(preorder, inorder) {
    if (!preorder.length) return null;
    let preorderPointer = 0;
    let inorderPointer = 0;
    const leftStack = [];
    const rightStack = [];

    while (preorderPointer < preorder.length) {
        let node = new TreeNode(preorder[preorderPointer]);
        if (leftStack.length && !leftStack[leftStack.length - 1].left) {
            leftStack[leftStack.length - 1].left = node;
        } else if (rightStack.length) {
            rightStack[rightStack.length - 1].right = node;
        }
        leftStack.push(node);
        while(node && node.val === inorder[inorderPointer]) {
            if (node.left) {
                while(node.left !== rightStack.pop()) {};
            }
            rightStack.push(leftStack.pop());
            inorderPointer++;
            node = leftStack[leftStack.length - 1];
        }
        preorderPointer++;
    }
    return rightStack[0];
}

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];
console.log(buildTree(preorder, inorder));