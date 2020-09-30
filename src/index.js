exports.min = function min(array) {
    let min = 0;
    if (!array || !array.length) return min;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};

exports.max = function max(array) {
    let max = 0;
    if (!array || !array.length) return max;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};

exports.avg = function avg(array) {
    let sum = 0;
    if (!array || !array.length) return sum;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
};
