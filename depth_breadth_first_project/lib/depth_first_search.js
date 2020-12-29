function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    if (root.val === targetVal) return root;
    let result = depthFirstSearch(root.left, targetVal);
    return result || depthFirstSearch(root.right, targetVal);
}


module.exports = {
    depthFirstSearch
};