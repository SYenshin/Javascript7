// --------------------------------------------1--------------------------------------------
// const name = "John";
// const price = 2000;
// const products = {
//   name,
//   price,
//   discount: 20,
//   quantity: 10,

//   getInfo() {
//     let productInfo = [];
//     for (let key of Object.keys(this)) {
//       if (typeof this[key] !== "function") {
//         productInfo.push(this[key]);
//       }
//     }
//     return productInfo;
//   },
//   getFinalPrice() {
//     const discountAmount = (this.price * this.discount) / 100;
//     return this.price - discountAmount;
//   },
//   updateQuantity(amount) {
//     this.quantity += amount;
//     return this.quantity;
//   },
// };
// console.log(products.getInfo());
// console.log(products.getFinalPrice());
// console.log(products.updateQuantity(-3));
// --------------------------------------------2--------------------------------------------
// const orders = [
//   {
//     id: "1",
//     customer: "John",
//     total: 2000,
//     address: {
//       city: "Kyiv",
//       street: "Pushkina",
//     },
//   },
//   {
//     id: "2",
//     customer: "Den",
//     total: 3000,
//     address: {
//       city: "Kyiv",
//       street: "Pushkina",
//     },
//   },
//   {
//     id: "3",
//     customer: "Bill",
//     total: 4000,
//     address: {
//       city: "Kyiv",
//       street: "Pushkina",
//     },
//   },
// ];
// for (const order of orders) {
//   console.log(
//     order.id,
//     order.customer,
//     order.total,
//     order.address.city,
//     order.address.street,
//   );
// }
// for (const {
//   id,
//   customer,
//   total,
//   address: { city, street },
// } of orders) {
//   console.log(id);
//   console.log(customer);
//   console.log(total);
//   console.log(city);
//   console.log(street);
// }
// const {
//   id,
//   customer,
//   address: { city, street },
// } = orders[0];
// console.log(id);
// console.log(customer);
// console.log(city);
// console.log(street);
// console.log(Object.keys(orders[0]));
// console.log(Object.values(orders[0]));
// console.log(Object.entries(orders[0]));
// --------------------------------------------3--------------------------------------------
// // Створюємо об'єкт який в подальшому буде прототипом.
// const vehicle = {
//   wheels: 2,
//   isAvailable: true,
// };
// // Використовуємо об'єкт vehicle як прототип для створення об'єкту motorcycle.
// const motorcycle = Object.create(vehicle);
// // Додаємо 2 властивості Brand i Model до об'єкту motorcycle.
// motorcycle.brand = "Honda";
// motorcycle.model = "CBR";
// // Циклом for in перебираємо ключі об'єкту та фільтруємо за умовою motorcycle.hasOwnProperty(key) після чого виводимо в консоль;
// for (const key in motorcycle) {
//   if (motorcycle.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
// // Додаємо ключ serialNumber зі значенням 'SN-101', та змінюємо дисктріптори
// Object.defineProperty(motorcycle, "serialNumber", {
//   value: "SN-101",
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });
// // Виводимо в консоль всі властивості та їх дескріптори
// console.log(Object.getOwnPropertyDescriptors(motorcycle));
// // Виводимо власні ключі motorcycle
// console.log(Object.keys(motorcycle));
