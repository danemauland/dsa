// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 


function sortedArrayToBST(nums, start = 0, end = nums.length) {
    if (start === end) return null;
    let mid = Math.floor((start + end) / 2);
    return new TreeNode(nums[mid], sortedArrayToBST(nums, start, mid), sortedArrayToBST(nums, mid + 1, end));
}

console.log(sortedArrayToBST([-10,-3,0,5,9]))