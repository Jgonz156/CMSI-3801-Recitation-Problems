function recurseN(n, a) {
  if (n <= 0) return
  console.log(a)
  return recurseN(n - 1, a)
}

recurseN(4, 10)

function curriedN(control, u, f, g) {
  if (control == undefined) return
  else {
    console.log(control)
    return curriedN
  }
}

let x = curriedN(4)(4, 128, 3)(4, 3)()(4)
console.log(x)
