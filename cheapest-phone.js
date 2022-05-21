const phones = [
  { name: "samsung s5", price: 25000, camera: 10, storage: 32 },
  { name: "walton m32", price: 15000, camera: 5, storage: 8 },
  { name: "xiaomi a12", price: 18000, camera: 8, storage: 16 },
  { name: "vivo v3", price: 32000, camera: 12, storage: 64 },
  { name: "nokia n8", price: 74000, camera: 64, storage: 128 },
  { name: "htc h11", price: 45000, camera: 56, storage: 56 },
];

let cheapest = phones[0];
for (const phone of phones) {
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log(cheapest);
