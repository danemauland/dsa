function breadthFirstArray(root) {
    let i = 0;
    let queue = [root];
    let arr = [];
    for(let i = 0; i < queue.length; i++) {
        const node = queue[i];
        arr.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return arr;
}

module.exports = {
    breadthFirstArray
};