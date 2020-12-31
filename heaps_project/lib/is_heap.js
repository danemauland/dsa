// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (idx >= array.length) return true;
    const leftChildIdx = idx * 2;
    const rightChildIdx = idx * 2 + 1;
    const greaterThanChildren = !(array[leftChildIdx] > array[idx]) && !(array[rightChildIdx] > array[idx])
    return greaterThanChildren && isMaxHeap(array, leftChildIdx) && isMaxHeap(array, rightChildIdx);
}


module.exports = {
    isMaxHeap
};