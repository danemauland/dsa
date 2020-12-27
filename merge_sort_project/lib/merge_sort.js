function merge(array1, array2) {
    const merged = [];

    let index1 = 0;
    let index2 = 0;
    while (array1.length > index1 && array2.length > index2) {
        if (array1[index1] < array2[index2]) {
            merged.push(array1[index1]);
            index1++
        } else {
            merged.push(array2[index2]);
            index2++
        }
    }

    for(index1; index1 < array1.length; index1++) {
        merged.push(array1[index1]);
    }

    for(index1; index2 < array2.length; index2++) {
        merged.push(array2[index2]);
    }

    return merged;
}

function mergeSort(array) {
    if (array.length < 2) return array;
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    const leftSortedArray = mergeSort(left);
    const rightSortedArray = mergeSort(right);
    return merge(leftSortedArray, rightSortedArray);
}

module.exports = {
    merge,
    mergeSort
};