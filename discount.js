/**
 * 1-100---->100
 * 101-200---->85
 * 201-upto---->70 
 */

function discountProduct(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if (quantity <= 200) {
        total = quantity * 85;
        return total;
    }
    else {
        total = quantity * 70;
        return total;
    }
}
const total1 = discountProduct(200);
console.log("Total Price: ",total);
const total2 = discountProduct(100);
console.log("Total Price: ",total);
const total3 = discountProduct(300);
console.log("Total Price: ",total);