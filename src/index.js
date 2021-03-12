module.exports = function towelSort(matrix) {
    str = '';
    result = [];

    if (matrix == undefined) return [];

    matrix.forEach(function (item, index, array) {
        (index % 2 == 0) ? str += ', ' + item.join(', '): str += ', ' + item.reverse().join(', ');
    });

    result = str.split(', ');
    result = result.map(item => parseInt(item));
    result.shift();

    return result;
}
