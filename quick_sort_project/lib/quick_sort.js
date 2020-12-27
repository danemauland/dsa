function quickSort(array) {
    if (array.length < 2) return array;
    const pivot = array.pop();
    const lessArray = quickSort(array.filter(ele => ele <= pivot));
    const greaterArray = quickSort(array.filter(ele => ele > pivot));
    return [...lessArray, pivot, ...greaterArray];
}


module.exports = {
    quickSort
};