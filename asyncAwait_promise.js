// let isExistPizza = false;

// function orderPizza() {
//   return new Promise((resv, rej) => {
//     if (isExistPizza) {
//       resv("hara hojeta"); //this "hara hojeta" print in then place
//     } else {
//       rej("kun hin hojetu"); //this "kun hin hojetu" print in catch place
//     }
//   });
// }
// orderPizza()
//   .then((resv1) => console.log(resv1))

//   .catch((rej1) => console.log(rej1))
//   .finally(() => console.log("this is final place"));

let isExistPizza = true;

function orderPizza() {
  return new Promise((resv, rej) => {
    if (isExistPizza) {
      resv(); //this "in try box" print
    } else {
      rej(); //this "in catch" print in catch place
    }
  });
}
async function asnync_waitFunc() {
  try {
    await orderPizza();
    console.log("resv1");
  } catch (rej1) {
    console.log("rej1");
  } finally {
    console.log("final place");
  }
}

asnync_waitFunc();
