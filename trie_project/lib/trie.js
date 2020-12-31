class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node("");
    }

    insertRecur(word, idx = 0, node = this.root) {
        const char = word[idx];
        if (!(char in node.children)) {
            node.children[char] = new Node();
        }
        if (idx === word.length - 1) {
            node.children[char].isTerminal = true;
            return;
        }
        this.insertRecur(word, idx + 1, node.children[char]);
    }

    insertIter(word) {
        let node = this.root;
        for(let char of word) {
            if (!(char in node.children)) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isTerminal = true;
    }

    searchRecur(word, idx = 0, node = this.root) {
        const char = word[idx];
        node = node.children[char];
        if (!node) return false;
        if (idx === word.length - 1) return node.isTerminal;
        return this.searchRecur(word, idx + 1, node);
    }

    searchIter(word) {
        let node = this.root;
        for(let char of word) {
            node = node.children[char];
            if (!node) return false;
        }
        return node.isTerminal;
    }

    wordsWithPrefix(prefix) {
        let node = this.root;
        for(let char of prefix) {
            node = node.children[char];
            if(!node) return [];
        }
        return this.wordsFromNode(node, prefix);
    }

    wordsFromNode(node, prefix) {
        const words = [];
        if (node.isTerminal) words.push(prefix);
        for(let char in node.children) {
            const child = node.children[char];
            const childWords = this.wordsFromNode(child, prefix + char);
            for(let word of childWords) words.push(word);
        }
        return words;
    }
}

module.exports = {
    Node,
    Trie
};