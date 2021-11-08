let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"],
};

let isExistPizza = true;

function orderPizza(t, func) {
  return new Promise((resv, rej) => {
    if (isExistPizza) {
      setTimeout(() => {
        resv(func());
      }, t);
    } else {
      rej(console.log("nooooooooooo"));
    }
  });
}
orderPizza(2000, () => console.log("yesssssssssss"))
  .then(() => {
    return orderPizza(3000, () => console.log("then area"));
  })

  .catch(() => console.log("this is catch area"));
