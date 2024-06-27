// for Each
function calculate(data) {
  // your code here
  const { discount, products } = data;
  let totalPrice = 0;

  products.forEach((product) => {
    totalPrice += product.price * (1 - discount);
  });

  return totalPrice;
}

// .reduce
/*function calculate(data) {
  const { discount, products } = data;
  return products.reduce(
    (total, product) => total + product.price * (1 - discount),
    0
  );
}
*/

//for loop
/*function calculate(data) {
  const { discount, products } = data;
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const discounted = product.price * (1 - discount);
    totalPrice += discounted;
  }
  return totalPrice;
}
*/

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});

console.log(discountedPrice); // show the total price of all products after applying a discount
