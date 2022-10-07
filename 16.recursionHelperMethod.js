// Find Odd Number
function findOddNumber(arr) {
    let result = [];

    function helper(input) {
        if (input.length === 0) return;

        if (input[0] % 2 !== 0) {
            result.push(input[0]);
        }

        helper(input.slice(1));
    }

    helper(arr);

    return result;
    // return result.length;
}

console.log(findOddNumber([2, 3, 4, 5, 6, 7, 8, 9, 12, 11, 15, 36, 75]));