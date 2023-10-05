let a = 12
let b = a

const x = [2000]
let y = x
y[0] -= 200

console.log(x)

function mut(list) {
  list.push("rah")
}
mut(y)

console.log(x)
Object.freeze
