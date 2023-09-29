import { deepEqual, throws } from "assert/strict"
import { powers, powersGenerator } from "../src/powersAndGenerators.js"

describe("The powers function", () => {
  it("works as expected", () => {
    const a = []
    powers(2, 1, (x) => a.push(x))
    deepEqual(a, [1])
    powers(-3, 81, (x) => a.push(x))
    deepEqual(a, [1, 1, -3, 9, -27, 81, -243])
  })
})

describe("The powers generator", () => {
  it("works as expected", () => {
    const g1 = powersGenerator(2, 1)
    deepEqual(g1.next(), { value: 1, done: false })
    deepEqual(g1.next(), { value: undefined, done: true })
    const g2 = powersGenerator(3, 100)
    deepEqual(g2.next(), { value: 1, done: false })
    deepEqual(g2.next(), { value: 3, done: false })
    deepEqual(g2.next(), { value: 9, done: false })
    deepEqual(g2.next(), { value: 27, done: false })
    deepEqual(g2.next(), { value: 81, done: false })
    deepEqual(g2.next(), { value: undefined, done: true })
    deepEqual([...powersGenerator(3, 27)], [1, 3, 9, 27])
  })
})
