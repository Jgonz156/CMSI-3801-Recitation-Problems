import sleep from "./sleep.js"

async function makePizza() {
  let order = {
    dough: "uncooked",
    toppings: [],
    size: undefined,
    eat: () => {
      console.log("monch")
    },
  }
  //dough size
  await sleep(4000)
  order.size = 10
  console.log("dough ready")

  //add toppings
  await sleep(2000)
  order.toppings.push("pep")
  console.log("pep ready")
  await sleep(1000)
  order.toppings.push("sausage")
  console.log("sasauge ready")
  await sleep(5000)
  order.toppings.push("spinach")
  console.log("spinach ready")

  //cook the pizza
  await sleep(9000)
  order.dough = "cooked"
  console.log("pizza ready")

  return order
}

let pepPizza = makePizza()

pepPizza.then(
  (pizza) => pizza.eat(),
  () => console.log("no pizza")
)

for (let i = 1; i <= 10; i++) {
  await sleep(1000)
  console.log(i)
}
