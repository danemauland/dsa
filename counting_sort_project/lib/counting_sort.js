function countingSort(arr, max) {
    if (arr.length < 2) return arr;
    const countArray = new Array(max + 1).fill(0);
    arr.forEach(ele => {
        countArray[ele]++;
    })
    const returnArray = [];
    for(let i = 0; i < max + 1; i++) {
        if (countArray[i]) {
            for(let j = 0; j < countArray[i]; j++) {
                returnArray.push(i);
            }
        }
    }
    return returnArray;
}


module.exports = {
    countingSort
};