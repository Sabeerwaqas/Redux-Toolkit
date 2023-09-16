// console.log("We are going to learn redux");

// Creating action

const CAKE_ORDERED = "Cake_Ordered";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
