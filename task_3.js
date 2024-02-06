/** Task-3:
 * Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */
function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    let totalPrice = 0;
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const laptopQuantityWithPrice = 35000 * laptopQuantity;
    const tabletQuantityWithPrice = 15000 * tabletQuantity;
    const mobileQuantityWithPrice = 20000 * mobileQuantity;

    totalPrice =laptopQuantityWithPrice + tabletQuantityWithPrice +  mobileQuantityWithPrice;
    return totalPrice;
}
const budgetQuantity = calculateElectronicsBudget(1, 1, 1);
console.log(budgetQuantity);