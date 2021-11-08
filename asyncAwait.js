let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"],
};

let is_Shop_Open = true;

function timer(ms) {
  return new Promise((resolve, reject) => {
    if (is_Shop_Open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log(`sorry we are closed no more servise`));
    }
  });
}

async function kitchen() {
  try {
    await timer(2000);
    console.log(`He/she orderd ${stocks.toppings[0]}`);

    await timer(2000);
    console.log(`cutting of ${stocks.Fruits[0]} is done`);

    await timer(3000);
    console.log(` ${stocks.liquid[0]} and ${stocks.liquid[1]} is added`);

    await timer(3000);
    console.log(` Machine is started`);

    await timer(3000);
    console.log(` ${stocks.holder[1]} is selected`);

    await timer(3000);
    console.log(` serve the ice Cream`);
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("Day over it is 10PM");
  }
}

kitchen();
