const product = [
    { name: "shirt", price: 1600, quantity: 2 },
    { name: "t-shirt", price: 700, quantity: 4 },
    { name: "pant", price: 2000, quantity: 3 },
    { name: "show", price: 1600, quantity: 1 }
]

function getProduct(products) {
    let total = 0;
    for (const product of products) {
        const quantityForPrice =product.price + product.quantity;
        total = total + quantityForPrice;
    }
    return total;
}
const allProduct = getProduct(product);
console.log(allProduct);