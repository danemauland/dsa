function radixSort(arr) {
    if (!Array.isArray(arr)) return null;
    if (arr.length < 2) return arr;
    const maxLength = getMaxIntegerLength(arr);
    let resultArray = [...arr];
    for (let k = 0; k <= maxLength; k++) {
        const organizerArray = new Array(10).fill().map(() => new Array());
        for (let i = 0; i < resultArray.length; i++) {
            organizerArray[getDigit(resultArray[i], k)].push(resultArray[i]);
        }
        resultArray = [].concat(...organizerArray);
    }
    return resultArray;
}

const getDigit = (n, i) => {
    return Math.floor(n / (10 ** i)) % 10;
}

const getIntegerLength = n => {
    if (n === 0) return 0;
    return Math.floor(Math.log10(n));
}

const getMaxIntegerLength = arr => {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        const length = getIntegerLength(arr[i]);
        if (length > max) max = length;
    }
    return max;
}

module.exports = {
    radixSort
};