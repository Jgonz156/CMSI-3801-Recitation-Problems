const functionMaker = () => {
  let choice = Math.floor(Math.random() * 10)
  let newFunc = null
  let a = 5
  let b = 9
  switch (choice) {
    case 1:
      newFunc = () => a + b
      break
    case 2:
      newFunc = () => a - b
      break
    case 3:
      newFunc = () => a * b
      break
    default:
      newFunc = () => a / b
  }
  return newFunc
}

let mystery = functionMaker()
console.log(mystery())

function a() {
  return 1
  console.log()
}
