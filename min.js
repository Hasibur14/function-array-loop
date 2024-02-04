const price = [20000, 30000, 50000,12000,75000,25000]

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers)
    if(num < min ){
        min = num;
    }
   return min;
}
const mins = getMin(price);
console.log("Minimum Price: ",mins);