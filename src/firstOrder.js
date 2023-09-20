let print = console.log

let x = function () {
  return "x"
}

function applyTwice(input, f) {
  return f(f(input))
}

let next = function (n) {
  return n + 1
}

print(applyTwice(10, next))

let listOfEvens = [
  1, 2, 3, 4, 5, 6, 245, 365, 356, 34, 11, 654, 88, 746, 10,
].map(function (num) {
  return num % 2 == 0 ? num : 0
})

print(listOfEvens)
