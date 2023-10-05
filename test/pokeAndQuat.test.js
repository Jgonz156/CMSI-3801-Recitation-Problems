import { deepEqual, throws } from "assert/strict"
import { pokemonInfo, Quaternion } from "../src/pokeAndQuat.js"

describe("The Pokemon API client", () => {
  it("works for snorlax", async () => {
    const data = await pokemonInfo("snorlax")
    deepEqual(data, { id: 143, name: "snorlax", weight: 4600 })
  })
  it("works for pikachu", async () => {
    const data = await pokemonInfo("pikachu")
    deepEqual(data, { id: 25, name: "pikachu", weight: 60 })
  })
  it("detects error for asdfghjkl", async () => {
    const data = await pokemonInfo("asdfghjkl")
    deepEqual(data, { error: "No information for asdfghjkl" })
  })
  it("defeats attempted URL injection hack", async () => {
    const data = await pokemonInfo("u/ha%e?been=pwned&x=1#x0r")
    deepEqual(data, { error: "No information for u/ha%e?been=pwned&x=1#x0r" })
  })
})

describe("The Quaternion class", () => {
  it("can echo coefficients", () => {
    deepEqual(new Quaternion(8, 5, -3, 1).coefficients(), [8, 5, -3, 1])
    deepEqual(new Quaternion(0, 0, 0, 0).coefficients(), [0, 0, 0, 0])
  })
  it("adds correctly", () => {
    const q1 = new Quaternion(13, 21, -5, -21)
    const q2 = new Quaternion(2, -1, -55, 2.5)
    deepEqual(q1.plus(q2).coefficients(), [15, 20, -60, -18.5])
  })
  it("multiples correctly", () => {
    const q1 = new Quaternion(3, -5, 1, -8)
    const q2 = new Quaternion(2, -13, -2, 3)
    deepEqual(q1.times(q2).coefficients(), [-33, -62, 115, 16])
  })
})
