function mathy({ one, two, operation }, { one2, two2, operation2 }) {
  switch (operation) {
    case "add":
      return one + two
    case "sub":
      return one - two
    default:
      return [one, two]
  }
}

console.log(mathy({ one: 12, two: 45, operation: "add", three: 22 }))
