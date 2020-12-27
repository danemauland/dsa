function binarySearch(array, target) {
    return array[binarySearchIndex(array,target)] > -1
}

function binarySearchIndex(array, target) {
    let startIndex = 0;
    let endIndex = array.length;
    while (true) {
        if (startIndex === endIndex) return -1;
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        if (array[midIndex] < target) {
            startIndex = midIndex + 1;
        } else if (array[midIndex] > target) {
            endIndex = midIndex;
        } else {
            return midIndex;
        }
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};