function* allEvenNumbers() {
  let evenNum = 0
  while (true) {
    yield evenNum
    evenNum += 2
  }
}

let gen = allEvenNumbers()
while (true) {
  console.log(gen.next())
}
