import { deepEqual, throws } from "assert/strict"
import stretched from "../src/stretched.js"

describe("The stretched function", () => {
  it("stretches okay", () => {
    deepEqual(stretched(""), "")
    deepEqual(stretched("dog house"), "dooggghhhhooooouuuuuussssssseeeeeeee")
    deepEqual(stretched("a        π§"), "aππ§§§")
    deepEqual(stretched("😄🤗 💀"), "😄🤗🤗💀💀💀")
  })
})
