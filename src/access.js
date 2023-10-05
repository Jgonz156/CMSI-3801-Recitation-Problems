//access and visibility
class Person {
  name
  #heartBeat
  #wallet
  constructor(name) {
    this.name = name
    this.#heartBeat = true
    this.#wallet = "loaded"
  }

  eat() {
    console.log("that was some good food")
  }

  buy() {
    this.#wallet = "broke"
  }

  donate(money) {
    this.#wallet = money
  }

  get wallet() {
    return this.#wallet
  }

  set wallet(money) {
    this.#wallet = money
  }
}

let Julian = new Person("Julian")
Julian.buy()
Julian.wallet = "not so broke"
console.log(Julian.wallet)

let a = ["10"]
let b = a
b.push("11")

console.log(a)
