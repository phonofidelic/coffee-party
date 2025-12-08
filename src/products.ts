import { products } from "./products.json";

const coffeeMachines = products.filter(
  (product) => product.category == "Coffee Machine"
);
console.log("coffeeMachines", coffeeMachines);
