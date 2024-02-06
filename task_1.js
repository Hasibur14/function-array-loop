/**
 * Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

function findLowestNumber(numbers) {
    let result = numbers[0];
    for (const num of numbers) {
        if (num < result) {
            result = num;
        }
    }
    return result;
}
const heights2 = findLowestNumber([167, 190, 120, 165, 137]);
console.log("The lowest Number is: ", heights2);