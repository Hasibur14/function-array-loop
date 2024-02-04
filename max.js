
const values = [10, 60, 65, 88, 6, 95, 23, 54];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers)
    if(num > max ){
        max = num;
    }
   return max;
}
const maxs = getMax(values);
console.log("Maximum Price: ",maxs);