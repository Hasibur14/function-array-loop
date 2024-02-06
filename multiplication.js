/**
 * Java book = 550 taka
 * JavaScript book =598 taka
 * Python book = 580 taka
 * calculate the book price with Quantity.....
 */
function bookQuantity(javaQuantity, javaScriptQuantity, pythonQuantity) {
  const perJavaBookPrice = 550;
  const perJavaScriptBookPrice = 598;
  const perPythonBookPrice = 500;

  const javaBookPrice = perJavaBookPrice * javaQuantity;
  const javaScriptBookPrice = perJavaScriptBookPrice * javaScriptQuantity;
  const PythonBookPrice = perPythonBookPrice * pythonQuantity;

  const totalBookPrice = javaBookPrice + javaScriptBookPrice + PythonBookPrice;
  return totalBookPrice;
}
const book = bookQuantity(2, 3, 1);
console.log("All Book Price: ", book); 