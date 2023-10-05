import { deepEqual, throws } from "assert/strict"
import { say, makeCryptoFunctions } from "../src/sayAndCrypto.js"

describe("The world-famous say function", () => {
  it("works when there are no words", () => {
    deepEqual(say(), "")
  })

  it("works when there are words", () => {
    deepEqual(say("hi")(), "hi")
    deepEqual(say("hi")("there")(), "hi there")
    deepEqual(
      say("hello")("my")("name")("is")("Colette")(),
      "hello my name is Colette"
    )
  })

  it("handles spaces and empty words", () => {
    deepEqual(say("h i")(), "h i")
    deepEqual(say("hi ")("   there")(), "hi     there")
    deepEqual(say("")("")("dog")("")("go")(), "  dog  go")
  })

  it("handles emojis", () => {
    deepEqual(say("😄🤗")("💀👊🏾")(), "😄🤗 💀👊🏾")
  })
})

describe("The crypto function generator", () => {
  it("works as expected", () => {
    const [e, d] = makeCryptoFunctions({
      forKey: "1jdiekcns783uejdhasdfhcewp90x1sm",
      using: "aes-256-cbc",
      withIV: "m3987dhcbxgs452w",
    })
    deepEqual(
      e("Where is the good stuff?"),
      "a9f51b9f63d4512456d2dcc19333b0e495b90d6846acf37363dc55f57fad4127"
    )
    deepEqual(
      d("a9f51b9f63d4512456d2dcc19333b0e495b90d6846acf37363dc55f57fad4127"),
      "Where is the good stuff?"
    )
  })
})
