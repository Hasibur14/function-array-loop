
const values = [10, 60, 65, 88, 6, 95, 23, 54];
function getMax(numbers) {
    let max =number[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }
    }
}
const maxNum = getMax(values);
console.log(maxNum); 