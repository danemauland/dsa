function treeSum(root) {
    if (root) return root.val + treeSum(root.left) + treeSum(root.right);
    return 0;
}


module.exports = {
    treeSum
};