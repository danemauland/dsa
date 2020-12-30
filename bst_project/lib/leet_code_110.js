// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

function isBalanced(root) {
    if (!root) return true;
    let balanced;
    let leftHeight = -1;
    let rightHeight = -1;
    if (root.left) {
        balanced = isBalanced(root.left);
        leftHeight = root.left.height;
    }
    if (root.right) {
        balanced = isBalanced(root.right) && balanced;
        rightHeight = root.right.height;
    }
    root.height = (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
    return balanced !== false && leftHeight - rightHeight < 2 && rightHeight - leftHeight < 2;
}