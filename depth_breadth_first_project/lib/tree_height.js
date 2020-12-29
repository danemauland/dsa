function treeHeight(root) {
    if (root) return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
    return -1;
}


module.exports = {
    treeHeight
};