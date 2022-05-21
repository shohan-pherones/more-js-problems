const products = [
  { name: "laptop", price: 45000, quantity: 1 },
  { name: "shirt", price: 1200, quantity: 10 },
  { name: "watch", price: 1800, quantity: 2 },
  { name: "phone", price: 34000, quantity: 1 },
];

let totalPrice = 0;
for (const product of products) {
  totalPrice = totalPrice + product.price * product.quantity;
}

console.log(totalPrice);
