class MaxHeap {
    constructor() {
        this.array = [null]
    }

    getParent(idx) {
        return Math.floor(idx / 2)
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    siftUp(idx) {
        let parIdx = this.getParent(idx);
        if (parIdx && this.array[idx] > this.array[parIdx]) {
            [this.array[idx], this.array[parIdx]] = [this.array[parIdx], this.array[idx]];
            this.siftUp(parIdx);
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        const rightChildIdx = this.getRightChild(idx);
        const leftChildIdx = this.getLeftChild(idx);
        const rightChild = this.array[rightChildIdx];
        const leftChild = this.array[leftChildIdx];
        let swapIdx = idx;
        let val = this.array[idx];
        if (val < leftChild) [val, swapIdx] = [leftChild, leftChildIdx];
        if (val < rightChild) [val, swapIdx] = [rightChild, rightChildIdx];
        if (swapIdx !== idx) {
            [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];
            return this.siftDown(swapIdx);
        }
        return idx;
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        const max = this.array[1];
        const val = this.array.pop();
        if (this.array.length === 1) return val;
        this.array[1] = val;
        this.siftDown(1);
        return max;
    }
}

var findKthLargest = function(nums, k) {
    const heap = new MaxHeap();
    for(let num of nums) heap.insert(num);
    for(let i = 1; i < k; i++) {
        heap.deleteMax();
    }
    return heap.array[1];
};