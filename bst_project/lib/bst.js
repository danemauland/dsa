class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val) {
        const newNode = new TreeNode(val);
        let node = this.root;
        while (node) {
            if (val < node.val) {
                if (!node.left) {
                    node.left = newNode;
                    node = null;
                } else {
                    node = node.left;
                }
            } else {
                if (!node.right) {
                    node.right = newNode;
                    node = null;
                } else {
                    node = node.right;
                }
            }
        }
        if (!this.root) {
            this.root = newNode;
        }
    }

    searchRecur(val, node = this.root) {
        if (!node) return false;

        if (val < node.val) {
            return this.searchRecur(val, node.left);
        } else if (val > node.val) {
            return this.searchRecur(val, node.right);
        } else {
            return true;
        }
    }

    searchIter(val) {
        const i = 0;
        let node = this.root;

        while (node && node.val !== val) {
            if (val < node.val) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return !!node;
    }
}

module.exports = {
    TreeNode,
    BST
};